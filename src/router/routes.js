const routes = [
  {
    path: '/login',
    name: 'login',
    title: '登入頁面',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    title: '登入頁面',
    component: () => import('@/pages/Register.vue'),
  },
  {
    path: '/',
    name: 'index',
    title: '首頁',
    component: () => import('@/pages/Home.vue'),
    children: [
      {
        path: '/',
        name: 'posts',
        title: '全體動態牆',
        component: () => import('@/pages/Posts.vue'),
      },
      {
        path: '/posts-new',
        name: 'posts-new',
        title: '張貼動態',
        component: () => import('@/pages/PostsNew.vue'),
      },
    ],
  },
];

export default routes;
