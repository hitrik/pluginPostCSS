var postcss = require("postcss");
var ccoff = require("postcss-camelcaseoff");

var cssStr = "div {backgroundColor:#fff;fontSize:18em;backgroundRepeat:no-repeat;}";

var r = postcss()
    .use(ccoff())
    .process(cssStr)
    .then(function(res) {
        console.log(res.css);
    })
    .catch(function(err) {
        console.log(err);
    });