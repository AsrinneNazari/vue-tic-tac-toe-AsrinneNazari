<script setup lang="ts">
import { ref } from "vue";
import { Player } from "../models/Player";
import Form from "./Form.vue";

const player = ref<Player[]>([new Player("Asrinne")]);
console.log(player + "hej");

const addPlayer = (text: string) => {
  player.value.push(new Player(text));
};

</script>

<template>
  <h2>Tik Tac Toe spelet!</h2>
  <Form @add="addPlayer" />
</template>

<style scoped></style>
