<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";

interface propsPlayers {
  players: Player[];
}
const props = defineProps<propsPlayers>();

let currentPlayer = ref<Player[]>([]); //hjälp!!!

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
  currentPlayer.value =
    props.players[Math.floor(Math.random() * props.players.length)];
};

const theMove = () => {

</script>

<template>
  <p>{{ players[0].name }} har spelpjäs {{ players[0].team }}</p>
  <p>{{ players[1].name }} har spelpjäs {{ players[1].team }}</p>

  <button @click="resetGame">Börja om!</button>
  <p>{{ currentPlayer.name }}s tur att spela!</p>
  <div class="theBoard">
    <div class="square" v-for="(row, x) in board" :key="x">
      <div
        class="square"
        v-for="(cell, y) in row"
        :key="y"
        @click="theMove(x, y)"
      ></div>
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
</style>
