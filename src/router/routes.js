const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/Business",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Business.vue") }],
  },

  {
    path: "/Tennis",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Tennis.vue") }],
  },

  {
    path: "/Gym",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Gym.vue") }],
  },

  {
    path: "/Trips",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Trips.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
