let LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

module.exports = {
    hello: function (payload) {
        let service = LocalServiceRegistry.createService('react.ssr.hello', {
            createRequest: function createRequest(svc, args) {
                service.addHeader('Content-Type', 'application/json');
                svc.setRequestMethod('POST');

                if (args) {
                    return args;
                }
            },
            parseResponse: function parseResponse(svc, client) {
                return client;
            },
            filterLogMessage: function filterLogMessage(msg) {
                return msg;
            },
        });

        let result = service.call(JSON.stringify({ props: payload }));

        return result;
    }
};
