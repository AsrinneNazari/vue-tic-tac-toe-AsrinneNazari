<script setup lang="ts">
import { ref } from 'vue';

const board = ref ([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])
</script>

<template>
    <p>Spelet ligger här!!</p>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>

</template>

<style scoped>
#square{
    height: 150px;
    width: 150px;
    background-color: pink;
    color: pink;
}</style>
