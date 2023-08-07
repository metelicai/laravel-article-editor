<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
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
			'name' => $this->name,
			'description' => $this->description,
			'phones' => $this->phones,
			'emails' => $this->emails,
			'address' => $this->address,
			'map' => $this->map,
			'schedule' => $this->schedule,
			'coordinates' => [
				'latitude' => $this->coordinates->latitude ?? '',
				'longitude' => $this->coordinates->longitude ?? '',
			],
			'socialNetworks' => $this->social_networks,
		];
	}
}
