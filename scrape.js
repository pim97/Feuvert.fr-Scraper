const Scrappey = require('scrappey-wrapper');
const qs = require('qs');

// Replace the following details with your own details
const SCRAPPEY_API_KEY = 'API_KEY';

// Create an instance of Scrappey
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

async function run() {

    /**
     * Creates a session
     */
    const session = await scrappey.createSession({
        premiumProxy: true,
        proxyCountry: "France"
    })

    await scrappey.get({
        url: "https://www.feuvert.fr/",
        session: session.session,
        datadomeBypass: true
    });

    const params = {
        "a": "b"
    }

    const vehicle = await scrappey.post({
        url: "https://www.feuvert.fr/api/endpoint",
        requestType: "request",
        customHeaders: {
            "content-type": "application/x-www-form-urlencoded",
        },
        session: session.session,
        postData: qs.stringify(params)
    })

    console.log(JSON.stringify(vehicle, null, 2));

}

run();