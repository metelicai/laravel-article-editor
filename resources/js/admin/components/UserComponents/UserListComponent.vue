<template>
	<h1>Пользователи</h1>

	<div class="table-responsive" v-if="users.length">
		<table class="table table-striped table-hover">

			<thead>
				<tr>
					<th class="text-right" style="width: 1px;">№</th>
					<th style="width: 150px;">Логин</th>
					<th class="w1px">email</th>
					<th class="w1px"></th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="user in users" :key="user.id">

					<td class="text-right">{{ user.id }}</td>

					<td>{{ user.name }}</td>

					<td>{{ user.email }}</td>

					<td class="text-end">
						<button type="button" class="btn btn-sm btn-primary me-2" @click="userEdit(user)">Редактировать</button>
					</td>

				</tr>
			</tbody>

		</table>
	</div>
</template>

<script>
	import { userList } from '../../sdk'

	export default {
		data() {
			return {
				users: []
			}
		},
		methods: {
			userEdit(user) {
				this.$router.push({name: 'user.edit', params: { user: user.id } });
			}
		},
		beforeMount() {
			userList().then(response => {
				this.users = [];

				response.data.forEach(user => {
					this.users.push(user);
				});
			});
		}
	}
</script>
