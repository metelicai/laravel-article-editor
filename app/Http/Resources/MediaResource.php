<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
	 */
	public function toArray($request) {
		$urls = [];

		foreach($this->generated_conversions as $conversion_name => $has_conversion) {
			if($has_conversion) {
				$urls[$conversion_name] = $this->getUrl($conversion_name);
			}
		}

		return [
			'media' => [
				'id' => $this->id,
				'collection_name' => $this->collection_name,
				'name' => $this->name,
				'file_name' => $this->file_name,
				'mime_type' => $this->mime_type,
				'size' => $this->size,
				'custom_properties' => $this->custom_properties,
				'generated_conversions' => $this->generated_conversions,
				'_lft' => $this->_lft,
				'_rgt' => $this->_rgt,
				'parent_id' => $this->parent_id,
				'created_at' => $this->created_at,
				'updated_at' => $this->updated_at,
				'original_url' => $this->original_url,
				'preview_url' => $this->preview_url,
			],
			'urls' => $urls
		];
	}
}


//{
//	"id": 20,
//	"model_type": "App\\Models\\Block",
//	"model_id": 10,
//	"uuid": "8347e191-4064-41a5-904b-3c40d5a081e3",
//	"collection_name": "sliders",
//	"name": "загруженное (2)",
//	"file_name": "zagruzennoe-2.png",
//	"mime_type": "image/png",
//	"disk": "media",
//	"conversions_disk": "media",
//	"size": 1006607,
//	"manipulations": [],
//	"custom_properties": [],
//	"generated_conversions": {
//		"thumb": true,
//		"slide": true
//	},
//	"responsive_images": [],
//	"order_column": 3,
//	"_lft": 1,
//	"_rgt": 2,
//	"parent_id": null,
//	"created_at": "2022-07-12T11:22:40.000000Z",
//	"updated_at": "2022-07-12T11:22:40.000000Z",
//	"original_url": "http://laravel-simple-preset.74.la/media/20/zagruzennoe-2.png",
//	"preview_url": ""
//}
