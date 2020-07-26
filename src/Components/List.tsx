import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import Item from "./Item";

const Wrapper = styled.div`
  width: 60%;
  min-width: 32rem;
  max-width: 100rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background-color: white;
`;
const Title = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;
const Content = styled.div`
  background-color: #d8d8d8;
  border-radius: 0 0 1rem 1rem;
`;

const Dump = styled.p`
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;
  color: white;
`;

interface Iprops {
  store: any;
}

const List: React.FC<Iprops> = (props) => {
  const { filteredTodos, removeTodo, todos } = props.store;

  const onToggleStatus = (id: number) => {
    todos.get(id).toggle();
  };

  return (
    <Wrapper>
      <Title>
        <p>List</p>
      </Title>
      <Content>
        {filteredTodos.length ? (
          filteredTodos.map((obj: object | any) => (
            <Item
              key={obj.id}
              el={obj}
              removeTodo={removeTodo}
              onToggleStatus={onToggleStatus}
            />
          ))
        ) : (
          <Dump>nothing to show</Dump>
        )}
      </Content>
    </Wrapper>
  );
};

export default observer(List);
