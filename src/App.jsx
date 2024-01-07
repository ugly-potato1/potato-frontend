import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet/>
      <Footer/>
    </QueryClientProvider>
  );
}
