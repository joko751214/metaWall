<template>
  <div class="w-2/5 pr-16">
    <div class="flex mb-4">
      <select class="px-4 pl- mr-3 border-2 border-black flex-1" v-model="options.timeSort">
        <option value="desc">最新貼文</option>
        <option value="asc">最舊貼文</option>
      </select>
      <input
        type="text"
        class="border-2 border-black border-r-0 pl-4 flex-auto"
        placeholder="搜尋貼文"
        v-model="options.keyword"
      />
      <div
        class="bg-blue-800 w-11 h-11 flex justify-center items-center border-2 border-black cursor-pointer"
        @click="search"
      >
        <font-awesome-icon :icon="['fa', 'magnifying-glass']" class="text-xl text-white" />
      </div>
    </div>
    <template v-if="postData.length > 0">
      <ul
        class="border-2 border-black bg-white rounded-lg p-6 bottom-shadow mb-4"
        v-for="item in postData"
      >
        <li class="flex items-center mb-4">
          <img class="mr-4 w-11 h-11 rounded-full" :src="item.user.photo" alt="user-image" />
          <div>
            <p class="font-primary font-bold">{{ item.user.name }}</p>
            <span class="text-xs text-gray-400">{{ item.createAt }}</span>
          </div>
        </li>
        <li class="mb-4">
          <p v-html="item.content"></p>
        </li>
        <li v-if="item.image" class="h-40 border-2 border-black rounded-lg">
          <img class="w-full rounded-lg" :src="item.image" alt="photo-image" />
        </li>
      </ul>
    </template>
    <template v-else>
      <ul class="border-2 border-black bg-white rounded-lg bottom-shadow">
        <li class="py-4 border-b-2 border-black px-4 flex">
          <div class="w-2.5 h-2.5 rounded-full bg-[#DE4B63] mr-1.5"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-[#FAA722] mr-1.5"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-[#83C51D]"></div>
        </li>
        <li class="text-gray-400 text-center py-8">目前尚無動態，新增一則貼文吧！</li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import { getPostsData } from '@/api/posts';
import { ref } from 'vue';

const postData = ref([]);
const options = ref({
  timeSort: 'desc',
  keyword: '',
});

const getData = async (options) => {
  const res = await getPostsData(options);
  const { data, status } = res.data;
  if (status === 200) {
    postData.value = data;
  }
};
getData(options.value);

const search = () => {
  getData(options.value);
};
</script>

<style></style>
