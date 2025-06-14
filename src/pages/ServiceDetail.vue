<template>
  <div>
    <Navbar />
    <Title name="Service Detail" name2="Service Detail" />
    <div class="container flex">
      <div class="left">
        <img src="../assets/servdetail.jpg" alt="" />
        <div class="head">
          <h1 class="mb-3">Why Medical Had Been So Popular Till</h1>
          <p class="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div class="row flex">
          <div class="col">
            <ul>
              <li>Then along come two they</li>
              <li>That’s just a little bit more than</li>
              <li>Standard dummy text ever since</li>
              <li>Simply dummy text of the printing</li>
              <li>Make a type specimen book</li>
            </ul>
          </div>
          <div class="col w-100 flex flex-col justify-center">
            <div class="skillbar">
              <div class="title flex justify-space-between">
                <h6>Advanced Technology</h6>
                <p>96%</p>
              </div>
              <div class="skill">
                <p style="width: 96%" class="skillbar-bar"></p>
              </div>
            </div>
            <div class="skillbar">
              <div class="title flex justify-space-between">
                <h6>Certified Engineers</h6>
                <p>79%</p>
              </div>
              <div class="skill">
                <p style="width: 79%" class="skillbar-bar"></p>
              </div>
            </div>
            <div class="skillbar">
              <div class="title flex justify-space-between">
                <h6>6 years Experience</h6>
                <p>75%</p>
              </div>
              <div class="skill">
                <p style="width: 75%" class="skillbar-bar"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="questions">
          <h1 class="mb-2">Popular Questions</h1>
          <p class="mb-7 p">
            Standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book
          </p>
          <div
            v-for="(item, index) in items"
            :key="index"
            class="buttons flex flex-col"
          >
            <button
              :class="{ color: item.isActive }"
              @click="toggleDiv(index)"
              class="button"
            >
              {{ item.text }}
            </button>
            <div :class="{ active: item.isActive }" class="collapce">
              <div class="body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li>Engine Diagnostics</li>
          <li>Lube Oil and Filters</li>
          <li>Belts and Hoses</li>
          <li>Air Conditioning</li>
          <li>Brake Repair</li>
          <li>Tire and Wheel Services</li>
        </ul>
        <div class="download">
          <h1>Download</h1>
          <div class="link flex">
            <img src="../assets/pdf.png" alt="" />
            <div class="tex">
              <h2>Download our Brochures</h2>
              <p>Download</p>
            </div>
          </div>
          <div class="link flex">
            <img src="../assets/doc.png" alt="" />
            <div class="text">
              <h2>Our Company Details</h2>
              <p>Download</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Title from "../components/Title.vue";

export default {
  name: "ServiceDetail",
  data() {
    return {
      color: false,
      // Initialize array with each item having an isActive property
      items: [
        { isActive: false, text: "How Doctor Can Ease Your Pain?" },
        { isActive: false, text: "How do I withdraw from a subject?" },
        { isActive: false, text: "Understand Doctor Before You Regret?" },
        { isActive: false, text: "What types of systems do you support?" },
        { isActive: false, text: "We Teach You How To Feel Better?" },
        { isActive: false, text: "How Can I Contact You?" },

        // Add more objects if needed
      ],
    };
  },
  components: {
    Navbar,
    Title,
    Footer,
  },
  methods: {
    toggleDiv(index) {
      // Toggle only the specific item's isActive state
      this.items[index].isActive = !this.items[index].isActive;
      this.color = !this.color;
    },
  },
};
</script>

<style scoped>
.color {
  background: var(--sc-color) !important;
}
.left {
  width: 66%;
  padding: 0 15px;
}
.right {
  width: 33%;
  padding: 0 15px;
}
img {
  margin-bottom: 30px;
}
.head {
  margin-bottom: 30px;
}
.head h1 {
  font-size: 36px;
  margin-bottom: 15px;
  color: var(--main-color);
  font-weight: 700;
}
.head p {
  font-size: 17px;
}
.col {
  margin-bottom: 30px;
  padding: 0 15px;
}

