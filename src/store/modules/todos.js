// import axios from "axios";

const state = {
  todos: [
    { id: 1, title: "task 1", isCompleted: false },
    { id: 2, title: "task 2", isCompleted: false },
    { id: 3, title: "task 3", isCompleted: false },
  ],
};

const getters = {
  todoList: (state) => state.todos,
  todoListLength: (state) => state.todos.length,
};

const actions = {
  addNewTask({ commit }, newTodo) {
    commit("addTodo", newTodo);
  },
  completeTask({ commit }, updTodo) {
    commit("completeTheTask", updTodo);
  },
};

const mutations = {
  completeTheTask(state, updTodo) {
    const indexOfUdpTodo = state.todos.findIndex(
      (todo) => todo.id === updTodo.id
    );
    state.todos.splice(indexOfUdpTodo, 1, updTodo);
  },
  addTodo(state, newTodo) {
    state.todos.unshift(newTodo);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
