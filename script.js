document.addEventListener("DOMContentLoaded", function() {
    const appareilSelect = document.getElementById("appareil-select");
    const capteurSelect = document.getElementById("capteur-select");
    const dateSelect = document.getElementById("date-select");

    // Création d'un graphique à courbes
    const ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line', // Type de graphique à courbes
        data: {
            labels: ["00:00", "00:30", "01:00", "02:30", "03:00", "03:30","04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00"],
            datasets: [
              {
                label: "Température de l'air ",
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4 // Tension de la courbe
                },
              {
                label: 'Humidité du sol ',
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4 // Tension de la courbe
               },
              {
                label: "Humidité de l'air ",
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                tension: 0.4 // Tension de la courbe
                },
              {
                label: "Pression de l'air ",
                borderColor: 'rgb(100, 99, 132)',
                backgroundColor: 'rgba(100, 99, 132, 0.2)',
                tension: 0.4 // Tension de la courbe
            }]
        },
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

    // Mettre à jour le graphique en fonction des sélections
    function updateChart() {
        // Ici, vous pouvez mettre à jour les données du graphique en fonction des sélections
        // Pour cet exemple, nous utilisons des données statiques
        // Vous pouvez remplacer ces données par des données dynamiques en fonction de l'appareil, du capteur et de la date sélectionnés
        myChart.data.datasets[0].data = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250];
myChart.data.datasets[1].data = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250];
myChart.data.datasets[2].data = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0, -2, -4, -6, -8, -10, -12, -14, -16, -18, -20, -22, -24, -26, -28, -30, -32, -34, -36, -38, -40, -42, -44, -46, -48, -50, -52, -54, -56, -58, -60, -62, -64, -66, -68, -70, -72, -74, -76, -78];
myChart.data.datasets[3].data = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270];
 
      
        myChart.update(); // Mettre à jour le graphique
    }

    // Écouteurs d'événements pour les sélections
    appareilSelect.addEventListener("change", updateChart);
    capteurSelect.addEventListener("change", updateChart);
    dateSelect.addEventListener("change", updateChart);

    // Mettre à jour le graphique au chargement de la page
    updateChart();
  
 
});