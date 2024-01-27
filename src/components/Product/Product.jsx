import React from 'react'
import { Link } from 'react-router-dom';
import Item from './Item'
const Products =[
{
    id:1,
    title:"Gel Nail paint both hands at just Rs. 499/-",
    image: "https://i.imgur.com/LqJU60v.jpg",

},
{
    id:2,
    title:"Acrylic/Gel extensions both hands at Just Rs 1299/- (with gel paint)",
    image:"https://i.imgur.com/vHylv4Z.jpg"
},
{
    id:3,
    title:"Manicure And Pedicure starting from Rs 400/- and Rs 500/- respectively",
    image:"https://i.imgur.com/7afPAGW.jpg"
}

];



export default function Product() {
    return (
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 place-items-center sm:mt-20 gap-3 mb-5">
          {Products.map((data) => (
            <Item prod={data} key={data.id} />
          ))}
        </div>
      </div>
    );
  }