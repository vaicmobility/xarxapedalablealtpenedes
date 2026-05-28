var clusterSize = 0;
    
    var style_Polgonsdactivitateconmica = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10.4px \'Tw Cen MT\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("") || "";
        if ("" !== null && resolution > 0 && resolution < 7) {
            labelText = String("");
        }
        var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.0 + clusterSize,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(39,118,187,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
    