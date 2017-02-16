var length =$('.video >.video-block').length;
for(var i=1;i++;i<=length){
	if(i%3==0){
		$('.video >.video-block').eq(i-1).css('margin-right','0px')
	}
}
