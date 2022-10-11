<template>
  <Dialog
    v-model:visible="modalData.showMatchDetails"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '80vw' }"
    :modal="true">
    <div class="match-container">
      <div class="match-score">
        <div class="match-score-teamA">
          <div class="team-container">
            <img
              class="team-logo"
              :src="homeTeam.logoURL"
              :alt="homeTeam.name"
            />
            <div class="team-name">{{ homeTeam.name }}</div>
            <div class="team-points-container">
              <div class="team-points">{{ matchData.homeScore }}</div>
            </div>
          </div>
        </div>
        <div class="match-score-teamB">
          <div class="team-container">
            <div class="team-points-container">
              <div class="team-points">{{ matchData.awayScore }}</div>
            </div>
            <div class="team-name">{{ awayTeam.name }}</div>
            <img
              class="team-logo"
              :src="awayTeam.logoURL"
              :alt="awayTeam.name"
            />
          </div>
        </div>
      </div>

      <div class="match-players">
        <div class="match-players-home">
          <div class="starting-five">
            <S5PlayerCard
              class="starting-five-card"
              v-for="n in 5"
              :player="startingFive.home[n - 1]"
              :key="n"
            />
          </div>
          <div class="bench">
            <BenchPlayerCard
              v-for="n in 5"
              :player="startingFive.away[n - 1]"
              :key="n"
            />
          </div>
          <div class="unused">
            <UnusedPlayerCard
              v-for="n in 2"
              :player="startingFive.home[n - 1]"
              :key="n"
            />
          </div>
        </div>
        <div class="match-players-separator"></div>
        <div class="match-players-away">
          <div class="starting-five">
            <S5PlayerCard
              class="starting-five-card"
              v-for="n in 5"
              :player="startingFive.away[n - 1]"
              :key="n"
            />
          </div>
          <div class="bench">
            <BenchPlayerCard
              v-for="n in 5"
              :player="startingFive.home[n - 1]"
              :key="n"
            />
          </div>
          <div class="unused">
            <UnusedPlayerCard
              v-for="n in 2"
              :player="startingFive.home[n - 1]"
              :key="n"
            />
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { useModalStore } from "@/stores/modals.js"
import { playersAndTeamsStore } from "../../stores/playersAndTeams"
import BenchPlayerCard from "../SquadSelection/BenchPlayerCard.vue"
import S5PlayerCard from "../SquadSelection/S5PlayerCard.vue"
import UnusedPlayerCard from "../SquadSelection/UnusedPlayerCard.vue"

const modalData = useModalStore(),
  playersAndTeamsData = playersAndTeamsStore(),
  matchData = modalData.matchData

let homeTeam = {},
  awayTeam = {},
  startingFive = {
    home: [],
    away: []
  }

assignStartingFive()

if (matchData) {
  homeTeam = playersAndTeamsData.findTeam(matchData.homeTeamID)
  awayTeam = playersAndTeamsData.findTeam(matchData.awayTeamID)
}

function assignStartingFive() {
  ;(startingFive.home = [
    playersAndTeamsData.players[0],
    playersAndTeamsData.players[1],
    playersAndTeamsData.players[2],
    playersAndTeamsData.players[3],
    playersAndTeamsData.players[4]
  ]),
    (startingFive.away = [
      playersAndTeamsData.players[5],
      playersAndTeamsData.players[6],
      playersAndTeamsData.players[7],
      playersAndTeamsData.players[8],
      playersAndTeamsData.players[9]
    ])
}

function showPlayerModal(player) {
  modalData.setPlayerData(player)
  modalData.wasMatchModalOpen = true
  modalData.showMatchDetails = false
  modalData.showModal("player")
}
</script>

<style lang="scss" scoped>
.match {
  @import "@/styles/colors.scss";

  &-container {
    width: 1400px;
    background-color: black;
    color: white;
  }

  &-score {
    display: flex;
    width: 100%;

    &-teamA,
    &-teamB {
      display: flex;
      width: 50%;
      margin: 10px 0;

      .team {
        &-logo {
          width: 150px;
        }

        &-container {
          display: flex;
          justify-content: space-around;
          width: 100%;
        }

        &-name,
        &-points {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        &-name {
          font-size: 30px;
        }

        &-points {
          font-size: 30px;
          width: 80px;
          height: 80px;
          text-align: center;
          background-color: $primary;
          border-radius: 20px;

          &-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }
        }
      }
      .team-container {
        display: flex;
      }
    }
  }

  &-players {
    display: flex;

    &-home,
    &-away {
      width: 45%;
    }

    &-separator {
      width: 10%;
    }

    .starting-five {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin: 30px 0;
      &-card {
        width: 18%;
      }
    }

    .bench,
    .unused {
      margin-bottom: 30px;
    }
  }
}
</style>
