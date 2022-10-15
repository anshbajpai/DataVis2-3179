
var opt = {
    actions: false,
    defaultStyle: false
}

var vg_1 = "visualization_usa.vg.json";
vegaEmbed("#vg-1", vg_1, opt).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_2 = "visualization_bar_int.vg.json";
vegaEmbed("#vg-2", vg_2, opt).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "visualization_bar_states_int.vg.json";
vegaEmbed("#vg-3", vg_3, opt).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "visualization_interactive.vg.json";
vegaEmbed("#vg-4", vg_4, opt).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "visualization_bar_trump.vg.json";
vegaEmbed("#vg-5", vg_5, opt).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);