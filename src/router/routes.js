const routes = [
  {
    path: '/login',
    name: 'login',
    title: '登入頁面',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/',
    name: 'index',
    title: '首頁',
    component: () => import('@/pages/Home.vue'),
    children: [],
  },
];

export default routes;
