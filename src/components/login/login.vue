<template>
    <div class="container">
            <p>Login</p>
        <div class="input-group">
            <label for="user-id">ID</label>
            <input v-moel="userID" type="text" class="user-id">
        </div>
        <div class="input-group">
            <label for="user-pw">PW</label>
            <input v-model="userPW" type="password" calss="user-pw">
        </div>
        <div class="btn-group">
            <router-link to="/weather" class="btn-login">Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Login',
    data(){
        return {
            userID: '',
            userPW: '',
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
