<template>
<v-app>
<div>
  <div :style="image" class="image">
    <div class="middle">
    <br>
      <v-card class="transparente">
        <h3>🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻</h3>
        <h3>🍻----------------------------------------------------------🍻</h3>
        <h3>🍻 Docente: Ana Karina Caldeira Caraban-------------🍻</h3>
        <h3>🍻----------------------------------------------------------🍻</h3>
        <h3>🍻 --------- Projeto Elaborado Por: ---------------------🍻</h3>
        <h3>🍻 Henrique Sousa Mota nº 2050520 -----------------🍻</h3>
        <h3>🍻 Tomás Tranquada Gomes Brazão nº 2050820 ----🍻</h3>
        <h3>🍻----------------------------------------------------------🍻</h3>
        <h3>🍻----------------------------------------------------------🍻</h3>
        <h3>🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻🍻</h3>
      </v-card>
    <br>
  </div>
  </div>
  </div>
  </v-app>
</template>

<style scoped>
  .transparente{
        background-color: transparent!important;
        border-color: transparent!important;
        height: 0%;
  }
</style>

<script>
import firebase from "firebase";
    export default {
        data() {
            return {
                image: {backgroundImage: "url('https://i.pinimg.com/originals/12/23/99/122399ae99e3350302245e9ebb1c78bd.jpg')"},
                email: '',
                password: '',
                // imagecard: {backgroundImage: "url('https://wallpapercave.com/wp/wp2685294.jpg')"},

            };
        },

        methods: {
            login(){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then((userCredential) => {
                        // Signed in
                        var user = userCredential.user;
                         console.log(user);
                         this.$router.push('/Produto');
                        // ...
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode +errorMessage );
                    });
            }
        }
    };
</script>