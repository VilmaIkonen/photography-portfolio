import React from "react";
import styled from "styled-components";

const Nav = styled.nav` 
  position: absolute;
  top: 50%;
  right: 0;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Ul>
        <li>work
          <Ul>
            <li>portraits</li>
            <li>landscapes</li>
          </Ul>
        </li>
        <li>about me</li>
        <li>contact</li>
      </Ul>
    </Nav>
  );
}

export default Navigation;