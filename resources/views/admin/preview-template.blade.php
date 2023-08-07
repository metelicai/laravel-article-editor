<!doctype html>
<html lang="ru">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, minimum-scale=1.0">
	<meta name="description" content="@yield('page.description')" />
	<meta name="keywords" content="@yield('page.keywords')" />
	<title>@yield('page.title')</title>

	<link rel="shortcut icon" href="{{ asset('img/layout/favicon.svg') }}">
	<link type="text/css" rel="stylesheet" href="{{ mix('css/style.css', 'assets/site') }}">
	@yield('page.custom_tags')

</head>

<body class="layout">
	<div id="app">
		@include('site.blocks.modals.recall-notice')

		<main id="main" class="layout__main">
			@include('site.page-blocks.' . $block->type, [ 'block' => $block, 'isPreview' => true ])
		</main>
	</div>

	<script src="{{ mix('js/manifest.js', 'assets/site') }}"></script>
	<script src="{{ mix('js/vendor.js', 'assets/site') }}"></script>
	<script src="{{ mix('js/app.js', 'assets/site') }}"></script>
	<script src="{{ mix('js/preview-resize.js', 'assets/admin') }}"></script>
</body>

</html>
