<template>
  <div>
    <h1>Users</h1>
    <CardContainer :data="adminData.users" :typeOfData="'user'" />
  </div>
</template>

<script setup>
import { adminStore } from "@/stores/adminData"
import CardContainer from "./CardContainer.vue"

const adminData = adminStore()
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  text-align: center;
  margin: 30px;
}
</style>
