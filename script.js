let dataEl = document.getElementById('data');
let refreshButtonEl = document.getElementById('refreshData');

refreshButtonEl.addEventListener('click', refreshData);

function fetchData() {
	fetch('https://api.covid19api.com/summary')
	.then((res) => res.json())
	.then((data) => {
		console.log(data.Global);
		let output = `<td>${data.Global.TotalConfirmed}</td> <td>${data.Global.TotalDeaths}</td> <td>${data.Global.TotalRecovered}</td>`;
		dataEl.innerHTML = output;
	});
}

fetchData();



function refreshData() {
	fetchData();
}
