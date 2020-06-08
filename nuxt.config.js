export default {
    // mode: "universal",
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: ["@/assets/css/main.css"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["~/plugins/vuebar", "@/plugins/google-maps"],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    env: {
        VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    },
    modules: [
        // Doc: https://bootstrap-vue.js.org
        "bootstrap-vue/nuxt",
        "@nuxtjs/axios",
        "@nuxtjs/dotenv",
        "@nuxtjs/proxy",
        "nuxt-user-agent"
    ],
    axios: {
        // baseURL: "http://angliss-layout.emo.com.hk/"
        // proxyHeaders: false
    },
    proxy: {
        "/api": {
            target: "http://angliss-layout.emo.com.hk/",
            pathRewrite: {
                "^/api": "/"
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        // vendor: ["vuebar"],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            if (ctx) {
                config.devtool = "source-map";
            }
        }
    },
    generate: {
        routes: [
            "/about-us/",
            "/about-us/who-are-we",
            "/about-us/what-do-we-do",
            "/about-us/quality-control",
            "/about-us/our-history",
            "/about-us/social-responsibility",
            "/about-us/affiliates",
            "/media/event",
            "/media/foodtalk",
            "/media/video",
            "/media/catalogues",
            "/contact-us/",
            "/wishlist/"
        ]
    },

    router: {
        // base: "/angliss/"
    }
};