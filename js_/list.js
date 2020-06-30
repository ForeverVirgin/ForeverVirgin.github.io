window.onload=function()
{
	home.addEventListener("click",sendToMain);
	description.addEventListener("click",sendToDescript);
	gallery.addEventListener("click",sendToGallery);
}
function sendToMain()
{
	location.href = "../index.html";
}
function sendToDescript()
{
	location.href = "description.html";
}
function sendToGallery()
{
	location.href = "gallery.html";
}