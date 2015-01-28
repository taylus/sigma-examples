(function() {
    "use strict";
    var s = new sigma('graphContainer');
    
    //set some default graph settings
    s.settings({
        defaultNodeColor: '#f00',
        edgeColor: '#000'
    });
    
    //manually build up a graph from nodes and edges
    s.graph.addNode({
        id: 'node0',
        label: 'Foo',
        x: 0,
        y: 0,
        size: 1
    });
    
    s.graph.addNode({
        id: 'node1',
        label: 'Bar',
        x: 1,
        y: 0,
        size: 1
    });
    
    s.graph.addEdge({
        id: 'edge0',
        source: 'node0',
        target: 'node1',
    });
    
    s.refresh();
}());