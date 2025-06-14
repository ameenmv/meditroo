<template>
  <div class="background">
    <Navbar />
    <Landingpage />
  </div>
  <About />
  <Working />
  <Book />
  <service />
  <Testimonial />
  <News />
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Landingpage from "../components/Landingpage.vue";
import About from "../components/About.vue";
import Working from "../components/Working.vue";
import Book from "../components/Book.vue";
import Service from "../components/Service.vue";
import Testimonial from "../components/Testimonial.vue";
import News from "../components/News.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Landingpage,
    About,
    Working,
    Book,
    Service,
    Testimonial,
    News,
    Footer,
  },
};
</script>

<style scoped>
.background {
  background-image: url("../assets/home-background.jpeg");
}
</style>
