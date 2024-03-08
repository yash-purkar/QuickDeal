import React, { useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { Features } from "../../Components/Features/Features";
import { Categories } from "../../Components/Categories/Categories";
import { Footer } from "../../Components/Footer/Footer";

// Home page of the app

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <Features />
      <Categories />
      <Footer />
    </>
  );
};
