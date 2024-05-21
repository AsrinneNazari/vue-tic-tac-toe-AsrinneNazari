<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";

interface propsPlayers {
  players: Player[];
}
defineProps<propsPlayers>();

const currentPlayer = ref("X");
const board = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);
/* const winnerCalculation = (squares) =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
} 
 */
</script>

<template>
  <p>Spelare 1: {{ players[0].name }} har spelpjäs {{ players[0].team }}</p>
  <p>Spelare 2: {{ players[1].name }} har spelpjäs {{ players[1].team }}</p>

  <div class="theBoard">
    <div class="square" v-for="(square, i) in squares" :key="i"></div>
  </div>
</template>

<style scoped>
.square {
  height: 100px;
  width: 100px;
  background-color: pink;
}
.theBoard {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 0.1em;
}
</style>
