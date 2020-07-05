<template>
  <main class="not-found">
    <h1>Nie znaleniono strony</h1>
    <p class="more-info">
      Nie udało nam się znaleźć strony której szukasz
    </p>
    <div class="actions">
      <router-link
        tag="button"
        :to="{name: 'home'}"
      >
        Wróć do stony głównej
      </router-link>
    </div>
  </main>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style lang="stylus" scoped>
.more-info{
  text-align: center;
}
</style>
