import type { RouteRecordRaw } from "vue-router";
import Home from "./pages/home.vue";
import Solo from "./pages/solo/solo.vue";
import Rounds from "./pages/solo/rounds.vue";
import Multi from "./pages/multi.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    component: Home,
    alias: "/",
  },
  {
    path: "/solo",
    component: Solo,
  },
  {
    path: "/rounds",
    component: Rounds,
  },
  {
    path: "/multi",
    component: Multi,
  },
];
