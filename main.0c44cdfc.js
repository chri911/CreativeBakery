parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".burger"),t=document.querySelector(".nav"),n=document.querySelector(".burger__line"),l=document.querySelector(".nav__link"),c=document.querySelector(".bakershops__img"),o=document.querySelector(".bakershops__label--min"),s=document.querySelector(".bakershops__label--max"),r=document.querySelector(".nav__press--top"),i=document.querySelector(".nav__press--bottom"),a=document.querySelector(".list--top"),u=document.querySelector(".list--bottom"),d=document.querySelector(".feedback__form"),m=document.querySelectorAll(".form__input");e.addEventListener("click",function(){t.classList.toggle("nav--mobile"),n.classList.toggle("burger__line--open"),l.classList.toggle("nav__link--active")}),l.addEventListener("click",function(){l.classList.toggle("nav__link--active")}),o.addEventListener("click",function(){c.style.transform="scale(0.9)"}),s.addEventListener("click",function(){c.style.transform="scale(1.1)"}),r.addEventListener("click",function(){a.classList.toggle("list--open"),r.style.display="none"}),i.addEventListener("click",function(){u.classList.toggle("list--open"),i.style.display="none"}),a.addEventListener("click",function(e){r.innerText=e.target.innerText,a.classList.toggle("list--open"),r.style.display="block"}),u.addEventListener("click",function(e){i.innerText=e.target.innerText,u.classList.toggle("list--open"),i.style.display="block"}),d.addEventListener("submit",function(e){e.preventDefault(),m.forEach(function(e){return e.value=""})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0c44cdfc.js.map