<template>
<v-app class="white">
<div>
  <v-container>
    <div class="colfav">
    
    <div>
      <h1 style="color:black;">Breweries</h1>
      <input class="search" type="text" v-model="pesquisa" v-on:keyup.enter="procura(pesquisa)" required>
          <v-btn style="color:black;" icon @click="procura(pesquisa)"><v-icon>mdi-card-search</v-icon></v-btn>
    </div>

    <div v-for="(item, index) in info" :key="index">
      <div class v-if="index <= 7"> 
        <v-card class="mx-auto" max-width="344"   margin-right="200" outlined>
          <v-list-item three-line class="backs2">
            <v-list-item-content class="backs2">
              <div style="color:black;" class="overline mb-4">
                <b>BEER</b>
              </div>
              <v-list-item-title style="color:black;" class="headline mb-1">
                {{item.name}}
              </v-list-item-title>
              <v-list-item-subtitle style="color:black;">{{item.state}} - {{item.brewery_type}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div>
            <v-card-actions class="backs2">
              <v-btn style="color:black;" text @click="favorito(item)">
                    Guardar como Favorito <v-icon> mdi-heart-plus</v-icon>
                      </v-btn>
                      </v-card-actions>
        </div>
        </v-card>
      </div>
    </div>


<div>
                    <strong style="color:black;">
                        Favoritos:
                    </strong>
                    <div style="color:black;" v-for="(item, index) in favoritos" :key="index">
                      {{item.name}} <v-icon style="color:black;" x-small @click="removeFav(index)">mdi-heart-remove-outline</v-icon>
                    </div>
                </div>
 </div>
  </v-container>

</div>

</v-app>
</template>

<style scoped>
.meio{
  margin-left: 775px;
}
.row{
  display:flex;
}
.produto{
  flex:80%
}
.favorito{
  flex:20%
}
.search[type=text]{
  border: 2px solid black;
  border-radius: 4px;
  background-color:white;
}

.image {
  height: 1500px;
  background-repeat: no-repeat;
  background-size: cover;
    }

.middle{
  justify-content: center;
}
</style>

 
<script>
import axios from "axios";
 
export default {
  //props: ["id"],
  data() {
    return {
      info: null,
      // image: {backgroundImage: "url('https://wallpaperaccess.com/full/3605692.jpg')"},
      email: '',
      password: '',
      pesquisado: [],
      conta: 0,
      favoritos: [],
      snackbar: false,
    };
  },
  mounted() {
    axios
      .get("https://api.openbrewerydb.org/breweries")
      .then(response => (this.info = response.data));
  }, 
 
  methods: {
    procura(pesquisa) {
      /*axios
        .get("https://api.openbrewerydb.org/breweries/search" + pesquisa + "/index.js")
        .then(response => (this.listaartista = response.data.artist.genre));
      this.url = "https://api.openbrewerydb.org/breweries/search" + pesquisa;
      this.url_imagem = this.url + "/images/" + pesquisa + ".jpg";*/

      axios
        .get("https://api.openbrewerydb.org/breweries/search?query=" + pesquisa)
        .then(response => (this.info = response.data));


    },

   favorito(item){
        if (this.favoritos.indexOf(item) === -1 ){
            this.favoritos.push(item);
        } else {
            this.snackbar = true;
        }

 
      console.log(this.favoritos);
    },
    removeFav(item){
        this.favoritos.splice (item,1);
    }
      
    },
    reset() { 
      this.name = "";
    
     this.carregaPesquisa();
      }
  }
</script>

<style>
.colfav{
  flex:20%
}
</style>