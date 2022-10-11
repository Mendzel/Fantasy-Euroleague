<template>
  <Card :class="props.color" class="card">
    <template #title>
      <div>
        {{ props.title }}
      </div>
    </template>
    <template #content>
      <div :id="titleWithoutSpaces"></div>
    </template>
    <template #footer v-if="!homeScreen">
      <Button class="button" label="Edit" icon="pi pi-file-edit"></Button>
      <Button class="p-button-danger button" label="Delete" icon="pi pi-file-excel"></Button>
    </template>
  </Card>
</template>

<script setup>
import { onMounted, onUpdated } from "vue"

const props = defineProps(["title", "color", "message", "homeScreen"]),
  titleWithoutSpaces = props.title.replaceAll(" ", "-")

onMounted(() => {
  document.getElementById(titleWithoutSpaces).innerHTML = props.message
})
onUpdated(() => {
  document.getElementById(titleWithoutSpaces).innerHTML = props.message
})
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin: 10px 0;
}
.button {
  border: 1px solid rgba(255, 255, 255, 0.575) !important;
  margin: 0 5px;
}
.red {
  background-color: #eb4034;
}
.orange {
  background-color: #f09029;
}
.yellow {
  background-color: #e6c822;
}
.green {
  background-color: #4bbb58;
}
</style>
