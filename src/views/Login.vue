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
        <span class="mr-2">New to Pexels?</span>
        <v-icon>mdi-open-in-new</v-icon
        ><router-link class="white--text mr-5 text" to="/Signup">
          Sign up</router-link
        >
      </v-btn>
    </v-app-bar>
    <v-container class="mt-12"
      ><v-container class="mt-7">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-row>
          <v-col cols="6" md="8">
            <v-card class="color" elevation="10"
              ><v-container class="ml-11">
                <v-row>
                  <v-col cols="10">
                    <h2 class="mb-10 text-center">Welcome Back To Pexels</h2>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="email"
                      solo
                      :rules="emailRules"
                      label="Email"
                      prepend-inner-icon="mdi-email"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="password"
                      solo
                      label="Password"
                      :rules="passwordRules"
                      prepend-inner-icon="mdi-lock"
                    ></v-text-field
                  ></v-col>
                </v-row>

                <v-row>
                  <v-col cols="7">
                    <v-btn
                      height="40"
                      class="text-center ml-14"
                      block
                      color="rgb(0,165,129)"
                      >Log in</v-btn
                    ></v-col
                  >
                </v-row>
                <div class="container">
                  <p class="margin mt-3">
                    <router-link
                      class="black--text mr-5 text"
                      to="/Forgetpassword"
                    >
                      Forgot Password?</router-link
                    >
                  </p>
                  <p class="margin mt-3">
                    <router-link class="black--text mr-5 text" to="/Dashboard">
                      Dashboard</router-link
                    >
                  </p>
                </div></v-container
              >
            </v-card>
          </v-col>
          <v-col cols="6" md="4">
            <v-card outlined height="445 ">
              <v-img :src="imageLogo" height="445" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>
<script>
import { emailRules, passwordRules } from "@/constants/Constants.js";
export default {
  name: "App",

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
      imageLogo: require("@/assets/images/pexels.jpeg"),

      emailRules: emailRules,
      passwordRules: passwordRules,
    };
  },
};
</script>
<style scoped>
.margin {
  margin-left: 28%;
}
.color {
  box-shadow: 0px 1px 4px 0px;
  border-radius: 10px;
}
</style>
