"use client";
import Head from "next/head";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";
import React, { useState } from "react";

export default function Page() {
  // State to manage the list of items
  const [items, setItems] = useState(() => itemsData || []);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // Append the new item to the state
  };

  // Function to handle selecting an item
  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0] // Remove size details
      .trim()
      .replace(/[\u{1F300}-\u{1FAD6}]/gu, ""); // Remove emojis
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-[#001f3f] min-h-screen flex gap-6">
      <div className="w-1/2 flex flex-col">
        <title>My Shopping List</title>
        <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
        
        {/* Scrollable ingredient list */}
        <div className="overflow-y-auto max-h-96 p-2 border border-gray-700 rounded-md bg-[#002a4f]">
          <ItemList items={items} onItemSelect={handleItemSelect} selectedItem={selectedItemName} />
        </div>
        
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}