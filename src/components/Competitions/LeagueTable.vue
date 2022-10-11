<template>
  <DataTable
    class="table"
    :lazy="true"
    :value="tableData"
    responsiveLayout="scroll"
    :rowHover="true"
  >
    <Column field="team" header="Team">
      <template #body="{ data }">
        <div class="table-teams" @click="showTeamModal(data.team)">
          <div class="table-teams-center">
            <img
              class="table-teams-logo"
              :src="data.team.logoURL"
              :alt="data.team.name"
            />
          </div>
          <div class="table-teams-center">
            {{ data.team.name }}
          </div>
        </div>
      </template>
    </Column>
    <Column field="wins" header="Wins" sortable>
      <template #body="{ data }">
        {{ data.wins }}
      </template>
    </Column>
    <Column field="loses" header="Loses" sortable>
      <template #body="{ data }">
        {{ data.loses }}
      </template>
    </Column>
    <Column v-if="!props.homeScreen" field="smallPoints" header="+/-" sortable>
      <template #body="{ data }">
        {{ data.smallPoints }}
      </template>
    </Column>
    <Column
      v-if="!props.homeScreen"
      field="pointsDifference"
      header="Difference"
      sortable
    >
      <template #body="{ data }">
        {{ data.pointsDifference }}
      </template>
    </Column>
    <Column field="winRatio" header="Win Ratio" sortable>
      <template #body="{ data }">
        {{ data.winRatio }}
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import { playersAndTeamsStore } from "../../stores/playersAndTeams"
import { useModalStore } from "@/stores/modals"

const teamsData = playersAndTeamsStore(),
  modalData = useModalStore(),
  props = defineProps(["homeScreen"]),
  tableData = buildTableData()

function buildTableData() {
  const arrayOfTeams = []

  for (let singleTeam of teamsData.teams) {
    const data = {
      team: singleTeam,
      wins: 0,
      loses: 0,
      smallPoints: "0:0",
      pointsDifference: 0,
      winRatio: Math.random().toFixed(2)
    }

    arrayOfTeams.push(data)
  }
  return arrayOfTeams
}

function showTeamModal(team) {
  modalData.setTeamData(team)
  modalData.showModal("team")
}
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.table {
  margin-top: 20px;
  width: 100%;
  border: 1px solid white !important;

  &-teams {
    display: flex;

    &-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 2px;
      height: 38px;
    }

    &-logo {
      width: 38px;
      max-height: 38px;
    }
  }
}

.p-datatable .p-datatable-thead > tr > th {
  color: black !important;
  background: $primary !important;
}
.p-datatable .p-datatable-tbody > tr {
  background: $tableBackground !important;
  color: white !important;
}
</style>
