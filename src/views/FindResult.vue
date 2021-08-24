<template>
  <div>
    <div v-if="post != null">{{ post }}</div>
  </div>
</template>

<script>
export default {
  name: "FindResult",
  data() {
    return { post: null ,postList:[]};
  },
  watch: {
    $route() {
      this.$route.params.postList.map((item) => {
        if (item.id == this.$route.params.id) {
          this.post = item;
        }
      });
    },
  },
  mounted() {
    this.postList=this.$route.params.postList
    this.$route.params.postList.map((item) => {
      if (item.id == this.$route.params.id) {
        this.post = item;
      }
    });
  },

};
</script>