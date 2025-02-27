import Head from "next/head";
import ItemList from "./item-list";

export default function Page() {
  return (
      <main className="max-w-2xl mx-auto p-6 bg-[#001f3f] min-h-screen">
        <title>My Shopping List</title>
        <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
        <ItemList />
      </main>
  );
};
