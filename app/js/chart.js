InitChart();

function InitChart() {

  var barData = [{
    'x': "Berlin",
    'y': 609685
  }, {
    'x': "Hamburg",
    'y': 296689
  }, {
    'x': "München",
    'y': 281409
  }, {
    'x': "Köln",
    'y': 984
  }, {
    'x': "Frankfurt am Main",
    'y': 494434
  }, {
    'x': "Stuttgart",
    'y': 108117
  }, {
    'x': "Düsseldorf",
    'y': 40
  }, {
    'x': "Dortmund",
    'y': 30
  }, {
    'x': "Essen",
    'y': 21
  }, {
    'x': "Bremen",
    'y': 154
  }];

  var vis = d3.select('#visualisation'),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
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

  vis.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis);

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
    .on('mouseout',function(d){
      d3.select(this)
        .attr('fill','grey');
    });

}
