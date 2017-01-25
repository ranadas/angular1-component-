exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'specs/prot/*_spec.js'
    ],
    exclude: [
        ''
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:8080/',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        directConnect: true,
        defaultTimeoutInterval: 10000
    }
};
