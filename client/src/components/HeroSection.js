import React from "react";
import { styled } from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper id="Home">
      <div className="home-container w-full h-full">
        <div className="wrapper w-full h-full flex justify-center items-center">
        <h1>HeroSection</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  width: 100vw;
  height: 50vh;
  background: #fbf5e8;
`;
