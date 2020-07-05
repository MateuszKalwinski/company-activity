<template>
  <div class="new-ticket">
    <h1>Nowe zgłoszenie</h1>
    <SmartForm
    title="Nowe zgłoszenie"
    :operation="operation"
    :valid="valid">
      <FormInput
        name="title"
        v-model="title"
        placeholder="Tytuł"
        maxlength="100"
        required>
      </FormInput>
      <FormInput
        type="textarea"
        name="description"
        v-model="description"
        placeholder="Krótki opis (max 100 znaków)"
        maxlength="100"
        required
        row="4">
      </FormInput>
      <template slot="actions">
        <router-link
          tag="button"
          :to="{name: 'tickets'}"
          class="secondary">
          Wróć
        </router-link>
        <button
          type="submit"
          :disabled="!valid"
        >Wyślij zgłoszenie</button>
      </template>


    </SmartForm>
  </div>
</template>

<script>
    export default {
        name: "NewTicket",
      computed:{
          valid(){
            return !!this.title && !!this.description
          }
      },
      data(){
          return{
            title: '',
            description:''
          }
      },
      methods:{
        async operation(){
          const result = await this.$fetch('tickets/new', {
            method: 'POST',
            body: JSON.stringify({
              title: this.title,
              description: this.description,
            })
          })
          this.title = ''
          this.description= ''
        }
      },
    }
</script>

<style scoped>

</style>
