"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./lib/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      {children}
      <ToastContainer />
    </Provider>
  );
}
