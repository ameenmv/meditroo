<template>
  <div>
    <Navbar />
    <Title name="Out Team" name2="Out Team" />
    <Doctorsteam />
    <Footer />
  </div>
</template>

<script>
import Doctorsteam from "../components/Doctorsteam.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Title from "../components/Title.vue";
export default {
  name: "Team",
  components: {
    Navbar,
    Title,
    Footer,
    Doctorsteam,
  },
};
</script>

<style scoped></style>
