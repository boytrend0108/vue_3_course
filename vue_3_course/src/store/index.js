import { createStore } from "vuex"

export default createStore({// create global store
    // --------Core Vuex------------------
    state: {// here we show data that we'll be described in our app
        likes: 1,
        isAuth: false
    },
    getters: {// here we show computed properties
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    mutations: {
        incrementLikes(state) {
            state.likes += 1;
        },
        decrementLikes(state) {
            state.likes -= 1;
        }
    },
    actions: {

    },
    // -----------------------------------
    modules: {

    }
}
)