<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'usnado diretinha v-text'"> </p>
		<p v-destaque="'red'">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
