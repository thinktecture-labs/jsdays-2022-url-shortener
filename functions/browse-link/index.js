module.exports = async function (context, req, found) {
    if (!found || found.length == 0){
        context.res = {
            status: 404
        };
        context.done();
        return;
    }

    context.bindings.link = found[0]
    context.bindings.link.hitCount +=1;

    context.res = {
        status: 301,
        headers : {
            'location': found[0].url
        }
    };
    context.done();
}
