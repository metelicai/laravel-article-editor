<template>
  <div v-if="collection.length">
		<draggable v-model="collection" item-key="index" class="row">
			<template #item="{ element }">
				<div class="col-sm-3 mb-3">
					<div class="card" :class="{ 'border-warning': !element?.media?.id }">
						<div v-if="element?.media?.id">
							<img :src="element.urls.thumb" alt="">
							<div class="card-body" v-if="!!$slots?.body">
								<slot :media="element?.media" name="body"></slot>
							</div>
							<div class="card-footer">
								<div class="form-check">
									<input
										class="form-check-input"
										name="delete_media[]"
										:value="element.media.id"
										:id="`image${element.media.id}`"
										type="checkbox"
										:checked="deletedImages.indexOf(element.media.id) != -1"
										@click="toggleDeletedMedia(element.media.id)"
									>
									<label class="form-check-label" :for="`image${element.media.id}`">Удалить</label>
								</div>
							</div>
						</div>
						<div v-else>
							<img :src="element.url" class="img-fluid" alt="">
							<slot class="card-body" name="body"></slot>
							<div class="card-footer">
								<div class="form-check">
									<input
										class="form-check-input"
										name="skip_media[]"
										:value="element.name"
										:id="`new_image${element.index}`"
										type="checkbox"
										:checked="skipedImages.indexOf(element.index) != -1"
										@click="toggleSkipedMedia(element.index)"
									>
									<label class="form-check-label" :for="`new_image${element.index}`">Пропустить</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</draggable>
		<input type="hidden" name="position_images" :value="positions">
	</div>
</template>

<script>
	import Draggable from 'vuedraggable'

	export default {
		props: {
			images: {
				type: Array
			},
			newImages: {
				type: Object
			}
		},
		components: {
			Draggable
		},
		data() {
			return {
				collection: [],
				skipedImages: [],
				deletedImages: [],
			}
		},
		methods: {
			toggleDeletedMedia(id) {
				const index = this.deletedImages.indexOf(id);

				if(index != -1) {
					this.deletedImages.splice(index, 1);
				} else {
					this.deletedImages.push(id);
				}
			},
			toggleSkipedMedia(id) {
				const index = this.skipedImages.indexOf(id);

				if(index != -1) {
					this.skipedImages.splice(index, 1);
				} else {
					this.skipedImages.push(id);
				}
			},
			loadImages() {
				if(this?.images && this?.images.length) {
					this?.images.forEach(image => {
						this.collection.push(image);
					});
				}
			}
		},
		computed: {
			positions() {
				const result = [];

				this.collection.forEach((current, index) => {
					const prev = this.collection[index - 1];
					const id = current?.name ? current?.name : current?.media.id;
					let prevId = null;

					if (index != 0 && prev?.name) {
						prevId = prev?.name;
					} else if(index != 0) {
						prevId = prev?.media.id;
					}

					result.push({
						id,
						prevId
					});
				}, []);

				return JSON.stringify(result);
			}
		},
		beforeMount() {
			this.loadImages();
		},
		watch: {
			newImages(to) {
				this.collection = [];
				this.loadImages();

				Object.entries(to).forEach(file => {
					let reader = new FileReader();

					reader.readAsDataURL(file[1]);

					reader.onload = (e) => {
						this.collection.push({
							name: file[1]?.name,
							url: e.target.result,
							index: this.collection.length
						});
					};
				});
			}
		}

	}
</script>

<style>

</style>
