<?php

use Illuminate\Support\Facades\Route;

if(app()->environment() != 'production') {
	Route::get('front/{view?}', function(string $view = null) {
		return view('site.' . ($view ?? 'index'));
	});
}

foreach (glob(base_path("routes/site/*.php")) as $filename) {
	include $filename;
}
