$(".button-collapse").sideNav();

var incFlowData = {
	labels: ["P1", "P2", "P3", "P4", "P5"],
	datasets: [
		{
			label: "Recieved",
			backgroundColor: 'rgba(54, 162, 235, 0.6)',
			borderColor: 'rgba(54, 162, 235, 0)',
			data: [1, 6, 3, 5, 2],
			borderWidth: 1
        },
		{
			label: "Carried Over",
			backgroundColor: 'rgba(255, 99, 132, 0.6)',
			borderColor: 'rgba(255, 99, 132, 0)',
			data: [4, 2, 0, 3, 5],
			borderWidth: 1
        },
		{
			label: "Responded",
			backgroundColor: "rgba(255, 206, 86, 0.6)",
			borderColor: "rgba(255, 206, 86, 0)",
			data: [0, 1, 7, 2, 6],
			borderWidth: 1
        },
		{
			label: "Resolved",
			backgroundColor: 'rgba(75, 192, 192, 0.6)',
			borderColor: 'rgba(75, 192, 192, 0)',
			data: [1, 2, 5, 0, 4],
			borderWidth: 1
        }
    ]
};

var incCount = document.getElementById("incCount").getContext("2d");

var incFlow = new Chart(incCount, {
	type: 'bar',
	data: incFlowData,
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
            }]
		}
	}
});

var srqCount = document.getElementById("srqCount").getContext("2d");

var srqFlow = new Chart(srqCount, {
	type: 'bar',
	data: incFlowData,
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
            }]
		}
	}
});

var chgCount = document.getElementById("chgCount").getContext("2d");

var chgFlow = new Chart(chgCount, {
	type: 'bar',
	data: incFlowData,
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
            }]
		}
	}
});

var prbCount = document.getElementById("prbCount").getContext("2d");

var prbFlow = new Chart(prbCount, {
	type: 'bar',
	data: incFlowData,
	options: {

		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
            }]
		}
	}
});


var data = {
	labels: ["P1", "P2", "P3"],
	datasets: [{
      backgroundColor: [
      "#2ecc71",

      "#f1c40f",
        "#e74c3c",
      ],
		borderColor: 'rgba(0,0,0,0.8)',
      data: [12, 19, 10]
	}]
};

var incPerf = new Chart($("#incPerf"), {
	type: 'polarArea',
	data: data,
});
