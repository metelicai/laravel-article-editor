<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		if(User::count() == 0) {
			User::create([
				'name' => '2i',
				'email' => 'mail@studio2i.ru',
				'password' => '000000'
			]);

			User::create([
				'name' => 'admin',
				'email' => 'admin@admin.ru',
				'password' => '000000'
			]);
		}
	}
}
