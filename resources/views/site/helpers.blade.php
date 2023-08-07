<div class="spacing-default">
	<h1>Заголовок 1</h1>
	<h2>Заголовок 2</h1>
	<h3>Заголовок 3</h3>
	<h4>Заголовок 4</h4>
	<h5>Заголовок 5</h5>
	<h6>Заголовок 6</h6>
	<p>Параграф</p>
</div>

<div class="spacing-default">
	<div style="display: flex; gap: 24rem; margin-bottom: 56rem;">
		<x-link href="#button">Якорь к кнопке</x-link>
		<x-link href="#picture">Якорь к picture</x-link>
	</div>

	{{-- Компоненты --}}
	<h2>Компоненты</h2><br><br>

	{{-- Кнопка --}}
	<h4 id="button" style="border-bottom: 1rem solid darkgray;">Кнопка</h4><br>
	<p>Основная</p>
	<div style="display: flex; gap: 24rem">
		<x-button>Кнопка</x-button>
		<x-button disabled>Отключена</x-button>
		<x-button icon="chevron-left-regular">Иконка слева</x-button>
		<x-button icon="chevron-right-regular" icon-right>Иконка справа</x-button>
	</div>
	<br>
	<p>Призрак</p>
	<div style="display: flex; gap: 24rem">
		<x-button ghost>Кнопка</x-button>
		<x-button ghost disabled>Отключена</x-button>
		<x-button ghost icon="chevron-left-regular">Иконка слева</x-button>
		<x-button ghost icon="chevron-right-regular" icon-right>Иконка справа</x-button>
	</div>
	<br>
	<p>Как ссылка</p>
	<div style="display: flex; gap: 24rem">
		<x-button link>Кнопка</x-button>
		<x-button link disabled>Отключена</x-button>
		<x-button link icon="chevron-left-regular">Иконка слева</x-button>
		<x-button link icon="chevron-right-regular" icon-right>Иконка справа</x-button>
	</div>


	{{-- Иконка --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Иконка</h4><br>
	<div style="display: flex; gap: 24rem">
		<x-icon icon="bars-solid" />
		<x-icon icon="chevron-left-regular" />
		<x-icon icon="chevron-right-regular" />
	</div>


	{{-- Ссылка --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Ссылка</h4><br>
	<p>Обычная</p>
	<div style="display: flex; gap: 24rem">
		<x-link href="#">Ссылка</x-link>
		<x-link href="#" icon="external-link-alt-solid">Ссылка c иконкой</x-link>
		<x-link href="#" icon="map-marker-solid" icon-right>Ссылка c иконкой</x-link>
	</div>
	<br>
	<p>Как кнопка (Использует стили кнопок)</p>
	<div style="display: flex; gap: 24rem">
		<x-link button href="#">Ссылка</x-link>
		<x-link button href="#" icon="external-link-alt-solid">Ссылка c иконкой</x-link>
		<x-link button href="#" icon="map-marker-solid" icon-right>Ссылка c иконкой</x-link>
	</div>

	{{-- Поле --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Поле</h4><br>
	<p>Подключен пакет <strong>cleave.js</strong> для валидации телефона.</p><br>
	<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 24rem">
		<x-forms.input
			id="id"
			label="Поле обязательное с иконкой"
			hint="Подсказка: здесь работает маска для номера телефона"
			type="tel"
			name="phone"
			icon="mobile-alt-solid"
			placeholder="8 921 123 45 67"
			required
		/>
		<x-forms.input
			label="Поле с ошибкой"
			error="Ошибка"
			name="test"
			icon="mobile-alt-solid"
			icon-right
			placeholder="search..."
		/>
		<x-forms.input
			label="Поле отключенное"
			name="test"
			icon="mobile-alt-solid"
			placeholder="search..."
			disabled
		/>
	</div>


	{{-- Список выбора --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Список выбора</h4><br>
	<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 24rem">
		<x-forms.select
			label="Список обязательный с иконкой"
			hint="Подсказка"
			name="select"
			icon="pin-solid"
			required
		>
			<option>Не выбрано</option>
			<option value="1">Элемент 1</option>
		</x-forms.select>
		<x-forms.select
			label="Список с ошибкой"
			error="Ошибка"
			name="select"
		>
			<option>Не выбрано</option>
			<option value="1">Элемент 1</option>
		</x-forms.select>
		<x-forms.select
			label="Список отключенный"
			name="select"
			disabled
		>
			<option>Не выбрано</option>
			<option value="1">Элемент 1</option>
		</x-forms.select>
	</div>

	{{-- Textarea --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Textarea</h4><br>
	<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 24rem">
		<x-forms.textarea
			label="Обязательное"
			hint="Подсказка"
			name="textarea"
			placeholder="Введите текст"
			rows="4"
			required
		>
			Текст
		</x-forms.textarea>
		<x-forms.textarea
			label="С ошибкой"
			name="textarea"
			placeholder="Введите текст"
			rows="4"
			error="Ошибка"
		></x-forms.textarea>
		<x-forms.textarea
			label="Отключенное"
			name="textarea"
			placeholder="Введите текст"
			rows="4"
			disabled
		></x-forms.textarea>
	</div>


	{{-- Флажок --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Флажок</h4><br>
	<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 24rem">
		<x-forms.flag label="Чекбокс" checked />
		<x-forms.flag label="Чекбокс" checked disabled />
		<x-forms.flag label="Радио" name="radio" type="radio" />
		<x-forms.flag label="Радио" name="radio" type="radio" checked disabled />
		<x-forms.flag required>
			Отправляя данные вы соглашаетесь
            <x-link href="#" target="_blank">с политикой обработки персональных данных.</x-link>
		</x-forms.flag>
		<x-forms.flag required disabled>
			Отправляя данные вы соглашаетесь
            <x-link href="#" target="_blank">с политикой обработки персональных данных.</x-link>
		</x-forms.flag>
	</div>


	{{-- Диапазон --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Диапазон</h4><br>
	<div style="display: grid; grid-template-columns: 300rem 300rem; grid-gap: 24rem">
		<x-forms.range
			label="Одно значение"
			name="range"
			:range="[100, 300]"
			:default="[250]"
			units="м³"
		/>
		<x-forms.range
			label="Отключенный"
			name="range"
			:range="[100, 300]"
			:default="[250]"
			units="м³"
			disabled
		/>
		<x-forms.range
			label="Диапазон значений"
			name="range"
			:range="[100, 500]"
			:default="[200, 400]"
			step="100"
			units="м³"
		/>
		<x-forms.range
			label="Отключенный"
			name="range"
			:range="[100, 500]"
			:default="[200, 400]"
			step="100"
			units="м³"
			disabled
		/>
	</div>


	{{-- Тег picture --}}
	<br><br><br><h4 id="picture" style="border-bottom: 1rem solid darkgray;">Тег picture</h4><br>
	<x-picture
		:sources="[
			[ 'https://via.placeholder.com/1000x150?text=img-tp', null, 1279 ],
			[ 'https://via.placeholder.com/1000x150?text=img-l', 1280, 1439 ],
			[ 'https://via.placeholder.com/1920x150?text=img-w' ]
		]"
		alt="ТОВАР"
		class="product__image-img"
	/>


	{{-- Слайдер --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Слайдер</h4><br>
	<x-slider>
		@foreach ([
			'https://via.placeholder.com/800x400?text=img-1',
			'https://via.placeholder.com/800x400?text=img-2',
			'https://via.placeholder.com/800x400?text=img-3',
			'https://via.placeholder.com/800x400?text=img-4',
		] as $image)
			<x-slider.slide>
				<picture>
					<img src="{{ $image }}">
				</picture>
			</x-slider.slide>
		@endforeach
	</x-slider>

	{{-- Галерея --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Галерея</h4><br>
	<x-gallery>
		@foreach ([
			[
				'big' => 'https://via.placeholder.com/300x300?text=big-1.jpg',
				'small' => 'https://via.placeholder.com/150x150?text=small-1.jpg'
			],
			[
				'big' => 'https://via.placeholder.com/300x300?text=big-2.jpg',
				'small' => 'https://via.placeholder.com/150x150?text=small-2.jpg'
			],
		] as $item)
			<x-gallery.image
				:big="$item['big']"
				:small="$item['small']"
			/>
		@endforeach
	</x-gallery>


	{{-- Табы --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Табы</h4><br>
	<x-tabs>
		<x-tabs.tab name="Таба 1">Контент табы 1</x-tabs.tab>
		<x-tabs.tab name="Таба 2">Контент табы 2</x-tabs.tab>
		<x-tabs.tab name="Таба 3">Контент табы 3</x-tabs.tab>
	</x-tabs>


	{{-- Модалка --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Модалка</h4><br>
	<x-button @click="openModal('test')">Открыть модалку</x-button>

	<x-modal name="test">
		Контент модалки

		<x-button @click="close()">Закрыть модалку</x-button>
	</x-modal>

	<br>
	<p>Ниже, модалка которая включается когда ширина экрана становится меньше 1281px. До этого ее контент отображается на странице</p>
	<br>

	<x-button @click="openModal('test2')">Открыть модалку</x-button>
	<br>
	<x-modal name="test2" max-screen-width="1281">
		<p style="color: green"><strong>Это контент модалки. Который уберется в модалку при ширине экрана меньше 1281px.</strong></p>
	</x-modal>

	<br>
	<p>А тут передаем дополнительные параметры в модалку. Они добавятся в форму recall в контактах как скрытые поля.</p>
	<br>

	<x-button @click="openModal('contacts', {
		page: {{ 123 }},
		test: '{{ 'dsds' }}'
	})">Открыть контакты с доп. параметрами</x-button>


	{{-- Форма обратной связи --}}
	<br><br><br><h4 style="border-bottom: 1rem solid darkgray;">Форма обратной связи</h4><br>
	<x-recall
		ym-goal="recall-default"
		class="modal_contacts__recall"
		style="max-width: 500rem"
	>
		<h2>Закажите звонок</h2>
		<p>Напишите свой номер телефона — наш сотрудник позвонит вам в ближайшее рабочее время.</p>

		<x-forms.input
			label="Номер телефона"
			type="tel"
			name="f-phone"
			icon="mobile-alt-solid"
			placeholder="+7 123 456-78-90"
			required
			::error="errors['f-phone'] || null"
		/>

		<x-button icon="mobile-alt-solid">
			Заказать звонок
		</x-button>
	</x-recall>
</div>
