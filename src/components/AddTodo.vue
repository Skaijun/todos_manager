<template>
  <div>
    <h3>Add Todo</h3>
    <form class="form">
      <input class="form-input" type="text" placeholder="Add todo..."/>
      <input class="form-submit" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {};
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