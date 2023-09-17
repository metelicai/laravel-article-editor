<?php

use App\Http\Controllers\Api\ImageController;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->prefix('media')->group(function (Router $router) {

	$router->post('{media}/delete', 'MediaController@delete');

	$router->post('positioning', 'MediaController@positioning');
});

Route::prefix('image')->controller(ImageController::class)->group(function (Router $router) {
	$router->post('upload', 'upload');
});
