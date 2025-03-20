import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MGT Firmware",
  description: "Accelerate your embedded project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: 'examples/firment' }
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
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Firmware Web-UI', link: 'examples/firment' },
            { text: 'Secure Bootloader', link: 'examples/mgt-boot' }
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
