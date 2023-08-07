<?php

namespace App\Models;

use Chunker\Base\Libs\ConversionsManager;
use Kalnoy\Nestedset\NodeTrait;
use Spatie\Glide\GlideImage;
use Spatie\MediaLibrary\MediaCollections\Models\Media as BaseMedia;

/**
 * Расширение модели *Spatie\MediaLibrary\Media*
 * для добавления *NodeTrait* и фильтрации атрибутов
 *
 * @package Chunker\Base\Commands
 */
class Media extends BaseMedia
{
	use NodeTrait;

	/** @var string имя таблицы */
	protected $table = 'media';


	/**
	 * Метод необходим для фильтрации элементов
	 *
	 * @return array
	 */
	protected function getScopeAttributes(){
		return [ 'model_id', 'model_type', 'collection_name', 'sub_collection_name' ];
	}
}
