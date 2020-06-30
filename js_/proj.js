window.onload=function()
{
	document.getElementByID("gallery").addEventListener("click",sendToGallery);
	document.getElementByID("description").addEventListener("click",sendToDescript);
}
function sendToGallery()
{
	location.href = "gallery.html";
}
function sendToDescript()
{
	location.href = "description.html";
}
