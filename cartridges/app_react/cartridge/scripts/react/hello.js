let LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

module.exports = {
    hello: function () {
        let service = LocalServiceRegistry.createService('react.ssr.hello', {
            createRequest: function createRequest(svc, args) {
                if (args) {
                    return args;
                }

                svc.setRequestMethod('GET');
            },
            parseResponse: function parseResponse(svc, client) {
                return client;
            },
            filterLogMessage: function filterLogMessage(msg) {
                return msg;
            },
        });

        let result = service.call();

        return result;
    }
};
