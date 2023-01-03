@extends('layout')

@section('meta-title') Home - Laravel Tailwind Boilerplate Vue Ready @endsection

@push('css')

@endpush

@section('content')
    <div class="relative max-w-4xl h-screen mx-auto justify-center mb-12 flex flex-col">
        <div id="app">
            <app-component></app-component>
        </div>
    </div>
@endsection

@push('js')
    <script>
    </script>
@endpush
