import React from 'react'
import { HomeIcon, EnvelopeIcon ,PhoneIcon} from '@heroicons/react/24/outline'

export const Footer = () => {
    return (


        <footer className=' bg-gray-300'>


            {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
            <div className="mx-6 py-10 text-center md:text-left ">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* <!-- Купување --> */}
                    <div className="">
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            Купување
                        </h6>

                        <ul className="mb-0 list-none">
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-orange-400 " href="https://ananas.mk/cesto-postavuvani-prasanja-cpp"
                                >Често поставувани прашања</a>
                            </li>
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-orange-400" href="https://ananas.mk/instrukcii-za-onlajn-kupuvanje"
                                >Инструкции за онлајн купување</a>
                            </li>
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-orange-400" href="https://ananas.mk/isporaka"
                                >Испорака на производи и начин на плаќање</a>
                            </li>
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-orange-400" href="https://ananas.mk/opsti-uslovi-za-kupuvanje"
                                >Општи услови за купување</a>
                            </li>
                        </ul>


                    </div>
                    {/* <!-- Секција за продукти --> */}
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Приватност
                        </h6>
                        <ul className="mb-0 list-none">
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-orange-400 " href="https://ananas.mk/politika-za-privatnost"
                                >Политика за приватност</a>
                            </li>
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-orange-400" href="https://ananas.mk/politika-za-kolacinja"
                                >Политика за колачиња</a>
                            </li>

                        </ul>
                    </div>
                    {/* <!-- Останати линкови  --> */}
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Запознај го Ананас
                        </h6>
                        <ul className="mb-0 list-none">
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-orange-400 " href="https://ananas.mk/za-nas"
                                >За ананас </a>
                            </li>
                            <li>
                                <a className="text-neutral-800 dark:text-neutral-200 cursor-pointer hover:text-orange-400" href="https://ananas.mk/promo/ananas-plus"
                                >Ананас + клуб</a>
                            </li>

                        </ul>
                    </div>
                    {/* <!-- Contact section --> */}
                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Контакт
                        </h6>
                        <span className="mb-4 flex items-center justify-center md:justify-start">
                            <HomeIcon className='h-4 w-4 text-gray-600' />Јадранска магистрала 1000 Скопје

                        </span>

                        <span className="mb-4 flex items-center justify-center md:justify-start">

                            <EnvelopeIcon className='h-4 w-4 text-gray-600' />  info@ananas.com
                        </span>
                        <span className="mb-4 flex items-center justify-center md:justify-start">
                           
                            <PhoneIcon className = "h-4 w-4 text-gray-600"/>0800-44400
                        </span>
                        
                    </div>
                </div>
            </div>










        </footer >


    )
}
