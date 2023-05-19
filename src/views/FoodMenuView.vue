<template>

    <div class="w-full h-96 absolute z-10 transition-all duration-200 flex items-center justify-center" :class="isLoading ? 'opacity-100 block' : 'opacity-0 hidden'">
        <LoadingIcon class="w-10 h-10 fill-accent"/>
    </div>
    <div id="foodList" class="w-fit h-fit flex flex-col foodList overflow-y-auto px-0.5 transition-all duration-300" :class="isLoading ? 'scale-75 opacity-0' : 'scale-100 opacity-100'">
        <section id="pizza">
           <PizzaList/> 
        </section>
    
        <section id="sushi">
            <sushiList/>
        </section>
    
        <section id="salad">
          <SaladList/>  
        </section>
    
        <Footer/>
    </div>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import SaladList from '../components/SaladList.vue'
import LoadingIcon from '../components/icons/LoadingIcon.vue';
import PizzaList from '../components/pizzaList.vue'
import sushiList from '../components/sushiList.vue'
import { ref } from 'vue';

const isLoading = ref(true)

/** */
setTimeout(() => {
    isLoading.value = false
}, 2000)

</script>

<style lang="scss" scoped>
#foodList{
    scroll-behavior: smooth
}
</style>