import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  width: 5rem;
  height: 3rem;
  margin-right: 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef9fd;
  font-size: 1rem;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.2s ease;
  ::last-child {
    margin-right: 0;
  }
  :active {
    transform: scale(0.96);
    background-color: #ded9dd;
  }
`;

interface Iprops {
  color?: string;
  label?: string;
  fnClick?(): void;
}

const Button: React.FC<Iprops> = (props) => {
  return (
    <Wrapper color={props.color} onClick={props.fnClick}>
      {props.label}
    </Wrapper>
  );
};
export default Button;
