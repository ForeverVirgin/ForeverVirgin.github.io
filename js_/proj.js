window.onload=function()
{
	$("#gallery").addEventListener("click",sendToGallery);
	$("#description").addEventListener("click",sendToDescript);
}
function sendToGallery()
{
	location.href = "gallery.html";
}
function sendToDescript()
{
	location.href = "description.html";
}
