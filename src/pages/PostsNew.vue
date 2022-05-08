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
          v-model="form.content"
        />
      </li>
      <li class="mb-4">
        <label class="bg-black text-white cursor-pointer px-8 py-1.5 rounded leading-6">
          <input id="upload" type="file" accept="image/*" class="hidden" @change="showFile" />
          上傳圖片
        </label>
        <!-- <input type="text" v-model="photoUrl" class="border-2 border-black w-1/2 p-2" /> -->
      </li>
      <li v-if="photoUrl" class="mb-8 h-40 border-2 border-black rounded-lg">
        <img class="w-full rounded-lg" :src="photoUrl" alt="photo-image" />
      </li>
      <li class="flex justify-center">
        <div class="w-1/2">
          <button class="button-style button-shadow" @click="submit">送出貼文</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { postStory } from '@/api/posts';
import useStore from '../store';
import router from '../router';

const { user } = useStore();

let file;
const photoUrl = ref('');
const showFile = (e) => {
  file = e.target.files[0]; // input type="file" 的值
  photoUrl.value = window.URL.createObjectURL(file); // input的圖片縮圖
};

const form = ref({
  user: user.token,
  content: '',
});
const submit = async () => {
  console.log(file);
  let formData;
  if (file) {
    formData = new FormData();
    formData.append('image', file);
    formData.append('title', file.name);
    formData.append('album', 'FWgf7de');
    formData.append('user', form.value.user);
    formData.append('content', form.value.content);
  } else {
    formData = form.value;
  }
  const res = await postStory(formData);
  if (res.status === 200) {
    router.push('/');
  }
};
</script>
