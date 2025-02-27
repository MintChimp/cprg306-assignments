import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 border-b border-blue-900 bg-[#003366] flex justify-between items-center rounded-md shadow-md mt-5">
      <div>
        <p className="text-lg font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-300">Category: {category}</p>
      </div>
      <span className="text-md font-medium text-gray-200">Quantity: {quantity}</span>
    </li>
  );
};

export default Item;