<template>
	<h1>Контакты</h1>

	<contact-item
		v-for="(contact, contactIndex) in contacts"
		:key="contactIndex"
		:index="contactIndex"
		:contact="contact"
		:socialNetworkTypes="socialNetworkTypes"
		:ContactCount="contacts.length"
		@store="loadContactList"
		@update="loadContactList"
		@delete="deleteContact(contactIndex)"
		:isSimple="isSimple"
		:configFields="fields"
	></contact-item>

	<div class="d-grid gap-2 mt-4 mb-4" v-if="!isSimple">
		<button type="button" class="btn btn-primary btn-lg" @click="addContact">Добавить контакт</button>
	</div>
</template>

<script>
	import SpinnerButton from '../HelpComponents/SpinnerButtonComponent.vue'
	import ContactItem from '../ContactComponents/ContactItemComponent.vue'

	import { contactList, getConfig } from '../../sdk'

	export default {
		components: {
			'spinner-button': SpinnerButton,
			'contact-item': ContactItem,
		},
		data() {
			return {
				contacts: [],
				socialNetworkTypes: [],
				isSimple: true,
				fields: {}
			}
		},
		methods: {
			loadContactList() {
				contactList().then(response => {
					this.contacts = [];
					this.socialNetworkTypes = [];

					response.data.contacts.forEach(contact => {
						this.contacts.push(contact);
					});

					response.data.socialNetworks.forEach(contact => {
						this.socialNetworkTypes.push(contact);
					});
				});
			},
			addContact() {
				this.contacts.push({
					name: 'Новый отдел',
					description: '',
					phones: [],
					emails: [],
					address: '',
					map: '',
					schedule: '',
					coordinates: {
						latitude: '',
						longitude: ''
					},
					socialNetworks: []
				});
			},
			deleteContact(index) {
				if(typeof index == 'number') {
					this.contacts.splice(index, 1);
				} else {
					this.loadContactList();
				}
			}
		},
		beforeMount() {
			this.loadContactList();

			getConfig('contacts').then(response => {
				this.isSimple = response.data.simple;
				this.fields = response.data.fields;
			});
		}
	}
</script>

<style lang="scss" scoped>

	.card-header-pointer {
		cursor: pointer;
	}

</style>
