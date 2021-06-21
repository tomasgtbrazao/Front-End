<template>

  <v-app>
  <div>
    <v-app-bar color="yellow darken-2" dense>
       <!-- <v-app-bar-nav-icon style="color:black;" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-toolbar-title style="color:black;">
        Brewery
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
          <v-btn style="color:black;" icon primary large block to="/HelloWorld"><v-icon>mdi-shield-home</v-icon></v-btn>
      </v-btn>    
      <v-btn icon>
          <v-btn style="color:black;" icon primary large block to="/About"><v-icon>mdi-newspaper-variant-multiple-outline</v-icon></v-btn>
      </v-btn>
      <v-btn icon>
          <v-btn style="color:black;" icon primary large block to="/Produto"><v-icon>mdi-magnify</v-icon></v-btn>
      </v-btn>
      <v-btn icon>
        <v-btn style="color:black;" icon primary large block to="/Cervejas"><v-icon>mdi-glass-mug</v-icon></v-btn>
      </v-btn>
      <v-btn icon>
        <v-btn style="color:black;" icon primary large block to="/AdminPage"><v-icon>mdi-account-cog</v-icon></v-btn>
      </v-btn>
      <v-btn icon>
          <v-btn style="color:black;" icon primary large block to="/Login"><v-icon>mdi-account-check</v-icon></v-btn>
      </v-btn>

      <v-btn icon>
          <v-btn style="color:black;" icon primary large block to="/Register"><v-icon>mdi-account-plus</v-icon></v-btn>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>

<v-footer padless>
    <v-card class="flex" color="yellow darken-2">
      <v-card-title class="footer">
        <img width="8%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"><h5 style="color:black;">Vue</h5>
        <v-spacer></v-spacer>
        <img width="10%" src="https://cdn.hackernoon.com/hn-images/1*lAR9Uh_gJ7dp23e0vhy5Hg.png"><h5 style="color:black;">API</h5>
        <v-spacer></v-spacer>
        <img width="11%" src="https://cours.ebsi.umontreal.ca/sci6306/images/bootstrap-solid.png"><h5 style="color:black;">Bootstrap</h5>
        <v-spacer></v-spacer>
        <img width="5%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"><h5 style="color:black;">CSS</h5>
        <v-spacer></v-spacer>
        <img width="9%" src="https://pbs.twimg.com/media/Ei5n6vBWoAEy5gp.png"><h5 style="color:black;">Vuetify</h5>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
       <strong style="color:black;"> {{ new Date().getFullYear() }} - Projeto de Front-End - UMA</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
  </v-app>
</template>

<style>

 .row{
   display: flex;
   }
 
 .coluna_1{
   flex:50%;
   padding:20px;
  }
  .coluna_2{
   flex:50%;
   padding:20px;
  }
  .backs{
    display: flex;
    left: 41%;
    color: black;
    background-color: white;
  }
  .backs2{
    background-color: white;
  }
</style>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,

    
  }),
  

  watch: {
    group() {
      this.drawer = false;
    },
  },
};

</script>