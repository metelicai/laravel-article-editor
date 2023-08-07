<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;

class PageController extends Controller
{
	public function show(MenuItem $page = null) {
		if(is_null($page)) {
			$page = MenuItem::published()->defaultOrder()->first();
		}

		if(!($page->is_published ?? false)) {
			abort(404);
		}

		// Если это первый элемент меню и на него зашли по слагу, то необходимо перенаправить на главную страницу
		if($page->_lft == 1 && is_null($page->parent_id) && request()->route()->hasParameter('page')) {
			return redirect()->route('site.pages');
		}

		$page->load([
			'blocks' => function ($query) {
				return $query->defaultOrder()->published();
			}
		]);

		return view('site.index', compact('page'));
	}
}
