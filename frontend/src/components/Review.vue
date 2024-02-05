<template>
  <div class="review">
    <h2>Our Reviewer</h2>
    <div class="reviewInfo">
      <div class="reviewInfoCard">
        <img src="../assets/reviewImg1.png" alt="" class="reviewImg" />
        <h3>Name:-John Smith</h3>
        <div class="socialIcon">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        <button class="btn">Connect Now</button>
      </div>
      <div class="reviewInfoCard">
        <img src="../assets/reviewImg2.png" alt="" class="reviewImg" />
        <h3>Name:-Michel Thomas</h3>
        <div class="socialIcon">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        <button class="btn">Connect Now</button>
      </div>
      <div class="reviewInfoCard">
        <img src="../assets/reviewImg3.jpg" alt="" class="reviewImg" />
        <h3>Name:-Angelina Jolly</h3>
        <div class="socialIcon">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        <button class="btn">Connect Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
};
</script>

<style scoped>
.review {
  width: 100%;
  height: 93vh;
  background-color: rgb(241, 241, 118);
}

.review h2 {
  text-align: center;
  padding: 10px 0;
  font-size: 36px;
  font-weight: bold;
}

.review .reviewInfo {
  display: flex;
  padding: 10px 0;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
}

.review .reviewInfo .reviewInfoCard {
  width: 350px;
  height: 400px;
  background-color: #fff;
  text-align: center;
  margin: 20px 30px;
  border-radius: 10px;
}

.review .reviewInfo .reviewInfoCard .reviewImg {
  width: 200px;
  margin: 20px 0;
  border-radius: 100px;
}

.review .reviewInfo .reviewInfoCard h3 {
  font-weight: bold;
  font-size: 24px;
  color: #000;
}

.review .reviewInfo .reviewInfoCard .socialIcon {
  margin: 15px 0;
  font-size: 28px;
}
.review .reviewInfo .reviewInfoCard .socialIcon i {
  border: 2px solid #000;
  border-radius: 5px;
  margin: 0 10px;
  padding: 5px;
  transition: 0.5s all;
}
.review .reviewInfo .reviewInfoCard .socialIcon i:hover {
  color: rgb(43, 43, 43);
}

.review .reviewInfo .reviewInfoCard .btn {
  padding: 7px 10px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  background-color: red;
  border-radius: 5px;
  color: #fff;
  transition: 0.5s all;
}

.review .reviewInfo .reviewInfoCard .btn:hover {
  background-color: rgb(43, 43, 43);
}
</style>
