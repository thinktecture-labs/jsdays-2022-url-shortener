module.exports = async function (context, req, found) {
    
    if (found == null || found.length == 0){
        context.res = {
            status: 204,
            body: {
                "message": "No links here....yet..."
            }
        };
        context.done();
        return;
    }

    context.res = {
        body: found.map(f => {
            return {
                url: f.url,
                short: f.short,
                hits: f.hitCount
            }
        })
    };
    context.done();
}
