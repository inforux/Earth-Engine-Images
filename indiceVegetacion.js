//algoritmo para determinar el indice de vegetacion de cualquier zona.

//Definimos banda NDVI para una imagen cualquiera(en este caso, la imagen que dibujemos)
var addNdvi = function (image){
  var ndvi = image.normalizedDifference(['B5','B4']).rename('NDVI');
  return image.addBands(ndvi)
}

//Filtra y mapea la funcion sobre la collecion de imagenes
var wnv = imageCollection.filterDate('2014-01-01','2022-10-01')
  .filterBounds(geometry)
  .filterMetadata('CLOUD_COVER','less_than',40)
  .map(addNdvi);
  
//diseñamos un grafico
var chart= ui.Chart.image.series({
  imageCollection : wnv.select('NDVI'),
  region : geometry,
  reducer : ee.Reducer.mean(),
  scale:30
})

//definimos opciones para el CHART, osea el grafico
var opciones = {
  title:'Indicador de vegetacion - NDVI - Chulucanas/Piura/Peru',
  hAxis:{title:'Tiempo'},
  vAxis:{title:'Vegetacion - NDVI'},
  series:{
    0: { color:'green'}
  }
};

//pasamos lo configurados al CHART
chart = chart.setOptions(opciones)
print(chart)












