<template>

	<!--<div class="mt-3 mb-3 text-center">
		<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" @click="togglePreview(0)" :checked="currentStep == 0">
		<label class="btn btn-outline-primary me-2" for="option1" title="Широкий экран">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" style="min-width: 18px;" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
			</svg>
		</label>

		<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" @click="togglePreview(1)" :checked="currentStep == 1">
		<label class="btn btn-outline-primary me-2" for="option2" title="Лэптоп">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" style="min-width: 18px;" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
			</svg>
		</label>

		<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" @click="togglePreview(2)" :checked="currentStep == 2">
		<label class="btn btn-outline-primary me-2" for="option3" title="Планшет">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" style="min-width: 18px;" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
			</svg>
		</label>

		<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" @click="togglePreview(3)" :checked="currentStep == 3">
		<label class="btn btn-outline-primary" for="option4" title="Телефон">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" style="min-width: 18px;" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
			</svg>
		</label>
	</div>-->

	<div :class="{ 'preview-container': currentStep == 0, 'preview-container_steps': currentStep != 0 }" :style="currentStep ? 'max-width:' + previewSteps[currentStep] + 'px;' : ''">
		<draggable v-model="blocks" @end="endDraggable" item-key="id">
			<template #item="{ element }">
				<div class="position-relative preview-container" :class="{'opacity-50': !element.is_published }">
					<div class="iframe-container">
						<iframe
							:id="'iframe' + element.id"
							:src="element.preview_url"
							marginwidth="0"
							marginheight="0"
							scrolling="yes"
							width="100%"
							seamless
							ref="iframe"
						></iframe>
					</div>

					<div class="position-absolute top-0 end-0 me-2 mt-2">
						<button type="button" class="btn btn-primary btn-sm p-0" @click="editBlock(element)">
							<div class="img-fluid">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
									<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
								</svg>
							</div>
						</button>
						<button type="button" class="btn btn-light btn-sm p-0 ms-2">
							<div class="img-fluid">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>
							</div>
						</button>
					</div>
				</div>
			</template>
		</draggable>
	</div>

	<div class="d-grid gap-2 mt-4 mb-4">
		<button type="button" class="btn btn-primary btn-lg" @click="addBlock">Добавить блок</button>
	</div>

	<!-- Модалка создания -->
	<block-modal v-if="openedModal && isCreating">
		<template #header>
			<h5 class="modal-title" id="exampleModalLiveLabel">Создание блока</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.self="close"></button>
		</template>
		<template #body>
			<input type="hidden" name="menu_item_id" :value="$route.params.menuItem">
			<input type="hidden" name="is_published" value="0">
			<div class="mb-3">
				<label class="form-label">Тип блока</label>
				<select class="form-select" name="type" v-model="modal.type" @change="changeTypeCreateBlock" :disabled="disableCreatingModal">
					<option v-for="type in $root.store.getBlockTypes()" :key="type.type" :value="type.type">{{ type.name }}</option>
				</select>
			</div>

			<div class="form-check mb-3">
				<input class="form-check-input" type="checkbox" id="is_published" name="is_published" value="1" v-model="modal.is_published" :disabled="disableCreatingModal">
				<label class="form-check-label" for="is_published">Показывать на странице</label>
			</div>

			<component :is="importComponent" @update="updateModalContent" :disabled="disableCreatingModal"></component>
		</template>
		<template #footer>
			<spinner-button class="btn-primary" @click="store" :showSpinner="showSpinnerButtons.create">Создать</spinner-button>
		</template>
	</block-modal>


	<!-- Модалка редактирования -->
	<block-modal v-if="openedModal && !isCreating">
		<template #header>
			<h5 class="modal-title" id="exampleModalLiveLabel">Редактирование блока</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.self="close"></button>
		</template>
		<template #body>
			<input type="hidden" name="menu_item_id" :value="$route.params.menuItem">
			<input type="hidden" name="is_published" value="0">
			<div class="mb-3">
				<label class="form-label">Тип блока</label>
				<input type="text" readonly class="form-control-plaintext" :value="$root.store.getBlockTypeName(modal.type)">
			</div>

			<div class="form-check mb-3">
				<input class="form-check-input" type="checkbox" id="is_published" name="is_published" value="1" v-model="modal.is_published" :disabled="disableUpdatingModal">
				<label class="form-check-label" for="is_published">Показывать на странице</label>
			</div>

			<component :is="importComponent" @update="updateModalContent" @refreshPreview="updateBlocks" :data="modal" :disabled="disableUpdatingModal"></component>
		</template>
		<template #footer>
			<spinner-button
				class="btn-danger"
				@click="remove"
				:showSpinner="showSpinnerButtons.delete"
				:disabled="disableUpdatingModal"
			>Удалить</spinner-button>
			<spinner-button
				class="btn-primary"
				@click="update"
				:showSpinner="showSpinnerButtons.update"
				:disabled="disableUpdatingModal"
			>Сохранить</spinner-button>
		</template>
	</block-modal>

</template>

