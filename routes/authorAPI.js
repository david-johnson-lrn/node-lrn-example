const router = require('express').Router();
const LrnInit = require("learnosity-sdk-nodejs");

//Sample endpoint to send Author API signature signed payload.  
// URL endpoint is "/author"
router.post("/", function (req, res) {

    const security = {
        "consumer_key": "downloaddemo4o7M",
        "domain": "localhost",
        "user_id": "demo_student"
    };
    //demos item bank credentials.  Should be stored securely.  
    const secret = "74c5fd430cf1242a527f6223aebd42d30464be22";

    const request = {
        "mode": "item_list",
        "user": {
            "id": "demos-site",
        }
    };

    const Init = new LrnInit();
    const signedRequest = Init.init("author", security, secret, request);

    res.send(signedRequest)

})

module.exports = router;