const nodemailer = require('nodemailer')

module.exports = sendEmail

function sendEmail({from, subject, name, text}) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zarkopernar@gmail.com',
            pass: 'Kasmir34'
        }
    })

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"${name} 👻" <${from}>`, // sender address
        to: 'zarko.pernar@gmail.com', // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        //html: '<b>Hello world ?</b>' // html body
    }

    // send mail with defined transport object
    return new Promise(function(resolve, reject) {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(error)
            }

            console.log('Message %s sent: %s', info.messageId, info.response)

            resolve(info)
            
        }) 
    })
    
}


