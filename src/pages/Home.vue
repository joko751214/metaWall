<template>
  <div>
    <header
      class="flex justify-around items-center bg-white border-b-2 border-black bottom-shadow py-3"
    >
      <p class="font-special text-2xl">MetaWall</p>
      <div class="flex items-center">
        <img class="w-8 mr-2.5" src="@/assets/user.png" alt="user-image" />
        <span href="#" class="border-b border-black font-secondary font-bold px-1">Member</span>
      </div>
    </header>
    <div class="container mx-auto my-12 grid grid-cols-3 gap-6">
      <router-view class="col-span-2" />
      <div class="px-6 py-8 bg-white border-2 border-black">
        <button class="button-style button-shadow mb-6">張貼動態</button>
        <ul class="px-2">
          <li class="flex items-center mb-6">
            <img class="mr-4" src="@/assets/user.png" alt="user-image" />
            <p class="font-primary font-bold">邊緣小杰</p>
          </li>
          <li class="flex items-center mb-6">
            <div
              class="w-12.5 h-12.5 bg-blue-100 rounded-full flex justify-center items-center mr-4 border-2 border-black"
            >
              <font-awesome-icon :icon="['far', 'bell']" class="text-xl" />
            </div>
            <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
            <p class="font-primary font-bold">邊緣小杰</p>
          </li>
          <li class="flex items-center">
            <div
              class="w-12.5 h-12.5 bg-blue-100 rounded-full flex justify-center items-center mr-4 border-2 border-black"
            >
              <font-awesome-icon :icon="['far', 'thumbs-up']" class="text-xl" />
            </div>
            <p class="font-primary font-bold">我按讚的文章</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
