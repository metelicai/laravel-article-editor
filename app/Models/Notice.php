<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
	use HasFactory;

	protected $fillable = [
		'type',
		'content',
		'is_read',
	];

	protected $casts = [
		'is_read' => 'boolean',
	];
}
