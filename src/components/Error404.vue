<template>
  <div class="error">
    <div class="container">
      <h1>4<span></span>4</h1>
      <h2>The Page you were looking for, couldn't be found.</h2>
      <p class="p">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div class="buttons gap-2 flex">
        <router-link to="/"><button class="button">Back</button></router-link>
        <router-link to="/"
          ><button class="button">Back To Home</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style scoped>
.error {
  padding: 50px 0;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  max-width: 550px;
}
h1 {
  font-size: 180px;
  color: var(--main-color);
  font-weight: 700;
}
span {
  background-size: 100%;
  display: inline-block;
  height: 145px;
  margin: 0 10px;
  width: 145px;
  background-image: url(../assets/sad.gif);
}
h2 {
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 700;
  color: var(--main-color);
}
p {
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 500;
}
button {
  background: var(--sc-main-color);
}
button:hover {
  background: #3e4196;
}

@media (max-width: 767px) {
  h1 {
    font-size: 120px;
  }
  h2 {
    font-size: 24px;
  }
}
</style>
