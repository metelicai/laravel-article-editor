<?php

use Illuminate\Support\Facades\Route;

Route::get('sitemap.xml', 'SitemapController@show')->name('site.sitemap');

Route::get('{page?}', 'PageController@show')->name('site.pages');
