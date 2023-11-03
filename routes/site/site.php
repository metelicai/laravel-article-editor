<?php

use Illuminate\Support\Facades\Route;

Route::get('sitemap.xml', 'SitemapController@show')->name('site.sitemap');

Route::get('/pdf/{id}', 'PageController@getPdf');

Route::get('{page?}', 'PageController@show')->name('site.pages');
