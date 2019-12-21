const withCSS = require('@zeit/next-css')

exports.default = withCSS({
    env: {
        ClientID: process.env.ClientID
    }
});