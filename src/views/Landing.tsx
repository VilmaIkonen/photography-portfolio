import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation"

const Hero = styled.div` 
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  &:before {
    content: "";
    background: url('https://source.unsplash.com/UQM35Q6ZXx8') no-repeat fixed center center/cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
  }
`;

const HeroText = styled.div`
  text-align: center;
  position: relative;
  margin: 7rem;
`;

const Landing: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero>
        <HeroText>
          <h1>Name of the photographer</h1>
          <h2>Photography</h2>
          <h3>@instagramaccount</h3>      
        </HeroText>
      </Hero>
    </>
  );
}

export default Landing;