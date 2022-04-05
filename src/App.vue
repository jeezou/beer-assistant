<template>
  <Profile msg="Welcome to Your Vue.js App" />
</template>

<script>
import Profile from "./components/Profile.vue";

export default {
  name: "App",
  components: {
    Profile,
  },
};
</script>

<style lang="scss">
html {
  font-size: calc(1vw + 10px);
}

#app {
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

  font-family: "Open Sans", "Titillium Web", "Ubuntu", Avenir, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  $base: #fafafad2;
  $dark: #2d2d2d8c;
  $light: #fafafadf;

  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  height: 100vh;

  // background: rgba(26, 91, 202, 0.616);
  // background: url("assets/images/mesh.jpg");
  background: linear-gradient(rgba(0, 0, 0, 0.681), rgba(0, 0, 0, 0.733)),
    url("assets/images/bg4.jpg");
  background-size: cover;
  // background-position: -400px 0;

  color: $light;
}

@media screen and (max-width: 960px) and (orientation: landscape) {
  #app {
    max-height: auto;
    height: auto;
  }
}
</style>
