<template>
  <div v-if="matchData" class="tab">
    <div v-if="homeTeam" class="tab-team-home">
      <div class="center">
        {{ homeTeam.name }}
      </div>
      <div class="center">
        <img :src="homeTeam.logoURL" :alt="homeTeam.name" class="logo" />
      </div>
    </div>
    <div class="center">
      <Button
        class="p-button-danger"
        style="width: 100px"
        @click="showMatchDetails(matchData)"
        :label="calculateScore(matchdata)"
        ></Button
      >
    </div>
    <div v-if="awayTeam" class="tab-team-away">
      <div class="center">
        <img :src="awayTeam.logoURL" :alt="awayTeam.name" class="logo" />
      </div>
      <div class="center">
        {{ awayTeam.name }}
      </div>
    </div>
    <Button
      class="tab-finish center p-button-help"
      label="Confirm"
      v-if="!props.notAdmin && !matchData.winnerID && !matchData.looserID"
      @click="validateTheMatch(matchData, homeTeam.name, awayTeam.name)"
      ></Button
    >
  </div>
</template>

<script setup>
import { constantsStore } from "@/stores/constants"
import { playersAndTeamsStore } from "@/stores/playersAndTeams"
import { useModalStore } from "@/stores/modals.js"

let homeTeam = {},
  awayTeam = {}
const modalData = useModalStore(),
  constantsData = constantsStore(),
  playersAndTeamsData = playersAndTeamsStore(),
  props = defineProps(["matchID", "notAdmin"]),
  matchData = constantsData.findMatch(props.matchID)

if (matchData) {
  homeTeam = playersAndTeamsData.findTeam(matchData.homeTeamID)
  awayTeam = playersAndTeamsData.findTeam(matchData.awayTeamID)
}

function showMatchDetails(matchData) {
  modalData.setMatchData(matchData)
  modalData.showModal("match")
}

function validateTheMatch(matchData, homeTeam, awayTeam) {
  modalData.setDataToValidate(matchData, homeTeam, awayTeam)
  modalData.showModal("validator")
}

function calculateScore(mathData) {
  return `${matchData.homeScore} - ${matchData.awayScore}`
}
</script>

<style lang="scss">
.tab {
  border-bottom: 1px solid rgb(85, 84, 84);
  display: flex;
  position: relative;
  height: 60px;

  &:hover {
    background-color: rgb(52, 52, 52);
  }

  &-team {
    &-home,
    &-away {
      width: 45%;
      margin: 0 20px;
      display: flex;
    }

    &-home {
      justify-content: flex-end;
    }
  }

  &-finish {
    position: absolute;
    right: 0px;
    top: 15px;
  }
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  width: 50px;
  margin: 0 10px;
}

@media screen and (max-width: 430px) {
  .tab {
    &-team {
      &-home,
      &-away {
        font-size: 13px;
        margin: 0 5px;
      }
    }

    .logo {
      width: 35px;
      margin: 0 4px;
    }
  }
}
@media screen and (max-width: 395px) {
  .tab {
    word-break: break-all;

    &-team {
      &-home,
      &-away {
        font-size: 14px;
        margin: 0 5px;
      }
    }

    .logo {
      display: none;
    }
  }
}
</style>
