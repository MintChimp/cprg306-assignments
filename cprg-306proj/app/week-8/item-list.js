"use client";
import React, { useState, useMemo } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  // Memoized sorting
  const sortedItems = useMemo(() => {
    if (!Array.isArray(items)) return [];
    return [...items].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });
  }, [items, sortBy]);

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
        {sortedItems.length > 0 ? (
          sortedItems.map((item, index) => (
            <Item 
              key={item.id || index}  // Ensure a unique key
              name={item.name} 
              quantity={item.quantity} 
              category={item.category} 
              onSelect={() => onItemSelect(item)} // Pass the item to onItemSelect
            />
          ))
        ) : (
          <p className="text-white">No items found.</p>
        )}
      </ul>
    </div>
  );
};

export default ItemList;
