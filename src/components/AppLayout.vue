<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img class="img" src="../assets/logo.svg" alt="logo">
        <div>Firma AAA</div>
      </div>
    </header>
    <NavMenu></NavMenu>
    <router-view>

    </router-view>

  </div>
</template>

<script>
  import NavMenu from "./NavMenu.vue";

  export default {
    components: {
      NavMenu,
    }
  }
</script>

<style lang="stylus">
  @import "../style/main.styl"
</style>

<style lang="stylus" scoped>
  .header{
    .img{
      width: 64px;
      height: 64px;
    }
  }
</style>
