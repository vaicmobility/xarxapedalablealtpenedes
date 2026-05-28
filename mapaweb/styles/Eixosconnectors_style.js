var clusterSize = 0;
function categories_Eixosconnectors(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,186,198,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,49,49,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,74,173,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(126,217,87,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(140,82,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,187,56,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,73,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '23':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,49,49,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,74,173,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '26':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,49,49,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(140,82,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '27':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,49,49,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,187,56,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(102,102,102,1.0)', lineDash: [3.8,1.9], lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
    })];
                    break;}};
    
    var style_Eixosconnectors = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'line';
    var offsetX = 8;
    var offsetY = 3; 
        var value = feature.get("Eix connector") || "";
        if ("" !== null) {
            labelText = String("");
        }
        
var style = categories_Eixosconnectors(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);

		var interval = 250;
		var geometry = feature.getGeometry();
		if (geometry.getType() === 'MultiLineString' || geometry.getType() === 'LineString') {
			var lines = geometry.getType() === 'MultiLineString' 
						? geometry.getLineStrings() 
						: [geometry];
			lines.forEach(function(line) {
				var length = line.getLength();
				var intervals = Math.ceil(length / (interval * resolution));
				for (let i = 1; i < intervals; ++i) { // will not place labels at the start and end of the line
					var point = line.getCoordinateAt(i / intervals);
					style.push(new ol.style.Style({
						text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, 'line', bufferColor, bufferWidth),
						geometry: new ol.geom.Point(point)
					}));
				}
			});
		}

    return style;
};
    