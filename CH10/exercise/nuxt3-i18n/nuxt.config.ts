export default defineNuxtConfig({
    "modules": [
        '@nuxtjs/i18n'
      ],
      "i18n": {
        "strategy": 'no_prefix', //不需要利用改變網址的方式來去切換語系
        "locales": [
          {
            "code": 'zh-TW',
            "file": 'zh-TW.json'
          },
          {
            "code": 'en-US',
            "file": 'en-US.json'
          },
          {
            "code": 'ja-JP',
            "file": 'ja-JP.json'
          },
        ],
        "langDir": 'language',
        "defaultLocale": 'zh-TW',
        "detectBrowserLanguage": { //紀錄當前語系
          "useCookie": true,
        }
      },
     
})
