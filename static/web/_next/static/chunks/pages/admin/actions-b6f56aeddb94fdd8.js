(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5685],{54005:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/actions",function(){return n(91257)}])},49947:function(e,t,n){"use strict";var l=n(82215),r=n(63085),a=l.ZP;a.Header=l.h4,a.Footer=l.$_,a.Content=l.VY,a.Sider=r.Z,a._InternalSiderContext=r.D,t.default=a},91257:function(e,t,n){"use strict";n.r(t);var l=n(85893),r=n(47271),a=n(24716),o=n(90163),i=n(35386),u=n(43795),c=n(43883),s=n(96652),d=n(90622),h=n(43796),p=n(95089),x=n(58909),f=n(82261),m=n(5152),j=n.n(m),y=n(67294),v=n(65326),g=n(53068),b=n(70329),k=n(84443),w=n(94956),C=n(695);let{Title:S,Paragraph:I}=r.default,_=j()(()=>Promise.all([n.e(7298),n.e(7618)]).then(n.t.bind(n,7618,23)),{loadableGenerated:{webpack:()=>[7618]},ssr:!1}),E=j()(()=>Promise.all([n.e(7298),n.e(1460)]).then(n.t.bind(n,51460,23)),{loadableGenerated:{webpack:()=>[51460]},ssr:!1}),T=e=>{let{onOk:t,onCancel:n,open:r,action:s}=e,[d,h]=(0,y.useState)("url"),[m,j]=(0,y.useState)(""),[v,g]=(0,y.useState)(""),[b,k]=(0,y.useState)(""),[C,S]=(0,y.useState)(""),[I,_]=(0,y.useState)(""),[E,T]=(0,y.useState)(""),[N,O]=(0,y.useState)(!1);(0,y.useEffect)(()=>{var e;h(((null==s?void 0:null===(e=s.html)||void 0===e?void 0:e.length)||0)>0?"html":"url"),j((null==s?void 0:s.url)||""),g((null==s?void 0:s.html)||""),k((null==s?void 0:s.title)||""),S((null==s?void 0:s.description)||""),_((null==s?void 0:s.icon)||""),T((null==s?void 0:s.color)||""),O((null==s?void 0:s.openExternally)||!1)},[s]);let L={disabled:!("html"===d?""!==v&&""!==b:(0,w.jv)(m,["https:"])&&""!==b)};return(0,l.jsx)(a.default,{destroyOnClose:!0,title:null==s?"Create New Action":"Edit Action",open:r,onOk:function(){t(s,e.index,"html"===d?"":m,"html"===d?v:"",b,C,I,E,N),j(""),g(""),k(""),S(""),_(""),T(""),O(!1)},onCancel:n,okButtonProps:L,children:(0,l.jsxs)(o.default,{initialValues:s,children:["Add the URL for the external action you want to present."," ",(0,l.jsx)("strong",{children:"Only HTTPS URLs and embeds are supported."}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"https://owncast.online/thirdparty/actions/",target:"_blank",rel:"noopener noreferrer",children:"Read more about external actions."})}),(0,l.jsx)(o.default.Item,{children:(0,l.jsx)(i.default,{value:d,onChange:h,placeholder:"Select an action type",options:[{label:"Link or embed an URL",value:"url"},{label:"Custom HTML",value:"html"}]})}),"html"===d?(0,l.jsx)(o.default.Item,{name:"html",children:(0,l.jsx)(p.ZP,{value:v,placeholder:"HTML embed code (required)",theme:x.FZ,height:"200px",extensions:[(0,f.html)()],onChange:e=>{g(e)}})}):(0,l.jsx)(o.default.Item,{name:"url",children:(0,l.jsx)(u.default,{required:!0,placeholder:"https://myserver.com/action (required)",onChange:e=>j(e.currentTarget.value.trim()),type:"url",pattern:w.ax})}),(0,l.jsx)(o.default.Item,{name:"title",children:(0,l.jsx)(u.default,{value:b,required:!0,placeholder:"Your action title (required)",onChange:e=>k(e.currentTarget.value)})}),(0,l.jsx)(o.default.Item,{name:"description",children:(0,l.jsx)(u.default,{value:C,placeholder:"Optional description",onChange:e=>S(e.currentTarget.value)})}),(0,l.jsx)(o.default.Item,{name:"icon",children:(0,l.jsx)(u.default,{value:I,placeholder:"https://myserver.com/action/icon.png (optional)",onChange:e=>_(e.currentTarget.value)})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(o.default.Item,{name:"color",style:{marginBottom:"0px"},children:(0,l.jsx)(u.default,{type:"color",value:E,onChange:e=>T(e.currentTarget.value)})}),"Optional background color of the action button."]}),"html"===d?null:(0,l.jsx)(o.default.Item,{name:"openExternally",children:(0,l.jsx)(c.Z,{checked:N,defaultChecked:N,onChange:e=>{O(e.target.checked)},children:"Open in a new tab instead of within your page."})})]})})},N=()=>{let{serverConfig:e,setFieldInConfigState:t}=(0,y.useContext)(k.a)||{},{externalActions:n}=e,[r,a]=(0,y.useState)(null),[o,i]=(0,y.useState)(!1),[u,c]=(0,y.useState)(null),[p,x]=(0,y.useState)(null),[f,m]=(0,y.useState)(-1),j=()=>{c(null),clearTimeout(null)};async function w(e){await (0,g.Si)({apiPath:g.os,data:{value:e},onSuccess:()=>{t({fieldName:"externalActions",value:e,path:""}),c((0,b.kg)(b.zv,"Updated.")),setTimeout(j,g.sI)},onError:e=>{console.log(e),c((0,b.kg)(b.Un,e)),setTimeout(j,g.sI)}})}async function C(e){let t=[...r];t.splice(e,1);try{a(t),w(t)}catch(e){console.error(e)}}async function N(e,t,n,l,o,i,u,c,s){try{let e=[...r],d={url:n,html:l,title:o,description:i,icon:u,color:c,openExternally:s};t>=0?e[t]=d:e.push(d),a(e),await w(e)}catch(e){console.error(e)}}async function O(e,t){m(t),x(e),i(!0)}(0,y.useEffect)(()=>{a(n||[])},[n]);let L=[{title:"",key:"delete-edit",render:(e,t,n)=>(0,l.jsxs)(s.Z,{size:"middle",children:[(0,l.jsx)(d.Z,{onClick:()=>C(n),icon:(0,l.jsx)(_,{})}),(0,l.jsx)(d.Z,{onClick:()=>O(t,n),icon:(0,l.jsx)(E,{})})]})},{title:"Name",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"URL / Embed",key:"url",dataIndex:"url",render:(e,t)=>t.html?"HTML embed":t.url},{title:"Icon",dataIndex:"icon",key:"icon",render:e=>e?(0,l.jsx)("img",{style:{width:"2vw"},src:e,alt:""}):null},{title:"Color",dataIndex:"color",key:"color",render:e=>e?(0,l.jsx)("div",{style:{backgroundColor:e,height:"30px"},children:e}):null},{title:"Opens",key:"openExternally",dataIndex:"openExternally",render:(e,t)=>!e||t.html?"In the same tab":"In a new tab"}];return(0,l.jsxs)("div",{children:[(0,l.jsx)(S,{children:"External Actions"}),(0,l.jsx)(I,{children:"External action URLs are 3rd party UI you can display, embedded, into your Owncast page when a user clicks on a button to launch your action."}),(0,l.jsxs)(I,{children:["Read more about how to use actions, with examples, at"," ",(0,l.jsx)("a",{href:"https://owncast.online/thirdparty/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,l.jsx)(h.Z,{rowKey:e=>"".concat(e.title,"-").concat(e.url),columns:L,dataSource:r,pagination:!1}),(0,l.jsx)("br",{}),(0,l.jsx)(d.Z,{type:"primary",onClick:()=>{x(null),m(-1),i(!0)},children:"Create New Action"}),(0,l.jsx)(v.E,{status:u}),(0,l.jsx)(T,{action:p,index:f,open:o,onOk:(e,t,n,l,r,a,o,u,c)=>{i(!1),N(e,t,n,l,r,a,o,u,c),x(null),m(-1)},onCancel:()=>{i(!1)}})]})};N.getLayout=function(e){return(0,l.jsx)(C.l,{page:e})},t.default=N},11163:function(e,t,n){e.exports=n(73035)},88370:function(e,t,n){"use strict";function l(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return 0===n?0:n}}n.d(t,{u:function(){return l}})},87691:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});var l=n(32841);function r(e,t){return+(0,l.Q)(e)-+(0,l.Q)(t)}},20209:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var l=n(88370),r=n(87691);function a(e,t,n){let a=(0,r._)(e,t)/1e3;return(0,l.u)(n?.roundingMethod)(a)}},32841:function(e,t,n){"use strict";function l(e){let t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):new Date("number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?e:NaN)}n.d(t,{Q:function(){return l}})}},function(e){e.O(0,[5762,6410,8768,947,7406,4716,2862,7271,9083,811,5386,9974,8625,3796,9256,695,2888,9774,179],function(){return e(e.s=54005)}),_N_E=e.O()}]);