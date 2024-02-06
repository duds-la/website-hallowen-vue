<script setup>

import category1 from "../assets/images/category1-img.png"
import category2 from "../assets/images/category2-img.png"
import category3 from "../assets/images/category3-img.png"

const categories = [
  {
    title: 'Ghost1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos dolorum, necessitatibus ullam natus repellat;',
    image: category1
  },
  {
    title: 'Wich',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos dolorum, necessitatibus ullam natus repellat;',
    image: category2
  },
  {
    title: 'PupKin',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos dolorum, necessitatibus ullam natus repellat;',
    image: category3
  }
]
</script>
<template>
  <section id="category" class="flex flex-col items-center h-screen">
    <h2 class="my-10 text-7xl font-bold text-white">Category</h2>
    <div class="grid grid-cols-3 place-items-center">
      <div v-for="category of categories" :key="category.title"
        class="text-white grid place-items-center gap-5 text-center">
        <div class="p-10">
          <img :src="category.image" class="w-full " alt="">
        </div>
        <h3 class="text-3xl font-bold ">{{ category.title }}</h3>
        <p class="w-3/4">{{ category.desc }}</p>
      </div>
    </div>
  </section>
  <section class="grid grid-flow-col grid-cols-2 gap-10 items-center">
    <div class="p-10">
      <img src="../assets/images/category2-img (1).png" alt="">
    </div>
    <div>
      <h2 class="text-6xl font-bold text-white">What's that </h2>
      <div class="flex items-center gap-5">
        <h2 class="text-6xl font-bold text-white">Halloween</h2>
        <img src="../assets/images/head2-img.png" alt="">
      </div>
      <p class="mt-12 text-white text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        voluptatibus quaerat exercitationem ea assumenda iste, ipsam dicta quo soluta ut perspiciatis veniam culpa minima
        provident officia quod consectetur odit quibusdam!</p>
    </div>
  </section>
</template>