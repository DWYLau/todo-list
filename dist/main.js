(()=>{"use strict";let t=[];class e{constructor(t){this.name=t,this.tasks=[]}}function n(){const e=document.querySelector(".tab");e.querySelectorAll(".project").forEach((t=>t.remove())),t.forEach((t=>{const n=document.createElement("button");n.classList.add("tablinks"),n.classList.add("project"),n.textContent=t.name,e.appendChild(n)}))}function r(){const e=document.getElementById("main");document.querySelectorAll(".page").forEach((t=>t.remove())),t.forEach((a=>{const o=document.createElement("div");o.setAttribute("id",a.name),o.classList.add("tabcontent"),o.classList.add("page"),e.appendChild(o);const i=document.createElement("h3");i.textContent=a.name,o.appendChild(i);const u=document.createElement("button");u.textContent="Add Task",u.classList.add("add-button"),u.setAttribute("id","addprojecttask"),u.addEventListener("click",(function(){lt()}));const d=document.createElement("button");d.textContent="Delete Project",d.classList.add("add-button"),d.setAttribute("id","deleteproject"),d.addEventListener("click",(function(){!function(e){let a=t.findIndex((t=>t.name===e));t.splice(a,1),n(),r(),st()}(a.name)})),o.appendChild(u),o.appendChild(d)}))}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){o(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===a(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function d(t){o(1,arguments);var e=i(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function c(t){o(1,arguments);var e=i(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=d(r),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var c=d(u);return e.getTime()>=a.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}var s={};function l(){return s}function m(t,e){var n,r,a,d,c,s,m,f;o(1,arguments);var h=l(),g=u(null!==(n=null!==(r=null!==(a=null!==(d=null==e?void 0:e.weekStartsOn)&&void 0!==d?d:null==e||null===(c=e.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:h.weekStartsOn)&&void 0!==r?r:null===(m=h.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=i(t),y=v.getUTCDay(),w=(y<g?7:0)+y-g;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function f(t,e){var n,r,a,d,c,s,f,h;o(1,arguments);var g=i(t),v=g.getUTCFullYear(),y=l(),w=u(null!==(n=null!==(r=null!==(a=null!==(d=null==e?void 0:e.firstWeekContainsDate)&&void 0!==d?d:null==e||null===(c=e.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:y.firstWeekContainsDate)&&void 0!==r?r:null===(f=y.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==n?n:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,w),b.setUTCHours(0,0,0,0);var p=m(b,e),T=new Date(0);T.setUTCFullYear(v,0,w),T.setUTCHours(0,0,0,0);var C=m(T,e);return g.getTime()>=p.getTime()?v+1:g.getTime()>=C.getTime()?v:v-1}function h(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const g=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return h("yy"===e?r%100:r,e.length)},v=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):h(n+1,2)},y=function(t,e){return h(t.getUTCDate(),e.length)},w=function(t,e){return h(t.getUTCHours()%12||12,e.length)},b=function(t,e){return h(t.getUTCHours(),e.length)},p=function(t,e){return h(t.getUTCMinutes(),e.length)},T=function(t,e){return h(t.getUTCSeconds(),e.length)},C=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return h(Math.floor(r*Math.pow(10,n-3)),e.length)};var D={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g(t,e)},Y:function(t,e,n,r){var a=f(t,r),o=a>0?a:1-a;return"YY"===e?h(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):h(o,e.length)},R:function(t,e){return h(c(t),e.length)},u:function(t,e){return h(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return h(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return h(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return v(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return h(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){o(1,arguments);var n=i(t),r=m(n,e).getTime()-function(t,e){var n,r,a,i,d,c,s,h;o(1,arguments);var g=l(),v=u(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==a?a:g.firstWeekContainsDate)&&void 0!==r?r:null===(s=g.locale)||void 0===s||null===(h=s.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==n?n:1),y=f(t,e),w=new Date(0);return w.setUTCFullYear(y,0,v),w.setUTCHours(0,0,0,0),m(w,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):h(a,e.length)},I:function(t,e,n){var r=function(t){o(1,arguments);var e=i(t),n=d(e).getTime()-function(t){o(1,arguments);var e=c(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),d(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):h(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):y(t,e)},D:function(t,e,n){var r=function(t){o(1,arguments);var e=i(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):h(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return h(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return h(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return h(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):b(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):p(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T(t,e)},S:function(t,e){return C(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return E(a);case"XXXX":case"XX":return S(a);default:return S(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return E(a);case"xxxx":case"xx":return S(a);default:return S(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+k(a,":");default:return"GMT"+S(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+k(a,":");default:return"GMT"+S(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return h(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return h((r._originalDate||t).getTime(),e.length)}};function k(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+h(o,2)}function E(t,e){return t%60==0?(t>0?"-":"+")+h(Math.abs(t)/60,2):S(t,e)}function S(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+h(Math.floor(a/60),2)+n+h(a%60,2)}const M=D;var x=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},U=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},N={p:U,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return x(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",x(a,e)).replace("{{time}}",U(o,e))}};const P=N;var q=["D","DD"],W=["YY","YYYY"];function L(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function j(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var F,B={date:j({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:j({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:j({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function I(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function A(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return i=t.valueCallback?t.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const H={code:"en-US",formatDistance:function(t,e,n){var r,a=Y[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:B,formatRelative:function(t,e,n,r){return O[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:I({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:I({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:I({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:I({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:I({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(F={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(F.matchPattern);if(!n)return null;var r=n[0],a=t.match(F.parsePattern);if(!a)return null;var o=F.valueCallback?F.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:A({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:A({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:A({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:A({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:A({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,R=/''/g,X=/[a-zA-Z]/;function J(t,e,n){var r,d,c,s,m,f,h,g,v,y,w,b,p,T,C,D,k,E;o(2,arguments);var S=String(e),x=l(),U=null!==(r=null!==(d=null==n?void 0:n.locale)&&void 0!==d?d:x.locale)&&void 0!==r?r:H,N=u(null!==(c=null!==(s=null!==(m=null!==(f=null==n?void 0:n.firstWeekContainsDate)&&void 0!==f?f:null==n||null===(h=n.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:x.firstWeekContainsDate)&&void 0!==s?s:null===(v=x.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==c?c:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=u(null!==(w=null!==(b=null!==(p=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(C=n.locale)||void 0===C||null===(D=C.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==p?p:x.weekStartsOn)&&void 0!==b?b:null===(k=x.locale)||void 0===k||null===(E=k.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==w?w:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var j=i(t);if(!function(t){if(o(1,arguments),!function(t){return o(1,arguments),t instanceof Date||"object"===a(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=i(t);return!isNaN(Number(e))}(j))throw new RangeError("Invalid time value");var F=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(j),B=function(t,e){return o(2,arguments),function(t,e){o(2,arguments);var n=i(t).getTime(),r=u(e);return new Date(n+r)}(t,-u(e))}(j,F),O={firstWeekContainsDate:N,weekStartsOn:Y,locale:U,_originalDate:j};return S.match(Q).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,P[e])(t,U.formatLong):t})).join("").match(z).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(G))?o[1].replace(R,"'"):a;var u,d=M[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===W.indexOf(u))||L(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==q.indexOf(t)}(r)||L(r,e,String(t)),d(B,r,U.localize,O);if(i.match(X))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}Math.pow(10,8);var Z=6e4,$=36e5;var _={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},V=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,K=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,tt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function et(t){return t?parseInt(t):1}function nt(t){return t&&parseFloat(t.replace(",","."))||0}var rt=[31,null,31,30,31,30,31,31,30,31,30,31];function at(t){return t%400==0||t%4==0&&t%100!=0}let ot=[];class it{constructor(t,e,n,r){this.title=t,this.description=e,this.priority=n,this.dueDate=r}}function ut(t){const e=document.getElementById("alltasks");e.querySelectorAll("div").forEach((t=>t.remove()));const n=document.getElementById("today");n.querySelectorAll("div").forEach((t=>t.remove()));const r=document.getElementById("nextseven");r.querySelectorAll("div").forEach((t=>t.remove())),t.forEach((t=>{dt(e,t.title,t.description,t.priority,t.dueDate),!0===ct(t.dueDate)?dt(n,t.title,t.description,t.priority,t.dueDate):!1===ct(t.dueDate)&&dt(r,t.title,t.description,t.priority,t.dueDate)}))}function dt(t,e,n,r,a){const o=document.createElement("div");t.appendChild(o),o.classList.add("card");const i=document.createElement("input");i.setAttribute("type","checkbox"),i.classList.add("checkbox");const u=document.createElement("p");u.classList.add("title");const d=document.createElement("p");d.classList.add("description");const c=document.createElement("p");c.classList.add("priority");const s=document.createElement("p"),l=document.createElement("button");l.classList.add("deletebtn"),o.appendChild(i),o.appendChild(u),o.appendChild(d),o.appendChild(c),o.appendChild(s),o.appendChild(l),u.textContent=e,d.textContent=n,c.textContent=r,function(t){t.style.color="black","High"===t.textContent?t.style.background="#FF0000":"Medium"===t.textContent?t.style.background="#FFFF00":t.style.background="#00FF00"}(c),s.textContent=a,l.textContent="X",l.addEventListener("click",(function(){!function(t,e){let n=ot.findIndex((e=>e.title===t));e.splice(n,1)}(e,ot),document.querySelectorAll(".card").forEach((t=>{t.remove()})),ut()}))}function ct(t){const e=new Date;let n=e.getDate(),r=e.getMonth(),a=e.getFullYear(),d=J(new Date(a,r,n),"yyyy-MM-dd");const c=new Date((new Date).setDate((new Date).getDate()+7)),s=function(t,e){o(2,arguments);var n=i(t).getTime(),r=i(e.start).getTime(),a=i(e.end).getTime();if(!(r<=a))throw new RangeError("Invalid interval");return n>=r&&n<=a}(function(t,e){var n;o(1,arguments);var r=u(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,i=function(t){var e,n={},r=t.split(_.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],_.timeZoneDelimiter.test(n.date)&&(n.date=t.split(_.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=_.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}(t);if(i.date){var d=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}(i.date,r);a=function(t,e){if(null===e)return new Date(NaN);var n=t.match(V);if(!n)return new Date(NaN);var r=!!n[4],a=et(n[1]),o=et(n[2])-1,i=et(n[3]),u=et(n[4]),d=et(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,d)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,d):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(rt[e]||(at(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(at(t)?366:365)}(e,a)?(c.setUTCFullYear(e,o,Math.max(a,i)),c):new Date(NaN)}(d.restDateString,d.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var c,s=a.getTime(),l=0;if(i.time&&(l=function(t){var e=t.match(K);if(!e)return NaN;var n=nt(e[1]),r=nt(e[2]),a=nt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*$+r*Z+1e3*a:NaN}(i.time),isNaN(l)))return new Date(NaN);if(!i.timezone){var m=new Date(s+l),f=new Date(0);return f.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),f.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),f}return c=function(t){if("Z"===t)return 0;var e=t.match(tt);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*$+a*Z):NaN}(i.timezone),isNaN(c)?new Date(NaN):new Date(s+l+c)}(t),{start:e,end:c});return t===d||!0!==s&&void 0}function st(){let t=document.querySelectorAll(".tablinks"),e=document.querySelectorAll(".tabcontent");t.forEach(((n,r)=>{n.addEventListener("click",(()=>{e.forEach((t=>{t.classList.remove("active")})),t.forEach((t=>{t.classList.remove("active")})),e[r].classList.add("active"),t[r].classList.add("active")}))}))}function lt(){document.getElementById("addprojecttask").addEventListener("click",(function(){document.querySelector(".form-project-task").style.display="block",document.querySelector(".form-task").style.display="none",document.querySelector(".form-project").style.display="none"}))}document.querySelector(".menu").addEventListener("click",(function(){document.getElementById("navbar").style.width="250px",document.getElementById("main").style.marginLeft="250px"})),document.querySelector(".close-button").addEventListener("click",(function(){document.getElementById("navbar").style.width="0",document.getElementById("main").style.marginLeft="0"})),st(),document.getElementById("addtask").addEventListener("click",(function(){document.querySelector(".form-task").style.display="block",document.querySelector(".form-project").style.display="none",document.querySelector(".form-project-task").style.display="none"})),function(){const t=document.getElementById("taskcancel"),e=document.querySelector(".form-container");t.addEventListener("click",(function(){document.querySelector(".form-task").style.display="none",e.reset()}))}(),document.getElementById("addproject").addEventListener("click",(function(){document.querySelector(".form-project").style.display="block",document.querySelector(".form-task").style.display="none",document.querySelector(".form-project-task").style.display="none"})),function(){const t=document.getElementById("projectcancel"),e=document.getElementById("projectform");t.addEventListener("click",(function(){document.querySelector(".form-project").style.display="none",e.reset()}))}(),function(){const t=document.getElementById("projecttaskcancel"),e=document.getElementById("project-task-form");t.addEventListener("click",(function(){document.querySelector(".form-project-task").style.display="none",e.reset()}))}(),function(){const t=document.querySelector(".form-container");t.addEventListener("submit",(function(e){e.preventDefault(),function(t){let e=document.getElementById("title"),n=document.getElementById("description"),r=document.getElementById("priority"),a=document.getElementById("date"),o=new it(e.value,n.value,r.value,a.value);t.push(o),ut(t)}(ot),document.querySelector(".form-task").style.display="none",t.reset()}))}(),function(){const a=document.getElementById("projectform");a.addEventListener("submit",(function(o){o.preventDefault(),function(){let a=document.getElementById("projectname"),o=new e(a.value);t.push(o),n(),r(),st(),lt()}(),document.querySelector(".form-project").style.display="none",a.reset()}))}()})();