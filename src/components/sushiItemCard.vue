<template>
    <div v-if="sushi" class="w-72 xs:w-full md:w-72 h-fit bg-white rounded-2xl relative p-5 xs:p-3 md:p-6 hover:shadow-xl hover:outline hover:outline-1 outline-primary/40 shadow-accent/5  transition-all duration-700 cursor-pointer">
        <div class="w-28 md:w-48 h-20 md:h-28 absolute -top-10 md:-top-12">
            <img :src="sushi.thumbnail" class="h-full md:w-auto md:h-full object-fill">
        </div>
                
                <img v-if="sushi.new" src="@/assets/new_1.png" class="w-6 absolute -top-3 md:-top-8 left-5 md:left-12" alt="">

                <div class="w-full h-full flex flex-col gap-4">
                    <div class="w-full flex justify-end items-center gap-2 text-primary">
                        <StarIcon class="w-4 h-4 fill-primary"/>
                        <span class="font-medium">{{sushi.rating}} / 5</span>
                    </div>

                    <div class="w-full h-fit flex flex-col gap-2 mt-3">
                        <span class="capitalize text-base md:text-lg font-semibold truncate">{{sushi.name}}</span>
                        <span class="h-fit xs:h-12 overflow-hidden text-xs text-slate-500">{{sushi.storage}}</span>
                    </div>

                    <div class="w-full h-10 flex flex-row xs:flex-col gap-2 md:flex-row items-center justify-between">
                        <div class="w-fit xs:w-full md:w-fit flex-col xs:flex-row flex md:flex-col justify-between text-base">
                            <span class="overflow-hidden text-xs text-slate-500">{{sushi.pricePerUnit}} DZD</span>
                            <span class="overflow-hidden text-xs text-slate-500"> per {{sushi.Unit}} Gr.</span>
                        </div>

                        <div class="flex items-center w-28 xs:w-full md:w-28 h-8  border border-base-200 rounded-lg bg-white">
                            <button @click="removeUnits" class="btn btn-sm btn-square btn-ghost">
                                <MinusIcon class="w-4 h-4 fill-accent"/>
                            </button>
                            <div class="h-full grow flex items-center justify-center text-base font-semibold">
                                {{units}}
                            </div>
                            <button @click="addUnits" class="btn btn-sm btn-square btn-ghost">
                                <AddIcon  class="w-4 h-4 fill-accent"/>
                            </button>
                        </div>
                    </div>

                    <div class="w-full flex items-center justify-between xs:mt-4 md:mt-0 mt-0">
                        <button @click="addToCart" class="btn btn-sm btn-ghost border border-base-200 flex gap-2 items-center text-sm capitalize">
                            add
                            <AddIcon class="w-4 h-4 fill-accent"/>
                        </button>
                        <div class="h-8 flex flex-col justify-center items-end gap-0">
                            <span class="text-xs">total</span>
                            <span class="md:text-xl font-bold">{{ sushi.pricePerUnit * units}} DZD</span>
                        </div>
                    </div>
                </div>

            </div>
</template>

<script setup>
import StarIcon from '@/components/icons/StarIcon.vue'
import AddIcon from '@/components/icons/AddIcon.vue'
import MinusIcon from './icons/MinusIcon.vue'
import { ref } from 'vue'
import { useOrdersStore } from '../stores/orders'
const props = defineProps(['sushi'])

const useOrders = useOrdersStore()

const units = ref(1)

const addUnits = () => {
    units.value++
}

const removeUnits = () => {
    units.value--
    if (units.value < 1) {
      return  units.value = 1
    }
    else return units.value
}

const addToCart = () => {
    let orderItem = {
        id:null,
        name:'',
        price:0,
        quantity:0,
        thumbnail:'',
        totalPrice : 0

    }
    orderItem.id = props.sushi.id
    orderItem.name = props.sushi.name
    orderItem.quantity = units.value
    if(props.sushi.discount) orderItem.price = props.sushi.pricePerUnit * ((100- props.sushi.discount)/100)
    else orderItem.price = props.sushi.pricePerUnit
    orderItem.thumbnail = props.sushi.thumbnail
    orderItem.totalPrice = orderItem.price * orderItem.quantity

    useOrders.addOrderItem(orderItem)

    units.value =1
}

</script>

<style lang="scss" scoped>

</style>