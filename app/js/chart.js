  window.onload = function () {
  	var chart = new CanvasJS.Chart("chartContainer", {
  		theme: "theme1",//theme1
  		title:{
  			text: "Die größten Städte Deutschlands von links nach rechts mit Anzahl von potenziell Angreifbaren Servern"
  		},
  		animationEnabled: false,   // change to true
  		data: [
  		{
  			// Change type to "bar", "area", "spline", "pie",etc.
  			type: "column",
  			dataPoints: [
  				{ label: "Berlin",  y: 609685  },
  				{ label: "Hamburg", y: 296689  },
  				{ label: "München", y: 281409  },
  				{ label: "Frankfurt am Main",  y: 494434  },
          { label: "Stuttgart",  y:  108117 },
          { label: "Dortmund",  y: 96401  },
          { label: "Essen",  y: 84615  },
          { label: "Bremen",  y: 75486  },
          { label: "Leipzig",  y: 92152  },
          { label: "Dresden", y: 99976}
  			]
  		}
  		]
  	});
  	chart.render();
  }
