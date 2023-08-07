<x-admin::blank-alert />

<div class="recall-template">
	<x-recall class="recall" :block-id="$block->id" :ym-goal="$block->content?->button_metrika">
		@if($block->content?->title)
			<h2 class="recall__title">{{ $block->content->title }}</h2>
		@endif

		@if($block->content?->description)
			<div class="recall__description">
				@foreach(explode("\n", $block->content->description) as $paragraph)
					@if($paragraph)
						<p>{{ $paragraph }}</p>
					@endif
				@endforeach
			</div>
		@endif

		<x-forms.input
			label="Номер телефона"
			type="tel"
			name="f-phone"
			icon="mobile-alt-solid"
			placeholder="+7 123 456-78-90"
			required
		/>

		@if($block->content?->button_text)
			<x-button icon="mobile-alt-solid" class="recall__button">{{ $block->content->button_text }}</x-button>
		@endif
	</x-recall>
</div>
