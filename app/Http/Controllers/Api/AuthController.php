<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController
{
	public function getToken(Request $request) {
		$user = User::where('name', $request->input('name'))->first();

		if ($user && Hash::check($request->input('password'), $user->password)) {
			return [
				'token' => $user->createToken($user->name)
			];
		}

		return response()->json(['validError' => 'Не правильный логин и/или пароль'], 400);
	}


	public function checkToken(Request $request) {
		return response()->json([ 'check' => $request->user()->exists() ?? false ]);
	}


	public function forgetToken() {
		auth()->user()->currentAccessToken()->delete();

		return response()->json(null, 200);
	}


	public function forgotTokens() {
		auth()->user()->tokens()->delete();

		return response()->json(null, 200);
	}
}
