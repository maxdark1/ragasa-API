require('dotenv-extended').load();

const config = {
    dev: process.env.NODE_ENV !== "production",
    port: process.env.PORT || 3000,
    dburi: process.env.MONGODB_URI || 'mongodb://localhost:27017/ragasa'
}

module.exports = {config};