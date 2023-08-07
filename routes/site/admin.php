<?php

use App\Models\Block;
use Illuminate\Support\Facades\Route;

Route::get('admin/blocks-preview/{block}', function(Block $block) {

	return view('admin.preview-template', compact('block'));

})->name('admin.blocks-preview');

Route::get('admin{path}', function () {

    return view('admin.admin');

})->where('path', '[\s\S]*');
