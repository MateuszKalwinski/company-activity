<template>
  <main class="ticket-layout">
    <h1>Zgłoszenia klientów</h1>
    <div class="actions">
      <router-link
      v-if="$route.name !== 'tickets'"
      tag="button"
      class="secondary"
      :to="{name: 'tickets'}">
        Zobacz wszystkie zgłoszenia
      </router-link>
      <router-link
        v-if="$route.name !== 'new-ticket'"
        tag="button"
        :to="{name: 'new-ticket'}">
        Nowe zgłoszenie
      </router-link>
    </div>
    <router-view></router-view>
  </main>
</template>

<!--<script>-->
<!--    import Ticket from "./Tickets";-->
<!--    export default {-->
<!--        name: "TicketLayout",-->
<!--      components: {Ticket}-->
<!--    }-->
<!--</script>-->

<style scoped>

</style>
