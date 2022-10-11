<template>
  <DataTable
    :value="props.data"
    v-model:expandedRows="expandedRows"
    dataKey="id"
    responsiveLayout="scroll"
    class="expandable-table"
  >
    <Column :expander="true" headerStyle="width: 3rem" />
    <Column v-if="props.typeOfData === 'team'">
      <template #body="slotProps">
        <img class="logo" :src="slotProps.data.logoURL" :alt="slotProps.data.name" />
      </template>
    </Column>
    <Column field="name"></Column>
    <template #expansion="slotProps">
      <div v-if="props.typeOfData === 'team'">
        <TeamForm v-show="show" :team="slotProps.data" />
      </div>
      <div v-if="props.typeOfData === 'user'">
        <UserForm v-show="show" :user="slotProps.data" />
      </div>
    </template>
  </DataTable>
</template>

<script setup>
import { ref } from "vue"
import TeamForm from "./TeamForm.vue"
import UserForm from "./UserForm.vue"

const props = defineProps(["data", "typeOfData"])
let show = ref(false),
  expandedRows = ref([])
</script>

<style lang="scss">
.expandable-table {
  width: 50vw;
  margin: auto;
  padding-bottom: 100px;
}
.logo {
  width: 100px;
}

@media screen and (max-width: 1000px) {
  .expandable-table {
    width: 80vw;
  }
}
</style>
