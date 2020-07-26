import React from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Input from "../Components/Input";
import List from "../Components/List";

interface Iprops {
  store: any;
}

const TodoPage: React.FC<Iprops> = ({ store }) => {
  return (
    <>
      <Header />
      <Content>
        <Input addTodo={store.addTodo} filtredTodos={store.filterTodos} />
        <List store={store} />
      </Content>
    </>
  );
};

export default TodoPage;
