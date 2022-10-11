<template>
  <div
    class="card"
    :id="props.player.id"
    :style="{ 'background-color': props.teamColor }"
    @click="toggleCard()"
  >
    <div class="card-face card-face-front">
      <div class="card-photo">
        <img
          class="card-photo-image"
          :src="props.player.facePhotoURL"
          :alt="props.player.name"
        />
      </div>
      <div class="card-data">
        <div class="card-data-position bench" v-if="props.index < 6">
          <i class="pi pi-sync"></i>
        </div>
        <div class="card-data-position reserve" v-if="props.index >= 6">
          <i class="pi pi-times"></i>
        </div>
        <div class="card-data-name" :class="{'reserve': props.index >= 6}">
          {{ props.player.name }}
        </div>
      </div>
    </div>

    <div class="card-face card-face-back">
      <div class="row-one">
        <div class="center-verticaly">
          <country-flag
            class="flag"
            :country="
              constantsData.assignFlagShortcut(props.player.nationality)
            "
            size="normal"
          ></country-flag>
        </div>
        <div v-if="myClub" class="center-verticaly">
          <img
            class="card-face-back-img"
            :src="myClub.logo"
            :alt="myClub.name"
          />
        </div>
      </div>

      <div class="row-two">
        <div class="center-verticaly row-two-position">{{ props.player.position }}</div>
        <div class="center-verticaly">
          <div class="row-two-title">Points</div>
          <div class="row-two-data">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { constantsStore } from "../../stores/constants"
import CountryFlag from "vue-country-flag-next"

const props = defineProps(["player", "teamColor", "index"]),
  constantsData = constantsStore(),
  myClub = findRealClub(props.player.clubId)

function findRealClub(clubID) {
  return constantsData.findClubByID(clubID)
}

function toggleCard() {
  console.log(document.getElementById(props.player.id))
  document.getElementById(props.player.id).classList.toggle("is-flipped")
}
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.card {
  height: 150px;
  width: 230px;
  margin: 10px;
  display: flex;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;

  &-face {
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;

    &-back {
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      height: 100%;

      &-img {
        width: 50px;
      }
      .row {
        &-one {
          margin-top: 5px;
          height: 30%;
          display: flex;
          justify-content: space-around;
        }

        &-two {
          padding: 20px 0;
          height: 70%;
          display: flex;
          justify-content: space-around;

          &-position {
            font-size: 50px;
            font-weight: bold;
          }

          &-title {
            color: $light_gray;
            font-size: 15px;
          }

          &-data {
            font-size: 25px;
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  }

  &-photo {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    &-image {
      width: 100%;
    }
  }

  &-data {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    &-position {
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
    }
    &-name {
      height: 50%;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      color: black;
      font-weight: 600;
    }
  }
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.center-verticaly {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bench {
  color: black;
}
.reserve {
  color: red;
}
</style>
