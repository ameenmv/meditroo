<template>
  <div class="working relative">
    <div class="container">
      <div class="header flex items-center flex-col">
        <p class="heading">Working Process</p>
        <h1 class="heading2">How we works?</h1>
      </div>
      <div class="cards flex gap-7">
        <div class="card">
          <div class="number">01</div>
          <div class="text">
            <h5 class="title">Make Appointmnet</h5>
            <p class="p">
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
          </div>
          <button class="view flex items-center">
            View More
            <div class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </div>
          </button>
        </div>
        <div class="card card2">
          <div class="number">01</div>
          <div class="text">
            <h5 class="title">Make Appointmnet</h5>
            <p class="p">
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
          </div>
          <button class="view flex items-center">
            View More
            <div class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </div>
          </button>
        </div>
        <div class="card">
          <div class="number">01</div>
          <div class="text">
            <h5 class="title">Make Appointmnet</h5>
            <p class="p">
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
          </div>
          <button class="view flex items-center">
            View More
            <div class="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
    <img
      src="../assets/circle2.png"
      class="absolute circle bottom-20 left-10"
      alt=""
    />
    <img
      src="../assets/+.png"
      class="absolute circle bottom-60 right-10"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Working",
};
</script>

<style scoped>
.working {
  background-image: url(../assets/bg.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  transition: all 0.5s;
  padding-bottom: 70px;
}
.header {
  margin-bottom: 45px;
}
.card {
  padding: 40px 30px;
  background: #ffffff;
  box-shadow: 0 10px 60px 0 rgba(31, 34, 120, 0.1);
  border-radius: 30px;
  transition: 0.5s;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-top: 30px;
}
.card::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 0%;
  width: 100%;
  z-index: -1;
  background: var(--sc-color);
  transform-origin: top;
  transition: 0.5s;
}
.card2 {
  margin-bottom: 30px;
  margin-top: 0;
}
.card2::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: var(--sc-color);
  transform-origin: top;
  transition: 0.5s;
}
.card:hover::after {
  height: 100%;
  transform-origin: bottom;
  top: auto;
  bottom: 0;
}
.card:hover .number {
  -webkit-text-stroke: 2px #fff;
  text-shadow: 0 10px 0 #f38f5e;
}
.card:hover .text h5 {
  color: #ffffff;
}
.card:hover .text p {
  color: #ffffff;
}
.card:hover .view {
  background: #ffffff;
  color: var(--sc-color);
}
.card:hover .arrow {
  background: var(--sc-color);
}
.card:hover .arrow svg {
  fill: white;
}
.card2 .number {
  -webkit-text-stroke: 2px #fff !important;
  text-shadow: 0 10px 0 #f38f5e !important;
}
.card2 .text h5 {
  color: #ffffff;
}
.card2 .text p {
  color: #ffffff;
}
.card2 .view {
  background: #ffffff;
  color: var(--sc-color);
}
.card2 .arrow {
  background: var(--sc-color) !important;
}
.card2 .arrow svg {
  fill: white !important;
}
.card .number {
  margin-bottom: 30px;
  font-size: 80px;
  font-weight: 900;
  -webkit-text-stroke: 2px #f17732;
  text-shadow: 0 10px 0 #ffe3d3;
  color: transparent;
  transition: 0.5s;
}
.card .title {
  color: var(--sc-color);
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 700;
}
.card p {
  margin-bottom: 30px;
  font-size: 15px;
}
.card button {
  padding: 15px 30px;
  color: var(--sc-main-color);
  background: #e1e2f6;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: 0.5s;
  cursor: pointer;
}
.card button .arrow {
  background: #ffffff;
  border-radius: inherit;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -12px -27px -12px 15px;
}
.card button .arrow svg {
  width: 13px;
  fill: var(--sc-main-color);
}
.circle {
  animation: up-down 5s linear infinite;
}

@media (max-width: 991px) {
  .heading {
    font-size: 18px;
  }
  .heading2 {
    font-size: 36px;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .card {
    flex: 0 0 auto;
    margin-top: 0;
  }
  .card2 {
    margin-bottom: 0;
  }
}
@media (max-width: 767px) {
  img.absolute {
    display: none;
  }
}
@media (max-width: 600px) {
  .heading {
    font-size: 16px;
  }
  .heading2 {
    font-size: 34px;
  }
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
