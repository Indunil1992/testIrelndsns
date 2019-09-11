let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.listSubscriptionsByTopic({
        TopicArn: 'arn:aws:sns:eu-west-1:318300609668:testinddR'
    }).promise()
        .then(data => {
        console.log("dataaaa");
        console.log(data);
            // your code goes here
        })
        .catch(err => {
            console.log("errrrr");
            console.log(err);
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}