<?php

return [
	'simple' => true,
	'fields' => [
		'phones' => [
			'main' => true,
			'fields' => [
				'name' => false,
				'description' => false,
			]
		],
		'emails' => [
			'main' => true,
			'fields' => [
				'name' => false,
				'description' => true,
			]
		],
		'address' => false,
		'map_code' => false,
		'schedule' => false,
		'coords' => false,
		'social_networks' => [
			'main' => false,
			'fields' => [
				'name' => true,
			]
		],
		'description' => true,
	],
	'social_networks' => [
		[
			'type' => 'vk',
			'name' => 'VK'
		],
		[
			'type' => 'ok',
			'name' => 'Одноклассники'
		],
		[
			'type' => 'instagram',
			'name' => 'Instagram'
		],
		[
			'type' => 'facebook',
			'name' => 'Facebook'
		],
	]
];
