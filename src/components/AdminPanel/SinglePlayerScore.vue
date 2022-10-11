<template>
  <div class="player">
    <div class="player-name">{{ props.player.name }}</div>
    <div class="player-points">
      <v-text-field v-model="points"></v-text-field>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps(["player"])

const points = ref(props.player.pointsScored)
</script>

<style lang="scss">
.player {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  height: 60px;

  &-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    padding: 20px;
  }

  &-points {
      width: 100px;
  }
}
</style>
