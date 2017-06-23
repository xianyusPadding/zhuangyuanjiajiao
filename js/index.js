$(function(){
	var i = 0;
	var select_group = $('.select_group');
	var select_subjects = $('.select_subject');
	var group = new Array();
	var subjects = new Array();
	groups = ['学前教育','小学家教','初中家教','高中家教','外语家教','特长家教','计算机家教','大学辅导','国际课程'];
	var subjects = [
					['学前教育','幼儿陪玩','幼儿托管','智力开发','幼儿园','少儿英语'],
					['小学语文','小学数学','小学英语','小学奥数','小学陪读','小学托管','小学接送','小学英文版教材','小学全科','小学作文'],
					['初中文综','初中理综','初中语文','初中数学','初中英语'],
					['高中文综','高中理综','高中语文','高中数学','高中英语'],
					['英语口语','商务英语','新概念英语','牛津英语','中级口译','高级口译'],
					['钢琴','电子琴','小提琴','大提琴'],
					['计算机基本操作','数据库'],
					['高等数学','大学英语','网页设计','动画制作'],
					['SAT阅读','SAT语法','IB高数','IB物理','AP微积分']
				   ];
	
	$('#notice_tabs a').on('mouseover',function(e){
		//阻止默认行为
		e.preventDefault();
		$(this).tab('show');
	})

	$('#myCarousel').carousel({
		interval: 2000,
		pause: 'hover'
	})
	
	$('#teachers a').on('mouseover',function(e){
		$(this).tab('show');
	})
	
	for(var i in groups){
		select_group.append('<option value="' + i + '">' + groups[i] + '</option>');
	}
	
	select_group.on('change',function(){
		selectSubject();
	})
	
	function selectSubject(){
		for(var i=0; i<subjects.length; i++){
			if(i == select_group.val()){
				select_subjects.empty();
//				console.log(subjects[i].length);
				for(var j in subjects[i]){
//					console.log(subjects[i].length);
					select_subjects.append('<option value="' + i + '">' + subjects[i][j] + '</option>');
				}		
			}
		}
	}
	
})
