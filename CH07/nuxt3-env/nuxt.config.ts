// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // "runtimeConfig": {
    //     "token": '', //只能在server端被讀取
    //     "public": { //在client端被讀取到
    //         "apiUrl": '',
    //     }
    // }
    "vite": {
        "define": {
            "process.env": process.env
        }
    }
})
