<template>
  <div v-if="navigationStore.mobileNavDrawer" class="mobile-drawer">
    <div v-for="(link, i) in navigationStore.navDrawerLinksList">
      <router-link v-if="link.path && link.path != '/home' && link.path != '/admin'" :key="i" :to="link.path">
        {{ link.label }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useNavigationStore } from "@/stores/navigation"

const navigationStore = useNavigationStore()
</script>

<style lang="scss"></style>
