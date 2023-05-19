<template>
    <div class="w-fit max-w-screen-xl h-full flex flex-col gap-4">

        <span class="text-5xl capitalize font-bold">sushi</span>

        <div class="w-full flex items-center justify-between capitalize">
            <span>showed <span class="font-medium">{{SushiList.rows.length}}</span> results</span>

        </div>


        <div v-if="!SushiList.isLoading" class="w-fit grid xs:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-14 md:gap-y-24  grow py-20">
            <SushiItemCard :sushi="sushi" v-for="sushi in SushiList.rows" :key="sushi.id"/>   
        </div>
        </div>
</template>

<script setup>
import AngleDownIcon from '@/components/icons/AngleDownIcon.vue'

import { useSushiStore } from '@/stores/sushi'
import { onMounted, reactive } from 'vue'
import SushiItemCard from './sushiItemCard.vue'
import { supabase } from '@/supabase/init'

const useSushi = useSushiStore()


const SushiList = reactive({
        rows:[],
        isLoading: false,
        error: null
    })

onMounted( async() => {
        try {
            SushiList.isLoading = true
            useSushi.SushiList.isLoading = true
            const { data , error } = await supabase.from('sushis').select('*')

            if(error) {
                throw new error(error.message)
            }

            SushiList.rows = data
            SushiList.isLoading = false
        }
        catch(error) {
            SushiList.error = error.message
            SushiList.isLoading = false
        }
})



</script>

<style lang="scss" scoped>

</style>