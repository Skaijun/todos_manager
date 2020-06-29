<template>
  <div>
    <h3>Add Todo</h3>
    <form class="form">
      <input v-model="newTodo" class="form-input" type="text" placeholder="Add todo..." />
      <input @click.prevent="addTodo" class="form-submit" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodos",
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    ...mapActions(["addNewTask"]),
    addTodo() {
      const newDate = new Date();
      const id = `${newDate.getFullYear()}-${newDate.getMonth() +
        1}-${newDate.getDate()}-${newDate.getHours()}-${newDate.getMinutes()}-${newDate.getSeconds()}-${newDate.getMilliseconds()}`;

      if (this.newTodo) {
        const todo = {
          id: id,
          title: this.newTodo,
          isCompleted: false,
          isDisplayed: true
        };
        this.addNewTask(todo);
        this.newTodo = "";
      } else {
        alert("You have to enter the task first!");
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Yellowtail&display=swap");
.form {
  display: flex;
}
.form-input {
  flex: 7rem;
  outline: none;
  padding: 0 5px;
  font-family: "Yellowtail", cursive;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  border: 0.5px solid teal;
}
.form-input:focus {
  background-color: rgb(234, 241, 232);
  outline: none;
}
.form-submit {
  background-color: teal;
  color: white;
  border: none;
  outline: none;
  padding: 8px 70px;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  opacity: 0.8;
  transition: all 0.3s ease-out;
}
.form-submit:hover {
  opacity: 1;
}
@media (max-width: 600px) {
  .form {
    flex-direction: column;
  }
  .form-input {
    flex: 2rem;
  }
}
</style>