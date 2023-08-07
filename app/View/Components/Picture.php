<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Picture extends Component
{
	/**
	 * Create a new component instance.
	 */
	public function __construct(
		public array $sources = [],
	) {
		//
	}

	/**
	 * Whether the component should be rendered
	 */
	public function shouldRender(): bool
	{
		return count($this->sources) > 0;
	}

	/**
	 * Get the view / contents that represent the component.
	 */
	public function render(): View|Closure|string
	{
		return view('site.components.picture');
	}


	public function getMediaQuery(array $source)
	{
		$min_width = isset($source[1]) ? '(min-width: ' . $source[1] . 'px)' : null;
		$max_width = isset($source[2]) ? '(max-width: ' . $source[2] . 'px)' : null;
		$and = $min_width && $max_width ? ' and ' : null;

		return $min_width . $and . $max_width;
	}
}
