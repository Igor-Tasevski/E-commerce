import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './Routes/HomePage'
import Layout from './Routes/Layout'
import LoginPage from './Routes/LoginPage'
import ProductsByIDPage from './Routes/ProductsByIDPage'
import Products from './Routes/Products'
import Aboutus from './Routes/Aboutus'
import Contact from './Routes/Contact'
import Promotions from './Routes/Promotions'
import RouteGuard from './Routes/RouteGuard'
import CartPage from './Routes/CartPage'
import { Provider } from 'react-redux';//for redux needed
import { store } from './Store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<RouteGuard> <HomePage /> </RouteGuard>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<RouteGuard> <Products /></RouteGuard>} />
            <Route path="/products/:id" element={<RouteGuard><ProductsByIDPage /></RouteGuard>} />
            <Route path="/about" element={<RouteGuard><Aboutus /></RouteGuard>} />
            <Route path="/contact" element={<RouteGuard><Contact /></RouteGuard>} />
            <Route path="/promotions" element={<RouteGuard><Promotions /></RouteGuard>} />
            <Route path="/cart" element={<RouteGuard><CartPage /></RouteGuard>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
