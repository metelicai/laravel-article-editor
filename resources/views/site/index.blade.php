@extends('site.template')

@section('page.title', 'Главная')
@section('page.description', '')
@section('page.keywords', '')

@section('page.content')

{{-- <EditorJS></EditorJS> --}}
{{-- <br> --}}
<Editor></Editor>
{{-- <quill-editor></quill-editor> --}}
{{-- <br> --}}
{{-- <sun-editor></sun-editor> --}}
<br>

{{-- <PDFViewer pdf-url="/pdf/testpdf.pdf"></PDFViewer> --}}

{{-- <iframe src="https://docs.google.com/gview?url=http://premierstomatology.ru/pdf/warranty-statement.pdf&embedded=true" style="width: 100%; height: 90vh;"></iframe> --}}
{{-- <iframe src="http://premierstomatology.ru/pdf/warranty-statement.pdf#toolbar=0" style="width: 100%; height: 90vh;"></iframe> --}}
@stop
