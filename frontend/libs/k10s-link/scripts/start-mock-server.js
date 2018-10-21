var mockserver = require('mockserver-node');

var { delay, useMockServer, cache, mockPort, ok, get, rs } = require('./mock-dsl').dsl;

useMockServer()
    .then(() => rs(get('/alice/name'), ok("alice")))
    .then(() => rs(get('/bob/name'), cache(delay(ok("bob")))))
    .then(() => console.log('all done'))
    .catch(err => console.log(err));
