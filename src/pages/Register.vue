<template>
  <div class="login">
    <div class="container flex justify-center">
      <div class="col flex flex-col justify-center items-center text-center">
        <img src="../assets/logo.png" alt="" />
        <input placeholder="Name" type="text" name="" id="" />
        <input placeholder="Email" type="email" name="" id="" />
        <input placeholder="User Name" type="text" name="" id="" />
        <input placeholder="Password" type="password" name="" id="" />
        <button class="button log">Register Now</button>
        <p class="mb-4 mt-10">Alreedy have an account?</p>
        <router-link to="/form-login"
          ><button class="button register">Login</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
.login {
  align-items: center;
  background-color: #f5f5fc;
  display: flex;
  height: 100vh;
}
.col {
  padding: 40px 50px;
  width: 41.66666667%;
  background: #ffffff;
  border-radius: 70px;
  box-shadow: 0 10px 60px 0 rgba(31, 34, 120, 0.1);
}
img {
  margin-bottom: 30px;
}
input {
  border: 1px solid rgba(86, 90, 207, 0.3);
  border-radius: 8px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  height: 60px;
  padding: 15px 25px;
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  transition: 0.3s;
}
input:hover {
  border: 1px solid var(--sc-main-color);
}
input:focus {
  border: 1px solid var(--sc-main-color);
}

.button {
  width: 100%;
  margin: 0;
}
.log {
  background: var(--sc-main-color);
}
.log:hover {
  background: #4b4fb4;
}
.forget {
  color: var(--sc-main-color);
  cursor: pointer;
}
a {
  width: 100%;
}

@media (max-width: 1200px) {
  .col {
    width: 60%;
  }
}
@media (max-width: 767px) {
  .col {
    width: 90%;
  }
}
</style>
