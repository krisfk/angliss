export const state = () => ({
    counter: 0,
    testing_num: 9
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}