const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cado Security',
  tagline: 'Cado Security',
  staticDirectories: ['public','static'],
  //url: 'https://cado-security.github.io',
  url: 'https://docs.cadosecurity.com',
  baseUrl: '/',
  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'cado-security', // Usually your GitHub org/user name.
  projectName: 'product-help', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    metadata: [{name: 'google-site-verification', content: 'j1fUKfw-LfBrYqXusMAoBbmCW8nSNobe8nOyfDl6xAY'}],
    navbar: {
      title: ' ',
      logo: {
        alt: 'Cado Logo',
        src: 'img/cado.png',
        srcDark: 'img/cado-dark.png', // Default to `logo.src`.
      },
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/cadosecurity',
              external: true,
            },
            {
              label: 'Github',
              href: 'https://github.com/cado-security',
              external: true,
            },
          ],
        },
       
      ],
      copyright: `Copyright © ${new Date().getFullYear()} | Cado Security`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cado-security/product-help/tree/master/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
