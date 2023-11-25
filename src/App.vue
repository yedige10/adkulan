<!-- App.vue -->
<template>
  <div>
    <router-link to="/">Benefits</router-link> |
    <router-link to="/history">History</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
