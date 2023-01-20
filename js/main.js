var table = google.visualization.arrayToDataTable(
    [
    ['days','amount'],
    ['mon','17.45'],
    ['tue', '34,91'],
    ['wed','52.36'],
    ['thu','31.07'],
    ['fri','23.39'],
    ['sat',' 43.28'],
    ['sun','25.48']
    ]);

    var graph = new google.visualization.ColumnChart(
    document.getElementById('graph_column'));
    graph.draw(table);

    
    
    