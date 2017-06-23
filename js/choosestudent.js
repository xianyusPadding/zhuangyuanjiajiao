
function choose_all(obj){
	var items=document.getElementsByName("each_choose");
	for(var i=0;i<items.length;i++){
		items[i].checked=obj.checked;
	}
	var quanxuan=document.getElementsByName("full_choose");
	for(var i=0;i<quanxuan.length;i++){
		quanxuan[i].checked=obj.checked;
	}
	//setCountAndMoney(getCount(),getMoney());
	setCountAndMoney();
 	setBtnStyle();
}

function _delete(obj){
	var tr=obj.parentElement.parentElement;
	var table=tr.parentElement;
	table.deleteRow(tr.rowIndex);
	//setCountAndMoney(getCount(),getMoney());
	setCountAndMoney();
	setBtnStyle();
}

//不知道哪里写错了
function delete_all(){
	var items=document.getElementsByName("each_choose");
	for(var i=0;i<items.length;i++){
		if(items[i].checked==true){
			var tr=items[i].parentElement.parentElement;
			var table=tr.parentElement;
			table.deleteRow(tr.rowIndex);
			i--;
		}
	}
	//setCountAndMoney(getCount(),getMoney());
	setCountAndMoney();
	setBtnStyle();
}

function each_choose(){
	var flag=true;
	var items=document.getElementsByName("each_choose");
	for(var i=0;i<items.length;i++){
		if(items[i].checked==false){
			flag=false;
			break;
		}
	}
	var quanxuan=document.getElementsByName("full_choose");
	for(var j=0;j<quanxuan.length;j++){
		quanxuan[j].checked=flag;
	}
	 //setCountAndMoney(getCount(),getMoney());
	setCountAndMoney();
	setBtnStyle();
}

/*设置结算按钮的格式*/
function setBtnStyle(){
	var num=document.getElementsByClassName("num")[0].innerHTML;
	var jiesuan=document.getElementById("total_btn");
	if(parseInt(num)==0){
		jiesuan.className="jiesuan1";
		jiesuan.setAttribute("disabled","disabled");	//添加熟悉
	}
	else{
		jiesuan.className="jiesuan2";
		jiesuan.removeAttribute("disabled");			//移除熟悉
	}
		
}

/*
function getDay(obj){
	var div = obj.parentElement.parentElement.parentElement;
	alert(div);
	var son_div = div.getElementsByClassName("frm_msg")[0];
	var div2 = son_div.getElementsByTagName("div")[1];
	var inputs = div2.getElementsByTagName("input");
	var all_day=getBeforeDate(inputs[1])-getBeforeDate(inputs[0]);
	return all_day;
}
*/
/*
 function getDay2(){
	var date=document.getElementById("date1").innerHTML;
	var star_time=date.substring(0,10);
	var end_time=date.substring(47,57);
	var all_day=getBeforeDate(end_time)-getBeforeDate(star_time);
	return all_day;
}
 */

/*
function setMoney(){
	alert("OK");
	var items=document.getElementsByName("each_choose");
	for(var i=0;i<items.length;i++){
		if(items[i].checked==true){
			// 获取金额
			var tr = items[i].parentElement.parentElement;
			var td3 = tr.cells[2].innerHTML;
			var td5 = tr.cells[4];
//			var div = td5.getElementsByClassName("ta_date")[0];
//			alert("No");
//			alert(div.name);
//			//这里不知道哪里错了
//			var strday = div.getElementsByClassName("date_title")[0].innerHTML;
			var strspan=document.getElementById("date"+(i+1).toString()).innerHTML
			var star_time=strspan.substring(0,10);
			var end_time=strspan.substring(47,57);
			var all_day=getBeforeDate(end_time)-getBeforeDate(star_time);
		    var money=parseFloat(td3)*parseInt(all_day);
			td5.innerHTML=money.toString().substr(0,6);
		}
		
	}
}
*/

//已选老师总数量
function getCount(){
	var totalCount=0;
	var items=document.getElementsByName("each_choose");
	for(var i=0;i<items.length;i++){
		if(items[i].checked==true){
			totalCount +=1;// 累加
		}
	}
	return totalCount;
}

//总金额
function getMoney(){
	var totalCount=0.0;
	var items=document.getElementsByName("each_choose");
	for(var i=0;i<items.length;i++){
		if(items[i].checked==true){
			// 获取金额
			var tr = items[i].parentElement.parentElement;
			/*
			var td3 = tr.cells[2].innerHTML;
			var td4 = tr.cells[3];
			var strdiv=td4.getElementsByClassName("ta_date")[0];
			var strspan=strdiv.getElementsByClassName("date_title")[0].innerHTML;
			var star_time=strspan.substring(0,10);
			var end_time=strspan.substring(47,57);
			var all_day=getBeforeDate(end_time)-getBeforeDate(star_time);
		    var money=parseFloat(td3)*parseInt(all_day);
		    */
		    var td5=tr.cells[4].innerHTML;
		    totalCount+=parseInt(td5);
		}
	}
	//修改一下
	return totalCount.toString().substr(0,6);
}

function setCountAndMoney(){
	var strnum=document.getElementsByClassName("num")[0];
	var strmoney=document.getElementsByClassName("money")[0];
	strnum.innerHTML=getCount();
	strmoney.innerHTML=getMoney();
}

function check_day(){
	
}



/*格式 getBeforeDate('2015-5-20') */
/*
* auth:120975587@qq.com
* time:2015.5.6 9:45
* ******************
*/
function getBeforeDate(n){
    var now = new Date();
    var aftertime = new Date(n);
    var year = now.getFullYear();
    var mon= now.getMonth()+1;
    var day= now.getDate();
    var year_after = aftertime.getFullYear();
    var mon_after = aftertime.getMonth()+1;
    var day_after = aftertime.getDate();
    var chs = 0;
    //获取当月的天数
    function DayNumOfMonth(Year,Month)
    {
        return 32 - new Date(Year,Month-1,32).getDate();
    }
    if(aftertime.getTime() - now.getTime() < 0){
        var temp1 = day_after;
        var temp2 = mon_after;
        var temp3 = year_after;
        day_after = day;
        mon_after = mon;
        year_after = year;
        day = temp1;
        mon = temp2;
        year = temp3;
    }
    if(year == year_after){//不跨年
        if(mon == mon_after){//不跨年不跨月
            chs += day_after-day;
        }else{//不跨年跨月
            chs += DayNumOfMonth(year,mon)- day+1;//加上第一个不满的
            for(var i=1;i< mon_after-mon;i++){
                chs += DayNumOfMonth(year,mon+i);
            }
            chs += day_after-1;//加上
        }    
    }else{//存在跨年
        chs += DayNumOfMonth(year,mon)- day+1;//加上开始年份不满的一个月
        for(var m=1;m<12-mon;m++){
            chs += DayNumOfMonth(year,mon+m);
        }
        for(var j=1;j < year_after-year;j++){
            if((year+j)%400 == 0 || (year+j)%4 == 0 && (year+j)%100 != 0){
                chs += 366;
            }else{
                chs += 365;
            }
        }
        for(var n=1;n <= mon_after;n++){
            chs += DayNumOfMonth(year_after,n);
        }
        chs += day_after-1;
    }
    if(aftertime.getTime() - now.getTime() < 0){
        return -chs;
    }else{
         return chs;
    }
}





























