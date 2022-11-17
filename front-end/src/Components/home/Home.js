import React from "react";
import Catagories from "../catagories/Catagories";
import Products from "../products/Products";
import Slider from "../slider/Slider";
import useStyle from "./styles"

function Home() {
  const classes = useStyle()
  return (
     <div>
      <Slider/>
      <Catagories/>
      <Products />

     </div>
  );
}

export default Home;