<script>
	import { defineAsyncComponent } from 'vue'

	import BlockModal from '../BlockModalComponent.vue'
	import SpinnerButton from '../HelpComponents/SpinnerButtonComponent.vue'
	import Draggable from 'vuedraggable'

	import { blockList, blockStore, blockUpdate, blockDelete, blockPositioning } from '../../sdk'
	import _ from 'lodash'

	export default {
		emits: [ 'created', 'updated', 'deleted' ],
		props: {
			id: {
				type: Number,
				required: false,
			}
		},
		components: {
			Draggable,
			BlockModal,
			SpinnerButton,
		},
		data() {
			return {
				blocks: [],

				openedModal: false,
				isCreating: true,
				modalComponent: undefined,

				// deprecated
				modal: {
					id: undefined,
					is_published: false,
					type: undefined,
					content: '',
					files: [],
					images: [],
					deleteMedia:[],
					errors: {
						name: []
					}
				},
				showSpinnerButtons: {
					create: false,
					delete: false,
					update: false
				},
				previewSteps: [
					1920,
					1366,
					768,
					360
				],
				currentStep: 0
			}
		},
		methods: {
			importPreviewComponent(name) {
				name = _.capitalize(name).substring(0, 1) + _.camelCase(name).substring(1);

				return defineAsyncComponent(() => import('../BlockComponents/' + name + 'Component.vue'))
			},
			addBlock() {
				this.modal.id = undefined;
				this.modal.name = '';
				this.modal.is_published = false;
				this.modal.content = '';
				this.modal.images = [];

				this.modal.type = this.$root.store.getBlockType(0).type;
				this.changeTypeCreateBlock(this.modal.type);

				this.isCreating = true;
				this.openedModal = true;
			},
			editBlock(block) {
				this.modal.id = block.id;
				this.modal.name = block.name;
				this.modal.type = block.type;
				this.modal.is_published = block.is_published;
				this.modal.content = block.content;
				this.modal.images = block.images;

				this.changeTypeCreateBlock(block.type);
				this.isCreating = false;
				this.openedModal = true;
			},
			close() {
				this.modal.id = undefined;
				this.openedModal = false;
				this.modal.name = '';
				this.modal.type = undefined;
				this.modal.is_published = false;
				this.modal.content = '';
			},
			updateModalContent(id) {
				setTimeout(() => {
					if(id) {
						document.querySelector('#iframe' + id).contentWindow.location.reload();
					} else {
						document.querySelectorAll('[id^="iframe"]').forEach(frame => {
							frame.contentWindow.location.reload()
						});
					}
				}, 100);
			},
			changeTypeCreateBlock(event) {
				if(typeof event == 'string') {
					this.modalComponent = event;
				} else {
					this.modalComponent = event.target.value;
				}
			},
			updateBlocks(id) {
				blockList({ menu_item_id: this.$route.params.menuItem }).then(response => {
					if(response.status.code >= 300) {
						this.$root.store.addError(response.status.message);
					}

					this.blocks = [];
					response.data.forEach(item => {
						this.blocks.push(item);
					});
				})
			},
			store() {
				this.showSpinnerButtons.create = true;
				blockStore(this.prepareData()).then(response => {
					this.updateBlocks();
					this.updateModalContent(response?.data?.id);
					this.showSpinnerButtons.create = false;
					this.openedModal = false;
				});
			},
			update() {
				this.showSpinnerButtons.update = true;
				blockUpdate(this.modal.id, this.prepareData()).then(response => {
					this.updateBlocks();
					this.updateModalContent(response?.data?.id);
					this.showSpinnerButtons.update = false;
					this.openedModal = false;
				});
			},
			remove() {
				this.showSpinnerButtons.delete = true;
				if(confirm('Вы действительно хотите удалить блок «' + (this.modal.name || this.$root.store.getBlockTypeName(this.modal.type)) + '»?')) {
					blockDelete(this.modal.id).then(response => {
						if(response.status.code == 200) {
							this.updateBlocks();
							this.updateModalContent();
							this.showSpinnerButtons.delete = false;
							this.openedModal = false;
						}
					})
				} else {
					this.showSpinnerButtons.delete = false;
				}
			},
			prepareData() {
				const form = document.querySelector('#modalForm');
				let formData = new FormData(form);

				return formData;
			},
			endDraggable(e) {
				const moved = this.blocks[e.newIndex]?.id;
				const prev = this.blocks[e.newIndex - 1]?.id;
				const next = this.blocks[e.newIndex + 1]?.id;

				blockPositioning({moved, prev, next}).then(response => {
					if(response.status.code >= 300) {
						this.$root.store.addError(response.status.message);
					}
				});
			},
			togglePreview(index) {
				this.currentStep = index;

				document.querySelectorAll('.preview-container iframe').forEach(($frame) => {
					$frame.contentWindow.location.reload();
					$frame.style.height = $frame.contentWindow.document.body.scrollHeight + "px";
				})
			}
		},
		computed: {
			disableCreatingModal() {
				return this.showSpinnerButtons.create;
			},
			disableUpdatingModal() {
				return this.showSpinnerButtons.update || this.showSpinnerButtons.delete;
			},
			importComponent() {
				let name = _.capitalize(this.modalComponent).substring(0, 1) + _.camelCase(this.modalComponent).substring(1);

				return defineAsyncComponent(() => import('../BlockComponents/' + name + 'Component.vue'))
			},
		},
		watch: {
			id(newId, oldId) {
				this.updateBlocks();
			}
		},
		beforeMount() {
			this.updateBlocks();
		}
	}
</script>

<style lang="scss" scoped>
	.icon {
		min-width: 18px;
		margin: 5px;
	}

	.preview-container {
		margin-right: -0.39rem;
		margin-left: -0.39rem;

		&_steps {
			margin: 0 auto;
		}
	}

	iframe {
		height: 300px;
	}
</style>
