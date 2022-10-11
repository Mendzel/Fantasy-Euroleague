<template>
  <Dialog
    header="Settings"
    v-model:visible="modalData.showSettings"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <div class="settings-container">
      <!-- <div class="row">
        <div class="settings-row">
          <div class="settings-row-label">Theme</div>
          <div class="settings-row-form">
            <v-select v-model="theme" :items="themes"></v-select>
          </div>
        </div>
      </div> -->
      <div class="row">
        <div class="settings-row">
          <div class="settings-row-label">Password</div>
          <div class="settings-row-form">
            <Button color="secondary">Reset password</Button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="settings-row">
          <div class="settings-row-label">Notifications</div>
          <div class="settings-row-form">
            <!-- <v-checkbox
              v-model="push"
              label="Push"
              color="primary"
            ></v-checkbox>
            <v-checkbox
              v-model="email"
              label="Email"
              color="primary"
            ></v-checkbox> -->
          </div>
        </div>
      </div>
      <Button
        label="Save"
        class="settings-button p-button-success"
        @click="sendData()"
      ></Button>
    </div>
  </Dialog>
</template>

<script setup>
import { useModalStore } from "@/stores/modals.js"
import { adminStore } from "@/stores/adminData.js"
import { ref } from "vue"

const modalData = useModalStore()
const adminData = adminStore()
const user = adminData.users[2]
const themes = ["Dark", "Light", "Team Colors (Beta)"]
let theme = ref(user.theme)
let push = ref(user.notifications.push)
let email = ref(user.notifications.email)

function sendData() {
  console.log(theme.value, push.value, email.value)
}
</script>

<style lang="scss">
.settings {
  &-container {
    width: 1000px;
    background-color: black;
  }

  &-row {
    width: 100%;
    display: flex;
    color: white;
    border-bottom: 1px solid rgb(131, 131, 131);

    &-label {
      width: 30%;
      height: 150px;
      padding-left: 22px;
      border-right: 2px solid white;
    }

    &-form {
      width: 70%;
      padding-left: 40px;
    }

    &-label,
    &-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &-button {
    width: 100px;
    margin: 10px;
    float: right;
  }
}

@media screen and (max-width: 1000px) {
  .settings {
    &-container {
      width: 100%;
    }
  }
}
</style>
