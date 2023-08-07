@extends('site.template')

@section('page.title', 'Главная')
@section('page.description', '')
@section('page.keywords', '')

@section('page.content')

	@include('site.helpers')

	{{-- @foreach ($page->blocks as $block)
		@include('site.page-blocks.' . $block->type, compact('block'))
	@endforeach --}}

@stop
