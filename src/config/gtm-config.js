module.exports = {
    resolve: 'gatsby-plugin-google-marketing-platform',
    options: {
      includeInDevelopment: false,
      tagmanager: {
        id: process.env.GTM_ID,
      },
      optimize: {
        id: process.env.GTM_ID,
      }
    }
  };