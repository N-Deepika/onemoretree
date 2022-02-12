import React, { useEffect, useState } from "react";
import Products from "../components/Explore/Products";
import Header from "../assets/explore.png";
import NextImage from "next/image";

const Explore = () => {
  const [trees, setTrees] = useState([]);

  const getTrees = async () => {
    const response = await fetch(
      "https://onemoretree.herokuapp.com/data/alltrees"
    );
    const data = await response.json();
    console.log(data);
    setTrees(data.data);
  };

  useEffect(() => {
    getTrees();
  }, []);

  return (
    <div
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(244, 244, 244, 0) 1.8%, #F4F4F4 62.74%)",
        backgroundColor: "#F4F4F4",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <NextImage src={Header} layout="responsive" alt="header" />
      </div>
      <div>
        {trees.length > 0 ? <Products trees={trees} /> : <div>Loading...</div>}
      </div>
    </div>
  );
};

export default Explore;
