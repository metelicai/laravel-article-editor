<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NoticeCollection;
use App\Models\Notice;
use Carbon\Carbon;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
	public function list(Request $request) {
		$type = $request->input('filter.type');
		$date_from = $request->input('filter.dateFrom');
		$date_to = $request->input('filter.dateTo');

		$notices = Notice
			::when($date_from, function($query) use ($date_from) {
				return $query->where('created_at', '>=', Carbon::parse($date_from)->startOfDay());
			})
			->when($date_to, function($query) use ($date_to) {
				return $query->where('created_at', '<=', Carbon::parse($date_to)->endOfDay());
			})
			->when($type != 'all', function($query) use ($type) {
				if($type == 'none') {
					return $query->whereNull('type');
				}

				return $query->where('type', $type);
			})
			->when($request->input('filter.read') != 'all', function($query) use ($request) {
				if($request->input('filter.read') == 'read') {
					return $query->where('is_read', true);
				}

				return $query->where('is_read', false);
			})
			->orderBy('is_read')
			->latest()
			->forPage($request->input('page', 1))
			->paginate();

		$types = [];

		foreach(config('notices.types', []) as $type => $name) {
			$types[] = compact('type', 'name');
		}

		return [
			'data' => [
				'notices' => new NoticeCollection($notices),
				'meta' => $this->getMeta($notices),
				'types' => $types
			]
		];
	}


	public function store(Request $request) {
		$notice = Notice::create($request->except('is_read'));

		return '';
	}


	public function read(Notice $notice) {
		$notice->update([
			'is_read' => true
		]);

		return '';
	}


	public function delete(Notice $notice) {
		$notice->delete();

		return '';
	}


	protected function getMeta($notices) {
		return [
			'currentPage' => $notices->currentPage(),
			'lastPage' => $notices->lastPage(),
			'perPage' => $notices->perPage(),
			'total' => $notices->total()
		];
	}
}
