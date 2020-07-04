<template>
  <main class="faq">
    <h1>Najczęściej zadawane pytania</h1>

    <div class="error" v-if="hasRemoteErrors">
      Problem z pobraniem pytań
    </div>

    <loading v-if="remoteDataBusy"></loading>

    <section class="list">
      <article v-for="question of questionList">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
  import RemoteData from "../mixins/RemoteData";


  export default {
    name: "FAQ",
    mixins: [
      RemoteData({
        questionList: 'questions',
      }),
    ]
  }
</script>
