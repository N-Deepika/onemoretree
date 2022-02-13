import React, { useEffect, useState } from "react";
import Products from "../components/Explore/Products";
import Header from "../assets/explore.png";
import NextImage from "next/image";
import Lottie from "react-lottie";
import animationData from "../assets/tree5.json";

const Explore = () => {
  const [trees, setTrees] = useState([]);

  const defautOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

  return trees.length > 0 ? (
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
        <Products trees={trees} />
      </div>
    </div>
  ) : (
    <div className="absolute w-screen h-[80vh] bg-white flex z-50 justify-center items-center">
      <Lottie options={defautOptions} height={300} width={300} />
    </div>
  );
};

export default Explore;
