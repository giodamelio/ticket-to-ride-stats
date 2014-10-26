$(document).ready(function() {
    $("#mapContainer").cytoscape({
        // Create nodes and edges
        elements: {
            nodes: [
                {
                    data: {
                        id: "1"
                    }
                },
                {
                    data: {
                        id: "2"
                    }
                }
            ],
            edges: [
                {
                    data: {
                        id: "1->2",
                        source: "1",
                        target: "2"
                    }
                }
            ]
        },

        // Set the layout
        layout: {
            name: "grid",
            padding: 5
        },

        // Set the style
        style: cytoscape.stylesheet()
            .selector("node")
                .css({
                    "content": "data(id)"
                }),

        // Graph is ready
        ready: function() {

        }
    });
});

