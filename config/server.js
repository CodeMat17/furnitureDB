module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', '998fd4814e2fda78c6e379ec4d746855'),
        },
    },
    url: env('URL', 'http://localhost:1337'),

});