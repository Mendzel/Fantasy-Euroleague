<template>
  <div class="cards-container">
    <VerticalPlayerCard
      v-for="index in 5"
      :player="playersAndTeamsData.players[index]"
      :teamColor="teamColor" 
      :position="constantsData.courtPositions[index-1]"
    />
  </div>
</template>

<script setup>
import VerticalPlayerCard from "./VerticalPlayerCard.vue"
import { playersAndTeamsStore } from "../../stores/playersAndTeams"
import { sessionDataStore } from "../../stores/sessionData"
import { constantsStore } from "../../stores/constants";

const playersAndTeamsData = playersAndTeamsStore(),
  sessionData = sessionDataStore(),
  constantsData = constantsStore()

let teamColor
if(playersAndTeamsData.teams){
  teamColor = assignTeamColor()
}
function assignTeamColor() {
    const teamData = playersAndTeamsData.findTeam(sessionData.myTeamID);
    console.log(teamData)
    return teamData.colorPrimary
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  perspective: 100%;
}
</style>
