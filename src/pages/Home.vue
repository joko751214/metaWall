<template>
  <div>
    <header
      class="flex justify-center items-center bg-white border-b-2 border-black bottom-shadow py-3"
    >
      <p class="font-special text-2xl w-2/5">MetaWall</p>
      <div class="flex justify-end items-center w-1/5">
        <img class="w-8 mr-2.5" src="@/assets/user.png" alt="user-image" />
        <span href="#" class="border-b border-black font-secondary font-bold px-1">Member</span>
      </div>
    </header>
    <div class="flex justify-center my-12">
      <router-view />
      <div class="w-1/5 px-6 py-8 bg-white border-2 border-black self-start">
        <router-link
          :to="{ name: 'posts-new' }"
          class="button-style button-shadow mb-6 block text-center"
        >
          張貼動態
        </router-link>
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
            <p class="font-primary font-bold">追蹤名單</p>
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
