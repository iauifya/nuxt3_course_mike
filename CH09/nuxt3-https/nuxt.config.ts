// https://nuxt.com/docs/api/configuration/nuxt-config

const config = {
    devServer: {
        https: {
            key: './https/localhost+3-key.pem',
            cert: './https/localhost+3.pem'
        }
    },
    "vite": {
        "server": {
            "proxy": {},
        },
    },
}
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development') {
    config.vite.server.proxy = {
        '/VsWeb/api': {
            "target": 'https://www.vscinemas.com.tw/',
            "changeOrigin": true,
        },
    }
    console.log(config.vite.server.proxy)
}

export default defineNuxtConfig(config)

