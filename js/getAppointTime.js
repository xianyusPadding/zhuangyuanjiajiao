//			var STATS_START_TIME = '4329148800';
	var myDate=new Date();
	var the_Year=myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	var the_Month=myDate.getMonth()+1; //获取当前月份(0-11,0代表1月)         // 所以获取当前月份是myDate.getMonth()+1; 
	if(parseInt(the_Month)<10)
		the_Month='0'+the_Month;
	var the_Day=myDate.getDate(); //获取当前日(1-31)
	if(parseInt(the_Day)<10)
		the_Day="0"+the_Day;
	var star_time=the_Year.toString()+'-'+the_Month.toString()+'-'+the_Day.toString();
	var end_time=getTomorrow(the_Year,the_Month,the_Day);
	var dateRange1 = new pickerDateRange('date1', {
		aRecent30Days : 'aRecent30Days', //最近30天
//				isTodayValid : true,
		startDate: star_time,
		endDate: end_time,
		needCompare : false,
		defaultText : '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp结课 ',
		autoSubmit : false,
		inputTrigger : 'input_trigger1',
		theme : 'ta'
	});
	var dateRange2 = new pickerDateRange('date2', {
		aRecent30Days : 'aRecent30Days', //最近30天
//				isTodayValid : true,
		startDate: star_time,
		endDate: end_time,
		needCompare : false,
		defaultText : '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp结课 ',
		autoSubmit : false,
		inputTrigger : 'input_trigger2',
		theme : 'ta'
	});
		var dateRange3 = new pickerDateRange('date3', {
		aRecent30Days : 'aRecent30Days', //最近30天
//				isTodayValid : true,
		startDate: star_time,
		endDate: end_time,
		needCompare : false,
		defaultText : '<br/>&nbsp&nbsp&nbsp&nbsp&nbsp结课 ',
		autoSubmit : false,
		inputTrigger : 'input_trigger3',
		theme : 'ta'
	});

//获取当前日期的明天
function getTomorrow(year,month,day){
	var temp_year=parseInt(year);
	var temp_month=parseInt(month);
	var temp_day=parseInt(day)+1;
	if((year%400==0)||(year%4==0&&year%100!=0)){	//平年2-28号分开计算
		if(month==2&&day==28){
			temp_month+=1;
			temp_day=1;
		}
	}else
	if(month==2&&day==29){
		temp_month+=1;
		temp_day=1;
	}else
	if(month==12&&day==31){
		temp_year+=1;
		temp_month=1;
		temp_day=1;
	}else
	if(month==1||month==3||month==5||month==7||month==8||month==10){
		if(day==31){
			temp_month+=1;
			temp_day=1;
		}
	}
	else
	if(month==4||month==6||month==9||month==11){
		if(day==30){
			temp_month+=1;
			temp_day=1;
		}
	}
	if(temp_month<10){
		temp_month='0'+temp_month;
	}
	if(parseInt(temp_day)<10)
		temp_day="0"+temp_day;
	return temp_year+"-"+temp_month+"-"+temp_day;
}
