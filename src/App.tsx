import React from "react";
import { BaseStyle } from "./baseStyles";
import TodoPage from "./pages/TodoPage";

interface Iprops {
  store: any;
}

const App: React.FC<Iprops> = (props) => {
  return (
    <>
      <BaseStyle />
      <TodoPage store={props.store} />
    </>
  );
};

export default App;
