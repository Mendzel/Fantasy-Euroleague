<template>
  <div class="player-card-container">
    <div class="player-card-photo">
      <img :src="props.player.facePhotoURL" :alt="props.player.name" />
      <div v-if="isCaptain" class="player-card-icon"><i class="pi pi-verified"></i></div>
      <div v-if="isDefender" class="player-card-icon"><i class="pi pi-lock"></i></div>
    </div>
    <div class="player-card-box">
      <div class="player-card-box-row">
        <div class="name">{{ lastName }}</div>
      </div>
      <div class="player-card-box-row">
        <div class="points">0</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["player"]),
  isCaptain = true,
  isDefender = false,
  lastName = props.player.name.substring(props.player.name.indexOf(" ") + 1)

console.log(props.player)
</script>
<style lang="scss">
@import "@/styles/colors.scss";

.player-card {
  &-photo {
    display: flex;
    justify-content: center;
    position: relative;

    img {
      width: 100px;
    }
  }

  &-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: $primary;
    border-radius: 14px;
    width: 28px;
    height: 28px;
    font-size: 15px;
    color: black;
  }

  &-box {
    width: 100%;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    &-row {
      .name,
      .points {
        border-radius: 4px;
        padding: 2px;
        margin: 2px 0;
        text-align: center;
        color: black;
        font-weight: 600;
      }

      .name {
        font-size: 14px;
      }

      .points {
        font-size: 16px;
        background-color: rgb(203, 203, 203);
        margin: 2px 8px 8px 8px;
      }
    }
  }
}
</style>
