<template>
	<div class="mb-4" :class="{'card': !isSimple}">
		<div class="card-header card-header-pointer" v-if="!isSimple" @click="isOpened = !isOpened">{{ contact.name }}</div>
		<div :class="{'card-body': !isSimple}" v-show="isOpened">

			<div class="mb-3" v-if="!isSimple" >
				<label class="form-label">Название отдела</label>
				<input type="text" class="form-control" required v-model="contact.name" :disabled="isDisabledForm">
			</div>

			<div class="mb-4" v-if="!isSimple">
				<label class="form-label">Описание</label>
				<textarea class="form-control" rows="3" v-model="contact.description" :disabled="isDisabledForm"></textarea>
			</div>

			<div class="card mb-3" v-if="configFields?.phones?.main">
				<div class="card-header">Телефоны</div>
				<div class="card-body">
					<button type="button" class="btn btn-primary btn-sm" @click="addPhone()" :disabled="isDisabledForm">Добавить</button>

					<draggable v-model="phones" item-key="phoneIndex" class="accordion mt-3">
						<template #item="{ element: phone, index: phoneIndex }">
							<div class="accordion-item">
								<h2 class="accordion-header">
									<button
										type="button"
										class="accordion-button"
										:class="{'collapsed': activePhone != phoneIndex }"
										@click.prevent="tooglePhone(phoneIndex)"
									>{{ phone.phone }}</button>
								</h2>
								<div class="accordion-collapse collapse" :class="{'show': activePhone == phoneIndex}" aria-labelledby="headingOne">
									<div class="accordion-body">
										<div class="mb-3">
											<label class="form-label">Телефон</label>
											<input type="text" class="form-control" v-model="phone.phone" :disabled="isDisabledForm">
										</div>
										<div class="mb-3" v-if="configFields.phones.fields.name">
											<label class="col-form-label">Название</label>
											<input type="text" class="form-control" v-model="phone.name" :disabled="isDisabledForm">
										</div>
										<div class="mb-3" v-if="configFields.phones.fields.description">
											<label class="col-form-label">Описание</label>
											<textarea class="form-control" rows="3" v-model="phone.description" :disabled="isDisabledForm"></textarea>
										</div>

										<button class="btn btn-outline-danger" @click="removePhone(phoneIndex)" :disabled="isDisabledForm">Удалить телефон</button>
									</div>
								</div>
							</div>
						</template>
					</draggable>
				</div>
			</div>

			<div class="card mb-3" v-if="configFields?.emails?.main">
				<div class="card-header">Электронные адреса</div>
				<div class="card-body">
					<button type="button" class="btn btn-primary btn-sm" @click="addEmail()" :disabled="isDisabledForm">Добавить</button>

					<draggable v-model="contact.emails" item-key="phoneIndex" class="accordion mt-3">
						<template #item="{ element: email, index: emailIndex }">
							<div class="accordion-item">
								<h2 class="accordion-header">
									<button
										type="button"
										class="accordion-button"
										:class="{'collapsed': activeEmail != emailIndex }"
										@click.prevent="toogleEmail(emailIndex)"
									>{{ email.email }}</button>
								</h2>
								<div class="accordion-collapse collapse" :class="{'show': activeEmail == emailIndex}" aria-labelledby="headingOne">
									<div class="accordion-body">
										<div class="mb-3">
											<label class="col-form-label">Электронный адрес</label>
											<input type="text" class="form-control" v-model="email.email" :disabled="isDisabledForm">
										</div>
										<div class="mb-3" v-if="configFields.emails.fields.name">
											<label class="col-form-label">Название</label>
											<input type="text" class="form-control" v-model="email.name" :disabled="isDisabledForm">
										</div>
										<div class="mb-3" v-if="configFields.emails.fields.description">
											<label class="col-form-label">Описание</label>
											<textarea class="form-control" rows="3" v-model="email.description" :disabled="isDisabledForm"></textarea>
										</div>

										<button type="button" class="btn btn-outline-danger" @click="removeEmail(emailIndex)" :disabled="isDisabledForm">Удалить почту</button>
									</div>
								</div>
							</div>
						</template>
					</draggable>
				</div>
			</div>

			<div class="card mb-3" v-if="configFields?.address">
				<div class="card-header">Адрес</div>
				<div class="card-body">
					<textarea class="form-control" rows="3" v-model="contact.address" :disabled="isDisabledForm"></textarea>
				</div>
			</div>

			<div class="card mb-3" v-if="configFields?.map_code">
				<div class="card-header">Код карты</div>
				<div class="card-body">
					<textarea class="form-control" rows="3" v-model="contact.map" :disabled="isDisabledForm"></textarea>
					<div class="form-text">Карту можно построить в <a href="https://yandex.ru/map-constructor/" target="_blank">конструкторе</a>. Не забудьте поставить галочку «Растянуть по ширине».</div>
				</div>
			</div>

			<div class="card mb-3" v-if="configFields?.coords">
				<div class="card-header">Координаты для сервисов Яндекса</div>
				<div class="card-body">
					<div class="row g-3">
						<div class="col-sm-2">
							<label class="form-label">Широта</label>
							<input type="number" step="0.000001" min="-90" max="90" class="form-control" v-model="contact.coordinates.latitude" :disabled="isDisabledForm">
						</div>
						<div class="col-sm-2">
							<label class="form-label">Долгота</label>
							<input type="number" step="0.000001" min="-180" max="180" class="form-control" v-model="contact.coordinates.longitude" :disabled="isDisabledForm">
						</div>
					</div>
				</div>
			</div>

			<div class="card mb-3" v-if="configFields?.schedule">
				<div class="card-header">Режим работы</div>
				<div class="card-body">
					<textarea class="form-control" rows="3" v-model="contact.schedule" :disabled="isDisabledForm"></textarea>
				</div>
			</div>

			<div class="card mb-3" v-if="configFields?.social_networks?.main">
				<div class="card-header">Соцсети</div>
				<div class="card-body">
					<button type="button" class="btn btn-primary btn-sm" @click="addSocialNetwork()" :disabled="isDisabledForm">Добавить</button>

					<draggable v-model="contact.socialNetworks" item-key="index">
						<template #item="{ element, index }">
							<div class="row g-3 mt-2">
								<div class="col-auto">
									<div class="img-fluid">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon" style="min-width: 18px; margin-top: 10px;" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
										</svg>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="row g-3">
										<div class="col-auto">
											<label class="col-form-label">Соцсеть</label>
										</div>
										<div class="col">
											<select class="form-select" v-model="element.type" :disabled="isDisabledForm">
												<option v-for="type in socialNetworkTypes" :key="type.type" :value="type.type">{{ type.name }}</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col">
									<div class="row g-3">
										<div class="col-auto">
											<label class="col-form-label">Адрес</label>
										</div>
										<div class="col">
											<input type="text" class="form-control" v-model="element.url" :disabled="isDisabledForm">
										</div>
									</div>
								</div>
								<div class="col" v-if="configFields.social_networks.fields.name">
									<div class="row g-3">
										<div class="col-auto">
											<label class="col-form-label">Название</label>
										</div>
										<div class="col">
											<textarea class="form-control" rows="3" v-model="element.name" :disabled="isDisabledForm"></textarea>
										</div>
									</div>
								</div>
								<div class="col-auto">
									<button type="button" class="btn btn-outline-danger w-100" @click="removeSocialNetwork(index)" :disabled="isDisabledForm">Удалить соцсеть</button>
								</div>
							</div>
						</template>
					</draggable>
				</div>
			</div>

			<div class="card mb-3" v-if="configFields?.description">
				<div class="card-header">Описание</div>
				<div class="card-body">
					<textarea class="form-control" rows="3" v-model="contact.description" :disabled="isDisabledForm"></textarea>
				</div>
			</div>
		</div>


		<div :class="{ 'card-footer': !isSimple, 'mt-4': isSimple}">
			<div v-if="contact?.id">
				<spinner-button
					class="btn-primary me-2"
					@click="update()"
					:showSpinner="spinners.update"
				>Сохранить</spinner-button>
				<spinner-button
					class="btn-danger"
					@click="remove()"
					:showSpinner="spinners.delete"
					v-if="ContactCount > 1 && !isSimple"
				>Удалить контакт</spinner-button>
			</div>
			<div v-else>
				<spinner-button
					class="btn-primary me-2"
					@click="store()"
					:showSpinner="spinners.store"
				>Создать</spinner-button>
				<spinner-button
					class="btn-danger"
					@click="remove(contactIndex)"
					v-if="ContactCount > 1"
				>Удалить контакт</spinner-button>
			</div>
		</div>
	</div>
