!function(c){var e={};function a(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return c[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=c,a.c=e,a.d=function(c,e,t){a.o(c,e)||Object.defineProperty(c,e,{enumerable:!0,get:t})},a.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},a.t=function(c,e){if(1&e&&(c=a(c)),8&e)return c;if(4&e&&"object"==typeof c&&c&&c.__esModule)return c;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:c}),2&e&&"string"!=typeof c)for(var n in c)a.d(t,n,function(e){return c[e]}.bind(null,n));return t},a.n=function(c){var e=c&&c.__esModule?function(){return c.default}:function(){return c};return a.d(e,"a",e),e},a.o=function(c,e){return Object.prototype.hasOwnProperty.call(c,e)},a.p="",a(a.s=36)}([function(c,e,a){"use strict";c.exports=function(c,e){return e||(e={}),"string"!=typeof(c=c&&c.__esModule?c.default:c)?c:(/^['"].*['"]$/.test(c)&&(c=c.slice(1,-1)),e.hash&&(c+=e.hash),/["'() \t\n]/.test(c)||e.needQuotes?'"'.concat(c.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):c)}},function(c,e,a){"use strict";c.exports=function(c){var e=[];return e.toString=function(){return this.map((function(e){var a=c(e);return e[2]?"@media ".concat(e[2]," {").concat(a,"}"):a})).join("")},e.i=function(c,a,t){"string"==typeof c&&(c=[[null,c,""]]);var n={};if(t)for(var l=0;l<this.length;l++){var f=this[l][0];null!=f&&(n[f]=!0)}for(var o=0;o<c.length;o++){var r=[].concat(c[o]);t&&n[r[0]]||(a&&(r[2]?r[2]="".concat(a," and ").concat(r[2]):r[2]=a),e.push(r))}},e}},function(c,e){c.exports=function(c){return c.webpackPolyfill||(c.deprecate=function(){},c.paths=[],c.children||(c.children=[]),Object.defineProperty(c,"loaded",{enumerable:!0,get:function(){return c.l}}),Object.defineProperty(c,"id",{enumerable:!0,get:function(){return c.i}}),c.webpackPolyfill=1),c}},function(c,e,a){"use strict";var t,n=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},l=function(){var c={};return function(e){if(void 0===c[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(c){a=null}c[e]=a}return c[e]}}(),f=[];function o(c){for(var e=-1,a=0;a<f.length;a++)if(f[a].identifier===c){e=a;break}return e}function r(c,e){for(var a={},t=[],n=0;n<c.length;n++){var l=c[n],r=e.base?l[0]+e.base:l[0],h=a[r]||0,s="".concat(r," ").concat(h);a[r]=h+1;var v=o(s),i={css:l[1],media:l[2],sourceMap:l[3]};-1!==v?(f[v].references++,f[v].updater(i)):f.push({identifier:s,updater:d(i,e),references:1}),t.push(s)}return t}function h(c){var e=document.createElement("style"),t=c.attributes||{};if(void 0===t.nonce){var n=a.nc;n&&(t.nonce=n)}if(Object.keys(t).forEach((function(c){e.setAttribute(c,t[c])})),"function"==typeof c.insert)c.insert(e);else{var f=l(c.insert||"head");if(!f)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");f.appendChild(e)}return e}var s,v=(s=[],function(c,e){return s[c]=e,s.filter(Boolean).join("\n")});function i(c,e,a,t){var n=a?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(c.styleSheet)c.styleSheet.cssText=v(e,n);else{var l=document.createTextNode(n),f=c.childNodes;f[e]&&c.removeChild(f[e]),f.length?c.insertBefore(l,f[e]):c.appendChild(l)}}function z(c,e,a){var t=a.css,n=a.media,l=a.sourceMap;if(n?c.setAttribute("media",n):c.removeAttribute("media"),l&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),c.styleSheet)c.styleSheet.cssText=t;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(t))}}var m=null,u=0;function d(c,e){var a,t,n;if(e.singleton){var l=u++;a=m||(m=h(e)),t=i.bind(null,a,l,!1),n=i.bind(null,a,l,!0)}else a=h(e),t=z.bind(null,a,e),n=function(){!function(c){if(null===c.parentNode)return!1;c.parentNode.removeChild(c)}(a)};return t(c),function(e){if(e){if(e.css===c.css&&e.media===c.media&&e.sourceMap===c.sourceMap)return;t(c=e)}else n()}}c.exports=function(c,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var a=r(c=c||[],e);return function(c){if(c=c||[],"[object Array]"===Object.prototype.toString.call(c)){for(var t=0;t<a.length;t++){var n=o(a[t]);f[n].references--}for(var l=r(c,e),h=0;h<a.length;h++){var s=o(a[h]);0===f[s].references&&(f[s].updater(),f.splice(s,1))}a=l}}}},function(c,e){function a(c){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(c)}var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(c){"object"===("undefined"==typeof window?"undefined":a(window))&&(t=window)}c.exports=t},function(c,e,a){(function(c){function e(c){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(c)}!function(a,t){var n=function(c,e,a){"use strict";var t,n;if(function(){var e,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in n=c.lazySizesConfig||c.lazysizesConfig||{},a)e in n||(n[e]=a[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:n,noSupport:!0};var l=e.documentElement,f=c.HTMLPictureElement,o=c.addEventListener.bind(c),r=c.setTimeout,h=c.requestAnimationFrame||r,s=c.requestIdleCallback,v=/^picture$/i,i=["load","error","lazyincluded","_lazyloaded"],z={},m=Array.prototype.forEach,u=function(c,e){return z[e]||(z[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),z[e].test(c.getAttribute("class")||"")&&z[e]},d=function(c,e){u(c,e)||c.setAttribute("class",(c.getAttribute("class")||"").trim()+" "+e)},M=function(c,e){var a;(a=u(c,e))&&c.setAttribute("class",(c.getAttribute("class")||"").replace(a," "))},b=function c(e,a,t){var n=t?"addEventListener":"removeEventListener";t&&c(e,a),i.forEach((function(c){e[n](c,a)}))},H=function(c,a,n,l,f){var o=e.createEvent("Event");return n||(n={}),n.instance=t,o.initEvent(a,!l,!f),o.detail=n,c.dispatchEvent(o),o},V=function(e,a){var t;!f&&(t=c.picturefill||n.pf)?(a&&a.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",a.src),t({reevaluate:!0,elements:[e]})):a&&a.src&&(e.src=a.src)},p=function(c,e){return(getComputedStyle(c,null)||{})[e]},C=function(c,e,a){for(a=a||c.offsetWidth;a<n.minSize&&e&&!c._lazysizesWidth;)a=e.offsetWidth,e=e.parentNode;return a},L=(zc=[],mc=[],uc=zc,dc=function(){var c=uc;for(uc=zc.length?mc:zc,vc=!0,ic=!1;c.length;)c.shift()();vc=!1},Mc=function(c,a){vc&&!a?c.apply(this,arguments):(uc.push(c),ic||(ic=!0,(e.hidden?r:h)(dc)))},Mc._lsFlush=dc,Mc),g=function(c,e){return e?function(){L(c)}:function(){var e=this,a=arguments;L((function(){c.apply(e,a)}))}},y=function(c){var e,t,n=function(){e=null,c()},l=function c(){var e=a.now()-t;e<99?r(c,99-e):(s||n)(n)};return function(){t=a.now(),e||(e=r(l,99))}},w=(W=/^img$/i,U=/^iframe$/i,Y="onscroll"in c&&!/(gle|ing)bot/.test(navigator.userAgent),G=0,X=0,K=-1,J=function(c){X--,(!c||X<0||!c.target)&&(X=0)},Q=function(c){return null==D&&(D="hidden"==p(e.body,"visibility")),D||!("hidden"==p(c.parentNode,"visibility")&&"hidden"==p(c,"visibility"))},$=function(c,a){var t,n=c,f=Q(c);for(R-=a,B+=a,I-=a,F+=a;f&&(n=n.offsetParent)&&n!=e.body&&n!=l;)(f=(p(n,"opacity")||1)>0)&&"visible"!=p(n,"overflow")&&(t=n.getBoundingClientRect(),f=F>t.left&&I<t.right&&B>t.top-1&&R<t.bottom+1);return f},cc=function(){var c,a,f,o,r,h,s,v,i,z,m,u,d=t.elements;if((O=n.loadMode)&&X<8&&(c=d.length)){for(a=0,K++;a<c;a++)if(d[a]&&!d[a]._lazyRace)if(!Y||t.prematureUnveil&&t.prematureUnveil(d[a]))oc(d[a]);else if((v=d[a].getAttribute("data-expand"))&&(h=1*v)||(h=G),z||(z=!n.expand||n.expand<1?l.clientHeight>500&&l.clientWidth>500?500:370:n.expand,t._defEx=z,m=z*n.expFactor,u=n.hFac,D=null,G<m&&X<1&&K>2&&O>2&&!e.hidden?(G=m,K=0):G=O>1&&K>1&&X<6?z:0),i!==h&&(P=innerWidth+h*u,N=innerHeight+h,s=-1*h,i=h),f=d[a].getBoundingClientRect(),(B=f.bottom)>=s&&(R=f.top)<=N&&(F=f.right)>=s*u&&(I=f.left)<=P&&(B||F||I||R)&&(n.loadHidden||Q(d[a]))&&(q&&X<3&&!v&&(O<3||K<4)||$(d[a],h))){if(oc(d[a]),r=!0,X>9)break}else!r&&q&&!o&&X<4&&K<4&&O>2&&(E[0]||n.preloadAfterLoad)&&(E[0]||!v&&(B||F||I||R||"auto"!=d[a].getAttribute(n.sizesAttr)))&&(o=E[0]||d[a]);o&&!r&&oc(o)}},ec=function(c){var e,t=0,l=n.throttleDelay,f=n.ricTimeout,o=function(){e=!1,t=a.now(),c()},h=s&&f>49?function(){s(o,{timeout:f}),f!==n.ricTimeout&&(f=n.ricTimeout)}:g((function(){r(o)}),!0);return function(c){var n;(c=!0===c)&&(f=33),e||(e=!0,(n=l-(a.now()-t))<0&&(n=0),c||n<9?h():r(h,n))}}(cc),ac=function(c){var e=c.target;e._lazyCache?delete e._lazyCache:(J(c),d(e,n.loadedClass),M(e,n.loadingClass),b(e,nc),H(e,"lazyloaded"))},tc=g(ac),nc=function(c){tc({target:c.target})},lc=function(c){var e,a=c.getAttribute(n.srcsetAttr);(e=n.customMedia[c.getAttribute("data-media")||c.getAttribute("media")])&&c.setAttribute("media",e),a&&c.setAttribute("srcset",a)},fc=g((function(c,e,a,t,l){var f,o,h,s,i,z;(i=H(c,"lazybeforeunveil",e)).defaultPrevented||(t&&(a?d(c,n.autosizesClass):c.setAttribute("sizes",t)),o=c.getAttribute(n.srcsetAttr),f=c.getAttribute(n.srcAttr),l&&(s=(h=c.parentNode)&&v.test(h.nodeName||"")),z=e.firesLoad||"src"in c&&(o||f||s),i={target:c},d(c,n.loadingClass),z&&(clearTimeout(j),j=r(J,2500),b(c,nc,!0)),s&&m.call(h.getElementsByTagName("source"),lc),o?c.setAttribute("srcset",o):f&&!s&&(U.test(c.nodeName)?function(c,e){var a=c.getAttribute("data-load-mode")||n.iframeLoadMode;0==a?c.contentWindow.location.replace(e):1==a&&(c.src=e)}(c,f):c.src=f),l&&(o||s)&&V(c,{src:f})),c._lazyRace&&delete c._lazyRace,M(c,n.lazyClass),L((function(){var e=c.complete&&c.naturalWidth>1;z&&!e||(e&&d(c,n.fastLoadedClass),ac(i),c._lazyCache=!0,r((function(){"_lazyCache"in c&&delete c._lazyCache}),9)),"lazy"==c.loading&&X--}),!0)})),oc=function(c){if(!c._lazyRace){var e,a=W.test(c.nodeName),t=a&&(c.getAttribute(n.sizesAttr)||c.getAttribute("sizes")),l="auto"==t;(!l&&q||!a||!c.getAttribute("src")&&!c.srcset||c.complete||u(c,n.errorClass)||!u(c,n.lazyClass))&&(e=H(c,"lazyunveilread").detail,l&&A.updateElem(c,!0,c.offsetWidth),c._lazyRace=!0,X++,fc(c,e,l,t,a))}},rc=y((function(){n.loadMode=3,ec()})),hc=function(){3==n.loadMode&&(n.loadMode=2),rc()},sc=function c(){q||(a.now()-T<999?r(c,999):(q=!0,n.loadMode=3,ec(),o("scroll",hc,!0)))},{_:function(){T=a.now(),t.elements=e.getElementsByClassName(n.lazyClass),E=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),o("scroll",ec,!0),o("resize",ec,!0),o("pageshow",(function(c){if(c.persisted){var a=e.querySelectorAll("."+n.loadingClass);a.length&&a.forEach&&h((function(){a.forEach((function(c){c.complete&&oc(c)}))}))}})),c.MutationObserver?new MutationObserver(ec).observe(l,{childList:!0,subtree:!0,attributes:!0}):(l.addEventListener("DOMNodeInserted",ec,!0),l.addEventListener("DOMAttrModified",ec,!0),setInterval(ec,999)),o("hashchange",ec,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(c){e.addEventListener(c,ec,!0)})),/d$|^c/.test(e.readyState)?sc():(o("load",sc),e.addEventListener("DOMContentLoaded",ec),r(sc,2e4)),t.elements.length?(cc(),L._lsFlush()):ec()},checkElems:ec,unveil:oc,_aLSL:hc}),A=(x=g((function(c,e,a,t){var n,l,f;if(c._lazysizesWidth=t,t+="px",c.setAttribute("sizes",t),v.test(e.nodeName||""))for(l=0,f=(n=e.getElementsByTagName("source")).length;l<f;l++)n[l].setAttribute("sizes",t);a.detail.dataAttr||V(c,a.detail)})),_=function(c,e,a){var t,n=c.parentNode;n&&(a=C(c,n,a),(t=H(c,"lazybeforesizes",{width:a,dataAttr:!!e})).defaultPrevented||(a=t.detail.width)&&a!==c._lazysizesWidth&&x(c,n,t,a))},Z=y((function(){var c,e=S.length;if(e)for(c=0;c<e;c++)_(S[c])})),{_:function(){S=e.getElementsByClassName(n.autosizesClass),o("resize",Z)},checkElems:Z,updateElem:_}),k=function c(){!c.i&&e.getElementsByClassName&&(c.i=!0,A._(),w._())};var S,x,_,Z;var E,q,j,O,T,P,N,R,I,F,B,D,W,U,Y,G,X,K,J,Q,$,cc,ec,ac,tc,nc,lc,fc,oc,rc,hc,sc;var vc,ic,zc,mc,uc,dc,Mc;return r((function(){n.init&&k()})),t={cfg:n,autoSizer:A,loader:w,init:k,uP:V,aC:d,rC:M,hC:u,fire:H,gW:C,rAF:L}}(a,a.document,Date);a.lazySizes=n,"object"==e(c)&&c.exports&&(c.exports=n)}("undefined"!=typeof window?window:{})}).call(this,a(2)(c))},function(c,e,a){"use strict";e.a=a.p+"89a52ae1d02b86d6143987c865471c24.eot"},function(c,e,a){"use strict";e.a=a.p+"4079ae2d2a15d0689568f3a5459241c7.eot"},function(c,e,a){"use strict";e.a=a.p+"efbd5d20e407bbf85f2b3087ee67bfa1.eot"},function(c){c.exports=JSON.parse('{"foods":[{"id":"0","name":"Bebek crepes","description":"Daging bebek asap yang dapat menjadi alternatif dari Bebek Peking.","picture":"../../images/menu/bebek-crepes.jpg","time":"20","rating":4.6},{"id":"1","name":"Daging sapi","description":"Medium Well Beef steak dengan rosemary menyajikan daging empuk dan juicy.","picture":"../../images/menu/daging-sapi.jpg","time":"20","rating":4.5},{"id":"2","name":"Ikan teri dan roti","description":"Olahan ikan teri yang memadukan rasa asin dan gurih.","picture":"../../images/menu/ikan-teri-dan-roti.jpg","time":"15","rating":3.6},{"id":"3","name":"Kari kacang dan telur","description":"Mempunyai aroma dan rasa yang dapat memancing selera kita.","picture":"../../images/menu/kari-kacang-dan-telur.jpg","time":"12","rating":4.2},{"id":"4","name":"Kari terong","description":"Lembutnya daging terong yang mengandung vitamin E sebagai antioksidan.","picture":"../../images/menu/kari-terong.jpg","time":"15","rating":3.8},{"id":"5","name":"Matzo farfel","description":"Simply crumbled matzo. It\'s not finely ground, but closer to the size.","picture":"../../images/menu/matzo-farfel.jpg","time":"18","rating":4.8},{"id":"6","name":"Napolitana","description":"Aprende a preparar Berenjenas napolitanas al horno con esta rica y fácil receta.","picture":"../../images/menu/napolitana.jpg","time":"16","rating":4.8},{"id":"7","name":"Paket rosemary","description":"Rempah yang berasal dari Mediterania ini sangat cocok ditambahkan pada olahan daging sapi, ayam.","picture":"../../images/menu/paket-rosemary.jpg","time":"13","rating":3.6},{"id":"8","name":"roket penne","description":"Enjoy a simple and delicious chicken penne infused with chilli and peppery rocket.","picture":"../../images/menu/roket-penne.jpg","time":"15","rating":3.8},{"id":"9","name":"Salad lengkeng","description":"Makanan yang dihidangkan bersama dressing (sauce) dengan lengkeng melimpah.","picture":"../../images/menu/salad-lengkeng.jpg","time":"10","rating":3.8},{"id":"10","name":"Salad yuzu","description":"Finely grate the peel of the yuzu, or other citrus fruit.","picture":"../../images/menu/salad-yuzu.jpg","time":"8","rating":3.6},{"id":"11","name":"Sosis squash dan mint","description":"Makanan yang terbuat dari daging cincang, lemak hewan, ternak dan rempah.","picture":"../../images/menu/sosis-squash-dan-mint.jpg","time":"8","rating":4},{"id":"12","name":"Sup Kohlrabi","description":"Signature sweet-but-peppery flavor profile, with a taste.","picture":"../../images/menu/sup-kohlrabi.jpg","time":"12","rating":3.7},{"id":"13","name":"Toastie salmon","description":"Get your seafood fix with these super easy salmon and cheese toasties.","picture":"../../images/menu/toastie-salmon.jpg","time":"10","rating":4.6},{"id":"14","name":"Tumis leek","description":"Combines tender marinated flank steak with onions and leek greens.","picture":"../../images/menu/tumis-leek.jpgg","time":"8","rating":4.1}],"drinks":[{"id":"1","name":"Air","description":"Air yang mengandung mineral atau bahan-bahan larut lain.","picture":"../../images/menu/air.jpg","time":"10","rating":4.8},{"id":"2","name":"Coklat panas","description":"Minuman panas yang dibuat dari cokelat atau kakao bubuk dan gula.","picture":"../../images/menu/coklat-panas.jpg","time":"8","rating":3.9},{"id":"3","name":"Es kopi","description":"Minuman kopi yang disajikan dingin atau ditambah es batu.","picture":"../../images/menu/es-kopi.jpg","time":"11","rating":3.3},{"id":"4","name":"Es krim","description":"Makanan beku dibuat dari produk susu seperti krim.","picture":"../../images/menu/es-krim.jpg","time":"9","rating":3.7},{"id":"5","name":"Es teh","description":"Minuman yang sering diminum saat siang hari.","picture":"../../images/menu/es-teh.jpg","time":"4","rating":2.9},{"id":"6","name":"Jus alpukat","description":"Mengandung lemak tak jenuh sehingga aman untuk dikonsumsi secara rutin.","picture":"../../images/menu/jus-alpukat.jpg","time":"8","rating":4.1},{"id":"7","name":"Jus apel","description":"Mengandung senyawa antiradang dan antialergi.","picture":"../../images/menu/jus-apel.jpg","time":"6","rating":4.2},{"id":"8","name":"Jus jeruk","description":"Sari buah yang diperoleh dengan memeras atau menekan isi buah jeruk.","picture":"../../images/menu/jus-jeruk.jpg","time":"6","rating":4.5},{"id":"9","name":"Jus mangga","description":"Jus mangga bisa membantu mencapai tubuh ideal kamu.","picture":"../../images/menu/jus-mangga.jpg","time":"6","rating":4.2},{"id":"10","name":"Jus tomat","description":"Jus tomat mengandung senyawa bioaktif yang berperan sebagai antioksidan.","picture":".../../images/menu/jus-tomat.jpg","time":"6","rating":4.2},{"id":"11","name":"Kopi espresso","description":"Minuman yang dihasilkan dengan mengekstraksi biji kopi.","picture":"../../images/menu/kopi-espresso.jpg","time":"10","rating":4},{"id":"12","name":"Minuman soda","description":"Minuman tidak memiliki kandungan alkohol yang mengalami proses karbonasi.","picture":"../../images/menu/minuman-soda.jpg","time":"2","rating":4.2},{"id":"13","name":"Sirup","description":"Cairan yang kental dan memiliki kadar gula terlarut yang tinggi.","picture":"../../images/menu/sirup.jpg","time":"4","rating":3.5},{"id":"14","name":"Teh manis","description":"Minuman yang terbuat dari larutan teh yang diberi pemanis.","picture":"../../images/menu/teh-manis.jpg","time":"5","rating":4.4}]}')},function(c,e,a){"use strict";e.a=a.p+"5d982326781d6f8ea98b7c2d8f958fc5.jpg"},function(c,e,a){"use strict";e.a=a.p+"c1210e5ebe4344da508396540be7f52c.woff2"},function(c,e,a){"use strict";e.a=a.p+"329a95a9172fdb2cccb4f9347ed55233.woff"},function(c,e,a){"use strict";e.a=a.p+"9e138496e8f1719c6ebf0abe50563635.ttf"},function(c,e,a){"use strict";e.a=a.p+"216edb96b562c79adc09e2d3c63db7c0.svg"},function(c,e,a){"use strict";e.a=a.p+"68c5af1f48e2bfca1e57ae1c556a5c72.woff2"},function(c,e,a){"use strict";e.a=a.p+"3672264812746c3c7225909742da535c.woff"},function(c,e,a){"use strict";e.a=a.p+"1017bce89c72f95bcf8e2bf4774efdbf.ttf"},function(c,e,a){"use strict";e.a=a.p+"19e27d348fefc21941e0310a0ec6339b.svg"},function(c,e,a){"use strict";e.a=a.p+"ada6e6df937f7e5e8b790dfea07109b7.woff2"},function(c,e,a){"use strict";e.a=a.p+"c6ec080084769a6d8a34ab35b77999cd.woff"},function(c,e,a){"use strict";e.a=a.p+"07c3313b24f7b1ca85ee99b4fa7db55e.ttf"},function(c,e,a){"use strict";e.a=a.p+"13de59f1a36b6cb4bca0050160ff0e41.svg"},function(c,e){var a="\\sw.js";Object.defineProperty(e,"__esModule",{value:!0}),e.default={register:function(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!navigator.serviceWorker&&navigator.serviceWorker.register(a,c)}},c.exports=e.default},function(c,e,a){(function(c){function e(c){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(c)}var a=function(c){"use strict";var a=Object.prototype,t=a.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},l=n.iterator||"@@iterator",f=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function r(c,e,a){return Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),c[e]}try{r({},"")}catch(c){r=function(c,e,a){return c[e]=a}}function h(c,e,a,t){var n=e&&e.prototype instanceof i?e:i,l=Object.create(n.prototype),f=new g(t||[]);return l._invoke=function(c,e,a){var t="suspendedStart";return function(n,l){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===n)throw l;return w()}for(a.method=n,a.arg=l;;){var f=a.delegate;if(f){var o=p(f,a);if(o){if(o===v)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===t)throw t="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t="executing";var r=s(c,e,a);if("normal"===r.type){if(t=a.done?"completed":"suspendedYield",r.arg===v)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(t="completed",a.method="throw",a.arg=r.arg)}}}(c,a,f),l}function s(c,e,a){try{return{type:"normal",arg:c.call(e,a)}}catch(c){return{type:"throw",arg:c}}}c.wrap=h;var v={};function i(){}function z(){}function m(){}var u={};u[l]=function(){return this};var d=Object.getPrototypeOf,M=d&&d(d(y([])));M&&M!==a&&t.call(M,l)&&(u=M);var b=m.prototype=i.prototype=Object.create(u);function H(c){["next","throw","return"].forEach((function(e){r(c,e,(function(c){return this._invoke(e,c)}))}))}function V(c,a){var n;this._invoke=function(l,f){function o(){return new a((function(n,o){!function n(l,f,o,r){var h=s(c[l],c,f);if("throw"!==h.type){var v=h.arg,i=v.value;return i&&"object"===e(i)&&t.call(i,"__await")?a.resolve(i.__await).then((function(c){n("next",c,o,r)}),(function(c){n("throw",c,o,r)})):a.resolve(i).then((function(c){v.value=c,o(v)}),(function(c){return n("throw",c,o,r)}))}r(h.arg)}(l,f,n,o)}))}return n=n?n.then(o,o):o()}}function p(c,e){var a=c.iterator[e.method];if(void 0===a){if(e.delegate=null,"throw"===e.method){if(c.iterator.return&&(e.method="return",e.arg=void 0,p(c,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var t=s(a,c.iterator,e.arg);if("throw"===t.type)return e.method="throw",e.arg=t.arg,e.delegate=null,v;var n=t.arg;return n?n.done?(e[c.resultName]=n.value,e.next=c.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(c){var e={tryLoc:c[0]};1 in c&&(e.catchLoc=c[1]),2 in c&&(e.finallyLoc=c[2],e.afterLoc=c[3]),this.tryEntries.push(e)}function L(c){var e=c.completion||{};e.type="normal",delete e.arg,c.completion=e}function g(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(C,this),this.reset(!0)}function y(c){if(c){var e=c[l];if(e)return e.call(c);if("function"==typeof c.next)return c;if(!isNaN(c.length)){var a=-1,n=function e(){for(;++a<c.length;)if(t.call(c,a))return e.value=c[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:w}}function w(){return{value:void 0,done:!0}}return z.prototype=b.constructor=m,m.constructor=z,z.displayName=r(m,o,"GeneratorFunction"),c.isGeneratorFunction=function(c){var e="function"==typeof c&&c.constructor;return!!e&&(e===z||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,m):(c.__proto__=m,r(c,o,"GeneratorFunction")),c.prototype=Object.create(b),c},c.awrap=function(c){return{__await:c}},H(V.prototype),V.prototype[f]=function(){return this},c.AsyncIterator=V,c.async=function(e,a,t,n,l){void 0===l&&(l=Promise);var f=new V(h(e,a,t,n),l);return c.isGeneratorFunction(a)?f:f.next().then((function(c){return c.done?c.value:f.next()}))},H(b),r(b,o,"Generator"),b[l]=function(){return this},b.toString=function(){return"[object Generator]"},c.keys=function(c){var e=[];for(var a in c)e.push(a);return e.reverse(),function a(){for(;e.length;){var t=e.pop();if(t in c)return a.value=t,a.done=!1,a}return a.done=!0,a}},c.values=y,g.prototype={constructor:g,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!c)for(var e in this)"t"===e.charAt(0)&&t.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var c=this.tryEntries[0].completion;if("throw"===c.type)throw c.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var e=this;function a(a,t){return f.type="throw",f.arg=c,e.next=a,t&&(e.method="next",e.arg=void 0),!!t}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],f=l.completion;if("root"===l.tryLoc)return a("end");if(l.tryLoc<=this.prev){var o=t.call(l,"catchLoc"),r=t.call(l,"finallyLoc");if(o&&r){if(this.prev<l.catchLoc)return a(l.catchLoc,!0);if(this.prev<l.finallyLoc)return a(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return a(l.catchLoc,!0)}else{if(!r)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return a(l.finallyLoc)}}}},abrupt:function(c,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&t.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===c||"continue"===c)&&l.tryLoc<=e&&e<=l.finallyLoc&&(l=null);var f=l?l.completion:{};return f.type=c,f.arg=e,l?(this.method="next",this.next=l.finallyLoc,v):this.complete(f)},complete:function(c,e){if("throw"===c.type)throw c.arg;return"break"===c.type||"continue"===c.type?this.next=c.arg:"return"===c.type?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):"normal"===c.type&&e&&(this.next=e),v},finish:function(c){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===c)return this.complete(a.completion,a.afterLoc),L(a),v}},catch:function(c){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===c){var t=a.completion;if("throw"===t.type){var n=t.arg;L(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(c,e,a){return this.delegate={iterator:y(c),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),v}},c}("object"===e(c)?c.exports:{});try{regeneratorRuntime=a}catch(c){Function("r","regeneratorRuntime = r")(a)}}).call(this,a(2)(c))},function(c,e,a){var t=a(3),n=a(26);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[c.i,n,""]]);var l={insert:"head",singleton:!1};t(n,l);c.exports=n.locals||{}},function(c,e,a){"use strict";a.r(e);var t=a(1),n=a.n(t),l=a(0),f=a.n(l),o=a(10),r=n()((function(c){return c[1]}));r.push([c.i,"@import url(https://fonts.googleapis.com/css2?family=Karla&display=swap);"]);var h=f()(o.a);r.push([c.i,"* {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tfont-size: 62.5%;\n\tfont-family: 'Karla', sans-serif;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\na {\n\ttext-decoration: none;\n}\n\na,\nbutton {\n\tcursor: pointer;\n\tmin-height: 44px;\n\tmin-width: 44px;\n}\n/* \n    AppBar\n*/\n\n.app-bar {\n\tpadding: 8px 16px;\n\tbackground-color: white;\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr auto;\n\tgap: 10px;\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 99;\n\tborder-bottom: 1px solid #e2e8f0;\n}\n\n.app-bar .app-bar__menu {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.app-bar .app-bar__menu button {\n\tbackground-color: transparent;\n\tborder: none;\n\tfont-size: 24px;\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.app-bar .app-bar__brand {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.app-bar .app-bar__brand .logo img {\n\theight: 54px;\n}\n\n.app-bar .app-bar__navigation {\n\tposition: absolute;\n\ttext-align: center;\n\ttop: 74.25px;\n\tleft: -120%;\n\twidth: 100%;\n\ttransition: all 0.3s;\n\tbackground-color: white;\n\toverflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n\tleft: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: black;\n\tpadding: 8px 0;\n\tmargin-bottom: 5px;\n\twidth: 100%;\n\tfont-size: 1.075rem;\n\tfont-weight: 600;\n\tline-height: 44px;\n}\n\n/* \n    Skip Link   \n*/\n\n.skip-link {\n\tposition: absolute;\n\ttop: -120px;\n\tleft: 15px;\n\tbackground-color: #79ce57;\n\tcolor: #101010;\n\tborder: 0;\n\tpadding: 8px;\n\tfont-size: 16px;\n\tz-index: 1050;\n\ttext-decoration: none;\n\tline-height: 44px;\n\twidth: 150px;\n\ttext-align: center;\n}\n\n.skip-link:focus {\n\ttop: 10px;\n}\n\n/* \n    Hero\n*/\n\n.main-hero {\n\tdisplay: flex;\n\talign-items: center;\n\tmin-height: 350px;\n\ttext-align: center;\n\tbackground-image: url("+h+");\n\tbackground-position: center;\n}\n\n.hero-content {\n\tmargin: 0 auto;\n}\n\n.hero-title {\n\tcolor: #fff;\n\tfont-weight: 800;\n\tfont-size: 36px;\n}\n\n.hero-desc {\n\tcolor: #fff;\n\tmargin-top: 16px;\n\tfont-size: 18px;\n\tfont-weight: 400;\n}\n\n.main {\n\twidth: 100%;\n\tmargin: 0 auto;\n}\n\n.main-header {\n\tpadding: 32px;\n}\n\n.main-header h1 {\n\tcolor: #313131;\n\tfont-size: 24px;\n\tfont-weight: 600;\n}\n\n.main-header p {\n\tcolor: #747474;\n\tfont-size: 14px;\n\tmargin-top: 0.5rem;\n}\n\n/* \n    Main-card \n*/\n\n.main-content {\n\tmargin: 0 32px;\n\tdisplay: grid;\n\tgrid-row-gap: 16px;\n\ttext-align: left;\n}\n\n.card {\n\tposition: relative;\n\toverflow: hidden;\n\twidth: 100%;\n\tborder-radius: 12px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.rate {\n\tposition: absolute;\n\ttop: 12px;\n\tright: 12px;\n\tbackground-color: #fff;\n\twidth: 40px;\n\tpadding: 10px;\n\tcolor: #535353;\n\tfont-size: 13px;\n\tfont-weight: 600;\n\tborder-radius: 5px;\n\ttext-align: center;\n\tdisplay: flex;\n}\n\n.fa-star {\n\tcolor: #ffd000;\n\tmargin-right: 4px;\n}\n\n.card-image {\n\twidth: 100%;\n\tmax-height: 200px;\n\tobject-fit: cover;\n}\n\n.card-content {\n\tpadding: 1.75rem;\n}\n\n.card-title a {\n\tdisplay: block;\n\tfont-size: 24px;\n\tfont-weight: 600;\n\tcolor: #1d1c1c;\n}\n\n.card-title a:hover {\n\topacity: 0.5;\n}\n\n.card-subtitle {\n\tdisplay: inline-block;\n\tcolor: #9c9b9b;\n\tfont-size: 15px;\n\tfont-weight: 500;\n\tpadding-bottom: 14px;\n}\n\n.fa-map-marker-alt {\n\tcolor: #9c9b9b;\n\tfont-size: 14px;\n\tmargin-right: 8px;\n}\n\n.card-desc {\n\tfont-size: 14px;\n\tline-height: 1.5em;\n\tcolor: #555555;\n\ttext-align: justify;\n}\n\n/* \n    Detail Resto\n*/\n\n.detail-header-title {\n\tpadding: 18px 32px;\n}\n\n.detail-header-title ul li {\n\tdisplay: inline-block;\n\tlist-style: none;\n}\n\n.header-title {\n\tcolor: #7ea04d;\n}\n\n.title-slash {\n\tpadding: 0 5px;\n\tcolor: #353535;\n}\n\n.detail-h-title {\n\tcolor: #747474;\n\tfont-size: 12px;\n\tfont-weight: 600;\n}\n\n.header-resto {\n\tbackground-color: #f7f7fb;\n\t/* margin-right: -0.75rem;\n    margin-left: -0.75rem; */\n}\n\n.detail-ovw-image {\n\tdisplay: flex;\n\theight: 250px;\n}\n\n.detail-ovw-image img {\n\twidth: 100%;\n\tborder-radius: 10px;\n\tbox-shadow: 0 5px 10px 0 rgba(51, 54, 69, 0.1);\n\tobject-fit: cover;\n}\n\n.detail-ovw-info {\n\tmargin-top: 18px;\n}\n\n.detail-ovw-info h1 {\n\tmargin-bottom: 5px;\n\tfont-size: 2rem;\n}\n\n.ovw-categories {\n\tdisplay: inline-block;\n\tmargin-top: 15px;\n\tmargin-bottom: 15px;\n}\n\n.ovw-categories span {\n\tbackground-color: #7ea04d;\n\tcolor: #fff;\n\tfont-size: 10px;\n\tpadding: 0.2rem 1rem;\n\tborder-radius: 10px;\n\tmargin-right: 5px;\n}\n\n.ovw-subtitle {\n\tmargin-top: 0.5rem;\n\tmargin-bottom: 0.75rem;\n\tdisplay: grid;\n\tgrid-template-columns: 80px 200px;\n\tfont-size: 0.9rem;\n}\n\n.ovw-address {\n\tfont-size: 14px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n}\n\n.ovw-address p {\n\tcolor: #000;\n}\n\n.ovw-description {\n\ttext-overflow: ellipsis;\n\ttext-align: justify;\n}\n\n.food-menu h1 {\n\tpadding-bottom: 16px;\n}\n\n.drink-menu h1,\n.review h1 {\n\tpadding-top: 16px;\n\tpadding-bottom: 32px;\n}\n\n.foods,\n.drinks {\n\tdisplay: grid;\n\tgrid-row-gap: 16px;\n\ttext-align: left;\n}\n\n.food-card,\n.drink-card {\n\tdisplay: grid;\n\tgrid-template-columns: 38% 62%;\n\tbackground-color: #fff;\n\tborder-radius: 10px;\n\tbox-shadow: 0 5px 10px 0 rgba(51, 54, 69, 0.1);\n\tmargin-bottom: 15px;\n}\n\n.food-image,\n.drink-image {\n\tpadding: 10px;\n\theight: 110px;\n}\n\n.food-image img,\n.drink-image img {\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 10px;\n\tobject-fit: cover;\n}\n\n.food-info,\n.drink-info {\n\tpadding: 15px 10px;\n}\n\n.food-info h1,\n.drink-info h1 {\n\tmargin-top: 0;\n\tmargin-bottom: 10px;\n\ttext-transform: capitalize;\n\tfont-size: 1em;\n}\n\n.food-subtitle,\n.drink-subtitle {\n\tdisplay: grid;\n\tgrid-template-columns: 60px 150px;\n\tpadding-top: 10px;\n\tmargin-bottom: 10px;\n\tfont-size: 12px;\n}\n\n.review {\n\tdisplay: grid;\n\tgrid-row-gap: 16px;\n\ttext-align: center;\n\tpadding-top: 16px;\n}\n\n.review-card {\n\twidth: auto;\n\tbackground-color: #fff;\n\tborder-radius: 10px;\n\tbox-shadow: 0 5px 10px 0 rgba(51, 54, 69, 0.1);\n}\n\n.review-image {\n\tdisplay: flex;\n\theight: 100px;\n\twidth: 100px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tpadding-top: 10px;\n}\n\n.review-image img {\n\twidth: 100%;\n}\n\n.review-info {\n\tpadding-bottom: 30px;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n}\n\n.review-info .date {\n\tcolor: #9c9b9b;\n\tfont-size: 12px;\n}\n\n.review-info p {\n\tcolor: #000;\n}\n\n/* \n    Like\n*/\n\n.like {\n\tfont-size: 18px;\n\tposition: fixed;\n\tbottom: 32px;\n\tright: 32px;\n\tbackground-color: #7ea04d;\n\tcolor: #fff;\n\tborder: 0;\n\tborder-radius: 50%;\n\twidth: 55px;\n\theight: 55px;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n/* \n    Footer\n*/\n\nfooter {\n\ttext-align: center;\n\tcolor: #525252;\n\tfont-size: 14px;\n\tpadding: 2rem;\n}\n",""]),e.default=r},function(c,e,a){var t=a(3),n=a(28);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[c.i,n,""]]);var l={insert:"head",singleton:!1};t(n,l);c.exports=n.locals||{}},function(c,e,a){"use strict";a.r(e);var t=a(1),n=a.n(t)()((function(c){return c[1]}));n.push([c.i,"@media screen and (min-width: 650px) {\r\n\t.app-bar {\r\n\t\tgrid-template-columns: 1fr auto;\r\n\t\tpadding: 8px 32px;\r\n\t}\r\n\r\n\t.app-bar .app-bar__menu {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.app-bar .app-bar__navigation {\r\n\t\tposition: static;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.app-bar .app-bar__navigation ul li {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\r\n\t.app-bar .app-bar__navigation ul li a {\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 120px;\r\n\t\ttext-align: center;\r\n\t\tmargin: 0;\r\n\t\theight: 44px;\r\n\t}\r\n\r\n\t/* .main-hero {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tmin-height: 350px;\r\n\t\ttext-align: center;\r\n\t\tbackground-image: url('../public/images/hero/hero-image-small.jpg');\r\n\t\tbackground-position: center;\r\n\t} */\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n\t/* .main-hero {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tmin-height: 350px;\r\n\t\ttext-align: center;\r\n\t\tbackground-image: url('../public/images/hero/hero-image-large.jpg');\r\n\t\tbackground-position: center;\r\n\t} */\r\n\r\n\t.main-content,\r\n\t.foods,\r\n\t.drinks,\r\n\t.review {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\tgrid-column-gap: 16px;\r\n\t\tgrid-row-gap: 16px;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n\t.header-resto .main .main-header {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: 2fr 2fr;\r\n\t}\r\n\r\n\t.detail-ovw-image {\r\n\t\tdisplay: flex;\r\n\t\theight: 350px;\r\n\t}\r\n\r\n\t.detail-ovw-info {\r\n\t\tmargin-top: 0;\r\n\t\tmargin-left: 2.5rem;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n\t.main {\r\n\t\tmax-width: 1200px;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.main-content,\r\n\t.foods,\r\n\t.drinks,\r\n\t.review {\r\n\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\tgrid-column-gap: 26px;\r\n\t\tgrid-row-gap: 26px;\r\n\t}\r\n\r\n\t.detail-header-title {\r\n\t\tmargin-left: 0.175rem;\r\n\t}\r\n}\r\n",""]),e.default=n},function(c,e,a){(function(c,e){function a(c){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(c)}
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)