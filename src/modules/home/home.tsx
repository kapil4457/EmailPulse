import Header from "@/shared/widgets/Header/Header";
import Banner from "./elements/Banner";
import Branding from "@/modules/home/elements/Branding";
import Benefits from "@/modules/home/elements/Benefits";
import FeatureHighlight from "@/modules/home/elements/FeatureHighlight";
import Pricing from "@/modules/home/elements/Pricing";
import React from "react";
import Footer from "@/shared/widgets/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
