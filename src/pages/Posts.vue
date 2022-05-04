<template>
  <div class="w-2/5 pr-16">
    <div class="flex mb-4">
      <select class="px-4 pl- mr-3 border-2 border-black flex-1">
        <option value="0">最新貼文</option>
        <option value="1">熱門文章</option>
      </select>
      <input
        type="text"
        class="border-2 border-black border-r-0 pl-4 flex-auto"
        placeholder="搜尋貼文"
      />
      <div class="bg-blue-800 w-11 h-11 flex justify-center items-center border-2 border-black">
        <font-awesome-icon :icon="['fa', 'magnifying-glass']" class="text-xl text-white" />
      </div>
    </div>
    <ul
      class="border-2 border-black bg-white rounded-lg p-6 bottom-shadow mb-4"
      v-for="item in data"
    >
      <li class="flex items-center mb-4">
        <img class="mr-4" :src="item.userUrl" alt="user-image" />
        <div>
          <p class="font-primary font-bold">{{ item.userName }}</p>
          <span class="text-xs text-gray-400">{{ item.createAt }}</span>
        </div>
      </li>
      <li class="mb-4">
        <p v-html="item.note"></p>
      </li>
      <li v-if="item.imageUrl"><img class="w-full" :src="item.imageUrl" alt="photo-image" /></li>
    </ul>
  </div>
</template>

<script setup>
const data = [
  {
    userUrl: 'src/assets/user.png',
    userName: '邊緣小杰',
    createAt: '2022/1/10 12:00',
    note: '外面看起來就超冷....<br> 我決定回被窩繼續睡....>.<',
    imageUrl: 'src/assets/photo-image.png',
  },
  {
    userUrl: 'src/assets/user.png',
    userName: '波吉',
    createAt: '2022/1/10 12:00',
    note: '我一定要成為很棒棒的國王！',
  },
  {
    userUrl: 'src/assets/user.png',
    userName: '阿爾敏',
    createAt: '2022/1/10 12:00',
    note: '各位我有一個作戰計畫',
  },
];
</script>

<style></style>
