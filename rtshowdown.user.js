// ==UserScript==
// @name         THE GALACTIC REPUBLIC
// @namespace    https://discord.gg/thegalacticrepublic
// @version      3.0
// @description  WE must revenge ROTS! Updated for Round 5!
// @author       kalypso, AquilaeAnon
// @match        https://editorial.rottentomatoes.com/article/summer-movie-showdown/
// @updateurl    https://github.com/iratekalypso/The-Galactic-Republic/raw/master/rtshowdown.user.js
// ==/UserScript==
setInterval(function(){
    try{
let iframe = document.getElementsByClassName('articleContentBody').item(0).getElementsByTagName('iframe').item(0);
if(iframe !== null) {let vote_btn = iframe.contentWindow.document.getElementsByTagName("button")[2];
                    vote_btn.click();}
}catch(e){alert(e)}
}, 8000);

setInterval(function(){
    try{
let iframe = document.getElementsByClassName('articleContentBody').item(0).getElementsByTagName('iframe').item(0);
if(iframe !== null) {let vote_btn = iframe.contentWindow.document.getElementsByTagName("button")[1];
                    vote_btn.click();}
}catch(e){alert(e)}
}, 8000);

localStorage.clear();
setTimeout(function(){ location.reload(); }, 15*1000);
