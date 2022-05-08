import { defineStore } from 'pinia';
import localStorage from '@/utils/storage.js';
import { getUsersData } from '@/api/users';

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: localStorage.get('token') || '6276532b78634221c137502d',
    name: '',
    photo: '',
  }),
  actions: {
    async getUsersData() {
      const res = await getUsersData({
        token: this.token,
      });
      const { data, status } = res.data;
      if (status === 200) {
        this.name = data.name;
        this.photo = data.photo;
      }
    },
  },
});

export default useUserStore;
