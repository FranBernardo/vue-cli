import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//aplicando filter global.
// aplicando/ 1- inverter é o nome da funçao.
Vue.filter('inverter', function (valor){
	//split('')= transforma em arry, reverse= o nome ja diz reverte e o join = junta tudo.
	return valor.split('').reverse().join('')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
