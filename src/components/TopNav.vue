<template>
    <nav class="w-full max-w-screen-xl h-12 flex items-center justify-between lg:px-8">
      <div class="flex items-center gap-2 lg:gap-8">
        <router-link :to="{name : 'menu'}">
        <img src="@/assets/logo.svg" class="w-12" alt="">
</router-link>
        <button class="btn bg-white border-0 hover:bg-white hover:border hover:border-primary transition-all duration-150 btn-sm w-40 hidden lg:flex items-center justify-between capitalize font-normal fill-accent">
          <span>search</span>
          <SearchIcon class="w-4 h-4"/>
        </button>

        <CategoriesDropDown/>

      </div>


      <div class="flex items-center gap-2 lg:gap-8">
        <div class="w-fit flex items-center justify-between gap-2 fill-accent capitalize text-sm font-semibold">
          <BonusIcon class="w-5 h-5"/>
          <span><span>bonus</span>  15%</span>
        </div>

        <a href="#contact" class="btn btn-ghost lg:btn-sm w-fit flex items-center justify-between gap-2 fill-accent capitalize">
          <UserIcon class="w-5 h-5"/>
          <span class="hidden lg:block">salah eddine</span>
          <AngleDownIcon class="w-5 h-5"/>
        </a>

        <CartDropDown/>
        
      </div>
    </nav>
</template>

<script setup>
import CategoriesIcon from '@/components/icons/CategoriesIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import BonusIcon from '@/components/icons/BonusIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import AngleDownIcon from '../components/icons/AngleDownIcon.vue';
import ShoppingIcon from './icons/ShoppingIcon.vue';
import CategoriesDropDown from './dropDowns/CategoriesDropDown.vue';
import CartDropDown from './dropDowns/CartDropDown.vue';
</script>

<style lang="scss" scoped>

</style>