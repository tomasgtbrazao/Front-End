<template>
  <v-app>
    <div class="backs2">
      <v-container class="backs2">
        <div>
          <div class="input-control">
            <label>Produto</label>
            <input type="text" v-model="novoProduto.nomeBeer" />
          </div>
          <div class="input-control">
            <label>Imagem</label>
            <input type="url" v-model="novoProduto.image" />
          </div>

          <button type="submit" class="button" @click="submeterFormulario()">
            Enviar
          </button>
        </div>

        <div v-if="alerta == true">
          <v-alert dense border="left" type="warning">
            I'm a dense alert with the <strong>border</strong> prop and a
            <strong>type</strong> of warning
          </v-alert>
        </div>

        <!-- <div class="container-fluid">
     <v-row v-for="(item, id) in info" :key="id">
     <div class="coluna">
       <div class="grid">
          <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img
                height="700"
                :src="item.image"
              ></v-img>
              <v-card-title>{{item.nomeBeer}}</v-card-title>
              <v-divider class="mx-4"></v-divider>
          </v-card>
          </div>
      </div>
      </v-row>
        <br>
  </div> -->
      </v-container>

      <!--
     <div v-for="(item, index) in info" :key="index" >
    <div v-if="index <= 7"> 
      <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            <b>BEER</b>
          </div>
          <v-list-item-title class="headline mb-1">
            {{item.name}}
          </v-list-item-title>
          <v-list-item-subtitle>{{item.state}} - {{item.brewery_type}}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
        </v-card>
  </div> -->

      <v-row>
        <v-col
          v-for="(item, id) in info"
          :key="id"
          class="d-flex child-flex"
          cols="3"
        >
          <!--  <p>{{item.nomegenero}} </p> -->
          <v-img :src="item.image" aspect-ratio="1" class="grey lighten-2">
            <p style="background-color: white;">{{ item.nomebeer }}</p>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: "", //info.length
      novoProduto: {
        nomeBeer: "",
        image: "",
      },
      alerta: false,
    };
  },
  mounted() {
    axios
      .get("https://api-brewery-default-rtdb.firebaseio.com/.json")
      .then((response) => (this.info = response.data.beer));
  },
  methods: {
    submeterFormulario() {
      console.log("entrou");
      if (this.novoProduto.nomeBeer == "" || this.novoProduto.image == "") {
        //alert('campo vazio');
        this.alerta = true;
      } else {
        this.alerta = false;
        return axios.post(
          "https://api-brewery-default-rtdb.firebaseio.com/beer.json",
          this.novoProduto
        );
      }

      //   axios
      //     .get("https://api.openbrewerydb.org/breweries/search?query=" + pesquisa)
      //     .then(response => (this.info = response.data));
    },
  },
};
</script>

<style scoped>
.grid {
  max-width: 388px;
  box-sizing: border-box;
  margin: 30px;
  margin-top: 60px;
  padding: 30px;
  text-align: justify;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.coluna {
  display: flex;
}
.row {
  margin-top: 0px;
}

.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
  color: #000000;
}

.input-control input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}

.input-control input:focus {
  background-color: #eee;
  outline: none;
}

.form {
  max-width: 550px;
  box-sizing: border-box;
  margin: 30px;
  margin-top: 60px;
  padding: 30px;
  text-align: justify;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
}

.button {
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #000000;
  background-color: white;
  color: #000000;
  text-decoration: none;
  padding: 10px 30px;
}

.button:hover,
.buuton:active {
  color: #fff;
  background-color: #000000;
}
</style>
