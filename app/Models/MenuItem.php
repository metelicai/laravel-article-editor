<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Kalnoy\Nestedset\NodeTrait;

class MenuItem extends Model
{
	use HasFactory, NodeTrait;

	protected $fillable = [
		'name',
		'meta_title',
		'meta_description',
		'meta_keywords',
		'slug',
		'is_published',
		'is_show_in_menu',
	];

	protected $casts = [
		'is_published' => 'boolean',
		'is_show_in_menu' => 'boolean',
	];


	public function blocks(): HasMany {
		return $this->hasMany(Block::class, 'menu_item_id');
	}


	public function scopePublished($query) {
		return $query->where('is_published', true);
	}


	/**
	 * Подменяет собой метод по умолчанию.
	 * Необходимо для корректого возврашения имени ключа для роута
	 *
	 * @return string имя ключа
	 *
	 * @throws \Error
	 */
	public function getRouteKeyName() {
		$route_uri = Route::getCurrentRoute()->uri();

		if (mb_stripos($route_uri, 'api') === false) {
			return 'slug';
		}

		return parent::getRouteKeyName();
	}


	protected static function boot() {
		static::saving(function(self $menuItem) {
			$slug = $menuItem->attributes[ 'slug' ] ?? null;

			if (strlen($slug) == 0) {
				$slug = $menuItem->attributes['name'];
				$id = $menuItem->id;

				if (!$id) {
					$id = Arr::first(
						DB::select(
							'SHOW TABLE STATUS FROM `'
							. env('DB_DATABASE')
							. '` LIKE \''
							. $menuItem->table
							. '\''
						)
					)->Auto_increment;
				}

				$slug = $id . '-' . $slug;

			}

			$menuItem->slug = Str::slug($slug);
		});
		parent::boot();
	}
}
