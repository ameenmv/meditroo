<template>
  <div class="landing">
    <div class="container relative flex">
      <div class="left flex flex-col items-start justify-center">
        <h2 class="text-sm font-bold">We Provide All Health Care Solution</h2>
        <h1 class="mb-7">
          Protect Your Health And Take Care To Of Your Health
        </h1>
        <button class="button">Read More</button>
      </div>
      <div class="right">
        <div class="img">
          <img src="../assets/women1-home.png" alt="" />
        </div>
      </div>
      <img class="circle absolute" src="../assets/circle.png" alt="" />
      <img src="../assets/+.png" alt="" class="absolute bottom-25 left-110" />
      <img
        src="../assets/triangle.png"
        class="absolute top-80 triangle"
        alt=""
      />
      <img
        src="../assets/square.png"
        class="absolute top-20 right-110 square"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Landingpage",
};
</script>

<style scoped>
.landing {
  height: 700px;
  line-height: 1.3;
}
.container {
  z-index: 111;
}
.left {
  width: 58.33333333%;
  flex: 0 0 auto;
}
.left h2 {
  font-size: 18px;
  color: var(--sc-main-color);
  padding: 5px 15px;
  margin-bottom: 10px;
  background-image: url(../assets/text-bg.png);
}
.left h1 {
  color: var(--main-color);
  font-size: 45px;
  font-weight: 900;
}

.right {
  right: 41.66666667%;
}
.right img {
  max-width: 100%;
  flex: 0 0 auto;
  animation: up-down 5s linear infinite;
}
.circle {
  position: absolute;
  top: 100px;
  left: 100px;
}
.triangle {
  left: -100px;
  animation: up-down 5s linear infinite;
}
.square {
  animation: up-down 5s linear infinite;
}
img.absolute {
  z-index: -1;
}

@media (max-width: 991px) {
  .landing {
    height: 500px;
  }
  h2 {
    font-size: 14px !important;
  }
  h1 {
    font-size: 28px !important;
    margin-bottom: 20px;
  }
  button {
    padding: 12px 24px;
    margin-top: 0;
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .absolute {
    display: none;
  }
  .landing {
    height: 400px;
  }
  h2 {
    font-size: 14px !important;
  }
  h1 {
    font-size: 24px !important;
    margin-bottom: 20px;
  }
  button {
    padding: 12px 24px;
    margin-top: 0;
    font-size: 14px;
  }
}
@media (max-width: 600px) {
  .landing {
    height: auto;
    padding-top: 40px;
  }
  .container {
    flex-direction: column;
  }
  .left,
  .right {
    width: 100%;
  }
}
</style>
