<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";
import Form from "./Form.vue";
import { IGameState } from "../models/IGameState";
import Board from "./Board.vue";

const state = ref<IGameState>({
  showGame: false,
});

const players = ref<Player[]>([]);

const addPlayer = (text: string) => {
  players.value.push(new Player(text));
  console.log(players.value);
};

const showGame = () => {
  if (players.value.length === 2) {
    state.value.showGame = !state.value.showGame;
  } else {
    alert("Kan endast vara två som spelar!");
  }
};
</script>

<template>
  <h2>Tik Tac Toe spelet!</h2>
  <Form @add="addPlayer" @submitList="playerList" />
  <button @click="showGame">Spela!</button>
  <Board v-if="state.showGame" />
</template>

<style scoped></style>
