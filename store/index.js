export const state = () => ({
    counter: 0,
    testing_num: 9,
    site_url: "http://angliss-layout.emo.com.hk/"
});

export const mutations = {
    increment(state) {
        state.counter++;
    }
};