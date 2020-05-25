<template>
  <v-container v-if="Object.keys(detailedData).length != 0" class="black lighten-5" fluid>
    <v-row>
      <v-col cols="12">
        <v-card dark class="pa-2 text-center">
          <h2>{{detailedData.name}}</h2>
          <h4>{{detailedData.language}} | {{detailedData.type}}</h4>
          <h5>
            <span v-for="(gen, idx) in detailedData.genres" :key="idx">
              &nbsp;
              <span v-if="idx != 0">|</span>
              {{gen}}
            </span>
          </h5>
          <h5>Runtime : {{detailedData.runtime}} mins</h5>
          <h5 v-if="detailedData.rating.average">Rating : {{detailedData.rating.average}}/10</h5>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-card tile>
          <ImageComponent :imageUrlProp="detailedData.image" />
        </v-card>
      </v-col>
      <v-col class="pa-2" cols="12" md="4">
        <CharactersComponent :casts="detailedData._embedded.cast" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card dark class="pa-2">
          <h3 class="text-center">
            <u>Summary</u>
          </h3>
          <p class="pa-4" v-html="detailedData.summary"></p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getShowById } from "../services/tvShowService";
import ImageComponent from "../components/detailsComponents/ImageComponent";
import CharactersComponent from "../components/detailsComponents/CharactersComponent";
export default {
  name: "Details",
  data() {
    return {
      detailedData: {}
    };
  },
  components: {
    ImageComponent,
    CharactersComponent
  },
  mounted() {
    if (this.id) {
      this.fetchDetailedData();
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    fetchDetailedData() {
      getShowById(this.id).then(response => {
        this.detailedData = response;
      });
    }
  }
};
</script>