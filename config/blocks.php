<?php

return [
	'types' => [
		[
			'name' => 'Обложка',
			'type' => 'cover',
		],
		[
			'name' => 'Форма заказа звонка',
			'type' => 'recall',
		],

		[
			'name' => 'Слайдер',
			'type' => 'slider',
		],
		[
			'name' => 'Галерея',
			'type' => 'gallery',
		],
		[
			'name' => 'Файлы',
			'type' => 'files',
		],
		[
			'name' => 'Текст',
			'type' => 'article',
		],
	],
	'conversions' => [
		'files' => [
			'performOnCollections' => 'files',
		],
		'thumb' => [
			'manipulations' => [
				'width' => 250,
				'height' => 250,
				'fit' => 'max'
			]
		],
		'slide' => [
			'performOnCollections' => 'sliders',
			'manipulations' => [
				'width' => 1280,
				'height' => 720,
				'fit' => 'crop',
			]
		],
		'gallery' => [
			'performOnCollections' => 'gallery',
			'manipulations' => [
				'width' => 500,
				'height' => 250,
				'fit' => 'crop',
			],
		],
		'cover' => [
			'performOnCollections' => 'cover',
			'manipulations' => [
				'width' => 798,
				'height' => 528,
				'fit' => 'crop',
			]
		],
		'recall' => [
			'performOnCollections' => 'recall',
			'singleFile' => true,
			'manipulations' => [
				'width' => 1920,
				'height' => 848,
				'fit' => 'crop',
			]
		],
	],
];
