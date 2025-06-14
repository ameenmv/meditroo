<template>
  <div class="book">
    <div class="container flex">
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
      <div class="image flex items-center justify-center relative">
        <img class="phone" src="../assets/phone.png" alt="" />
        <img src="../assets/girl.png" class="girl absolute" alt="" />
        <img src="../assets/location.png" class="location absolute" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
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
  width: 50%;
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
  width: 50%;
}
.phone {
  width: 100%;
}

.girl {
  width: 250px;
  bottom: 72px;
  right: 0px;
  animation: right-left 5s linear infinite;
}
.location {
  bottom: 40%;
  left: 55px;
  animation: up-down 5s linear infinite;
}

@media (max-width: 1280px) {
  .girl {
    width: 215px;
    right: 10px;
    bottom: 105px;
  }
  .location {
    width: 100px;
  }
}
@media (max-width: 1200px) {
  .girl {
    width: 200px;
    right: 10px;
    bottom: 117px;
  }
  .location {
    width: 80px;
  }
}
@media (max-width: 1024px) {
  .girl {
    width: 160px;
    right: 0px;
    bottom: 163px;
  }
  .location {
    width: 60px;
  }
}
@media (max-width: 767px) {
  .container {
    flex-direction: column;
  }
  .form,
  .image {
    width: 100%;
  }
  .form {
    margin-left: 0;
  }
  .form h3 {
    font-size: 22px;
  }

  .girl {
    width: 270px;
    right: 0px;
    bottom: 18px;
  }
  .location {
    width: 60px;
  }
}
@media (max-width: 550px) {
  .girl {
    width: 170px;
    right: 40px;
    bottom: 18px;
  }
}
</style>
