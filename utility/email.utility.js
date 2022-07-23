const nodemailer = require('nodemailer')
const sendMail = async (mailingList, cardNo, description) => {
    try{

        const templateToSend = `Hi Aditya, <br>${description}`
        const card = await card.findOne({cardNo: cardNo})
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_NAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        
        let mailOptions = {
            to: mailingList,
            subject: 'New Assignment !!',
            html: templateToSend,
            attachments: [{   
                path: "./csv/list.csv"
            }]
        };
        console.log(await transporter.sendMail(mailOptions))
        return true
    } catch (e){
        console.log('CATCH Block sendMail error', e)
    }
}


module.exports = {
    sendMail
}