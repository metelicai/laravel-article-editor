<a
	{{ $attributes
		->class([
			'link_icon' => trim($icon),
			'link link_' . $color => !$button,
			'link-btn btn btn_' . $color => $button && !$ghost,
			'link-btn btn-ghost btn-ghost_' . $color => $button && $ghost,
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
</a>
