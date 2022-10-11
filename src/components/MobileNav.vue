<template>
  <div class="mobile-nav">
    <div class="mobile-nav-drawer center">
      <i class="pi pi-bars" @click.stop="navigationStore.toggleDrawer()"></i>
    </div>
    <div>
      <router-link class="mobile-nav-brand" to="/home">
        <div class="mobile-nav-brand-logo center">
          <img
            class="mobile-nav-brand-logo"
            src="https://i.imgur.com/5Woinpu.png"
          />
        </div>
        <div class="mobile-nav-brand-info center">
          <div class="mobile-nav-brand-info-team">Mallorcas Orcas</div>
          <div class="mobile-nav-brand-info-coach">Coach Andre</div>
        </div>
      </router-link>
    </div>
    <div class="mobile-nav-settings">
      <router-link class="mobile-nav-settings-icon center" to="/admin">
        <i class="pi pi-shield"></i>
      </router-link>
      <div class="mobile-nav-settings-icon center">
        <i class="pi pi-cog" @click="modalData.showModal('settings')"></i>
      </div>
      <div class="mobile-nav-settings-icon center">
        <i class="pi pi-sign-out"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavigationStore } from "@/stores/navigation"
import { useModalStore } from "@/stores/modals"

const navigationStore = useNavigationStore()
const modalData = useModalStore()
</script>

<style lang="scss">
@import "@/styles/colors.scss";

.mobile-nav {
  background-color: $primary;
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 10px;

  &-brand {
    display: flex;
    height: 50px;
    text-decoration: none;
    color: black;

    &-logo {
      width: 40px;
    }

    &-info {
      display: flex;
      flex-direction: column;
    }
  }

  &-settings {
    display: flex;
    height: 100%;

    a {
      text-decoration: none;
    }

    i {
      margin: 0 10px;
      color: black;
    }
  }
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
