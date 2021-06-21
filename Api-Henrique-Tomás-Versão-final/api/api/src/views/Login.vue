<template>  
<v-app>
<div :style="image" class="image">
    <div class="middle">

    <v-container class="altura">
                <v-card class="transparente">
                    <v-card-title primary-title>
                    <h4 class="centro branco">Login</h4>
                    </v-card-title>
                    <v-form>
                    <v-text-field style="padding-left:10px" dark name="Email" label="Email" v-model="email"></v-text-field>
                    <v-text-field style="padding-left:10px" dark name="Password" label="Password" type="password" v-model="password"></v-text-field>

                    <v-card-actions>
                    <v-btn dark large block @click="login()">Login</v-btn>
                    </v-card-actions>

                    <v-card-actions>
                    <v-btn dark large block to="/Register">Register
                    </v-btn>
                    </v-card-actions>

                    <v-card-actions>
                    <v-btn dark large block to="/Adminpage">Admin
                    </v-btn>
                    </v-card-actions>

                    </v-form>
                </v-card>
    </v-container>
    </div>
</div>
</v-app>
</template>

<style>

.v-btn{
        background-color: transparent!important;
        border-color: transparent!important;
}
  .transparente{
        background-color: transparent!important;
        border-color: transparent!important;
  }
.image-card {
  /* background-image: url(''); */
  /* background-repeat: no-repeat;
        background-size: cover; */
  background-color: #c9cfc9;
}

.middle {
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 50px;
}

.centro {
  text-align: center;
  /* padding-left: 190px; */
}

.altura {
  width: 500px;
}

.image {
  height: 900px;
  background-repeat: no-repeat;
  background-size: cover;
}

.name {
  color: white;
}

/* .background{
      background-image: url('https://wallpapercave.com/wp/wp2685294.jpg'); 
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100% 100%;
    } */
</style>




<script>
import firebase from "firebase";
    export default {
        data() {
            return {
                image: {backgroundImage: "url('https://miro.medium.com/max/12000/1*UM-kvM-EZxrbn0Hf9Ju49A.jpeg')"},
                email: '',
                password: '',
              // https://wallpaperaccess.com/full/4805019.jpg

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
