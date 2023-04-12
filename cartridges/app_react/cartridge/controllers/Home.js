let server = require('server');
let base = module.superModule;

server.extend(base);

server.append('Show', function(req, res, next) {
    const service = require('*/cartridge/scripts/react/hello');

    let html = 'failed';
    let props = {foo: 'bar'};

    let response = service.hello(props);

    if (response.isOk()) {
        html = response.getObject().text;
    }
    
    res.setViewData({SSR: html, props: props});

    next();
});

module.exports = server.exports();