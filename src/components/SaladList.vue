
    <template>
    <div class="w-fit max-w-screen-xl h-full flex flex-col gap-4">

        <span class="text-5xl capitalize font-bold">salad</span>

        <div class="w-full flex items-center justify-between capitalize">
            <span>showed <span class="font-medium">{{SaladList.rows.length}}</span> results</span>
            
        </div>


        <div v-if="!SaladList.isLoading" class="w-fit grid xs:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-14 md:gap-y-24  grow py-20">
            <SaladItemCard :salad="salad" v-for="salad in SaladList.rows" :key="salad.id"/>   
        </div>
        </div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import { useSaladStore } from '@/stores/salad'
import AngleDownIcon from '@/components/icons/AngleDownIcon.vue'
import { supabase } from '@/supabase/init'
import SaladItemCard from "./SaladItemCard.vue";
 
const SaladList = reactive({
        rows:[],
        isLoading: false,
        error: null
    })

const useSalad = useSaladStore()


onMounted(async () => {
  try {
    SaladList.isLoading = true;
    const { data, error } = await supabase.from('salads').select('*');

    if (error) {
      throw new Error(error.message);
    }

    SaladList.rows = data
    SaladList.isLoading = false
  } catch (error) {
    SaladList.error = error.message
    SaladList.isLoading = false
  }

  
});


</script>

<style lang="scss" scoped>

</style>