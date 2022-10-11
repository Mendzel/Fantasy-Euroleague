<template>
  <div class="stat-table-name">
    {{ props.tableName }}
  </div>
  <v-table class="stat-table" theme="dark">
    <thead>
      <tr>
        <th class="text-left">{{ props.firstColumnName }}</th>
        <th class="text-left">{{ props.secondColumnName }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.tableData" :key="item.name">
        <td>
          <img class="stat-table-image" :src="item.image" :alt="item.name" />
          {{ item.name }}
        </td>
        <td>{{ item.value }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const props = defineProps([
  "firstColumnName",
  "secondColumnName",
  "tableName",
  "tableData"
])
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

.stat-table {
  thead {
    background-color: $secondary;
    color: $primary;
  }
  border: 1px solid gray;
  width: 350px;
  &-image {
    width: 30px;
  }
}
</style>
