import React from "react";
import { render } from "react-dom";
import { destroy } from "mobx-state-tree"; //getSnapshot
import App from "./App";
import TodoStore from "./models/todos";
//test todos
// {
//   label: "first",
//   isReady: false,
//   id: 0,
// },
// {
//   label: "second",
//   isReady: true,
//   id: 1,
// },
const initialState = {
  todos: [],
};

let store: any;
let snapshotListener: any;

function createTodoStore(snapshot: any) {
  if (snapshotListener) snapshotListener();
  if (store) destroy(store);
  store = TodoStore.create(snapshot);
  return store;
}

function renderApp(App: any, store: any) {
  render(<App store={store} />, document.getElementById("root"));
}

renderApp(App, createTodoStore(initialState));
