function init(){activateLanguageSelector(),selectLanguage()}function activateLanguageSelector(){var e=document.querySelector("#languageIndicator > a");e&&e.addEventListener("click",function(){opencloseLanguageSelector()})}function opencloseLanguageSelector(){var e=document.getElementById("languageOpenClose"),t=document.getElementsByTagName("footer")[0];e.classList.toggle("up"),e.classList.toggle("down"),t.classList.toggle("open"),t.classList.toggle("closed")}function selectLanguage(){var e,t=document.querySelectorAll("#languageSelector input");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(e){var t=e.target.value;document.getElementById("languageFlag").setAttribute("class","lang"+t+" icon"),opencloseLanguageSelector()})}window.onload=function(){init()};