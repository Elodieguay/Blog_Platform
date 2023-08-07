import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      
    ],

    theme: {
        extend: {
            colors:{
                'home': '#182625'
            },
           
            fontFamily: {
                'presse': ['Stardos Stencil', 'cursive'],
                // 'autre': [...defaultTheme.fontFamily.sans],
            },
            backgroundImage : {
                'word':  "url('/resources/js/Assets/press.png')",
            }
           
        },
    },

    plugins: [forms],
};
