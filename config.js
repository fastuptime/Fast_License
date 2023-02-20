module.exports = {
    site: {
        name: 'Fast License',
        title: 'Fast License - Lisanslama Sistemi',
        description: 'Fast License ücretsiz bir lisanslama sistemidir.',
        keywords: 'fast, license, fast license, fastlicense, fastuptime, fast uptime, fastuptime.com',
        url: 'https://fastlicense.com',
    },
    admins: [
        {
            username: 'admin',
            password: 'admin',
            avatar: "https://i.hizliresim.com/gy1ppnp.jpg",
        },
        {
            username: 'admin2',
            password: 'admin2',
            avatar: "https://i.hizliresim.com/gy1ppnp.jpg",
        }
    ],
    mongodb: "mongodb://127.0.0.1:27017/fastlicense", // NodeJs v18 localhost --> 127.0.0.1 
    port: 80,
};