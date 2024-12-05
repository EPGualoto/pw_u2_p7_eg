const frases = [{ frase: 'Al que madruga Dios le ayuda', autor: 'Pepito Perez' },
{ frase: 'Dar gato por liebre', autor: 'Gabriel Tigrero' },
{ frase: 'Al mal tiempo, buena cara', autor: 'Juan Teran' },
{ frase: 'A buenas horas, mangas verdes', autor: 'Carlos Perez' },
{ frase: 'Del plato a la boca se cae la sopa', autor: 'Daniel Cevallos' },
{ frase: 'De tal palo, tal astilla', autor: 'Andrea Perez' },
{ frase: 'Quien no te conozca que te compre', autor: 'Julian Sevilla' }
]

const app = Vue.createApp({
    methods: {

    },
    data() {
        return {
            listafrases: frases

        }
    }
})

app.mount('#myApp')