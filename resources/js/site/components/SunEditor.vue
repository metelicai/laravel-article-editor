<template>
	<div style="background-color: azure;">
		<div id="suneditor"></div>
	</div>
</template>

<script setup>
import suneditor from 'suneditor'
import plugins from 'suneditor/src/plugins'
import ru from 'suneditor/src/lang/ru'
import { onMounted, ref } from 'vue'

const editor = ref(null)
onMounted(() => {
	editor.value = suneditor.create('suneditor', {
		plugins,
		buttonList: [
			['undo', 'redo'],
			['formatBlock'],
			['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
			['align', 'fontColor', 'hiliteColor'],
			['list', 'blockquote', 'horizontalRule'],
			['removeFormat'],
			['table', 'link', 'image', 'video'],
			['imageGallery'], // You must add the "imageGalleryUrl".
			['codeView', 'fullScreen'],
		],
		// Defining menu items
		// font: [],
		formats: [
			'p',
			{
				tag: 'p', // Tag name
				name: 'Лид' || null, // default: tag name
				command: 'free', // default: "replace"
				class: '__se__format__free_lead', // Class names must always begin with "__se__format__(replace, range, free)_"
			},
			'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
		],
		mode: 'classic', // 'classic', 'inline', 'balloon', 'balloon-always'
		lang: ru,
		// Whitelist, Blacklist
		pasteTagsWhitelist: 'br|p|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|table|thead|tbody|tr|th|td|a|b|strong|i|em|u|s|span|strike|del|sub|sup|details|summary',
		attributesBlacklist: { all: '*' },
	})
})
</script>
