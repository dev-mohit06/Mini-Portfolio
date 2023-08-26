const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');
const view = document.getElementById('view').getContext('2d');
const count = document.getElementById('count').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Visited', 'Liked', 'Active'],
        datasets: [{
            label: 'Traffic Source',
            data: [5000, 4800, 3530],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],

            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
    }
});

var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'User',
            data: [1200, 1900, 3000, 4900, 2000, 3000, 1000, 3000, 5000, 3332, 1242, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true
    }
});


var myChart = new Chart(view, {
    type: 'line',
    data: {
        labels: ['2000', '2010', '2015', '2020', '2021', '2022'],
        datasets: [{
            label: 'Clients',
            data: [0, 1900, 2400, 3800, 4200, 5000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


var myChart = new Chart(count, {
    type: 'radar',
    data: {
        labels: ['2000', '2010', '2015', '2020', '2021', '2022'],
        datasets: [{
            label: 'Earning',
            data: [200, 2000, 3000, 4600, 4800, 5000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderWidth: 2,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});