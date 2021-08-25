<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid mt-2 col-md-12">
      <div class="row">
        <div class="col-4">
          <PostList></PostList>
        </div>
        <div class="col-8">
          <Post></Post>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post.vue";

import PostList from "./components/PostList.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Post,
    PostList,
  },
  created() {
    this.loadPostList();
  },
  methods: {
    ...mapActions(["loadPostList"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
