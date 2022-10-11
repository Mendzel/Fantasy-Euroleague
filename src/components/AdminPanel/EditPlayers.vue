<template>
  <div class="player-edit">
    <div
      class="player-edit-row"
      v-if="!adminData.showNewPlayerForm && !adminData.showEditPlayerForm"
    >
      <div class="player-edit-column">
        <Button
          icon="pi pi-user-plus"
          label="Add Player"
          class="player-edit-column-button"
          @click.stop="showForm('new')"
        >
        </Button>
      </div>
      <div class="player-edit-column" cols="12" md="6">
        <Button
          class="player-edit-column-button p-button-warning"
          icon="pi pi-user-edit"
          label="Edit Player"
          @click.stop="showForm('edit')"
        >
        </Button>
      </div>
    </div>
    <PlayerForm v-if="adminData.showNewPlayerForm" :editMode="false" />
    <PlayerForm v-if="adminData.showEditPlayerForm" :editMode="true" />
  </div>
</template>

<script setup>
import { adminStore } from "@/stores/adminData"
import PlayerForm from "./PlayerForm.vue"

const adminData = adminStore()

function showForm(state) {
  adminData.showTheForm(state)
}
</script>

<style lang="scss" scoped>
.player-edit {
  width: 100%;
  height: 90%;

  &-row {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  &-column {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-button {
      width: 150px !important;
      height: 150px !important;
      margin: 10vw;
    }
  }
}

@media screen and (max-width: 770px) {
  .column {
    height: 350px;

    &-button {
      width: 300px;
      height: 300px !important;
    }
  }
}
</style>
