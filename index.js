// Seu código JavaScript existente

// Configuração do gráfico de saldo
let saldoLabels = listaContas.map(conta => conta.numero);
let saldoData = listaContas.map(conta => conta.saldo);

var saldoChart = new Chart(document.getElementById('saldoChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: saldoLabels,
        datasets: [{
            label: 'Saldo das Contas',
            data: saldoData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
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

// Configuração do gráfico de tipos de conta
let tipoLabels = listaContas.map(conta => conta.tipo);
let tipoData = listaContas.map(() => 1);

var tipoChart = new Chart(document.getElementById('tipoChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: tipoLabels,
        datasets: [{
            label: 'Tipos de Conta',
            data: tipoData,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
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

// Configuração do gráfico de agências
let agenciaLabels = listaContas.map(conta => conta.agencia);
let agenciaData = listaContas.map(() => 1);

var agenciaChart = new Chart(document.getElementById('agenciaChart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: agenciaLabels,
        datasets: [{
            label: 'Agências Bancárias',
            data: agenciaData,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
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
