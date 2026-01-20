/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'teal': {
                    600: '#006080',
                    700: '#004a5f',
                },
                'coral': '#FF4D4D',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.6s ease-out forwards',
                'bounce': 'bounce 1s infinite',
                'scroll-right': 'scroll-right 30s linear infinite',
                'scroll-left': 'scroll-left 25s linear infinite reverse',
            },
            keyframes: {
                fadeUp: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                },
                scaleIn: {
                    from: {
                        opacity: '0',
                        transform: 'scale(0.95)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
                'scroll-right': {
                    '0%': {
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        transform: 'translateY(calc(-100% / 2))',
                    },
                },
                'scroll-left': {
                    '0%': {
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        transform: 'translateY(calc(-100% / 2))',
                    },
                },
            },
        },
    },
    plugins: [],
}
