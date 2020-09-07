/* ---------------------- Grafico Pastel ----------------------*/
var newGrafica = Morris.Bar({
    element: 'graph',
    data: [
        {x: 'Junio', y: 8},
        {x: 'Julio', y: 7.3},
        {x: 'Agosto', y: 6},
        {x: 'Septiembre', y: 4},
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

$("#refreshData").on("click",function(){
    var newGrafica1 = [
        {x: 'Junio', y: 7},
        {x: 'Julio', y: 7.5},
        {x: 'Agosto', y: 5},
        {x: 'Septiembre', y: 6}
    ];
    newGrafica.setData(newGrafica1);

})