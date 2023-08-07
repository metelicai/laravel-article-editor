<button
	{{ $attributes
		->class([
			'btn-ghost btn-ghost_' . $color => $ghost,
            'btn-link btn-link_' . $color => $link,
            'btn btn_' . $color => !$ghost && !$link,
		])
	}}
>
	@if ($icon && !$iconRight)
		<x-icon :$icon />
	@endif

	@if (trim($slot))
    	<span>{{ $slot }}</span>
	@endif

	@if ($icon && $iconRight)
		<x-icon :$icon />
	@endif
</button>
