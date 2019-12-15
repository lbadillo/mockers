module.exports = function (request, response) {
    if (request.body.hola === "quemas") {
    console.log(request.body.hola)
        response.status(403).send({});
    } else {
        response.sendFile('POST.json', {root: __dirname});
    }
}