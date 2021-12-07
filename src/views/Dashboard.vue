<template>
  <div>
    <v-app-bar app color="black">
      <div class="d-flex align-center width">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="image"
          transition="scale-transition"
          width="150"
        />
        <v-text-field
          label=""
          placeholder="Search For Free Photos"
          rounded
          dense
          class="color border-radius pa-0 pt-0"
        ></v-text-field>
      </div>

      <v-spacer></v-spacer>
      <v-btn color="rgb(0,165,129)" @click="sheet = !sheet" class="white--text"
        ><v-icon class="white-text">mdi-cloud-upload</v-icon> Upload
      </v-btn>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <div class="container">
        <div class="d-flex align-left">
          <v-avatar size="150" color="rgb(0,165,129)" class="mr-6">
            <v-icon size="55" dark> mdi-account </v-icon>
          </v-avatar>

          <h3></h3>
        </div>

        <!--<div class="container">
          <vue-dropzone
            class="dropZone"
            ref="myVueDropzone"
            id="dropzone"
            :options="dropzoneOptions"
            @vdropzone-complete="afterUploadComplete"
          ></vue-dropzone>
        </div>-->
        <v-divider></v-divider>
      </div>
    </v-main>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="290px">
          <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="py-3">
            <Dropzone />
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
import Dropzone from "../components/Dropzone.vue";
//import vue2Dropzone from "vue2-dropzone";
//import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "App",
  components: {
    Dropzone,
    //vueDropzone: vue2Dropzone,
  },
  methods: {
    afterUploadComplete: async function (response) {
      if (response.status == "success") {
        console.log("upload successfull");
      } else {
        console.log("upload failed");
      }
    },
  },

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
      sheet: false,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 2,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
};
</script>
<style scoped>
.color {
  background-color: rgb(244, 244, 245);
}
.btnColor {
  background-color: black;
}
.border-radius {
  border-radius: 5px;
  color: pink !important;
  padding: 3px;
}
.width {
  width: 60%;
}
.bg {
  background-color: white;
  width: 1%;
}
.dropZone {
  border: 1px dashed blue;
}
</style>