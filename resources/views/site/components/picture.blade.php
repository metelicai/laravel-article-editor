<picture>
	@foreach ($sources as $source)
		@if (!$loop->last)
			<source media="{{ $getMediaQuery($source) }}" srcset="{{ $source[0] }}">
		@else
			<img src="{{ $source[0] }}" {{ $attributes }}>
		@endif
	@endforeach
</picture>
