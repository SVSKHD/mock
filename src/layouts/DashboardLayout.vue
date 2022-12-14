<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" class="rounded-borders">
      <q-header elevated class="bg-deep-purple-12">
        <q-toolbar>
          <q-btn
            flat
            @click="drawer = !drawer"
            dense
            icon="menu"
            color="white"
          />
          <q-toolbar-title class="text-white">Zaryan Dasboard</q-toolbar-title>
          <q-space />
          <q-toggle v-model="themeChanger" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-deep-purple-1"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

const menuList = [
  {
    icon: "eva-inbox-outline",
    label: "Account",
    separator: true,
  },
  {
    icon: "eva-checkmark-circle-outline",
    label: "Transactions",
    separator: true,
  },

  {
    icon: "eva-credit-card-outline",
    label: "Atm Cards",
    separator: true,
  },

  {
    icon: "eva-person-outline",
    label: "profile",
    separator: true,
  },
  {
    icon: "eva-question-mark-circle-outline",
    iconColor: "primary",
    label: "Help",
    separator: true,
  },
];

export default {
  setup() {
    let drawer = ref(false);
    return {
      drawer,
      menuList,
    };
  },
};
</script>
