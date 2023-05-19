import { ref, computed, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase/init'

export const usePizzaStore = defineStore('pizza', () => {

    const showPizza = ref(null)

  return { showPizza }
})
