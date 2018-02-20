/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _api = __webpack_require__(1);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getJobs() {
  var posts = document.querySelector('#job-post');
  var data = _api2.default.jobs;
  console.log(data);

  data.forEach(function (_ref) {
    var logo = _ref.logo,
        post = _ref.post,
        position = _ref.position;

    var newDiv = document.createElement('div');
    newDiv.classList.add('responsive');
    var newImg = document.createElement('img');
    var newPost = document.createElement('h1');
    var newPosition = document.createElement('p');
    var button = document.createElement('button');
    var anchor = document.createElement('a');
    anchor.innerHTML = "APPLY";
    button.appendChild(anchor);
    newImg.src = 'images/build/logo_' + logo;
    newPost.textContent = post;
    newPosition.textContent = position;
    newDiv.append(newImg, newPost, newPosition, button);
    posts.appendChild(newDiv);
  });
}

window.addEventListener('load', getJobs, false);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fetchAPI = {
  jobs: [{
    logo: "startech.png",
    post: "Software Developer",
    position: "Full Time"
  }, {
    logo: "vehikl.png",
    post: "Full Stack Web Developer",
    position: "Full Time"
  }, {
    logo: "voices.png",
    post: "Systems Architect",
    position: "Full or Part Time"
  }]
};

module.exports = fetchAPI;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var margin = { top: 60, right: 20, bottom: 30, left: 50 },
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
var parseDate = d3.time.format("%B %Y").parse;
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis().scale(x).orient("bottom");
var yAxis = d3.svg.axis().scale(y).orient("left");
var line = d3.svg.line().x(function (d) {
    return x(d.date);
}).y(function (d) {
    return y(d.rate);
});
var svg = d3.select("#chart").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
d3.csv("./unemployment_ca.csv", function (error, data) {
    console.log('hey');
    if (error) throw error;
    console.log(data);
    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.rate = +d.rate;
    });
    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain(d3.extent(data, function (d) {
        return d.rate;
    }));
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("Unemployment Rate (%)");

    var path = svg.append("path").datum(data).attr("class", "line").attr("d", line);

    // d3.select("path").on("load", function() {
    //    var path = svg.append("path")
    //        .datum(data)
    //        .attr("class", "line")
    //        .attr("d", line);
    //
    //   var totalLength = path.node().getTotalLength();
    //
    //   path
    //   	.attr("stroke-dasharray", totalLength + " " + totalLength)
    //   	.attr("stroke-dashoffset", totalLength)
    //     .transition() // Call Transition Method
    //   	.duration(4000) // Set Duration timing (ms)
    //   	.ease(d3.easeLinear) // Set Easing option
    //   	.attr("stroke-dashoffset", 0); // Set final value of dash-offset for transition
    // });
});

/***/ })
/******/ ]);