<template>
  <div>
    <Navbar />
    <Title name="Faq's" name2="Faq's" />
    <News />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import News from "../components/News.vue";
import Title from "../components/Title.vue";

export default {
  name: "Faq",
  components: {
    Navbar,
    Title,
    Footer,
    News,
  },
};
</script>

<style scoped></style>
