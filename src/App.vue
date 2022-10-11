<template>
  <div class="main">
    <router-view />
    <settings />
    <player-details v-if="modalData.showPlayerDetails" />
    <team-details v-if="modalData.showTeamDetails" />
    <match-details v-if="modalData.showMatchDetails" />
    <score-validator v-if="modalData.showScoreValidator" />
  </div>
</template>

<script setup>
import Settings from "@/components/Modals/Settings.vue"
import PlayerDetails from "./components/Modals/PlayerDetails.vue"
import TeamDetails from "./components/Modals/TeamDetails.vue"
import MatchDetails from "./components/Modals/MatchDetails.vue"
import ScoreValidator from "./components/Modals/ScoreValidator.vue"

import { useModalStore } from "@/stores/modals.js"
import { constantsStore } from "./stores/constants"
import { playersAndTeamsStore } from "./stores/playersAndTeams"
import { ref } from "vue"

const modalData = useModalStore(),
  constantsData = constantsStore(),
  playersAndTeamsData = playersAndTeamsStore()

let loadedPlayers = ref(false),
  loadedClubs = ref(false),
  loadedTeams = ref(false)

buildFetchURL()
fetchAllTeamsAndPlayers()

function buildFetchURL() {
  window.location.href.indexOf("https://fantasy-plk-dev.herokuapp.com") > -1
    ? (constantsData.fetchURL = "")
    : (constantsData.fetchURL = "https://fantasy-plk-dev.herokuapp.com")
}

async function fetchAllTeamsAndPlayers() {
  await fetch(constantsData.fetchURL + "/club")
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      constantsData.realClubs = responseData
      loadedClubs = true
    })
    .catch((error) => {
      console.log(error)
    })

  await fetch(constantsData.fetchURL + "/fantasy-team")
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      playersAndTeamsData.freeAgentObject = responseData.filter(
        (team) => team.name === "Free Agent"
      )
      playersAndTeamsData.teams = responseData.filter(
        (team) => team.name !== "Free Agent"
      )
      loadedTeams = true
    })
    .catch((error) => {
      console.log(error)
    })

  await fetch(constantsData.fetchURL + "/player")
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      playersAndTeamsData.players = responseData
      loadedPlayers = true
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<style lang="scss">
  @import "@/styles/colors.scss";

  body, #app, .main {
    margin: 0;
    width: 100%;
    height: 100vh;
    font-family: 'Gemunu Libre', sans-serif;
    background-color: $background;
  }
  .p-component {
    font-family: 'Gemunu Libre', sans-serif !important;
  }
</style>