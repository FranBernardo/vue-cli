<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Meu nome é {{nome }} </p>
        <p>Idade: <strong> {{ idade }} </strong> </p>
        <p>Esse é um componente muito legal!</p>

        <button @click="alterarNome"> Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info v-bind:nome="nome" 
            :idade="idade"
            @nomeMudou="nome = $event" :reiniciarFN="reiniciarNome" /> <!--OU PODE COLOCAR :NOME="NOME" QUE FUNCIONA DO MESMO JEITO-->
            <app-usuario-editar :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data (){
        return{
            nome: 'Pedro',
            idade: 21
        }

    },
    methods: {
        alterarNome(){
            this.nome = 'ana'
    },
    reiniciarNome(){
        this.nome = 'Pedro'
    }
} }
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
