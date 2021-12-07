<template>
  <div>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="image"
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn>
        <span class="mr-2">Already using pexels?</span>
        <v-icon>mdi-open-in-new</v-icon
        ><router-link class="white--text mr-5 text" to="/Login">
          Log in</router-link
        >
      </v-btn>
    </v-app-bar>
    <v-container class="mt-14">
      <v-row>
        <v-col cols="6" md="8">
          <v-card>
            <v-container class="color bg-color">
              <h1 class="text-center">Join Pexels</h1>
              <h5 class="text-center grey--text">Let's create your account</h5>
              <v-container class="ml-8">
                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(245,245,245)"
                      type="text"
                      solo
                      label="Name"
                      :rules="nameRules"
                      v-model="name"
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(245,245,245)"
                      type="email"
                      solo
                      label="Email"
                      :rules="emailRules"
                      prepend-inner-icon="mdi-email"
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(245,245,245)"
                      type="password"
                      solo
                      label="Password"
                      prepend-inner-icon="mdi-lock"
                      :rules="passwordRules"
                      v-model="password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(245,245,245)"
                      type="number"
                      solo
                      label="Age"
                      :rules="ageRules"
                      prepend-inner-icon="mdi-counter"
                      v-model="age"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-file-input
                      background-color="rgb(245,245,245)"
                      prepend-icon="mdi-camera"
                      :v-model="profilePicture"
                      label="Profile picture"
                      solo
                      @change="getProfilePicture"
                      required
                    >
                    </v-file-input>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="7">
                    <v-btn
                      height="40"
                      class="text-center white--text btnMargin"
                      block
                      color="rgb(0,165,129)"
                      @click="storeData"
                      >Sign up</v-btn
                    ></v-col
                  >
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <p class="text-center font-size" mt-3>
                      By joining you agree to our
                      <a href="https://www.pexels.com/terms-of-service/"
                        >Terms of service</a
                      >
                      and
                      <a href="https://www.pexels.com/privacy-policy/"
                        >Privacy policy</a
                      >
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card elevation="19" class="color" height="548 ">
            <v-img :src="imageLogo" height="548" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import {
  emailRules,
  nameRules,
  ageRules,
  passwordRules,
} from "@/constants/Constants.js";

export default {
  name: "Signup",

  data() {
    return {
      imageLogo: require("@/assets/images/pexels.png"),
      image: require("@/assets/images/pexels-white.png"),

      //data properties for Regex
      emailRules: emailRules,
      nameRules: nameRules,
      passwordRules: passwordRules,
      ageRules: ageRules,

      //data properties for 2 way binding
      name: "",
      email: "",
      password: "",
      age: "",
      profilePicture: "",
    };
  },
  methods: {
    async storeData() {
      await axios.post("http://localhost:3000/eman", {
        name: this.name,
        password: this.password,
        age: this.age,
        email: this.email,
        profilePicture: this.profilePicture,
      });
    },
    getProfilePicture(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.profilePicture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
  },
};
</script>
<style scoped>
.margin {
  margin-left: 24%;
}
.avatarMargin {
  margin-left: 38%;
}
.btnMargin {
  margin-left: 20%;
}
.color {
  box-shadow: 0px 1px 4px 0px;
  border-radius: 10px;
}
.bg-color {
  background-color: rgb(250, 250, 250);
}
</style>
