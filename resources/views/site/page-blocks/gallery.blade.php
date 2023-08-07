<x-admin::blank-alert />

<div class="gallery-template">
	@php($medias = $block->media()->where('collection_name', 'gallery')->defaultOrder()->get())
	<x-gallery>
		@foreach ($medias as $media)
			<x-gallery.image
				:big="$media->getUrl('gallery')"
				:small="$media->getUrl('gallery')"
				alt=""
			/>
		@endforeach
	</x-gallery>
</div>
