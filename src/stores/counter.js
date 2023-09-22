import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createStore } from 'vuex';


export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    return { count, doubleCount, increment }
});
const store = createStore({
    state: {
        userInfo: null
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        saveUserInfo({ commit }, userInfo) {
            commit('setUserInfo', userInfo);
        }
    },
    getters: {
        getUserInfo: state => state.userInfo
    }
});

export default store;