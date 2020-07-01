window.onload=init;
function init()
{
	document.getElementById("gallery").addEventListener("click",sendToGallery);
	document.getElementById("description").addEventListener("click",sendToDescript);
	document.getElementById("list").addEventListener("click",sendToList);
	var myMap = new ymaps.Map("content", {
            center: [53.27, 108.04],
            zoom: 6
        });
	myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [53.18176100,107.66246800]
            },
            properties: {
                iconContent: 'Шаман-камень',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
	myGeoObject_2 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [51.34324600,105.15746100]
            },
            properties: {
                iconContent: 'Байкальский заповедник',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
	myGeoObject_3 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [51.69325600,101.67630700]
            },
            properties: {
                iconContent: 'Нилова пустынь',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),	
	myGeoObject_4 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [51.66872300,103.69923900]
            },
            properties: {
                iconContent: 'Хамар-Дабан',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
	myGeoObject_5 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [53.71666700,109.21666700]
            },
            properties: {
                iconContent: 'Забайкальский Национальный парк',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),	
	myGeoObject_6 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [53.20361100,107.33916700]
            },
            properties: {
                iconContent: 'Скала Шаманка',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),	
	myGeoObject_7 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [51.27492200,104.35559500]
            },
            properties: {
                iconContent: 'Мёртвое озеро',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),	
	myGeoObject_8 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [50.73873700,113.47232700]
            },
            properties: {
                iconContent: 'Национальный парк «Алханай»',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        });
	myMap.geoObjects
	.add(myGeoObject)
	.add(myGeoObject_2)
	.add(myGeoObject_3)
	.add(myGeoObject_4)
	.add(myGeoObject_5)
	.add(myGeoObject_6)
	.add(myGeoObject_7)
	.add(myGeoObject_8);
}
function sendToGallery()
{
	location.href = "gallery.html";
}
function sendToDescript()
{
	location.href = "description.html";
}
function sendToList()
{
	location.href = "list.html";
}


