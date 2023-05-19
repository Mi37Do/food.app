<template>
    <div id="contact" class="w-full h-62 md:h-40 flex-none">
        <div class="w-full h-full flex items-center lg:justify-center">
          <div class="w-fit grid md:grid-cols-2 gap-10 md:gap-20">
            <div class="w-full h-full flex flex-col gap-1 items-start justify-center">
            <span class="capitalize">developed by: <br> <span class="text-lg font-bold">laksari mohammed salah eddine</span></span>
            <span>Website: <br><a class="text-lg font-bold" href="https://pixaviz.vercel.app/">pixaviz.is( )</a></span>
            
            
        </div>

        <div class="w-fit h-full flex flex-col justify-center gap-4">
            <a href="https://pixaviz.vercel.app/">
            <img src="@/assets/01.svg" class="w-32" alt=""></a>
            <div class="w-full justify-between flex gap-4">
                <a href="https://www.instagram.com/mohammed_salaheddine_laksari/?hl=fr">
                 <Instagram class="w-6 h-6 fill-accent"/>   
                </a>
                <a href="https://www.linkedin.com/in/salah-eddine-laksari/">
                 <Linkdedin class="w-6 h-6 fill-accent"/>   
                </a>
                <a href="https://www.behance.net/midolaksari">
                 <Behance  class="w-6 h-6 fill-accent"/>   
                </a>
            </div>
        </div>
        </div>  
        </div>
        
        
    </div>
</template>

<script setup>
import Linkdedin from './icons/Linkdedin.vue';
import Behance from './icons/behance.vue';
import Instagram from './icons/instagram.vue';


</script>

<style lang="scss" scoped>

</style>