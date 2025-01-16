import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     items: [],
     TotalQuantity: 0,
     TotalAmount: 0,

};


export const basketSlice = createSlice({
     name: 'basket',
     initialState,
     reducers: {
          addToBasket: (state, action) => {
               //state.items = [...state.items, action.payload];
               //},

               const itemIndex = state.items.findIndex(
                    (item) => item.id === action.payload.id
               );
               if (itemIndex >= 0) {
                    state.items[itemIndex].cartQuantity += 1
               } else {
                    const tempProduct = { ...action.payload, cartQuantity: 1 }
                    state.items.push(tempProduct);
                    console.log(tempProduct)
                    
               };
          },




          removeFromBasket: (state, action) => {
               const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id);
               let newBasket = [...state.items]

               if (index >= 0) {
                    newBasket.splice(index, 1)
               } else {
                    console.error(`Cant remove product (id: ${action.payload.id})`)
               }
               state.items = newBasket;
          },



          decreaseFromBasket(state, action) {
               const itemIndex = state.items.findIndex(
                    (item) => item.id === action.payload.id
               );

               if (state.items[itemIndex].cartQuantity > 1) {
                    state.items[itemIndex].cartQuantity -= 1;


               } else if (state.items[itemIndex].cartQuantity === 1) {
                    const next_items = state.items.filter(
                         (item) => item.id !== action.payload.id
                    );

                    state.items = next_items;


               }


          },

          getTotals(state, action) {
               let { total, quantity } = state.items.reduce(
                    (Total, Item) => {
                         const { price, cartQuantity } = Item;
                         const itemTotal = price * cartQuantity;
     
                         Total.total += itemTotal;
                         Total.quantity += cartQuantity;
     
                         return Total;
                    },
                    {
                         total: 0,
                         quantity: 0,
                    }
               );
               total = parseFloat(total.toFixed(2));
               state.TotalQuantity = quantity;
               state.TotalAmount = total;
          },
     
     


     }

     


});

export const { addToBasket, removeFromBasket, decreaseFromBasket,getTotals } = basketSlice.actions;

//export const selectTotal = (state) =>
     //state.basket.items.reduce((total, item) => total + item.price, 0);//for The total value


    


export default basketSlice.reducer;