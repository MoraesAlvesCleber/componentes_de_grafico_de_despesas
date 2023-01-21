const ctx = document.getElementById('myChart').getContext('2d');


const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: '$',
            backgroundColor: ['red', 'green', 'black', 'blue', 'yellow', 'pink', 'purple'],
            data: [ 17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
        }],
    },
    options: {
        animations: {
            tension: {
              duration: 8000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
              min: 0,
              max: 100
            }
          }
      
    }
});