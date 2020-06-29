<template>
  <div>
    <h3>Todos</h3>
    <div class="hint">
      <p>Double click to mark as completed</p>
      <div>
        <span class="square incomplete">_</span>= Incompleted
      </div>
      <div>
        <span class="square complete">_</span>= Completed
      </div>
    </div>
    <div class="todos__wrap">
      <div
        @dblclick="completeCurrTask(todo)"
        v-for="todo in todoList"
        :key="todo.id"
        class="todo"
        :class="{completed: todo.isCompleted, invisible: !todo.isDisplayed}"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  data() {
    return {
      isCompleted: false
    };
  },
  computed: {
    ...mapGetters(["todoList"])
  },
  methods: {
    ...mapActions(["updateTaskState", "removeTask"]),
    completeCurrTask(task) {
      const updTask = {
        id: task.id,
        title: task.title,
        isCompleted: !task.isCompleted,
        isDisplayed: true
      };
      this.updateTaskState(updTask);
    },
    deleteTodo(todoId) {
      this.removeTask(todoId);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap");

.hint {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 24px;
}
.square {
  width: 10px;
  height: 10px;
  margin-right: 5px;
  padding: 0 6px;
  border-radius: 3px;
  opacity: 0.8;
}
.square.incomplete {
  background-color: #41b883;
  color: transparent;
}
.square.complete {
  background-color: rgb(27, 49, 27);
  color: transparent;
}
.todos__wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1.3rem;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  line-height: 22px;
  border-radius: 10px;
  opacity: 0.8;
  animation: shakeX;
  animation-duration: 1s;
  word-break: break-all;
}
.todo.completed {
  background-color: rgb(27, 49, 27);
  color: white;
}
.todo:hover {
  opacity: 1;
}
.fas.fa-trash-alt {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.fas.fa-trash-alt:hover {
  color: tomato;
}
.invisible {
  display: none;
}
@media (max-width: 1100px) {
  .todos__wrap {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 800px) {
  .todos__wrap {
    grid-template-columns: repeat(1, 1fr);
  }
  .hint {
    flex-direction: column;
  }
  .hint div {
    margin-bottom: 20px;
  }
}
</style>