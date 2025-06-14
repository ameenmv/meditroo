<template>
  <div class="title">
    <div class="container relative text-center">
      <h1>{{ name }}</h1>
      <div class="breadcrump flex">
        <router-link to="/"
          ><div class="home flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
            <p>Home</p>
          </div></router-link
        >
        /
        <div class="about">
          <p>{{ name2 }}</p>
        </div>
      </div>
      <img src="../assets/zigzag.png" class="absolute zigzag" alt="" />
      <img src="../assets/+.png" class="absolute plus" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    name: {
      type: String,
      required: true,
    },
    name2: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  padding: 160px 0 114px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/src/assets/titlebg.jpg);
  margin: -120px 0 -10px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 62px;
  color: var(--main-color);
  font-weight: 700;
  margin-bottom: 20px;
}
svg {
  margin-right: 10px;
  width: 22px;
  height: 22px;
  fill: white;
}
.breadcrump {
  padding: 12px 30px;
  box-shadow: 0 5px 30px 0 rgba(86, 90, 207, 0.3);
  background: var(--sc-main-color);
  color: white;
  border-radius: 8px;
  gap: 10px;
}

.zigzag {
  animation: up-down 5s linear infinite;
  left: 131px;
  top: 145px;
}
.plus {
  animation: pedri 20s linear infinite;

  right: 50px;
}

@media (max-width: 991px) {
  h1 {
    font-size: 52px !important;
  }
}
@media (max-width: 767px) {
  h1 {
    font-size: 42px !important;
  }
  img.absolute {
    display: none;
  }
}
</style>
