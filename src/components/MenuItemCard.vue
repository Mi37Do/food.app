<template>
    <label @click="changePizza(pizza)" for="MenuItemModal" class="group/pizza w-72 xs:w-full md:w-72 h-fit bg-white rounded-2xl relative  p-5 xs:p-3 md:p-6 hover:shadow-xl hover:outline hover:outline-1 outline-primary/40 shadow-accent/5  transition-all duration-700 cursor-pointer">

                <img src="@/assets/plat.png" class="h-20 md:h-32 w-auto absolute -top-10 left-2 -rotate-45 md:rotate-0 md:-top-[4.4rem] md:left-[1.15rem]" alt="">
                <img :src="pizza.thumbnail" class="w-[4.5rem] h-[4.5rem] md:w-28 md:h-28 absolute -top-7 left-3 md:-top-16 md:left-6 shadow-xl rounded-full transition-all duration-500 rotate-0 group-hover/pizza:rotate-12">
                <img v-if="pizza.new" src="@/assets/new_1.png" class="w-6 absolute -top-3 md:-top-8 left-5 md:left-12" alt="">

                <div class="w-full h-full flex flex-col gap-4">
                    <div class="w-full flex justify-end items-center gap-2 text-primary">
                        <StarIcon class="w-4 h-4 fill-primary"/>
                        <span class="font-medium">{{pizza.rating}} / 5</span>
                    </div>

                    <div class="w-full h-fit flex flex-col gap-2 mt-6">
                        <span class="capitalize text-base md:text-lg font-semibold truncate">{{pizza.name}}</span>
                        <span class="h-16 overflow-hidden text-xs text-slate-500 hidden md:block">{{pizza.storage}}</span>
                    </div>

                    <div class="w-full flex items-center justify-between">
                        <button @click="addToCart" class="btn btn-sm btn-ghost border border-base-200 flex gap-2 items-center text-sm capitalize">
                            add
                            <AddIcon class="w-4 h-4 fill-accent"/>
                        </button>
                        <div class="h-8 flex flex-col justify-center md:flex-row items-end gap-0 md:gap-4">
                            <span v-if="pizza.discount" class="text-secondary font-medium text-xs">- {{pizza.discount}} %</span>
                            <span class="md:text-xl font-bold" :class="pizza.discount ? 'text-secondary' : 'text-accent'">{{ pizza.discount ? pizza.pricePerUnit  * ((100-pizza.discount)/100) : pizza.pricePerUnit}} DZD</span>
                        </div>
                    </div>
                </div>

            </label>
</template>

<script setup>
import StarIcon from '@/components/icons/StarIcon.vue'
import AddIcon from '@/components/icons/AddIcon.vue'
import { usePizzaStore } from '../stores/pizza'
import { useOrdersStore } from '../stores/orders';


const usePizza = usePizzaStore()
const useOrders = useOrdersStore()
const props = defineProps(['pizza'])

const changePizza = (e) => {
    usePizza.showPizza = null
    usePizza.showPizza  = e
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
    orderItem.id = props.pizza.id
    orderItem.name = props.pizza.name
    orderItem.quantity = 1
    if(props.pizza.discount) orderItem.price = props.pizza.pricePerUnit * ((100- props.pizza.discount)/100)
    else orderItem.price = props.pizza.pricePerUnit
    orderItem.thumbnail = props.pizza.thumbnail
    orderItem.totalPrice = orderItem.price * orderItem.quantity

    useOrders.addOrderItem(orderItem)
}
</script>

<style lang="scss" scoped>

</style>