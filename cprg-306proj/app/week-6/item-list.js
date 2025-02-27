"use client"
import React, { useState } from "react";
import itemsData from "./item.json";
import Item from "./item";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name"); // State for sorting preference

  // Sorting function
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="p-4">
      {/* Sorting Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          className={`px-4 py-2 rounded-md ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      {/* Render Items */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
