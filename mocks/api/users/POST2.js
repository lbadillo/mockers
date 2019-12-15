module.exports = function (request, response) {
    if (!request.get('X-Auth-Key')) {
        response.status(403).send({});
    } else {
        response.sendFile('POST.json', {root: __dirname});
    }
}