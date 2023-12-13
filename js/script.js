// Attraverso l’apposita API di Boolean
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


const { createApp } = Vue;

createApp({
    data() {
        return {

            emails: [],
        }
    },
    methods: {


    },
    mounted() {
        console.log("L'applicazione è caricata!");

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {

                console.log(response.data.response);
                // andiamo a inserire le email nel nostro oggetto
                this.emails.push(response.data.response);

            });
        };
       

    }


}).mount('#app')