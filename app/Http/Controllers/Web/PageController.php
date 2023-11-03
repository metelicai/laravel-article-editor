<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PageController extends Controller
{
	public function show(MenuItem $page = null)
	{
		if (is_null($page)) {
			$page = MenuItem::published()->defaultOrder()->first();
		}

		if (!($page->is_published ?? false)) {
			abort(404);
		}

		// Если это первый элемент меню и на него зашли по слагу, то необходимо перенаправить на главную страницу
		if ($page->_lft == 1 && is_null($page->parent_id) && request()->route()->hasParameter('page')) {
			return redirect()->route('site.pages');
		}

		$page->load([
			'blocks' => function ($query) {
				return $query->defaultOrder()->published();
			}
		]);

		return view('site.index', compact('page'));
	}


	public function getPdf(Request $request)
	{
		if ($request->ajax()) {
			// $media_id = $request->input('id');
			$path = 'pdf/testpdf.pdf'; // Get url from $media_id

			if (true) { // if media finded
				return file_get_contents(storage_path('app/' . $path));
			}
		}

		return abort(404);
	}
}
