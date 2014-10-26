$(document).ready(function() {
    $("#mapContainer").cytoscape({
        // Create nodes and edges
        elements: window.ticketToRideMap,

        // Set the layout
        layout: {
            name: "cose",
            animate: true,
            nodeRepulsion: 1000000,
            refresh: 4,
            fit: true
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
                })
            .selector("edge")
                .css({
                    "line-color": "data(color)",
                    "width": 4,
                    "content": "data(length)"
                })
            .selector("edge[bridge>=1]")
                .css({
                    "line-style": "dashed"
                })
            .selector("edge[tunnel='true']")
                .css({
                    "line-style": "dotted"
                }),

        // Graph is ready
        ready: function(evt) {
            var cy = evt.cy;

            // Enable panning and disable box selection
            cy.panningEnabled(true);
            cy.userPanningEnabled(true);
            cy.boxSelectionEnabled(false);
        }
    }).css({
        "background": "brown"
    });
});

