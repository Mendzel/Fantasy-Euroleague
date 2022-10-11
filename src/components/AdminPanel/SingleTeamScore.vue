<template>
  <div>
    <div class="team">
      <img :src="props.club.logo" :alt="props.club.name" class="team-logo" />
      <h2 class="team-name">{{ props.club.name }}</h2>
    </div>

    <SinglePlayerScore
      v-for="player in props.club.players"
      :key="player.name"
      :player="player"
    />
  </div>
</template>

<script setup>
import SinglePlayerScore from "./SinglePlayerScore.vue"

const props = defineProps(["club"])
</script>

<style lang="scss" scoped>
.team {
  display: flex;
  width: 100%;

  &-logo {
    width: 100px;
  }

  &-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
    margin-left: 40px;
  }
}

@media screen and (max-width: 500px) {
    .team {
        margin-bottom: 10px;
        &-name {
            font-size: 30px;
        }
        &-logo {
            width: 80px
        }
    }
}
</style>
