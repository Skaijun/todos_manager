<template>
  <div>
    <h3>Todos</h3>
    <div class="hint">
      <p>Double click to mark as complete</p>
      <div>
        <span class="square incomplete">0</span>= Incomplete
      </div>
      <div>
        <span class="square complete">0</span>= Complete
      </div>
    </div>
    <div class="todos__wrap">
      <div v-for="todo in todoList" :key="todo.id" class="todo">{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["todoList"])
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
  min-width: 10px;
  height: 10px;
  background-size: cover;
  margin-right: 5px;
  padding: 0 5px;
  border-radius: 3px;
}
.square.incomplete {
  background-color: teal;
  color: transparent;
}
.square.complete {
  background-color: rgb(3, 22, 3);
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
  padding: 1rem;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  line-height: 22px;
  border-radius: 10px;
}
.todo:hover {
  background-color: #35a171;
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