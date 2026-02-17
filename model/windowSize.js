const EWindowSize = Object.freeze({
    0: {
        width: 854,
        height: 480,
        label: '854×480',
    },
    1: {
        width: 960,
        height: 540,
        label: '960x540',
    },
    2: {
        width: 1280,
        height: 720,
        label: '1280×720',
    },
    3: {
        width: 1366,
        height: 768,
        label: '1366×768',
    },
    4: {
        width: 1920,
        height: 1080,
        label: '1920×1080',
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = EWindowSize;
}
