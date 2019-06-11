import Vue from 'vue'
import Vuex from './myvuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        killCount(state) {
            return state.count * 2
        }
    },
    mutations: {
        increment(state, n = 1) {
            state.count += n
            /**
             * state.count增加了但是 界面没有变化
             */
            console.log(state.count)
        }
    },
    actions: {
        incrementAsync({ commit, state }) {
            console.log(commit)
            setTimeout(() => {
                return commit("increment", 2)
            }, 1000);
        }
    }
})
