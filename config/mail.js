const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

module.exports = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: Boolean(process.env.MAIL_ENCRYPTION),
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});