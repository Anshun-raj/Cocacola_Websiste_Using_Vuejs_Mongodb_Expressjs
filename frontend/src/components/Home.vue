<template>
  <div class="home">
    <div class="homeInfo">
      <h2>Cocacola</h2>
      <h3>Har Rishta Bola,Mere Naam Ki Coca-Cola</h3>
      <button class="btn">Know More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  height: 93vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(241, 241, 118);
}
.home .homeInfo {
  width: 90%;
  height: 90%;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 180px 0;
}

.home .homeInfo h2 {
  font-weight: bold;
  font-size: 42px;
  font-style: italic;
  padding: 10px 0;
}

.home .homeInfo h3 {
  font-weight: 600;
  font-size: 32px;
  padding: 10px 0;
}

.home .homeInfo .btn {
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background-color: red;
  color: #fff;
  cursor: pointer;
  margin: 10px 0;
  transition: 0.5s all;
}

.home .homeInfo .btn:hover {
  background-color: rgb(93, 92, 92);
}
</style>
