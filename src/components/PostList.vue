<template>
  <div>
    <ul class="list-group">
      <li
        v-for="post in postList"
        :key="post.id"
        @click="setPost(post)"
        class="list-group-item list-group-item-action"
        :class="{ active: active_el == post.id }"
      >
        <h5>
          {{ post.title }}
          <span class="badge rounded-pill bg-primary">{{ post.likes }}</span>
        </h5>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Post",
  computed: mapState(["postList", "active_el"]),
  methods: {
    setPost(post) {
      this.$store.commit("setPost", post);
    },
  },
};
</script>
<style>
</style>
