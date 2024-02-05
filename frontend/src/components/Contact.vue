<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <div class="contactInfo">
      <form>
        <h3>Contact-Form</h3>
        <input type="text" placeholder="Enter your name" v-model="User.name" />
        <input
          type="email"
          placeholder="Enter your email"
          v-model="User.email"
        />
        <input type="text" placeholder="Enter your age" v-model="User.age" />
        <input
          type="text"
          placeholder="Enter your number"
          v-model="User.number"
        />
        <button type="submit" class="btn" @click="addtoAPI">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      User: { name: "", email: "", age: "", number: "" },
    };
  },
  methods: {
    addtoAPI() {
      let newUser = {
        name: this.User.name,
        email: this.User.email,
        age: this.User.age,
        number: this.User.number,
      };

      console.log(this.User);
      axios
        .post("http://localhost:3000/users",newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.contact {
  width: 100%;
  height: 93vh;

  background-color: rgb(241, 241, 118);
  text-align: center;
}
.contact h2 {
  text-align: center;
  padding: 10px 0;
  font-size: 36px;
  font-weight: bold;
}

.contact .contactInfo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 500px;
}

.contact .contactInfo form {
  margin: 20px 0;
  width: 35%;
  background-color: #fff;
  border-radius: 10px;
}

.contact .contactInfo form input {
  width: 70%;
  height: 4.5vh;
  margin: 25px 0;
}

.contact .contactInfo form h3 {
  font-size: 24px;
  margin: 10px 0;
}

.contact .contactInfo form input {
  margin-top: 20px;
}

.contact .contactInfo form .btn {
  display: block;
  position: relative;
  left: 40%;
  padding: 5px 30px;
  font-size: 20px;
  border: none;
  background-color: black;
  color: #fff;
  border-radius: 5px;
  transition: 0.5s all;
}
.contact .contactInfo form .btn:hover {
  background-color: red;
}
</style>
