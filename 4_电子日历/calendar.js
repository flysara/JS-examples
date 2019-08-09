//获取当前时间
var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();

var alldays=0;//当前月份的总天数

//显示当前年份和月份
function showYearMonth(){
	var text=year+"年"+month+"月";
	document.getElementById("month").innerText=text;
}

//计算当前月份包含的天数
function count(){
	if(month!=2){
		if((month==4)||(month==6)||(month==9)||(month==11)){
			alldays=30;
		}else{
			alldays=31;
		}
	}else{
		if((((year%4)==0)&&((year%100)!=0))||((year%400)==0)){
			alldays=29;
		}else{
			alldays=28;
		}
	}
}

//显示当前时间的日历,并且计算当前日子是星期几
function showDate(){
	showYearMonth();//状态栏上显示当前月份
	count();//计算当前月份的天数
	
	//获取本月份的第一天是星期几
	var firstDate=new Date(year,month-1,1);//获取第一天
	var firstDate1=firstDate.getDay();//星期几
	
	//动态添加HTML元素
	var daterow=document.getElementById("days");
	daterow.innerHTML="";
	if(firstDate1!=0)//星期日对应的数字是0,如果本月的第一天不是星期日，则前面的都需要用留白
	{
		for(var i=0;i<firstDate1;i++){
			var dateElement=document.createElement("div");
			dateElement.className="everyday";
			daterow.appendChild(dateElement);
		}
	}
	
	//把当前天数全部显示出来
	for(var j=1;j<alldays;j++){
		var dateElement=document.createElement("div");
		dateElement.className="everyday";
		dateElement.innerText=j;
		
		//如果日期是今天用颜色标注出来
		if(j==day){
			dateElement.classList.add("today");
		}
		daterow.appendChild(dateElement);
	}
}

//显示上个月的日历
function lastMonth(){
	if(month==1){
		year-=1;
		month=12;
	}else{
		month-=1;
	}
	showDate();
}

//显示下个月的日历
function nextMonth(){
	if(month==12){
		year+=1;
		month=1;
	}else{
		month+=1;
	}
	showDate();
}