<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class LimitController extends Controller
{
	public function show() {
		$bytes = get_max_filesize();

		return response()->json([
			'data' => [
				'max_file_uploads' => (int)ini_get('max_file_uploads'),
				'upload_max_filesize' => $bytes,
				'upload_max_filesize_string' => bytes_convert($bytes),
			]
		]);
	}
}
