var arr;

window.onload=function()
{
	$.getJSON('js_/mas.json',
   	function(data)
    	{
        	arr=data["gallery"];
    	});
	document.getElementById("home").addEventListener("click",sendToMain);
	document.getElementById("description").addEventListener("click",sendToDescript);
	document.getElementById("list").addEventListener("click",sendToList);
        document.getElementById("left").addEventListener('click',bef);
        document.getElementById("right").addEventListener('click',af);
        setInterval(chImg,100);
};
function sendToMain()
{
	location.href = "index.html";
}
function sendToDescript()
{
	location.href = "description.html";
}
function sendToList()
{
	location.href = "list.html";
}

var count_gl=0;
function bef()
{
        count_gl-=1;
        if(count_gl<0){count_gl+=7;}
	chImg();
}
function af()
{
	count_gl+=1;
	if(count_gl>6){count_gl-=7;}
	chImg();
}
function chImg()
{
    var temp='url(img_/';
    temp+=arr[count_gl]["source"];
    temp+=') no-repeat';
    $("#gal").css('background', temp);
    $("#gal").css('background-size', '100%');
}
