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
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
