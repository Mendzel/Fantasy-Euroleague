<template>
  <div>
    <h1>Teams</h1>
    <CardContainer
      :data="playersAndTeamsData.teams"
      :typeOfData="'team'"
    />
  </div>
</template>

<script setup>
import { playersAndTeamsStore } from "@/stores/playersAndTeams.js"
import CardContainer from "./CardContainer.vue"

const playersAndTeamsData = playersAndTeamsStore()
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  text-align: center;
  margin: 30px;
}
</style>
