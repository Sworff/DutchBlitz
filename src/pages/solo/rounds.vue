<script setup lang="ts">
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputNumber from 'primevue/inputnumber';
import { ref } from "vue";
import { useSoloStore } from "../../stores/soloStore";

const store = useSoloStore();

const editingRows = ref([]);

const onRowEditSave = (event: any) => {
  let { data } = event;
  store.setRoundScore(data);
}
</script>

<template>
  <h1 class="flex justify-center">Solo</h1>
  <h2 class="mb-4">Rounds</h2>

  <section class="mb-4">
    <h3 class="mb-2">Leaderboard</h3>
    <ol>
      <li v-for="leader of store.leaderBoard">{{ leader.name }}: {{ leader.totalScore }}</li>
    </ol>
  </section>

  <pre></pre>

  <div v-for="round of store.rounds">
    <h3 class="mb-2">Round {{ round.round }}</h3>
    <DataTable v-model:editingRows="editingRows" :value="round.player" editMode="row" @row-edit-save="onRowEditSave" style="width: fit-content" class="mb-4">
      <Column field="name" header="Player" style="width: fit-content"></Column>
      <Column field="score.dutch" header="Dutch" style="width: fit-content" bodyStyle="text-align:center">
        <template #body="{ data }">
          {{ data.score.dutch }}
        </template>

        <template #editor="{ data }">
            <InputNumber v-model="data.score.dutch" fluid />
        </template>
      </Column>
      <Column field="score.blitz" header="Blitz" style="width: fit-content" bodyStyle="text-align:center">
        <template #body="{ data }">
          {{ data.score.blitz }}
        </template>

        <template #editor="{ data }">
            <InputNumber v-model="data.score.blitz" fluid />
        </template>
      </Column>
      <Column field="score.roundScore" header="Round Score" style="width: fit-content" bodyStyle="text-align:center">
        <template #body="{ data }">
          {{ data.score.dutch - data.score.blitz }}
        </template>
      </Column>
      <Column :rowEditor="true" header="Edit Scores" bodyStyle="text-align:center"></Column> 
    </DataTable>
  </div>

  <Button label="Start Round" aria-label="start-round" @click="store.startNextRound()"></Button>
</template>