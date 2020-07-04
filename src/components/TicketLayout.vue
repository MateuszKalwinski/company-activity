<template>
  <main class="ticket-layout">
    <h1>Zgłoszenia klientów</h1>
    <ticket></ticket>
  </main>
</template>

<script>
    import Ticket from "./Ticket";
    export default {
        name: "TicketLayout",
      components: {Ticket}
    }
</script>

<style scoped>

</style>
