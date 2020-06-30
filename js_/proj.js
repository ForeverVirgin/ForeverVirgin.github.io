window.onload=function()
{
	document.getElementById("gallery").addEventListener("click",sendToGallery);
	document.getElementById("description").addEventListener("click",sendToDescript);
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


