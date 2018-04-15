
(() => {

let charact = document.querySelector('#chart svg');
if(screensize == 'small'){
  charact.setAttribute("height", "250");
  charact.setAttribute("width", "300");
}
if(screensize == 'medium'){
  charact.setAttribute("height", "300");
  charact.setAttribute("width", "500");
}
if(screensize == 'large'){
  charact.setAttribute("height", "300");
  charact.setAttribute("width", "700");
}

var svg = d3.select("svg"),
    margin = {top: 40, right: 30, bottom: 50, left: 30},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 // Scale for bar widths.

var x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(0.1)
    .align(0.1);

// Scale for bar heights.

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

// Scale for fill color of the categorical data.

var z = d3.scaleOrdinal()
   .range(["#6ABFDF", "#1F7FA7"]);

  d3.csv("unemployment_ca.csv", function(d, i, columns) {
    for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
    d.total = t;
    return d;

  }, function(error, data) {
    if (error) throw error;

    var keys = data.columns.slice(1);


    data.sort(function(a, b) { return b.total - a.total; });
    x.domain(data.map(function(d) { return d.Date; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
    z.domain(keys);

    g.append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
      .selectAll("rect")
        .data(function(d) { return d; })
          .enter().append("rect")
        .attr("x", function(d) { return x(d.data.Date); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth());

    g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y).ticks(null, "s"))
      .append("text")
        .attr("x", 2)
        .attr("y", y(y.ticks().pop()) + 0.5)
        .attr("dy", "0.32em")
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")
        .text("Percentage");



    var legend = g.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "end")
        .attr("class", "spacing")
      .selectAll("g")
      .data(keys.slice().reverse())
      .enter().append("g")
        .attr("transform", function(d, i) {
          return "translate(20," + i * -20 + ")";
        });

    legend.append("rect")
            .attr("x", width - 19)
            .attr("width", 19)
            .attr("height", 19)
            .attr("fill", z)
            .attr("position", "relative");

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(function(d) { return d; });

      // rect.append("svg:title")
      // .attr("class", "svg-title")
      // .attr("position", "absolute")
      // .attr("z-index", "200")
      //    .text(function(d) {
      //      // console.log(d);
      //      // console.log(d.data.Date+", "+d.Unemployment+": "+d.y+" (total: "+d.total+")");
      //      return d[1];
      //    });
  });
})();
