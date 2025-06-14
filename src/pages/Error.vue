<template>
  <div>
    <Navbar />
    <Title name="Page Not Found" name2="Page Not Found" />
    <Error404 />
    <Footer />
  </div>
</template>

<script>
import Error404 from "../components/Error404.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Title from "../components/Title.vue";

export default {
  name: "Error",
  components: {
    Navbar,
    Title,
    Footer,
    Error404,
  },
};
</script>

<style scoped></style>
