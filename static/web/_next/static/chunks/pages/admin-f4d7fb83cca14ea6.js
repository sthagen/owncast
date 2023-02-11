(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(97685),r=n(67294);function s(){var e=r.useReducer(function(e){return e+1},0);return(0,a.Z)(e,2)[1]}},54907:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var a=n(87462),r=n(4942),s=n(18073),l=n(94184),i=n.n(l),o=n(74902),c=n(15671),d=n(43144),u=n(60136),m=n(33643),v=n(71002),p=n(50344),f=n(67294),h=n(96774),x=n.n(h),Z=n(45987),y=n(62874),g=n(97685),w=f.forwardRef(function(e,t){var n,a=e.prefixCls,s=e.forceRender,l=e.className,o=e.style,c=e.children,d=e.isActive,u=e.role,m=f.useState(d||s),v=(0,g.Z)(m,2),p=v[0],h=v[1];return(f.useEffect(function(){(s||d)&&h(!0)},[s,d]),p)?f.createElement("div",{ref:t,className:i()("".concat(a,"-content"),(n={},(0,r.Z)(n,"".concat(a,"-content-active"),d),(0,r.Z)(n,"".concat(a,"-content-inactive"),!d),n),l),style:o,role:u},f.createElement("div",{className:"".concat(a,"-content-box")},c)):null});w.displayName="PanelContent";var b=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],j=function(e){(0,u.Z)(n,e);var t=(0,m.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onItemClick=function(){var t=e.props,n=t.onItemClick,a=t.panelKey;"function"==typeof n&&n(a)},e.handleKeyPress=function(t){("Enter"===t.key||13===t.keyCode||13===t.which)&&e.onItemClick()},e.renderIcon=function(){var t=e.props,n=t.showArrow,a=t.expandIcon,r=t.prefixCls,s=t.collapsible;if(!n)return null;var l="function"==typeof a?a(e.props):f.createElement("i",{className:"arrow"});return l&&f.createElement("div",{className:"".concat(r,"-expand-icon"),onClick:"header"===s||"icon"===s?e.onItemClick:null},l)},e.renderTitle=function(){var t=e.props,n=t.header,a=t.prefixCls,r=t.collapsible;return f.createElement("span",{className:"".concat(a,"-header-text"),onClick:"header"===r?e.onItemClick:null},n)},e}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!x()(this.props,e)}},{key:"render",value:function(){var e,t,n=this.props,s=n.className,l=n.id,o=n.style,c=n.prefixCls,d=n.headerClass,u=n.children,m=n.isActive,v=n.destroyInactivePanel,p=n.accordion,h=n.forceRender,x=n.openMotion,g=n.extra,j=n.collapsible,C=(0,Z.Z)(n,b),N="disabled"===j,k="header"===j,E="icon"===j,P=i()((e={},(0,r.Z)(e,"".concat(c,"-item"),!0),(0,r.Z)(e,"".concat(c,"-item-active"),m),(0,r.Z)(e,"".concat(c,"-item-disabled"),N),e),s),I={className:i()("".concat(c,"-header"),(t={},(0,r.Z)(t,d,d),(0,r.Z)(t,"".concat(c,"-header-collapsible-only"),k),(0,r.Z)(t,"".concat(c,"-icon-collapsible-only"),E),t)),"aria-expanded":m,"aria-disabled":N,onKeyPress:this.handleKeyPress};return k||E||(I.onClick=this.onItemClick,I.role=p?"tab":"button",I.tabIndex=N?-1:0),delete C.header,delete C.panelKey,delete C.onItemClick,delete C.showArrow,delete C.expandIcon,f.createElement("div",(0,a.Z)({},C,{className:P,style:o,id:l}),f.createElement("div",I,this.renderIcon(),this.renderTitle(),null!=g&&"boolean"!=typeof g&&f.createElement("div",{className:"".concat(c,"-extra")},g)),f.createElement(y.Z,(0,a.Z)({visible:m,leavedClassName:"".concat(c,"-content-hidden")},x,{forceRender:h,removeOnLeave:v}),function(e,t){var n=e.className,a=e.style;return f.createElement(w,{ref:t,prefixCls:c,className:n,style:a,isActive:m,forceRender:h,role:p?"tabpanel":null},u)}))}}]),n}(f.Component);function C(e){var t=e;if(!Array.isArray(t)){var n=(0,v.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map(function(e){return String(e)})}j.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var N=function(e){(0,u.Z)(n,e);var t=(0,m.Z)(n);function n(e){(0,c.Z)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,o.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,r=a.props,s=r.prefixCls,l=r.openMotion,i=r.accordion,o=r.destroyInactivePanel,c=r.expandIcon,d=r.collapsible,u=e.key||String(t),m=e.props,v=m.header,p=m.headerClass,h=m.destroyInactivePanel,x=m.collapsible,Z=!1;Z=i?n[0]===u:n.indexOf(u)>-1;var y=null!=x?x:d,g={key:u,panelKey:u,header:v,headerClass:p,isActive:Z,prefixCls:s,destroyInactivePanel:null!=h?h:o,openMotion:l,accordion:i,children:e.props.children,onItemClick:"disabled"===y?null:a.onClickItem,expandIcon:c,collapsible:y};return"string"==typeof e.type?e:(Object.keys(g).forEach(function(e){void 0===g[e]&&delete g[e]}),f.cloneElement(e,g))},a.getItems=function(){var e=a.props.children;return(0,p.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var a,r=e.activeKey,s=e.defaultActiveKey;return"activeKey"in e&&(s=r),a.state={activeKey:C(s)},a}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!x()(this.props,e)||!x()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,s=t.style,l=t.accordion,o=i()((e={},(0,r.Z)(e,n,!0),(0,r.Z)(e,a,!!a),e));return f.createElement("div",{className:o,style:s,role:l?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=C(e.activeKey)),t}}]),n}(f.Component);N.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},N.Panel=j,N.Panel;var k=n(98423),E=n(53124),P=n(33603),I=n(96159),S=function(e){var t,n,l=f.useContext(E.E_),o=l.getPrefixCls,c=l.direction,d=e.prefixCls,u=e.className,m=e.bordered,v=e.ghost,h=e.expandIconPosition,x=void 0===h?"start":h,Z=o("collapse",d),y=f.useMemo(function(){return"left"===x?"start":"right"===x?"end":x},[x]),g=i()("".concat(Z,"-icon-position-").concat(y),(n={},(0,r.Z)(n,"".concat(Z,"-borderless"),!(void 0===m||m)),(0,r.Z)(n,"".concat(Z,"-rtl"),"rtl"===c),(0,r.Z)(n,"".concat(Z,"-ghost"),!!v),n),void 0===u?"":u),w=(0,a.Z)((0,a.Z)({},P.ZP),{motionAppear:!1,leavedClassName:"".concat(Z,"-content-hidden")});return f.createElement(N,(0,a.Z)({openMotion:w},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):f.createElement(s.Z,{rotate:t.isActive?90:void 0});return(0,I.Tm)(a,function(){return{className:i()(a.props.className,"".concat(Z,"-arrow"))}})},prefixCls:Z,className:g}),(t=e.children,(0,p.Z)(t).map(function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var r=e.key||String(t),s=e.props,l=s.disabled,i=s.collapsible,o=(0,a.Z)((0,a.Z)({},(0,k.Z)(e.props,["disabled"])),{key:r,collapsible:null!=i?i:l?"disabled":void 0});return(0,I.Tm)(e,o)}return e})))};S.Panel=function(e){var t=f.useContext(E.E_).getPrefixCls,n=e.prefixCls,s=e.className,l=e.showArrow,o=t("collapse",n),c=i()((0,r.Z)({},"".concat(o,"-no-arrow"),!(void 0===l||l)),void 0===s?"":s);return f.createElement(N.Panel,(0,a.Z)({},e,{prefixCls:o,className:c}))};var O=S},25378:function(e,t,n){"use strict";var a=n(67294),r=n(57838),s=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,a.useRef)({}),n=(0,r.Z)();return(0,a.useEffect)(function(){var a=s.ZP.subscribe(function(a){t.current=a,e&&n()});return function(){return s.ZP.unsubscribe(a)}},[]),t.current}},97183:function(e,t,n){"use strict";var a=n(2897),r=n(7293),s=a.ZP;s.Header=a.h4,s.Footer=a.$_,s.Content=a.VY,s.Sider=r.Z,t.Z=s},26303:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(4942),r=n(87462),s=n(71002),l=n(94184),i=n.n(l),o=n(67294),c=n(53124),d=n(98423),u=function(e){var t,n,s=e.prefixCls,l=e.className,c=e.style,d=e.size,u=e.shape,m=i()((t={},(0,a.Z)(t,"".concat(s,"-lg"),"large"===d),(0,a.Z)(t,"".concat(s,"-sm"),"small"===d),t)),v=i()((n={},(0,a.Z)(n,"".concat(s,"-circle"),"circle"===u),(0,a.Z)(n,"".concat(s,"-square"),"square"===u),(0,a.Z)(n,"".concat(s,"-round"),"round"===u),n)),p=o.useMemo(function(){return"number"==typeof d?{width:d,height:d,lineHeight:"".concat(d,"px")}:{}},[d]);return o.createElement("span",{className:i()(s,m,v,l),style:(0,r.Z)((0,r.Z)({},p),c)})},m=n(1413),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},p=n(42135),f=function(e,t){return o.createElement(p.Z,(0,m.Z)((0,m.Z)({},e),{},{ref:t,icon:v}))};f.displayName="DotChartOutlined";var h=o.forwardRef(f),x=n(74902),Z=function(e){var t=function(t){var n=e.width,a=e.rows;return Array.isArray(n)?n[t]:(void 0===a?2:a)-1===t?n:void 0},n=e.prefixCls,a=e.className,r=e.style,s=e.rows,l=(0,x.Z)(Array(s)).map(function(e,n){return o.createElement("li",{key:n,style:{width:t(n)}})});return o.createElement("ul",{className:i()(n,a),style:r},l)},y=function(e){var t=e.prefixCls,n=e.className,a=e.width,s=e.style;return o.createElement("h3",{className:i()(t,n),style:(0,r.Z)({width:a},s)})};function g(e){return e&&"object"===(0,s.Z)(e)?e:{}}var w=function(e){var t=e.prefixCls,n=e.loading,s=e.className,l=e.style,d=e.children,m=e.avatar,v=void 0!==m&&m,p=e.title,f=void 0===p||p,h=e.paragraph,x=void 0===h||h,w=e.active,b=e.round,j=o.useContext(c.E_),C=j.getPrefixCls,N=j.direction,k=C("skeleton",t);if(n||!("loading"in e)){var E=!!v,P=!!f,I=!!x;if(E){var S=(0,r.Z)((0,r.Z)({prefixCls:"".concat(k,"-avatar")},P&&!I?{size:"large",shape:"square"}:{size:"large",shape:"circle"}),g(v));_=o.createElement("div",{className:"".concat(k,"-header")},o.createElement(u,(0,r.Z)({},S)))}if(P||I){if(P){var O,_,T,z,A,R=(0,r.Z)((0,r.Z)({prefixCls:"".concat(k,"-title")},!E&&I?{width:"38%"}:E&&I?{width:"50%"}:{}),g(f));z=o.createElement(y,(0,r.Z)({},R))}if(I){var K,M=(0,r.Z)((0,r.Z)({prefixCls:"".concat(k,"-paragraph")},(K={},E&&P||(K.width="61%"),!E&&P?K.rows=3:K.rows=2,K)),g(x));A=o.createElement(Z,(0,r.Z)({},M))}T=o.createElement("div",{className:"".concat(k,"-content")},z,A)}var D=i()(k,(O={},(0,a.Z)(O,"".concat(k,"-with-avatar"),E),(0,a.Z)(O,"".concat(k,"-active"),w),(0,a.Z)(O,"".concat(k,"-rtl"),"rtl"===N),(0,a.Z)(O,"".concat(k,"-round"),b),O),s);return o.createElement("div",{className:D,style:l},_,T)}return void 0!==d?d:null};w.Button=function(e){var t,n=e.prefixCls,s=e.className,l=e.active,m=e.block,v=e.size,p=(0,o.useContext(c.E_).getPrefixCls)("skeleton",n),f=(0,d.Z)(e,["prefixCls"]),h=i()(p,"".concat(p,"-element"),(t={},(0,a.Z)(t,"".concat(p,"-active"),l),(0,a.Z)(t,"".concat(p,"-block"),void 0!==m&&m),t),s);return o.createElement("div",{className:h},o.createElement(u,(0,r.Z)({prefixCls:"".concat(p,"-button"),size:void 0===v?"default":v},f)))},w.Avatar=function(e){var t=e.prefixCls,n=e.className,s=e.active,l=e.shape,m=e.size,v=(0,o.useContext(c.E_).getPrefixCls)("skeleton",t),p=(0,d.Z)(e,["prefixCls","className"]),f=i()(v,"".concat(v,"-element"),(0,a.Z)({},"".concat(v,"-active"),s),n);return o.createElement("div",{className:f},o.createElement(u,(0,r.Z)({prefixCls:"".concat(v,"-avatar"),shape:void 0===l?"circle":l,size:void 0===m?"default":m},p)))},w.Input=function(e){var t,n=e.prefixCls,s=e.className,l=e.active,m=e.block,v=e.size,p=(0,o.useContext(c.E_).getPrefixCls)("skeleton",n),f=(0,d.Z)(e,["prefixCls"]),h=i()(p,"".concat(p,"-element"),(t={},(0,a.Z)(t,"".concat(p,"-active"),l),(0,a.Z)(t,"".concat(p,"-block"),m),t),s);return o.createElement("div",{className:h},o.createElement(u,(0,r.Z)({prefixCls:"".concat(p,"-input"),size:void 0===v?"default":v},f)))},w.Image=function(e){var t=e.prefixCls,n=e.className,r=e.style,s=e.active,l=(0,o.useContext(c.E_).getPrefixCls)("skeleton",t),d=i()(l,"".concat(l,"-element"),(0,a.Z)({},"".concat(l,"-active"),s),n);return o.createElement("div",{className:d},o.createElement("div",{className:i()("".concat(l,"-image"),n),style:r},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(l,"-image-svg")},o.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(l,"-image-path")}))))},w.Node=function(e){var t=e.prefixCls,n=e.className,r=e.style,s=e.active,l=e.children,d=(0,o.useContext(c.E_).getPrefixCls)("skeleton",t),u=i()(d,"".concat(d,"-element"),(0,a.Z)({},"".concat(d,"-active"),s),n),m=null!=l?l:o.createElement(h,null);return o.createElement("div",{className:u},o.createElement("div",{className:i()("".concat(d,"-image"),n),style:r},m))};var b=w},75401:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(24262),r=n(19013),s=n(13882);function l(e){(0,s.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}function i(e,t){(0,s.Z)(2,arguments);var n=l(e),r=l(t);return Math.round((n.getTime()-(0,a.Z)(n)-(r.getTime()-(0,a.Z)(r)))/864e5)}},64830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(64180)}])},82536:function(e,t,n){"use strict";n.d(t,{o:function(){return m}});var a=n(85893);n(67294);var r=n(85818),s=n(20550),l=n(54398),i=n(53731),o=n(58091);let{Title:c}=r.Z;function d(e,t){let n="black";return"warning"===t.level?n="orange":"error"===t.level&&(n="red"),(0,a.jsx)(s.Z,{color:n,children:e})}function u(e){return(0,a.jsx)(i.Z,{children:e})}let m=e=>{let{logs:t,pageSize:n}=e;return(null==t?void 0:t.length)?(0,a.jsxs)("div",{className:"logs-section",children:[(0,a.jsx)(c,{children:"Logs"}),(0,a.jsx)(l.Z,{size:"middle",dataSource:t,columns:[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(e,t)=>0===t.level.indexOf(e),render:d},{title:"Timestamp",dataIndex:"time",key:"time",render:e=>{let t=new Date(e);return(0,o.Z)(t,"pp P")},sorter:(e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:u}],rowKey:e=>e.time,pagination:{pageSize:n||20}})]}):null}},44654:function(e,t,n){"use strict";n.d(t,{j:function(){return Z}});var a=n(85893),r=n(71230),s=n(15746),l=n(74763),i=n(85818),o=n(14670),c=n(71577),d=n(5152),u=n.n(d),m=n(41664),v=n.n(m),p=n(67294),f=n(99519);let h=u()(()=>Promise.all([n.e(2074),n.e(7996)]).then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),x=u()(()=>Promise.all([n.e(2074),n.e(7039)]).then(n.t.bind(n,67039,23)),{loadableGenerated:{webpack:()=>[67039]},ssr:!1}),Z=e=>{let{showTroubleshootButton:t}=e,n=(0,p.useContext)(f.aC),{health:d}=n;if(!d)return null;let{healthy:u,healthPercentage:m,message:Z,representation:y}=d,g="#3f8600",w="info";return m<80?(g="#cf000f",w="error"):m<30&&(g="#f0ad4e",w="error"),(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.Z,{gutter:8,children:[(0,a.jsx)(s.Z,{span:12,children:(0,a.jsx)(l.Z,{title:"Healthy Stream",value:u?"Yes":"No",valueStyle:{color:g},prefix:u?(0,a.jsx)(h,{}):(0,a.jsx)(x,{})})}),(0,a.jsx)(s.Z,{span:12,children:(0,a.jsx)(l.Z,{title:"Playback Health",value:m,valueStyle:{color:g},suffix:"%"})})]}),(0,a.jsx)(r.Z,{style:{display:y<100&&0!==y?"grid":"none"},children:(0,a.jsxs)(i.Z.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",y,"% of all known players. Other player status is unknown."]})}),(0,a.jsx)(r.Z,{gutter:16,style:{width:"100%",display:Z?"grid":"none",marginTop:"10px"},children:(0,a.jsx)(s.Z,{span:24,children:(0,a.jsx)(o.Z,{message:Z,type:w,showIcon:!0,action:t&&(0,a.jsx)(v(),{passHref:!0,href:"/stream-health",children:(0,a.jsx)(c.Z,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})};Z.defaultProps={showTroubleshootButton:!0}},64180:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var a=n(85893),r=n(67294),s=n(26303),l=n(74763),i=n(59652),o=n(71230),c=n(15746),d=n(84314),u=n(75401),m=n(58091),v=n(86559),p=n(92234),f=n(19013),h=n(24262),x=n(13882),Z=n(83946),y=n(45938),g=n(5152),w=n.n(g),b=n(99519),j=n(82536),C=n(85818),N=n(41664),k=n.n(N),E=n(50738),P=n(54907),I=n(64777);let{Panel:S}=P.Z,{Title:O,Link:_}=C.Z,T=e=>{let{title:t,url:n,content_html:r,date_published:s}=e,l=new Date(s),i=(0,m.Z)(l,"MMM dd, yyyy, HH:mm");return(0,a.jsx)("article",{children:(0,a.jsx)(P.Z,{children:(0,a.jsxs)(S,{header:t,children:[(0,a.jsxs)("p",{className:"timestamp",children:[i," (",(0,a.jsx)(_,{href:"".concat("https://owncast.online").concat(n),target:"_blank",rel:"noopener noreferrer",children:"Link"}),")"]}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]},n)})})},z=()=>{let[e,t]=(0,r.useState)([]),[n,l]=(0,r.useState)(!0),i=async()=>{l(!1);try{let e=await (0,I.kg)("https://owncast.online/news/index.json");(null==e?void 0:e.items.length)>0&&t(e.items)}catch(e){console.log("==== error",e)}};(0,r.useEffect)(()=>{i()},[]);let o=n?(0,a.jsx)(s.Z,{loading:!0,active:!0}):null,c=n||0!==e.length?null:(0,a.jsx)("div",{children:"No news."});return(0,a.jsxs)("section",{className:"news-feed form-module",children:[(0,a.jsx)(O,{level:2,children:"News & Updates from Owncast"}),o,e.map(e=>(0,r.createElement)(T,{...e,key:e.url})),c]})},{Paragraph:A,Text:R}=C.Z,{Title:K}=C.Z,{Meta:M}=i.Z,D=w()(()=>Promise.all([n.e(2074),n.e(3371)]).then(n.t.bind(n,33371,23)),{loadableGenerated:{webpack:()=>[33371]},ssr:!1}),U=w()(()=>Promise.all([n.e(2074),n.e(5308)]).then(n.t.bind(n,85308,23)),{loadableGenerated:{webpack:()=>[85308]},ssr:!1}),L=w()(()=>Promise.all([n.e(2074),n.e(856)]).then(n.t.bind(n,20856,23)),{loadableGenerated:{webpack:()=>[20856]},ssr:!1}),q=w()(()=>Promise.all([n.e(2074),n.e(9208)]).then(n.t.bind(n,99208,23)),{loadableGenerated:{webpack:()=>[99208]},ssr:!1}),B=e=>{var t,s,l;let d,{logs:u=[],config:m}=e,v=(0,r.useContext)(b.aC),{serverConfig:p}=v||{},{rtmpServerPort:f}=p,h=(null===(t=n.g.window)||void 0===t?void 0:t.location.hostname)||"";h&&f&&(d="rtmp://".concat(h.replace(/(^\w+:|^)\/\//,""),":").concat(f,"/live"));let x=[{icon:(0,a.jsx)(D,{twoToneColor:"#6f42c1"}),title:"Use your broadcasting software",content:(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how to point your existing software to your new server and start streaming your content."}),(0,a.jsxs)("div",{className:"stream-info-container",children:[(0,a.jsx)(R,{strong:!0,className:"stream-info-label",children:"Streaming URL:"}),d&&(0,a.jsx)(A,{className:"stream-info-box",copyable:!0,children:d}),(0,a.jsx)(R,{strong:!0,className:"stream-info-label",children:"Streaming Keys:"}),(0,a.jsx)(R,{strong:!0,className:"stream-info-box",children:(0,a.jsx)(k(),{href:"/admin/config/server",children:" View "})})]})]})},{icon:(0,a.jsx)(L,{twoToneColor:"#f9826c"}),title:"Embed your video onto other sites",content:(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/embed?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how you can add your Owncast stream to other sites you control."})})}];return(null==m?void 0:m.chatDisabled)||x.push({icon:(0,a.jsx)(U,{twoToneColor:"#0366d6"}),title:"Chat is disabled",content:(0,a.jsx)("span",{children:"Chat will continue to be disabled until you begin a live stream."})}),(null==m?void 0:null===(s=m.yp)||void 0===s?void 0:s.enabled)||x.push({icon:(0,a.jsx)(q,{twoToneColor:"#D18BFE"}),title:"Find an audience on the Owncast Directory",content:(0,a.jsxs)("div",{children:["List yourself in the Owncast Directory and show off your stream. Enable it in"," ",(0,a.jsx)(k(),{href:"/admin/config/general/",children:"settings."})]})}),(null==m?void 0:null===(l=m.federation)||void 0===l?void 0:l.enabled)||x.push({icon:(0,a.jsx)("img",{alt:"fediverse",width:"20px",src:"/img/fediverse-color.png"}),title:"Add your Owncast instance to the Fediverse",content:(0,a.jsxs)("div",{children:[(0,a.jsx)(k(),{href:"/admin/config-federation/",children:"Enable Owncast social"})," features to have your instance join the Fediverse, allowing people to follow, share and engage with your live stream."]})}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{children:(0,a.jsx)(c.Z,{span:12,offset:6,children:(0,a.jsxs)("div",{className:"offline-intro",children:[(0,a.jsx)("span",{className:"logo",children:(0,a.jsx)(E.C,{variant:"simple"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(K,{level:2,children:"No stream is active"}),(0,a.jsx)("p",{children:"You should start one."})]})]})})}),(0,a.jsxs)(o.Z,{gutter:[16,16],className:"offline-content",children:[(0,a.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,className:"list-section",children:x.map(e=>(0,a.jsx)(i.Z,{size:"small",bordered:!1,children:(0,a.jsx)(M,{avatar:e.icon,title:e.title,description:e.content})},e.title))}),(0,a.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,a.jsx)(z,{})})]}),(0,a.jsx)(j.o,{logs:u,pageSize:5})]})};var H=n(44654),F=n(70241),G=n(6960);let V=w()(()=>Promise.all([n.e(2074),n.e(5412)]).then(n.t.bind(n,95412,23)),{loadableGenerated:{webpack:()=>[95412]},ssr:!1}),W=w()(()=>Promise.all([n.e(2074),n.e(9095)]).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1});function Q(e){return(0,a.jsxs)("ul",{className:"statistics-list",children:[(0,a.jsxs)("li",{children:[e.videoCodec||"Unknown"," @ ",e.videoBitrate||"Unknown"," kbps"]}),(0,a.jsxs)("li",{children:[e.framerate||"Unknown"," fps"]}),(0,a.jsxs)("li",{children:[e.width," x ",e.height]})]})}function Y(){var e,t;let n=(0,r.useContext)(b.aC),{broadcaster:g,serverConfig:w}=n||{},{remoteAddr:C,streamDetails:N}=g||{},k=(null==N?void 0:N.encoder)||"Unknown encoder",[E,P]=(0,r.useState)([]),S=async()=>{try{let e=await (0,I.rQ)(I.WQ);P(e)}catch(e){console.log("==== error",e)}},O=()=>{S()};if((0,r.useEffect)(()=>{O();let e=null;return e=setInterval(O,I.NE),()=>{clearInterval(e)}},[]),(0,F.Qr)(w)||(0,F.Qr)(n))return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{active:!0}),(0,a.jsx)(s.Z,{active:!0}),(0,a.jsx)(s.Z,{active:!0})]});if(!g)return(0,a.jsx)(B,{logs:E,config:w});let _=null==n?void 0:null===(e=n.currentBroadcast)||void 0===e?void 0:null===(t=e.outputSettings)||void 0===t?void 0:t.map(e=>{let{audioPassthrough:t,videoPassthrough:n,audioBitrate:r,videoBitrate:s,framerate:i}=e,o=t?"".concat(N.audioCodec||"Unknown",", ").concat(N.audioBitrate," kbps"):"".concat(r||"Unknown"," kbps"),c=n?"".concat(N.videoBitrate||"Unknown"," kbps, ").concat(N.framerate," fps ").concat(N.width," x ").concat(N.height):"".concat(s||"Unknown"," kbps, ").concat(i," fps");return(0,a.jsxs)("div",{className:"stream-details-item-container",children:[(0,a.jsx)(l.Z,{className:"stream-details-item",title:"Outbound Video Stream",value:c}),(0,a.jsx)(l.Z,{className:"stream-details-item",title:"Outbound Audio Stream",value:o})]})}),{viewerCount:T,sessionPeakViewerCount:A}=n,R="".concat(N.audioCodec,", ").concat(N.audioBitrate||"Unknown"," kbps"),K=new Date(g.time);return(0,a.jsxs)("div",{className:"home-container",children:[(0,a.jsxs)("div",{className:"sections-container",children:[(0,a.jsx)("div",{className:"online-status-section",children:(0,a.jsxs)(i.Z,{size:"small",type:"inner",className:"online-details-card",children:[(0,a.jsxs)(o.Z,{gutter:[16,16],align:"middle",children:[(0,a.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,a.jsx)(l.Z,{title:"Stream started ".concat(function(e,t,n){(0,x.Z)(2,arguments);var a,r,s,l,i,o,c,y,g,w,b=(0,f.Z)(e),j=(0,f.Z)(t),C=(0,d.j)(),N=null!==(a=null!==(r=null==n?void 0:n.locale)&&void 0!==r?r:C.locale)&&void 0!==a?a:v.Z,k=(0,Z.Z)(null!==(s=null!==(l=null!==(i=null!==(o=null==n?void 0:n.weekStartsOn)&&void 0!==o?o:null==n?void 0:null===(c=n.locale)||void 0===c?void 0:null===(y=c.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==i?i:C.weekStartsOn)&&void 0!==l?l:null===(g=C.locale)||void 0===g?void 0:null===(w=g.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==s?s:0);if(!N.localize)throw RangeError("locale must contain localize property");if(!N.formatLong)throw RangeError("locale must contain formatLong property");if(!N.formatRelative)throw RangeError("locale must contain formatRelative property");var E=(0,u.Z)(b,j);if(isNaN(E))throw RangeError("Invalid time value");var P=(0,p.Z)(b,(0,h.Z)(b)),I=(0,p.Z)(j,(0,h.Z)(j)),S=N.formatRelative(E<-6?"other":E<-1?"lastWeek":E<0?"yesterday":E<1?"today":E<2?"tomorrow":E<7?"nextWeek":"other",P,I,{locale:N,weekStartsOn:k});return(0,m.Z)(b,S,{locale:N,weekStartsOn:k})}(K,Date.now())),value:(0,y.Z)(K),prefix:(0,a.jsx)(W,{})})}),(0,a.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,a.jsx)(l.Z,{title:"Viewers",value:T,prefix:(0,a.jsx)(V,{})})}),(0,a.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,a.jsx)(l.Z,{title:"Peak viewer count",value:A,prefix:(0,a.jsx)(V,{})})})]}),(0,a.jsx)(H.j,{})]})}),(0,a.jsxs)(o.Z,{gutter:[16,16],className:"section stream-details-section",children:[(0,a.jsxs)(c.Z,{className:"stream-details",span:12,sm:24,md:24,lg:12,children:[(0,a.jsx)(i.Z,{size:"small",title:"Outbound Stream Details",type:"inner",className:"outbound-details",children:_}),(0,a.jsxs)(i.Z,{size:"small",title:"Inbound Stream Details",type:"inner",children:[(0,a.jsx)(l.Z,{className:"stream-details-item",title:"Input",value:"".concat(k," ").concat((0,F.t5)(C))}),(0,a.jsx)(l.Z,{className:"stream-details-item",title:"Inbound Video Stream",value:N,formatter:Q}),(0,a.jsx)(l.Z,{className:"stream-details-item",title:"Inbound Audio Stream",value:R})]})]}),(0,a.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,a.jsx)(z,{})})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)(j.o,{logs:E,pageSize:5})]})}Y.getLayout=function(e){return(0,a.jsx)(G.l,{page:e})}},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)},92703:function(e,t,n){"use strict";var a=n(50414);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,l){if(l!==a){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[173,164,2744,9680,4931,5402,2231,5818,492,7524,9915,4041,3698,3013,4398,8091,6306,5938,5101,4763,9863,180,6960,9774,2888,179],function(){return e(e.s=64830)}),_N_E=e.O()}]);