<template>
  <v-carousel interval="2000" cycle height="500" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(show, idx) in topFive" :key="idx">
      <v-sheet color="black lighten-3" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <CarouselItem :imageSrc="show.image.original" :showName="show.name" :id="show.id" />
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import CarouselItem from "@/components/CarouselItem";
import { getTopFiveShows } from "../shared/utilities/getTopFiveShows";

export default {
  name: "HomepageCarousel",
  components: {
    CarouselItem
  },
  created() {},
  mounted() {
    if (this.dataAvailable) {
      this.bringTopFiveShows();
    }
  },
  data: () => {
    return {
      topFive: []
    };
  },
  computed: {
    dataAvailable() {
      return this.$store.getters.getDataAvailability;
    }
  },
  watch: {
    dataAvailable(newValue) {
      if (newValue) {
        this.bringTopFiveShows();
      }
    }
  },
  methods: {
    bringTopFiveShows() {
      this.topFive = getTopFiveShows(this.$store.getters.getShowList);
    }
  }
};
</script>