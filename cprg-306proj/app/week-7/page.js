"use client";
import Head from "next/head";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import React, { useState } from "react";

export default function Page() {
  // State to manage the list of items
  const [items, setItems] = useState(() => itemsData || []); 


  // Function to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // Append the new item to the state
  };

  return (
    <main className="max-w-2xl mx-auto p-6 bg-[#001f3f] min-h-screen">
      <title>My Shopping List</title>
      <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
      {/* Pass the items state to ItemList */}
      <ItemList items={items} />
      
      {/* Pass the handleAddItem function to NewItem */}
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}
