<template>
  <div class="about">
    <h2>About Us</h2>
    <div class="aboutInfo">
      <div class="aboutInfoLeft">
        <img src="../assets/aboutImg.png" alt="" class="aboutImg" />
      </div>
      <div class="aboutInfoRight">
        <h3>WikiPedia</h3>
        <p>
          Coca-Cola,or Coke,is a carbonated soft drink manufactured by the
          Coca-Cola Company.In 2013,Coke products were sold in over 200
          countries worldwide,with consumers drinking more than 1.8 billion
          company beverage servings each day.Coca-Cola ranked No. 87 in the 2018
          Fortune 500 list of the largest United States corporations by total
          revenue.Based on Interbrand's "best global brand" study of
          2020,Coca-Cola was the world's sixth most valuable brand. Originally
          marketed as a temperance drink and intended as a patent medicine,
          Coca-Cola was invented in the late 19th century by John Stith
          Pemberton in Atlanta, Georgia.In 1888, Pemberton sold the ownership
          rights to Asa Griggs Candler, a businessman, whose marketing tactics
          led Coca-Cola to its dominance of the global soft-drink market
          throughout the 20th and 21st century.The Coca-Cola Company produces
          concentrate, which is then sold to licensed Coca-Cola bottlers
          throughout the world. The bottlers, who hold exclusive territory
          contracts with the company, produce the finished product in cans and
          bottles from the concentrate, in combination with filtered water and
          sweeteners. The Coca-Cola Company has on occasion introduced other
          cola drinks under the Coke name. The most common of these is Diet
          Coke, along with others including Caffeine-Free Coca-Cola, Diet Coke
          Caffeine-Free, Coca-Cola Zero Sugar, Coca-Cola Vanilla,and special
          versions with lemon,lime,and coffee.After Candler had gained a better
          foothold on Coca-Cola in April 1888,he nevertheless was forced to sell
          the beverage he produced with the recipe.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  width: 100%;
  height: 93vh;
  background-color: rgb(241, 241, 118);
}

.about h2 {
  text-align: center;
  padding: 10px 0;
  font-size: 36px;
  font-weight: bold;
}

.about .aboutInfo {
  display: flex;
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.about .aboutInfo .aboutInfoLeft {
  width: 50%;
  justify-content: center;
}

.about .aboutInfo .aboutInfoLeft .aboutImg {
  width: 500px;
  margin: 10px 0;
}

.about .aboutInfo .aboutInfoRight {
  width: 50%;
  justify-content: center;
  text-align: left;
}

.about .aboutInfo .aboutInfoRight h3 {
  text-decoration: underline;
  font-size: 28px;
  text-align: center;
}

.about .aboutInfo .aboutInfoRight p {
  font-size: 18px;
}
</style>
