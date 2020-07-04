<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img class="img" src="../assets/logo.svg" alt="logo">
        <div>Firma AAA</div>
      </div>
    </header>

    <router-view>

    </router-view>

  </div>
</template>

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
