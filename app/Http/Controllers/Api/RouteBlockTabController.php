<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\MediaResource;
use App\Models\Block;

class RouteBlockTabController
{
	public function show(Block $block, int $tab) {
		if(!$block || !$block->exists || !key_exists($tab, $block->content['routes'])) {
			abort(404);
		}

		$content = $block->content['routes'][$tab];

		$media_items = $block
			->media()
			->where('collection_name', 'routes')
			->where('sub_collection_name', $content['custom_collection'])
			->defaultOrder()
			->get();

		foreach($media_items as $media) {
			$content['images'][] = new MediaResource($media);
		}

		return $content;
	}
}
