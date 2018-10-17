var mockserver = require('mockserver-node');
var mockServerClient = require('mockserver-client').mockServerClient;
var mockPort = 9001;

mockserver.start_mockserver({

    serverPort: mockPort,
    verbose: true,
    systemProperties: "-Dmockserver.enableCORSForAllResponses=true"
})
    .then(() => console.log('mock server was started'))
    .then(() => rs(get('/alice/name'), ok("alice")))
    .then(() => rs(get('/bob/name'), ok("bob")))
    .then(() => console.log('all done'));

//
//helpers
//

var mockThis = s => {
    s["times"] = {
        "unlimited": true
    }
    return mockServerClient("localhost", mockPort).mockAnyResponse(s);
}

var request = s => {
    return compose({}, "httpRequest", s)
}

var response = (req, s) => compose(req, "httpResponse", s);


var get = (path) => {
    return { "method": "GET", "path": path };
}

var ok = (body) => {
    return {
        "statusCode": 200,
        "body": body
    };
}

var rs = (req, res) => {
    var _Obj = request(req);
    var _Obj = response(_Obj, res);
    return mockThis(_Obj);
}

var compose = (parent, key, obj) => { parent[key] = obj; return parent };
