// 1. Our basic weather dataset
const weatherData = [
    { date: '2024-05-01', temperature: 32, humidity: 45, rainfall: 0 },
    { date: '2024-05-02', temperature: 34, humidity: 40, rainfall: 0 },
    { date: '2024-05-03', temperature: 29, humidity: 65, rainfall: 12 },
    { date: '2024-05-04', temperature: 27, humidity: 75, rainfall: 25 },
    { date: '2024-05-05', temperature: 30, humidity: 55, rainfall: 5 },
    { date: '2024-05-06', temperature: 31, humidity: 50, rainfall: 0 },
    { date: '2024-05-07', temperature: 28, humidity: 70, rainfall: 10 }
];

// 2. Variables to hold our totals
let totalTemp = 0;
let totalHum = 0;
let totalRain = 0;

// 3. Loop through the data to add everything up
for (let i = 0; i < weatherData.length; i++) {
    totalTemp += weatherData[i].temperature;
    totalHum += weatherData[i].humidity;
    totalRain += weatherData[i].rainfall;
}

// 4. Calculate the averages (toFixed(2) keeps it to 2 decimal places)
const avgTemp = (totalTemp / weatherData.length).toFixed(2);
const avgHum = (totalHum / weatherData.length).toFixed(2);

// 5. Send these numbers to our HTML page
document.getElementById('avg-temp').innerText += avgTemp + ' °C';
document.getElementById('avg-hum').innerText += avgHum + ' %';
document.getElementById('tot-rain').innerText += totalRain + ' mm';

// 6. Extract just the dates and temperatures to build the graph
const dates = weatherData.map(data => data.date);
const temperatures = weatherData.map(data => data.temperature);

// 7. Draw the Line Graph using Chart.js
const ctx = document.getElementById('weatherChart').getContext('2d');
const weatherChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates, // X-axis (Dates)
        datasets: [{
            label: 'Daily Temperature (°C)',
            data: temperatures, // Y-axis (Temperatures)
            borderColor: '#ff5722', // Orange line color
            backgroundColor: 'rgba(255, 87, 34, 0.2)', // Light orange fill under the line
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true
    }
});
