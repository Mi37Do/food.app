<template>
    <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn w-12 lg:w-fit bg-white border-0 text-accent hover:bg-white lg:btn-sm flex items-center justify-between gap-2 fill-accent capitalize">
          <ShoppingIcon class="w-5 h-5"/>
          <span class="hidden lg:block">cart: {{ useOrders.OrdersList.items.length }}</span>
        </label>
    <div tabindex="0" class="dropdown-content menu p-6 shadow-xl shadow-slate-800/5 bg-white rounded-box w-80 mt-1 h-fit flex flex-col overflow-hidden">
        <span class="text-base font-medium -mt-2 mb-2">my shopping cart:</span>
        <div class="w-full h-96 overflow-hidden flex items-center justify-center">
                <div v-if="useOrders.OrdersList.items.length !== 0" class="w-full h-full flex flex-col overflow-auto">
                    <OrderItem :item="item" v-for="item in useOrders.OrdersList.items" :key="item.name"/>
                </div>

                <div v-else class="w-52 h-fit flex flex-col items-center gap-4">
                    <img src="@/assets/empty.svg" class="w-full">
                    <span>There are no orders yet...</span>
                </div>
        </div>
        <div class="w-full h-fit flex-none">
     <div class="w-full h-24 pt-4 flex flex-col justify-between">
         <div class="w-full flex items-center justify-between text-base font-medium">
             <span>subtotal:</span>
             <span>{{ useOrders.OrdersList.subtotal }} DZD</span>
         </div>

         <router-link :to="{name :'checkout'}" class="w-full rounded-lg flex justify-between items-center capitalize group" :class="useOrders.OrdersList.items.length === 0 ? 'btn btn-disabled text-primary cursor-not-allowed' : 'btn  btn-primary  text-white cursor-pointer'">
             <span>checkout</span>
             <ArrowRightIcon class="w-5 h-5 mr-8 group-hover:mr-0 transition-all duration-300 ease-out" :class="useOrders.OrdersList.items.length === 0 ? 'fill-primary' : 'fill-white'"/>
         </router-link>
     </div>
     </div>
     
    </div>
    </div>
</template>

<script setup>
import ArrowRightIcon from "../icons/ArrowRightIcon.vue";
import ShoppingIcon from "../icons/ShoppingIcon.vue"
import OrderItem from '@/components/OrderItem.vue'
import { useOrdersStore } from "../../stores/orders";

const useOrders = useOrdersStore()
</script>

<style lang="scss" scoped>

</style>
