<template>
  <div id="app">
    <div v-for="todo in todos" :key="todo.id">{{todo.title}}</div>
  </div>
</template>

<script>
import { ToDoService } from "@/Shared/Services/ToDo.service.js";

export default {
  name: "App",
  data() {
    return {
      todos: undefined
    };
  },
  created() {
    ToDoService.GetToDos().then(res => {
      this.todos = res;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
