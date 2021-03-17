<template>
    <div class="container">
        <div class="mt-5">
            <h1 class="display-3 text-center">Register</h1>
            <input 
                class="form-control"
                type="email" 
                name="email" 
                placeholder="email" 
                v-model="email" />
            <input         
                class="form-control mt-3"
                type="password" 
                name="password" 
                placeholder="password" 
                v-model="password" />
            <div 
                v-html="error"
                class="error">
            </div>
        </div>
        <button class="btn btn-primary mt-3" @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'

export default {
    name: 'Register',
    data () {
        return {
            email: 'test@test.com',
            password: 'password',
            error: null
        };
    },
    components: {
       
    },
    methods: {
        async register(){
            try {
             await AuthenticationService.register(
                {
            email: this.email,
            password: this.password,
        });
         } catch (error) {
             this.error = error.response.data.error
         }
        },
    },
};
</script>

<style scoped>
.error {
    color: red;
}
</style>