// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
    typescript: {
        ignoreBuildErrors: true,
     },
};

module.exports = withNextIntl(config);
