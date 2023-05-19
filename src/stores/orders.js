import { ref, computed, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase/init'
import { uuid } from 'vue-uuid'

export const useOrdersStore = defineStore('order', () => {

    const OrdersList = ref({
        id: null,
        items:[],
        subtotal:0,
        delivery:0,
        total:0
    })

    const addOrderItem = (e) => {
        OrdersList.value.id = uuid.v1()
        let checkExsit = OrdersList.value.items.find((item)  => item.name === e.name)
        if(checkExsit) {
            checkExsit.quantity += e.quantity
        } 
        else {
            OrdersList.value.items.push(e)
        }
        OrdersList.value.subtotal += e.totalPrice
        OrdersList.value.delivery = 120
        OrdersList.value.total = OrdersList.value.subtotal + OrdersList.value.delivery
    }

    const removeItem = (e) => {
        OrdersList.value.items = OrdersList.value.items.filter((item) => item.name !== e.name)
        OrdersList.value.subtotal -= e.totalPrice
    }
  return { OrdersList , addOrderItem , removeItem }
})
