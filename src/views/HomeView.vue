<script setup>
import TopNav from '@/components/TopNav.vue'
import { onMounted, ref } from 'vue';
import MenuItemModal from '../components/modals/MenuItemModal.vue';

</script>

<template>
  <main class="w-full h-screen flex flex-col items-center gap-4 pt-4 px-4 md:px-8 overflow-hidden">
    <MenuItemModal/>
    <TopNav class="flex-none"/>
    <div class="w-full max-w-screen-2xl grow flex flex-col items-center overflow-y-auto md:px-8 py-10">
      <router-view></router-view>
    </div>
  </main>
</template>
