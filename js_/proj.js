window.onload=function()
{
	document.getElementById("gallery").addEventListener("click",sendToGallery);
	document.getElementById("description").addEventListener("click",sendToDescript);
}
function sendToGallery()
{
	location.href = "gallery.html";
}
function sendToDescript()
{
	location.href = "description.html";
}