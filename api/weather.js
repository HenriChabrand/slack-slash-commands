import { Router } from 'express';

const router = Router();

router.get('/', function(req, res) {
    const data = getPayLoad(req);
    const response = {
        "text": "Now: 34 degrees and raining",
        "attachments": [{
            "text": `Dummy GET response. Only you can see this ${data.user_name}`
        }]
    };
    res.send(response);
});

router.post('/', function(req, res) {
    const data = getPayLoad(req);
    const response = {
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Hi David :wave:"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Great to see you here! App helps you to stay up-to-date with your meetings and events right here within Slack. These are just a few things which you will be able to do:"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "• Schedule meetings \n • Manage and update attendees \n • Get notified about changes of your meetings"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "But before you can do all these amazing things, we need you to connect your calendar to App. Simply click the button below:"
                    }
                },
                {
                    "type": "actions",
                    "elements": [
                        {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Connect account",
                                "emoji": true
                            },
                            "value": "click_me_123"
                        }
                    ]
                }
	        ]
    };
    res.send(response);
});
/*{
        "response_type": "in_channel",
        "text": "Now: 34 degrees and raining",
        "attachments": [{
            "text":`Thanks for asking ${data.user_name}. Hi everyone! :wave:`
        }*/
/*
    The following data is available (see https://api.slack.com/slash-commands)
    token, team_id, team_domain, channel_id, channel_name, user_id, user_name,
    command, text, response_url
*/
const getPayLoad = req => {
    return req.method === 'GET' ? req.query : req.body;
}

module.exports = router;
