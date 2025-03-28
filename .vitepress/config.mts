import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MGT Firmware",
  description: "Accelerate your embedded project",
  head: [['link', { rel: 'icon', href: '/logo6-32.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Accelerants', link: 'accelerants/firment' },
      { text: 'About Mike', link: 'https://mthielvoldt.github.io'},
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: {
      '/services/': [
        {
          text: 'My Services', items: [
            { text: 'Home', link: '/'},
            { text: 'My Strategy', link: '/services/how-i-work' },
            { text: 'My Capabilities', link: '/services/capabilities'}
          ]
        }
      ],
      '/accelerants/': [
        {
          text: 'Accelerants',
          items: [
            { text: 'Firmware Web-UI', link: 'accelerants/firment' },
            { text: 'Secure Bootloader', link: 'accelerants/mgt-boot' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mthielvoldt' },
      { icon: 'linkedin', link: 'http://linkedin.com/in/mike-thielvoldt' }
    ]
  }
})