</template>

<script>
	import SpinnerButton from '../HelpComponents/SpinnerButtonComponent.vue'
	import Draggable from 'vuedraggable'

	import { contactStore, contactUpdate, contactDelete } from '../../sdk'

	export default {
		props: {
			index: {
				type: Number
			},
			contact: {
				type: Object
			},
			socialNetworkTypes: {
				type: Array
			},
			ContactCount: {
				type: Number,
				default: 1
			},
			isSimple: {
				type: Boolean,
			},
			configFields: {
				type: Object,
			}
		},
		emits: [ 'store', 'update', 'delete' ],
		components: {
			SpinnerButton,
			Draggable
		},
		data() {
			return {
				isOpened: false,
				spinners: {
					store: false,
					update: false,
					delete: false
				},
				activePhone: 0,
				activeEmail: 0,
			}
		},
		methods: {
			addPhone() {
				if(!this.contact?.phones) {
					this.contact.phones = [];
				}
				this.contact.phones.push({
					name: '',
					phone: '',
				});
			},
			removePhone(phoneIndex) {
				this.contact.phones.splice(phoneIndex, 1);
			},
			addEmail() {
				if(!this.contact?.emails) {
					this.contact.emails = [];
				}
				this.contact.emails.push({
					name: '',
					phone: '',
				});
			},
			removeEmail(emailIndex) {
				this.contact.emails.splice(emailIndex, 1);
			},
			addSocialNetwork() {
				if(!this.contact?.socialNetworks) {
					this.contact.socialNetworks = [];
				}
				this.contact.socialNetworks.push({
					type: this.socialNetworkTypes[0].type,
					url: '',
				});
			},
			removeSocialNetwork(socialNetworkIndex) {
				this.contact.socialNetworks.splice(socialNetworkIndex, 1);
			},
			store() {
				this.spinners.store = true;
				contactStore(this.contact).then(() => {
					this.$emit('store');
					this.spinners.store = false;
				});
			},
			update() {
				this.spinners.update = true;
				contactUpdate(this.contact.id, this.contact).then(() => {
					this.$emit('update');

					this.spinners.update = false;
				});
			},
			remove() {
				this.spinners.delete = true;

				if(this.index && !this.contact?.id) {
					this.$emit('delete');
					this.spinners.delete = false;
				} else if (confirm('Вы действительно хотите удалить контакт «' + this.contact.name + '»?'))  {
					contactDelete(this.contact.id).then(() => {
						this.$emit('delete');

						this.spinners.delete = false;
					});
				} else {
					this.spinners.delete = false;
				}
			},
			tooglePhone(index) {
				if(this.activePhone == index) {
					this.activePhone = -1;
				} else {
					this.activePhone = index;
				}
			},
			toogleEmail(index) {
				if(this.activeEmail == index) {
					this.activeEmail = -1;
				} else {
					this.activeEmail = index;
				}
			},
		},
		computed: {
			isDisabledForm() {
				return this.spinners.store || this.spinners.update || this.spinners.delete;
			},
			phones() {
				return this?.contact?.phones || [];
			}
		},
		beforeMount() {
			this.isOpened = this.index === 0;
		}
	}
</script>

<style lang="scss" scoped>
	.accordion-button::before {
		content: '';
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' /%3e%3c/svg%3e ");
		flex-shrink: 0;
		width: 1.25rem;
		height: 1.25rem;
		background-repeat: no-repeat;
		background-size: 1.25rem;
		margin-right: .5rem;
	}

	.accordion-button:not(.collapsed)::before {
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%230c63e4' class='w-6 h-6'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' /%3e%3c/svg%3e ");
	}
</style>
