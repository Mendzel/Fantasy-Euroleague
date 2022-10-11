<template>
  <div class="team-stats">
    <div class="team-stats-row">
      <div class="team-stats-box">
        <StatBox
          firstColumnName="Team"
          secondColumnName="Points"
          tableName="Points scored per game"
          :tableData=tableData
        />
      </div>
      <div class="team-stats-box">
        <StatBox
          firstColumnName="Team"
          secondColumnName="Points"
          tableName="Points alowed per game"
          tableData=""
        />
      </div>
      <div class="team-stats-box">
        <StatBox
          firstColumnName="Team"
          secondColumnName="Balance"
          tableName="Home Results"
          tableData=""
        />
      </div>
      <div class="team-stats-box">
        <StatBox
          firstColumnName="Team"
          secondColumnName="Balance"
          tableName="Away Results"
          tableData=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import StatBox from "./StatBox.vue"
import { playersAndTeamsStore } from "../../stores/playersAndTeams"

const playersAndTeamsData = playersAndTeamsStore(),
  teams = playersAndTeamsData.teams,
  tableData = mockTableData();

  console.log(teams)
function mockTableData() {
  let arrayToReturn = [];

  for(let team of teams) {
    const data = {
      image: team.logoURL,
      name: team.name,
      value: Math.floor(Math.random() * 120)
    }
    arrayToReturn.push(data)
  }

  return arrayToReturn
}
</script>

<style lang="scss">
.team-stats {
  &-row {
    display: flex;
    justify-content: space-around;
    margin: 100px 0;
  }
}

@media screen and (max-width: 800px){
  .team-stats {
    &-row {
      flex-direction: column;
    }
  }
}
</style>
