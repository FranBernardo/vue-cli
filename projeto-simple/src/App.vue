<template>
<div id="app">
  
  {{ titulo }}
  <button @click="titulo += '#' ">Alterar</button>
  </div>
  

</template>

<script>
export default {
  data: function(){
    return{
      titulo: 'teste usando vue js'
    }
  }
}
</script>

<style>
    #app{
      color: red;
    }
</style>