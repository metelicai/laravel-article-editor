<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Link extends Component
{
	/**
	 * Create a new component instance.
	 */
	public function __construct(
		public string $color = 'primary',
		public bool $button = false,
		public bool $ghost = false,
		public string|null $icon = null,
		public bool $iconRight = false,
	) {
		//
	}

	/**
	 * Get the view / contents that represent the component.
	 */
	public function render(): View|Closure|string
	{
		return view('site.components.link');
	}
}
