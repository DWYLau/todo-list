(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(n){t(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===e(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}Math.pow(10,8);var r=6e4,a=36e5;var o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function u(e){return e?parseInt(e):1}function s(e){return e&&parseFloat(e.replace(",","."))||0}var d=[31,null,31,30,31,30,31,31,30,31,30,31];function m(e){return e%400==0||e%4==0&&e%100!=0}let f=[];class p{constructor(e,t,n,r){this.title=e,this.description=t,this.priority=n,this.dueDate=r}}function g(){let e=document.getElementById("title"),g=document.getElementById("description"),y=document.getElementById("priority"),v=document.getElementById("date"),D=new p(e.value,g.value,y.value,v.value);f.push(D),function(){const e=document.getElementById("alltasks");e.querySelectorAll("div").forEach((e=>e.remove())),f.forEach((f=>{const p=document.createElement("div");e.appendChild(p),p.classList.add("card");const g=document.createElement("input");g.setAttribute("type","checkbox"),g.classList.add("checkbox");const y=document.createElement("p");y.classList.add("title");const v=document.createElement("p");v.classList.add("description");const D=document.createElement("p");D.classList.add("priority");const h=document.createElement("p"),b=document.createElement("button");b.classList.add("deletebtn"),p.appendChild(g),p.appendChild(y),p.appendChild(v),p.appendChild(D),p.appendChild(h),p.appendChild(b),y.textContent=f.title,v.textContent=f.description,D.textContent=f.priority,D.style.background="green",h.textContent=f.dueDate,b.textContent="X",console.log(f.dueDate),function(e){const f=new Date,p=new Date((new Date).setDate((new Date).getDate()+7));console.log(function(e,r){t(2,arguments);var a=n(e).getTime(),o=n(r.start).getTime(),i=n(r.end).getTime();if(!(o<=i))throw new RangeError("Invalid interval");return a>=o&&a<=i}(function(e,n){var f;t(1,arguments);var p=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(null!==(f=null==n?void 0:n.additionalDigits)&&void 0!==f?f:2);if(2!==p&&1!==p&&0!==p)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var g,y=function(e){var t,n={},r=e.split(o.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],o.timeZoneDelimiter.test(n.date)&&(n.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=o.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}(e);if(y.date){var v=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}(y.date,p);g=function(e,t){if(null===t)return new Date(NaN);var n=e.match(i);if(!n)return new Date(NaN);var r=!!n[4],a=u(n[1]),o=u(n[2])-1,c=u(n[3]),l=u(n[4]),s=u(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,l,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,l,s):new Date(NaN);var f=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(d[t]||(m(e)?29:28))}(t,o,c)&&function(e,t){return t>=1&&t<=(m(e)?366:365)}(t,a)?(f.setUTCFullYear(t,o,Math.max(a,c)),f):new Date(NaN)}(v.restDateString,v.year)}if(!g||isNaN(g.getTime()))return new Date(NaN);var D,h=g.getTime(),b=0;if(y.time&&(b=function(e){var t=e.match(c);if(!t)return NaN;var n=s(t[1]),o=s(t[2]),i=s(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,o,i)?n*a+o*r+1e3*i:NaN}(y.time),isNaN(b)))return new Date(NaN);if(!y.timezone){var N=new Date(h+b),w=new Date(0);return w.setFullYear(N.getUTCFullYear(),N.getUTCMonth(),N.getUTCDate()),w.setHours(N.getUTCHours(),N.getUTCMinutes(),N.getUTCSeconds(),N.getUTCMilliseconds()),w}return D=function(e){if("Z"===e)return 0;var t=e.match(l);if(!t)return 0;var n="+"===t[1]?-1:1,o=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,i)?n*(o*a+i*r):NaN}(y.timezone),isNaN(D)?new Date(NaN):new Date(h+b+D)}(e),{start:f,end:p})),console.log(f),console.log(p)}(f.dueDate)}))}(),console.log(D),console.log(f)}document.querySelector(".menu").addEventListener("click",(function(){document.getElementById("navbar").style.width="250px",document.getElementById("main").style.marginLeft="250px"})),document.querySelector(".closebtn").addEventListener("click",(function(){document.getElementById("navbar").style.width="0",document.getElementById("main").style.marginLeft="0"})),function(){let e=document.querySelectorAll(".tablinks"),t=document.querySelectorAll(".tabcontent");e.forEach(((n,r)=>{n.addEventListener("click",(()=>{t.forEach((e=>{e.classList.remove("active")})),e.forEach((e=>{e.classList.remove("active")})),t[r].classList.add("active"),e[r].classList.add("active")}))}))}(),document.getElementById("addtask").addEventListener("click",(function(){document.querySelector(".form-popup").style.display="block"})),function(){const e=document.getElementById("cancelbtn"),t=document.querySelector(".form-container");e.addEventListener("click",(function(){document.querySelector(".form-popup").style.display="none",t.reset()}))}(),function(){const e=document.querySelector(".form-container");e.addEventListener("submit",(function(t){t.preventDefault(),g(),document.querySelector(".form-popup").style.display="none",e.reset()}))}()})();