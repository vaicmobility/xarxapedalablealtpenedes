ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25831").setExtent([365175.322939, 4561120.147238, 413499.215268, 4599586.699102]);
var wms_layers = [];

var lyr_EsriTopographic = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
        
var lyr_Basesatllit = new ol.layer.Tile({
            'title': 'Base satèl·lit',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_Basetopogrfica = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://geoserveis.icgc.cat/servei/catalunya/topografia-territorial/wms?",
                attributions: '<a class="legend-realtime"><b>Base topogràfica</b><br />\
                <img src="</td></tr><tr><td>Formatos de imagen"></a>',
                params: {
                "LAYERS": "topografia-territorial_gris",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Base topogràfica<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend-realtime">\
            <img src="</td></tr><tr><td>Formatos de imagen"></a>',
            popuplayertitle: 'Base topogràfica',
            permalink: 'Basetopogrfica',
            opacity: 1.000000,
            
            
            baseLayer: true,
            });
    wms_layers.push([lyr_Basetopogrfica, 0]);
    lyr_Basetopogrfica.setVisible(false);
    

var lyr_Eixosconnectors = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Eixosconnectors',
    source: new ol.source.Vector(), 
    permalink: "Eixosconnectors",
    popuplayertitle: 'Eixos connectors',
    creationdate: '2026-06-03 17:22:22',
    interactive: true,
    style: style_Eixosconnectors,
});
function load_Eixosconnectors_data() {
    var format_Eixosconnectors = new ol.format.GeoJSON();
    var features_Eixosconnectors = format_Eixosconnectors.readFeatures(json_Eixosconnectors, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
    var jsonSource_Eixosconnectors = new ol.source.Vector({
    attributions: '<a class="legend"><b>Eixos connectors</b><br />\
        <img src="styles/legend/Eixosconnectors_0.png" /> 1<br />\
        <img src="styles/legend/Eixosconnectors_1.png" /> 2<br />\
        <img src="styles/legend/Eixosconnectors_2.png" /> 3<br />\
        <img src="styles/legend/Eixosconnectors_3.png" /> 4<br />\
        <img src="styles/legend/Eixosconnectors_4.png" /> 5<br />\
        <img src="styles/legend/Eixosconnectors_5.png" /> 6<br />\
        <img src="styles/legend/Eixosconnectors_6.png" /> 7<br />\
        <img src="styles/legend/Eixosconnectors_7.png" /> 23<br />\
        <img src="styles/legend/Eixosconnectors_8.png" /> 26<br />\
        <img src="styles/legend/Eixosconnectors_9.png" /> 27<br />\
        <img src="styles/legend/Eixosconnectors_10.png" /> Resta de la xarxa<br /></a>'
        });
    lyr_Eixosconnectors.setSource(jsonSource_Eixosconnectors);
    lyr_Eixosconnectors.set(
    "title", '<div id="layertitle">Eixos connectors<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Eixosconnectors_0.png" /> 1<br />\
        <img src="styles/legend/Eixosconnectors_1.png" /> 2<br />\
        <img src="styles/legend/Eixosconnectors_2.png" /> 3<br />\
        <img src="styles/legend/Eixosconnectors_3.png" /> 4<br />\
        <img src="styles/legend/Eixosconnectors_4.png" /> 5<br />\
        <img src="styles/legend/Eixosconnectors_5.png" /> 6<br />\
        <img src="styles/legend/Eixosconnectors_6.png" /> 7<br />\
        <img src="styles/legend/Eixosconnectors_7.png" /> 23<br />\
        <img src="styles/legend/Eixosconnectors_8.png" /> 26<br />\
        <img src="styles/legend/Eixosconnectors_9.png" /> 27<br />\
        <img src="styles/legend/Eixosconnectors_10.png" /> Resta de la xarxa<br /></a>'
        );
var featureCounter_Eixosconnectors = 1;
jsonSource_Eixosconnectors.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Eixosconnectors++);
    feature.set("layerObject", lyr_Eixosconnectors);
});        
jsonSource_Eixosconnectors.addFeatures(features_Eixosconnectors);
}

