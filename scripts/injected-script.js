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
        console.log(document.getElementsByName('ctlbar_danmuku_close')[0]);
        console.log($(document.getElementsByName('ctlbar_danmuku_close')[0]).data('events'));
        if($(document.getElementsByName('ctlbar_danmuku_close')[0]).data('events')){
            clearInterval(itv);
            $(document.getElementsByName('ctlbar_danmuku_close')[0]).trigger('mouseover');
            var topFlag,bottomFlag;
            var itv1 = setInterval(function(){
                if (document.getElementsByClassName('bilibili-player-block-filter-image bilibili-player-iconfont icon-48danmutop').length > 0){
                    if (document.getElementsByClassName('bilibili-player-block-filter-image bilibili-player-iconfont icon-48danmutop')[0].parentNode.getAttribute('class').indexOf('disabled') < 0){
                        document.getElementsByClassName('bilibili-player-block-filter-image bilibili-player-iconfont icon-48danmutop')[0].click();
                    }
                    clearInterval(itv1);
                    topFlag = true;
                    closePanel();
                }
            },500);
            var itv2 = setInterval(function(){
                if (document.getElementsByClassName('bilibili-player-block-filter-image bilibili-player-iconfont icon-48danmubottom').length > 0){
                    if (document.getElementsByClassName('bilibili-player-block-filter-image bilibili-player-iconfont icon-48danmubottom')[0].parentNode.getAttribute('class').indexOf('disabled') < 0){
                        document.getElementsByClassName('bilibili-player-block-filter-image bilibili-player-iconfont icon-48danmubottom')[0].click();
                    }
                    clearInterval(itv2);
                    bottomFlag = true;
                    closePanel();
                }
            },500);
            var closePanel = function(){
                if (topFlag && bottomFlag){
                    $('[name="ctlbar_danmuku_close"]').trigger('mouseout');
                }
            }
            setTimeout(function(){
                $('[name="ctlbar_danmuku_close"]').trigger('mouseout');
            },1000);
        }
    },100);
