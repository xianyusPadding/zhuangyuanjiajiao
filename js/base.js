$(function(){
	var i=1;
	setInterval(function(){	
		$('.logo img').attr('src','images/logo' + i + '.png');
		if(i==5){
			i=0;
		}
		i++;
	},500)
	
	$('.weixin').on('mousemove', function(){
		$('#share .right').show();
	})
	$('.weixin').on('mouseout', function(){
		$('#share .right').hide();
	})
	
	$(window).resize(function(){
		if($(window).width() > 1124){
			$('#share').show();
		}else
			$('#share').hide();
	})
	if($(window).width() > 1150){
		$('#share').show();
	}else
		$('#share').hide();
		
	
	$('.area_submitBtn').on('click',function(){
		var spr = $("select[id='seleProvince'] > option[value='"+$("#seleProvince").val()+"']").text();  
   		var sci = $("select[id='seleCity'] > option[value='"+$("#seleCity").val()+"']").text();
    	
    	$('#address').html(spr + sci);
    	$('#area_modal').modal('hide');
	})


})
