<template>
  <v-img
    lazy-src="../../assets/logo.png"
    :src="imageUrl"
    class="white--text align-end"
    height="650px"
    width="100%"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <h2>No Image Available</h2>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    imageUrlProp: Object
  },
  computed: {
    imageUrl() {
      return this.imageUrlProp ? this.imageUrlProp.original : "";
    }
  }
};
</script>