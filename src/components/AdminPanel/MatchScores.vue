<template>
  <div
    v-for="fixture in constantsData.fixtures"
    :key="fixture.roundID"
    class="round"
  >
    <div class="round-name">
      <h2>{{ fixture.roundName }}</h2>
    </div>

    <div class="round-matches">
      <MatchTab
        v-for="match in fixture.matches"
        :matchID="match"
        :notAdmin="props.notAdmin"
      />
    </div>
  </div>
</template>

<script setup>
import { constantsStore } from "@/stores/constants"
import MatchTab from "@/components/Competitions/MatchTab.vue"

const constantsData = constantsStore(),
  props = defineProps(["notAdmin"])
</script>

<style lang="scss" scoped>
.round {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  color: white;

  &-name {
    text-align: center;
    margin: 30px 0;
  }
}
</style>