.left ul li {
  margin-bottom: 10px;
  padding: 8px 15px 7px 50px;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: var(--main-color);
  position: relative;
}
.left ul li:hover::before {
  background: var(--sc-color);
}
.left ul li::before {
  background-color: #565acf;
  border-radius: 4px;
  color: #fff;
  content: "✓";
  display: block;
  font-family: Line Awesome Free;
  font-weight: 900;
  height: 35px;
  left: 0;
  line-height: 35px;
  position: absolute;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  transition: all 0.5s;
  width: 35px;
}

.skillbar {
  margin-bottom: 30px;
}
.title {
  justify-content: space-between;
  align-items: center;
}
.title h6 {
  font-size: 18px;
  color: var(--main-color);
  font-weight: 700;
}
.title p {
  font-size: 16px;
  color: var(--sc-main-color);
  font-weight: 700;
}
.skill {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: inline-block;
  height: 6px;
  position: relative;
  text-align: left;
  width: 100%;
}
.skillbar-bar {
  background: #565acf;
  border-radius: 10px;
  display: inline-block;
  height: 6px;
  margin-bottom: 0;
  overflow: visible !important;
  overflow: initial !important;
  position: absolute;
  top: 0;
  width: 0;
}
.skillbar-bar::after {
  background: #fff;
  border: 3px solid #565acf;
  border-radius: 15px;
  content: "";
  height: 20px;
  position: absolute;
  right: -5px;
  top: -8px;
  width: 20px;
}

.questions h1 {
  font-size: 24px;
  font-weight: 700;
  color: var(--main-color);
}
.questions p {
  font-size: 17px;
}
.questions .button {
  background: var(--sc-main-color);
  text-align: left;
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.questions .button::after {
  background-image: none;
  content: "^";
  font-family: Font Awesome\5 Free;
  font-size: 14px;
  height: fit-content;
  -webkit-transform: rotateX(-180deg);
  transform: rotateX(-180deg);
  transition: all 0.5s;
  width: fit-content;
  width: 28px;
  font-size: 30px;
  height: 28px;
  justify-content: end;
  display: flex;
}
.collapce {
  background-color: rgba(86, 90, 207, 0.1);
  border-radius: 0 0 8px 8px;
  font-size: 15px;
  padding: 25px;
  display: none;
  transition: all 0.5s;
}
.active {
  display: block !important;
  animation: ani 0.6s;
}

.right ul {
  background-color: #fff;
  border: 1px solid rgba(86, 90, 207, 0.2);
  border-bottom: 3px solid #565acf;
  border-radius: 6px 6px 4px 4px !important;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.06);
  padding: 30px;
  position: relative;
  margin-bottom: 40px;
}
.right ul li {
  background-color: #565acf;
  border-radius: 8px;
  color: #fff;
  display: block;
  font-size: 16px;
  font-weight: 600;
  font-weight: 500;
  padding: 15px 50px 15px 20px;
  position: relative;
  text-transform: capitalize;
  transition: all 0.5s;
  z-index: 1;
  margin-bottom: 10px;
  transition: all 0.5s;
  cursor: pointer;
}
.right ul li:hover {
  background: var(--sc-color);
}
.right .download {
  background-color: #fff;
  border: 1px solid rgba(86, 90, 207, 0.2);
  border-bottom: 3px solid #565acf;
  border-radius: 6px 6px 4px 4px !important;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.06);
  padding: 30px;
  position: relative;
}
.download h1 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
  padding-bottom: 8px;
  position: relative;
  color: var(--main-color);
  font-weight: 700;
  font-size: 20px;
}
.download h1::after {
  background: #565acf;
  bottom: -2px;
  content: "";
  height: 3px;
  left: 0;
  position: absolute;
  width: 30px;
}
.download .link {
  background: var(--sc-main-color);
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px 15px 15px 65px;
  position: relative;
}
.download .link img {
  left: 15px;
  position: absolute;
  top: 18px;
  width: 40px;
}
.download h2 {
  color: #fff;
  font-size: 15px;
  line-height: 22px;
  font-weight: 700;
}
.download p {
  color: #fff;
  font-size: 15px;
}
@keyframes ani {
  0% {
    height: 0px;
  }
  100% {
    height: 150px;
  }
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
  }
  .left,
  .right {
    width: 100%;
  }
  .left {
    margin-bottom: 30px;
  }
  .row {
    flex-direction: column;
  }
  .col {
    width: 100%;
  }
  h1.mb-3 {
    font-size: 30px;
  }
}
</style>
