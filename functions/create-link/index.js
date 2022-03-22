
const validUrl = require('valid-url'),
    randomstring = require('randomstring');

module.exports = async function (context, req) {
    if (!req.body || !req.body.url){
        context.res = {
            status: 400
        };
        context.done();
        return;
    }

    const target = req.body.url;
    if(!validUrl.isUri(target)){
        context.res = {
            status: 400,
            body: {
                message: "please provide a valid url"
            }
        };
        context.done();
        return;
    }
    const r = randomstring.generate(5);

    context.bindings.link = JSON.stringify({
        url: target,
        short: r,
        hitCount: 0
    });

    context.res = {
        // status: 200,
        body: {
            short: r,
            url: target
        }
    };
    context.done();    
}
