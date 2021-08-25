<template>
  <div>
    <div class="container-fluid mt-2 col-md-12">
      <div class="col-8" v-if="this.post != null">
        <Post :post="post" @like="likePost"></Post>
        <!-- <button @click="editPost" class="btn btn-warning mt-2">Edit</button> -->
      </div>
    </div>
        <!-- <router-view /> -->

  </div>
  
</template>

<script>
import Post from "../components/Post.vue";

export default {
  name: "FindResult",
  data() {
    return { post: null };
  },
  components: {
    Post,
  },
  methods: {
    likePost(post) {
      post.likes++;
    },
    editPost(){
      this.$router.push({
              name: 'Edit',
              params: { id: this.post.id, post: this.post },
            })
    }
  },
  watch: {
    $route() {
      this.post = this.$route.params.post;
    },
    post(){
      this.post = this.$route.params.post;
    }

  },
  mounted() {
    this.post = this.$route.params.post;
  },
};
</script>