<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Kalnoy\Nestedset\NodeTrait;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Block extends Model implements HasMedia
{
	use HasFactory, InteractsWithMedia, NodeTrait;

	protected $fillable = [
		'type',
		'content',
		'is_published',
	];

	protected $casts = [
		'content' => 'object',
		'is_published' => 'boolean',
	];


	public function menuItem(): BelongsTo
	{
		return $this->belongsTo(MenuItem::class, 'menu_item_id');
	}


	public function registerMediaCollections(): void
	{
		foreach (config('blocks.conversions', []) as $properties) {
			if ($properties['performOnCollections'] ?? false) {
				$conversion = $this->addMediaCollection($properties['performOnCollections']);
			}

			if (($conversion ?? false) && ($properties['singleFile'] ?? false)) {
				$conversion->singleFile();
			}
		}
	}


	public function registerMediaConversions(Media $media = null): void
	{
		foreach (config('blocks.conversions', []) as $convertion_name => $properties) {
			if (!key_exists('manipulations', $properties)) {
				continue;
			}

			$manipulations = [$properties['manipulations']];
			$convertion = $this
				->addMediaConversion($convertion_name)
				->setManipulations(new Manipulations($manipulations));

			if ($properties['performOnCollections'] ?? false) {
				$convertion->performOnCollections($properties['performOnCollections']);
			}
		}
	}


	public function scopePublished($query)
	{
		return $query->where('is_published', true);
	}

	protected function getScopeAttributes()
	{
		return ['menu_item_id'];
	}
}
