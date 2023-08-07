<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserContoller
{
	public function list() {
		$user = Auth::user();

		$users = User
			::when($user->id != 1, function($query) {
				return $query->where('id', '!=', 1);
			})
			->get();

		return new UserCollection($users);
	}


	public function show(User $user) {
		$current_user = Auth::user();

		if($current_user->id != 1 && $user->id == 1) {
			abort(404);
		}

		return [
			'user' => new UserResource($user)
		];
	}


	public function current() {
		$user = Auth::user();

		return [
			'user' => new UserResource($user)
		];
	}


	public function update(Request $request, User $user) {
		if($request->input('password') != $request->input('confirmPassword')) {
			abort(400, 'Пароли не совпадают');
		}

		$user->update($request->only(['email', 'password']));

		return [
			'user' => new UserResource($user)
		];
	}
}
