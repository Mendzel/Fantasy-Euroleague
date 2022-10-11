<template>
  <div class="teamsSection">
    <h1 class="teamsSection-title">Teams in the League</h1>
    <div class="teamsSection-container">
      <div v-for="(team, i) in playersAndTeamsData.teams" :key="i">
        <div class="teamsSection-container-logo">
          <img
            :src="team.logoURL"
            alt="team.name"
            class="teamsSection-container-image"
          />
        </div>
        <p class="teamsSection-container-caption">{{ team.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { playersAndTeamsStore } from "../../stores/playersAndTeams"
const playersAndTeamsData = playersAndTeamsStore()
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.teamsSection {
  height: 300px;
  background-color: $primary;

  &-title {
    padding-top: 30px;
    text-align: center;
    margin: 0;
  }

  &-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;

    &-image {
      max-width: 100%;
      max-height: 100%;
      margin-bottom: 10px;
    }

    &-caption {
      color: black;
      font-weight: bold;
      text-align: center;
      font-size: 14px;
    }

    &-logo {
      width: 150px;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
