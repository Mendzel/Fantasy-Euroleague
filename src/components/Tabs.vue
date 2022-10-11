<template>
  <TabMenu class="tabs" :model="props.tabs"/>
  <router-view />
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  tabs: Array
})
const tab = ref("")
</script>

<styles lang="scss">
.p-tabmenu-nav {
  justify-content: center !important;
}
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
  color: black !important;
  border-color: black !important;
}
</styles>
