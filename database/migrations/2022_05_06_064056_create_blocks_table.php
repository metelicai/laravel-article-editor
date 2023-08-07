<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Kalnoy\Nestedset\NestedSet;

class CreateBlocksTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('blocks', function (Blueprint $table) {
			$table->id();

			$table->string('type');

			$table->json('content');

			$table->boolean('is_published')->index();

			$table->unsignedBigInteger('menu_item_id')->index();

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
		Schema::dropIfExists('blocks');
	}
}