var lyr_NodesdepoblaciAltPeneds = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> NodesdepoblaciAltPeneds',
    source: new ol.source.Vector(), 
    permalink: "NodesdepoblaciAltPeneds",
    popuplayertitle: 'Nodes de població Alt Penedès',
    creationdate: '2026-06-03 17:22:22',
    interactive: false,
    style: style_NodesdepoblaciAltPeneds,
});
function load_NodesdepoblaciAltPeneds_data() {
    var format_NodesdepoblaciAltPeneds = new ol.format.GeoJSON();
    var features_NodesdepoblaciAltPeneds = format_NodesdepoblaciAltPeneds.readFeatures(json_NodesdepoblaciAltPeneds, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
    var jsonSource_NodesdepoblaciAltPeneds = new ol.source.Vector({
    attributions: '<a class="legend"><b>Nodes de població Alt Penedès</b><br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_0.png" /> 0 - 500 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_1.png" /> 500 - 1000 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_2.png" /> 1000 - 5000 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_3.png" /> 5000 - 15000 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_4.png" /> 15000 - 50000 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_5.png" /> 50000 - 100000 <br /></a>'
        });
    lyr_NodesdepoblaciAltPeneds.setSource(jsonSource_NodesdepoblaciAltPeneds);
    lyr_NodesdepoblaciAltPeneds.set(
    "title", '<div id="layertitle">Nodes de població Alt Penedès<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/NodesdepoblaciAltPeneds_0.png" /> 0 - 500 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_1.png" /> 500 - 1000 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_2.png" /> 1000 - 5000 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_3.png" /> 5000 - 15000 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_4.png" /> 15000 - 50000 <br />\
        <img src="styles/legend/NodesdepoblaciAltPeneds_5.png" /> 50000 - 100000 <br /></a>'
        );
var features_NodesdepoblaciAltPeneds_SinglePoint = []
features_NodesdepoblaciAltPeneds.forEach(function(feature) {
    var coords = feature.getGeometry().getCoordinates();
    coords.forEach(function(coord) {
        features_NodesdepoblaciAltPeneds_SinglePoint.push(new ol.Feature(new ol.geom.Point(coord)));
    });
});
var featureCounter_NodesdepoblaciAltPeneds = 1;
jsonSource_NodesdepoblaciAltPeneds.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_NodesdepoblaciAltPeneds++);
    feature.set("layerObject", lyr_NodesdepoblaciAltPeneds);
});
jsonSource_NodesdepoblaciAltPeneds.addFeatures(features_NodesdepoblaciAltPeneds_SinglePoint);
}

var lyr_Llocsdintersturstic = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Llocsdintersturstic',
    source: new ol.source.Vector(), 
    permalink: "Llocsdintersturstic",
    popuplayertitle: 'Llocs d\'interès turístic',
    creationdate: '2026-06-03 17:22:22',
    interactive: true,
    style: style_Llocsdintersturstic,
});
function load_Llocsdintersturstic_data() {
    var format_Llocsdintersturstic = new ol.format.GeoJSON();
    var features_Llocsdintersturstic = format_Llocsdintersturstic.readFeatures(json_Llocsdintersturstic, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
    var jsonSource_Llocsdintersturstic = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Llocsdintersturstic.png" /> <b>Llocs d\'interès turístic</b>'
    });
    lyr_Llocsdintersturstic.setSource(jsonSource_Llocsdintersturstic);
    lyr_Llocsdintersturstic.set(
    "title", '<img src="styles/legend/Llocsdintersturstic.png" /> Llocs d\'interès turístic'
    );
var featureCounter_Llocsdintersturstic = 1;
jsonSource_Llocsdintersturstic.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Llocsdintersturstic++);
    feature.set("layerObject", lyr_Llocsdintersturstic);
});        
jsonSource_Llocsdintersturstic.addFeatures(features_Llocsdintersturstic);
}

var lyr_Polgonsdactivitateconmica = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Polgonsdactivitateconmica',
    source: new ol.source.Vector(), 
    permalink: "Polgonsdactivitateconmica",
    popuplayertitle: 'Polígons d\'activitat econòmica',
    creationdate: '2026-06-03 17:22:22',
    interactive: true,
    style: style_Polgonsdactivitateconmica,
});
function load_Polgonsdactivitateconmica_data() {
    var format_Polgonsdactivitateconmica = new ol.format.GeoJSON();
    var features_Polgonsdactivitateconmica = format_Polgonsdactivitateconmica.readFeatures(json_Polgonsdactivitateconmica, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
    var jsonSource_Polgonsdactivitateconmica = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Polgonsdactivitateconmica.png" /> <b>Polígons d\'activitat econòmica</b>'
    });
    lyr_Polgonsdactivitateconmica.setSource(jsonSource_Polgonsdactivitateconmica);
    lyr_Polgonsdactivitateconmica.set(
    "title", '<img src="styles/legend/Polgonsdactivitateconmica.png" /> Polígons d\'activitat econòmica'
    );
