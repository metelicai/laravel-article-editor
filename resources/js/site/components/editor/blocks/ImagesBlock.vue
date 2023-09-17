<template>
	<div class="editor-block editor-block_images">
		<!-- images list -->
		<Draggable
			v-model="_data.images"
			tag="div"
			item-key="index"
			class="images-list"
			:disabled="pending">
			<template #item="{ element: image }">
				<a
					:href="image.big || image.small || null"
					class="image"
					:class="{
						'image_loaded': image.loaded,
						'image_new': image.id === 'new',
						'image_deleted': image.deleted,
					}">
					<!-- img -->
					<img
						v-show="image.loaded"
						:src="image.preview || image.small"
						:alt="image.alt"
						class="image__picture"
						@load="image.loaded = true">
					<!-- badges & buttons -->
					<div v-show="image.loaded">
						<!-- new badge -->
						<div v-if="image.id === 'new' && !image.deleted" class="image__badge image__badge_new" title="Новое изображение" v-html="iconPlus"></div>
						<!-- deleted badge -->
						<div v-if="image.deleted" class="image__badge image__badge_deleted" title="Изображение будет удалено" v-html="iconMinus"></div>
						<!-- delete btn -->
						<div class="image__delete" title="Удалить" @click.prevent="image.deleted = !image.deleted" v-html="iconTrash"></div>
					</div>
				</a>
			</template>
		</Draggable>
		<!-- footer -->
		<div class="images-footer">
			<!-- style -->
			<div class="images-style" title="Стиль отображения блока на странице">
				<label class="images-style__item">
					<input
						label="Галерея"
						type="radio"
						:name="'block-' + id + '-style'"
						v-model="_data.style"
						value="gallery"
						class="images-style__item-input" />
				</label>
				<label class="images-style__item">
					<input
						label="Слайдер"
						type="radio"
						:name="'block-' + id + '-style'"
						v-model="_data.style"
						value="slider"
						class="images-style__item-input" />
				</label>
			</div>
			<!-- counter -->
			<div class="images-counter">0 / 50</div>
			<!-- add -->
			<label class="images-add">
				<input
					type="file"
					multiple accept="image/png, image/jpeg"
					class="images-add__input"
					@change="uploadImages" />
				<div class="images-add__label">Добавить изображения</div>
			</label>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
import iconTrash from '../svg/trash.svg'
import iconPlus from '../svg/plus.svg'
import iconMinus from '../svg/minus.svg'

const props = defineProps({
	id: {
		type: Number,
		required: true,
	},
	data: {
		type: Object,
		required: true,
	},
})

const _data = ref(props.data)
const pending = ref(false)

function uploadImages(event) {
	const files = { ...event.target.files }
	const countFiles = event.target.files.length
	event.target.value = null
	pending.value = true

	for (const [index, file] of Object.entries(files)) {
		const imageIndex = _data.value.images.push({
			id: 'new',
			file,
		}) - 1

		getPreview(file).then((preview) => {
			_data.value.images[imageIndex].preview = preview

			if (Number(index) + 1 === countFiles) {
				pending.value = false
			}
		})
	}
}

function getPreview(file) {
	return new Promise((resolve) => {
		if (file instanceof File) {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = (event) => {
				resolve(event.target.result)
			}
		} else {
			resolve(null)
		}
	})
}

</script>

<style lang="scss" scoped>
$bg-color: #cdd1e0;
$front-color: #388ae5;
$border-color: #e8e8eb;
$error-color: #e76868;

.images-list {
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	padding: 10px;
	background-color: #222222;
	max-height: 300px;
	overflow-y: auto;

	.image {
		position: relative;
		overflow: hidden;
		aspect-ratio: 16/9;
		cursor: move;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		background-color: black;
		border-radius: 3px;
		padding: 5px;

		&:not(#{&}_loaded)::after {
			content: "";
			position: absolute;
			z-index: 3;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			border: 2px solid $bg-color;
			border-top-color: $front-color;
			left: 50%;
			top: 50%;
			margin-top: -15px;
			margin-left: -15px;
			animation: image-preloader-spin 2s infinite linear;
			box-sizing: border-box;
		}

		&_new {
			background-color: $front-color;
		}

		&_deleted {
			background-color: $error-color;
		}

		&__picture {
			border-radius: 3px;
			max-width: 100%;
			width: 100%;
			height: 100%;
			vertical-align: middle;
			margin: auto;
			-o-object-fit: cover;
			object-fit: cover;
			pointer-events: none;
		}

		&__badge {
			position: absolute;
			display: flex;
			top: 5px;
			left: 5px;
			line-height: 1;
			border-radius: 0 0 3px 0;
			transition: background-color .1s;

			width: 24px;
			height: 24px;
			padding: 2px 4px 4px;
			fill: #fff;

			&_new {
				background-color: $front-color;
			}

			&_deleted {
				background-color: $error-color;
			}
		}

		&__delete {
			position: absolute;
			top: 5px;
			right: 5px;
			cursor: pointer;
			color: #fff;
			font-size: 18px;
			background-color: rgba(0, 0, 0, .35);
			line-height: 1;
			padding: 6px 8px;
			border-radius: 0 0 0 3px;
			transition: background-color .1s;

			&:hover {
				background-color: rgba(0, 0, 0, .5);
			}
		}
	}
}

.images-footer {
	display: flex;
	justify-content: flex-end;
	gap: 16px;
	padding: 8px;
	background-color: black;
}

.images-style {
	display: flex;
	flex-grow: 1;

	&__item {
		display: block;

		&:first-child input::before {
			border-radius: 3px 0 0 3px;
		}

		&:last-child input::before {
			border-radius: 0 3px 3px 0;
		}

		input {
			position: relative;
			display: flex;
			appearance: none;
			outline: none;
			cursor: pointer;
			transition: .2s;

			&::before {
				content: attr(label);
				display: inline-block;
				text-align: center;
				width: 100%;
				height: 100%;
				padding: 8px 12px;
				color: #707684;
				background-color: white;
			}

			&:checked {
				cursor: default;

				&::before {
					color: white;
					background-color: $front-color;
				}
			}
		}
	}
}

.images-counter {
	display: flex;
	align-items: center;
	color: gray;
	font-size: 14px;
}

.images-add {
	&__input {
		position: absolute;
		z-index: -1;
		opacity: 0;
		display: block;
		width: 0;
		height: 0;
	}

	&__label {
		padding: 8px 12px;
		border-radius: 3px;
		border: 1px solid rgba(201, 201, 204, .48);
		font-size: 14px;
		background: #fff;
		color: #707684;
		text-align: center;
		cursor: pointer;
	}
}

@keyframes image-preloader-spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
