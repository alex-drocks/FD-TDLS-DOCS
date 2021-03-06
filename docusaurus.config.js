module.exports = {
  title: "Finance D - Documentation, aide et formations",
  tagline: 'Maîtriser le logiciel: Finance D - Tenue de livres simplifiée',
  url: 'https://docs.finance-d.com',
  baseUrl: '/logiciel-tenue-de-livres-simplifiee/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Finance D', // Usually your GitHub org/user name.
  projectName: 'fd-app-docs', // Usually your repo name.
  themeConfig: {
    // announcementBar: {
    //   id: 'beta_mode', // Any value that will identify this message.
    //   content:
    //     'La documentation est en construction.',
    //   textColor: '#666', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
    navbar: {
      hideOnScroll: true,
      title: 'Finance D',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
        href: '/',
      },
      items: [
        {
          to: '/docs/bases/prise-en-main-du-logiciel',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: "/videos",
          label: "Vidéos",
          position: "left"
        },
        {
          to: '/blog',
          label: 'Articles',
          position: 'left'
        },
        {
          to: '/updates',
          label: 'Mises à jour',
          position: 'left'
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://finance-d.com',
          label: 'finance-d.com',
          position: 'right',
        }
      ],
    },
    hideableSidebar: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Accès rapide',
          items: [
            {
              label: 'Prise en main du logiciel',
              to: '/docs/bases/prise-en-main-du-logiciel',
            },
            {
              label: 'Mises à jour du logiciel',
              to: '/updates',
            },
            {
              label: 'Questions fréquentes (FAQ)',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Guides et Formations',
          items: [
            {
              label: 'Démonstrations vidéos',
              to: "/videos",
            },
            {
              label: 'Articles',
              to: 'blog',
            },
          ],
        },
        {
          title: "Finance D",
          items: [
            {
              label: "À propos de l'entreprise",
              href: 'https://finance-d.com/a-propos',
            },
            {
              label: 'Présentation du logiciel',
              href: 'https://finance-d.com',
            },
            {
              label: 'Page Facebook de Finance D',
              href: 'https://www.facebook.com/Finance.D.Logiciels',
            },
          ],
        },
      ],
      logo: {
        alt: 'Logo Finance D',
        src: 'img/logo.png',
        href: 'https://finance-d.com/',
      },
      copyright: `© ${new Date().getFullYear()} Finance D`,
    },
    algolia: {
      appId: 'I9B5YVJPW1',
      apiKey: '146d50f718ad77ef9f491999239a2d22',
      indexName: 'FD-TDLS-DOCS',
      contextualSearch: false,
      // Optional: Algolia search parameters
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // Will be passed to @docusaurus/plugin-content-docs (false to disable)
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        gtag: {
          trackingID: 'G-8N37CT6CMQ',
          anonymizeIP: false,
        },

        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Articles récents',
          blogTitle: 'Articles',
          blogDescription: 'Lisez nos articles de formations spécialisées pour augmenter ' +
            'votre productivité avec le logiciel Finance D - Tenue de livres simplifiée.',
        },

        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        pages: {},

        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    localeConfigs: {
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
    },
  },
};
