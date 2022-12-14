//Algortimo para visualizar el % de nubosidad en la region del ucayali PERU
var pullImage = ee.ImageCollection("LANDSAT/LT05/C02/T1").
filterMetadata("CLOUD_COVER","less_than", 20).//indicamos la propiedad 
filterMetadata("WRS_PATH","equals", 3). //filtramos columna
filterMetadata("WRS_ROW","equals", 69). //filtramos fila
filterDate("2005-01-01","2022-01-01") //filtramos por fecha

//Simbologia (decoramos a nuestro gusto)
var simbologia =  {
  "bands": ["B5","B4","B3"],
  "gamma": 1,
  "max": 86.99953831433047,
  "min": 6.559101519118528,
  "opacity": 1,
}

//obtenemos l aimagen especifica
var uniqueImage=ee.Image("LANDSAT/LT05/C02/T1/LT05_003069_20050716")
print(uniqueImage) //imprimimos la imagen 
print(pullImage) //imprimimos el pull de imagenes

//pintamos en el mapa
Map.addLayer(uniqueImage, simbologia, "msilva ex2") // Fin :D 

//LINK
//https://code.earthengine.google.com/links?page_size=10&days=1#:~:text=/8549b5809d52919f8df187c2ba019b7e
