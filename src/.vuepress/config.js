module.exports = {
    title: 'Nakatai Blog',
    theme: 'vuepress-theme-meteorlxy',

    description: "Nakatai's Blog",

    locales: {
        '/': {
            lang: 'ja-jp',
        },
    },

    themeConfig: {
        lang: 'ja-JP',

        // Personal infomation (delete the fields if you don't have / don't want to display)
        personalInfo: {
            nickname: 'Nakatai',
            description: '開発者もどき',
            location: 'Gifu Pref',
            organization: 'FREESERVER PROJECT',
            email: 'info@nakatai.ga',
            avatar: 'https://i.imgur.com/JKrXD5e.jpg',
            sns: {
                twitter: {
                    account: 'Nakatai_0322',
                    link: 'https://twitter.com/Nakatai_0322',
                },
                github: {
                    account: "Nakatai-0322",
                    link: "https://github.com/Nakatai-0322",
                }
            },
        },

        // Header Config (Optional)
        header: {
            // ヘッダーの背景画像
            background: {
                url: "",
                useGeo: true,
module.exports = {
    // サイトのタイトル
    title: 'Nakatai Blog',
    theme: 'vuepress-theme-meteorlxy',

    // サイトの説明
    description: "Nakatai's Blog",

    // 言語設定
    locales: {
        '/': {
            lang: 'ja-jp',
        },
    },

    // テーマを指定
    theme: 'meteorlxy',

    // Theme config
    themeConfig: {
        lang: 'ja-JP',

        // Personal infomation (delete the fields if you don't have / don't want to display)
        personalInfo: {
            nickname: 'Nakatai',
            description: '開発者もどき',
            location: 'Gifu Pref',
            organization: 'FREESERVER PROJECT',
            email: 'info@nakatai.ga',
            avatar: 'https://minotar.net/helm/d297f52003024e5d944fd78edc82891a',
            sns: {
                twitter: {
                    account: 'Nakatai_0322',
                    link: 'https://twitter.com/Nakatai_0322',
                },
                github: {
                    account: "Nakatai-0322",
                    link: "https://github.com/Nakatai-0322",
                }
            },
        },

        // Header Config (Optional)
        header: {
            // ヘッダーの背景画像
            background: {
                url: "",
                useGeo: true,
            },

            showTitle: true,
        },

        footer: {
            poweredBy: true,

            poweredByTheme: true,

            custom: '&copy; 2021-present Nakatai Some Right Reserved. <br><a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/CC-BY-SA_icon.svg" width="200"></a> ',
        },

        infoCard: {
            headerBackground: {
                //url: '',

                // ランダムパターンを使用するか？
                useGeo: true,
            },
        },

        lastUpdated: true,

        nav: [
            { text: 'ホーム', link: '/', exact: true },
            { text: '記事検索', link: '/posts/', exact: false },
        ],

        smoothScroll: true,

        zooming: {
            // @see https://vuepress.github.io/en/plugins/zooming
        },

        pagination: {
            perPage: 5,
        },

        defaultPages: {
            home: true,
            posts: true,
        },
    },
}
