<template>
  <Dialog
    :header="player.name"
    v-model:visible="modalData.showPlayerDetails"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '40vw' }"
    :modal="true"
  >
    <div class="player-container">
      <div class="player-section-photo">
        <img :src="player.photoURL" :alt="player.name" />
        <span class="player-section-photo-clublogo"></span>
      </div>
      <div class="player-section-data">
        <div class="player-section-data-single">
          <div class="label">Age</div>
          <div class="text">{{ player.age }}</div>
        </div>
        <div class="player-section-data-single">
          <div class="label">Position</div>
          <div class="text">{{ player.position }}</div>
        </div>
        <div class="player-section-data-single">
          <div class="label">Nationality</div>
          <div class="text">{{ player.nationality }}</div>
        </div>
        <div class="player-section-data-single">
          <div class="label">Fantasy Team</div>
          <div class="text">{{ player.fantasyClub }}</div>
        </div>
        <div class="player-section-data-stats">
          <div class="stat">
            <div class="label">Points Scored</div>
            <div class="text">{{ player.pointsScored }}</div>
          </div>
          <div class="stat">
            <div class="label">PPG</div>
            <div class="text">0</div>
          </div>
        </div>
      </div>
    </div>
    <Button class="settings-button" label="Go back" @click="closeModal()">
    </Button>
  </Dialog>
</template>

<script setup>
import { useModalStore } from "@/stores/modals.js"

const modalData = useModalStore()
let player = modalData.playerData

function closeModal() {
  modalData.showPlayerDetails = false
  modalData.playerData = {}
  if (modalData.wasTeamModalOpen) {
    modalData.showTeamDetails = true
    modalData.wasTeamModalOpen = false
  } else if (modalData.wasMatchModalOpen) {
    modalData.showMatchDetails = true
    modalData.wasMatchModalOpen = false
  }
}
</script>

<style lang="scss" scoped>
.player {
  &-container {
    height: 500px;
    width: 1000px;
    display: flex;
    background-color: black;
    color: white;
  }

  &-section {
    &-photo {
      width: 30%;
    }
    &-data {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      &-stats {
        display: flex;
      }
    }
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

.stat {
  padding-right: 30px;
}

@media screen and (max-width: 1000px) {
  .player {
    &-container {
      width: 100%;
    }
  }
}
</style>
