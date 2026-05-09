import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: 'GPTCODEX',
  description: 'GPTCODEX 文档中心',
  host: '0.0.0.0',
  port: 8028,
  theme: plumeTheme({
    logo: '/logo.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '使用教程', link: '/guide/' },
      { text: '主站', link: 'https://gptcodex.top' },
      { text: '商城', link: 'https://shop.gptcodex.top' },
      { text: '官方群', link: 'https://qun.qq.com/universal-share/share?ac=1&authKey=fIG1l%2BLubQuz1RV9XTXB0P8o9W42GB%2FPSebRMXnPpSWJyj8lv0NMxCc5%2FK1rE15b&busi_data=eyJncm91cENvZGUiOiIxMDY3MTc5NjIwIiwidG9rZW4iOiIzaUIvTjdBSkcxN2RCWllNcWxIWWhVVjFlTXNPRmVtRTVRSXgyZDNlczVVWGNlTjY3aVhGZ0ppcjhZT2Q5aEdTIiwidWluIjoiMjIyMTU0Mjc3NyJ9&data=XD51bWAU83pejFLZYVX6n7HFKHrhv9vGB61j46en5o4TrlfkFh_I5Xqaj-S-nEJo04gw0KLjoWP0nWq5_Yd6tA&svctype=4&tempid=h5_group_info' },
    ],
    notes: false,
  }),
})
