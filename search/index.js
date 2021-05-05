require('dotenv').config();
const { google } = require('googleapis');
const fetch = require('node-fetch');
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
        console.log(`Title: ${item.snippet.title} \n Description: ${item.snippet.description} \n`)
    });

    //console.log(data.items)

}).catch(errors => {
    // console.log(errors);
});


//using the fetch api... 

const params = {
    part: 'snippet',
    maxResults: '40',
    key: process.env.YOUTUBE_TOKEN,
    q: 'next level',
    channelId: 'UCALuqr8BQi_djTbgEL5yeGA'
};

fetch('https://youtube.googleapis.com/youtube/v3/search', params)
    .then(res => res.text())
    .then(body => console.log(body));


