import { types, getRoot, destroy } from "mobx-state-tree";

const SHOW_ALL = "show_All";

const filterType = types.union(...[SHOW_ALL].map(types.literal));
const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
};

const Todo = types
  .model({
    label: types.string,
    isReady: false,
    id: types.identifierNumber,
  })
  .actions((self) => ({
    remove() {
      getRoot(self).removeTodo(self);
    },
    toggle() {
      self.isReady = !self.isReady;
    },
  }));

const TodoStore = types
  .model({
    todos: types.array(Todo),
    filter: types.optional(filterType, SHOW_ALL),
  })
  .views((self) => ({
    get filteredTodos() {
      return self.todos.filter(TODO_FILTERS[self.filter]);
    },
  }))
  .actions((self) => ({
    addTodo(label) {
      const id =
        self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      self.todos.unshift({
        id,
        label,
      });
    },
    removeTodo(todo) {
      destroy(todo);
    },
    setFilter(filter) {
      self.filter = filter;
    },
    filterTodos(key) {
      self.todos = self.todos.filter(({ label }) => label.includes(key));
    },
  }));

export default TodoStore;
