function showinfos(va){
	if(va==1){
		$('#openinfo').attr('class','bg');
		$('#closeinfo').attr('class','red');
		$('#openinfo').css('cursor','');
		$('#closeinfo').css('cursor','pointer');
		$(".kinfo").show();
		$(".binfo").hide();
		
	}
	else{
		$('#openinfo').attr('class','red');
		$('#closeinfo').attr('class','bg');
		$('#openinfo').css('cursor','pointer');
		$('#closeinfo').css('cursor','');
		$(".kinfo").hide();
		$(".binfo").show();
		
	}
}
