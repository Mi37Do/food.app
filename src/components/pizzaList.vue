<template>
    <div class="w-fit max-w-screen-xl h-full flex flex-col gap-4">
        <div class="text-sm breadcrumbs capitalize flex-none">
        <ul>
            <li><a>Home</a></li> 
            <li><a>menu</a></li> 
        </ul>
        </div>

        <span class="text-5xl capitalize font-bold">pizza</span>

        <div class="w-full flex items-center justify-between capitalize">
            <span>showed <span class="font-medium">{{pizzaList.rows.length}}</span> results</span>

        </div>


        <div v-if="!pizzaList.isLoading" class="w-fit grid xs:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-14 md:gap-y-24  grow py-20">
            <MenuItemCard :pizza="pizza" v-for="pizza in pizzaList.rows" :key="pizza.id"/>   
        </div>
        </div>
</template>

<script setup>
import AngleDownIcon from '@/components/icons/AngleDownIcon.vue'
import { onMounted, reactive, ref } from 'vue';
import MenuItemCard from '@/components/MenuItemCard.vue'
import { usePizzaStore } from '@/stores/pizza';
import { supabase } from '@/supabase/init'

const usePizza = usePizzaStore()


  
const pizzaList = reactive({
        rows:[],
        isLoading: false,
        error: null
    })

onMounted( async() => {
        try {
            pizzaList.isLoading = true
            const { data , error } = await supabase.from('pizzas').select('*')

            if(error) {
                throw new error(error.message)
            }

            pizzaList.rows = data
            pizzaList.isLoading = false
        }
        catch(error) {
            pizzaList.error = error.message
            pizzaList.isLoading = false
        }
    })
</script>

<style lang="scss" scoped>

</style>