<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\Positioning;
use App\Http\Resources\MediaCollection;
use App\Models\Media;
use Illuminate\Http\Request;

class MediaController extends Controller
{
	use Positioning;


	public function delete(Media $media) {
		$media->delete();

		return null;
	}


	public function positioning(Request $request) {
		$this->setPositions($request, Media::class);

		$media = Media::find($request->get('moved'));

		$blocks = Media
			::where('model_type', $media->model_type)
			->where('model_id', $media->model_id)
			->defaultOrder()
			->get();

		return new MediaCollection($blocks);
	}
}
