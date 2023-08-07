<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Contact extends Model
{
	use HasFactory, NodeTrait;

	protected $fillable = [
		'name',
		'description',
		'phones',
		'emails',
		'address',
		'map',
		'schedule',
		'coordinates',
		'social_networks',
	];

	protected $casts = [
		'phones' => 'array',
		'emails' => 'array',
		'schedule' => 'array',
		'coordinates' => 'object',
		'social_networks' => 'array',
	];
}
