const app = Vue.createApp({
    methods: {
        guardarDatos() {
            const nuevoDato = {
                nombre: this.nombre,
                apellido: this.apellido,
                hobby: this.hobby,
                lugarNacimiento: this.lugarNacimiento
            }

            this.datos.push(nuevoDato);
            this.vacio();
        },

        vacio() {
            this.nombre = null;
            this.apellido = null;
            this.hobby = null;
            this.lugarNacimiento = null;
        }
    },
    data() {
        return {
            nombre: null,
            apellido: null,
            hobby: null,
            lugarNacimiento: null,
            datos: []
        }
    }
})

app.mount('#myApp');