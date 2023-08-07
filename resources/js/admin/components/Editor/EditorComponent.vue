<template>
	<div id="editor"></div>
</template>

<script>
	import EditorJS from '@editorjs/editorjs';
	import HeaderJS from '@editorjs/header';
	import ListJS from '@editorjs/list';
	import TableJS from '@editorjs/table';

	import locale from './i18n'
	import renderHtml from './blockToHtml'

	export default {
		props: {
			initialValue: {
				type: String
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		emits: [ 'change' ],
		data() {
			return {
				editor: undefined
			}
		},
		methods: {
			change(api, event) {
				this.editor.save().then((outputData) => {
					this.$emit('change', {
						outputData,
						html: renderHtml(outputData.blocks)
					})
				});
			}
		},
		beforeMount() {
			this.editor = new EditorJS({
				holder: 'editor',
				tools: {
					HeaderJS: {
						class: HeaderJS,
						inlineToolbar: true,
					},
					ListJS: {
						class: ListJS,
						inlineToolbar: true,
						config: {
							defaultStyle: 'unordered'
						}
					},
					TableJS: {
						class: TableJS,
						inlineToolbar: true,
					},
					paragraph: {
						preserveBlank: true,
						inlineToolbar: true,
					}
				},
				onReady: () => {
					const outputData = JSON.parse(this.initialValue || '{}')?.outputData;

					if(outputData) {
						this.editor.render(outputData);
						this.$emit('change', {
							outputData,
							html: renderHtml(outputData.blocks)
						})
					}
				},
				onChange: this.change,
				placeholder: 'Начните вводить текст здесь',
				i18n: locale
			});
		}
	}
</script>

<style>
	.ce-block__content, .ce-toolbar__content {
		max-width:calc(100% - 80px) !important;
	}
	.cdx-block {
		max-width: 100% !important;
	}
	.cdx-notifies {
		z-index: 9999;
	}
	.ct {
		z-index: 2000;
	}
</style>
