"use client"
import { useState } from "react";

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const categories = [
    "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", 
    "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log("New Item Added:", item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      <h2 className="text-2xl font-bold">Add New Item</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input 
          type="text" 
          placeholder="Item Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="p-2 border rounded-md text-black placeholder-gray-500"
        />
        <div className="flex items-center space-x-2">
          <button 
            type="button" 
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} 
            className="w-10 h-10 bg-gray-500 text-white rounded-md">
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button 
            type="button" 
            onClick={() => setQuantity((prev) => Math.min(20, prev + 1))} 
            className="w-10 h-10 bg-blue-500 text-white rounded-md">
            +
          </button>
        </div>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="p-2 border rounded-md text-black"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat.toLowerCase()} className="text-black">{cat}</option>
          ))}
        </select>
        <button 
          type="submit" 
          className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default NewItem;