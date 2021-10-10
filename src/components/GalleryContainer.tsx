import React from "react";
import styled from "styled-components";

const Container = styled.section` 
  height: 100vh;
  margin: 20rem auto;
  text-align: center;
`;


const GalleryContainer: React.FC = () => {
  return (
    <Container>
      <p>Photos of the 1st gallery, eg. portraits</p>
    </Container>
  );
}

export default GalleryContainer;