<script setup>

import IconJCT from "@/components/icons/MenuIcons/IconJCT.vue";
import IconLinkedin from "@/components/icons/RRSS/IconLinkedin.vue";
import IconInstagram from "@/components/icons/RRSS/IconInstagram.vue";
import IconGitHub from "@/components/icons/RRSS/IconGitHub.vue";
</script>

<template>
  <div class="">

    <div class="md:flex lg:flex justify-center space-y-7 items-center content-center space-x-5 w-full  py-3  font-bold text-white ">
      <div class="md:w-1/3 lg:w-1/3 flex justify-center text-gray-50 space-x-8 text-center items-center content-center">
<!--        <a href="https://www.instagram.com/chorto24/">-->
<!--          <IconInstagram class=" fill-black"/></a>-->
<!--        <a href="https://www.linkedin.com/in/joanchorto/">-->
<!--          <IconLinkedin class="fill-black"/></a>-->
<!--        <a href="https://github.com/joanchorto1"><IconGitHub class="fill-black"/></a>-->

      </div>
      <div class="md:w-1/3 lg:w-1/3 justify-center text-gray-50 text-center items-center content-center">
        <IconJCT class="h-20"/>
        </div>
      <div class="md:w-1/3 lg:w-1/3 justify-center text-black font-bold space-x-8 pt-5 text-center items-center content-center">
<!--        <a href="/">Home</a>-->
<!--        <a href="/cv">CV</a>-->
<!--        <a href="/projects">Proyectos</a>-->
<!--        <a href="/contact">Contacto</a>-->
      </div>
    </div>

    <div class=" text-white ">
      <slot/>
    </div>

  </div>
  <footer
      class=" bg-gray-100 text-black  py-24 flex justify-start space-x-5">
    <div class="md:w-1/3 pl-5 lg:w-1/3 items-start justify-start">
      <IconJCT class=" fill-gray-800 h-20"/>
    </div>
    <div class="flex opacity-0 md:opacity-100 lg:opacity-100 w-1/3 space-x-5">
<!--      <h6 class="font-bold text-xl">JOAN CHORTO TOMAS</h6>-->
    </div>
    <div class=" md:w-1/3 pr-5 lg:w-1/3 justify-center items-center ">
      <h6 class="font-bold">Contacto:</h6>
      <ul>
        <li>joan@jctagency.com</li>
        <li>633391411</li>
      </ul>
    </div>
  </footer>

</template>


<style scoped>
</style>

