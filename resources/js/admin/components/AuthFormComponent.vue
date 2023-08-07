<template>
	<div class="v-align-center">
		<div class="alert alert-danger" role="alert" v-for="(message, index) in errors" :key="index">{{ message }}</div>
		<div class="card">
			<div class="card-header">Авторизация</div>

			<div class="card-body">
				<div class="mb-3">
					<label class="form-label">Логин</label>
					<input type="text" class="form-control" v-model="login" @keypress.enter="auth" autofocus>
				</div>
				<div class="mb-3">
					<label class="form-label">Пароль</label>
					<input type="password" class="form-control" v-model="password" @keypress.enter="auth">
				</div>
			</div>

			<div class="card-footer">
				<button type="button" class="btn btn-primary" @click="auth">Войти</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { getToken } from '../sdk'

	export default {
		data() {
			return {
				login: '',
				password: '',
				errors: [],
			}
		},
		methods: {
			auth() {
				if(this.login && this.password) {
					getToken(this.login, this.password)
						.then(response => {
							this.errors = [];

							this.$root.store.forgetErrors();

							if(response.status.code != 200 && response.data?.validError) {
								this.errors.push(response.data.validError);
								this.password = '';
							} else if (response.status.code != 200) {
								this.errors.push(response.status.message);
							} else {
								this.$root.store.setToken(response.data.token.plainTextToken);

								this.$root.store.reloadPages();
								this.$root.store.loadBlockTypes();
								this.$root.store.loadUser();

								this.$router.push({ name:'notices.list' })
							}
						});
				}
			}
		}
	}
</script>

<style scoped>
	.v-align-center {
		max-width: 500px;
		min-width: 500px;
		top: 50%;
		left: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	}
</style>
