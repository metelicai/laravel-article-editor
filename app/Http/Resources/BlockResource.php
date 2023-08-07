<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlockResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
	 */
	public function toArray($request) {
		$images = [];

		foreach($this->getRegisteredMediaCollections() as  $media_collection) {
			/** @var Media $media */
			foreach($this->media()->where('collection_name', $media_collection->name)->defaultOrder()->get() as $media) {
				$custom_collection = $media->sub_collection_name;

				if($custom_collection) {
					$images[$media_collection->name][$custom_collection][] = new MediaResource($media);
				} else {
					$images[$media_collection->name][] = new MediaResource($media);
				}
			}
		}

		return [
			'id' => $this->id,
			'name' => $this->name,
			'type' => $this->type,
			'content' => $this->content,
			'is_published' => $this->is_published,
			'menu_item_id' => $this->menu_item_id,
			'left' => $this->_lft,
			'right' => $this->_rgt,
			'preview' => view('admin.preview-template', [ 'block' => $this ])->render(),
			'preview_url' => route('admin.blocks-preview', [ 'block' => $this ]),
			'images' => $images,
		];
	}
}
