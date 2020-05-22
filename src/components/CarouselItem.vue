<template>
  <v-img @click="details(id)" class="white--text align-end hover" height="500" :src="imageSrc">
    <div class="display-2 font-italic font-weight-medium ml-12 ma-6">{{showName}}</div>
  </v-img>
</template>

<script>
export default {
  name: "CarouselItem",
  data: () => {
    return {};
  },
  props: {
    imageSrc: String,
    showName: String,
    id: Number
  },
  methods: {
    details(id) {
      this.$router.replace({ name: "Details", params: { id: id } });
    }
  }
};
</script>

