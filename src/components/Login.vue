<template>
  <main class="login">
    <h1>Zaloguj</h1>
    <form>
      <FormInput
        name="username"
        :value="username"
        v-model="username"
        placeholder="Nazwa uzytkownika"
      />
    </form>
  </main>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            username: '',
          }
      }
    }
</script>

<style scoped>

</style>
