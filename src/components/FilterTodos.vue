<template>
  <div class="filter-todos">
    <h3>Display Todos:</h3>
    <select class="filter-select">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap");
.filter-todos {
  display: flex;
  justify-content: start;
  align-items: center;
}
.filter-select {
  margin-left: 10px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: 20px;
  padding: 2px 5px;
}
</style>