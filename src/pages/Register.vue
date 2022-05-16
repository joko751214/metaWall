<template>
  <div class="h-screen flex items-center justify-center">
    <div class="px-12 py-20 flex items-center bg-gray-100 border-2 border-black login-shadow">
      <div class="mr-12"><img src="@/assets/login-image.svg" alt="login-image" /></div>
      <ul class="flex flex-col items-center">
        <li class="mx-10"><img src="@/assets/logo.png" alt="logo" /></li>
        <li class="mb-9">
          <h3 class="text-2xl">到元宇宙展開全新社交圈</h3>
        </li>
        <li class="mb-4 w-full">
          <input
            class="w-full py-4 px-6 border-2 border-black font-secondary"
            type="text"
            placeholder="暱稱"
            v-model="form.name"
          />
          <div v-if="v$.name.$error">暱稱至少 2 個字元以上</div>
        </li>
        <li class="mb-4 w-full">
          <input
            class="w-full py-4 px-6 border-2 border-black font-secondary"
            type="text"
            placeholder="Email"
            v-model="form.email"
          />
        </li>
        <li class="mb-8 w-full">
          <input
            class="w-full py-4 px-6 border-2 border-black font-secondary"
            type="text"
            placeholder="Password"
            v-model="form.password"
          />
        </li>
        <li class="mb-4 w-full">
          <button class="button-style button-shadow">註冊</button>
        </li>
        <li>
          <p>登入</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { ref, computed } from 'vue';

const form = ref({
  name: '',
  email: '',
  password: '',
});
const requiredNameLength = ref(2);
const rules = computed(() => ({
  name: {
    required,
    minLength: minLength(requiredNameLength.value),
  },
}));

const v$ = useVuelidate(rules, { form });
</script>

<style lang="sass">
.login-shadow
  box-shadow: -8px 8px 0px #00040029
</style>
