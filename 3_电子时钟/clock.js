//获取小时、分钟、秒钟的区域框对象
var hour=document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");

//获取当前时间,并显示出来
function getCurrentTime(){ 
	var date=new Date();
	var h=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	if(h<10){h="0"+h;}
	if(m<10){m="0"+m;}
	if(s<10){s="0"+m;}
	
	hour.innerHTML=h;
	minute.innerHTML=m;
	second.innerHTML=s;
}

//该函数每一秒执行一次
setInterval("getCurrentTime()",1000);



