/* ---------------------- Grafico Pastel ----------------------*/
var grafica1 = Morris.Donut({
    element: 'graph1',
    data: [
        {value: 50, label: 'Robados'},
        {value: 30, label: 'Localizados'},
        {value: 15, label: 'Sin respuesta'},
        {value: 5, label: 'No encontrados'}
    ],
    backgroundColor: '#f2f2f2',
    labelColor1: '#000000',
    colors: [
        '#78231F',
        '#088B00',
        '#D1AA3F',
        '#F77B00'
    ],
    // Responsive
    resize: true,

    formatter: function (x) { return x + "%"}
});

/* ---------------------- Grafico Pastel ----------------------*/
var grafica2 = Morris.Bar({
    element: 'graph2',
    data: [
        {x: 'Samsung', y: 7},
        {x: 'Iphone', y: 8},
        {x: 'Huawei', y: 3.5},
        {x: 'LG', y: 2},
    ],
    xkey: 'x',
    ykeys: ['y'],
    labels: ['Y'],
    // Responsive
    resize: true,
    barColors: function (row, series, type) {
    if (type === 'bar') {
        var red = Math.ceil(255 * row.y / this.ymax);
        return 'rgb(' + red + ',0,0)';
    }
    else {
    return '#000';
        }
    }
});



/* ---------------------- Refrescar Datos ----------------------*/

$("#botData").on("click",function(){
    var newGrafica1 = [
        {value: 60, label: 'Robados'},
        {value: 25, label: 'Localizados'},
        {value: 12, label: 'Sin respuesta'},
        {value: 3, label: 'No encontrados'}
    ];
    grafica1.setData(newGrafica1);

    var newData1 = [
        {x: 'Samsung', y: 8},
        {x: 'Iphone', y: 6},
        {x: 'Huawei', y: 4},
        {x: 'LG', y: 1},
    ];
    grafica2.setData(newData1);
})