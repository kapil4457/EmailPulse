import Header from "@/shared/widgets/Header/Header";
import Banner from "./features/Banner";
import Branding from "@/modules/home/features/Branding";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
    </div>
  );
};

export default Home;
