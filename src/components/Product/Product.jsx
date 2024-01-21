import React from 'react'
import { Link } from 'react-router-dom';

const Products =[
{
    id:1,
    title:"Gel Nail paint both hands at just Rs. 499/-",
    image: "https://i.imgur.com/LqJU60v.jpg",

},
{
    id:2,
    title:"Acrylic/Gel extensions both hands at Just Rs 1299/- (with gel paint)",
    image:""
}

]



export default function Product() {
    return (
        <div className="mx-auto w-full max-w-7xl ">
            

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}