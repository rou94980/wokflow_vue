import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "create",
    component: () => import("@/views/CreateView.vue"),
    meta: {
      title: "新增工作流程",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "create" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, //詳細路由於上方routes定義
  //定義每次切換頁面，scrollbar自動回到 top 0
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async (to, from) => {
  // 頁面title
  document.title =
    typeof to.meta?.title === "string"
      ? `${to.meta.title} ｜ EVERY8D`
      : "EVERY8D";
});

export default router;