var featureCounter_Polgonsdactivitateconmica = 1;
jsonSource_Polgonsdactivitateconmica.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Polgonsdactivitateconmica++);
    feature.set("layerObject", lyr_Polgonsdactivitateconmica);
});        
jsonSource_Polgonsdactivitateconmica.addFeatures(features_Polgonsdactivitateconmica);
}

var lyr_Nodesquotidianscomarcals = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Nodesquotidianscomarcals',
    source: new ol.source.Vector(), 
    permalink: "Nodesquotidianscomarcals",
    popuplayertitle: 'Nodes quotidians comarcals',
    creationdate: '2026-06-03 17:22:22',
    interactive: true,
    style: style_Nodesquotidianscomarcals,
});
function load_Nodesquotidianscomarcals_data() {
    var format_Nodesquotidianscomarcals = new ol.format.GeoJSON();
    var features_Nodesquotidianscomarcals = format_Nodesquotidianscomarcals.readFeatures(json_Nodesquotidianscomarcals, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
    var jsonSource_Nodesquotidianscomarcals = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Nodesquotidianscomarcals.png" /> <b>Nodes quotidians comarcals</b>'
    });
    lyr_Nodesquotidianscomarcals.setSource(jsonSource_Nodesquotidianscomarcals);
    lyr_Nodesquotidianscomarcals.set(
    "title", '<img src="styles/legend/Nodesquotidianscomarcals.png" /> Nodes quotidians comarcals'
    );
var featureCounter_Nodesquotidianscomarcals = 1;
jsonSource_Nodesquotidianscomarcals.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Nodesquotidianscomarcals++);
    feature.set("layerObject", lyr_Nodesquotidianscomarcals);
});        
jsonSource_Nodesquotidianscomarcals.addFeatures(features_Nodesquotidianscomarcals);
}

var lyr_Centreseducatius = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Centreseducatius',
    source: new ol.source.Vector(), 
    permalink: "Centreseducatius",
    popuplayertitle: 'Centres educatius',
    creationdate: '2026-06-03 17:22:22',
    interactive: true,
    style: style_Centreseducatius,
});
function load_Centreseducatius_data() {
    var format_Centreseducatius = new ol.format.GeoJSON();
    var features_Centreseducatius = format_Centreseducatius.readFeatures(json_Centreseducatius, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
    var jsonSource_Centreseducatius = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Centreseducatius.png" /> <b>Centres educatius</b>'
    });
    lyr_Centreseducatius.setSource(jsonSource_Centreseducatius);
    lyr_Centreseducatius.set(
    "title", '<img src="styles/legend/Centreseducatius.png" /> Centres educatius'
    );
var featureCounter_Centreseducatius = 1;
jsonSource_Centreseducatius.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Centreseducatius++);
    feature.set("layerObject", lyr_Centreseducatius);
});        
jsonSource_Centreseducatius.addFeatures(features_Centreseducatius);
}

var lyr_Estacionsferroviries = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Estacionsferroviries',
    source: new ol.source.Vector(), 
    permalink: "Estacionsferroviries",
    popuplayertitle: 'Estacions ferroviàries',
    creationdate: '2026-06-03 17:22:22',
    interactive: true,
    style: style_Estacionsferroviries,
});
function load_Estacionsferroviries_data() {
    var format_Estacionsferroviries = new ol.format.GeoJSON();
    var features_Estacionsferroviries = format_Estacionsferroviries.readFeatures(json_Estacionsferroviries, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
    var jsonSource_Estacionsferroviries = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Estacionsferroviries.png" /> <b>Estacions ferroviàries</b>'
    });
    lyr_Estacionsferroviries.setSource(jsonSource_Estacionsferroviries);
    lyr_Estacionsferroviries.set(
    "title", '<img src="styles/legend/Estacionsferroviries.png" /> Estacions ferroviàries'
    );
var featureCounter_Estacionsferroviries = 1;
jsonSource_Estacionsferroviries.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Estacionsferroviries++);
    feature.set("layerObject", lyr_Estacionsferroviries);
});        
jsonSource_Estacionsferroviries.addFeatures(features_Estacionsferroviries);
}

