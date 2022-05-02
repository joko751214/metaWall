<template>
  <div class="h-screen flex items-center justify-center">
    <div class="px-12 py-20 flex bg-gray-100 border-2 border-black login-shadow">
      <div class="mr-12"><img src="@/assets/login-image.svg" alt="login-image" /></div>
      <ul class="flex flex-col items-center">
        <li class="mx-10"><img src="@/assets/logo.png" alt="logo" /></li>
        <li class="mb-9">
          <h3 class="text-2xl">到元宇宙展開全新社交圈</h3>
        </li>
        <li class="mb-4 w-full">
          <input class="w-full py-4 px-6 border-2 border-black" type="text" placeholder="Email" />
        </li>
        <li class="mb-8 w-full">
          <input
            class="w-full py-4 px-6 border-2 border-black"
            type="text"
            placeholder="Password"
          />
        </li>
        <li class="mb-4 w-full">
          <button class="button-style button-shadow">登入</button>
        </li>
        <li>
          <p>註冊帳號</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass">
.login-shadow
  box-shadow: -8px 8px 0px #00040029
</style>
