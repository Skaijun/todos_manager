<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "TodoApp",
  created() {
    this.$store.dispatch("initTodos");
  },
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
body {
  background-color: wheat;
}
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 15px;
  box-sizing: border-box;
  overflow: auto;
}
</style>
