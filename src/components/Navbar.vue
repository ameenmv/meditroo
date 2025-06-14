<template>
  <div class="navbar flex items-center justify-between px-6">
    <router-link to="/">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
    </router-link>
    <div class="links ml-auto">
      <ul class="flex font-bold">
        <router-link to="/"
          ><li class="px-5 py-11 cursor-pointer flex">Home</li></router-link
        >
        <li class="pages px-5 py-11 cursor-pointer flex gap-1 relative">
          Pages
          <svg
            class="w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            />
          </svg>
          <ul class="popup popup1 absolute">
            <router-link to="About"
              ><li>
                <span class="relative">About Us</span>
              </li></router-link
            >

            <router-link to="/team"
              ><li><span class="relative">Our Team</span></li></router-link
            >
            <router-link to="faq"
              ><li><span class="relative">FAQ's</span></li></router-link
            >
            <router-link to="booking"
              ><li><span class="relative">booking</span></li></router-link
            >
            <router-link to="error-404"
              ><li><span class="relative">ERROR 404</span></li></router-link
            >
            <router-link to="form-login"
              ><li>
                <span class="relative">Login / Register</span>
              </li></router-link
            >
          </ul>
        </li>
        <li class="services px-5 py-11 cursor-pointer flex gap-1 relative">
          Services
          <svg
            class="w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            />
          </svg>
          <ul class="popup popup2 absolute">
            <router-link to="services"
              ><li><span class="relative">Service</span></li></router-link
            >
            <router-link to="service-detail"
              ><li>
                <span class="relative">Service Detail</span>
              </li></router-link
            >
          </ul>
        </li>
        <li class="blog px-5 py-11 cursor-pointer flex gap-1 relative">
          Blog
          <svg
            class="w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            />
          </svg>
          <ul class="popup popup3 absolute">
            <router-link to="blog"
              ><li><span class="relative">Blog</span></li></router-link
            >
            <router-link to="blog-detail"
              ><li><span class="relative">Blog Detail</span></li></router-link
            >
          </ul>
        </li>
        <router-link to="contactus"
          ><li class="px-5 py-11 cursor-pointer flex gap-1">
            Contact Us
          </li></router-link
        >
      </ul>
    </div>
    <div class="contact pl-3 flex">
      <svg
        class="w-5 mr-6 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
      <div class="phone cursor-pointer flex items-center">
        <div class="grap flex items-center justify-center">
          <svg
            class="w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
          </svg>
        </div>
        <svg
          @click="openmenu"
          class="nav-toggle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
        <p class="flex items-center font-bold mr-5">(+01) 999 888 777</p>
        <router-link to="/contactus">
          <button class="px-5 py-3 color-gray-50">
            CONTACT US
          </button></router-link
        >
      </div>
    </div>

    <div
      ref="menu"
      class="big-menu absolute flex flex-col items-center justify-center"
    >
      <div class="img"><img src="../assets/logo2.png" alt="" /></div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="">
          <a @click="opensub1" class="flex justify-between">
            Pages<svg
              width="12px"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </a>
          <ul ref="sub1" class="submenu">
            <router-link to="About"
              ><li>
                <span class="relative">About Us</span>
              </li></router-link
            >

            <router-link to="/team"
              ><li><span class="relative">Our Team</span></li></router-link
            >
            <router-link to="faq"
              ><li><span class="relative">FAQ's</span></li></router-link
            >
            <router-link to="booking"
              ><li><span class="relative">booking</span></li></router-link
            >
            <router-link to="error-404"
              ><li><span class="relative">ERROR 404</span></li></router-link
            >
            <router-link to="form-login"
              ><li>
                <span class="relative">Login / Register</span>
              </li></router-link
            >
          </ul>
        </li>
        <li class="">
          <a @click="opensub2" class="flex justify-between">
            Service<svg
              width="12px"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </a>
          <ul ref="sub2" class="submenu">
            <router-link to="services"
              ><li><span class="relative">Service</span></li></router-link
            >
            <router-link to="service-detail"
              ><li>
                <span class="relative">Service Detail</span>
              </li></router-link
            >
          </ul>
        </li>
        <li class="">
          <a @click="opensub3" class="flex justify-between">
            Blog<svg
              width="12px"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </a>
          <ul ref="sub3" class="submenu">
            <router-link to="blog"
              ><li><span class="relative">Blog</span></li></router-link
            >
            <router-link to="blog-detail"
              ><li><span class="relative">Blog Detail</span></li></router-link
            >
          </ul>
        </li>
        <li class=""><router-link to="contactus">Contact Us</router-link></li>
      </ul>
      <div class="share flex">
        <a
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
            /></svg
        ></a>
        <a
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            /></svg
        ></a>
        <a
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
            /></svg
        ></a>
        <a
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
            /></svg
        ></a>
      </div>
      <div @click="closemenu" class="menu-close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goToAbout() {
      this.$router.push("/About");
    },
    openmenu() {
      this.$refs.menu.classList.add("openmenu");
      this.$refs.menu.classList.remove("closemenu");
    },
    closemenu() {
      this.$refs.menu.classList.add("closemenu");
      this.$refs.menu.classList.add("openmenu");
    },
    opensub1() {
      this.$refs.sub1.classList.toggle("opensub");
      this.$refs.sub2.classList.remove("opensub");
      this.$refs.sub3.classList.remove("opensub");
    },
    opensub2() {
      this.$refs.sub2.classList.toggle("opensub");
      this.$refs.sub1.classList.remove("opensub");
      this.$refs.sub3.classList.remove("opensub");
    },
    opensub3() {
      this.$refs.sub3.classList.toggle("opensub");
      this.$refs.sub1.classList.remove("opensub");
      this.$refs.sub2.classList.remove("opensub");
    },
  },
};
</script>

