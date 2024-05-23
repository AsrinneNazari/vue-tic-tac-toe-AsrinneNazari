<script setup lang="ts">
import { ref } from "vue";

const userInput = ref("");
const error = ref("");

const emit = defineEmits<{
  (e: "add", text: string): void;
  (e: "submitList", text: string): void;
}>();

const handleSubmit = () => {
  if (userInput.value !== "") {
    emit("add", userInput.value);
    userInput.value = "";
    error.value = "";
  } else {
    error.value = "Fyll i ett namn! ";
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      v-model="userInput"
      placeholder="Fyll i ditt användarnamn"
    />
    <button>Lägg till</button>
  </form>
  <p>{{ error }}</p>
</template>

<style scoped>
input {
  height: 1.2rem;
  margin-right: 0.5rem;
}
</style>
