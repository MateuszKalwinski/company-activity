<template>
  <main class="login">
    <h1>Zaloguj</h1>
    <SmartForm
      class="form"
      :title="title"
      :operation="operation"
      :valid="valid">
      <FormInput
        name="username"
        v-model="username"
        placeholder="Nazwa użytkownika"
      />
      <FormInput
        name="password"
        type="password"
        v-model="password"
        placeholder="Hasło"
      />
      <template v-if="mode === 'signup'">
        <FormInput
          name="verify-password"
          type="password"
          v-model="password2"
          placeholder="Powtórz hasło"
          :invalid="retypePasswordError"
        />
        <FormInput
          name="email"
          type="email"
          v-model="email"
          placeholder="Emal"
        />
      </template>
      <template slot="actions">
        <template v-if="mode === 'login'">
          <button type="button" class="secondary" @click="mode = 'signup'">Utwórz konto</button>
          <button type="submit" :disabled="!valid">Zaloguj</button>
        </template>
        <template v-else-if="mode === 'signup'">
          <button type="button" class="secondary" @click="mode = 'login'">Powrót do logowania</button>
          <button type="submit" :disabled="!valid">Utwórz konto</button>
        </template>
      </template>
    </SmartForm>
  </main>
</template>

<script>
  export default {
    name: "Login",
    computed: {
      title() {
        switch (this.mode) {
          case 'login':
            return 'Login'
          case 'signup':
            return 'Zarejestruj'
        }
      },
      retypePasswordError() {
        return this.password2 &&
          this.password !== this.password2
      },
      signupValid(){
        return this.password2 && this.email && !this.retypePasswordError
      },
      valid() {
        return this.username && this.password && (this.mode !== 'signup' || this.signupValid)
      }
    },
    data() {
      return {
        mode: 'login',
        username: '',
        password: '',
        password2: '',
        email: '',
      }
    },
    methods: {
      async operation() {
        await this[this.mode]()
      },
      async login() {
        this.$state.user = await this.$fetch('login', {
          method: 'POST',
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          })
        })

        this.$router.replace(this.$route.params.wantedRoute|| {name: 'home'});
      },
      async signup() {
        await this.$fetch('signup', {
          method: 'POST',
          body: JSON.stringify({
            username: this.username,
            password: this.password,
            email: this.email,
          }),
        })
        this.mode = "login"
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .form{
    >>> .content{
      max-width 400px;
    }
  }
</style>
