<template>
  <div class="container">
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      class="dropZone"
      :options="dropzoneOptions"
      @vdropzone-complete="afterUploadComplete"
      v-on:vdropzone-sending="sendingEvent"
    ></vue-dropzone>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  methods: {
    sendingEvent(file, xhr, formData) {
      formData.append("paramName", "some value or other");
    },
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
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 3,
        dictDefaultMessage:
          "<v-icon  prepend-inner-icon='mdi-camera'></v-icon>UPLOAD ME",
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
};
</script>
<style scoped>
.dropZone {
  border: 1px dashed blue;
}
</style>
