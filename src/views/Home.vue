<template>
  <el-container class="container">
    <Menu></Menu>
    <el-container class="container-right">
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "home",
  components: {
    Menu
  }
};
</script>

<style lang="scss" scope>
.container {
  height: 100vh;
  .container-right{
    background-color: $background-color-primary;
  }
}
</style>
