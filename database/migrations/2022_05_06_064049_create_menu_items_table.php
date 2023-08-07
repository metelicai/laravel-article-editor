<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Kalnoy\Nestedset\NestedSet;

class CreateMenuItemsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('menu_items', function (Blueprint $table) {
			$table->id();

			$table->string('name');

			$table->string('meta_title')->nullable();

			$table->string('meta_description')->nullable();

			$table->string('meta_keywords')->nullable();

			$table->string('slug')->unique();

			$table->boolean('is_published')->index();

			$table->boolean('is_show_in_menu')->index();

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
		Schema::dropIfExists('menu_items');
	}
}
