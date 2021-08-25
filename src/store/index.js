import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        postList: [],
        post: {},
        active_el: 0,
    },
    mutations: {
        likePost(state, post) {
            let index = state.postList.findIndex(p => p.id == post.id);
            if (index !== -1) {

                state.postList[index].likes++
            }
        },
        setPost(state, post) {
            state.active_el = post.id;
            state.post = post;
        },
        setPostList(state, postList) {
            state.postList = postList
        }
    }, actions: {
        loadPostList(context) {
            fetch('/data.json')
                .then(res => res.json())
                .then(res => {
                    context.commit('setPostList', res);
                });
        }
    }
})