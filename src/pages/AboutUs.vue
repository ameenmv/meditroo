<template>
  <div>
    <Navbar />
    <Title name="About Us" name2="About Us" />
    <About />
    <AboutCards />
    <Doctors />
    <Testimonial />
    <News />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Title from "../components/Title.vue";
import About from "../components/About.vue";
import AboutCards from "../components/AboutCards.vue";
import Doctors from "../components/Doctors.vue";
import Testimonial from "../components/Testimonial.vue";
import News from "../components/News.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "AboutUs",
  components: {
    Navbar,
    Title,
    About,
    AboutCards,
    Doctors,
    Testimonial,
    News,
    Footer,
  },
};
</script>

<style scoped></style>
