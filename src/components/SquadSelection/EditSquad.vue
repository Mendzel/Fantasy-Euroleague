<template>
  <v-container fluid>
    <v-select :items="pointguardsToSelect" label="PG"> </v-select>
    <v-select :items="pointguardsToSelect" label="SG"> </v-select>
    <v-select :items="pointguardsToSelect" label="SF"> </v-select>
    <v-select :items="pointguardsToSelect" label="PF"> </v-select>
    <v-select :items="pointguardsToSelect" label="C"> </v-select>
    <v-select :items="pointguardsToSelect" label="Rezerwowy"> </v-select>
    <v-select :items="pointguardsToSelect" label="Rezerwowy"> </v-select>
    <v-select :items="pointguardsToSelect" label="Rezerwowy"> </v-select>
    <v-select :items="pointguardsToSelect" label="Rezerwowy"> </v-select>
    <v-select :items="pointguardsToSelect" label="Rezerwowy"> </v-select>
    <v-select :items="pointguardsToSelect" label="Poza Składem"> </v-select>
    <v-select :items="pointguardsToSelect" label="Poza Składem"> </v-select>
    <div class="bonus-selection">
        <div class="bonus-selection-captain">
            <img v-if="captainSelected" src="" alt="">
            <v-select :items="allPlayers" label="Kapitan"> </v-select>
        </div>
        <div class="bonus-selection-6thman">
            <img v-if="sixthmenSelected" src="" alt="">
            <v-select :items="allPlayers" label="6th Men"> </v-select>
        </div>
        <div class="bonus-selection-defender">
            <img v-if="defenderSelected" src="" alt="">
            <v-select :items="allPlayers" label="Obrońca"> </v-select>
        </div>
    </div>
  </v-container>
</template>

<script setup>
let pointguardsToSelect = []
const allPlayers = []
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.bonus-selection {
    width: 100%;
    display: flex;
    justify-content: space-around;

    &-6thman, &-captain, &-defender {
        width: 25%;
        margin-top: 40px;
    }
}

.v-input__details {
    margin-bottom: 0;
    min-height: 0;
}
.v-messages {
    min-height: 0;
}
</style>
