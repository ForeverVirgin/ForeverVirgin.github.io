window.onload=function()
{
	document.getElementByID("gallery").addEventListener("click",sendToGallery);
	document.getElementByID("description").addEventListener("click",sendToDescript);
	var myMap = new ymaps.Map("content", {
            center: [55.76, 37.64],
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


