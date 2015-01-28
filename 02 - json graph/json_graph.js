(function() {
    "use strict";
    sigma.parsers.json('graph.json', {
        container: 'graphContainer',
        settings: {
            edgeColor: '#000',
            sideMargin: 1
        }
    });
}());