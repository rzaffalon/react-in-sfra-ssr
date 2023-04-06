let server = require('server');
let base = module.superModule;

server.extend(base);

server.append('Show', function(req, res, next) {
    const service = require('*/cartridge/scripts/react/hello');
    let payload = 'failed';

    let response = service.hello();

    if (response.isOk()) {
        payload = response.getObject().text;

    }
    
    res.setViewData({SSR: payload});

    next();
});

module.exports = server.exports();