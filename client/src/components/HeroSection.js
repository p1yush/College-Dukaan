import React from "react";
import { styled } from "styled-components";
import { Product } from "./Product";

const HeroSection = () => {
  return (
    <Wrapper id="Home">
      <div className="home-container w-full h-full">
        <div className="wrapper w-full h-full flex-col flex justify-center items-center">
        <h1 className="font-medium tracking-wide text-4xl text-gray-600">The fastest way to </h1>
        <h1 className="font-bold tracking-wide text-4xl pt-3 text-gray-600">Buy and sell <span className="underline underline-offset-2 text-red-600">College Stuff</span> near you</h1>
        </div>
      </div>
      <Product />
    </Wrapper>  
  );
};

export default HeroSection;

const Wrapper = styled.section`
  width: 100vw;
  height: 50vh;
  background: #fbf5e8;
`;
