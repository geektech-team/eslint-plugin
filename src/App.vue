<template>
  <div id="app">
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}
</style>
