/*
 * 检查用户名是否为空，或是否少于2个字符
 * 
 */
function check_name(){
	var name=document.getElementsByName("name")[0].value;
	var vspan=document.getElementById("tip_name");
	var str="";
	if(name.length==0){
		str="请输入称呼！";
		vspan.style.color="red";
	}else if(name.length>=2 && name.length<10){
		vspan.innerHTML="符合";
		vspan.style.color="green";
		return true;
	}
	else{
		str="不能少于2个字符";
		vspan.style.color="red";
	}
	vspan.innerHTML=str;
	return false;
}
	
	
/*
 检查密码是否为空。是否大于6个字符
 * */
function check_psw(){
	var pwd=document.getElementsByName("passwd")[0].value;
	var vspan=document.getElementById("tip_pwd");
	if(pwd.length==0){
		vspan.innerHTML="请输入密码！";
		vspan.style.color="red";
	}else if(pwd.length>5 && pwd.length<17){
		vspan.innerHTML="符合";
		vspan.style.color="green";
		return true;
	}
	else{
		vspan.innerHTML="请输入6位或以上的密码";
		vspan.style.color="red";
	}
	return false;
}

/*
 检查密码是否一致
 * */
function check_same(){
   var pwd=document.getElementsByName("passwd")[0].value;
   var pwd2=document.getElementsByName("passwd2")[0].value;
   var vspan=document.getElementById("tip_pwd2");
   if(pwd2==0)
   {
   	    vspan.innerHTML="请确认密码！";
		vspan.style.color="red";
   }
   else if(pwd!= pwd2){
   	   vspan.innerHTML="两次密码不一致！";
   	   vspan.style.color="red";  	   
   }
   else
   {
   	   vspan.innerHTML="通过！";
   	   vspan.style.color="green";  	   
   	   return true;
   }
  
   return false;
   
}

/**
 * 电话号码验证
 * */
function testPhone() {

				var phone = document.getElementById('tel').value;
				var vspan=document.getElementById("tip_tel");
				var regPhone = /^0?(13[0-9]|14[57]|17[0678]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/;
				if(regPhone.test(phone)) {
//					alert('正确')
                    vspan.innerHTML="号码正确！";
                    vspan.style.color="green";  	 
					return true;					
				} else {
//					alert('请输入正确的电话号码！');
                    vspan.innerHTML="手机号码格式错误！";
                    vspan.style.color="red";
				}
				return false;
			}




function check_all(){
	if(!check_name()||!check_psw()||!check_name()){
		alert("不合法！");
		return false;
	}
}


/**
 * 获取验证码
 * **/
var sends = {
 checked:1,
 send:function(){
//var numbers = /^1\d{10}$/;
//var val = $('#phone').val().replace(/\s+/g,""); //获取输入手机号码
  var regPhone = /^0?(13[0-9]|14[57]|17[0678]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/;
  var phone = document.getElementById('tel').value;
  if($('.reg_form a').attr('class') == 'yanzheng1')
  {
	  if(!regPhone.test(phone) || phone.length ==0)
	  {
		   $('#tip_yanzheng').html("手机号码错误！");
//		   append('<span class="error">手机号码错误！</span>');
		   return false;
	  }
  }
  if(regPhone.test(phone)){
	  var time = 30;
	  $('#tip_yanzheng').remove();
	  function timeCountDown(){
		   if(time==0){
			   clearInterval(timer);
			   $('.reg_form a').addClass('yanzheng0').removeClass('yanzheng1').html("发送验证码");
			   sends.checked = 1;
			   return true;
		   }
		   $('.reg_form a').html(time+"S后再次发送");
		   time--;
		   return false;
		   sends.checked = 0;
	  }
	  $('.reg_form a').addClass('yanzheng1').removeClass('yanzheng0');
	  timeCountDown();
	  var timer = setInterval(timeCountDown,1000);
  }
 }
}

















