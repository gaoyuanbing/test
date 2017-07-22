$(function(){
//	setReload()
		$(document).scrollTop(0);
		$("body").css('overflow','hidden');
		$("#cmin").hide();
		$("#share").css("display","block");
		$("#cmin").on('click',function(){
			$("#share").css("display","none")
			$("body").css("overflow","")
	});
//	开箱子动作
	setTimeout(top,1000)
	setTimeout(kai,4000)
	function top (){
		$('#top-box1').css("top","53%")
		$('#top-box1').css("transition","3s")
		$('#top-box2').css("top","66%")
		$('#top-box2').css("transition","3s")
	}
	function kai (){
		$('#cmin').css("transition","3s")
		$("#cmin").show()
		$("#cmin").css("z-index","200")		
	}
})

	function setReload(){
    	window.location.reload();
	}