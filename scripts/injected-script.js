/*var operation = function () {
    var topButton=document.getElementsByName('ctlbar_danmuku_top_on')[0];
    console.log("topButton:" + topButton);
    window.bilibili.danmuku.top && topButton && topButton.click();
    var buttomButton=document.getElementsByName('ctlbar_danmuku_bottom_on')[0];
    console.log("buttomButton:" + buttomButton);
    window.bilibili.danmuku.buttom && buttomButton && buttomButton.click();
};

window.bilibili = {
    danmuku: {
        top: false,
        buttom: false
    }
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
    console.log(request);
    window.bilibili.danmuku = request;
    sendResponse('我收到了你的消息！');
});*/


    var itv = setInterval(function(){
        //debugger
		
		var btn = $('.bilibili-player-video-danmaku-setting');

        if(btn.data('events')){
            clearInterval(itv);
            btn.trigger('mouseover');
            var topFlag,bottomFlag;
            var itv1 = setInterval(function(){
                if ($('.bilibili-player-block-filter-label').length == 5){
					for (var i = 0; i< $('.bilibili-player-block-filter-label').length;i++) {
						if ($('.bilibili-player-block-filter-label')[i].innerText == '顶部' && $($('.bilibili-player-block-filter-label')[i]).parent().attr('class').indexOf('disable') == -1) {
							$('.bilibili-player-block-filter-label')[i].click();
							topFlag = true;
							closePanel();
							clearInterval(itv1);
						}
					}
                }
            },500);
            var itv2 = setInterval(function(){
                if ($('.bilibili-player-block-filter-label').length == 5){
					for (var i = 0; i< $('.bilibili-player-block-filter-label').length;i++) {
						if ($('.bilibili-player-block-filter-label')[i].innerText == '底部' && $($('.bilibili-player-block-filter-label')[i]).parent().attr('class').indexOf('disable') == -1) {
							$('.bilibili-player-block-filter-label')[i].click();
							topFlag = true;
							closePanel();
							clearInterval(itv2);
						}
					}
                }
            },500);
            var closePanel = function(){
                if (topFlag && bottomFlag){
                    btn.trigger('mouseout');
                }
            }
            setTimeout(function(){
                btn.trigger('mouseout');
            },1000);
        }
    },100);
