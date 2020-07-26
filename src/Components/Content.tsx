import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-width: 100vw;
  height: calc(100vh - 8rem);
  padding-top: 2rem;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;

const Content: React.FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Content;
