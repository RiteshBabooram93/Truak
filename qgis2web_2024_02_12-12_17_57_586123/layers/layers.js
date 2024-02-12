var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VictoriaCounty_1 = new ol.format.GeoJSON();
var features_VictoriaCounty_1 = format_VictoriaCounty_1.readFeatures(json_VictoriaCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictoriaCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictoriaCounty_1.addFeatures(features_VictoriaCounty_1);
var lyr_VictoriaCounty_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VictoriaCounty_1, 
                style: style_VictoriaCounty_1,
                interactive: false,
                title: '<img src="styles/legend/VictoriaCounty_1.png" /> Victoria County'
            });
var format_StPatrickCounty_2 = new ol.format.GeoJSON();
var features_StPatrickCounty_2 = format_StPatrickCounty_2.readFeatures(json_StPatrickCounty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StPatrickCounty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StPatrickCounty_2.addFeatures(features_StPatrickCounty_2);
var lyr_StPatrickCounty_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StPatrickCounty_2, 
                style: style_StPatrickCounty_2,
                interactive: false,
                title: '<img src="styles/legend/StPatrickCounty_2.png" /> St. Patrick County'
            });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                interactive: true,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_VictoriaCounty_1.setVisible(true);lyr_StPatrickCounty_2.setVisible(true);lyr_Roads_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VictoriaCounty_1,lyr_StPatrickCounty_2,lyr_Roads_3];
lyr_VictoriaCounty_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTIES_': 'COUNTIES_', 'COUNTIES_I': 'COUNTIES_I', 'COUNTY': 'COUNTY', 'COU_CODE': 'COU_CODE', 'LENGTH': 'LENGTH', 'V_1': 'V_1', 'NEWSHADE': 'NEWSHADE', 'COUNTYNO': 'COUNTYNO', 'COUNTYNM': 'COUNTYNM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_StPatrickCounty_2.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTIES_': 'COUNTIES_', 'COUNTIES_I': 'COUNTIES_I', 'COUNTY': 'COUNTY', 'COU_CODE': 'COU_CODE', 'LENGTH': 'LENGTH', 'V_1': 'V_1', 'NEWSHADE': 'NEWSHADE', 'COUNTYNO': 'COUNTYNO', 'COUNTYNM': 'COUNTYNM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Roads_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_VictoriaCounty_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COUNTIES_': 'TextEdit', 'COUNTIES_I': 'TextEdit', 'COUNTY': 'TextEdit', 'COU_CODE': 'Range', 'LENGTH': 'TextEdit', 'V_1': 'TextEdit', 'NEWSHADE': 'Range', 'COUNTYNO': 'TextEdit', 'COUNTYNM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_StPatrickCounty_2.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COUNTIES_': 'TextEdit', 'COUNTIES_I': 'TextEdit', 'COUNTY': 'TextEdit', 'COU_CODE': 'Range', 'LENGTH': 'TextEdit', 'V_1': 'TextEdit', 'NEWSHADE': 'Range', 'COUNTYNO': 'TextEdit', 'COUNTYNM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_VictoriaCounty_1.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COUNTIES_': 'no label', 'COUNTIES_I': 'no label', 'COUNTY': 'no label', 'COU_CODE': 'no label', 'LENGTH': 'no label', 'V_1': 'no label', 'NEWSHADE': 'no label', 'COUNTYNO': 'no label', 'COUNTYNM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_StPatrickCounty_2.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COUNTIES_': 'no label', 'COUNTIES_I': 'no label', 'COUNTY': 'no label', 'COU_CODE': 'no label', 'LENGTH': 'no label', 'V_1': 'no label', 'NEWSHADE': 'no label', 'COUNTYNO': 'no label', 'COUNTYNM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Roads_3.set('fieldLabels', {'fid': 'header label', 'name': 'header label', });
lyr_Roads_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});