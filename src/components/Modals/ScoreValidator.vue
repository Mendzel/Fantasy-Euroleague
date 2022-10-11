<template>
  <Dialog
    v-model:visible="modalData.showScoreValidator"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '60vw' }"
    :modal="true">
    <div class="validator-container">
      <div class="match-score">
        <div class="team-container">
          <div class="team-name">{{ data.homeTeamName }}</div>
          <div class="team-points">{{ data.matchData.homeScore }}</div>
        </div>
        <div class="team-container">
          <div class="team-points">{{ data.matchData.awayScore }}</div>
          <div class="team-name">{{ data.awayTeamName }}</div>
        </div>
      </div>
      <div class="match-score">Won: {{ winnerTeamName }}</div>
      <div class="buttons">
        <Button label="Confirm" color="success" @click="confirmData()"></Button>
        <Button label="Cancel" color="error" variant="outlined" @click="closeModal()"></Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { useModalStore } from "@/stores/modals.js"

const modalData = useModalStore(),
  data = modalData.dataToValidate

let winnerTeamName, winnerID, looserID

determineWinner()

function determineWinner() {
  if (data.matchData.homeScore >= data.matchData.awayScore) {
    winnerTeamName = data.homeTeamName
    winnerID = data.matchData.homeTeamID
    looserID = data.matchData.awayTeamID
  } else {
    winnerTeamName = data.awayTeamName
    winnerID = data.matchData.awayTeamID
    looserID = data.matchData.homeTeamID
  }
}

function closeModal() {
  modalData.showScoreValidator = false
}

function confirmData() {
  data.matchData = {
    ...data.matchData,
    isMatchActive: false,
    winnerID: winnerID,
    looserID: looserID
  }
  // Tutaj bedziemy wysylac edytowany obiekt ze zmienionymi winnerID, looserID i isMatchActive
  console.log(data.matchData)
  closeModal()
}
</script>

<style lang="scss">
.validator {
  &-container {
    width: 1000px;
    background-color: black;
  }
}

.match {
  &-score {
    display: flex;
    width: 100%;
    color: white;
    justify-content: center;
    margin: 20px 0;

    .team {
      &-container {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      &-name,
      &-points {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &-name {
        font-size: 20px;
        margin-left: 20px;
      }

      &-points {
        font-size: 30px;
        margin: 0 10px;
        width: 20%;
        text-align: center;
        border-radius: 20px;
      }
    }
  }
}

.buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 30px 0;
}

@media screen and (max-width: 1000px) {
  .validator {
    &-container {
      width: 100%;
    }
  }
}
</style>
