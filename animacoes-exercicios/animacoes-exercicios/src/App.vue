<template>
  <div id="app" class="container">
    <!--	<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ mgs }} </b-alert>
		</transition>
		<transition name="slide" appear>
			<b-alert variant="info" show v-show="exibir">{{ mgs }} </b-alert>
		</transition>
		<transition enter-active-class="animated animate__slideInLeft"
		leave-active-class="animated animate__zoomOut">
			<b-alert variant="info" show v-show="exibir">{{ mgs }} </b-alert>
		</transition>

		<hr>
		<b-select v-model="tipoAnimacao ">
			<option value="fade">fade</option>
			<option value="slide">slide</option>
		</b-select>
		<transition :name="tipoAnimacao" mode="out-in ">
			<b-alert variant="info" show v-if="exibir" key="info">{{ mgs }} </b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ mgs }} </b-alert>
		</transition>
		

		<hr>


		<button @click="exibir2 = !exibir2"> Mostrar</button>
		<transition
		:css="false"
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@enter-cancelled="enterCancelled"
		
		@before-leave="beforeLeave"
		@leave="leave"
		@after-leave="afterLeave"
		@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<b-button variant="primary" @click="componenteSelecionado = 'Alertainfo'"> info</b-button>
		<b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'"> Advertência </b-button>
		<component :is="componenteSelecionado"></component>
		-->

    <hr />
    <b-button @click="adicionaAluno">add</b-button>
    <transition-group name="slide">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(i)">
          {{ aluno }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";

export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      alunos: ["roberta", "ana", "luz", "sarah"],
      mgs: "uma mensagem de informação para o usuario",
      exibir: false,
      exibir2: false,
      tipoAnimacao: "fade",
      larguraBase: 0,
      componenteSelecionado: "AlertaInfo",
    };
  },
  methods: {
    adicionaAluno() {
      const s = Math.random().toString(36).substring(2);
      this.alunos.push(s);
    },

    removerAluno(i) {
      this.alunos.splice(i, 1);
    },

    enter(el, done) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + rodada * 10;
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    afterEnter(el) {},
    enterCancelled() {},
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase - rodada * 10;
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    afterLeave(el) {},
    leaveCancelled() {},
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 2s;
}
.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translatey(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
	transition: opacity 2s;
  animation: slide-in 2s ease;
}

.slide-leave-active {
	position: absolute;
	transition: opacity 2s;
	width: 100%;
  animation: slide-out 2s ease;
}
.slide-move{
	transition: transform 1s;
}
</style>
