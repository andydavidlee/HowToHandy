import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '@/components/Register.vue'

Vue.use(VueRouter)
export default new VueRouter({
    routes : [
        // {
        //     path: '/',
        //     name: 'Home',
        //     component: Home
        // },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
    
    ]
})