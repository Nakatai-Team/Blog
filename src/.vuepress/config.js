module.exports = {
    title: 'Nakatai Blog',
    theme: '@vuepress/theme-blog',
    head: [
        ['link', { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' }],
        ['meta',{ name:"og:title", content:"Nakatai Blog"}],
        ['meta',{ name:"og:type", content:"website"}],
        ['meta',{ name:"og:url", content:"https://blog.nakatai.ga"}],
        ['meta', { name: 'og:image', content: 'https://minotar.net/helm/d297f52003024e5d944fd78edc82891a' }],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: "https://nakatai.ga" },
            { text: 'Blog', link: '/blog/' },
        ],
        sidebar: [
            {
            title: 'Blog',
            children: [
                '/blog/'
            ]
        },
        ],
        dateFormat: 'YYYY-MM-DD',
        markdown: {
            lineNumbers: true,
            config: md => {
                md.use(require('markdown-it-footnote'))
                md.use(require('markdown-it-video'))
            },
        },
        footer: {
            copyright: [
            {
                text: "CC-BY-SA-4.0",
                link: 'https://creativecommons.org/licenses/by-sa/4.0/deed.ja',
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/CC-BY-SA_icon.svg',
            },
            {
                text: 'GitHub src',
                link: 'https://github.com/Nakatai-0322/Blog',
            },
            ],
        },
    },
}