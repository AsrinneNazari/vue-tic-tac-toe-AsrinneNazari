<script setup lang="ts">
import { computed, ref } from "vue";
import { Player } from "../models/Player";

interface propsPlayers {
  players: Player[];
}
const props = defineProps<propsPlayers>();

let currentPlayer = ref<Player>(props.players[0]);
const gameOver = ref(false);

const board = ref(["", "", "", "", "", "", "", "", ""]);

const resetGame = () => {
  board.value = ["", "", "", "", "", "", "", "", ""];

  gameOver.value = false;
  currentPlayer.value =
    props.players[Math.floor(Math.random() * props.players.length)];
};

const theMove = (i: number) => {
  if (gameOver.value == true) return;

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
      gameOver.value = true;
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
  <div v-if="winner">Spelaren med spelpjäs: {{ winner }} vann rundan!</div>
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
  box-shadow: rgb(28, 12, 12) 0px 0px 10px;
}

.square {
  height: 100px;
  width: 100px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  text-shadow: rgb(28, 12, 12) 0px 0px 5px;
}
.square:hover {
  cursor: pointer;
  background-color: rgb(255, 146, 164);
}
</style>
