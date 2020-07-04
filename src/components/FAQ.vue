<template>
  <main class="faq">
    <h1>Najczęściej zadawane pytania</h1>

    <div class="error" v-if="error">
      Problem z pobraniem pytań
    </div>

    <loading v-if="loading"></loading>

    <section class="list">
      <article v-for="question in questions">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
  export default {
    data(){
      return{
        questions:[],
        error: null,
        loading: false,
      }
    },
    async created() {
      this.loading = true;
      try {
        const response = await fetch('http://localhost:3000/questions')
        if (response.ok){
          this.questions = await response.json()
        }else{
          throw new Error('error')
        }
      }catch (e) {
        this.error = e
      }
      this.loading = false
    },
  }
</script>
