exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'specs/basic_ui_navigation_spec.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:8080/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true
    }
};
