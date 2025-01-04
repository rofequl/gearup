const DeviceDetector = require('node-device-detector');
const ClientHints = require('node-device-detector/client-hints')

// init app
const deviceDetector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false,
});
const clientHints = new ClientHints;

// create middleware
const middlewareDetect = (request) => {
    const useragent = request.headers['user-agent'];
    let meta = {}
    const clientHintsData = clientHints.parse(request.headers, meta);

    return {
        useragent: useragent,
        device: deviceDetector.detect(useragent, clientHintsData),
    }
};

module.exports.detectServer = middlewareDetect;