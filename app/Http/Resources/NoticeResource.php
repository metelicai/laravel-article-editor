<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NoticeResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
	 */
	public function toArray($request) {
		return [
			'id' => $this->id,
			'type' => $this->type,
			'content' => $this->content,
			'is_read' => $this->is_read,
			'created_at' => $this->created_at,
			'type_name' => config('notices.types.' . $this->type) ?? ''
		];
	}
}
