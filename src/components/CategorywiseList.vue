<template>
  <div>
    <HorizontalList
      v-for="(value, key, idx) in genreWiseData"
      :key="idx"
      :genre="value"
      :genreName="key"
    />
  </div>
</template>

<script>
import HorizontalList from "@/components/HorizontalList.vue";
import { getGenreWiseShows } from "../shared/utilities/getGenreWiseShows";

export default {
  name: "CategorywiseList",
  components: {
    HorizontalList
  },
  data: () => {
    return {
      genreWiseData: {}
    };
  },
  mounted() {
    if (this.dataAvailable) {
      this.bringGenreWiseShows();
    }
  },
  computed: {
    dataAvailable() {
      return this.$store.getters.getDataAvailability;
    }
  },
  watch: {
    dataAvailable(newValue) {
      console.log(newValue);
      if (newValue) {
        this.bringGenreWiseShows();
      }
    }
  },
  methods: {
    bringGenreWiseShows() {
      this.genreWiseData = getGenreWiseShows(this.$store.getters.getShowList);
      console.log(this.genreWiseData);
    }
  }
};
</script>