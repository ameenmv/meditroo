<template>
  <div class="footer">
    <div class="container flex">
      <div class="col col1">
        <div class="logo mb-6">
          <img src="../assets/logo.png" alt="" />
        </div>
        <p class="mb-7">
          Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod
          tempor incididunt ut labore et.
        </p>
        <div class="contact flex jusify-center items-center">
          <div class="icon mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
          </div>
          <div class="contact-number">
            <p class="mb-1">Contact Us</p>
            <h4>+01 123 456 7890</h4>
          </div>
        </div>
      </div>
      <div class="col col2">
        <div class="footer-title">
          <h3>Quick Links</h3>
        </div>
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Booking</li>
          <li>Faq's</li>
          <li>Blogs</li>
          <li>Out Team</li>
        </ul>
      </div>
      <div class="col col3">
        <div class="footer-title">
          <h3>Our Service</h3>
        </div>
        <ul>
          <li>Dental Care</li>
          <li>Cardiac Clinic</li>
          <li>Massege Therapy</li>
          <li>Cardiology</li>
          <li>Precise Diagnosis</li>
          <li>Abmbulance Services</li>
        </ul>
      </div>
      <div class="col col4">
        <div class="footer-title">
          <h3>Subcribe</h3>
        </div>
        <input type="email" placeholder="Email Address" />
        <button class="button">Subscribe Now</button>
        <div class="images gap-4 flex">
          <img src="../assets/facebook.png" alt="" />
          <img src="../assets/instgram.png" alt="" />
          <img src="../assets/twitter.png" alt="" />
          <img src="../assets/linkedin.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container footerbottom text-center">
      <p class="pt-6 pb-6">
        Copyright © 2023 Design & Developed by
        <a target="_blanc" href="https://ameeenmv.netlify.app/"
          ><span>Ameen</span></a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  padding-top: 150px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/footerbg.jpg);
}
.footer .col2 {
  margin: 0 0 40px 50px;
}
.footer p {
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
}
.footer .col {
  width: 25%;
  padding: 0 15px;
  margin-bottom: 40px;
}
.footer .icon {
  background-color: #f17732;
  border-radius: 30px 30px 0 30px;
  color: #fff;
  font-size: 24px;
  height: 58px;
  line-height: 58px;
  margin-right: 15px;
  text-align: center;
  width: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer .icon svg {
  width: 25px;
  height: 25px;
  fill: white;
}
.footer .contact-number p {
  color: var(--sc-color);
  font-size: 14px;
  font-weight: 600;
}
.footer .contact-number h4 {
  color: var(--main-color);
  font-size: 20px;
  font-weight: 700;
}

.footer-title {
  font-size: 24px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  position: relative;
  color: var(--main-color);
  font-weight: 700;
}
.footer-title::after {
  background-image: url(../assets/footerafter.png);
  background-repeat: no-repeat;
  bottom: 0;
  content: "";
  height: 7px;
  left: 0;
  position: absolute;
  width: 85px;
}
.footer ul li {
  color: #444;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  padding: 6px 0;
  position: relative;
  cursor: pointer;
}
.footer ul li:hover {
  color: var(--sc-main-color);
}
.footer input {
  border-radius: 10px;
  box-shadow: 0 10px 60px 0 rgba(31, 34, 120, 0.1);
  font-size: 15px;
  font-weight: 500;
  height: 52px;
  margin-bottom: 20px;
  background: #fff;
  border: 1px solid transparent;
  padding: 15px 25px;
  transition: all 0.3s ease-in-out;
}
.footer input:focus {
  outline: 1px solid var(--main-color);
  box-shadow: none;
}
.footer .button {
  width: 100%;
  margin-bottom: 30px;
}
.images img {
  cursor: pointer;
}
.footerbottom {
  border-top: 1px solid #d4d5f1;
}
.footerbottom span {
  color: var(--sc-color);
  cursor: pointer;
}
@media (max-width: 1024px) {
  .footer {
    padding-top: 120px;
  }
  .col {
    flex: 0 0 auto;
    width: 50% !important;
  }
  .container {
    flex-wrap: wrap;
  }
  .col2 {
    margin-left: 0 !important;
  }
}
@media (max-width: 767px) {
  .col1,
  .col4 {
    width: 100% !important;
  }
  input {
    width: 100%;
  }
}
</style>
