<template>
  <div class="dock">
    <Dock
      class="drawer"
      :model="navigationStore.navDrawerLinksList"
      position="bottom"
    >
      <template #icon="{ item }">
        <router-link v-if="item.path" :to="item.path">
          <img :alt="item.label" :src="item.icon" style="width: 100%" />
        </router-link>
        <img
          v-if="item.settings"
          @click="modalData.showModal('settings')"
          :alt="item.label"
          :src="item.icon"
          style="width: 100%"
        />
        <img
          v-if="item.logout"
          :alt="item.label"
          :src="item.icon"
          style="width: 100%"
        />
      </template>
    </Dock>
  </div>
</template>

<script setup>
import { useNavigationStore } from "@/stores/navigation"
import { useModalStore } from "@/stores/modals"

const navigationStore = useNavigationStore()
const modalData = useModalStore()
</script>

<styles lang="scss">
.drawer {
  display: block;
}
.p-dock {
  position: fixed !important;
}
@media screen and (max-width: 770px) {
  .drawer {
    display: none !important;
  }
}
</styles>
