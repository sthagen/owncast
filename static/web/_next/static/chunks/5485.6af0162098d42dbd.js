(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5485],{25330:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},57096:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},71961:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(79686))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},20054:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(32615))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},79686:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),l=a(n(25330)),u=a(n(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}var CheckOutlined=function(e,t){return o.createElement(u.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:l.default}))};CheckOutlined.displayName="CheckOutlined";var s=o.forwardRef(CheckOutlined);t.default=s},32615:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),l=a(n(57096)),u=a(n(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}var PlusOutlined=function(e,t){return o.createElement(u.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:l.default}))};PlusOutlined.displayName="PlusOutlined";var s=o.forwardRef(PlusOutlined);t.default=s},89552:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434)),o=r(n(38416)),l=r(n(27424)),u=r(n(94184)),s=r(n(23279)),d=r(n(18475)),c=a(n(67294)),f=n(31929),p=n(47419),h=n(66764),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};(0,h.tuple)("small","default","large");var v=null,Spin=function(e){var t=e.spinPrefixCls,n=e.spinning,a=void 0===n||n,r=e.delay,h=e.className,m=e.size,y=void 0===m?"default":m,b=e.tip,g=e.wrapperClassName,j=e.style,x=e.children,O=__rest(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),_=c.useState(function(){return a&&(!a||!r||!!isNaN(Number(r)))}),w=(0,l.default)(_,2),P=w[0],k=w[1];return c.useEffect(function(){var e=(0,s.default)(function(){k(a)},r);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[r,a]),c.createElement(f.ConfigConsumer,null,function(n){var a,r,l,s=n.direction,f=(0,u.default)(t,(l={},(0,o.default)(l,"".concat(t,"-sm"),"small"===y),(0,o.default)(l,"".concat(t,"-lg"),"large"===y),(0,o.default)(l,"".concat(t,"-spinning"),P),(0,o.default)(l,"".concat(t,"-show-text"),!!b),(0,o.default)(l,"".concat(t,"-rtl"),"rtl"===s),l),h),m=(0,d.default)(O,["indicator","prefixCls"]),_=c.createElement("div",(0,i.default)({},m,{style:j,className:f,"aria-live":"polite","aria-busy":P}),(a=e.indicator,r="".concat(t,"-dot"),null===a?null:(0,p.isValidElement)(a)?(0,p.cloneElement)(a,{className:(0,u.default)(a.props.className,r)}):(0,p.isValidElement)(v)?(0,p.cloneElement)(v,{className:(0,u.default)(v.props.className,r)}):c.createElement("span",{className:(0,u.default)(r,"".concat(t,"-dot-spin"))},c.createElement("i",{className:"".concat(t,"-dot-item")}),c.createElement("i",{className:"".concat(t,"-dot-item")}),c.createElement("i",{className:"".concat(t,"-dot-item")}),c.createElement("i",{className:"".concat(t,"-dot-item")}))),b?c.createElement("div",{className:"".concat(t,"-text")},b):null);if(void 0!==x){var w=(0,u.default)("".concat(t,"-container"),(0,o.default)({},"".concat(t,"-blur"),P));return c.createElement("div",(0,i.default)({},m,{className:(0,u.default)("".concat(t,"-nested-loading"),g)}),P&&c.createElement("div",{key:"loading"},_),c.createElement("div",{className:w,key:"container"},x))}return _})},SpinFC=function(e){var t=e.prefixCls,n=(0,c.useContext(f.ConfigContext).getPrefixCls)("spin",t),a=(0,i.default)((0,i.default)({},e),{spinPrefixCls:n});return c.createElement(Spin,(0,i.default)({},a))};SpinFC.setDefaultIndicator=function(e){v=e},t.default=SpinFC},42698:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return null}},1286:function(e,t,n){"use strict";var a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,i.default)({inkBar:!0},"object"===(0,r.default)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,i.default)((0,i.default)({},l),{motionName:(0,o.getTransitionName)(e,"switch")})),t};var r=a(n(18698)),i=a(n(10434)),o=n(53683),l={motionAppear:!1,motionEnter:!0,motionLeave:!0}},47397:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e||(0,l.default)(t).map(function(e){if(o.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,r=__rest(n,["tab"]);return(0,i.default)((0,i.default)({key:String(t)},r),{label:a})}return null}).filter(function(e){return e})};var i=r(n(10434)),o=a(n(67294)),l=r(n(45598));r(n(13594));var __rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n}},20838:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(38416)),o=r(n(10434)),l=r(n(40753)),u=r(n(26937)),s=r(n(20054)),d=r(n(94184)),c=r(n(93068)),f=a(n(67294)),p=n(31929),h=r(n(3236));r(n(13594));var v=r(n(1286)),m=r(n(47397)),y=r(n(42698)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function Tabs(e){var t,n=e.type,a=e.className,r=e.size,y=e.onEdit,b=e.hideAdd,g=e.centered,j=e.addIcon,x=e.children,O=e.items,_=e.animated,w=__rest(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),P=w.prefixCls,k=w.moreIcon,E=void 0===k?f.createElement(u.default,null):k,C=f.useContext(p.ConfigContext),M=C.getPrefixCls,N=C.direction,A=C.getPopupContainer,I=M("tabs",P);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null==y||y("add"===e?a:n,e)},removeIcon:f.createElement(l.default,null),addIcon:j||f.createElement(s.default,null),showAdd:!0!==b});var S=M(),T=(0,m.default)(O,x),F=(0,v.default)(I,_);return f.createElement(h.default.Consumer,null,function(e){var l,u=void 0!==r?r:e;return f.createElement(c.default,(0,o.default)({direction:N,getPopupContainer:A,moreTransitionName:"".concat(S,"-slide-up")},w,{items:T,className:(0,d.default)((l={},(0,i.default)(l,"".concat(I,"-").concat(u),u),(0,i.default)(l,"".concat(I,"-card"),["card","editable-card"].includes(n)),(0,i.default)(l,"".concat(I,"-editable-card"),"editable-card"===n),(0,i.default)(l,"".concat(I,"-centered"),g),l),a),editable:t,moreIcon:E,prefixCls:I,animated:F}))})}Tabs.TabPane=y.default,t.default=Tabs},89277:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434));r(n(18698));var o=a(n(67294));r(n(13594));var l=r(n(28460)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},u=o.forwardRef(function(e,t){var n=e.ellipsis,a=e.rel,r=__rest(e,["ellipsis","rel"]),u=(0,i.default)((0,i.default)({},r),{rel:void 0===a&&"_blank"===r.target?"noopener noreferrer":a});return delete u.navigate,o.createElement(l.default,(0,i.default)({},u,{ref:t,ellipsis:!!n,component:"a"}))});t.default=u},21987:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434)),o=a(n(67294)),l=r(n(28460)),u=o.forwardRef(function(e,t){return o.createElement(l.default,(0,i.default)({ref:t},e,{component:"div"}))});t.default=u},15394:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434)),o=r(n(18698)),l=r(n(18475)),u=a(n(67294));r(n(13594));var s=r(n(28460)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},d=u.forwardRef(function(e,t){var n=e.ellipsis,a=__rest(e,["ellipsis"]),r=u.useMemo(function(){return n&&"object"===(0,o.default)(n)?(0,l.default)(n,["expandable","rows"]):n},[n]);return u.createElement(s.default,(0,i.default)({ref:t},a,{ellipsis:r,component:"span"}))});t.default=d},53740:function(e,t,n){"use strict";var a=n(64836).default;t.default=void 0;var r=a(n(89277)),i=a(n(21987)),o=a(n(15394)),l=a(n(34528)),u=a(n(89652)).default;u.Text=o.default,u.Link=r.default,u.Title=l.default,u.Paragraph=i.default,t.default=u},27561:function(e,t,n){var a=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var a=n(13218),r=n(7771),i=n(14841),o=Math.max,l=Math.min;e.exports=function(e,t,n){var u,s,d,c,f,p,h=0,v=!1,m=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function invokeFunc(t){var n=u,a=s;return u=s=void 0,h=t,c=e.apply(a,n)}function shouldInvoke(e){var n=e-p,a=e-h;return void 0===p||n>=t||n<0||m&&a>=d}function timerExpired(){var e,n,a,i=r();if(shouldInvoke(i))return trailingEdge(i);f=setTimeout(timerExpired,(e=i-p,n=i-h,a=t-e,m?l(a,d-n):a))}function trailingEdge(e){return(f=void 0,y&&u)?invokeFunc(e):(u=s=void 0,c)}function debounced(){var e,n=r(),a=shouldInvoke(n);if(u=arguments,s=this,p=n,a){if(void 0===f)return h=e=p,f=setTimeout(timerExpired,t),v?invokeFunc(e):c;if(m)return clearTimeout(f),f=setTimeout(timerExpired,t),invokeFunc(p)}return void 0===f&&(f=setTimeout(timerExpired,t)),c}return t=i(t)||0,a(n)&&(v=!!n.leading,d=(m="maxWait"in n)?o(i(n.maxWait)||0,t):d,y="trailing"in n?!!n.trailing:y),debounced.cancel=function(){void 0!==f&&clearTimeout(f),h=0,u=p=s=f=void 0},debounced.flush=function(){return void 0===f?c:trailingEdge(r())},debounced}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7771:function(e,t,n){var a=n(55639);e.exports=function(){return a.Date.now()}},14841:function(e,t,n){var a=n(27561),r=n(13218),i=n(33448),o=0/0,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=u.test(e);return n||s.test(e)?d(e.slice(2),n?2:8):l.test(e)?o:+e}},36531:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthModal:function(){return AuthModal}});var a=n(85893),r=n(20838),i=n(4480),o=n(4511),l=n(4863),u=n(51024),s=n(74048),d=n(89552),c=n(68469),f=n(53740),p=n(65400),h=n(5152),v=n.n(h),m=n(67294),y=n(89105);let{Panel:b}=c.default,{Link:g}=f.default,j=v()(()=>Promise.resolve().then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),IndieAuthModal=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,o]=(0,m.useState)(null),[f,h]=(0,m.useState)(!1),[v,x]=(0,m.useState)(!1),[O,_]=(0,m.useState)(""),w=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Use your own domain to authenticate ",(0,a.jsx)("span",{children:n})," or login as a previously"," ","authenticated chat user using IndieAuth."]}),P=i;P&&P.includes("url does not support indieauth")&&(P="The provided URL is either invalid or does not support IndieAuth.");let validate=e=>{if(!(0,y.jv)(e)||!e.includes(".")){x(!1);return}x(!0)},submitButtonPressed=async()=>{if(v){h(!0);try{let e=await fetch("/api/auth/indieauth?accessToken=".concat(r),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({authHost:"https://".concat(O)})}),t=await e.json();if(t.message){o(t.message),h(!1);return}if(!t.redirect){o("Auth provider did not return a redirect URL."),h(!1);return}if(t.redirect){let{redirect:e}=t;window.location=e}}catch(e){o(e.message)}h(!1)}};return(0,a.jsx)(d.default,{spinning:f,children:(0,a.jsxs)(s.default,{direction:"vertical",children:[w,P&&(0,a.jsx)(l.default,{message:"Error",description:P,type:"error",showIcon:!0}),(0,a.jsx)("div",{children:"Your domain"}),(0,a.jsx)(u.default.Search,{addonBefore:"https://",onInput:e=>{let t=e.nativeEvent.data;if(":"===t)return;_(e.target.value);let n="https://".concat(e.target.value);validate(n)},type:"url",value:O,placeholder:"yoursite.com",status:!v&&O.length>0?"error":void 0,onSearch:submitButtonPressed,enterButton:(0,a.jsx)(p.default,{type:v?"primary":"default",disabled:!v||0===O.length,children:(0,a.jsx)(j,{})})}),(0,a.jsx)(c.default,{ghost:!0,children:(0,a.jsxs)(b,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,a.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,a.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,a.jsx)(g,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var x=n(38711),O=n.n(x);let{Panel:_}=c.default,w=v()(()=>Promise.resolve().then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),FediAuthModal=e=>{let{authenticated:t,displayName:n,accessToken:r}=e,[i,o]=(0,m.useState)(null),[f,h]=(0,m.useState)(!1),[v,b]=(0,m.useState)(!1),[g,j]=(0,m.useState)(""),[x,P]=(0,m.useState)(""),[k,E]=(0,m.useState)(!1),C=t?(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,a.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,a.jsx)("strong",{children:n}),", or login as a previously linked chat user."]}),M=i;M&&M.includes("url does not support indieauth")&&(M="The provided URL is either invalid or does not support IndieAuth.");let validate=e=>{b((0,y.ME)(e))},makeRequest=async(e,t)=>{let n=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),a=await n.json();a.message&&(o(a.message),h(!1))},submitCodePressed=async()=>{h(!0);try{await makeRequest("/api/auth/fediverse/verify?accessToken=".concat(r),{code:x}),window.location.href="/"}catch(e){console.error(e),o(e)}h(!1)},submitAccountPressed=async()=>{if(!v)return;h(!0),o(null);let e=g.replace(/^@+/,"");try{await makeRequest("/api/auth/fediverse?accessToken=".concat(r),{account:e}),E(!0)}catch(e){console.error(e),o(e)}h(!1)},N=(0,a.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,a.jsxs)("div",{className:O().codeInputContainer,children:[(0,a.jsx)(u.default,{value:x,onChange:e=>P(e.target.value),className:O().codeInput,placeholder:"123456",maxLength:6}),(0,a.jsx)(p.default,{type:"primary",onClick:submitCodePressed,disabled:x.length<6,className:O().submitButton,children:"Verify Code"})]})]}),A=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:"Your Fediverse Account"}),(0,a.jsx)(u.default.Search,{addonBefore:"@",onInput:e=>{j(e.target.value),validate(e.target.value)},value:g,placeholder:"youraccount@yourserver.com",status:!v&&g.length>0?"error":void 0,onSearch:submitAccountPressed,enterButton:(0,a.jsx)(p.default,{type:v?"primary":"default",disabled:!v||0===g.length,children:(0,a.jsx)(w,{})})})]});return(0,a.jsx)(d.default,{spinning:f,children:(0,a.jsxs)(s.default,{direction:"vertical",children:[C,M&&(0,a.jsx)(l.default,{message:"Error",description:M,type:"error",showIcon:!0}),k?N:A,(0,a.jsx)(c.default,{ghost:!0,children:(0,a.jsx)(_,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,a.jsx)("p",{children:"You can link your chat identity with your Fediverse identity. Next time you want to use this chat identity you can again go through the Fediverse authentication."})},"header")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var P=n(49524),k=n.n(P),E=n(73580),C=n(50057);let AuthModal=e=>{let{forceTabs:t}=e,n=(0,i.sJ)(E.L4),l=(0,i.sJ)(E.FI),u=(0,i.sJ)(E.db),s=(0,i.sJ)(E.g1);if(!u)return null;let{displayName:d}=u,{federation:c}=s,{enabled:f}=c,p=(0,a.jsxs)("span",{className:k().tabContent,children:[(0,a.jsx)("img",{className:k().icon,src:"/img/indieauth.png",alt:"IndieAuth"}),"IndieAuth"]}),h=(0,a.jsx)(IndieAuthModal,{authenticated:n,displayName:d,accessToken:l}),v=(0,a.jsxs)("span",{className:k().tabContent,children:[(0,a.jsx)("img",{className:k().icon,src:"/img/fediverse-black.png",alt:"Fediverse auth"}),"FediAuth"]}),m=(0,a.jsx)(FediAuthModal,{authenticated:n,displayName:d,accessToken:l});return(0,a.jsx)(o.SV,{fallbackRender:e=>{let{error:t,resetErrorBoundary:n}=e;return(0,a.jsx)(C.A,{componentName:"AuthModal",message:t.message,retryFunction:n})},children:(0,a.jsx)("div",{children:(0,a.jsx)(r.default,{defaultActiveKey:"1",items:[{label:p,key:"1",children:h},{label:v,key:"2",children:m}],type:"card",size:"small",renderTabBar:f||t?null:()=>null})})})}},89105:function(e,t,n){"use strict";n.d(t,{Kf:function(){return isValidAccount},ME:function(){return isValidFediverseAccount},ax:function(){return a},bu:function(){return isValidMatrixAccount},jv:function(){return isValidUrl}});let a="https?://.*";function isValidUrl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let n=new URL(e);if(""===n.protocol||""===n.hostname||!t.includes(n.protocol))return!1}catch(e){return!1}return!0}function isValidAccount(e,t){e.startsWith("@")&&(e=e.slice(1));let n=e.split(/:|@/),[a,r,i]=n;return a===t&&3===n.length&&!!a&&!!r&&!!i}function isValidMatrixAccount(e){e.startsWith("matrix:")&&(e=e.slice(7)),e.startsWith("@")&&(e=e.slice(1));let t=e.split(":"),[n,a]=t;return 2===t.length&&!!n&&!!a}function isValidFediverseAccount(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},49524:function(e){e.exports={tabContent:"AuthModal_tabContent__sQX_a",icon:"AuthModal_icon__624lg"}},38711:function(e){e.exports={codeInputContainer:"FediAuthModal_codeInputContainer__LheQq",codeInput:"FediAuthModal_codeInput__TbAom",submitButton:"FediAuthModal_submitButton__n9SbC"}},96774:function(e){e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var s=i[u];if(!l(s))return!1;var d=e[s],c=t[s];if(!1===(r=n?n.call(a,d,c,s):void 0)||void 0===r&&d!==c)return!1}return!0}}}]);