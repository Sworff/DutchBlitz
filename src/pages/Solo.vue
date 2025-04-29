<script setup lang="ts">
import { ref } from "vue";
import Button from "@/volt/Button.vue";
import InputText from "@/volt/InputText.vue";
import InputNumber from "@/volt/InputNumber.vue";
import Inplace from "@/volt/Inplace.vue";
import DangerButton from "@/volt/DangerButton.vue";

const players = ref([
  {
    name: "",
    score: 0,
  },
  {
    name: "",
    score: 0,
  },
  {
    name: "",
    score: 0,
  },
  {
    name: "",
    score: 0,
  },
]);

const scoreLimit = ref(75);
</script>

<template>
  <h1>Scorecard</h1>
  <section>
    <h2>Settings</h2>
    <div class="flex flex-col gap-1">
      <label for="scoreLimit">Score Limit</label>
      <InputNumber
        v-model="scoreLimit"
        inputId="horizontal-buttons"
        showButtons
        buttonLayout="horizontal"
        :step="5"
        fluid
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <h2>Players</h2>
    <div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
      <Inplace v-for="(player, index) in players" :key="index" variant="on">
        <template #display>
          {{ player.name || "Click to Edit" }}
        </template>

        <template #content="{ closeCallback }">
          <span class="inline-flex items-center gap-2">
            <InputText v-model="player.name" autofocus />
            <DangerButton
              icon="pi pi-times"
              text
              severity="danger"
              @click="closeCallback"
            />
          </span>
        </template>
      </Inplace>
    </div>
  </section>
  <Button>Add Player</Button>
</template>

<style scoped></style>
