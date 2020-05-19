// ==UserScript==
// @name         THE GALACTIC REPUBLIC
// @namespace    https://discord.gg/thegalacticrepublic
// @version      1.1
// @description  Stop RT from their shenagigans and have ALL STAR WARS be in the final 4!
// @author       kalypso
// @match        https://editorial.rottentomatoes.com/article/summer-movie-showdown/
// @updateurl    https://github.com/iratekalypso/The-Galactic-Republic/raw/master/rtshowdown.user.js
// ==/UserScript==
window.addEventListener('load', function () {
  alert("It's loaded! VOTE VOTE VOTE")
})
localStorage.clear();
setTimeout(function(){ location.reload(); }, 20*1000);
