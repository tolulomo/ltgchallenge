!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(7),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t,n){var r=n(1).Symbol;e.exports=r},function(e,t,n){var r=n(5),o=n(0),i="Expected a function";e.exports=function(e,t,n){var c=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return o(n)&&(c="leading"in n?!!n.leading:c,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:c,maxWait:t,trailing:a})}},function(e,t,n){},function(e,t,n){var r=n(0),o=n(6),i=n(9),c="Expected a function",a=Math.max,u=Math.min;e.exports=function(e,t,n){var s,l,f,m,h,d,v=0,g=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError(c);function p(t){var n=s,r=l;return s=l=void 0,v=t,m=e.apply(r,n)}function L(e){var n=e-d;return void 0===d||n>=t||n<0||b&&e-v>=f}function w(){var e=o();if(L(e))return x(e);h=setTimeout(w,function(e){var n=t-(e-d);return b?u(n,f-(e-v)):n}(e))}function x(e){return h=void 0,y&&s?p(e):(s=l=void 0,m)}function _(){var e=o(),n=L(e);if(s=arguments,l=this,d=e,n){if(void 0===h)return function(e){return v=e,h=setTimeout(w,t),g?p(e):m}(d);if(b)return clearTimeout(h),h=setTimeout(w,t),p(d)}return void 0===h&&(h=setTimeout(w,t)),m}return t=i(t)||0,r(n)&&(g=!!n.leading,f=(b="maxWait"in n)?a(i(n.maxWait)||0,t):f,y="trailing"in n?!!n.trailing:y),_.cancel=function(){void 0!==h&&clearTimeout(h),v=0,s=d=l=h=void 0},_.flush=function(){return void 0===h?m:x(o())},_}},function(e,t,n){var r=n(1);e.exports=function(){return r.Date.now()}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(8))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(0),o=n(10),i=NaN,c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=u.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}},function(e,t,n){var r=n(11),o=n(14),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&r(e)==i}},function(e,t,n){var r=n(2),o=n(12),i=n(13),c="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?a:c:u&&u in Object(e)?o(e):i(e)}},function(e,t,n){var r=n(2),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[a]=n:delete e[a]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){"use strict";n.r(t);n(4);var r=n(3),o=n.n(r),i={mobileIcon:document.querySelector(".nav__mobile-icon"),menuContainer:document.querySelector(".navigation__menu"),menuButtons:document.querySelectorAll("a"),themeContainer:document.querySelector(".calc"),mobileBg:document.querySelector(".calculator"),calcDisplay:document.querySelector(".calc__display")};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.browserWidth=window.innerWidth,this.theme="theme-1",this.onClickEvent(),this.insertMobileBg()}var t,n,r;return t=e,(n=[{key:"onClickEvent",value:function(){var e=this;i.mobileIcon.addEventListener("click",(function(){return e.toggleMenu()})),i.menuButtons.forEach((function(t,n){return e.switchThemes(t,n)})),window.addEventListener("resize",o()((function(){return e.adjustWidth()})),53e3)}},{key:"toggleMenu",value:function(){i.menuContainer.classList.toggle("show-menu"),i.mobileIcon.classList.toggle("nav__mobile-icon--toggle")}},{key:"switchThemes",value:function(e,t){var n=this;e.addEventListener("click",(function(r){r.preventDefault(),i.menuButtons.forEach((function(e){return e.classList.remove("is-current-link")})),i.mobileIcon.classList.remove("nav__mobile-icon--toggle"),i.menuContainer.classList.remove("show-menu"),0==t?(n.theme="theme-1",i.themeContainer.classList.remove("theme-2"),i.themeContainer.classList.add("theme-1"),e.classList.add("is-current-link"),n.insertMobileBg()):(n.theme="theme-2",i.themeContainer.classList.remove("theme-1"),i.themeContainer.classList.add("theme-2"),e.classList.add("is-current-link"),n.insertMobileBg())}))}},{key:"insertMobileBg",value:function(){this.browserWidth<=520?"theme-1"==this.theme?(i.mobileBg.classList.remove("theme-2__calculator"),i.mobileBg.classList.add("theme-1__calculator")):(i.mobileBg.classList.remove("theme-1__calculator"),i.mobileBg.classList.add("theme-2__calculator")):(i.mobileBg.classList.remove("theme-1__calculator"),i.mobileBg.classList.remove("theme-2__calculator"))}},{key:"adjustWidth",value:function(){this.browserWidth=window.innerWidth,this.insertMobileBg()}}])&&c(t.prototype,n),r&&c(t,r),e}(),u=function(e){var t=e.beforeLogic.findIndex((function(e){return"."===e})),n=e.afterLogic.findIndex((function(e){return"."===e}));switch(t=e.beforeLogic.length>0?t<=-1?parseInt(e.beforeLogic.reduce(l,"")):parseFloat(e.beforeLogic.reduce(l,"")):0,n=e.afterLogic.length>0?n<=-1?parseInt(e.afterLogic.reduce(l,"")):parseFloat(e.afterLogic.reduce(l,"")):0,e.logic){case"+":return e.memory=t+n,f(e);case"-":return e.memory=t-n,f(e);case"*":return e.memory=t*n,f(e);case"/":return e.memory=t/n,f(e);default:return}},s=function(e,t){var n="+";return"+"==e?n="+":"-"==e?n="-":"/"==e?n="/":"*"==e&&(n="*"),t.afterLogic.length>0?(u(t),t.beforeLogic.push(t.memory),void(t.logic=n)):t.memory>0?(t.beforeLogic.push(t.memory),t.logic=n):t.logic=n},l=function(e,t){return"".concat(e).concat(t)},f=function(e){return e.beforeLogic=[],e.afterLogic=[],e.logic=null};function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entryMem={memory:0,beforeLogic:[],afterLogic:[],logic:null}}var t,n,r;return t=e,(n=[{key:"runEntryFunction",value:function(e){switch(e){case"start":return this.entryMem={memory:0,beforeLogic:[],afterLogic:[]};case"plusorminus":return(t=this.entryMem).beforeLogic.findIndex((function(e){return"-"==e}))>-1?t.beforeLogic.splice(0,1):t.beforeLogic.length>0?t.beforeLogic.unshift("-"):void 0;case"%":case"/":case"*":case"-":case"+":return s(e,this.entryMem);case"=":return u(this.entryMem);default:return function(e,t){return null==t.logic?t.beforeLogic.push(e):t.afterLogic.push(e)}(e,this.entryMem)}var t}},{key:"calcData",value:function(){return this.entryMem.afterLogic.length>0?this.entryMem.afterLogic.reduce(l,""):this.entryMem.beforeLogic.length>0?this.entryMem.beforeLogic.reduce(l,""):this.entryMem.memory>0?this.entryMem.memory:0}}])&&m(t.prototype,n),r&&m(t,r),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=0,this.calculator=new h,this.events(),this.calcData()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("click",(function(t){return e.buttonPressed(t)}))}},{key:"buttonPressed",value:function(e){var t;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.target.closest(".calc__row-item")){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,regeneratorRuntime.awrap(this.calculator.runEntryFunction(t.dataset.btn));case 5:this.calcData();case 6:case"end":return n.stop()}}),null,this)}},{key:"calcData",value:function(){this.data=this.calculator.calcData(),i.calcDisplay.innerHTML=this.data}}])&&d(t.prototype,n),r&&d(t,r),e}();new a,new v}]);