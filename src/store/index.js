
import { createStore } from 'vuex'
import getRandomInt from '@/helpers/getRandomInt'


export default createStore({
    state: {
        count: 0,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        increment( state ){
            state.count++
            state.lastMutation = 'increment' // Se imprimira en pantalla la ultima mutacion que se presiono en el boton que esta en Counter.vue
        },
        incrementBy( state, val ){
            state.count += val
            state.lastMutation = 'incrementBy' + val // Se imprimira en pantalla la ultima mutacion que se presiono + el valor que se agrego
            state.lastRandomInt = val
        }
    },
    actions: {
        async incrementRandomInt(context) {
            const randomInt = await getRandomInt()
            //se suma lo que tenga el count + el numero random (val = numero Random)
            context.commit('incrementBy', randomInt )  //mutacion incrementBy
        }

    }
})
    