import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 8rem;
  padding: 0 1rem;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const Header = () => {
  const appTitle: string = "Todo App with TS and mobxStateTree";
  return (
    <Wrapper>
      <h2>{appTitle}</h2>
    </Wrapper>
  );
};
export default Header;
