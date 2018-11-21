function sendMessageToContentScript(message, callback)
{
    console.log("send message:");
    console.log(message);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}

function optionClick() {
    var top = document.getElementById("top").checked;
    var buttom = document.getElementById("buttom").checked;
    sendMessageToContentScript({
        top:top,
        buttom:buttom
    },function(response)
    {
        console.log('来自content的回复：'+response);
    });
}

$('#mainbox').click(function(){
    optionClick();
});

