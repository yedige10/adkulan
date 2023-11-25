// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Benefits from './components/Benefits.vue';
import History from './components/History.vue';

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Benefits },
    { path: '/history', component: History },
  ],
});

// Create the Vue app instance
const app = createApp(App);

// Use the router in the app
app.use(router);

// Mount the app to the DOM
app.mount('#app');
