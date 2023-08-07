<?php

use App\Models\Contact;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Kalnoy\Nestedset\NestedSet;

class CreateContactsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('contacts', function (Blueprint $table) {
			$table->id();

			$table->string('name');

			$table->text('description')->nullable();

			$table->text('phones')->nullable();

			$table->text('emails')->nullable();

			$table->string('address')->nullable();

			$table->text('map')->nullable();

			$table->text('schedule')->nullable();

			$table->text('coordinates')->nullable();

			$table->text('social_networks')->nullable();

			NestedSet::columns($table);

			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('contacts');
	}
}
