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
                })
            .selector("node:selected")
                .css({
                    "background-color": "#444444"
                }),

        // Graph is ready
        ready: function(evt) {
            var cy = evt.cy;

            // Enable panning and disable box selection
            cy.panningEnabled(true);
            cy.userPanningEnabled(true);
            cy.boxSelectionEnabled(false);
        }
    });
});

