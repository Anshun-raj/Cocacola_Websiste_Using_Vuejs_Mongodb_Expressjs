<template>
  <div class="navbar">
    <img src="../assets/cocacola.png" alt="" class="navImg" />
    <div class="navData">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/product" class="link">Product</router-link>
      <router-link to="/review" class="link">Review</router-link>
      <router-link to="/contact" class="link">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  height: 7vh;
  width: 100%;
  align-items: center;
  background-color: rgb(248, 96, 96);
  justify-content: space-between;
}

.navbar .navImg {
  margin: 0 10px;
  height: 6vh;
  width: 10%;
  cursor: pointer;
}
.navbar .navData {
  width: 40%;
  gap: 50px;
  display: flex;
  flex-direction: row;
  font-size: 22px;
  font-weight: bold;
}

.navbar .navData .link {
  cursor: pointer;
  text-decoration: none;
  color: #000;
}

.navbar .navData .link:hover {
  border-bottom: 2px solid #fff;
  color: #fff;
}
</style>
