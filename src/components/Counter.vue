<template >
    <h1>Counter- Vuex</h1>
    <h2>Direct Access Counter: {{$store.state.count}}</h2>
    <b-button variant="success" @click="increment">+1</b-button>
    <b-button variant="danger" @click="incrementBy">+5</b-button>   <!--a este boton se le pasaron parametros desde la mutacion -->
    <b-button variant="warning" @click="randomInt">Random</b-button>  
   

    <!-- <h1>mapState</h1> -->
    <h2>mapState: {{countComputed}}</h2>
    <!-- <h2>Computed: {{count}}</h2> -->
    <h2>Last mutation: {{lastMutation}}</h2>

 </template>
 
 
 <script>

import {mapState, mapActions} from 'vuex'

 export default {

        computed: {
            countComputed(){
                return this.$store.state.count
            },
            ...mapState(['count', 'lastMutation']),
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            incrementBy() {
                this.$store.commit('incrementBy', 5)
            },
            // forma:1  ...mapActions(['incrementRandomInt'])
            // aqui se cambia el nombre para evitar posibles redundancias vvv
            ...mapActions({
                randomInt: 'incrementRandomInt'
            })
    }
}
 </script>
 