<template>
  <div class="tickets">
    <loading v-if="remoteDataBusy"></loading>
    <div class="empty" v-else-if="tickets.length === 0">
      Brak zgłosznień
    </div>
    <section v-else class="tickets-list">
      <div v-for="ticket of tickets" class="ticket-item">
        <span>{{ticket.title}}</span>
        <span class="badge">{{ticket.status}}</span>
        <span class="date">{{ticket.data | date}}</span>
      </div>
    </section>
  </div>
</template>

<script>
  import RemoteData from "../mixins/RemoteData";

  export default {
    name: "Ticket",
    mixins: [
      RemoteData({
        tickets: 'tickets',
      }),
    ]
  }
</script>

