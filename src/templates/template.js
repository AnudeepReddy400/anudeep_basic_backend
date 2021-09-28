require('dotenv').config();
const moment = require('moment')
module.exports = {
    resetPassword: (data) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags must come first in the head; any other head content must come after these tags -->
        <!-- Bootstrap -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900" rel="stylesheet">
        
        <style>
        body{font-family: 'Roboto', sans-serif;}
        </style>
        </head>
        <body>
        <table style="width:560px;margin:15px auto;border:1px solid #d1d1d1;border-collapse: collapse;">
        <tr>
        <td style="padding: 10px;text-align:center"></td>
        </tr>
        <tr>
        <td colspan="2" style="height1px;border-bottom: 1px solid #d1d1d1;"></td>
        </tr>
        <tr>
        <td colspan="2" style="padding:30px;">
        <h3 style="margin-bottom: 10px;color: #212121;">Hi ${data.first_name[0].toUpperCase() + data.first_name.slice(1)},</h3>
        <p style="margin-bottom: 30px;color:#4d4d4d;">
        Thank you for signing up to the platform. Please click the link below to verify your email address.</p>
        <p style="margin-bottom: 30px;color:#4d4d4d;">
        If you did not request this verification, you can ignore this email. No action will be taken.</p>
        
        <a href="${process.env.BASE_URL + data.link}" style="display:inline-block;margin-bottom:30px;background: #f46822;color: #fff;font-size: 14px;text-transform: uppercase;padding: 8px 10px;text-decoration: none;">Verify</a>
        <h5 style="margin-bottom: 0;color:#4d4d4d;margin-bottom: 10px;">Happy Travelling,</h5>
        <h2 style="font-size: 14px;color: #212121;margin-bottom: 10px;margin-top:0;">The ${process.env.APP_NAME} Team</h2>
        </td>
        </tr>
        <tr>
        <td colspan="2" style="padding:20px;text-align:center;background: #f5f5f5;"><h3 style="margin:0;font-size:16px;color:#212121;">All Right Reserved. © ${moment().format('YYYY')} ${process.env.APP_NAME} </h3></td>
        </tr>
        </table>
        </body>
        </html>
        `
    }
}