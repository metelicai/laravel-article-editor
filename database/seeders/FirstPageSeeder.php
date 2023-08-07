<?php

namespace Database\Seeders;

use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class FirstPageSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		if(MenuItem::count() == 0) {
			MenuItem::create([
				'name' => 'Главная страница',
				'meta_title' => env('APP_NAME'),
				'is_published' => true,
				'is_show_in_menu' => true,
				'slug' => null,
			]);
		}
	}
}
