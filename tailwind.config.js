module.exports = {
    mode: 'jit',
    content: [
        './pages/*.vue',
        './components/*.vue',
        './layouts/*.vue',
        'error.vue',
        'app.vue'
    ],
    theme: {
        container: {
            center: true,
            padding: {
                "DEFAULT": '1rem',
                "xl": '4rem',
            },
        },
        extend: {
            colors: {
                'grey' : '#292A2A',
            },
        }
    },

    plugins: [],
}