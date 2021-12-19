const feed_options = {
    canonical_base: 'https://blog.nakatai.ga',
};

module.exports = {
    // サイトのタイトル
    title: 'Nakatai Blog',
    theme: 'meteorlxy',

    // サイトの説明
    description: "Nakatai's Blog",

    head: [
        ['link', { rel: 'icon', type: 'image/jpg', href: '//minotar.net/helm/d297f52003024e5d944fd78edc82891a' }],
        ['meta', { name: 'og:image', content: '//minotar.net/helm/d297f52003024e5d944fd78edc82891a' }],
    ],

    // 言語設定
    locales: {
        '/': {
            lang: 'ja-jp',
        },
    },
    plugins: {
        "vuepress-plugin-feed":['feed', 'feed_options'],
        "disqus": {
            "shortname":"blog-nakatai-ga"
        }
    },

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
            custom: '<a href="https://github.com/Nakatai-0322/nakatai-0322.github.io">GitHubソース</a><br>&copy; 2021-present Nakatai Some Right Reserved. <br><a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/CC-BY-SA_icon.svg" width="200"></a> ',
        },

        infoCard: {
            headerBackground: {
                //url: '',

                useGeo: true,
            },
        },

        lastUpdated: true,

        nav: [
            { text: 'ホーム', link: '/', exact: true },
            { text: '全記事リスト', link: '/posts/', exact: false },
        ],

        smoothScroll: true,

        zooming: {
        },

        pagination: {
            perPage: 5,
        },

        defaultPages: {
            home: true,
            posts: true,
        },
        comments: false,
    },
}
