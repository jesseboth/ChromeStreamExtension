document.addEventListener("DOMContentLoaded", function () {
    var yttv = document.getElementById("yttv");
    yttv.addEventListener("click", function() {
        chrome.tabs.update({active: true, url: "https://tv.youtube.com/"});
        window.close()
    });
    var yt = document.getElementById("yt");
    yt.addEventListener("click", function(){
        chrome.tabs.update({active: true, url: "https://youtube.com/"});
        window.close()
    })
    var netflix = document.getElementById("netflix");
    netflix.addEventListener("click", function(){
        chrome.tabs.update({active: true, url: "https://www.netflix.com/"});
        window.close()
    })
    var dplus = document.getElementById("dplus");
    dplus.addEventListener("click", function(){
        chrome.tabs.update({active: true, url: "https://www.disneyplus.com/"});
        window.close()
    })
    var ptv = document.getElementById("ptv");
    ptv.addEventListener("click", function(){
        chrome.tabs.update({active: true, url: "https://www.peacocktv.com/"});
        window.close()
    })
    var pv = document.getElementById("pv");
    pv.addEventListener("click", function(){
        chrome.tabs.update({active: true, url: "https://www.primevideo.com/"});
        window.close()
    })
    var hulu = document.getElementById("hulu");
    hulu.addEventListener("click", function(){
        chrome.tabs.update({active: true, url: "https://www.hulu.com/"});
        window.close()
    })
    var twitch = document.getElementById("twitch");
    twitch.addEventListener("click", function(){
        chrome.tabs.update({active: true, url: "https://www.twitch.tv/"});
        window.close()
    })
    var max = document.getElementById("max");
    max.addEventListener("click", function(){
        chrome.tabs.update({active: true, url: "https://play.hbomax.com/"});
        window.close()
    })
});