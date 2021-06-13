<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/Home">Home</b-nav-item>
      <b-nav-item href="/About">About</b-nav-item>
      <b-nav-item href="/Profile">Profile</b-nav-item>
      <b-nav-item href="/Profiles">Profiles</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
    <router-view>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Profile">Profile</router-link> 
    </router-view>

  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>

  </div>
  
</template>


<script>
  export default {
    data() {
      return {
        perPage: 9,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Luís', last_name: 'Almeida' },
          { id: 2, first_name: 'João', last_name: 'Pinto' },
          { id: 3, first_name: 'Érica', last_name: 'Camacho' },
          { id: 4, first_name: 'Luís', last_name: 'Gomes' },
          { id: 5, first_name: 'Marcelo', last_name: 'Freitas' },
          { id: 6, first_name: 'Henrique', last_name: 'Mota' },
          { id: 7, first_name: 'Rúben', last_name: 'Nascimento' },
          { id: 8, first_name: 'Diogo', last_name: 'Perestrelo' },
          { id: 9, first_name: 'Tomás', last_name: 'Brazão' },
          { id: 10, first_name: 'Vitor', last_name: 'Rodrigues' },
          { id: 11, first_name: 'Maria', last_name: 'Leça' },
          { id: 12, first_name: 'Pedro', last_name: 'Reinolds' },
          { id: 13, first_name: 'Tiago', last_name: 'Ribeiro' },
          { id: 14, first_name: 'José', last_name: 'Santos' },
          { id: 15, first_name: 'Gonçalo', last_name: 'Chaves' },
          { id: 16, first_name: 'Afonso', last_name: 'Vieira' },
          { id: 17, first_name: 'João', last_name: 'Sardinha' },
          { id: 18, first_name: 'Diogo', last_name: 'Livramento' },
          { id: 19, first_name: 'Vitor', last_name: 'Quintal' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>