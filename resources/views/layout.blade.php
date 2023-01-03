<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @stack('metas')

    <title>@if (trim($__env->yieldContent('meta-title')))@yield('meta-title')@else Laravel Vue Tailwind Ready @endif
    </title>

    @vite(['resources/js/app.js', 'resources/css/app.css'])

    @stack('css')
</head>
<body>

@yield('content')

@stack('js')
</body>
</html>
