<template>
  <v-container>
    <br />

      <input type="text" v-model="pais">
      <button @click="carregaPesquisa(pais)">Pesquisa</button>


      <div v-for="(item, index) in info" :key="index">
       <ul>
         
        

             <v-img
              :height="item.previewHeight"
              :width="item.previewWidth"
              :src="item.previewURL"
            > 
            </v-img>
            <p> {{item.tags}} </p>
         <br>
       </ul>
      </div>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  //props: ["id"],
  data() {
    return {
      info: null,
      year: 2020,
      country: "PT",
      month: 12,
      day: 25,
      countries: [{ country: "Portugal", code: "PT" }],
    };
  },
  mounted() {
    axios
      .get(
        "https://pixabay.com/api/?key=21396064-2eac16d1bf0138a0d22abf7bc&q=yellow+flowers&image_type=photo"
      )
      .then(response => (this.info = response.data.hits));
  },

  methods: {
    carregaPesquisa(pais) {
      console.log("pais " + pais);
      axios
        .get(
          "https://holidays.abstractapi.com/v1/?api_key=cfb10a1a8f28483b8ce5140fbbf1900f&country=" +
            pais +
            "&year=" +
            this.year +
            ""
        )
        .then(response => (this.info = response.data));
    },
  },
};
</script>
