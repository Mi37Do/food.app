<template>
    <input type="checkbox" id="MenuItemModal" class="modal-toggle" />
    <div class="modal bg-slate-800/40">
    <div v-if="usePizza.showPizza" class="modal-box w-96 lg:w-fit max-w-4xl bg-white overflow-hidden grid lg:grid-cols-3 gap-6 relative">
        <img :src="usePizza.showPizza.cover" class="w-96 h-40 lg:h-[320px] object-cover rounded-lg" alt="">

        <img v-if="usePizza.showPizza.new" src="@/assets/new_1.png" class="w-10 absolute top-8 left-8" alt="">

        <div class="w-full lg:col-span-2 h-full flex flex-col gap-6 overflow-hidden">
            <span class="text-3xl font-bold truncate">{{usePizza.showPizza.name}}</span>

            <div class="w-full h-fit flex flex-col lg:grid grid-cols-2 gap-6">
                <div class="w-full flex flex-col">
                    <span class="capitalize text-base font-medium mb-6">Storage:</span>
                    <span>{{ usePizza.showPizza.storage }}</span>
                </div>

                <div class="w-full flex flex-col">
                    <span class="capitalize text-base font-medium mb-6">Nutritional value per 100g:</span>
                    <table class="table-autos">
                        <tbody>
                            <tr>
                                <td>calories</td>
                                <td>{{usePizza.showPizza.calories}} kcal</td>
                            </tr>
                            <tr>
                                <td>carbohydrates</td>
                                <td>{{usePizza.showPizza.carbohydrates}} g</td>
                            </tr>
                            <tr>
                                <td>squirrels</td>
                                <td>{{usePizza.showPizza.squirrels}} g</td>
                            </tr>
                            <tr>
                                <td>fats</td>
                                <td>{{usePizza.showPizza.fats}} g</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="w-full flex gap-6 lg:gap-0 lg:grid grid-cols-2 text-md font-medium">
                    <span>Weight: {{usePizza.showPizza.WeightPer50}} ± 50 g.</span>
                    <span>Size: {{ usePizza.showPizza.Size }}  cm</span>
                </div>

                <div class="w-full h-fit col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="w-full h-full flex flex-col row-span-2 lg:row-span-1">
                        <span class="text-base font-medium capitalize">total : {{usePizza.showPizza.pricePerUnit * units}} DZD</span>
                        <span class="capitalize text-xs text-slate-500">{{usePizza.showPizza.pricePerUnit}} DZD / unit</span>
                    </div>

                    <div class="w-32 flex items-center m-auto border border-base-300 rounded-lg">
                        <button @click="removeUnits" class="btn btn-sm btn-square btn-ghost">
                            <MinusIcon class="w-4 h-4"/>
                        </button>
                        <span class="grow flex justify-center text-base font-medium">{{units}}</span>
                        <button @click="addUnits" class="btn btn-sm btn-square btn-ghost">
                            <AddIcon class="w-4 h-4"/>
                        </button>
                    </div>

                    <label @click="addToCart"  for="MenuItemModal" class="btn btn-primary btn-sm w-32 my-auto mx-auto lg:ml-auto rounded-lg capitalize text-white flex justify-between">
                        add to cart
                        <AddIcon class="w-4 h-4 fill-white"/>
                    </label>


                    <label for="MenuItemModal" class="btn btn-sm btn-square absolute btn-ghost top-6 right-6 fill-accent">
                        <AddIcon class="w-5 h-5 rotate-45"/>
                    </label>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useOrdersStore } from '../../stores/orders';
import { usePizzaStore } from '../../stores/pizza';
import AddIcon from '../icons/AddIcon.vue'
import MinusIcon from '../icons/MinusIcon.vue';

const useOrders = useOrdersStore()

const usePizza = usePizzaStore()
const units = ref(1)

const addUnits = () => {
    units.value++
}

const removeUnits = () => {
    units.value --
    if (units.value < 1){
        units.value = 1
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
    orderItem.id = usePizza.showPizza.id
    orderItem.name = usePizza.showPizza.name
    orderItem.quantity = units.value

    orderItem.price = usePizza.showPizza.pricePerUnit
    orderItem.thumbnail = usePizza.showPizza.thumbnail
    orderItem.totalPrice = orderItem.price * orderItem.quantity

    useOrders.addOrderItem(orderItem)

    units.value =1
}
</script>

<style lang="scss" scoped>

</style>