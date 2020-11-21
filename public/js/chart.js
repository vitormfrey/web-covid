  
  var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
			type: 'line',
			data: {
        backgroundColor:'rgb(252, 238, 44)',
				labels: ['03/11', '04/11', '05/11', '06/11', '07/11', '08/11'],
				datasets: [{
					label: 'Previsão',
					backgroundColor: 'RGB(22, 53, 89)',
          borderColor: 'RGB(22, 53, 89)',
					data: [
					5593386,
					5632751,
					5632751,
					5712038,
					5751962,
					5792075
					],
					fill: false,
				}, {
					label: 'Dado Real',
					fill: false,
					backgroundColor: 'RGB(197, 56, 51)',
          borderColor: 'RGB(197, 56, 51)',
					data: [
          5566049,
          5590021,
          5590021,
          5613181,
          5653561,
          5664115,
					],
				}]
			},

    // Configuration options go here
    options: {
				responsive: true,
				title: {
					display: true,
					text: 'Previão de casos Covid Brasil - Usando Rede Neural Artificial (RNA)'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Dias'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Casos'
						}
					}]
				}
			}
		
});
