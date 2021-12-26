
export function state() {
    return {
        message: {},
    }
}

export const actions = {
    setMessage({commit}, message) {
        commit('setMessage', message)
        setTimeout(() => {
            commit('clearMessage')
        }, 3000)
    },
}

export const mutations = {
    setMessage(state, message) {
        state.message = message
    },
    clearMessage(state) {
        state.message = null
    },
}
