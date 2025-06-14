<template>
  <div>
    <Navbar />
    <Title name="Booking" name2="Booking" />
    <div class="book">
      <div class="container flex justify-center">
        <div class="form">
          <form action="">
            <h3>Book Appointment</h3>
            <select name="" id="" aria-placeholder="Se">
              <option value="">Select Department</option>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>
            <select name="" id="" aria-placeholder="Se">
              <option value="">Select Doctor</option>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>
            <input type="text" placeholder="Your Name" />
            <input type="phone" placeholder="Your Number" />
            <input type="date" />
            <button class="button">Appointment Now</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Title from "../components/Title.vue";

export default {
  name: "Booking",
  components: {
    Navbar,
    Title,
    Footer,
  },
};
</script>

<style scoped>
.book {
  padding: 100px 0 200px;
  background-image: url(../assets/bookbg.png);
  background-repeat: no-repeat;
  background-position: 20px 140px;
  background-color: #f5f5fc;
  border-radius: 40px;
  position: relative;
  z-index: 1;
}

.form {
  position: relative;
  width: 40%;
  margin-left: 50px;
  padding: 40px 35px;
  background: #ffffff;
  border-radius: 40px;
  box-shadow: 0 10px 60px 0 rgba(31, 34, 120, 0.1);
}
.form::after {
  content: "";
  position: absolute;
  border-radius: 40px;
  border: 2px solid var(--sc-main-color);
  width: 100%;
  height: 100%;
  top: -20px;
  left: -20px;
  z-index: -1;
}
.form form {
  text-align: center;
}
form h3 {
  font-size: 28px;
  margin-bottom: 30px;
  color: var(--main-color);
  font-weight: 700;
}
.form input,
.form select {
  padding: 15px 25px;
  width: 100%;
  border: 1px solid rgba(86, 90, 207, 0.3);
  border-radius: 8px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  height: 60px;
  margin-bottom: 20px;
  transition: 0.5s;
  outline: rgb(86, 90, 207);
}
.form input:hover,
.form select:hover {
  border-color: rgb(86, 90, 207);
}

.image {
  width: 60%;
}

@media (max-width: 1024px) {
  .form {
    width: 60% !important;
  }
}
@media (max-width: 660px) {
  .form {
    width: 100% !important;
    margin-left: 0;
  }
}
</style>
