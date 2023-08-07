<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\Positioning;
use App\Http\Resources\MenuItemCollection;
use App\Http\Resources\MenuItemResource;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
	use Positioning;


	public function list(MenuItem $parent = null) {
		if($parent) {
			$menu_items = $parent->children()->defaultOrder()->get();
		} else {
			$menu_items = MenuItem::defaultOrder()->whereIsRoot()->get();
		}

		return new MenuItemCollection($menu_items);
	}


	public function store(Request $request) {
		$data = $request->except('parentId');
		$parent_id = $request->input('parentId');

		if(is_null($data['slug'])) {
			$data['slug'] = '';
		}

		if($parent_id) {
			$parent = MenuItem::find($parent_id);
			$menu_item = $parent->children()->create($data);
		} else {
			$menu_item = MenuItem::create($data);
		}

		return new MenuItemResource($menu_item);
	}


	public function show(MenuItem $menuItem) {
		return new MenuItemResource($menuItem);
	}


	public function update(Request $request, MenuItem $menuItem) {
		$data = $request->all();

		if(is_null($data['slug'])) {
			$data['slug'] = '';
		}

		$menuItem->update($data);

		return new MenuItemResource($menuItem);
	}


	public function delete(MenuItem $menuItem) {
		$redirect_menu_item = $menuItem->siblings()->defaultOrder('desc')->first();

		if(!$redirect_menu_item) {
			$redirect_menu_item = $menuItem->parent()->first();
		}

		$menuItem->delete();

		if($redirect_menu_item) {
			return new MenuItemResource($redirect_menu_item);
		}

		return null;
	}


	public function positioning(Request $request) {
		$this->setPositions($request, MenuItem::class);

		return $this->list();
	}
}
