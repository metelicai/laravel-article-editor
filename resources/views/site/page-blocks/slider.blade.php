<x-admin::blank-alert />

<div class="slider-template">
	<div class="slider">
		@if($block->content?->title)
			<h2 class="slider__title">{{ $block->content->title }}</h2>
		@endif

		@if($block->content?->description)
			<div class="slider__description">
				@foreach(explode("\n", $block->content->description) as $paragraph)
					@if($paragraph)
						<p>{{ $paragraph }}</p>
					@endif
				@endforeach
			</div>
		@endif

		@php($medias = $block->media()->where('collection_name', 'sliders')->defaultOrder()->get())
		@if ($medias->count())
			<x-slider>
				@foreach ($medias as $media)
					<x-slider.slide>
						<x-picture :sources="[
							[ asset($media->getUrl('slide')) ]
						]" />
					</x-slider.slide>
				@endforeach
			</x-slider>
		@endif
	</div>
</div>
