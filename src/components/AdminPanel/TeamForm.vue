<template>
  <div class="team-form-header">Team Data</div>
  <div class="team-form">
    <div class="team-form-column">
      <InputText
        class="team-form-input"
        id="name"
        v-model="name"
        placeholder="Name"
      ></InputText>
      <InputText
        class="team-form-input"
        v-model="logo"
        placeholder="Logo URL"
      ></InputText>
    </div>
    <div class="team-form-column">
      <div class="team-form-column-colors">
        <div class="center">Color Primary</div>
        <div class="center"><ColorPicker v-model="colorPrimary"/></div>
      </div>
      <div class="team-form-column-colors">
        <div class="center">Color Secondary</div>
        <div class="center"><ColorPicker v-model="colorSecondary"/></div>
      </div>
    </div>
  </div>
  <div class="team-form-button-container">
    <Button label="Save" class="team-form-button" @click="sendData()" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import { adminStore } from "@/stores/adminData"

const adminData = adminStore()
const props = defineProps(["team"])

let name = ref(props.team.name),
  logo = ref(props.team.logoURL),
  colorPrimary = ref(props.team.colorPrimary),
  colorSecondary = ref(props.team.colorSecondary)

function sendData() {
  const editedTeam = {
    name: name.value,
    logoURL: logo.value,
    colorPrimary: colorPrimary.value,
    colorSecondary: colorSecondary.value
  }

  adminData.sendTeamChanges(editedTeam)
}
</script>

<style lang="scss" scoped>
.team-form {
  display: flex;

  &-header {
    text-align: center;
    margin-bottom: 20px;
  }

  &-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-bottom: 10px;

    &-colors {
      display: flex;
      width: 100%;
      height: 50%;
      justify-content: center;

      .center {
        margin: 0;
        width: 25%;
      }
    }
  }

  &-input {
    width: 70%;
    margin: 5px;
  }

  &-button {
    width: 100px !important;

    &-container {
      width: 100%;
      text-align: center;
    }
  }
}

@media  screen and (max-width: 1000px) {
  .team-form {
    &-input {
      width: 90%;
    }

    &-column-colors {
      .center {
        width: 100%;
      }
    }
  }
}
</style>
