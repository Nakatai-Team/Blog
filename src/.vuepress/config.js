module.exports = {
    title: 'Nakatai Blog',
    theme: '@vuepress/theme-blog',
    head: [
        ['link', { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' }],
        ['meta',{ name:"og:title", content:"Nakatai Blog"}],
        ['meta',{ name:"og:type", content:"website"}],
        ['meta',{ name:"og:url", content:"blog.nakatai.ga"}]
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
                text: 'LICENSE',
                Image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/CC-BY-SA_icon.svg',
                link: 'https://creativecommons.org/licenses/by-sa/4.0/deed.ja',
            },
            {
                text: 'GitHub src',
                link: 'https://github.com/Nakatai-0322/Blog',
            },
            ],
        },
    },
}