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

var count_gl=1;
function bef()
{
    $.getJSON('js_/mas.json',
    function(data)
    {
        var arr=data["gallery"];
        count_gl-=1;
        if(count_gl<1){count_gl+=7;}
    });
}
function af()
{
    $.getJSON('js_/mas.json',
    function(data)
    {
        var arr=data["gallery"];
    });
}
function chImg()
{
    $("#gal").css('backgroundImage', 'background:url("../img_/back.jpg") no-repeat; background-size: 100%;');
}
