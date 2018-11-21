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

window.onload = function(){
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL("scripts/injected-script.js");
    /*temp.onload = function()
    {
        // 放在页面不好看，执行完后移除掉
        this.parentNode.removeChild(this);
    };*/
    document.head.appendChild(temp);
}