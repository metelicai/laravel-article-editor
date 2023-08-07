<x-admin::blank-alert />

<div class="cover-template">
	<div class="cover">
		<div class="cover__text">
			@if($block->content?->title)
				<h1 class="cover__title">{{ $block->content->title }}</h1>
			@endif

			@if($block->content?->description)
				<div class="cover__description">
					@foreach(explode("\n", $block->content->description) as $paragraph)
						@if($paragraph)
							<p>{{ $paragraph }}</p>
						@endif
					@endforeach
				</div>
			@endif

			@if($block->content?->button_text)
				<x-button @click="openModal('contacts')" class="cover__button">{{ $block->content->button_text }}</x-button>
			@endif
		</div>

		@php($image_url = $block->getFirstMediaUrl('cover', 'cover'))
		@if ($image_url)
			<div class="cover__image">
				<x-picture :sources="[
					[ asset($image_url) ]
				]" />
			</div>
		@endif
	</div>
</div>
