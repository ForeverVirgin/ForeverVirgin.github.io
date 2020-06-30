window.onload=init;
function init()
{
	document.getElementById("gallery").addEventListener("click",sendToGallery);
	document.getElementById("description").addEventListener("click",sendToDescript);
	var myMap = new ymaps.Map("map", {
            center: [53.27, 108.04],
            zoom: 7
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


