<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Blog App</a>
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
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link
              :to="{ name: 'Blog', params: postList }"
              class="nav-link active"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active">
              Contact Us
            </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" method="GET" action="/find">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="id"
            v-model="searchId"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            @click.prevent="findPost"
          >
            Search
          </button>
        </form>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      searchId: null,
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
    };
  },
  methods: {
    findPost() {
      this.postList.map((item) => {
        if (item.id == this.searchId) {
          this.$router.push({name:'Find',params:{id:item.id,postList:this.postList}})
        }
      });
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
}
</style>
