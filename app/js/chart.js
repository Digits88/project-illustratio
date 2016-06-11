InitChart();

function InitChart() {

  var barData = [{
    'x': "Berlin",
    'y': 0.0001*609685
  }, {
    'x': "Hamburg",
    'y': 0.0001*296689
  }, {
    'x': "München",
    'y': 0.0001*281409
  }, {
    'x': "Köln",
    'y': 0.0001*984
  }, {
    'x': "Frankfurt am Main",
    'y': 0.0001*494434
  }, {
    'x': "Stuttgart",
    'y': 0.0001*108117
  }, {
    'x': "Dortmund",
    'y': 0.0001*96401
  }, {
    'x': "Essen",
    'y': 0.0001*84615
  }, {
    'x': "Bremen",
    'y': 0.0001*75486
  }, {
    'x': "Leipzig",
    'y': 0.0001*92152
  }];

  var vis = d3.select('#visualisation'),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 100
    },
    xRange = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1).domain(barData.map(function (d) {
      return d.x;
    })),


    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,
      d3.max(barData, function (d) {
        return d.y;
      })
    ]),

    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true),

    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient("left")
      .tickSubdivide(true);


  vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis);

  vis.selectAll('rect')
    .data(barData)
    .enter()
    .append('rect')
    .attr('x', function (d) {
      return xRange(d.x);
    })
    .attr('y', function (d) {
      return yRange(d.y);
    })
    .attr('width', xRange.rangeBand())
    .attr('height', function (d) {
      return ((HEIGHT - MARGINS.bottom) - yRange(d.y));
    })
    .attr('fill', 'grey')
}
