import { db } from "../_utils/firebase.js";
import {
  collection,
  doc,
  getDocs,
  addDoc
} from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const itemsRef = collection(doc(collection(db, "users"), userId), "items");
  const snapshot = await getDocs(itemsRef);

  snapshot.forEach(docSnap => {
    items.push({ id: docSnap.id, ...docSnap.data() });
  });

  return items;
}

export async function addItem(userId, item) {
  const itemsRef = collection(doc(collection(db, "users"), userId), "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
