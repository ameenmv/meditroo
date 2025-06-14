<template>
  <div class="testimonial">
    <div class="container">
      <div class="mb-11 flex text-center flex-col items-center">
        <h1 class="heading">Testimonial</h1>
        <h3 class="heading2">
          See What Are The Patients
          <br />
          Saying About us
        </h3>
      </div>
      <div class="content flex">
        <div class="left flex justify-center relative">
          <img class="main" src="../assets/art.png" alt="" />
          <img class="d d1" src="../assets/d1.jpeg" alt="" />
          <img class="d d2" src="../assets/d2.jpeg" alt="" />
          <img class="d d3" src="../assets/d3.jpeg" alt="" />
          <img class="d d4" src="../assets/d4.jpeg" alt="" />
          <img class="d d5" src="../assets/d5.jpeg" alt="" />
          <img class="d d6" src="../assets/d6.jpeg" alt="" />
        </div>
        <div class="right">
          <div
            ref="mainBox"
            :style="{ transform: `translate3d(${xOffset}px, 0, 0)` }"
            class="box-cont flex"
          >
            <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida.
              </p>
              <div class="info">
                <h5 class="name">Ameen</h5>
                <p>Patient</p>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida.
              </p>
              <div class="info">
                <h5 class="name">Ameen</h5>
                <p>Patient</p>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida.
              </p>
              <div class="info">
                <h5 class="name">Ameen</h5>
                <p>Patient</p>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida.
              </p>
              <div class="info">
                <h5 class="name">Ameen</h5>
                <p>Patient</p>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida.
              </p>
              <div class="info">
                <h5 class="name">Ameen</h5>
                <p>Patient</p>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida.
              </p>
              <div class="info">
                <h5 class="name">Ameen</h5>
                <p>Patient</p>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida.
              </p>
              <div class="info">
                <h5 class="name">Ameen</h5>
                <p>Patient</p>
              </div>
            </div>
            <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecena ssuspendisse ultrices gravida.
              </p>
              <div class="info">
                <h5 class="name">Ameen</h5>
                <p>Patient</p>
              </div>
            </div>
          </div>

          <div class="buttons flex ml-5 gap-4">
            <div class="arrow" @click="moveLeft">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                />
              </svg>
            </div>
            <div class="arrow" @click="moveRight">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Testimonial",
  setup() {
    const xOffset = ref(0);
    const step = 570;
    const min = 0;
    const max = -2870;

    const moveRight = () => {
      if (xOffset.value + step >= max) {
        xOffset.value -= step;
        console.log(xOffset.value);
      }
    };

    const moveLeft = () => {
      if (xOffset.value < min) {
        xOffset.value += step;
      }
    };

    return {
      xOffset,
      moveRight,
      moveLeft,
    };
  },
};
</script>

<style scoped>
.btn-right {
  transform: translate3d(575px, 0px, 0px);
}
.btn-left {
  transform: translate3d(575px, 0px, 0px);
}

.testimonial {
  padding: 100px 0 0;
}
.content {
  width: 100%;
}
.left,
.right {
  flex: 0 0 auto;
  width: 50%;
}
.right {
  overflow: hidden;
}
.left .main {
  width: 450px;
  height: 450px;
}
.left .d {
  width: 65px;
  height: 65px;
  position: absolute;
  border-radius: 50%;
}
.left .d1 {
  left: 45%;
  top: 0;
}
.left .d2 {
  right: 15%;
  top: 20%;
}
.left .d3 {
  right: 15%;
  bottom: 20%;
}
.left .d4 {
  left: 45%;
  bottom: 0;
}
.left .d5 {
  left: 15%;
  bottom: 20%;
}
.left .d6 {
  left: 15%;
  top: 20%;
}

.box-cont {
  max-width: 5610px;
  width: 5610px;
  opacity: 1;
  transform: translate3d(-575px, 0px, 0px);
  transition: 1s;
}
.box {
  margin: 50px 20px 20px;
  padding: 50px;
  background: var(--sc-color);
  border-radius: 40px 0 40px 40px;
  width: 530px;
  transition: 1s;
}
.box p:first-child {
  color: #fff;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 30px;
}
.box .name {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}
.box .info p {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0;
  text-transform: uppercase;
}

.arrow {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffe4d5;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
}
.arrow:hover {
  background: var(--sc-color);
}
.arrow:hover svg {
  fill: white;
}
.arrow svg {
  width: 20px;
  height: 20px;
  fill: var(--sc-color);
  transition: 0.5s;
}

@media (max-width: 1024px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .left,
  .right {
    width: 80%;
  }
}
@media (max-width: 767px) {
  .right {
    width: 95%;
  }
  .main {
    max-height: 100%;
    width: 100% !important;
    height: 100% !important;
  }
  img.d {
    width: 55px !important;
    height: 55px !important;
  }

  .left .d2 {
    right: 0%;
    top: 20%;
  }
  .left .d3 {
    right: 0%;
    bottom: 20%;
  }

  .left .d5 {
    left: 0%;
    bottom: 20%;
  }
  .left .d6 {
    left: 0%;
    top: 20%;
  }
}
@media (max-width: 600px) {
  .right {
    width: 100%;
  }
}
</style>
