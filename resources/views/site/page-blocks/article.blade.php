<x-admin::blank-alert />
@if($block->content)
	<div class="spacing article">{!! json_decode($block->content)->html ?? '' !!}</div>
@endif
