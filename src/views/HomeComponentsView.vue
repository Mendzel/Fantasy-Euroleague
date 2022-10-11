<template>
  <div v-if="playersAndTeamsData.teams" class="column">
    <div class="column-first">
      <div class="column-first-table">
        <div class="column-first-table-text header">League Table</div>
        <LeagueTableVue
          class="column-first-table-container"
          :homeScreen="true"
        />
      </div>
    </div>
    <div class="column-second">
      <div class="column-second-game">
        <div class="header">Next game</div>
        <div v-if="myNextRival" class="column-second-game-container">
          <div class="round-data">
            <div>
              {{ currentRound[0].roundName }}
            </div>
            <div>Round Start Date: {{ currentRound[0].dateOfStart }}</div>
          </div>
          <div class="logo-container" @click="showTeamModal(myNextRival)">
            <img
              class="logo"
              :src="myNextRival.logoURL"
              :alt="myNextRival.name"
            />
          </div>
          <div class="match-info" @click="showTeamModal(myNextRival)">
            <span class="icon">
              <i :class="[amIHomeTeam ? 'pi pi-home' : 'pi pi-car']" style="font-size: 1.5rem"></i>
            </span>
            vs {{ myNextRival.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="column-third">
      <div class="header">Announcements</div>
      <News
        v-for="news in newsesToShow"
        :title="news.title"
        :color="news.color"
        :message="news.message"
        :homeScreen="true"
      />
    </div>
  </div>
</template>

<script setup>
import { adminStore } from "@/stores/adminData"
import { sessionDataStore } from "../stores/sessionData"
import { constantsStore } from "../stores/constants"
import { playersAndTeamsStore } from "../stores/playersAndTeams"
import { useModalStore } from "@/stores/modals"

import LeagueTableVue from "../components/Competitions/LeagueTable.vue"
import News from "@/components/AdminPanel/News.vue"

const adminData = adminStore(),
  sessionData = sessionDataStore(),
  constantsData = constantsStore(),
  playersAndTeamsData = playersAndTeamsStore(),
  modalData = useModalStore(),
  newsesToShow = adminData.newses

let currentRound,
  myNextGame = findMyNextGame(),
  myNextRival = findMyNextRival(myNextGame)

const amIHomeTeam = myNextGame.homeTeamID == sessionData.myTeamID

function findMyNextGame() {
  currentRound = constantsData.fixtures.filter((round) => {
    return round.roundID === sessionData.currentFixture
  })

  let thisRoundGames = []
  constantsData.matches.forEach((match) => {
    if (
      match.matchID === currentRound[0].matches[0] ||
      match.matchID === currentRound[0].matches[1] ||
      match.matchID === currentRound[0].matches[2] ||
      match.matchID === currentRound[0].matches[3] ||
      match.matchID === currentRound[0].matches[4] ||
      match.matchID === currentRound[0].matches[5]
    ) {
      thisRoundGames.push(match)
    }
  })

  const myGame = thisRoundGames.filter((game) => {
    return (
      game.homeTeamID == sessionData.myTeamID ||
      game.awayTeamID == sessionData.myTeamID
    )
  })
  return myGame[0]
}

function findMyNextRival(game) {
  sessionDataStore.rivalID =
    game.homeTeamID == sessionData.myTeamID ? game.awayTeamID : game.homeTeamID

  const rivalTeam = playersAndTeamsData.teams.filter((team) => {
    return team.id == sessionDataStore.rivalID
  })

  return rivalTeam[0]
}

function showTeamModal(team) {
  modalData.setTeamData(team)
  modalData.showModal("team")
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.column {
  display: flex;
  flex-direction: row;
  height: 100%;

  &-first,
  &-second,
  &-third {
    width: 33%;
    margin: 5px 20px;
    color: white;
  }

  &-second-game {
    height: 100%;
  }
  &-second-game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;

    .logo {
      width: 250px;
    }

    .match-info {
      font-size: 32px;
    }

    .match-info,
    .logo-container {
      cursor: pointer;
    }

    .round-data {
      font-size: 25px;
      text-align: center;
      margin-bottom: 200px;
    }
  }

  &-first {
    &-table {
      margin: auto;
      width: 100%;

      &-container {
        border: 1px solid rgb(76, 76, 76);
      }
    }
  }
}

.header {
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0;
  text-align: center;
}

@media screen and (max-width: 1050px) {
  .column {
    flex-direction: column;
    width: 100%;

    &-first,
    &-second,
    &-third {
      width: 96%;
    }

    &-second {
      order: 1;
    }

    &-second-game {
      height: 100%;
    }
    &-second-game-container {
      flex-direction: row;
      width: 100%;

      .logo {
        width: 200px;
      }

      .logo-container,
      .round-data {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
      }

      .match-info {
        display: none;
      }
    }

    &-third {
      order: 2;
    }

    &-first {
      order: 3;
    }
  }
}

@media screen and (max-width: 450px) {
  .column {
    &-first,
    &-second,
    &-third {
      width: 100%;
      margin: 5px 0;
    }

    &-third,
    &-second {
      padding: 0 5px;
    }

    &-first {
      &-table {
        &-container {
          border: none;
        }
      }
    }
  }
}
</style>
