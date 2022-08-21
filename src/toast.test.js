const Toast = require('./toast.js');

test('sample test', () => {
    const sb = new Toast({
        message: 'This is a Toast!'
    });
    expect(typeof sb).toEqual('object');
});