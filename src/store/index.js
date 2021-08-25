import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        postList: [
            {
                id: 0,
                title: "Cupidatat aute qui aute cupidatat ",
                content:
                    "Eu occaecat exercitation eu in enim aute dolore amet deserunt irure. Enim labore incididunt mollit incididunt eu labore est ea est sint sint tempor. Dolor tempor excepteur cillum consectetur commodo sit sunt culpa irure quis culpa ex. Magna aliquip aliqua officia mollit irure in officia adipisicing.",
                likes: 0,
                imageUrl: "http://placeimg.com/900/300/business",
            },
            {
                id: 1,
                title: "Amet enim labore occaecat ",
                content:
                    "Ullamco aliquip nisi aliquip magna incididunt. Exercitation veniam laborum dolore cillum adipisicing aute sunt exercitation nulla amet non nulla. Anim occaecat nisi eu nisi mollit minim. Qui consequat esse duis officia ullamco aliqua. Nisi ullamco reprehenderit adipisicing proident aliquip velit labore. Eu eiusmod excepteur esse culpa sit eiusmod.",
                likes: 0,
                imageUrl: "http://placeimg.com/900/300/business",
            },
            {
                id: 2,
                title: "Ex laboris ut esse ",
                content:
                    "Est est non magna proident deserunt occaecat ex nisi eu laboris mollit et. Consequat ea non dolor commodo et incididunt qui incididunt deserunt ipsum tempor eiusmod. Ullamco Lorem non do proident quis deserunt et non esse culpa ea cillum ut. Cupidatat aute sit veniam consequat ullamco anim ea ea dolor Lorem enim consectetur Lorem deserunt. Proident incididunt cillum reprehenderit laborum.",
                likes: 0,
                imageUrl: "http://placeimg.com/900/300/business",
            }],
        post: {},
        active_el:0,
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
        }
    },
    getters: {
    },
})