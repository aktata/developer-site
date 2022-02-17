"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[5686],{3905:function(t,e,r){r.d(e,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},f=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,f=o(t,["components","mdxType","originalType","parentName"]),c=d(r),m=a,u=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return r?n.createElement(u,l(l({ref:e},f),{},{components:r})):n.createElement(u,l({ref:e},f))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},41481:function(t,e){var r=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}return r(t,[{key:"on",value:function(t,e){this.subscriptions[t]=this.subscriptions[t]||[],this.subscriptions[t].push(e)}},{key:"off",value:function(t,e){if(this.subscriptions[t]){var r=this.subscriptions[t].findIndex((function(t){return t===e}));this.subscriptions[t].splice(r,1)}}},{key:"handleMsg",value:function(t){t.data&&t.data.type&&(this.subscriptions[t.data.type]||[]).forEach((function(e){e(t.data,t.origin,t.source)}))}},{key:"destroy",value:function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}]),t}(),a=n;e.Z=a;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"Receiver","src/recevier.js"),__REACT_HOT_LOADER__.register(a,"default","src/recevier.js"))},72181:function(t,e,r){r.d(e,{Z:function(){return p}});var n=r(75068),a=r(67294),i=r(45697),l=r.n(i),o=r(41481),p=function(t){function e(e){var r;return(r=t.call(this,e)||this).createRecevier=function(){r.destroyRecevier(),r.recevier=new o.Z,r.recevier.on("updateHeight",(function(t,e,n){r.iframe&&n===r.iframe.contentWindow&&(r.container.style.height=(t.msg||0)+"px",r.props.onUpdateHeight(t.msg||"#"))}))},r.destroyRecevier=function(){r.recevier&&(r.recevier.destroy(),r.recevier=null)},r.container=null,r.iframe=null,r}(0,n.Z)(e,t);var r=e.prototype;return r.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},r.componentDidUpdate=function(t){var e=t.url,r=t.disableHeightSync;t.style;e.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),r!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},r.componentWillUnmount=function(){this.destroyRecevier()},r.render=function(){var t=this,e=this.props,r=e.className,n=e.id,i=e.style,l=e.url;return l?a.createElement("div",{className:"bg-iframe "+r,id:n,style:Object.assign({height:800,width:"100%"},i),ref:function(e){t.container=e}},a.createElement("iframe",{src:l,style:{border:"none",width:"100%",height:"100%"},ref:function(e){t.iframe=e}})):a.createElement("div",{className:"bg-iframe empty"},"Iframe")},e}(a.PureComponent);p.displayName="bg-iframe",p.propTypes={className:l().string,disableHeightSync:l().bool,id:l().string,onUpdateHeight:l().func,style:l().object,url:l().string.isRequired},p.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},34601:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return s},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=r(72181),o=["components"],p={title:"\u5355\u9009",order:2},d="\u5355\u9009",f={unversionedId:"components/form/radio",id:"components/form/radio",title:"\u5355\u9009",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/radio.mdx",sourceDirName:"components/form",slug:"/components/form/radio",permalink:"/developer-site/docs/components/form/radio",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/radio.mdx",tags:[],version:"current",frontMatter:{title:"\u5355\u9009",order:2},sidebar:"components",previous:{title:"\u6570\u5b57\u8f93\u5165\u6846",permalink:"/developer-site/docs/components/form/number"},next:{title:"\u4e0b\u62c9\u9009\u62e9",permalink:"/developer-site/docs/components/form/select"}},s=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],c={toc:s};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5355\u9009"},"\u5355\u9009"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(l.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/radio-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027code"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u793a\u4f8b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u52a8\u6001\u5c5e\u6027"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6807\u9898"),(0,i.kt)("td",{parentName:"tr",align:"left"},"label"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},'"\u6807\u9898"'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u503c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"fieldData"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{dataType:"CHANGED", value:"moon"}'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6807\u9898\u4f4d\u7f6e"),(0,i.kt)("td",{parentName:"tr",align:"left"},"labelAlign"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u201cleft\u201d"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u9009\u503c\uff1a\u201cleft\u201d,\u201dtop\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6807\u9898\u5bbd\u5ea6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"labelColSpan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6807\u9898\u504f\u79fb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"labelColOffset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5bb9\u5bbd\u5ea6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"wrapperColSpan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5bb9\u504f\u79fb"),(0,i.kt)("td",{parentName:"tr",align:"left"},"wrapperColOffset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u63cf\u8ff0\u4fe1\u606f"),(0,i.kt)("td",{parentName:"tr",align:"left"},"tips"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},'"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f"'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5c3a\u5bf8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"size"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u201csmall\u201d"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},'\u53ef\u9009\u503c\uff1a\u201csmall\u201d,\u201dmedium\u201d,"large"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u72b6\u6001"),(0,i.kt)("td",{parentName:"tr",align:"left"},"behavior"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},'{fieldBehavior: "NORMAL"}'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL","DISABLED","READONLY","HIDDEN"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6821\u9a8c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"validation"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,i.kt)("td",{parentName:"tr",align:"left"},'[{type:"required"}]'),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u6307\u5b9a\u9009\u9879", param: "function validateRule(value) { return value === \'test\' }"}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"function( {value} ){ console.log(value); }"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);