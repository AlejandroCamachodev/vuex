<template>
  <h1>Counter- Vuex</h1>
  <h2>Counter from state: {{ $store.state.counter.count }}</h2>
  <b-button variant="success" @click="increment">+1</b-button>
  <b-button variant="success" @click="incrementBy">+5</b-button>
  <b-button variant="danger" :disabled="isLoading" @click="randomInt"
    >Random</b-button
  >

  <!-- <h1>mapState</h1> -->
  <h2>mapState: {{ countComputed }}</h2>
  <!-- <h2>Computed: {{count}}</h2> -->
  <h2>Last mutation: {{ lastMutation }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState( 'counter', ['count','lastMutation','isLoading'])
  },
  // forma:1  ...mapActions(['incrementRandomInt'])
  // aqui se cambia el nombre para evitar posibles redundancias vvv
  methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5 )
            // this.randomInt()
        },
        // ...mapActions( 'counter', ['incrementRandomInt'])
        ...mapActions( 'counter', {
            randomInt: 'incrementRandomInt'
        })
    }
};
</script>
