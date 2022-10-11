<template>
  <div
    :id="props.player.id"
    class="card"
    :style="{ 'background-color': props.teamColor }"
    @click="toggleCard()"
  >
    <div class="card-face card-face-front">
      <div class="card-position">
        <div class="card-position-background">
          {{ props.position }}
        </div>
      </div>
      <div class="card-photo">
        <img :src="props.player.fullPhotoURL" :alt="props.player.name" />
        <span class="card-photo-playername">{{ props.player.name }}</span>
      </div>
    </div>
    <div class="card-face card-face-back">
      <div>
        <div class="card-face-back-title">Court position:</div>
        <div class="card-face-back-data">{{ props.player.position }}</div>
      </div>
      <div>
        <div class="card-face-back-title">Nationality</div>
        <div class="card-face-back-data">
          <country-flag
            class="flag"
            :country="
              constantsData.assignFlagShortcut(props.player.nationality)
            "
            size="big"
          ></country-flag>
        </div>
      </div>
      <div>
        <div class="card-face-back-title">Club</div>
        <div v-if="myClub" class="card-face-back-data">
          <img
            class="card-face-back-img"
            :src="myClub.logo"
            :alt="myClub.name"
          />
        </div>
      </div>
      <div>
        <div class="card-face-back-title">Points Scored</div>
        <div class="card-face-back-data">0</div>
      </div>
      <span class="card-photo-playername">{{ props.player.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { constantsStore } from "../../stores/constants"
import CountryFlag from "vue-country-flag-next"

const props = defineProps(["player", "teamColor", "position"]),
  constantsData = constantsStore(),
  myClub = findRealClub(props.player.clubId)

function findRealClub(clubID) {
  return constantsData.findClubByID(clubID)
}

function toggleCard() {
  document.getElementById(props.player.id).classList.toggle("is-flipped")
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.card {
  height: 600px;
  width: 250px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;

  &-face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;

    &-back {
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 10px;
      padding-bottom: 50px;

      &-title {
        font-size: 18px;
        margin-bottom: 10px;
        text-align: center;
        color: $light_gray;
      }

      &-data {
        font-size: 25px;
        text-align: center;
        font-weight: bold;
      }

      &-img {
        width: 80px;
      }

      .flag {
        border: 1px solid $light_gray;
      }
    }
  }

  &-position {
    opacity: 0.5;
    height: 15%;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;

    &-background {
      width: 20%;
      height: 50px;
      text-align: center;
      background-color: black;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  &-photo {
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    img {
      opacity: 0.5;
    }

    &-playername {
      position: absolute;
      bottom: 0;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.65);
      font-size: 20px;
      font-weight: 700;
    }
  }
}

.card:hover {
  .card-position,
  .card-photo img {
    cursor: pointer;
    opacity: 1;
  }
}

.card.is-flipped {
  transform: rotateY(180deg);
}
</style>
