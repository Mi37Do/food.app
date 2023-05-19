<template>
    <div class="w-full h-fit lg:h-full max-w-screen-xl flex flex-col gap-4">
        <div class="text-sm breadcrumbs capitalize flex-none">
        <ul>
            <li><a>Home</a></li> 
            <li><router-link :to="{name : 'menu'}">menu</router-link></li> 
            <li><a>checkout</a></li> 
        </ul>
        </div>
        <span class="text-5xl capitalize font-bold">checkout</span>

        <div class="w-full h-full flex gap-4 mb-40">
            <div class="grow h-full">
                <PaymentDetails/>
            </div>


            <div class="md:w-72 lg:w-80 h-full flex-none hidden md:block">
                <CheckoutDetails/>
            </div>
        
        </div>

        <Footer/>
    </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import CheckoutDetails from '../components/checkout/CheckoutDetails.vue';
import PaymentDetails from '../components/checkout/PaymentDetails.vue';


</script>

<style lang="scss" scoped>

</style>