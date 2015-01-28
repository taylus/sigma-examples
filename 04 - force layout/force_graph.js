(function() {
    "use strict";
    
    function randomElementFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    var graph = {
        nodes: [],
        edges: []
    };
    
    for (var i = 0; i < 30; i++) {
        graph.nodes.push({
            id: 'n' + i,
            label: 'Node #' + i,
            x: Math.random(),
            y: Math.random(),
            size: 1,
            color: '#f00'
        });
    }
    
    for (i = 0; i < 50; i++) {
        graph.edges.push({
            id: 'e' + i,
            source: randomElementFrom(graph.nodes).id,
            target: randomElementFrom(graph.nodes).id,
            color: '#bbb'
        });
    }
    
    var s = new sigma({
      graph: graph,
      container: 'graphContainer',
      settings: {
            sideMargin: 0.05
        }
    });
    
    s.startForceAtlas2();
}());