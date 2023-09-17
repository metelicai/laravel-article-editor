<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageController extends Controller
{

	public function upload(Request $request)
	{
		$file = $request->file('file');

		return [
			'success' => true,
			'file' => [
				'id' => 123,
				'big' => 'https://placehold.co/600x400.jpg',
				'small' => 'https://placehold.co/300x200.jpg',
			]
		];
	}
}
