<template>
  <h1>{{ title }}</h1>
  <teleport to="#modals" v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal" /> -->
    <Modal :header="header" :text="text" @close="toggleModal">
      <template v-slot:links>
        <a href="#">more info</a>
      </template>
      <h1>This is Mega Giveaway</h1>
      <p>To join Mega Giveaway, signup now.</p>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>You got a offer</h1>
      <p>Your offer is iphone 16pro in 30% discount</p>
    </Modal>
  </teleport>

  <p>Welcome...</p>
  <button @click.ctrl="toggleModal">Show Modal (ctrl + click)</button>
  <button @click="toggleModalTwo">Show Offer</button>
  <!-- <br>
  <input type="text" name="name" ref="name">
  <button @click="handleClick">Click Here</button> -->
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the grand Give Away",
      text: "Buy one get one grab another.",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 1rem;
}
</style>
