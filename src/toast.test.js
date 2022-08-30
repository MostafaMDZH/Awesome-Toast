const Toast = require('./toast.js');

test('sample test', () => {
    const sb = new Toast('This is a Toast!');
    expect(typeof sb).toEqual('object');
});