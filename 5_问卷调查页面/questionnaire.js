//判断多选项的题选项是否为空
function checkBox(name){
	var count=0;//用于统计被勾选的选项数量
	var checkbox=document.getElementsByName(name);//获取指定那么名称的同组的所有复选框元素
	for(var i=0;i<checkbox.length;i++)
	{
		if(checkbox[i].checked){
			count++;
			break;
		}
	}
	if(count==0) return false;
	return true;
}

//判断页面的多选题是否为空
function check(){
	var q4=checkBox("q4");//调用函数判断第四题的选择情况
	if(q4==false){
		alert("第4题起码要选择一个选项");
		return false;
	}
	
	var q5=checkBox("q4");//调用函数判断第五题的选择情况
	if(q5==false){
		alert("第5题起码要选择一个选项");
		return false;
	}
	return true;
}