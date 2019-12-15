module.exports = function (request, response) {
    if (request.body.dato === "ejemplo") {
        response.status(403).send({});
    } else {
        response.sendFile('POST.json', {root: __dirname});
    }
}
