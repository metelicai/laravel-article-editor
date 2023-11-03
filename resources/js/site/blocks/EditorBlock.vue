<template>
	<Editor v-model="blocks"></Editor>
</template>

<script setup>
import Editor from '@/components/editor/Editor'
import { ref } from 'vue'

const blocks = ref([
	{
		id: 1,
		type: 'images',
		data: {
			style: 'gallery',
			images: [
				{
					id: 1,
					small: 'https://placehold.co/300x200.jpg',
					big: 'https://placehold.co/600x400.jpg',
				},
			],
		},
	},
	{
		id: 2,
		type: 'text',
		data: {
			content: '<p>23535555<a href="#footnote-1" id="footnote-link-1" data-number="1" data-value="1вццц" data-w-e-type="footnote">[1]</a></p><p>аыа</p><p>ыафыыы<a href="#footnote-2" id="footnote-link-2" data-number="2" data-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." data-w-e-type="footnote">[2]</a></p><p>123</p><p><br></p><p>33332<a href="#footnote-3" id="footnote-link-3" data-number="3" data-value="123551" data-w-e-type="footnote">[3]</a> 3212 222111<a href="#footnote-4" id="footnote-link-4" data-number="4" data-value="34555" data-w-e-type="footnote">[4]</a></p>',
			withFootnotes: true,
			footnotes: [],
		},
	},
])
</script>
