<script setup lang="ts">
import { ref, watch } from "vue";
import Button from "@/volt/Button.vue";
import InputText from "@/volt/InputText.vue";

let id = 0;
const newTodo = ref("");
const todos = ref([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);

watch(
  todos,
  () => {
    console.log("todos: ", todos.value);
  },
  { deep: true }
);

function addTodo() {
  console.log("Add Todo: ");
  todos.value.push({ id: id++, text: newTodo.value, done: false });
  newTodo.value = "";
}

function removeTodo(id: number) {
  console.log("id: ", id);
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
  <section class="flex flex-col">
    <div>
      <InputText v-model="newTodo" required placeholder="new todo" />
      <Button @click="addTodo">Add Todo</Button>
    </div>
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }} <Button @click="removeTodo(todo.id)">X</Button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
