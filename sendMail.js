const credentials = require('./credentials.json');
const emailTemplate = require('./emailTemplate.js');
const gmailSend = require('gmail-send');

const sendMail = (zone, mmi) => {
  gmailSend({
    user: credentials.user,
    pass: credentials.password,
    to: credentials.user,
    subject: 'MMI ALERT',
    text: `MMI = ${mmi}`,
    html: emailTemplate(zone, mmi),
  })({});
};

module.exports = sendMail;