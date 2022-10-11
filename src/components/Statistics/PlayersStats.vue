<template>
  <div class="player-stats">
    <div class="player-stats-row">
      <div class="player-stats-box">
        <div>Points Scored</div>
        <StatBox
          firstColumnName="Team"
          secondColumnName="Points"
          tableData=""
        />
      </div>
      <div class="player-stats-box">
        <div>Points Scored per game</div>
        <StatBox
          firstColumnName="Team"
          secondColumnName="Points"
          tableData=""
        />
      </div>
    </div>

    <div class="player-stats-row">
      <div class="player-stats-box">
        <div>Best 6th Man</div>
        <StatBox
          firstColumnName="Team"
          secondColumnName="Balance"
          tableData=""
        />
      </div>
      <div class="player-stats-box">
        <div>Most Captained</div>
        <StatBox
          firstColumnName="Team"
          secondColumnName="Balance"
          tableData=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import StatBox from "./StatBox.vue"
</script>

<style lang="scss"></style>
