const feed_options = {
    canonical_base: 'https://nakatai.ga',
};

module.exports = {
    title: 'Nakatai Blog',
    theme: 'meteorlxy',
    description: "Nakatai's Blog",
    head: [
        ['link', { rel: 'icon', href: '//minotar.net/helm/d297f52003024e5d944fd78edc82891a' }],
        ['meta', { name: 'og:image', content: '//minotar.net/helm/d297f52003024e5d944fd78edc82891a' }],
        ['link', { href: '/css/style.css', rel: 'stylesheet'}]
    ],
    locales: {
        '/': {
            lang: 'ja-jp',
        },
    },
    plugins: {
        'vuepress-plugin-rss':{
            base_url: '/',
            site_url: 'https://nakatai.ga',
            copyright: '&copy; 2021-present Nakatai Some Right Reserved.',
            filter: (frontmatter) => { return [true|false] },
            count: 20
        },
        "disqus": {
            "shortname":"blog-nakatai-ga"
        },
        "vuepress-plugin-google-adsense":{
            adClient: "ca-pub-2041303981654233",
            adsTxt: true,
        },
        'sitemap': {
            hostname: 'https://nakatai.ga',
            exclude: ["/404.html"],
            dateFormatter: val => {
                return new Date().toISOString()
            }
        },
        '@vuepress/google-analytics': {
            ga: 'UA-209688701-2'
        },
    },

    themeConfig: {
        lang: 'ja-JP',
        personalInfo: {
            nickname: 'Nakatai',
            description: '開発者もどき',
            location: 'Gifu Pref',
            organization: 'FREESERVER PROJECT etc...',
            email: 'info@nakatai.ga',
            avatar: 'https://go.nakatai.ga/icon_trimmed',
            sns: {
                twitter: {
                    account: 'Nakatai_0322',
                    link: 'https://go.nakatai.ga/twitter',
                },
                github: {
                    account: "Nakatai-0322",
                    link: "https://go.nakatai.ga/github",
                },
            },
        },

        header: {
            background: {
                url: "",
                useGeo: true,
            },
            showTitle: true,
        },

        footer: {
            poweredBy: true,
            poweredByTheme: true,
            custom: '<a href="https://nakatai.ga/policy/disclaimer">免責事項</a> | <a href="https://nakatai.ga/policy/privacypolicy">プライバシーポリシー</a><br> <a href="https://github.com/Nakatai-0322/nakatai-0322.github.io">GitHubソース</a><br>&copy; 2021-present Nakatai Some Right Reserved. <br><a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/CC-BY-SA_icon.svg" width="200"></a> ',
        },

        infoCard: {
            headerBackground: {
                // url: '',
                useGeo: true,
            },
        },

        lastUpdated: true,

        nav: [
            { text: 'ホーム', link: '/', exact: true },
            { text: '全記事リスト', link: '/posts/', exact: false },
            { text: 'Admin', link: 'https://nakatai.ga/admin',},
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
