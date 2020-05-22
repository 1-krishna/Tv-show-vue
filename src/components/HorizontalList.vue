<template>
  <!-- <v-sheet dark tile color="black lighten-3" class="mx-auto" elevation="8"> -->
  <v-sheet dark tile color="dark" class="mx-auto mt-4">
    <!-- <v-slide-group v-model="model" class="pa-4" center-active show-arrows> -->
    <h1 align="center">{{genreName}}</h1>
    <v-slide-group class="pa-4" center-active show-arrows>
      <!-- <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }"> -->
      <v-slide-item v-for="(show, idx) in genre" :key="idx">
        <!-- <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>-->

        <ShowCard :show="show" class="ma-4" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import ShowCard from "./ShowCard";

export default {
  name: "HorizontalList",
  components: {
    ShowCard
  },
  props: {
    genre: Array,
    genreName: String
  },
  data: () => {
    return {};
  }
};
</script>