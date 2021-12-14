export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Nakatai Blog",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/jpg",
        "href": "/favicon.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "keywords",
        "content": "vuepress, netlify"
      }
    ],
    [
      "meta",
      {
        "name": "og:title",
        "content": "Nakatai Blog"
      }
    ],
    [
      "meta",
      {
        "name": "og:type",
        "content": "website"
      }
    ],
    [
      "meta",
      {
        "name": "og:url",
        "content": "blog.nakatai.ga"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
