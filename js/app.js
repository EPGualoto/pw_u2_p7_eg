console.log(Vue);

const app = Vue.createApp({
    /*template: `
    <h1>Hola Mundo</h1>
    <p>Con Vue.JS</p>
    <p>{{1+2}}</p>
    <p>{{[1,2,3,4,5,6,7]}}</p>
    <p>{{ {nombre: 'Erika', apellido:'Gualoto'} }}</p>
    <p>{{false? 'Activo':'Inactivo'}}</p>
    <p>1===1</p>
    <p>{{1===1}}</p>
    `*/
    //Options API
    methods: {
        cambiarMensaje(){
            this.mensaje = 'Nuevo Mensaje :v';
            this.edad = 20;

        }
    },
    data() {
        return {
            mensaje: 'Hola Mundo PWeb',
            edad:24
        }
    }
})

app.mount('#myApp')
