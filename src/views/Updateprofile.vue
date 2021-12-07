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

    <v-container class="margin mt-7">
      <v-row>
        <v-col cols="8">
          <v-card>
            <v-container>
              <h1 class="text-center">Update Your Profile</h1>
              <v-container class="ml-8 mt-7">
                <v-row>
                  <v-col cols="12">
                    <v-avatar
                      size="80"
                      color="rgb(0,165,129)"
                      class="avatarMargin"
                    >
                      <v-icon size="55" dark> mdi-account </v-icon>
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="text"
                      solo
                      label="Name"
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="email"
                      solo
                      label="Email"
                      prepend-inner-icon="mdi-email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="password"
                      solo
                      label="Passowrd"
                      prepend-inner-icon="mdi-lock"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="number"
                      solo
                      label="Age"
                      prepend-inner-icon="mdi-counter"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-file-input
                      background-color="rgb(250,250,250)"
                      prepend-inner-icon="mdi-camera"
                      solo
                      label="Profile picture"
                    ></v-file-input>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="7">
                    <v-btn
                      height="40"
                      class="text-center btnMargin"
                      block
                      color="rgb(0,165,129)"
                      >Update</v-btn
                    ></v-col
                  >
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
export default {
  name: "App",

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
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
