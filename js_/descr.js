window.onload=function()
{
	document.getElementById("home").addEventListener("click",sendToMain);
	document.getElementById("gallery").addEventListener("click",sendToGallery);
	document.getElementById("list").addEventListener("click",sendToList);
}
function sendToMain()
{
	location.href = "index.html";
}
function sendToGallery()
{
	location.href = "gallery.html";
}
function sendToList()
{
	location.href = "list.html";
}
