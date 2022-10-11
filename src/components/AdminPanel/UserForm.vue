<template>
  <div class="user-editor">User Data</div>
  <div class="user-editor-table">
    <InputText
      v-model="name"
      placeholder="Name"
      class="user-editor-input"
    ></InputText>
    <InputText
      v-model="email"
      placeholder="email"
      class="user-editor-input"
    ></InputText>
    <Dropdown
      v-model="team"
      :options="playersAndTeamsData.teams"
      optionLabel="name"
      opionValue="id"
      placeholder="Manager Of"
      class="user-editor-input"
    ></Dropdown>
    <Button
      class="user-editor-button"
      label="Save"
      @click="sendData()"
    ></Button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { adminStore } from "@/stores/adminData"
import { playersAndTeamsStore } from "@/stores/playersAndTeams"

const adminData = adminStore()
const playersAndTeamsData = playersAndTeamsStore()
const props = defineProps(["user"])

let name = ref(props.user.name)
let email = ref(props.user.email)
let team = ref(playersAndTeamsData.findTeamByName(props.user.team))

function sendData() {
  const editedUser = {
    name: name.value,
    email: email.value,
    teamID: team.value.id
  }

  adminData.sendUserChanges(editedUser)
}
</script>

<style lang="scss">
.user-editor {
  text-align: center;
  margin-bottom: 10px;

  &-table {
    display: flex;
    justify-content: space-around;
  }

  &-input,
  &-button {
    width: 10vw;
  }
}

.p-inputtext {
  font-family: "Gemunu Libre", sans-serif !important;
}

@media screen and (max-width: 1000px) {
  .user-editor {
    &-table {
      flex-direction: column;
      align-items: center;
    }
    &-input,
    &-button {
      width: 70vw;
      margin: 5px 0 !important;
    }
  }
}
</style>
