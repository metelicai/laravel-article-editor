<template>
	<div class="editor">
		<div class="editor__container">
			<div class="editor__blocks">
				<block-wrapper v-for="(block, index) in blocks" :key="index" :block="loadBlock(block)"></block-wrapper>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import BlockWrapper from './common/BlockWrapper.vue'
import LoadingBlock from './common/LoadingBlock.vue'
import ErrorBlock from './common/ErrorBlock.vue'

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
			withFootnotes: true,
			content: '<h1><a href="" target="">Страница голосования - 36-84 часа 30 мин</a></h1><p>Для составления опросов будет добавлен раздел в админку. В этом разделе можно будет составить два опроса: для пользователей и для сотрудников. Опрос для пользователей можно будет открыть перейдя по ссылке в подвале сайта. Опрос для сотрудников будет доступен только по прямой ссылке.</p><p>Опрос будет состоять из вопросов. Каждый вопрос будет иметь заголовок, описание и тип. Типы вопросов будут следующие:</p><p><span style="color: black;">· &nbsp; &nbsp; &nbsp; &nbsp; </span>Выбор одного варианта из нескольких</p><p><span style="color: black;">· &nbsp; &nbsp; &nbsp; &nbsp; </span>Выбор нескольких вариантов (С возможностью добавить вариант «Другое», при выборе которого появится текстовое поле для ввода)</p><p><span style="color: black;">· &nbsp; &nbsp; &nbsp; &nbsp; </span>Открытый вопрос (В качестве ответа необходимо ввести произвольный текст).</p><p>В случае, если опрос каким либо образом был изменен в момент его прохождения пользователем, пользователь продолжит проходить старый вариант опроса и соответственно в админку придет результат по старому варианту опроса.</p><p>В случае перезагрузки страницы опрос начнется заново. И если к этому моменту он был изменен, для пользователя загрузится новая версия опроса.</p><p><strong>Иерархия вопросов</strong>.</p><p>В зависимости от ответа на вопрос, следующие вопросы могут изменяться.</p><p>· &nbsp; &nbsp; &nbsp; &nbsp; При вопросе с типом «Выбор одного варианта» для каждого ответа можно будет добавить следующий вопрос.</p><p>· &nbsp; &nbsp; &nbsp; &nbsp; <strong>Дополнительная оценка</strong>: При вопросе с типом «Выбор нескольких вариантов» для каждой комбинации вариантов будет возможно добавить следующий &nbsp;вопрос. </p><p><span style="font-family: &quot;Courier New&quot;;">o</span>Вариант «Другое» в комбинациях участвовать не будет. </p><p><span style="color: rgb(196, 89, 17); font-family: &quot;Courier New&quot;;">o</span><strong>Также будет возможно выбрать следующий вопрос независимо от выбранных вариантов и этот же вопрос будет выбираться если для определенной комбинации не задан следующий вопрос.</strong></p><p><span style="color: rgb(196, 89, 17); font-family: &quot;Courier New&quot;;">o</span><strong>Для того, чтобы в опросе следующий вопрос был выбран в соответствии с вопросом связанным с комбинацией, отмеченные варианты ответа должны точно соответствовать комбинации (ни больше ни меньше).</strong></p><p>· &nbsp; &nbsp; &nbsp; &nbsp; Для открытого вопроса только один следующий вопрос.</p><p>Нельзя будет привязать один и тот же вопрос к разным ответам.</p><p><strong>Дизайн – 2 часа 30 мин</strong></p><p>· &nbsp; &nbsp; &nbsp; &nbsp; Дизайн компонентов для формы голосования - 1 час </p><p>· &nbsp; &nbsp; &nbsp; &nbsp; Адаптация - 1 час 30 мин</p><p><strong>Верстка – 29-69 часов</strong></p><p>· &nbsp; &nbsp; &nbsp; &nbsp; Страница голосования - 3 часа</p><p>· &nbsp; &nbsp; &nbsp; &nbsp; Раздел опросов в админке - 24-64 часа</p><p><span style="font-family: &quot;Courier New&quot;;">o</span>Основной функционал - 24 часа</p><p><span style="font-family: &quot;Courier New&quot;;">o</span><strong>Дополнительно</strong>: иерархия для вопросов с несколькими вариантами - 40 часов</p><p>· &nbsp; &nbsp; &nbsp; &nbsp; Раздел результатов опросов в админке - 2 часа</p><p><strong>Программирование – 5-13 часов</strong></p><p><span style="font-family: &quot;Courier New&quot;;">o</span>Основной функционал - 5 часов</p><p><span style="font-family: &quot;Courier New&quot;;">o</span><strong>Дополнительно</strong>: иерархия для вопросов с несколькими вариантами - 8 часов</p>',
			// content: '',
			// content: '<p>111<a href="#footnote-1" id="footnote-link-1" data-number="1" data-value="111" data-w-e-type="footnote">[1]</a></p><p>222</p><p>333<a href="#footnote-2" id="footnote-link-2" data-number="2" data-value="333" data-w-e-type="footnote">[2]</a></p><p>444</p><p>555</p><p>666<a href="#footnote-3" id="footnote-link-3" data-number="3" data-value="666" data-w-e-type="footnote">[3]</a></p>',
		},
	},
])

function loadBlock(block) {
	let type = null
	if (typeof block.type === 'string' && block.type.trim()) {
		type = block.type.toLowerCase()
		type = type.charAt(0).toUpperCase() + type.slice(1)
	}

	const component = defineAsyncComponent({
		loader: () => import(`./blocks/${type}Block.vue`),
		loadingComponent: LoadingBlock,
		errorComponent: ErrorBlock,
		timeout: 2000,
	})

	return {
		id: block.id,
		data: block.data,
		component,
	}
}
</script>

<style lang="scss" scoped>
.editor__blocks {
	display: grid;
	grid-template-columns: 1fr;
	grid-row-gap: 32px;
	max-width: 640px;
	margin: 0 auto;
}
</style>
