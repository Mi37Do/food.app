<template>
    <div class="w-full h-full flex-none flex flex-col gap-2 capitalize">
                <span class="text-lg font-medium mb-4">your order:</span>
                <div class="w-full flex items-center justify-between">
                    <span>subtotal</span>
                    <span>{{useOrders.OrdersList.subtotal}} DZD</span>
                </div>
                <div class="w-full flex items-center justify-between">
                    <span>delivery</span>
                    <span>{{useOrders.OrdersList.delivery}} DZD</span>
                </div>
                <span class="w-full h-px bg-base-200 rounded-full"></span>
                <div class="w-full flex items-center justify-between text-lg font-medium">
                    <span>total</span>
                    <span>{{useOrders.OrdersList.delivery + useOrders.OrdersList.subtotal}} DZD</span>
                </div>
                <button class="btn btn-primary w-full my-4 capitalize text-white">purchase</button>

                <div class="hidden md:block w-full h-72 overflow-hidden">
                    <div class="w-full h-full overflow-auto">
                        <OrderItem :item="item" v-for="item in useOrders.OrdersList.items" :key="item.name"/>
                    </div>
                </div>
    </div>
</template>

<script setup>
import { useOrdersStore } from '../../stores/orders';
import OrderItem from '../OrderItem.vue';

const useOrders = useOrdersStore()

</script>

<style lang="scss" scoped>

</style>