<script setup lang="ts">
import { ref } from "vue";
import { Player } from "./models/Player";
import Form from "./components/Form.vue";
import { IGameState } from "./models/IGameState";
import Board from "./components/Board.vue";

const state = ref<IGameState>({
  showGame: false,
});

const players = ref<Player[]>([]);

const addPlayer = (name: string) => {
  if (players.value.length >= 2) {
  }
  const team = players.value.length === 0 ? "X" : "O";
  players.value.push(new Player(name, team));
  console.log(players.value);

};

const showGame = () => {
  if (players.value.length === 2) {
    state.value.showGame = !state.value.showGame;
  } else {
    alert("Man måste vara två spelare i det här spelet!");
  }
};
</script>

<template>
  <h2>Tik Tac Toe spelet!</h2>
  <Form @add="addPlayer"/>
  <button @click="showGame">Spela!</button>
  <Board :players="players" v-if="state.showGame" />
</template>

<style scoped></style>
