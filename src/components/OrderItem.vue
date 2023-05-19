<template>
    <div v-if="item" class="w-full h-fit flex items-center gap-4 transition-all duration-300 py-4 border-b border-primary/20">
            <div class="w-16 h-16 flex-none">
                <img :src="item.thumbnail" class="w-full" alt="">
            </div>
            <div class="grow h-full flex flex-col justify-between gap-3 overflow-hidden">
                <div class="w-full flex items-center justify-between">
                 <span class="truncate text-base font-medium">{{ item.name }}</span>   
                 <div class="w-6 h-6 flex-none">
                    <button @click="useOrders.removeItem(item)" class="btn btn-xs btn-ghost btn-square">
                        <AddIcon class="w-6 h-6 rotate-45 fill-accent"/>
                    </button>
                 </div>
                </div>
                <div class="w-full flex items-center justify-between">
                 <div class="flex items-center w-28 xs:w-full md:w-24 h-8  border border-base-200 rounded-lg">
                            <button @click="removeItem" class="btn btn-sm btn-square btn-ghost">
                                <MinusIcon class="w-4 h-4 fill-accent"/>
                            </button>
                            <div class="h-full grow flex items-center justify-center font-semibold">
                                {{ item.quantity }}
                            </div>
                            <button @click="addItem" class="btn btn-sm btn-square btn-ghost">
                                <AddIcon  class="w-4 h-4 fill-accent"/>
                            </button>
                    </div>
                    <span class=" font-semibold mr-1">{{ item.price * item.quantity }} DZD</span>  
                </div>
            </div>
        </div>
</template>

<script setup>
import { useOrdersStore } from "../stores/orders"
import AddIcon from "./icons/AddIcon.vue"
import MinusIcon from "./icons/MinusIcon.vue"

const props = defineProps(['item'])
const useOrders = useOrdersStore()

const addItem = () => {
    useOrders.OrdersList.subtotal = useOrders.OrdersList.subtotal - (props.item.quantity * props.item.price)
    props.item.quantity ++
    useOrders.OrdersList.subtotal = useOrders.OrdersList.subtotal + (props.item.quantity * props.item.price)
}

const removeItem = () => {
    useOrders.OrdersList.subtotal = useOrders.OrdersList.subtotal - (props.item.quantity * props.item.price)
    if (props.item.quantity <= 1) props.item.quantity = 1
    else props.item.quantity --
    useOrders.OrdersList.subtotal = useOrders.OrdersList.subtotal + (props.item.quantity * props.item.price)

}
</script>

<style lang="scss" scoped>

</style>