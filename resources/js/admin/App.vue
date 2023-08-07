<template>
	<nav class="navbar navbar-expand-lg bg-light" v-if="store?.token">
		<div class="container-fluid">
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<span class="nav-link active text-secondary" v-if="$route.name == 'notices.list'">Уведомления</span>
						<router-link class="nav-link" v-else :to="{name: 'notices.list' }">Уведомления</router-link>
					</li>
					<li class="nav-item">
						<span class="nav-link active text-secondary" v-if="$route.name && $route.name.indexOf('menu.') > -1">Страницы</span>
						<router-link class="nav-link" v-else :to="pageRoute">Страницы</router-link>
					</li>
					<li class="nav-item">
						<span class="nav-link active text-secondary" v-if="$route.name == 'contacts.list'">Контакты</span>
						<router-link class="nav-link" v-else :to="{name: 'contacts.list' }">Контакты</router-link>
					</li>
					<li class="nav-item">
						<span class="nav-link active text-secondary" v-if="$route.name == 'user.list' || $route.name == 'user.edit'">Пользователи</span>
						<router-link class="nav-link" v-else :to="{name: 'user.list' }">Пользователи</router-link>
					</li>
				</ul>
				<ul class="navbar-nav">
					<li class="nav-item me-3">
						<a href="/" target="_blank" class="btn btn-link">Сайт</a>
					</li>
					<li class="nav-item me-3">
						<a class="btn btn-outline-primary" @click="editCurrentUser">Пользователь</a>
					</li>
					<li class="nav-item">
						<button type="button" class="btn btn-outline-primary" @click="logOut">Выйти</button>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="container-fluid mt-4">
		<router-view></router-view>
	</div>

	<div class="toast-container position-fixed bottom-0 end-0 p-3" v-if="store.hasSuccesses() || store.hasErrors()">
		<error-alert v-for="(message, index) in store.getSuccesses()" :key="index" type="success" @close="closeSuccess(index)">{{ message }}</error-alert>
		<error-alert v-for="(message, index) in store.getErrors()" :key="index" @close="closeError(index)">{{ message }}</error-alert>
	</div>
</template>

<script>
	import { provide } from 'vue'
	import AuthForm from './components/AuthFormComponent.vue'
	import Alert from './components/HelpComponents/AlertComponent.vue'

	import { forgetToken } from './sdk'
	import { useStore } from './store'

	export default {
		setup() {
			const store = useStore();

			provide('store', store)

			return { store }
		},
		components: {
			AuthForm,
			'error-alert': Alert
		},
		methods: {
			logOut() {
				forgetToken(this.store.getToken());
				this.store.resetToken();
				this.$router.push({name:'login'});
			},
			closeError(index) {
				this.store.removeError(index);
			},
			closeSuccess(index) {
				this.store.removeSuccess(index);
			},
			editCurrentUser() {
				this.$router.push({ name: 'user.edit', params: { user: this.store.getUser().id } });
			}
		},
		computed: {
			pageRoute() {
				const page =  this.store.getPage();

				if(page) {
					return {name: 'menu.edit', params: { menuItem: page.id }}
				}

				return {name: 'menu.create'}
			}
		},
		watch: {
			$route: {
				immediate: true,
				handler(to, from) {
					document.title = to.meta.title || 'Админцентр';
				}
			},
		},
		mounted() {
			if(this.store.getToken() && this.$route.name == 'login') {
				this.$router.push({ name: 'notices.list' });
			}

			if(this.store.getToken()) {
				this.store.reloadPages();
				this.store.loadBlockTypes();
				this.store.loadUser();
			}
		}
	}
</script>

<style lang="scss" scoped>

	.dropdown:hover > .dropdown-menu {
		display: block;
	}

</style>
