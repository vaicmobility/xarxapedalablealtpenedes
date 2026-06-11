var clusterSize = 0;
    
    var style_NodesdepoblaciAltPeneds = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "13.0px \'Tw Cen MT\', sans-serif";
    var labelFill = "#4d4d4d";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("POBLACIO") || "";
        if ("" !== null && resolution > 0 && resolution < 14) {
            labelText = String("");
        }
        if (value >= 0.000000 && value <= 500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + clusterSize,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(250,226,107,0.914)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 500.000000 && value <= 1000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.6 + clusterSize,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(250,226,107,0.914)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1000.000000 && value <= 5000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15.2 + clusterSize,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(250,226,107,0.914)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5000.000000 && value <= 15000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 20.8 + clusterSize,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(250,226,107,0.914)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 15000.000000 && value <= 50000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 26.4 + clusterSize,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(250,226,107,0.914)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 50000.000000 && value <= 100000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 32.0 + clusterSize,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(250,226,107,0.914)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
    