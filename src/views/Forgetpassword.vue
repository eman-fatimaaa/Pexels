<template >
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
        ><router-link class="white--text mr-5 text" to="/Updateprofile">
          Update profile</router-link
        >
      </v-btn>
    </v-app-bar>
    <v-container class="margin mt-16">
      <v-row>
        <v-col cols="8">
          <v-card>
            <v-container>
              <h1 class="text-center">Reset Password</h1>
              <v-container class="ml-8">
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      prepend-inner-icon="mdi-email"
                      solo
                      :rules="emailRules"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="7">
                    <v-btn
                      height="40"
                      class="text-center btnMargin"
                      block
                      color="rgb(0,165,129)"
                      >Submit</v-btn
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
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { emailRules } from "@/constants/Constants.js";
export default {
  name: "App",

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
      emailRules: emailRules,
    };
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
</style>