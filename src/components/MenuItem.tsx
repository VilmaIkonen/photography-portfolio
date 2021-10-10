import React from "react";
import styled from "styled-components";

interface LinkButton {
  linkName: string,
}

const LinkBtn = styled.button`
`;

const MenuItem: React.FC<LinkButton> = ({ linkName }) => {
  
  const handleClick = (ev: MouseEvent, itemId: string) => {
    ev.preventDefault();
    document.getElementById(`${itemId}`)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <LinkBtn
      onClick={handleClick}  
    >
        {linkName}     
    </LinkBtn>    
  );
}

export default MenuItem;