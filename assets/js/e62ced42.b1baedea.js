"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[3045],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41481:function(t,e){var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}return n(t,[{key:"on",value:function(t,e){this.subscriptions[t]=this.subscriptions[t]||[],this.subscriptions[t].push(e)}},{key:"off",value:function(t,e){if(this.subscriptions[t]){var n=this.subscriptions[t].findIndex((function(t){return t===e}));this.subscriptions[t].splice(n,1)}}},{key:"handleMsg",value:function(t){t.data&&t.data.type&&(this.subscriptions[t.data.type]||[]).forEach((function(e){e(t.data,t.origin,t.source)}))}},{key:"destroy",value:function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}]),t}(),a=r;e.Z=a;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"Receiver","src/recevier.js"),__REACT_HOT_LOADER__.register(a,"default","src/recevier.js"))},72181:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(75068),a=n(67294),i=n(45697),o=n.n(i),l=n(41481),p=function(t){function e(e){var n;return(n=t.call(this,e)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new l.Z,n.recevier.on("updateHeight",(function(t,e,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(t.msg||0)+"px",n.props.onUpdateHeight(t.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(t){var e=t.url,n=t.disableHeightSync;t.style;e.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),n!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var t=this,e=this.props,n=e.className,r=e.id,i=e.style,o=e.url;return o?a.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:800,width:"100%"},i),ref:function(e){t.container=e}},a.createElement("iframe",{src:o,style:{border:"none",width:"100%",height:"100%"},ref:function(e){t.iframe=e}})):a.createElement("div",{className:"bg-iframe empty"},"Iframe")},e}(a.PureComponent);p.displayName="bg-iframe",p.propTypes={className:o().string,disableHeightSync:o().bool,id:o().string,onUpdateHeight:o().func,style:o().object,url:o().string.isRequired},p.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},15303:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(72181),l=["components"],p={title:"\u83dc\u5355",order:11},c="\u83dc\u5355",d={unversionedId:"components/advanced/menu",id:"components/advanced/menu",title:"\u83dc\u5355",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/advanced/menu.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/menu",permalink:"/developer-site/docs/components/advanced/menu",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/menu.mdx",tags:[],version:"current",frontMatter:{title:"\u83dc\u5355",order:11},sidebar:"components",previous:{title:"\u6811\u5f62\u63a7\u4ef6",permalink:"/developer-site/docs/components/advanced/tree"},next:{title:"\u641c\u7d22",permalink:"/developer-site/docs/components/advanced/search"}},s=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:s};function u(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u83dc\u5355"},"\u83dc\u5355"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(o.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/menu-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"onItemClick"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u70b9\u51fb\u83dc\u5355\u9879\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570  ",(0,i.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),": Function(key: String, item: Object, event: Object) => void ",(0,i.kt)("strong",{parentName:"td"},"\u53c2\u6570"),": ",(0,i.kt)("em",{parentName:"td"},"key"),": {String} \u70b9\u51fb\u7684\u83dc\u5355\u9879\u7684 key \u503c ",(0,i.kt)("em",{parentName:"td"},"item"),": {Object} \u70b9\u51fb\u7684\u83dc\u5355\u9879\u5bf9\u8c61 ",(0,i.kt)("em",{parentName:"td"},"event"),": {Object} \u70b9\u51fb\u7684\u4e8b\u4ef6\u5bf9\u8c61"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"defaultOpenKeys"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u521d\u59cb\u6253\u5f00\u7684\u5b50\u83dc\u5355\u7684 key \u503c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String/Array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"onOpen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6253\u5f00\u6216\u5173\u95ed\u5b50\u83dc\u5355\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570  ",(0,i.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),": Function(key: String, extra: Object) => void ",(0,i.kt)("strong",{parentName:"td"},"\u53c2\u6570"),": ",(0,i.kt)("em",{parentName:"td"},"key"),": {String} \u6253\u5f00\u7684\u6240\u6709\u5b50\u83dc\u5355\u7684 key \u503c ",(0,i.kt)("em",{parentName:"td"},"extra"),": {Object} \u989d\u5916\u53c2\u6570 ",(0,i.kt)("em",{parentName:"td"},"extra.key"),": {String} \u5f53\u524d\u64cd\u4f5c\u5b50\u83dc\u5355\u7684 key \u503c ",(0,i.kt)("em",{parentName:"td"},"extra.open"),": {Boolean} \u662f\u5426\u662f\u6253\u5f00"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b50\u83dc\u5355\u6253\u5f00\u7684\u6a21\u5f0f  ",(0,i.kt)("strong",{parentName:"td"},"\u53ef\u9009\u503c"),": 'inline', 'popup'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'inline'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"triggerType"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5b50\u83dc\u5355\u6253\u5f00\u7684\u89e6\u53d1\u884c\u4e3a  ",(0,i.kt)("strong",{parentName:"td"},"\u53ef\u9009\u503c"),": 'click', 'hover'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'click'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openMode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5c55\u5f00\u5185\u8fde\u5b50\u83dc\u5355\u7684\u6a21\u5f0f\uff0c\u540c\u65f6\u53ef\u4ee5\u5c55\u5f00\u4e00\u4e2a\u5b50\u83dc\u5355\u8fd8\u662f\u591a\u4e2a\u5b50\u83dc\u5355\uff0c\u8be5\u5c5e\u6027\u4ec5\u5728 mode \u4e3a inline \u65f6\u751f\u6548  ",(0,i.kt)("strong",{parentName:"td"},"\u53ef\u9009\u503c"),": 'single', 'multiple'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'multiple'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"defaultSelectedKeys"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u521d\u59cb\u9009\u4e2d\u83dc\u5355\u9879\u7684 key \u503c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"String/Array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"onSelect"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9009\u4e2d\u6216\u53d6\u6d88\u9009\u4e2d\u83dc\u5355\u9879\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570  ",(0,i.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),": Function(selectedKeys: Array, item: Object, extra: Object) => void ",(0,i.kt)("strong",{parentName:"td"},"\u53c2\u6570"),": ",(0,i.kt)("em",{parentName:"td"},"selectedKeys"),": {Array} \u9009\u4e2d\u7684\u6240\u6709\u83dc\u5355\u9879\u7684\u503c ",(0,i.kt)("em",{parentName:"td"},"item"),": {Object} \u9009\u4e2d\u6216\u53d6\u6d88\u9009\u4e2d\u7684\u83dc\u5355\u9879 ",(0,i.kt)("em",{parentName:"td"},"extra"),": {Object} \u989d\u5916\u53c2\u6570 ",(0,i.kt)("em",{parentName:"td"},"extra.select"),": {Boolean} \u662f\u5426\u662f\u9009\u4e2d ",(0,i.kt)("em",{parentName:"td"},"extra.key"),": {Array} \u83dc\u5355\u9879\u7684 key ",(0,i.kt)("em",{parentName:"td"},"extra.label"),": {Object} \u83dc\u5355\u9879\u7684\u6587\u672c ",(0,i.kt)("em",{parentName:"td"},"extra.keyPath"),": {Array} \u83dc\u5355\u9879 key \u7684\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => {}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selectMode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9009\u4e2d\u6a21\u5f0f\uff0c\u5355\u9009\u8fd8\u662f\u591a\u9009\uff0c\u9ed8\u8ba4\u65e0\u503c\uff0c\u4e0d\u53ef\u9009  ",(0,i.kt)("strong",{parentName:"td"},"\u53ef\u9009\u503c"),": 'single', 'multiple'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"direction"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u83dc\u5355\u7b2c\u4e00\u5c42\u5c55\u793a\u65b9\u5411  ",(0,i.kt)("strong",{parentName:"td"},"\u53ef\u9009\u503c"),": 'ver', 'hoz'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enum"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'ver'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"header"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u83dc\u5355\u5934\u90e8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"footer"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u83dc\u5355\u5c3e\u90e8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"autoFocus"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u81ea\u52a8\u83b7\u5f97\u7126\u70b9"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);