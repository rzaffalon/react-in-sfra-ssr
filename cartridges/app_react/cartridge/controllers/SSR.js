let server = require('server');

server.get('Hello', function(req, res, next) {
    const service = require('*/cartridge/scripts/react/hello');
    let payload = 'failed';

    let response = service.hello();

    if (response.isOk()) {
        payload = response.getObject().text;
    }

    res.print(payload);

    next();
});

module.exports = server.exports();