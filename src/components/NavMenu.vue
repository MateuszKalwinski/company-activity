<template>
  <nav class="menu">
    <router-link :to="{name: 'home'}" exact>Strona główna</router-link>
    <router-link :to="{name: 'faq'}">FAQ</router-link>
    <div class="spacer"></div>
    <template v-if="$state.user">
      <a href="#">{{$state.user.username}}</a>
      <a @click="logout">Wyloguj</a>
    </template>
    <router-link v-else :to="{name: 'login'}">Login</router-link>
  </nav>
</template>

<script>
    export default {
        name: "NavMenu",
      methods: {
          async logout(){
            const result = await this.$fetch('logout')
            if (result.status === 'ok'){
              this.$state.user = null;
            }
          }
      }

    }
</script>

<style lang="stylus" scoped>
  @import "../style/imports.styl"

  .router-link-active{
    border-bottom-color: $primary-color;
  }
</style>
