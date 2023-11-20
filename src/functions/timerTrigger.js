const { app } = require('@azure/functions');

app.timer('timerTrigger', {
    schedule: '0 */30 * * * *',
    handler: (myTimer, context) => {
        context.log('Timer function processed request.');

        fetch("https://lihkg.com/api_v2/thread/hot?cat_id=2&page=1&count=60&type=now", {
          "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-li-device": "995019409a4d24bac55ee030366dc951517a0ebf",
            "x-li-device-type": "browser",
            "x-li-load-time": "4.3600684"
          },
          "referrer": "https://lihkg.com/category/2",
          "referrerPolicy": "strict-origin-when-cross-origin",
          "body": null,
          "method": "GET",
          "mode": "cors",
          "credentials": "include"
        })
        .then(response => response.json())
        .then(data => context.log(data))
        .catch(error => context.error(error));
    }
});
