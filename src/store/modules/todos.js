const state = {
  todos: [],
};

const getters = {
  todoList: (state) => state.todos,
};

const actions = {
  initTodos({ commit }) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [
      { id: 1, title: "Example", isCompleted: false, isDisplayed: true },
    ];
    commit("initializeTodos", todos);
  },
  addNewTask({ commit }, newTodo) {
    commit("addTodo", newTodo);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  updateTaskState({ commit }, updTodo) {
    commit("updateTodoState", updTodo);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  removeTask({ commit }, currTaskId) {
    commit("removeTaskFromState", currTaskId);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  filterTodos({ commit }, shownQuantity) {
    let counter = 1;
    let toDo = {};
    for (let key in state.todos) {
      let todo = state.todos[key];
      if (counter <= shownQuantity) {
        toDo = {
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted,
          isDisplayed: true,
        };
      } else {
        toDo = {
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted,
          isDisplayed: false,
        };
      }
      commit("updateTodoState", toDo);
      counter++;
    }
  },
  filterByTodosState({ commit }, filterState) {
    let toDo = {};
    for (let key in state.todos) {
      let todo = state.todos[key];
      if (filterState == "all") {
        toDo = {
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted,
          isDisplayed: true,
        };
      } else if (filterState == "completed") {
        toDo = {
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted,
          isDisplayed: todo.isCompleted ? true : false,
        };
      } else if (filterState == "incompleted") {
        toDo = {
          id: todo.id,
          title: todo.title,
          isCompleted: todo.isCompleted,
          isDisplayed: !todo.isCompleted ? true : false,
        };
      }
      commit("updateTodoState", toDo);
    }
  },
};

const mutations = {
  initializeTodos(state, todos) {
    state.todos = todos;
  },
  updateTodoState(state, updTodo) {
    const indexOfUdpTodo = state.todos.findIndex(
      (todo) => todo.id === updTodo.id
    );
    state.todos.splice(indexOfUdpTodo, 1, updTodo);
  },
  addTodo(state, newTodo) {
    state.todos.unshift(newTodo);
  },
  removeTaskFromState(state, currTaskId) {
    const indexOfDelTodo = state.todos.findIndex(
      (todo) => todo.id === currTaskId
    );
    state.todos.splice(indexOfDelTodo, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
