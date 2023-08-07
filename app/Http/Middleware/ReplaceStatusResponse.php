<?php

namespace App\Http\Middleware;

use App\Services\ResponseConverterToJson;
use Closure;
use Illuminate\Http\Response;

class ReplaceStatusResponse
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  \Closure				 $next
	 *
	 * @return mixed
	 */
	public function handle($request, Closure $next) {
		/** @var Response $response */
		$response = $next($request);

		if ($request->acceptsJson() && !$request->acceptsHtml()) {
			return ResponseConverterToJson::replaceStatus($response);
		}

		return $response;
	}
}
