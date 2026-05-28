var clusterSize = 0;
    
    var style_Estacionsferroviries = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "13.0px \'Tw Cen MT\', sans-serif";
    var labelFill = "#4d4d4d";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("") || "";
        if (feature.get("NOM") !== null && resolution > 0 && resolution < 7) {
            labelText = String(feature.get("NOM"));
        }
        var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.6 + clusterSize,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(77,77,77,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.017241379310344827,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/transport_train_station2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
    