/** @type {import('next').NextConfig} */
/* eslint-disable import/no-commonjs */
const confme = require('confme');

const nextConfig = {
    reactStrictMode     : true,
    publicRuntimeConfig : {
        ...confme(`${ __dirname  }/etc/config.json`)
    }
};

// eslint-disable-next-line import/no-commonjs
module.exports = nextConfig;
