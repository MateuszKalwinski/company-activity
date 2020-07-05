<template>
  <div class="tickets">
    <loading v-if="remoteDataBusy"></loading>
    <div class="empty" v-else-if="tickets.length === 0">
      Brak zgłosznień
    </div>
    <section v-else class="tickets-list">
      <div v-for="ticket of tickets" class="ticket-item">
        <a @click="id = ticket._id">{{ticket.title}}</a>
        <span class="badge">{{ticket.status}}</span>
        <span class="date">{{ticket.data | date}}</span>
      </div>
    </section>
    <ticket v-if="id" :id="id"></ticket>
  </div>
</template>

<script>
  import Ticket from "./Ticket";
  import RemoteData from "../mixins/RemoteData";

  export default {
    name: "Tickets",
    mixins: [
      RemoteData({
        tickets: 'tickets',
      }),
    ],
    components:{
      Ticket
    },
    data(){
      return{
        id: null
      }
    }
  }
</script>

