import { createRouter, createWebHistory } from 'vue-router'
// import ProjectsView from "@/views/ProjectsView.vue";
// import CvView from "@/views/CvView.vue";
// import ContactView from "@/views/ContactView.vue";
import ModificaciónView from "@/views/ModificaciónView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ModificacionView',
      component: ModificaciónView
    },
    // {
    //   path: '/cv',
    //   name: 'CvView',
    //   component: CvView
    // },
    // {
    //   path: '/projects',
    //   name: 'ProjectsView',
    //   component: ProjectsView
    // },
    // {
    //   path: '/contact',
    //   name: 'ContactView',
    //   component: ContactView
    // },


  ]
})

export default router
