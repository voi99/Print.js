!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.printJS=t():e.printJS=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r={isFirefox:function(){return"undefined"!=typeof InstallTrigger},getFirefoxMajorVersion:function(e){var t=(e=e||navigator.userAgent).toLowerCase().match(/firefox\/(\S+)/);if(t)return t[1].split(".").map((function(e){return parseInt(e)}))[0]},isIE:function(){return-1!==navigator.userAgent.indexOf("MSIE")||!!document.documentMode},isEdge:function(){return!r.isIE()&&!!window.StyleMedia},isChrome:function(){return!!(arguments.length>0&&arguments[0]!==undefined?arguments[0]:window).chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||-1!==navigator.userAgent.toLowerCase().indexOf("safari")},isIOSChrome:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("crios")}},o=r,i={show:function(e){var t=document.createElement("div");t.setAttribute("style","font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"),t.setAttribute("id","printJS-Modal");var n=document.createElement("div");n.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),n.appendChild(r);var o=document.createElement("span");o.setAttribute("class","printSpinner"),n.appendChild(o);var a=document.createTextNode(e.modalMessage);n.appendChild(a),t.appendChild(n),document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("printClose").addEventListener("click",(function(){i.close()}))},close:function(){var e=document.getElementById("printJS-Modal");e&&e.parentNode.removeChild(e)}},a=i;function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}function c(e,t){for(var n=0;n<e.length;n++)if("object"===l(t)&&-1!==t.indexOf(e[n]))return!0;return!1}function s(e,t){var n=document.createElement("div");if(u(t.header))n.innerHTML=t.header;else{var r=document.createElement("h1"),o=document.createTextNode(t.header);r.appendChild(o),r.setAttribute("style",t.headerStyle),n.appendChild(r)}e.insertBefore(n,e.childNodes[0])}function f(e,t){var n=document.createElement("div");if(u(t.footer))n.innerHTML=t.footer;else{var r=document.createElement("h1"),o=document.createTextNode(t.footer);r.appendChild(o),r.setAttribute("style",t.footerStyle),n.appendChild(r)}e.insertBefore(n,e.childNodes.lastChild)}function p(e){e.showModal&&a.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var t="mouseover";(o.isChrome()||o.isFirefox())&&(t="focus");window.addEventListener(t,(function n(){window.removeEventListener(t,n),e.onPrintDialogClose();var r=document.getElementById(e.frameId);r&&(e.frameRemoveDelay?setTimeout((function(){r.remove()}),e.frameRemoveDelay):r.remove())}))}function u(e){return new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>").test(e)}function m(e,t){try{if(e.focus(),o.isEdge()||o.isIE())try{e.contentWindow.document.execCommand("print",!1,null)}catch(n){setTimeout((function(){e.contentWindow.print()}),1e3)}else setTimeout((function(){e.contentWindow.print()}),1e3)}catch(r){t.onError(r)}finally{o.isFirefox()&&o.getFirefoxMajorVersion()<110&&(e.style.visibility="hidden",e.style.left="-1px"),p(t)}}var b={send:function(e,t){document.getElementsByTagName("body")[0].appendChild(t);var n=document.getElementById(e.frameId);n.onload=function(){if("pdf"!==e.type){var t=n.contentWindow||n.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),"pdf"!==e.type&&e.style){var r=document.createElement("style");r.innerHTML=e.style,t.head.appendChild(r)}var i=t.getElementsByTagName("img");i.length>0?function(e){var t=e.map((function(e){if(e.src&&e.src!==window.location.href)return function(e){return new Promise((function(t){(function n(){e&&"undefined"!=typeof e.naturalWidth&&0!==e.naturalWidth&&e.complete?t():setTimeout(n,500)})()}))}(e)}));return Promise.all(t)}(Array.from(i)).then((function(){return m(n,e)})):m(n,e)}else o.isFirefox()&&o.getFirefoxMajorVersion()<110?setTimeout((function(){return m(n,e)}),1e3):m(n,e)}}},y=function(e,t){if(e.base64){-1!==e.printable.indexOf(",")&&(e.printable=e.printable.split(",")[1]);var n=Uint8Array.from(atob(e.printable),(function(e){return e.charCodeAt(0)}));h(e,t,n)}else{e.printable=/^(blob|http|\/\/)/i.test(e.printable)?e.printable:window.location.origin+("/"!==e.printable.charAt(0)?"/"+e.printable:e.printable);var r=new window.XMLHttpRequest;r.responseType="arraybuffer",r.addEventListener("error",(function(){p(e),e.onError(r.statusText,r)})),r.addEventListener("load",(function(){if(-1===[200,201].indexOf(r.status))return p(e),void e.onError(r.statusText,r);h(e,t,r.response)})),r.open("GET",e.printable,!0),r.send()}};function h(e,t,n){var r=new window.Blob([n],{type:"application/pdf"});r=window.URL.createObjectURL(r),t.setAttribute("src",r),b.send(e,t)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}var v=function(e,t){var n,r="object"===g(n=e.printable)&&n&&(n instanceof HTMLElement||1===n.nodeType)?e.printable:document.getElementById(e.printable);r?(e.printableElement=w(r,e),e.header&&s(e.printableElement,e),e.footer&&f(e.printableElement,e),b.send(e,t)):window.console.error("Invalid HTML element id: "+e.printable)};function w(e,t){for(var n=e.cloneNode(),r=Array.prototype.slice.call(e.childNodes),o=0;o<r.length;o++)if(-1===t.ignoreElements.indexOf(r[o].id)){var i=w(r[o],t);n.appendChild(i)}switch(t.scanStyles&&1===e.nodeType&&n.setAttribute("style",function(e,t){for(var n="",r=(document.defaultView||window).getComputedStyle(e,""),o=0;o<r.length;o++)(-1!==t.targetStyles.indexOf("*")||-1!==t.targetStyle.indexOf(r[o])||c(t.targetStyles,r[o]))&&r.getPropertyValue(r[o])&&(n+=r[o]+":"+r.getPropertyValue(r[o])+";");return n+"max-width: "+t.maxWidth+"px !important; font-size: "+t.font_size+" !important;"}(e,t)),e.tagName){case"SELECT":n.value=e.value;break;case"CANVAS":n.getContext("2d").drawImage(e,0,0)}return n}var E=function(e,t){e.printableElement=document.createElement("div"),e.printableElement.setAttribute("style","width:100%"),e.printableElement.innerHTML=e.printable,e.header&&s(e.printableElement,e),e.footer&&f(e.printableElement,e),b.send(e,t)},S=function(e,t){e.printable.constructor!==Array&&(e.printable=[e.printable]),e.printableElement=document.createElement("div"),e.printable.forEach((function(t){var n=document.createElement("img");if(n.setAttribute("style",e.imageStyle),n.src=t,o.isFirefox()){var r=n.src;n.src=r}var i=document.createElement("div");i.appendChild(n),e.printableElement.appendChild(i)})),e.header&&s(e.printableElement,e),e.footer&&f(e.printableElement,e),b.send(e,t)};function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}var C=function(e,t){if("object"!==x(e.printable))throw new Error("Invalid javascript data object (JSON).");if("boolean"!=typeof e.repeatTableHeader)throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!e.properties||!Array.isArray(e.properties))throw new Error("Invalid properties array for your JSON data.");e.properties=e.properties.map((function(t){return{field:"object"===x(t)?t.field:t,displayName:"object"===x(t)?t.displayName:t,columnSize:"object"===x(t)&&t.columnSize?t.columnSize+";":100/e.properties.length+"%;"}})),e.printableElement=document.createElement("div"),e.header&&s(e.printableElement,e),e.printableElement.innerHTML+=function(e){var t=e.printable,n=e.properties,r='<table style="border-collapse: collapse; width: 100%;">';e.repeatTableHeader&&(r+="<thead>");r+="<tr>";for(var o=0;o<n.length;o++)r+='<th style="width:'+n[o].columnSize+";"+e.gridHeaderStyle+'">'+d(n[o].displayName)+"</th>";r+="</tr>",e.repeatTableHeader&&(r+="</thead>");r+="<tbody>";for(var i=0;i<t.length;i++){r+="<tr>";for(var a=0;a<n.length;a++){var l=t[i],c=n[a].field.split(".");if(c.length>1)for(var s=0;s<c.length;s++)l=l[c[s]];else l=l[n[a].field];r+='<td style="width:'+n[a].columnSize+e.gridStyle+'">'+l+"</td>"}r+="</tr>"}return r+="</tbody></table>"}(e),e.footer&&f(e.printableElement,e),b.send(e,t)};function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}var A=["pdf","html","image","json","raw-html"],L=function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",footer:null,footerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(e){throw e},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",frameRemoveDelay:null,printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},t=arguments[0];if(t===undefined)throw new Error("printJS expects at least 1 attribute.");switch(T(t)){case"string":e.printable=encodeURI(t),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":for(var n in e.printable=t.printable,e.fallbackPrintable="undefined"!=typeof t.fallbackPrintable?t.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable,e)"printable"!==n&&"fallbackPrintable"!==n&&(e[n]="undefined"!=typeof t[n]?t[n]:e[n]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+T(t))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||"string"!=typeof e.type||-1===A.indexOf(e.type.toLowerCase()))throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&a.show(e),e.onLoadingStart&&e.onLoadingStart();var r=document.getElementById(e.frameId);r&&r.parentNode.removeChild(r);var i=document.createElement("iframe");switch(o.isFirefox()?i.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):i.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),i.setAttribute("id",e.frameId),"pdf"!==e.type&&(i.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach((function(e){i.srcdoc+='<link rel="stylesheet" href="'+e+'">'}))),i.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(o.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer."),window.open(e.fallbackPrintable,"_blank").focus(),e.onIncompatibleBrowser()}catch(l){e.onError(l)}finally{e.showModal&&a.close(),e.onLoadingEnd&&e.onLoadingEnd()}else y(e,i);break;case"image":S(e,i);break;case"html":v(e,i);break;case"raw-html":E(e,i);break;case"json":C(e,i)}},j=L;"undefined"!=typeof window&&(window.printJS=j);t["default"]=j}])["default"]}));
//# sourceMappingURL=print.map