<style scoped>
.links {
  z-index: 1114;
}
.links ul li {
  color: var(--main-color);
}
.links ul li.pages:hover .popup1 {
  opacity: 1;
  display: block;
}
.links ul li.services:hover .popup2 {
  opacity: 1;
  display: block;
}
.links ul li.blog:hover .popup3 {
  opacity: 1;
  display: block;
}
.links ul li:hover {
  color: var(--sc-color);
}
.links ul li svg {
  transition: 0.3s;
}
.links ul li:hover svg {
  fill: var(--sc-color);
  transform: rotate(45deg);
}
svg {
  fill: var(--main-color);
}

.links .popup {
  width: 220px;
  background: #fff;
  margin-top: 20px;
  box-shadow: 0 1px 40px 0 rgba(0, 0, 0, 0.1);
  left: -10px;
  top: 90px;
  padding: 10px 0;
  opacity: 0;
  transition: 0.5s;
  display: none;
}
.links .popup li {
  padding: 10px 20px;
  font-size: 14px;
  color: #666;
  transition: 0.3s;
}
.links .popup li:hover {
  color: var(--sc-main-color);
}
.links .popup li:hover span::after {
  right: auto;
  left: 0;
  transform-origin: left;
  width: 100%;
}
.links .popup span::after {
  background: #565acf;
  bottom: 0;
  content: "";
  height: 1px;
  position: absolute;
  right: 0;
  -webkit-transform-origin: right;
  transform-origin: right;
  transition: all 0.5s;
  width: 0;
}
.phone p {
  color: var(--main-color);
  font-size: 19px;
}
.phone .grap {
  background: rgba(86, 90, 207, 0.1);
  margin-right: 16px;
  width: 42px;
  height: 42px;
  border-radius: 8px;
}
.phone button {
  background: var(--sc-main-color);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;
}
.phone button:hover {
  background: #42459f;
}
.nav-toggle {
  display: none;
}

.big-menu {
  display: none;
}

@media (max-width: 1290px) {
  .phone .grap,
  .phone p {
    display: none;
  }
}
@media (max-width: 991px) {
  .links,
  button {
    display: none;
  }
  .navbar {
    padding-top: 20px;
  }
  .nav-toggle {
    display: block;
    width: 20px;
  }
  .openmenu {
    left: 0 !important;
    margin: 0 !important;
    padding: 15px 15px 5px !important;
    transition: all 0.8s !important;
    width: 100% !important;
  }
  .closemenu {
    left: -105% !important;
  }
  .big-menu {
    z-index: 9999 !important;
    background-color: #171a1e;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: normal !important;
    left: -105%;
    margin: 0;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    transition: all 0.5s;
    width: 60px;
    z-index: 99;
    font-size: 14px;

    /* left: 0;
  margin: 0;
  padding: 15px 15px 5px;
  transition: all 0.8s;
  width: 100%; */
  }
  .big-menu .img {
    display: block;
    float: none;
    height: auto;
    max-width: 100%;
    padding: 20px 15px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .big-menu img {
    width: 150px;
    margin: 0;
  }
  .big-menu ul {
    min-width: 300px;
    width: 70%;
  }
  .big-menu li {
    padding: 10px 0;
    color: #fff;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    cursor: pointer;
  }
  .big-menu li svg {
    fill: #fff;
  }
  .submenu {
    display: none;
    width: 100% !important;
  }
  .opensub {
    display: block;
  }
  .submenu li {
    padding-left: 20px;
    margin-top: 8px;
    transition: 0.3s;
  }
  .submenu li:hover {
    color: var(--sc-main-color);
  }
  .share {
    margin-top: auto;
    padding: 30px 0;
  }
  .share a {
    background-color: #565acf;
    border-radius: 8px;
    box-shadow: 0 10px 40px 0 rgba(31, 34, 120, 0.1);
    fill: #fff;
    display: block;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    transition: all 0.5s;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    transition: all 0.5s;
  }
  .share a:hover {
    background: var(--sc-color);
  }
  .share svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
  .menu-close {
    background-color: #565acf;
    color: #fff;
    display: flex;
    justify-content: center;
    height: 40px;
    line-height: 44px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 40px;
    z-index: 9999;
    cursor: pointer;
  }
  .menu-close svg {
    width: 15px;
    fill: #fff;
  }
}
@media (max-width: 767px) {
  .logo {
    width: 180px;
  }
}
@media (max-width: 576px) {
  .logo {
    width: 150px;
  }
}
</style>
