import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  width: 60%;
  min-width: 32rem;
  max-width: 100rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background-color: #d8d8d8;
`;
const Title = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 1rem 1rem 0 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const InputWrap = styled.div`
  padding: 1rem;
  border-bottom: 0.1rem solid #c9c9c9;
  input {
    width: 100%;
    height: 3rem;
    padding-left: 0.5rem;
    background-color: #fef9fd;
    border-radius: 0.3rem;
  }
`;
const BtnWrap = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface Iprops {
  addTodo(text: string): void;
  filtredTodos(text: string): void;
}

const Input: React.FC<Iprops> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSaveNewTodo = (text: string) => {
    if (text.length === 0) {
      alert("please enter text");
    } else {
      props.addTodo(text);
      setInputValue("");
    }
  };

  const handleFiltredTodos = (text: string) => {
    if (text.length === 0) {
      alert("please enter text");
    } else {
      props.filtredTodos(text);
      setInputValue("");
    }
  };

  return (
    <Wrapper>
      <Title>
        <p>Input</p>
      </Title>
      <InputWrap>
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="type text here..."
        />
      </InputWrap>
      <BtnWrap>
        <Button
          label="filter"
          color="blue"
          fnClick={() => handleFiltredTodos(inputValue)}
        />
        <Button
          label="add"
          color="green"
          fnClick={() => handleSaveNewTodo(inputValue)}
        />
      </BtnWrap>
    </Wrapper>
  );
};

export default Input;
