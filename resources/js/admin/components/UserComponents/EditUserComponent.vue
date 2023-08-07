<template>
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><router-link :to="{ name: 'user.list' }">Пользователи</router-link></li>
			<li class="breadcrumb-item active" aria-current="page"></li>
		</ol>
	</nav>

  	<h1>Редактирование пользователя «{{ name }}»</h1>

  	<div class="mt-4 mb-3">
		<label class="form-label">Адрес электронной почты</label>
		<input type="email" class="form-control" placeholder="name@example.com" v-model="email" :disabled="disabled">
		<div class="form-text">На указанный адрес будут приходить письма с уведомлениями</div>
	</div>

  	<div class="mb-3">
		<label class="form-label">Новый пароль</label>
		<input type="password" class="form-control" @input="checkPassword()" v-model="password" :disabled="disabled">
	</div>

  	<div class="mb-3">
		<label class="form-label">Повторите пароль</label>
		<input type="password" class="form-control" :class="{ 'is-invalid': !checkPassword() }" @input="checkPassword()" v-model="confirmPassword" :disabled="disabled">
		<div class="invalid-feedback" style="display: block;" v-if="!checkPassword()">Пароли не совпадают</div>
	</div>

	<spinner-button
		class="btn-primary mt-2 mb-4"
		@click="update()"
		:showSpinner="disabled"
	>Сохранить</spinner-button>
</template>

<script>
	import SpinnerButton from '../HelpComponents/SpinnerButtonComponent.vue'

	import { userShow, userUpdate } from '../../sdk'

	export default {
		components: {
			SpinnerButton,
		},
		data() {
			return {
				id: 0,
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
				disabled: false
			}
		},
		methods: {
			checkPassword() {
				return this.password == this.confirmPassword;
			},
			loadUser() {
				const userId = this.$route.params?.user;

				if(userId) {
					userShow(userId).then(response => {
						this.id = response.data.user.id;
						this.email = response.data.user.email;
						this.name = response.data.user.name;
					});
				}
			},
			update() {
				if(this.checkPassword()) {
					this.disabled = true;
					const data = {
						name: this.name,
						email: this.email,
						password: this.password,
						confirmPassword: this.confirmPassword,
					};

					userUpdate(this.id, data).then(response => {
						this.name = response.data.user.name;
						this.email = response.data.user.email;
						this.password = '';
						this.confirmPassword = '';
						this.disabled = false;
					});
				} else {
					this.$root.store.addError('Пароли не совпадают');
				}
			}
		},
		beforeMount() {
			this.loadUser();
		},
		watch: {
			$route: {
				immediate: true,
				handler(to, from) {
					if(to.params.id) {
						this.loadUser();
					}
				}
			},
		}
	}
</script>
