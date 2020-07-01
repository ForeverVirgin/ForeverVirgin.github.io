window.onload=function()
{
	document.getElementById("home").addEventListener("click",sendToMain);
	document.getElementById("description").addEventListener("click",sendToDescript);
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

var count_gl=0;
function bef()
{
    $.getJSON('js_/mas.json',
    function(data)
    {
        var arr=data["gallery"];
        count_gl-=1;
        if(count_gl<0){count_gl+=7;}
	console.log(count_gl);
	chImg();
    });
}
function af()
{
    $.getJSON('js_/mas.json',
    function(data)
    {
        var arr=data["gallery"];
	count_gl+=1;
	if(count_gl>6){count_gl-=7;}
	console.log(count_gl);
	chImg();
    });
}
function chImg()
{
    var temp='url(img_/';
    temp+=arr[count_gl]["source"];
    temp+=') no-repeat';
    $("#gal").css('background', temp);
    $("#gal").css('background-size', '100%');
}
