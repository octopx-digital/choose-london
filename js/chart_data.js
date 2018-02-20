

var margin = {top: 60, right: 20, bottom: 30, left: 50},
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
var parseDate = d3.time.format("%B %Y").parse;
var x = d3.time.scale()
    .range([0, width]);
var y = d3.scale.linear()
    .range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.rate); });
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
d3.csv("./unemployment_ca.csv", function(error, data) {
  console.log('hey');
  if (error) throw error;
  console.log(data);
  data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.rate = +d.rate;
  });
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.rate; }));
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Unemployment Rate (%)");

      var path = svg.append("path")
             .datum(data)
             .attr("class", "line")
             .attr("d", line);

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
