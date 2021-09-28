const path = require('path').resolve;
// const config = require(path('configs/constants'));
const Mailer = require('../../../../config/mail');

class Helper {
    // generateOTP() {
    //     return Math.floor(100000 + Math.random() * 900000);
    // }

    // generateUUID(domain) {

    //     let uuid = undefined;

    //     if (domain === config.domain.patient) {
    //         uuid = 'PAT' + Math.floor(1000 + Math.random() * 9000);
    //     } else if (domain === config.domain.doctor) {
    //         uuid = 'DOC' + Math.floor(1000 + Math.random() * 9000);
    //     } else if (domain === config.domain.pharmacy) {
    //         uuid = 'PHAR' + Math.floor(1000 + Math.random() * 9000);
    //     }

    //     return uuid;
    // }


    sendMail(subject, template, receiver, fileData = null) {
        var mailOptions = {
            from: `${process.env.APP_NAME} <${process.env.MAIL_USERNAME}>`,
            to: receiver,
            subject: subject,
            html: template,
        };
        if (fileData) {
            mailOptions.attachments = [{
                filename: `${fileData.name}.pdf`,
                content: new Buffer(fileData.file)
            }]
        }

        return Mailer.sendMail(mailOptions, function (error, info) {
            console.log('mail option', mailOptions)
            if (error) {
                console.log('Error', error);
                return error
            } else {
                console.log('Email sent: ' + info.response);
                return info.response
            }
        });
    }
}

module.exports = new Helper();