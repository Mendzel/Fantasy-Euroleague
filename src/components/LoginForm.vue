<template>
  <v-form class="form" ref="form">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      label="Password"
      required
    ></v-text-field>

    <v-btn color="error" class="form-button" @click="submit"> Zaloguj </v-btn>
  </v-form>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")

const emailRules = [
  (v) => !!v || "Required",
  (v) => /.+@.+\..+/.test(v) || "Please enter correct e-mail address."
]

function submit() {
  console.log(email.value, password.value)
}
</script>

<style lang="scss">
.form {
  text-align: center;
}
</style>
