// 1. Updated 2026 weather dataset for Sindri, Jharkhand
const weatherData = [
    { date: '2026-06-26', temperature: 36, humidity: 60, rainfall: 0 },
    { date: '2026-06-27', temperature: 37, humidity: 57, rainfall: 5 },
    { date: '2026-06-28', temperature: 36, humidity: 61, rainfall: 12 },
    { date: '2026-06-29', temperature: 35, humidity: 67, rainfall: 20 },
    { date: '2026-06-30', temperature: 34, humidity: 72, rainfall: 45 }, // Heavy thunderstorm
    { date: '2026-07-01', temperature: 32, humidity: 75, rainfall: 15 },
    { date: '2026-07-02', temperature: 33, humidity: 73, rainfall: 10 }
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
            fill: true,
            tension: 0.3 // Adds a slight curve to the line for a modern look
        }]
    },
    options: {
        responsive: true
    }
});
