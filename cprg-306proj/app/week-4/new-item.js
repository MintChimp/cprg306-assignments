"use client"
import { useState } from "react";

function QuantityComponent() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      <h2 className="text-2xl font-bold">Quantity: {quantity}</h2>
      <div className="flex space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`w-12 h-10 flex items-center justify-center text-white rounded-md focus:outline-none ${
            quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          −
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`w-12 h-10 flex items-center justify-center text-white rounded-md focus:outline-none ${
            quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityComponent;
