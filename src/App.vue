<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
import { ref, watch, onMounted } from 'vue';

let id = 0;
const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const msg = ref('')

watch(todos, () => {
  console.log('todos: ', todos.value);
}, { deep: true });


function addTodo() {
  console.log("Add Todo: ",);
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(id: number) {
  console.log('id: ', id);
  todos.value = todos.value.filter(todo => todo.id !== id)
}

onMounted(async () => {
  try {
    const response = await axios.get('https://localhost:44370/WeatherForecast');
    msg.value = response.data;
  } catch(error) {
    msg.value = "An Error Occurred!"
  }
})
</script>

<template>
  <HelloWorld :msg></HelloWorld>
  <section class="flex flex-col">
    <div>
      <input v-model="newTodo" required placeholder="new todo">
      <button @click="addTodo">Add Todo</button>
    </div>
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id"> {{ todo.text }} <button @click="removeTodo(todo.id)">X</button>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
