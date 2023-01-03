## Laravel Vue Tailwind Starter Kit

This is a starter kit for Laravel 9 with Vue 3 and Tailwind CSS 3. It includes a basic Vue 3 component and Tailwind CSS 3 styles to get you started.

![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)

### Features

- **Laravel 9.***
- **Tailwind 3.2 Ready and Loaded**
    - @tailwindcss/typography
    - @tailwindcss/forms
    - Dark mode ready
    - All variants enabled by default
- **Vue 3, Vite, Vue-Router, Vue-Axios - Ready**

## Usage

Just [download the latest ZIP release](https://github.com/falconsw/laravel-vue-tailwind-ready/releases) of the repository and init the laravel project

```bash
npm install #install npm dependencies

npm run dev #compile assets
```

```bash
composer install #install php dependencies
```

## Assets

```bash
resources/
┣ css/
┃ ┗ app.css # Import tailwind classes
┣ js/
┃ ┣ components/
┃ ┃ ┗ App.vue # Default App.vue for initial Vue config
┃ ┗ app.js # Vue init & configuration
```

Vite configuration

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js'
        ]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                }
            }
        })
    ],
});


```

### Libs Used

- [Laravel](https://laravel.com)
- [TailwindCss](https://tailwindcss.com)
- [Vue.js](https://vuejs.org/)
- [Vue-Router](https://router.vuejs.org/)
- [Vue-Axios](https://www.npmjs.com/package/vue-axios)

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
