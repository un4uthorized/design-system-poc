<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <poc-card text="Stencil Component">
        <div class="flex">
          <poc-button @click="state.count++" text="+" appearance="primary"></poc-button>
          <poc-input placeholder="0" :value="state.count"></poc-input>
          <poc-button @click="state.count--" text="-" appearance="primary"></poc-button>
        </div>
      </poc-card>
    </div>
    <div class="card-wrapper">
      <lit-card text="Lit component">
        <div class="flex">
          <lit-button @click="lit.count++" text="+" appearance="primary"></lit-button>
          <lit-input placeholder="0" :value="lit.count"></lit-input>
          <lit-button @click="lit.count--" text="-" appearance="primary"></lit-button>
        </div>
      </lit-card>
    </div>
  </div>
</template>

<script setup lang="ts">

import { reactive } from 'vue'

const state = reactive({ count: 0 })

const lit = reactive({ count: 0 })

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

* {
  margin: 0;
}

.flex{
  display: flex;
}

.card-wrapper{
  max-width: 350px;
}

.wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  gap: 3rem;
}

</style>
