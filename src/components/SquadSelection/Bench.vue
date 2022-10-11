<template>
  <div class="cards-container">
    <HorizontalPlayerCard
      v-for="index in 7"
      :player="playersAndTeamsData.players[index]"
      :teamColor="teamColor"
      :index="index"
    />
  </div>
</template>

<script setup>
import HorizontalPlayerCard from "./HorizontalPlayerCard.vue"
import { playersAndTeamsStore } from "../../stores/playersAndTeams"
import { sessionDataStore } from "../../stores/sessionData"

const playersAndTeamsData = playersAndTeamsStore(),
  sessionData = sessionDataStore(),
  teamColor = assignTeamColor()

function assignTeamColor() {
  const teamData = playersAndTeamsData.findTeam(sessionData.myTeamID)
  return teamData.colorPrimary
}
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  perspective: 100%;
}
</style>
