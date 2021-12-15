module.exports = {
    title: 'Nakatai Blog',
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
            { text: 'Blog', link: '/blog/' }
        ],
        sidebar: [
            {
            title: 'Blog',
            children: [
                '/blog/'
            ]
        },
        ],
    },
}