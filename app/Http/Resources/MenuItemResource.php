<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MenuItemResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
	 */
	public function toArray($request) {
		$params = [];

		if(is_null($this->parent_id) && $this->_lft != 1) {
			$params = [ 'page' => $this->slug ];
		}

		return [
			'id' => $this->id,
			'name' => $this->name,
			'meta_title' => $this->meta_title,
			'meta_description' => $this->meta_description,
			'meta_keywords' => $this->meta_keywords,
			'slug' => $this->slug,
			'is_published' => $this->is_published,
			'is_show_in_menu' => $this->is_show_in_menu,
			'parent_id' => $this->parent_id,
			'left' => $this->_lft,
			'right' => $this->_rgt,
			'children' => new MenuItemCollection($this->children()->defaultOrder()->get()),
			'url' => route('site.pages', $params)
		];
	}
}
