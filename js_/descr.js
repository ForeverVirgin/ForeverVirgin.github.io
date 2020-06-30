window.onload=function()
{
	$("#home").addEventListener("click",sendToMain);
	$("#gallery").addEventListener("click",sendToGallery);
}
function sendToMain()
{
	location.href = "index.html";
}
function sendToGallery()
{
	location.href = "gallery.html";
}
