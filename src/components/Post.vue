<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
    <div class="mt-2 col-md-12">
      <img v-bind:src="post.imageUrl" class="img-fluid" />
    </div>
    <button
      v-if="post.title != null"
      @click="$emit('like', post)"
      type="button"
      class="btn btn-primary mt-2"
    >
      Likes : {{ post.likes }}
    </button>

    
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
  
};
</script>
<style>
</style>
