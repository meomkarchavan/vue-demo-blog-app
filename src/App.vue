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
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid mt-2 col-md-12">
      <div class="row">
        <div class="col-4">
          <PostList
            :postList="postList"
            @selectId="showPost"
            :active_el="active_el"
          ></PostList>
        </div>
        <div class="col-8">
          <Post :post="post" @like="likePost"></Post>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post.vue";

import PostList from "./components/PostList.vue";

export default {
  name: "App",
  components: {
    Post,
    PostList,
  },
  data() {
    return {
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
        },
        {
          id: 3,
          title: "Exercitation velit aute ",
          content:
            "Ea pariatur consequat dolor mollit velit laboris et in ea pariatur deserunt. Veniam Lorem laboris reprehenderit adipisicing sunt velit aliquip tempor do culpa qui. Tempor eiusmod eu laborum ad Lorem nostrud est ad. Non magna ullamco aliqua irure. Mollit deserunt cillum fugiat id Lorem consequat dolor ut deserunt eu consectetur minim. Fugiat sunt Lorem nulla voluptate Lorem nulla occaecat eu nisi eu.",
          likes: 0,
          imageUrl: "http://placeimg.com/900/300/business",
        },
         {
          id: 4,
          title: "Veniam ad exercitation ",
          content:
            "Ea pariatur consequat dolor mollit velit laboris et in ea pariatur deserunt. Veniam Lorem laboris reprehenderit adipisicing sunt velit aliquip tempor do culpa qui. Tempor eiusmod eu laborum ad Lorem nostrud est ad. Non magna ullamco aliqua irure. Mollit deserunt cillum fugiat id Lorem consequat dolor ut deserunt eu consectetur minim. Fugiat sunt Lorem nulla voluptate Lorem nulla occaecat eu nisi eu.",
          likes: 0,
          imageUrl: "http://placeimg.com/900/300/business",
        },
         {
          id: 5,
          title: "Nulla adipisicing exercitation ",
          content:
            "Ea pariatur consequat dolor mollit velit laboris et in ea pariatur deserunt. Veniam Lorem laboris reprehenderit adipisicing sunt velit aliquip tempor do culpa qui. Tempor eiusmod eu laborum ad Lorem nostrud est ad. Non magna ullamco aliqua irure. Mollit deserunt cillum fugiat id Lorem consequat dolor ut deserunt eu consectetur minim. Fugiat sunt Lorem nulla voluptate Lorem nulla occaecat eu nisi eu.",
          likes: 0,
          imageUrl: "http://placeimg.com/900/300/business",
        },
         {
          id: 6,
          title: "Occaecat ex in cillum laborum",
          content:
            "Ea pariatur consequat dolor mollit velit laboris et in ea pariatur deserunt. Veniam Lorem laboris reprehenderit adipisicing sunt velit aliquip tempor do culpa qui. Tempor eiusmod eu laborum ad Lorem nostrud est ad. Non magna ullamco aliqua irure. Mollit deserunt cillum fugiat id Lorem consequat dolor ut deserunt eu consectetur minim. Fugiat sunt Lorem nulla voluptate Lorem nulla occaecat eu nisi eu.",
          likes: 0,
          imageUrl: "http://placeimg.com/900/300/business",
        },
         {
          id: 7,
          title: "Esse consequat sunt ullamco",
          content:
            "Ea pariatur consequat dolor mollit velit laboris et in ea pariatur deserunt. Veniam Lorem laboris reprehenderit adipisicing sunt velit aliquip tempor do culpa qui. Tempor eiusmod eu laborum ad Lorem nostrud est ad. Non magna ullamco aliqua irure. Mollit deserunt cillum fugiat id Lorem consequat dolor ut deserunt eu consectetur minim. Fugiat sunt Lorem nulla voluptate Lorem nulla occaecat eu nisi eu.",
          likes: 0,
          imageUrl: "http://placeimg.com/900/300/business",
        },
         {
          id: 8,
          title: "Tempor cupidatat incididunt ",
          content:
            "Ea pariatur consequat dolor mollit velit laboris et in ea pariatur deserunt. Veniam Lorem laboris reprehenderit adipisicing sunt velit aliquip tempor do culpa qui. Tempor eiusmod eu laborum ad Lorem nostrud est ad. Non magna ullamco aliqua irure. Mollit deserunt cillum fugiat id Lorem consequat dolor ut deserunt eu consectetur minim. Fugiat sunt Lorem nulla voluptate Lorem nulla occaecat eu nisi eu.",
          likes: 0,
          imageUrl: "http://placeimg.com/900/300/business",
        },
         {
          id: 9,
          title: "pariatur consequat dolor mollit",
          content:
            "Ea pariatur consequat dolor mollit velit laboris et in ea pariatur deserunt. Veniam Lorem laboris reprehenderit adipisicing sunt velit aliquip tempor do culpa qui. Tempor eiusmod eu laborum ad Lorem nostrud est ad. Non magna ullamco aliqua irure. Mollit deserunt cillum fugiat id Lorem consequat dolor ut deserunt eu consectetur minim. Fugiat sunt Lorem nulla voluptate Lorem nulla occaecat eu nisi eu.",
          likes: 0,
          imageUrl: "http://placeimg.com/900/300/business",
        },
      ],
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
