const ctx = document.getElementById('myChart').getContext('2d');


const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{
      label: '$',
      backgroundColor: ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', ' hsl(186, 34%, 60%)', ' hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', ' hsl(10, 79%, 65%)', ' hsl(10, 79%, 65%)'],
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
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
var valores = chart.data.datasets[0].data;
let seg = valores[0];
let ter = valores[1];
let qua = valores[2];
let qui = valores[3];
let sex = valores[4];
let sab = valores[5];
let dom = valores[6];
 
