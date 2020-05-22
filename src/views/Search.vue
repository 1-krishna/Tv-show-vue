<template>
  <v-card class="justify-space-around d-flex flex-wrap" tile dark>
    <ShowCard class="ma-4" v-for="(item, idx) in searchResult" :key="idx" :show="item.show" />
  </v-card>
</template>

<script>
import { getShowByName } from "../services/tvShowService";
import ShowCard from "../components/ShowCard";

export default {
  name: "Search",
  components: {
    ShowCard
  },
  data: () => {
    return {
      searchResult: []
    };
  },
  created() {},
  mounted() {
    if (this.searchQuery) {
      this.bringSearchResultFromStore();
    }
  },
  computed: {
    searchQuery() {
      return this.$store.getters.getSearchQuery;
    }
  },
  watch: {
    searchQuery() {
      this.setSearchData();
    }
  },
  methods: {
    setSearchData() {
      getShowByName(this.searchQuery).then(response => {
        this.searchResult = response;
        this.$store.dispatch("changeSearchResult", response);
      });
    },
    bringSearchResultFromStore() {
      this.searchResult = this.$store.getters.getSearchResult;
    }
  }
};
</script>
