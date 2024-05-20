<script setup lang="ts">
import { ref } from "vue";

const userInput = ref("");
const error = ref("");

const emit = defineEmits<{
  (e: "add", text: string): void;
}>();

const handleSubmit = () => {
    if (userInput.value !== "") {
    emit("add", userInput.value);
    userInput.value = "";
    error.value = "";
  } else {
    error.value = "Fyll i ett namn! ";
  }
  emit("add", userInput.value);
};
</script>

<template>
  <h3>Fyll i ditt användarnamn</h3>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" />
    <button>Lägg till</button>
  </form>
</template>

<style scoped></style>
