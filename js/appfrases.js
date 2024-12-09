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
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listafrases.unshift(nuevaFrase);
        },

        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listafrases.push(nuevaFrase);
        },

        eventoKeyPress({ charCode, cancelable, key, keyCode, target }) {
            if (key === 'Enter') {
                console.log('Evento');
                //console.log(event);
                console.log(key);
                console.log(charCode);
                console.log(keyCode);
                console.log(cancelable);
                console.log(target.baseURI);
                this.agregarFraseFinal();
            }
        },

        eventoKeyPressModificador() {
            console.log('Evento');
            //console.log(event);
            this.agregarFraseFinal();

        }

    },
    data() {
        return {
            listafrases: frases,
            frase: null,
            //autor: 'Sin autor'
            autor: null
        }
    }
})

app.mount('#myApp')