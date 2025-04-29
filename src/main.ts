import { createApp } from 'vue'
import './roots.css'
import './style.css'
import App from './App.vue'
import { createRouter, createMemoryHistory, type RouteRecordRaw } from 'vue-router'
import Solo from './pages/Solo.vue'
import Multi from './pages/Multi.vue'
import Todo from './components/Todo.vue'
import HelloWorld from './components/HelloWorld.vue'
import PrimeVue from 'primevue/config';

const routes:RouteRecordRaw[] = [
  { path: '/', component: HelloWorld },
  { path: '/todo', component: Todo },
  { path: '/solo', component: Solo },
  { path: '/multi', component: Multi },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})



createApp(App).use(PrimeVue, {
  unstyled: true
}).use(router).mount('#app')
