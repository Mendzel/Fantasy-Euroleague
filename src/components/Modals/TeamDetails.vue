<template>
  <Dialog
  :header="team.name"
    v-model:visible="modalData.showTeamDetails"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '60vw' }"
    :modal="true"
  >
    <div class="team-container">
      <div class="team-header">
        <img class="team-logo" :src="team.logoURL" :alt="team.name" />
        <div class="team-info">
          <div class="label">Coach</div>
          <div class="text">{{ team.coach }}</div>
        </div>
      </div>

      <div class="team-players">
        <div
          class="player-container"
          v-for="player in players"
          @click="showPlayerModal(player)"
        >
          <div class="player-data-position">{{ player.position }}</div>
          <div class="player-data-nationality">{{ player.nationality }}</div>
          <div class="player-data-name">{{ player.name }}</div>
          <div class="player-data-value">{{ player.pointsScored }}</div>
        </div>
      </div>

      <div class="team-leader">
        <div class="team-leader-photo">{{ players[0].photoURL }}</div>
        <div class="team-leader-name">{{ players[0].name }}</div>
        <div class="team-leader-average">{{ players[0].pointsScored }}</div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { useModalStore } from "@/stores/modals.js"
import { playersAndTeamsStore } from "../../stores/playersAndTeams"

const modalData = useModalStore(),
  teamsData = playersAndTeamsStore(),
  team = modalData.teamData,
  players = teamsData.players

function showPlayerModal(player) {
  modalData.setPlayerData(player)
  modalData.wasTeamModalOpen = true
  modalData.showTeamDetails = false
  modalData.showModal("player")
}
</script>

<style lang="scss" scoped>
.team {
  &-container {
    width: 1000px;
    background-color: black;
    color: white;
  }

  &-header {
    display: flex;
    justify-content: space-around;
    text-align: center;

    img {
      width: 200px;
    }
  }

  &-leader {
    display: flex;
  }
}

.player {
  &-container {
    display: flex;
    height: 50px;
    border: 1px solid white;
  }
}

.label {
  color: gray;
  text-transform: uppercase;
  font-size: 12px;
}

.text {
  text-transform: uppercase;
  font-size: 18px;
}

@media screen and (max-width: 1000px) {
  .team {
    &-container {
      width: 100%;
    }
  }
}
</style>
