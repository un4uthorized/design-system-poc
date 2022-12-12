<template>
  <div class="card-wrapper">
    <poc-card text="Stencil Component">
      <div class="flex">
        <poc-button @click="increment" text="+" appearance="primary"></poc-button>
        <poc-input placeholder="0" :value="state.count"></poc-input>
        <poc-button @click="increment" text="-" appearance="primary"></poc-button>
      </div>
    </poc-card>
  </div>
</template>

<script setup lang="ts">

import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex{
  display: flex;
}

.card-wrapper{
  max-width: 350px;
}
</style>
