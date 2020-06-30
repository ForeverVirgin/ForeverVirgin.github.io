window.onload=function()
{
	document.getElementById("home").addEventListener("click",sendToMain);
	document.getElementById("gallery").addEventListener("click",sendToGallery);
}
function sendToMain()
{
	location.href = "index.html";
}
function sendToGallery()
{
	location.href = "gallery.html";
}