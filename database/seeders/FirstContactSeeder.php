<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class FirstContactSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		if(Contact::count() == 0) {
			Contact::create([
				'name' => 'Главный офис'
			]);
		}
	}
}
