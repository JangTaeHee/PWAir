<template>
    <div class="container">
            <p>Login</p>
        <div class="input-group">
            <label for="user-id">ID</label>
            <input v-model="userID" type="text" class="user-id">
        </div>
        <div class="input-group">
            <label for="user-pw">PW</label>
            <input v-model="userPW" type="password" calss="user-pw">
        </div>
        <div class="btn-group">
            <button class="btn-login" @click="loginCheck">Login</button>
        </div>
    </div>
</template>

<script>
import Router from 'vue-router'
var router = new Router() ;

export default {
    name : 'Login',
    data(){
        return {
            userID: 'test@test.com ',
            userPW: '123456',
        }
    },
    methods: {
        loginCheck(){
            //event.preventDefault();

            firebase.auth().signInWithEmailAndPassword(this.userID, this.userPW).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            })
            .then((result) => {
                this.$router.push('/weather');
            });
        }
    }
}
</script>

<style>
    .btn-group{
        margin: 25px 0;
    }
    .btn-login{
        padding: 5px 20px;
        border: solid 1px blue;
        color: blue;
    }
</style>
