<template>
  <div class="dark-background">
    <HomepageCarousel />
    <CategorywiseList />
  </div>
</template>

<script>
// @ is an alias to /src
import HomepageCarousel from "@/components/HomepageCarousel.vue";
import CategorywiseList from "@/components/CategorywiseList";

export default {
  name: "Home",

  components: {
    CategorywiseList,
    HomepageCarousel
  }
};
</script>
<style scoped>
.dark-background {
  background-color: #1e1e1e;
}
</style>