<template>
	<div class="mb-3">
		<label class="form-label">Название</label>
		<input type="text" class="form-control" :class="{ 'is-invalid': errors?.name?.length }" v-model="data.name" @change="validate('name')">
		<div class="invalid-feedback" style="display: block;" v-for="(message, index) in errors?.name" :key="index">{{ message }}</div>
	</div>

	<div class="form-check mb-3">
		<input class="form-check-input" type="checkbox" id="is_published" v-model="data.is_published">
		<label class="form-check-label" for="is_published">Показывать на сайте</label>
	</div>

	<div class="form-check mb-3">
		<input class="form-check-input" type="checkbox" id="is_show_in_menu" @click="data.is_show_in_menu = !data.is_show_in_menu" :checked="data.is_published && data.is_show_in_menu" :disabled="!data.is_published">
		<label class="form-check-label" for="is_show_in_menu">Показывать в меню</label>
	</div>

	<div class="mb-3">
		<label class="form-label">Заголовок страницы</label>
		<input type="text" class="form-control" v-model="data.meta_title">
		<div class="form-text">Отображается во&nbsp;вкладке браузера как название страницы</div>
	</div>

	<div class="mb-3">
		<label class="form-label">Описание</label>
		<textarea class="form-control" rows="3" v-model="data.meta_description"></textarea>
		<div class="form-text">Анонс содержимого</div>
	</div>

	<div class="mb-3">
		<label class="form-label">Ключевые слова</label>
		<input type="text" class="form-control" v-model="data.meta_keywords">
	</div>

	<div class="mb-3">
		<label class="form-label">Псевдоним</label>
		<input type="text" class="form-control" v-model="data.slug">
		<div class="form-text">Служит адресом страницы</div>
	</div>

	<div class="mt-4 mb-4" v-if="id">
		<button type="button" class="btn btn-primary" @click="updateItem">Сохранить</button>
		<button type="button" class="btn btn-danger ms-2" @click="deleteItem">Удалить</button>
	</div>

	<div class="mt-4 mb-4" v-else>
		<button type="button" class="btn btn-primary" @click="storeItem">Создать</button>
	</div>
</template>

<script>
	import { menuItemsStore, menuItemsShow, menuItemsUpdate, menuItemsDelete } from '../../sdk'

	export default {
		emits: [ 'created', 'updated', 'deleted' ],
		props: {
			id: {
				type: Number
			},
			parentId: {
				type: Number
			}
		},
		data() {
			return {
				data: {
					name: '',
					slug: '',
					is_published: false,
					is_show_in_menu: true,
					meta_title: '',
					meta_description: '',
					meta_keywords: '',
				},
				errors: {
					name: []
				}
			}
		},
		methods: {
			storeItem() {
				if(this.validate('name')) {
					let data = this.data;

					if(this.parentId) {
						data.parentId = this.parentId;
					}

					this.data.is_show_in_menu = this.data.is_published && this.data.is_show_in_menu;

					menuItemsStore(data).then(response => {
						if(response.status.code >= 300) {
							this.$root.store.addError(response.status.message);
						}

						this.$root.store.reloadPages();
						this.$emit('created', response.data);
						this.$router.push({name: 'menu.edit', params: { menuItem: response.data.id }})
					});
				}
			},
			updateItem() {
				if(this.validate('name')) {
					let data = this.data;

					this.data.is_show_in_menu = this.data.is_published && this.data.is_show_in_menu;

					menuItemsUpdate(this.id, data).then(response => {
						if(response.status.code >= 300) {
							this.$root.store.addError(response.status.message);
						} else {
							this.$root.store.addSuccess('Данные обновлены');
						}

						this.$root.store.reloadPages();
						this.data = response.data;
						this.$emit('updated');
					});
				}
			},
			deleteItem() {
				if(confirm('Вы действительно хотите удалить страницу «' + this.data.name + '»')) {
					menuItemsDelete(this.id).then(response => {
						if(response.status.code >= 300) {
							this.$root.store.addError(response.status.message);
						}

						this.$root.store.reloadPages();
						this.$emit('deleted', response.data);
					});
				}
			},
			validate(field) {
				this.errors[field] = [];

				if(field == 'name' && this.data.name.length == 0) {
					this.errors.name.push("Поле «Название» не может быть пустым");

					return false;
				}

				return true;
			},
			async show() {
				if(this.id) {
					await menuItemsShow(this.id).then(response => {
						if(response.status.code >= 300) {
							this.$root.store.addError(response.status.message);
						}

						this.data.name = response.data.name;
						this.data.slug = response.data.slug ? response.data.slug : '' ;
						this.data.is_published = response.data.is_published;
						this.data.is_show_in_menu = response.data.is_show_in_menu;
						this.data.meta_title = response.data.meta_title;
						this.data.meta_description = response.data.meta_description;
						this.data.meta_keywords = response.data.meta_keywords;
					});
				}
			}
		},
		watch: {
			id() {
				this.show();
			}
		},
		beforeMount() {
			this.show();
		}
	}
</script>
