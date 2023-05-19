import { ref, computed, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase/init'

export const useSushiStore = defineStore('sushi', () => {
  
    const SushiList = reactive({
        rows:[],
        isLoading: false,
    })

  return { SushiList }
})
