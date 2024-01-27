// Item.jsx
import React from "react";

const Item = ({ prod }) => {
  return (
    <div className="flex flex-col items-center mt-3 ml-2">
      <img className="sm:w-96 w-96 mb-2" src={prod.image} alt="image2" />
      <span className="ml-4 mb-8">{prod.title}</span>
    </div>
  );
};

export default Item;
