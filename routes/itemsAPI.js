const router = require('express').Router();
const LrnInit = require("learnosity-sdk-nodejs");
const uuid = require("uuid")


const session_id = uuid.v4();

router.post("/", function (req, res) {

    const security = {
        "consumer_key": "downloaddemo4o7M",
        "domain": "localhost",
        "user_id": "demo_student"
    };
    //demos item bank credentials.  Should be stored securely.  
    const secret = "74c5fd430cf1242a527f6223aebd42d30464be22";

    const user_id = "Sonic_the_Hedgehog";
    const activity = 'BDE_Demo';

    const request = {
        'user_id': user_id,
        'rendering_type': 'assess',
        'session_id': session_id,
        'name': 'Learnosity',
        'activity_id': 'item_activity_demo', // Used to group sessions. Eg, get all students that did a particular test.
        'activity_template_id': activity, // The id of the activity that was created using our Authoring Tools which will be rendered in this asessment
        "type": 'submit_practice',
        "config": {
            "title": "This is my Learnosity Assessment Player",
            "subtitle": "It uses an Activity pulled from Item Bank and displays it in Assess mode",
        }
    };

    const Init = new LrnInit();
    const signedRequest = Init.init("items", security, secret, request);

    res.send(signedRequest)
})

module.exports = router;