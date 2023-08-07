<header id="header" class="header">
    {{-- Лого --}}
    <a href="/">
        <img class="header__logo" src="{{ asset('img/layout/2i-logo.svg') }}">
    </a>

    {{-- Меню --}}
    <div class="header__menu">
        <x-modal
			name="menu"
			save-content
		>
			<div class="menu">
				{{-- Навигация --}}
				<nav class="menu__nav" aria-label="Главная навигация">
					<a href="#" class="item">Ссылка 1</a>
					<a href="#" class="item item_active">Ссылка 2</a>
				</nav>

				{{-- Кнопки --}}
				<div class="menu__buttons">
					{{-- Мобильное меню --}}
					<x-link
						href="#"
						color="menu"
						icon="bars-solid"
						class="menu__mobile-menu"
						@click.prevent="openModal('menu')"
					>
						Меню
					</x-link>

					{{-- Контакты --}}
					<x-link
						href="#"
						icon="mobile-alt-solid"
						button
						class="menu__contacts"
						data-ym-goal="show-contacts"
						@click.prevent="openModal('contacts')"
					>
						КОНТАКТЫ
					</x-link>
				</div>
			</div>
		</x-modal>
    </div>
</header>
