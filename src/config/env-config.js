module.exports = {
    resolve: `gatsby-plugin-env-variables`,
    options: {
        allowList: [
            "ENVIRONMENT",
            "API_SPOTIFY",
            "CLIENT_ID_SPOTIFY",
            "CLIENT_SECRET_SPOTIFY",
            "REDIRECT_URI"
        ]
    },
}