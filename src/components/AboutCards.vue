<template>
  <div class="cards">
    <div class="container flex gap-5">
      <div class="card">
        <h2>120</h2>
        <h3>Years With You</h3>
        <p>
          Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
        </p>
      </div>
      <div class="card">
        <h2>120</h2>
        <h3>Years With You</h3>
        <p>
          Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
        </p>
      </div>
      <div class="card">
        <h2>120</h2>
        <h3>Years With You</h3>
        <p>
          Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
        </p>
      </div>
      <div class="card">
        <h2>120</h2>
        <h3>Years With You</h3>
        <p>
          Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCards",
};
</script>

<style scoped>
.cards {
  background: #eeeefa;
  padding: 100px 0 70px;
}
.card {
  background-color: #fff;
  border-radius: 20px;
  margin: 15px 0 0 15px;
  padding: 50px 30px;
  position: relative;
  transition: all 0.5s;
}
/*.card::after {
  border: 2px solid #565acf;
  border-radius: 20px;
  content: "";
  height: 100%;
  left: -15px;
  position: absolute;
  top: -15px;
  width: 100%;
  z-index: -1;
}*/
.card:hover {
  background: var(--sc-main-color);
}
.card:hover h2,
.card:hover p,
.card:hover h3 {
  color: white;
}
h2 {
  font-size: 60px;
  color: var(--sc-color);
  font-weight: 700;
}
h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--main-color);
  font-weight: 700;
}
p {
  color: #444444;
  font-size: 15px;
}

@media (max-width: 1024px) {
  .container {
    flex-wrap: wrap;
  }
  .card {
    width: 44%;
  }
}
@media (max-width: 600px) {
  .container {
    flex-wrap: wrap;
  }
  .card {
    width: 100%;
  }
}
</style>
