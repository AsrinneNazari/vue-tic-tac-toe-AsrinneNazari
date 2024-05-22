<script setup lang="ts">
import { computed, ref } from "vue";
import { Player } from "../models/Player";

interface propsPlayers {
  players: Player[];
}
const props = defineProps<propsPlayers>();

let currentPlayer = ref<Player>(props.players[0]);

const board = ref(["", "", "", "", "", "", "", "", ""]);

const resetGame = () => {
  board.value = ["", "", "", "", "", "", "", "", ""];

  currentPlayer.value =
    props.players[Math.floor(Math.random() * props.players.length)];
};

const theMove = (i: number) => {
  if (board.value[i] !== "") {
    return;
  }
  board.value[i] = currentPlayer?.value?.team!;
  if (currentPlayer.value === props.players[0]) {
    currentPlayer.value = props.players[1];
  } else currentPlayer.value = props.players[0];
};

const winnerCalculation = (board: (string | null)[]): string | null => {
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
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const winner = ref(computed(() => winnerCalculation(board.value.flat())));

const theTie = () => {
  return board.value.every((cell) => cell !== "") && !winner.value;
};
</script>

<template>
  <p>{{ players[0].name }} har spelpjäs {{ players[0].team }}</p>
  <p>{{ players[1].name }} har spelpjäs {{ players[1].team }}</p>

  <button @click="resetGame">Börja om!</button>
  <p>{{ currentPlayer?.name }}s tur att spela!</p>
  <div v-if="winner">Vinnaren är:{{ winner }}</div>
  <div v-if="theTie()">Oavgjort</div>
  <div class="theBoard">
    <div
      class="square"
      v-for="(cell, y) in board"
      :key="y"
      @click="() => theMove(y)"
    >
      {{ cell }}
    </div>
  </div>
</template>

<style scoped>
.theBoard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.1em;
}
.square {
  height: 100px;
  width: 100px;
  background-color: pink;
  margin-bottom: 0.1em;
}
.square:hover {
  cursor: pointer;
  background-color: rgb(255, 146, 164);
}
</style>
