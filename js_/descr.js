window.onload=function()
{
	document.getElementByID("home").addEventListener("click",sendToMain);
	document.getElementByID("gallery").addEventListener("click",sendToGallery);
}
function sendToMain()
{
	location.href = "index.html";
}
function sendToGallery()
{
	location.href = "gallery.html";
}
