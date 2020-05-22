<template>
  <v-app-bar app color="dark" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </router-link>

      <v-toolbar-title class="title">Show Mania</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-text-field @input="handleChange" v-model="searchQuery" class="mt-7" solo label="Search Show"></v-text-field>
    <v-btn id="search-button" :disabled="!searchQuery" @click="submitForm" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      searchQuery: null
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      if (!this.searchQuery) {
        return;
      }
      this.$store.dispatch("changeSearchQuery", this.searchQuery);
      if (this.$router.currentRoute.name !== "Search") {
        this.$router.push("../search");
      }
    },
    handleChange() {
      if (!this.searchQuery) {
        return;
      }
      this.$store.dispatch("changeSearchQuery", this.searchQuery);
      if (this.$router.currentRoute.name !== "Search") {
        this.$router.push("../search");
      }
    }
  }
};
</script>