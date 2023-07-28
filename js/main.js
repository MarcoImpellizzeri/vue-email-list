'use strict'

Vue.createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosResp) => {
                    this.email = axiosResp.data.response
                    this.emails.push(this.email)
                })
        }
        console.log(this.emails);
    }
}).mount("#app")