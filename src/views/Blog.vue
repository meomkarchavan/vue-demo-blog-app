<template>
  <div class="container-fluid mt-2 col-md-12">
    <!-- {{ $route.params }} -->
    <div class="row">
      <div class="col-4">
        <PostList
          :postList="this.$route.params"
          @selectId="showPost"
          :active_el="active_el"
        ></PostList>
      </div>
      <div class="col-8">
        <Post :post="post" @like="likePost"></Post>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import PostList from "../components/PostList.vue";
export default {
  name: "Blog",
  components: {
    Post,
    PostList,
  },
  data() {
    return {
     postList:[],
      active_el: 0,
      post: {},
    };
  },
  methods: {
    showPost(post) {
      this.active_el = post.id;
      this.post = post;
    },
    likePost(post) {
      post.likes++;
    },
  },
};
</script>
<style>
</style>
