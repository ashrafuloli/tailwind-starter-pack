# Tailwind

<aside>
💡 make a folder and run this command

</aside>

```jsx
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

<aside>
💡 make root folder and files

</aside>

- index.html
- index.css
- assets
    - css
        - main.css
    - js
        - main.js

```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    html {
        font-family: 'DM Sans', sans-serif;
        color: #594D6D;
        letter-spacing: -0.4px;
    }
    h1,h2,h3,h4,h5,h6{
        color: #12022F;
    }
}

```

<aside>
💡 write scripts

</aside>

```jsx
"scripts": {
    "build": "tailwindcss -i ./index.css -o ./assets/css/main.css",
    "start": "tailwindcss -i ./index.css -o ./assets/css/main.css --watch"
}
```

<aside>
💡 config tailwind file

</aside>

```jsx
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: ["./*.html", "./assets/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1400px',
            },
            colors: {
                primary: '#34CC9C',
            },
            fontFamily: {
                'sans': ["'DM Sans', sans-serif", "'Caveat', sans-serif", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
```
