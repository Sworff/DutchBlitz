<script setup lang="ts">
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import { useSoloStore } from "../../stores/soloStore";

const store = useSoloStore();

const onCellEditComplete = (event: any) => {
  let { data, newValue } = event;
  store.editPlayer(data, newValue)
}
</script>

<template>
  <div class="flex flex-col h-full items-center">
    <h1>Solo</h1>
    <h2 class="mb-4">Game Settings</h2>

    <section class="mb-4">
      <h3 class="mb-2">Winning Score</h3>

      <InputNumber
        v-model="store.winningScore"
        inputId="horizontal-buttons"
        showButtons
        buttonLayout="horizontal"
      >
        <template #incrementicon>
          <span class="pi pi-plus"></span>
        </template>
        <template #decrementicon>
            <span class="pi pi-minus"></span>
        </template>
      </InputNumber>
    </section>

    <section>
      <h3 class="mb-4">Players</h3>
      
      <DataTable :value="store.players" editMode="cell" @cell-edit-complete="onCellEditComplete" class="min-w-100 w-150 mb-4">
        <Column field="name" header="Player" class="w-full">
          <template #body="{ data }">
            <Button icon="pi pi-pencil" severity="secondary" aria-label="edit-player"></Button>
            {{ data.name }}
          </template>

          <template #editor="{ data }">
            <InputText v-model="data.name" autofocus fluid />
          </template>
        </Column>
        <Column header="Delete" class="size-fit">
          <template #body="{ data }">
            <Button icon="pi pi-trash" severity="danger" aria-label="delete-player" @click="store.removePlayer(data.id)"></Button>
          </template>
        </Column>
      </DataTable>

      <Button v-if="store.players.length < 8" label="Add Player" aria-label="add-player" @click="store.addPlayer()"></Button>
    </section>

    <section class="mt-15">
      <RouterLink to="/rounds" class="flex justify-center items-center h-20 w-60 text-3xl bg-cyan-500 hover:bg-cyan-900 rounded-md" style="color: white">Start Game</RouterLink>
    </section>
  </div>
</template>
