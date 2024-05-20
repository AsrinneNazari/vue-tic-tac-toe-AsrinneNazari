<script setup lang="ts">
import { ref } from "vue";

const userInput = ref("");
const error = ref("");

const emit = defineEmits<{
  (e: "add", text: string): void;
  (e: "submitList", text:string): void;
}>();

const handleSubmit = () => {
    if (userInput.value !== "") {
    emit("add", userInput.value);
    userInput.value = "";
    error.value = "";
  } else {
    error.value = "Fyll i ett namn! ";
  }

const handleList = () =>{

}


};
</script>

<template>
  <h3>Fyll i ditt användarnamn</h3>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" />
    <button>Lägg till</button>
  </form>
  <p>{{ error }}</p>
</template>

<style scoped></style>
