window.onload=function()
{
	$("#home").addEventListener("click",sendToMain);
	$("#description").addEventListener("click",sendToDescript);
        $("#left").addEventListener('click',bef);
        $("#right").addEventListener('click',af);
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
        arr["number"]
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
    $("#gal").css('backgroundImage', 'url(img_/img_1.jpg)');
}
