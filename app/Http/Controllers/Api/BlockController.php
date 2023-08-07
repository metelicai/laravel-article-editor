<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\Positioning;
use App\Http\Resources\BlockCollection;
use App\Http\Resources\BlockResource;
use App\Models\Block;
use App\Models\Media;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class BlockController extends Controller
{
	use Positioning;


	public function list(Request $request) {
		if(!$request->input('menu_item_id')) {
			abort(400, 'Не указан ключ пункта меню');
		}

		$blocks = Block
			::where('menu_item_id', $request->input('menu_item_id'))
			->when($request->input('filter.type'), function($query) use ($request) {
				return $query->where('type', $request->input('filter.type'));
			})
			->defaultOrder()
			->get();

		return new BlockCollection($blocks);
	}


	public function store(Request $request) {
		$menu_item_id = $request->input('menu_item_id');
		$data = $request->except('menu_item_id');
		$files = $request->file('files', []);
		$media_properties = $request->input('media_properties', []);
		$skip_media = $request->input('skip_media', []);
		$position_array = json_decode($request->input('position_images', '')) ?? [];

		$data['content'] = $data['content'] ?? '';

		$menu_item = MenuItem::find($menu_item_id);

		if($menu_item) {
			/** @var Block $block */
			$block = $menu_item->blocks()->create($data);

			foreach($files as $collection_name => $collection_files) {
				if(is_array($collection_files)) {
					foreach($collection_files as $sub_collection_index => $sub_collection_files) {
						if(is_array($sub_collection_files)) {
							$this->storeSubCollestionImages($block, $sub_collection_files, $collection_name, $sub_collection_index, $skip_media, $position_array);
						} elseif (!in_array($sub_collection_files->getClientOriginalName(), $skip_media)) {
							$media = $this->storeImage($block, $sub_collection_files, $collection_name);
							$this->replaceNameMedia($position_array, $sub_collection_files->getClientOriginalName(), $media->id);
						} elseif (in_array($sub_collection_files->getClientOriginalName(), $skip_media)) {
							$this->removePositionItem($position_array, $sub_collection_files->getClientOriginalName());
						}
					}
				} elseif (!in_array($collection_files->getClientOriginalName(), $skip_media)) {
					/** @var Media $media */
					$media = $this->storeImage($block, $collection_files, $collection_name);
					$this->replaceNameMedia($position_array, $collection_files->getClientOriginalName(), $media->id);
				}
			}

			foreach($media_properties as $media_id => $properties) {
				/** @var Media $media */
				$media = Media::find($media_id);

				foreach ($properties as $name => $property) {
					$media->setCustomProperty($name, $property);
				}

				$media->save();
			}

			$this->updatePosition($position_array);
		}

		return new BlockResource($block);
	}


	public function show(Block $block) {
		return new BlockResource($block);
	}


	public function update(Request $request, Block $block) {
		$delete_media = $request->input('delete_media', []);
		$data = $request->except([ 'menu_item_id', 'type', 'media_properties' ]);
		$files = $request->file('files', []);
		$media_properties = $request->input('media_properties', []);
		$skip_media = $request->input('skip_media', []);
		$position_array = json_decode($request->input('position_images', '')) ?? [];

		$data['content'] = $data['content'] ?? '';

		$block->update($data);

		foreach($files as $collection_name => $collection_files) {
			if(is_array($collection_files)) {
				foreach($collection_files as $sub_collection_index => $sub_collection_files) {
					if(is_array($sub_collection_files)) {
						$this->storeSubCollestionImages($block, $sub_collection_files, $collection_name, $sub_collection_index, $skip_media, $position_array);
					} elseif (!in_array($sub_collection_files->getClientOriginalName(), $skip_media)) {
						$media = $this->storeImage($block, $sub_collection_files, $collection_name);
						$this->replaceNameMedia($position_array, $sub_collection_files->getClientOriginalName(), $media->id);
					} elseif (in_array($sub_collection_files->getClientOriginalName(), $skip_media)) {
						$this->removePositionItem($position_array, $sub_collection_files->getClientOriginalName());
					}
				}
			} elseif (!in_array($collection_files->getClientOriginalName(), $skip_media)) {
				/** @var Media $media */
				$media = $this->storeImage($block, $collection_files, $collection_name);
				$this->replaceNameMedia($position_array, $collection_files->getClientOriginalName(), $media->id);
			}
		}

		foreach($media_properties as $media_id => $properties) {
			/** @var Media $media */
			$media = Media::find($media_id);

			foreach ($properties as $name => $property) {
				$media->setCustomProperty($name, $property);
			}

			$media->save();
		}

		$this->updatePosition($position_array);

		foreach($delete_media as $media_id) {
			if($media_id) {
				$media = Media::find($media_id);
				$media->delete();
			}
		}

		return new BlockResource($block);
	}


	public function delete(Block $block) {
		$block->delete();

		return null;
	}


	public function positioning(Request $request) {
		$this->setPositions($request, Block::class);

		$block = Block::find($request->get('moved'));

		$blocks = Block
			::where('menu_item_id', $block->menu_item_id)
			->defaultOrder()
			->get();

		return new BlockCollection($blocks);
	}


	protected function replaceNameMedia(array &$positionArray, string $filename, int $mediaId) {
		foreach ($positionArray as $index => $position) {
			if ($position->id == $filename) {
				$positionArray[$index]->id = $mediaId;
			}

			if ($position->prevId == $filename) {
				$positionArray[$index]->prevId = $mediaId;
			}
		}
	}


	protected function updatePosition(array $positionArray) {
		foreach ($positionArray as $position) {
			/** @var Media $prev_media */
			$prev_media = Media::find($position->prevId);
			/** @var Media $media */
			$media = Media::find($position->id);

			if ($media && $prev_media) {
				$media->insertAfterNode($prev_media);
			} elseif($media) {
				$next_media = $media->siblings()->defaultOrder()->first();
				if($next_media) {
					$media->insertBeforeNode($next_media);
				}
			}
		}
	}


	protected function removePositionItem(array &$positionArray, string $filename) {
		foreach($positionArray as $index => $item) {
			if($item->id == $filename) {
				if(key_exists($index + 1, $positionArray)) {
					$positionArray[$index + 1]->prevId = $positionArray[$index - 1]->id ?? null;
				}
				unset($positionArray[$index]);
			}
		}
	}


	protected function storeImage(Block &$block, UploadedFile $file, string $collectionName) {
		return $block
			->addMedia($file)
			->setFileName(get_trans_name_file($file))
			->toMediaCollection($collectionName);
	}


	protected function storeSubCollestionImages(Block &$block, array $files, string $collectionName, string $subCollectionName, array $skipMedia, array &$positionArray) {
		foreach($files as $file) {
			if(!in_array($file->getClientOriginalName(), $skipMedia)) {
				$media = $block
					->addMedia($file)
					->setFileName(get_trans_name_file($file))
					->withAttributes(['sub_collection_name' => $subCollectionName])
					->toMediaCollection($collectionName);

				$this->replaceNameMedia($positionArray, $file->getClientOriginalName(), $media->id);
			}
		}
	}
}
