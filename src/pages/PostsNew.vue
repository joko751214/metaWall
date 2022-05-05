<template>
  <div class="w-2/5 pr-16">
    <div
      class="bg-white text-xl text-center py-4 mb-4 border-2 border-black font-secondary font-bold double-bolder"
    >
      張貼動態
    </div>
    <ul class="border-2 border-black bg-white rounded-lg p-8 bottom-shadow">
      <li class="mb-1">
        <p>貼文內容</p>
      </li>
      <li class="mb-4">
        <textarea
          class="text-gray-400 w-full border-2 border-black px-4 py-3"
          placeholder="輸入您的貼文內容"
          rows="6"
          cols="50"
        />
      </li>
      <li class="mb-4">
        <input type="text" v-model="photoUrl" class="border-2 border-black w-1/2 p-2" />
      </li>
      <li class="mb-8"><img class="w-full" :src="photoUrl" alt="photo-image" /></li>
      <li class="flex justify-center">
        <div class="w-1/2">
          <button class="button-style button-shadow">送出貼文</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const photoUrl = ref('src/assets/photo-image.png');
</script>
