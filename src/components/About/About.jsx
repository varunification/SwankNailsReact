import React from 'react'
import Pooja from './Pooja.jpg';

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 ">
                      <img
                          src={Pooja}
                          alt="image"
                          className='rounded-full'
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Mind behind the brand:
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Pooja Aggarwal, the lady behind Swanky Nails is a thorough professional. With a dream to make luxury nails reachable and affordable to every lady, she is delivering premium polished nails to customers enhancing their personality and confidence as it is the most beautiful thing a lady can wear.
                      </p>
                    
                  </div>
              </div>
          </div>
      </div>
  );
}