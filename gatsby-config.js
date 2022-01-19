module.exports = {
  pathPrefix: `/running_page`, // Change to `/running_page` when running on github pages
  siteMetadata: {
    title: 'Keep Running | itsNeko',
    siteUrl: 'https://dyfa.top/',
    description: 'Personal site and blog',
    navLinks: [{
        name: '我的博客',
        url: 'https://dyfa.top/'
      },
      {
        name: '在Keep关注我',
        url: 'https://show.gotokeep.com/users/59b68beae666867ee0141708?utm_source=wechat&utm_medium=web&utm_campaign=client_share&utm_term=59b68beae666867ee0141708&utm_content=users&_uid=59b68beae666867ee0141708'
      }
    ]
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
          'gatsby-remark-widows',
          'gatsby-remark-external-links',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'header-link',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
