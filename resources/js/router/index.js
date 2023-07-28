import { createRouter, createWebHistory } from 'vue-router';
import Campaign from '../layouts/Campaign.vue';
import HelpCenter from '../layouts/HelpCenter.vue';
import Contact from '../layouts/Contact.vue';
import CreateCampaign from '../layouts/Campaigns/Create-campaign.vue';
import Error from '../layouts/error.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login.vue'),
      meta: {
        title: 'Login',
        class: 'page-login'
      }
    },
    {
      path: '/dashboard',
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../pages/Dashboard.vue'),
          meta: {
            title: 'Dashboard',
            class: 'page-dashboard admin-page'
          }
        },
        {
          path: '/accounts',
          name: 'accounts',
          component: () => import('../pages/Accounts.vue'),
          meta: {
            title: 'Accounts',
            class: 'page-accounts admin-page'
          }
        },
        {
          path: '/chanels',
          name: 'chanels',
          component: () => import('../pages/Chanels.vue'),
          meta: {
            title: 'Chanels',
            class: 'page-chanels admin-page'
          }
        },
        {
          path: '/plans',
          name: 'plans',
          component: () => import('../pages/Plans.vue'),
          meta: {
            title: 'Plans',
            class: 'page-plans admin-page'
          }
        }
      ]
    },
    { path: '/', name: 'Campaign', component: Campaign, meta: { title: 'Campaign' } },
    { path: '/campaigns/create', name: 'createCampaign', component: CreateCampaign, meta: { title: 'Create Campaign' } },
    { path: '/help-center', name: 'help-center', component: HelpCenter, meta: { title: 'Help Center' } },
    { path: '/contact', name: 'contact', component: Contact, meta: { title: 'Contact' } },
    {
      path: '/:catchAll(.*)',
      component: Error
    }
  ]
});

export default router;

