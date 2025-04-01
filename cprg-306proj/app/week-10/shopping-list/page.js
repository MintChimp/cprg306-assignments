"use client";
import Head from "next/head";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import React, { useState, useEffect } from "react";
import { addItem, getItems } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (error) {
      console.error("Failed to load shopping list items:", error);
    }
  }

  async function handleAddItem(newItem) {
    try {
      const id = await addItem(user.uid, newItem);
      newItem.id = id;
      setItems(prevItems => [...prevItems, newItem]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  }

  useEffect(() => {
    if (user?.uid) {
      loadItems();
    }
  }, [user?.uid]);

  // This useEffect ensures the redirection happens after the component mounts
  useEffect(() => {
    if (!user) {
      if (typeof window !== "undefined") {
        router.push("/week-10");
      }
    }
  }, [user, router]); // Only trigger when `user` changes

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[\u{1F300}-\u{1FAD6}]/gu, "");
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return <p className="text-white p-6">Redirecting to login...</p>;
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-[#001f3f] min-h-screen flex gap-6">
      <div className="w-1/2 flex flex-col">
        <Head>
          <title>My Shopping List</title>
        </Head>
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
