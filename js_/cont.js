window.onload=function()
{
	document.getElementById("home").addEventListener("click",sendToMain);
	document.getElementById("gallery").addEventListener("click",sendToGallery);
	document.getElementById("list").addEventListener("click",sendToList);
  document.getElementById("description").addEventListener("click",sendToDescr);
}
function sendToMain()
{
	location.href = "../index.html";
}
function sendToGallery()
{
	location.href = "../gallery.html";
}
function sendToList()
{
	location.href = "../list.html";
}
function sendToDescr()
{
	location.href = "../description.html";
}
