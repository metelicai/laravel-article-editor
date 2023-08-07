<x-admin::blank-alert />
<div>
	@foreach ($block->media()->where('collection_name', 'files')->defaultOrder()->get() as $media)
		<div>
			<a href="{{ $media->getUrl() }}" class="docs__link">
				<span class="icon icon-{{ $media->getExtensionAttribute() }}"></span>
				<span class="docs__block">
					<span class="docs__head">{{ $media->name }}</span>
					<span class="docs__hint">{{ mb_strtoupper($media->getExtensionAttribute()) }}, {{
						bytes_convert($media->size) }}</span>
				</span>
			</a>
		</div>
	@endforeach
</div>
