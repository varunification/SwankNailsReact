import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
           
           <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-full" src="https://i.imgur.com/95Iu89s.jpg" alt="image1" />
                </div>
                <div className="relative z-10 max-w-screen-xl px-4  pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-orange-700">
                           Swanky Nails
                            <span className="hidden sm:block text-3xl text-orange-500">your one in all beauty</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="product"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; view our products
                        </Link>
                    </div>
                </div>

                
           

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center sm:mt-20 relative">
    <div>
        <img className="w-36 sm:w-96" src="https://i.imgur.com/7afPAGW.jpg" alt="image2" />
        <span className="text-1xl text-white">Variety of Ladies Gel nails, Mani, Pedis, Extensions, Nail art, Nail filing</span>
    </div>
    <div>
        <img className="w-36 sm:w-96" src="https://i.imgur.com/S6hs2mu.jpg" alt="image2" />
        <span className="text-1xl text-white">Trained Nail technician to serve you to the best satisfaction level.</span>
    </div>
    <div>
        <img className="w-36 sm:w-96" src="https://i.imgur.com/u5diL0f.jpg" alt="image2" />
        <span className="text-1xl text-white">Premium products like Shellac, O.P.I etc.</span>
    </div>
</div>


            <h1 className=" text-center text-2xl sm:text-5xl py-10 font-medium w-100"></h1>
        </div>
    );
}