<label
	{{ $attributes->merge(['id' => null]) }}
	@class([
		'range',
		'range_multiple' => $isRange,
		$attributes->get('class'),
	])
>
	{{-- label --}}
	@if ($label)
		<div class="range__label">{{ $label }}</div>
	@endif

	{{-- fields --}}
	<input
		{{ $attributes->filter(fn ($value, $key) => !in_array($key, ['id', 'class'])) }}
		class="range__field range__field_first"
		type="range"
		name="{{ $isRange ? $name . '[from]' : $name }}"
		min="{{ $range[0] }}"
		max="{{ $range[1] }}"
		value="{{ $default[0] }}"
		@if ($isRange)
			multiple
			style="
				--from: {{ $default[0] }};
				--to:  {{ $default[1] ?? '0' }};
				--min: {{ $range[0] }};
				--max: {{ $range[1] }};
			"
		@endif
	/>

	@if ($isRange)
		<input
			{{ $attributes->filter(fn ($value, $key) => !in_array($key, ['id', 'class'])) }}
			class="range__field range__field_second"
			type="range"
			name="{{ $name . '[to]' }}"
			min="{{ $range[0] }}"
			max="{{ $range[1] }}"
			value="{{ $default[1] }}"
			multiple
		/>
	@endif

	<div class="range__counts">
		<p class="range__count range__count_from">
			<span class="range-value">{{ $isRange ? $default[0] : $range[0] }}</span>
			<span> {{ $units }}</span>
		</p>
		@if (!$isRange)
			<p class="range__count range__count_current">
				<span class="range-value">{{ $default[0] }}</span>
				<span> {{ $units }}</span>
			</p>
		@endif
		<p class="range__count range__count_to">
			<span class="range-value">{{ $isRange ? $default[1] : $range[1] }}</span>
			<span> {{ $units }}</span>
		</p>
	</div>
</label>
