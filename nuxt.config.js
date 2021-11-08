export default {
    head: {
        titleTemplate: 'Porto - Multi-purpose Ecomerce template with Vue.js',
        title: 'Porto - Multi-purpose Ecomerce template with Vue.js',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Porto - Multi-purpose eCommerce Vue Template'
            },
            {
                name: 'author',
                content: 'd-themes'
            },
            {
                name: 'keywords',
                content: 'Porto Vue eCommerce Template'
            },
            {
                name: 'app-mobile-web-app-title',
                content: 'Porto'
            },
            {
                name: 'application-name',
                content: 'Porto Vue eCommerce Template',
            },
            {
                name: 'msapplication-TileColor',
                content: '#cc9966'
            },
            {
                name: 'msapplication-config',
                content: '/images/icons/browserconfig.xml'
            }
        ],
        link: [
            {
                rel: 'dns-prefetch',
                href: "//fonts.googleapis.com"
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href:
                    './images/icons/favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href:
                    './images/icons/favicon.ico'
            },
            {
                rel: 'shortcut icon',
                href:
                    './images/icons/favicon.ico'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href:
                    './images/icons/apple-touch-icon.png'
            },
            {
                rel: 'mask-icon',
                color: '#666666',
                href:
                    './images/icons/safari-pinned-tab.svg'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700%7CPoppins:300,400,500,600,700'
            }
        ]
    },

    css: [
        '~/node_modules/swiper/swiper-bundle.css',
        //'~/node_modules/swiper/dist/css/swiper.css',
        '~/static/css/animate.min.css',
        '~/static/css/bootstrap.min.css',
        '~/static/css/porto-icons.min.css',
        '~/static/vendor/fontawesome-free/css/all.min.css',
        '~/static/vendor/simple-line-icons/css/simple-line-icons.min.css',
        '~/static/sass/style.scss'
    ],

    plugins: [
        { src: '~/plugins', ssr: false },
        { src: '~/plugins/localstorage.js', ssr: false },
        { src: '~/plugins/filters.js', ssr: false },
        { src: '~/plugins/directives/animate.js', ssr: false },
        { src: '~/plugins/directives/parallax.js', ssr: false },
        { src: '~/plugins/lightbox.js', ssr: false }
    ],

    buildModules: [
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/dotenv'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        proxy: true,
        retry: { retries: 3 },
    },

    proxy: [
        ['/api/products', { target: `${process.env.TYPESENSE_HOST}`, pathRewrite: { '^/api/products': `/` }, headers: {'X-TYPESENSE-API-KEY': `${process.env.TYPESENSE_TOKEN}`} }],
        ['/api/slapi2', { target: `${process.env.TYPESENSE_HOST}/${process.env.SLAPI_PATH}`, pathRewrite: { '^/api/slapi2': `/` }, headers: {'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`} }],
        ['/api/back', { target: `${process.env.BACKEND_HOST}`, pathRewrite: { '^/api/back': `/` }, headers: {'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`} }],
    ],

    router: {
        // base: '/vue/porto/demo-4/',
        linkActiveClass: '',
        linkExactActiveClass: 'active'
    },

    build: {
        extend(config, ctx) { },
        transpile: ['vue-instantsearch', 'instantsearch.js/es'],
    },


    /* generate: {
        publicPath: "http://d-themes.com/vue/porto/demo-4/",
        subFolders: true,
        fallback: '404.html'
    }, */

    // ssr: false,
    // loading: false,
    // loadingIndicator: false,
    // pageTransition: 'page',

    generate: {
        dir: 'dist'
    } ,

    server: {
        port: 4000,
        host: 'localhost'
    }
};
