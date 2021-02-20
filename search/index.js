require ('dotenv').config();
const { google } = require('googleapis');
//console.log(process.env.YOUTUBE_TOKEN);


google.youtube('v3').search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'Next Level',
    channelId: 'UCALuqr8BQi_djTbgEL5yeGA'
}).then(response => {
    console.log(response);
}).catch(errors => {
    console.log(errors);
})