"use client";
import Head from "next/head";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";
import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  // Redirect to landing page if not logged in
  if (!user) {
    if (typeof window !== "undefined") {
      router.push("/week-9");
    }
    return <p className="text-white p-6">Redirecting to login...</p>;
  }

  const [items, setItems] = useState(() => itemsData || []);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[\u{1F300}-\u{1FAD6}]/gu, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-[#001f3f] min-h-screen flex gap-6">
      <div className="w-1/2 flex flex-col">
        <title>My Shopping List</title>
        <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>

        <div className="overflow-y-auto max-h-96 p-2 border border-gray-700 rounded-md bg-[#002a4f]">
          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
            selectedItem={selectedItemName}
          />
        </div>

        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
