(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{272:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},273:function(t,e,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("80db8310",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";var r=n(7),o=n(77).find,c=n(137),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},275:function(t,e,n){"use strict";var r=n(7),o=n(276).trim;r({target:"String",proto:!0,forced:n(277)("trim")},{trim:function(){return o(this)}})},276:function(t,e,n){var r=n(3),o=n(21),c=n(11),l=n(272),d=r("".replace),f="["+l+"]",h=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),y=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,h,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:y(1),end:y(2),trim:y(3)}},277:function(t,e,n){var r=n(76).PROPER,o=n(6),c=n(272);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},278:function(t,e,n){"use strict";n(273)},279:function(t,e,n){var r=n(104)(!1);r.push([t.i,".content[data-v-e4ba74ac]{display:flex;flex-direction:column}",""]),t.exports=r},280:function(t,e,n){"use strict";n.r(e);n(29),n(44),n(62),n(34),n(63),n(40),n(41),n(27),n(42),n(43),n(28);var r=n(131);var o=n(174),c=n(99);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d,f,h,m=n(25),y=n(4),v=(n(274),n(12),n(30),n(45),n(275),n(22),n(138),n(139),n(39),n(52));function x(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.tab="tab",t.bloks="bloks",t.text="text",t.textarea="textarea",t.markdown="markdown",t.number="number",t.datetime="datetime",t.boolean="boolean",t.option="option",t.options="options",t.image="image",t.file="file",t.multiasset="multiasset",t.multilink="multilink",t.section="section",t.richtext="richtext"}(d||(d={})),function(t){t.Document="doc",t.Heading="heading",t.Paragraph="paragraph",t.BulletList="bullet_list",t.NumberList="ordered_list",t.ListItem="list_item",t.Quote="blockquote",t.Code="code_block",t.Text="text",t.HorizontalRule="horizontal_rule"}(f||(f={})),function(t){t.Bold="bold",t.Italic="italic",t.Underline="underline",t.Strike="strike",t.Link="link"}(h||(h={}));var j={data:function(){return{showModal:!1,requireRefresh:!1,story:void 0,sourceComponent:void 0,targetComponent:void 0}},mounted:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.top==window.self&&window.location.assign("https://app.storyblok.com/oauth/tool_redirect"),window.addEventListener("message",t.processMessage,!1),window.parent.postMessage({action:"tool-changed",tool:"change-content-type",event:"getContext"},"https://app.storyblok.com"),window.parent.postMessage({action:"tool-changed",tool:"change-content-type",event:"heightChange",height:400},"https://app.storyblok.com");case 4:case"end":return e.stop()}}),e)})))()},computed:C({},Object(v.d)("storyblok",["components"])),methods:C(C({},Object(v.c)("storyblok",["loadStoryBlokBridge","readStory","updateStory"])),{},{processMessage:function(t){var e=this;t.data&&"get-context"==t.data.action&&(this.story=t.data.story,this.sourceComponent=this.components.find((function(t){return t.name===e.story.content.component})))},changeContentType:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.readStory(t.story.id).then((function(e){return t.updateStory(t.convertComponentFields(e,t.targetComponent))})).then((function(e){t.story=e,t.requireRefresh=!0,window.parent.postMessage({action:"tool-changed",tool:"change-content-type",event:"heightChange",height:60},"https://app.storyblok.com")}));case 2:case"end":return e.stop()}}),e)})))()},convertComponentFields:function(t,e){var n=this.components.find((function(e){return e.name===t.content.component})),r=this.components.find((function(t){return t.name===e}));if(r){t.content.component=e;for(var o=0,c=Object.keys(r.schema);o<c.length;o++){var l=c[o],f=n.schema[l],h=r.schema[l];h.type!==d.tab&&(void 0!==f&&(t.content[l]=this.convertFieldValue(f,h,t.content[l])))}}return t},convertFieldValue:function(t,e,n){if(t.type===e.type)return n;switch(t.type){case d.boolean:switch(e.type){case d.number:return n?1:0;case d.text:case d.textarea:case d.richtext:default:return n}case d.number:switch(e.type){case d.boolean:return n>0?1:0;case d.text:case d.textarea:case d.richtext:default:return n}case d.text:var r="".concat(n).trim().toLowerCase();switch(e.type){case d.boolean:return/^(\d*|\d+.\d*|\d*.\d+)$/.test(r)?parseFloat(r)>0:!!/^(true|on|activ(ated|e)|enable(d?)|allow(e|ed))$/.test(r)||!/^(off|false|inactive|deactivated|disable(d?)|den(y|ied))$/.test(r)&&n;case d.number:return/^(\d*|\d+.\d*|\d*.\d+)$/.test(r)?parseFloat(r):n;case d.textarea:return n;case d.richtext:return this.plaintextToRichtext(n);default:return n}case d.textarea:switch(e.type){case d.boolean:var o="".concat(n).split("\n").join("").trim().toLowerCase();return/^(\d*|\d+.\d*|\d*.\d+)$/.test(o)?parseFloat(o)>0:!!/^(true|on|activ(ated|e)|enable(d?)|allow(e|ed))$/.test(o)||!/^(off|false|inactive|deactivated|disable(d?)|den(y|ied))$/.test(o)&&n;case d.number:var c="".concat(n).split("\n").join("").trim().toLowerCase();return/^(\d*|\d+.\d*|\d*.\d+)$/.test(c)?parseFloat(c):n;case d.text:return"".concat(n).split("\n").join(" ");case d.richtext:return this.plaintextToRichtext(n,!0);default:return n}case d.richtext:switch(e.type){case d.boolean:var l=this.richtextToPaintext(n).trim().toLowerCase();return/^(\d*|\d+.\d*|\d*.\d+)$/.test(l)?parseFloat(l)>0:!!/^(true|on|activ(ated|e)|enable(d?)|allow(e|ed))$/.test(l)||!/^(off|false|inactive|deactivated|disable(d?)|den(y|ied))$/.test(l)&&n;case d.number:var f=this.richtextToPaintext(n).trim().toLowerCase();return/^(\d*|\d+.\d*|\d*.\d+)$/.test(f)?parseFloat(f):n;case d.text:return this.richtextToPaintext(n).trim().toLowerCase();case d.textarea:return this.richtextToPaintext(n,!0);default:return n}default:return n}},richtextToPaintext:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function t(e){if(null==e)return[""];if(e.type===f.Text)return[e.text||""];var n,r=[],o=x(e.content||[]);try{for(o.s();!(n=o.n()).done;){var c=n.value;r.push.apply(r,l(t(c)))}}catch(t){o.e(t)}finally{o.f()}return r};return n(t).join(e?"\n":"")},plaintextToRichtext:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new Array,o=n?t.split("\n"):[t],c=x(o);try{for(c.s();!(e=c.n()).done;){var text=e.value;r.push({type:f.Paragraph,content:[{type:f.Text,text:text}]})}}catch(t){c.e(t)}finally{c.f()}return{type:f.Document,content:r}}})},O=j,k=(n(278),n(59)),component=Object(k.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.story?n("div",{staticClass:"content"},[t.requireRefresh?n("div",[n("p",{staticStyle:{"text-align":"center"}},[n("SbIcon",{attrs:{name:"caution-pictogram",size:"large"}})],1),t._v(" "),t._m(0)]):n("div",[n("SbModal",{staticStyle:{"padding-left":"10px !important","padding-right":"10px"},attrs:{"is-open":t.showModal},on:{hide:function(e){t.showModal=!1}}},[n("SbModalContent",[n("p",{staticStyle:{"text-align":"center"}},[n("SbIcon",{attrs:{name:"caution-pictogram",size:"x-large"}})],1),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Attention")])]),t._v(" "),n("p",{staticStyle:{"text-align":"justify"}},[t._v("Changing the content type can result in lose of data. Do you want to proceed?")])]),t._v(" "),n("SbModalFooter",{staticStyle:{"min-height":"40px"}},[n("SbButton",{attrs:{size:"small",label:"Cancel",variant:"ghost"},on:{click:function(e){t.showModal=!1}}}),t._v(" "),n("SbButton",{attrs:{size:"small",label:"Proceed",variant:"primary"},on:{click:function(e){t.showModal=!1,t.changeContentType()}}})],1)],1),t._v(" "),n("SbFormItem",{attrs:{label:"From"}},[n("SbTextField",{attrs:{value:t.sourceComponent.display_name||t.sourceComponent.name,readonly:""}})],1),t._v(" "),n("SbFormItem",{attrs:{label:"To"}},[n("SbSelect",{attrs:{options:t.components,label:"","item-label":"display_name","item-value":"name",filterable:""},model:{value:t.targetComponent,callback:function(e){t.targetComponent=e},expression:"targetComponent"}})],1),t._v(" "),n("SbButton",{attrs:{"is-full-width":"",isDisabled:!t.targetComponent||t.targetComponent===t.story.content.component,icon:"content",label:"Change type",size:"small"},on:{click:function(e){t.showModal=!0}}})],1)]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("Page realod required to display the updated story content type.")])])}],!1,null,"e4ba74ac",null);e.default=component.exports}}]);