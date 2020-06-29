<template>
  <div class="filter-todos">
    <div class="filter-quantity">
      <h3>Displayed Todos:</h3>
      <select @change="showQuantity($event)" class="filter-quantity-select">
        <option selected value="50">50</option>
        <option value="30">30</option>
        <option value="20">20</option>
        <option value="15">15</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
    <div class="filter-completed">
      <h3>Completed/Incompleted Todos:</h3>
      <select @change="todoStateFilter" v-model="toDisplay" class="filter-completed-select">
        <option selected value="all">all</option>
        <option value="completed">completed</option>
        <option value="incompleted">incompleted</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  data() {
    return {
      toDisplay: "all"
    };
  },
  methods: {
    ...mapActions(["filterTodos", "filterByTodosState"]),
    showQuantity(e) {
      const quantityToDisplay = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
      this.filterTodos(quantityToDisplay);
    },
    todoStateFilter() {
      this.filterByTodosState(this.toDisplay);
    }
  },
  created() {
    this.filterTodos(50);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap");
.filter-todos {
  display: flex;
}
.filter-quantity,
.filter-completed {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
.filter-quantity-select,
.filter-completed-select {
  margin: 0 20px 0 10px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: 20px;
  padding: 2px 5px;
  border: 1px solid teal;
}
@media (max-width: 700px) {
  .filter-todos {
    flex-direction: column;
  }
}
@media (max-width: 450px) {
  .filter-completed h3 {
    margin-right: 30px;
  }
  .filter-completed-select {
    margin: 0px;
  }
}
</style>