// Funzione per caricare e aggiornare i layer uno alla volta
    // Array per i layer visibili/non visibili all'avvio (solo layer vettori e raster)
    var layersVisibleOnStart = [
        {layer: lyr_Eixosconnectors, source: 'Eixosconnectors'},{layer: lyr_NodesdepoblaciAltPeneds, source: 'NodesdepoblaciAltPeneds'},{layer: lyr_Llocsdintersturstic, source: 'Llocsdintersturstic'},{layer: lyr_Polgonsdactivitateconmica, source: 'Polgonsdactivitateconmica'},{layer: lyr_Nodesquotidianscomarcals, source: 'Nodesquotidianscomarcals'},{layer: lyr_Centreseducatius, source: 'Centreseducatius'},{layer: lyr_Estacionsferroviries, source: 'Estacionsferroviries'}
    ];
    var layersHiddenOnStart = [
        
    ];
    // Funzione per caricare il JSON source
	function loadJSON(fileName) {
		return new Promise((resolve, reject) => {
			let triedFallback = false; // Flag per controllare se abbiamo già provato il fallback
			function tryLoad(src) {
				//console.log(`Cerco file in: ${src}`);
				const script = document.createElement('script'); // Crea un nuovo script per ogni tentativo
				script.src = src;
				script.onload = () => resolve(fileName); // Risolve la promessa al successo
				script.onerror = () => {
					if (!triedFallback) {
						triedFallback = true; // Segna che abbiamo già provato la seconda opzione
						//console.warn(`File non trovato: ${src}, provo ../layers/${fileName}.js`);
						tryLoad(`../layers/${fileName}.js`); // Secondo tentativo
					} else {
						reject(new Error(`Errore nel caricamento di ${fileName}.js`)); // Rifiuta se anche il secondo fallisce
					}
				};
				document.head.appendChild(script); // Aggiungi il tag <script> al DOM
			}
			tryLoad(`layers/${fileName}.js`); // Primo tentativo
		});
	}
    // Carico i dati nei layer
    async function loadLayers() {
        try {
            // Carica prima i layer visibili all'avvio
            for (const { layer, source } of layersVisibleOnStart) {
                await loadJSON(source);
                // Inietta i dati del layer
                window[`load_${source}_data`]();
            }
            // Carica i layer non visibili all'avvio
            for (const { layer, source } of layersHiddenOnStart) {
                await loadJSON(source);
                // Inietta i dati del layer
                window[`load_${source}_data`]();
            }
            // Quando tutti i layer sono stati caricati e aggiornati, emetti 'layersLoaded'
            window.layersLoadedFlag = true;
            const layersLoaded = new Event('layersLoaded');
            document.dispatchEvent(layersLoaded);
        } catch (error) {
            console.error("Errore nel caricamento dei layer:", error);
            throw error;
        }
    }
    // Esegui il caricamento dei layer una volta che il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        loadLayers();  // Inizia il caricamento dei layer uno per volta
    });

var group_NodesdintersPeneds = new ol.layer.Group({
                                layers: [lyr_NodesdepoblaciAltPeneds,lyr_Llocsdintersturstic,lyr_Polgonsdactivitateconmica,lyr_Nodesquotidianscomarcals,lyr_Centreseducatius,lyr_Estacionsferroviries,],
                                openInLayerSwitcher: true,
                                title: 'Nodes d\'interès Penedès'});
var group_PCCXarxaproposta = new ol.layer.Group({
                                layers: [lyr_Eixosconnectors,],
                                openInLayerSwitcher: false,
                                title: 'PCC Xarxa proposta'});

