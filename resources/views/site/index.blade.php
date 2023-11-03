@extends('site.template')

@section('page.title', 'Главная')
@section('page.description', '')
@section('page.keywords', '')

@section('page.content')

{{-- <editor-block></editor-block> --}}
<br>

{{-- <PDFViewer pdf-url="/pdf/testpdf.pdf"></PDFViewer> --}}
<PDFViewer pdf-url="/pdf/14422"></PDFViewer>

{{-- <iframe src="https://docs.google.com/gview?url=http://premierstomatology.ru/pdf/warranty-statement.pdf&embedded=true" style="width: 100%; height: 90vh;"></iframe> --}}
{{-- <iframe src="http://premierstomatology.ru/pdf/warranty-statement.pdf#toolbar=0" style="width: 100%; height: 90vh;"></iframe> --}}
@stop
