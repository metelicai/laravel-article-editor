<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
	public function show():Response {
		$pages = MenuItem::published()->defaultOrder()->get();

		return response()
			->view('site.sitemap', \compact('pages'))
			->header('Content-type', 'text/xml');
	}
}