lyr_EsriTopographic.setVisible(true);lyr_Basesatllit.setVisible(false);lyr_Basetopogrfica.setVisible(false);lyr_Eixosconnectors.setVisible(true);lyr_NodesdepoblaciAltPeneds.setVisible(true);lyr_Llocsdintersturstic.setVisible(true);lyr_Polgonsdactivitateconmica.setVisible(true);lyr_Nodesquotidianscomarcals.setVisible(true);lyr_Centreseducatius.setVisible(true);lyr_Estacionsferroviries.setVisible(true);
var layersList = [lyr_EsriTopographic,lyr_Basesatllit,lyr_Basetopogrfica,group_PCCXarxaproposta,group_NodesdintersPeneds];
lyr_Eixosconnectors.set('fieldAliases', {'fid': 'fid', 'Estat_Xarxa': 'Estat_Xarxa', 'Tipologia actual': 'Tipologia actual', 'Longitud': 'Longitud', 'Jerarquia': 'Jerarquia', 'Titular': 'Titular', 'Ciclabilitat quotidiana': 'Ciclabilitat quotidiana', 'Amplada': 'Amplada', 'Segregació': 'Segregació', 'Paviment': 'Paviment', 'Paviment diferenciat': 'Paviment diferenciat', 'Estat paviment': 'Estat paviment', 'Convivencia vianants': 'Convivencia vianants', 'Trànsit': 'Trànsit', 'Velocitat': 'Velocitat', 'Pesants': 'Pesants', 'Senyalització prioritat bici': 'Senyalització prioritat bici', 'Senyalització orientació bici': 'Senyalització orientació bici', 'Enllumenat': 'Enllumenat', 'Propostes WEB': 'Propostes WEB', 'Projectes': 'Projectes', 'Fase 1 Infraestructura': 'Fase 1 Infraestructura', 'Fase 1 Senyalització': 'Fase 1 Senyalització', 'Tipologia de solucio': 'Tipologia de solucio', 'Accions infraestructura': 'Accions infraestructura', 'Fase 2': 'Fase 2', 'Fase 1_Seleccio': 'Fase 1_Seleccio', 'Eix connector': 'Eix connector', });
lyr_NodesdepoblaciAltPeneds.set('fieldAliases', {'TIPUS_CAP': 'TIPUS_CAP', 'ES_CAP_PR': 'ES_CAP_PR', 'MUNICIPI': 'MUNICIPI', 'COMARCA': 'COMARCA', 'PROVINCIA': 'PROVINCIA', 'Muni_Codi': 'Muni_Codi', 'Nom munici': 'Nom munici', 'Homes': 'Homes', 'Dones': 'Dones', 'Total': 'Total', 'fid': 'fid', 'Poblacio C': 'Poblacio C', 'ID TEXT': 'ID TEXT', 'POBLACIO': 'POBLACIO', });
lyr_Llocsdintersturstic.set('fieldAliases', {'fid': 'fid', 'Tipologia': 'Tipologia', 'Nom': 'Nom', 'Comarca': 'Comarca', });
lyr_Polgonsdactivitateconmica.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOM': 'NOM', 'SUPERFICIE': 'SUPERFICIE', 'PERIMETRE': 'PERIMETRE', });
lyr_Nodesquotidianscomarcals.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', });
lyr_Centreseducatius.set('fieldAliases', {'fid': 'fid', 'Codi_centre': 'Codi_centre', 'Denominació_completa': 'Denominació_completa', 'Nom_naturalesa': 'Nom_naturalesa', 'Estudis': 'Estudis', 'Nom': 'Nom', 'Tipologia': 'Tipologia', 'Naturales': 'Naturales', });
lyr_Estacionsferroviries.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODI1_ESTA': 'CODI1_ESTA', 'NOM': 'NOM', 'Comentaris': 'Comentaris', 'H23': 'H23', 'H27': 'H27', 'Estat actual': 'Estat actual', 'Operador': 'Operador', 'GENER_2024': 'GENER_2024', 'Estacions_Combinades': 'Estacions_Combinades', 'Linia': 'Linia', 'Validacions_Dia': 'Validacions_Dia', 'Corredors': 'Corredors', });
lyr_Eixosconnectors.set('fieldImages', {'fid': 'TextEdit', 'Estat_Xarxa': 'TextEdit', 'Tipologia actual': 'TextEdit', 'Longitud': 'TextEdit', 'Jerarquia': 'TextEdit', 'Titular': 'TextEdit', 'Ciclabilitat quotidiana': 'Range', 'Amplada': 'Range', 'Segregació': 'Range', 'Paviment': 'Range', 'Paviment diferenciat': 'Range', 'Estat paviment': 'Range', 'Convivencia vianants': 'Range', 'Trànsit': 'Range', 'Velocitat': 'Range', 'Pesants': 'Range', 'Senyalització prioritat bici': 'Range', 'Senyalització orientació bici': 'Range', 'Enllumenat': 'Range', 'Propostes WEB': 'Range', 'Projectes': 'TextEdit', 'Fase 1 Infraestructura': 'Range', 'Fase 1 Senyalització': 'Range', 'Tipologia de solucio': 'TextEdit', 'Accions infraestructura': 'TextEdit', 'Fase 2': 'Range', 'Fase 1_Seleccio': 'Range', 'Eix connector': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_NodesdepoblaciAltPeneds.set('fieldImages', {'TIPUS_CAP': 'TextEdit', 'ES_CAP_PR': 'TextEdit', 'MUNICIPI': 'TextEdit', 'COMARCA': 'TextEdit', 'PROVINCIA': 'TextEdit', 'Muni_Codi': 'TextEdit', 'Nom munici': 'TextEdit', 'Homes': 'TextEdit', 'Dones': 'TextEdit', 'Total': 'TextEdit', 'fid': 'TextEdit', 'Poblacio C': 'TextEdit', 'ID TEXT': 'TextEdit', 'POBLACIO': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Llocsdintersturstic.set('fieldImages', {'fid': 'TextEdit', 'Tipologia': 'TextEdit', 'Nom': 'TextEdit', 'Comarca': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Polgonsdactivitateconmica.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'PERIMETRE': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Nodesquotidianscomarcals.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Centreseducatius.set('fieldImages', {'fid': 'TextEdit', 'Codi_centre': 'TextEdit', 'Denominació_completa': 'TextEdit', 'Nom_naturalesa': 'TextEdit', 'Estudis': 'TextEdit', 'Nom': 'TextEdit', 'Tipologia': 'TextEdit', 'Naturales': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Estacionsferroviries.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODI1_ESTA': 'TextEdit', 'NOM': 'TextEdit', 'Comentaris': 'TextEdit', 'H23': 'Range', 'H27': 'Range', 'Estat actual': 'TextEdit', 'Operador': 'TextEdit', 'GENER_2024': 'Range', 'Estacions_Combinades': 'TextEdit', 'Linia': 'TextEdit', 'Validacions_Dia': 'Range', 'Corredors': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Eixosconnectors.set('fieldLabels', {'fid': 'hidden field', 'Estat_Xarxa': 'inline label - visible with data', 'Tipologia actual': 'inline label - visible with data', 'Longitud': 'hidden field', 'Jerarquia': 'hidden field', 'Titular': 'hidden field', 'Ciclabilitat quotidiana': 'hidden field', 'Amplada': 'hidden field', 'Segregació': 'hidden field', 'Paviment': 'hidden field', 'Paviment diferenciat': 'hidden field', 'Estat paviment': 'hidden field', 'Convivencia vianants': 'hidden field', 'Trànsit': 'hidden field', 'Velocitat': 'hidden field', 'Pesants': 'hidden field', 'Senyalització prioritat bici': 'hidden field', 'Senyalització orientació bici': 'hidden field', 'Enllumenat': 'hidden field', 'Propostes WEB': 'hidden field', 'Projectes': 'hidden field', 'Fase 1 Infraestructura': 'hidden field', 'Fase 1 Senyalització': 'hidden field', 'Tipologia de solucio': 'inline label - visible with data', 'Accions infraestructura': 'hidden field', 'Fase 2': 'hidden field', 'Fase 1_Seleccio': 'hidden field', 'Eix connector': 'inline label - visible with data', });
lyr_NodesdepoblaciAltPeneds.set('fieldLabels', {'TIPUS_CAP': 'no label', 'ES_CAP_PR': 'no label', 'MUNICIPI': 'no label', 'COMARCA': 'no label', 'PROVINCIA': 'no label', 'Muni_Codi': 'no label', 'Nom munici': 'no label', 'Homes': 'no label', 'Dones': 'no label', 'Total': 'no label', 'fid': 'no label', 'Poblacio C': 'no label', 'ID TEXT': 'no label', 'POBLACIO': 'no label', });
lyr_Llocsdintersturstic.set('fieldLabels', {'fid': 'hidden field', 'Tipologia': 'hidden field', 'Nom': 'no label', 'Comarca': 'hidden field', });
lyr_Polgonsdactivitateconmica.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NOM': 'no label', 'SUPERFICIE': 'hidden field', 'PERIMETRE': 'hidden field', });
lyr_Nodesquotidianscomarcals.set('fieldLabels', {'fid': 'hidden field', 'Nom': 'no label', });
lyr_Centreseducatius.set('fieldLabels', {'fid': 'hidden field', 'Codi_centre': 'hidden field', 'Denominació_completa': 'no label', 'Nom_naturalesa': 'hidden field', 'Estudis': 'hidden field', 'Nom': 'hidden field', 'Tipologia': 'hidden field', 'Naturales': 'hidden field', });
lyr_Estacionsferroviries.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'CODI1_ESTA': 'hidden field', 'NOM': 'no label', 'Comentaris': 'hidden field', 'H23': 'hidden field', 'H27': 'hidden field', 'Estat actual': 'hidden field', 'Operador': 'hidden field', 'GENER_2024': 'hidden field', 'Estacions_Combinades': 'hidden field', 'Linia': 'hidden field', 'Validacions_Dia': 'hidden field', 'Corredors': 'hidden field', });
lyr_Estacionsferroviries.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});