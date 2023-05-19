<template>
    <div class="w-full h-fit border-r border-base-200 pr-4 capitalize pb-2">
        <div class="w-full h-fit flex flex-col gap-6">
                    <span class="text-lg font-medium">your personal informations:</span>
                    <div class="w-full grid lg:grid-cols-2 gap-4">
                        <div class="flex flex-col gap-1">
                            <span class="text-sm capitalize">first name</span>
                            <input type="text" class="block w-full h-10 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                        </div>

                        <div class="flex flex-col gap-1">
                            <span class="text-sm capitalize">last name</span>
                            <input type="text" class="block w-full h-10 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                        </div>

                        <div class="flex flex-col gap-1">
                            <span class="text-sm capitalize">phone</span>
                            <input type="text" class="block w-full h-10 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                        </div>

                        <div class="flex flex-col gap-1">
                            <span class="text-sm capitalize">email <span class="text-slate-400">(optional)</span></span>
                            <input type="text" class="block w-full h-10 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                        </div>
                    </div>
        </div>

        <div class="w-full h-fit flex flex-col gap-6 mt-12">
                    <span class="text-lg font-medium">delivery details:</span>
                    <div class="w-full gap-4">
                        <div class="flex flex-col gap-1">
                            <span class="text-sm capitalize">full address</span>
                            <input type="text" class="block w-full h-10 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                        </div>

                    </div>
        </div>

        <div class="w-full h-fit flex flex-col gap-6 mt-12">
                    <span class="text-lg font-medium">payment:</span>
                    <div class="w-full grid grid-cols-2 lg:grid-cols-5 gap-4">
                        <div class="flex flex-col gap-1 col-span-2 lg:col-span-3">
                            <span class="text-sm capitalize">card number</span>
                            <input type="text" class="block w-full h-10 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                        </div>

                        <div class="flex flex-col gap-1 col-span-1">
                            <span class="text-sm capitalize">exp date</span>
                            <div class="flex items-center gap-2">
                                <input type="text" placeholder="mm" class="block w-full h-10 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                                <span>/</span>
                                <input type="text" placeholder="yy" class="block w-full h-10 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                            </div>
                        </div>

                        <div class="w-full flex flex-col gap-1 col-span-1">
                            <span class="text-sm capitalize">CVV code</span>
                                <input type="text" class="block w-full h-10 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white cursor-pointer">
                            
                        </div>
                    </div>
        </div>

        <CheckoutDetails class="block md:hidden"/>
                
    </div>
</template>

<script setup>
import CheckoutDetails from './CheckoutDetails.vue';


</script>

<style lang="scss" scoped>

</style>