<template>
<v-app>
<div :style="image" class="image">
    <div class="middle">
    <v-container class="altura" >
        <v-card class="transparente">
            <v-card-title primary-title>
            <h4 class="centro branco">Register</h4>
            </v-card-title>
            <v-form>
            <v-text-field style="padding-left:10px" dark name="Username" label="Username"></v-text-field>
            <v-text-field style="padding-left:10px" dark name="Password" v-model="password" label="Password" type="password"></v-text-field>
            <v-text-field style="padding-left:10px" dark name="Email" label="Email" v-model="email" type="email"></v-text-field>
            <v-text-field style="padding-left:10px" dark name="Mobile" label="Mobile" type="Mobile"></v-text-field>

            <v-card-actions>
            <v-btn class="transparente" dark large block @click="login()">Register</v-btn>
            </v-card-actions>

            <v-card-actions>
                <v-btn class="transparente" dark large block to="/Login">Login
                </v-btn>
            </v-card-actions>

            </v-form>
        </v-card>
    </v-container>
    </div>
</div>
</v-app>
</template>

<script>

import firebase from "firebase";

 export default {
        data() {
            return {
               image: {backgroundImage: "url('https://cdn.hipwallpaper.com/i/36/18/i9B2Ky.jpg'"},
                email: '',
                password: '',
                // image2: {backgroundImage: "url('https://cdn.hipwallpaper.com/i/36/18/i9B2Ky.jpg'"},
               

            };
        },
        
        methods: {
            login(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then((userCredential) => {
                        // Signed in 
                        var user = userCredential.user;
                        console.log(user);
                        // ...
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode +errorMessage );
                        // ..
                    });
            }

        }
    };



</script>

<style>
    .transparente{
        background-color: transparent!important;
        border-color: transparent!important;
    }
    .branco{
     color: white;
    }

    .middle{
        display: flex;
        justify-content: center;
        height: 100%;
        padding-top: 50px;
    }

    .centro{
        justify-content: center;
        padding-left: 190px;
    }

    .altura{
        width: 500px;
        padding-left:10px;
    }

    .image {
        height: 1200px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
</style>
