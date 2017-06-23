function check_user(){
	var user=document.getElementsByName("user")[0].value;
	var vspan=document.getElementById("user_msg");
	var str="";
	if(user.length==0){
		str="不合法";
		vspan.style.color="red";
	}else if(user.length>5 && user.length<17){
		vspan.innerHTML="符合";
		vspan.style.color="green";
		return true;
	}
	else{
		str="不合法";
		vspan.style.color="red";
	}
	vspan.innerHTML=str;
	return false;
}
			
function check_psw(){
	var pwd=document.getElementsByName("passwd")[0].value;
	var vspan=document.getElementById("pwd_msg");
	if(pwd.length==0){
		vspan.innerHTML="不合法";
		vspan.style.color="red";
	}else if(pwd.length>5 && pwd.length<17){
		vspan.innerHTML="符合";
		vspan.style.color="green";
		return true;
	}
	else{
		vspan.innerHTML="不合法";
		vspan.style.color="red";
	}
	return false;
}
function check_all(){
	if(!check_user()||!check_psw()){
		alert("不合法！");
		return false;
	}
}
