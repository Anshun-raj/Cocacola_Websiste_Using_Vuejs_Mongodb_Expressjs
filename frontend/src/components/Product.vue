<template>
  <div class="product">
    <h2>Our Product</h2>
    <div class="productInfo">
      <div class="productInfoCard">
        <img src="../assets/productImg1.png" alt="" class="productImg" />
        <h3>Buy Now</h3>
        <h4>Price:-45/-</h4>
      </div>
      <div class="productInfoCard">
        <img src="../assets/productImg2.png" alt="" class="productImg" />
        <h3>Buy Now</h3>
        <h4>Price:-25/-</h4>
      </div>
      <div class="productInfoCard">
        <img src="../assets/productImg3.png" alt="" class="productImg" />
        <h3>Buy Now</h3>
        <h4>Price:-75/-</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 93vh;
  background-color: rgb(241, 241, 118);
}

.product h2 {
  text-align: center;
  padding: 10px 0;
  font-size: 36px;
  font-weight: bold;
}

.product .productInfo {
  display: flex;
  padding: 10px 0;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
}

.product .productInfo .productInfoCard {
  width: 350px;
  height: 400px;
  background-color: #fff;
  text-align: center;
  margin: 20px 30px;
  border-radius: 10px;
}

.product .productInfo .productInfoCard .productImg {
  width: 300px;
  margin: 10px 0;
}

.product .productInfo .productInfoCard h3 {
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  color: red;
}

.product .productInfo .productInfoCard h4 {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
}
</style>
