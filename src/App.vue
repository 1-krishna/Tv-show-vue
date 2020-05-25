<template>
  <v-app>
    <Header />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { getAllShows } from "./services/tvShowService";
import Header from "@/components/Header";

export default {
  name: "App",

  components: {
    Header
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getAllShows().then(response => {
        this.$store.dispatch("changeshowList", response);
        this.$store.dispatch("changeDataAvailability", true);
      });
    }
  },
  data: () => ({
    //
  })
};
</script>
