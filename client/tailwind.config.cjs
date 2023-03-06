/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    200: "#635985",
                    300: "#443C68",
                    500: "#393053",
                    700: "#18122B",
                },
                // ...
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
