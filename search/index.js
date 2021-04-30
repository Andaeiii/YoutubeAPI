require ('dotenv').config();
const { google } = require('googleapis');
const { axios } = require('../node_modules/axios/dist/axios');
//console.log(process.env.YOUTUBE_TOKEN);


google.youtube('v3').search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    maxResults: 20,
    q: 'Next Level',
    channelId: 'UCALuqr8BQi_djTbgEL5yeGA'
}).then(response => {                   //returns a promise... 
   // console.log(response);

    const { data } = response;  //destructuring...

    data.items.forEach(item => {
       // console.log(`Title: ${item.snippet.title} \n Description: ${item.snippet.description} \n`)
    });

}).catch(errors => {
   // console.log(errors);
});

const params = {
    part: 'snippet',
    maxResults: '40',
    key: 'AIzaSyDFyn5GcJ2KdSiPcCV-41rdi5FvNrDOems',
    q: 'next level',
    channelId:'UCALuqr8BQi_djTbgEL5yeGA'
};

axios.get('https://youtube.googleapis.com/youtube/v3/search', params)
.then(res => {
    console.log('exxysy...');
    console.log(response);
})
.catch(err => {
    console.log(response);
});
