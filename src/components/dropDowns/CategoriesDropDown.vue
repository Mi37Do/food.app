<template>
    <div class="dropdown">
    <label tabindex="0" class="btn w-12 lg:w-fit btn-ghost lg:btn-sm w-fit flex items-center justify-between gap-2 fill-accent capitalize">
          <CategoriesIcon class="w-5 h-5"/>
          <span class="hidden lg:block">categories</span>
        </label>
    <div tabindex="0" class="dropdown-content menu p-2 shadow-xl shadow-slate-800/5 bg-white rounded-box w-52 mt-1 -ml-3 flex flex-col">
        <a href="#pizza" class="btn btn-ghost flex items-center justify-start gap-2">
            <PizzaIcon class="w-5 h-5 fill-accent"/>
            <span class="capitalize">pizza</span>
        </a>

        <a href="#sushi" class="btn btn-ghost flex items-center justify-start gap-2">
            <SushiIcon class="w-5 h-5 fill-accent"/>
            <span class="capitalize">sushi</span>
        </a>

        <a href="#salad" class="btn btn-ghost flex items-center justify-start gap-2">
            <SaladIcon class="w-5 h-5 fill-accent"/>
            <span class="capitalize">salad</span>
        </a>
    </div>
    </div>
</template>

<script setup>
import CategoriesIcon from "../icons/CategoriesIcon.vue";
import PizzaIcon from "../icons/PizzaIcon.vue";
import SaladIcon from "../icons/SaladIcon.vue";
import SushiIcon from "../icons/SushiIcon.vue";
</script>

<style lang="scss" scoped>

</style>