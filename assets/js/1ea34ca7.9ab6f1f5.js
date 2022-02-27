"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[9039],{94579:function(e,t,i){var n=i(97218),r=i(59301),o=(i(94648),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(n.Z,{className:"attr-table",dataSource:e.dataSource,columns:o,pagination:!1})}},50199:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(44117),r=i(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),s=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new o,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight&&i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,o=t.style,s=t.url;return s?r.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:s,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);s.displayName="bg-iframe"},10595:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=i(21810),r=i(86919),o=(i(59301),i(99278)),s=i(50199),a=i(94579),c=["components"],d={title:"\u94fe\u63a5",order:5},l="\u94fe\u63a5",p={unversionedId:"components/basic/link",id:"components/basic/link",title:"\u94fe\u63a5",description:"\u8df3\u8f6c\u8d85\u94fe\u63a5\uff0c\u7528\u4e8e\u6253\u5f00\u65b0\u7684\u7a97\u53e3\u3002",source:"@site/docs/components/basic/link.mdx",sourceDirName:"components/basic",slug:"/components/basic/link",permalink:"/developer-site/docs/components/basic/link",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/basic/link.mdx",tags:[],version:"current",frontMatter:{title:"\u94fe\u63a5",order:5},sidebar:"components",previous:{title:"\u56fe\u7247",permalink:"/developer-site/docs/components/basic/image"},next:{title:"\u94fe\u63a5\u5757",permalink:"/developer-site/docs/components/basic/linkBlock"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],h={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),(0,o.kt)("p",null,"\u8df3\u8f6c\u8d85\u94fe\u63a5\uff0c\u7528\u4e8e\u6253\u5f00\u65b0\u7684\u7a97\u53e3\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5207\u6362\u8bbf\u95ee\u5f53\u524d\u5e94\u7528\u7684\u5176\u4ed6\u9875\u9762\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u8df3\u8f6c\u5230\u5916\u90e8\u9875\u9762\uff1b")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(s.Z,{url:"https://www.aliwork.com/developer/link-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(a.Z,{dataSource:[{attr:"\u5185\u5bb9",code:"content",type:"String",demo:"\u56fe\u7247\u8d44\u6e90\u5730\u5740",dafault:"",desc:""},{attr:"\u5355\u884c\u622a\u65ad",code:"textOverflow",type:"boolean",demo:"false",dafault:"",desc:""},{attr:"\u94fe\u63a5\u7c7b\u578b",code:"type",type:"String",demo:"",dafault:"",desc:""},{attr:"\u94fe\u63a5\u5730\u5740",code:"url",type:"String",demo:"",dafault:"",desc:""},{attr:"\u65b0\u5f00\u9875\u9762",code:"isBlank",type:"boolean",demo:"false",dafault:"",desc:""},{attr:"\u643a\u5e26\u53c2\u6570",code:"params",type:"object",demo:"false",dafault:"",desc:"url \u67e5\u8be2\u53c2\u6570"}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);