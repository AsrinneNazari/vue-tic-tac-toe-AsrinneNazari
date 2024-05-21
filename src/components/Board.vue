<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";

interface propsPlayers {
  players: Player[];
}
defineProps<propsPlayers>();

const currentPlayer = ref();
const board = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

const resetGame = () => {
  board.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
};
</script>

<template>
  <p>{{ players[0].name }} har spelpjäs {{ players[0].team }}</p>
  <p>{{ players[1].name }} har spelpjäs {{ players[1].team }}</p>

  <div class="theBoard">
    <div class="square" v-for="(cell, i) in board" :key="i"></div>
  </div>
  <p>{{ currentPlayer }}s tur att spela!</p>
  <button @click="resetGame">Börja om!</button>
</template>

<style scoped>
.square {
  height: 100px;
  width: 100px;
  background-color: pink;
}

.theBoard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.1em;
}
</style>
