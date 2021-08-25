<template>
  <div>
    <ul class="list-group">
      <li
        v-for="post in postList"
        :key="post.id"
        @click="$emit('selectId', post)"
        class="list-group-item list-group-item-action "
        :class="{ active: active_el==post.id }"
      >
        <h5 style="text-align:left">
          {{ post.title }}
          <span class="badge rounded-pill bg-primary">{{ post.likes }}</span>
        </h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    postList: Object,
    active_el:Number
  },
};
</script>
<style>
</style>
