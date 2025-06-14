<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>

<style>
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
/* small */

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* medium */

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

/* large */

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
