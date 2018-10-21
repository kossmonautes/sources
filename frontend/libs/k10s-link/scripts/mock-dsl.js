var mockServerClient = require('mockserver-client').mockServerClient;
var mockserver = require('mockserver-node');

var mockPort = 9001;

var useMockServer = () => {

    return mockserver.start_mockserver({
        serverPort: mockPort,
        verbose: true,
        systemProperties: "-Dmockserver.enableCORSForAllResponses=true"
    })

}

var mockThis = s => {
    s["times"] = {
        "unlimited": true
    }
    return mockServerClient("localhost", mockPort)
        .setDefaultHeaders([])
        .mockAnyResponse(s);
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

var delay = (obj, delay, unit) => {
    unit = unit || "SECONDS";
    delay = delay || 1;
    var delayObj =  {
        "timeUnit": unit,
        "value": delay
    }
    return compose(obj, "delay", delayObj);
}

var attachHeader = (obj, headerName, HeaderValue) => {
    obj["headers"] = obj["headers"] || [];

    var headerVal = {
        "name": headerName,
        "values": [HeaderValue]
    }
    obj["headers"].push(headerVal);
    return obj;
}

var cache = (obj, seconds) => {
    seconds = seconds || 10;
    return attachHeader(obj, 'Cache-Control', 'public, max-age=' + seconds);

}


var rs = (req, res) => {
    var _Obj = request(req);
    var _Obj = response(_Obj, res);
    return mockThis(_Obj);
}

var compose = (parent, key, obj) => { parent[key] = obj; return parent };



module.exports.dsl = { delay, useMockServer, cache, mockPort, get, ok, rs }
