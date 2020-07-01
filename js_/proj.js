window.onload=init;
function init()
{
	document.getElementById("gallery").addEventListener("click",sendToGallery);
	document.getElementById("description").addEventListener("click",sendToDescript);
	var myMap = new ymaps.Map("content", {
            center: [53.27, 108.04],
            zoom: 6
        });
}
function sendToGallery()
{
	location.href = "gallery.html";
}
function sendToDescript()
{
	location.href = "description.html";
}

myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [53.27, 108.04]
            },
            properties: {
                iconContent: 'центр карты',
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        })
