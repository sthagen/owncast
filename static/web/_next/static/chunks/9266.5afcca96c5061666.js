(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9266],{79266:function(e,n,t){"use strict";t.r(n),t.d(n,{UserDropdown:function(){return G}});var o=t(85893),r=t(66516),a=t(13013),i=t(71577),l=t(94184),c=t.n(l),s=t(4480),u=t(67294),d=t(46977),f=t(5152),h=t.n(f),p=t(4511),v=t(44974),m=t(27345),b=t.n(m),y=t(69183);let k=h()(()=>Promise.all([t.e(2074),t.e(8244)]).then(t.t.bind(t,18244,23)),{loadableGenerated:{webpack:()=>[18244]},ssr:!1}),g=h()(()=>Promise.all([t.e(2074),t.e(775)]).then(t.t.bind(t,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),w=h()(()=>Promise.all([t.e(2074),t.e(6275)]).then(t.t.bind(t,6275,23)),{loadableGenerated:{webpack:()=>[6275]},ssr:!1}),E=h()(()=>Promise.all([t.e(2074),t.e(531)]).then(t.t.bind(t,40531,23)),{loadableGenerated:{webpack:()=>[40531]},ssr:!1}),C=h()(()=>Promise.all([t.e(2074),t.e(4504)]).then(t.t.bind(t,4504,23)),{loadableGenerated:{webpack:()=>[4504]},ssr:!1}),j=h()(()=>Promise.all([t.e(2074),t.e(5672)]).then(t.t.bind(t,65672,23)),{loadableGenerated:{webpack:()=>[65672]},ssr:!1}),L=h()(()=>Promise.all([t.e(2074),t.e(5412)]).then(t.t.bind(t,95412,23)),{loadableGenerated:{webpack:()=>[95412]},ssr:!1}),x=h()(()=>Promise.all([t.e(5874),t.e(5402),t.e(1382),t.e(9614)]).then(t.bind(t,29614)).then(e=>e.Modal),{loadableGenerated:{webpack:()=>[29614]},ssr:!1}),I=h()(()=>Promise.all([t.e(173),t.e(5874),t.e(6524),t.e(4041),t.e(7801)]).then(t.bind(t,7783)).then(e=>e.NameChangeModal),{loadableGenerated:{webpack:()=>[7783]},ssr:!1}),_=h()(()=>Promise.all([t.e(173),t.e(5874),t.e(5348),t.e(1382),t.e(4526),t.e(8513)]).then(t.bind(t,78513)).then(e=>e.AuthModal),{loadableGenerated:{webpack:()=>[78513]},ssr:!1}),G=e=>{let{id:n,username:t,hideTitleOnMobile:l=!1,showToggleChatOption:f=!0}=e,[h,m]=(0,u.useState)(!1),[G,P]=(0,u.useState)(!1),[S,A]=(0,s.FV)(v.vZ),[D,O]=(0,u.useState)(null),N=(0,s.sJ)(v.Q),T=()=>{f&&A(S===v.gG.VISIBLE?v.gG.HIDDEN:v.gG.VISIBLE)},K=()=>{m(!0)},V=()=>{m(!1)},Z=()=>{D&&D.close(),O(null),A(v.gG.VISIBLE)},M=f&&N.chatAvailable&&(S===v.gG.HIDDEN||S===v.gG.VISIBLE),R=f&&N.chatAvailable&&(S===v.gG.HIDDEN||S===v.gG.VISIBLE||S===v.gG.POPPED_OUT);(0,d.y1)("c",T,{enableOnContentEditable:!1},[S===v.gG.VISIBLE]);let U=(0,s.sJ)(v.db);if(!U)return null;let{displayName:B}=U,H=(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(r.Z.Item,{icon:(0,o.jsx)(g,{}),onClick:()=>K(),children:"Change name"},"0"),(0,o.jsx)(r.Z.Item,{icon:(0,o.jsx)(w,{}),onClick:()=>P(!0),children:"Authenticate"},"1"),M&&(0,o.jsx)(r.Z.Item,{icon:(0,o.jsx)(j,{}),onClick:()=>T(),"aria-expanded":S===v.gG.VISIBLE,className:b().chatToggle,children:S===v.gG.VISIBLE?"Hide Chat":"Show Chat"},"3"),R&&(D?(0,o.jsx)(r.Z.Item,{icon:(0,o.jsx)(E,{}),onClick:Z,children:"Put chat back"},"4"):(0,o.jsx)(r.Z.Item,{icon:(0,o.jsx)(C,{}),onClick:()=>{Z();let e=window.open("/embed/chat/readwrite","_blank","popup");e.addEventListener("beforeunload",Z),O(e),A(v.gG.POPPED_OUT)},children:"Pop out chat"},"4"))]});return(0,o.jsx)(p.SV,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,o.jsx)(y.A,{componentName:"UserDropdown",message:n.message,retryFunction:t})},children:(0,o.jsxs)("div",{className:b().root,children:[(0,o.jsx)(a.Z,{overlay:H,trigger:["click"],children:(0,o.jsxs)(i.Z,{id:n,type:"primary",icon:(0,o.jsx)(L,{className:b().userIcon}),children:[(0,o.jsx)("span",{className:c()([b().username,l&&b().hideTitleOnMobile]),children:t||B}),(0,o.jsx)(k,{})]})}),(0,o.jsx)(x,{title:"Change Chat Display Name",open:h,handleCancel:V,children:(0,o.jsx)(I,{closeModal:V})}),(0,o.jsx)(x,{title:"Authenticate",open:G,handleCancel:()=>P(!1),children:(0,o.jsx)(_,{})})]})})}},27345:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2",username:"UserDropdown_username__nVyPA",hideTitleOnMobile:"UserDropdown_hideTitleOnMobile__AtFIT",chatToggle:"UserDropdown_chatToggle__pZoqQ"}},46977:function(e,n,t){"use strict";t.d(n,{y1:function(){return g}});var o=t(67294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t(85893);var a=["shift","alt","meta","mod","ctrl"],i={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function l(e){return(i[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function c(e,n){return void 0===n&&(n=","),e.split(n)}function s(e,n,t){void 0===n&&(n="+");var o=e.toLocaleLowerCase().split(n).map(function(e){return l(e)});return r({},{alt:o.includes("alt"),ctrl:o.includes("ctrl")||o.includes("control"),shift:o.includes("shift"),meta:o.includes("meta"),mod:o.includes("mod")},{keys:o.filter(function(e){return!a.includes(e)}),description:t})}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&f([l(e.key),l(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&h([l(e.key),l(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){u.clear()});var u=new Set;function d(e){return Array.isArray(e)}function f(e){var n=Array.isArray(e)?e:[e];u.has("meta")&&u.forEach(function(e){return!a.includes(e)&&u.delete(e.toLowerCase())}),n.forEach(function(e){return u.add(e.toLowerCase())})}function h(e){var n=Array.isArray(e)?e:[e];"meta"===e?u.clear():n.forEach(function(e){return u.delete(e.toLowerCase())})}function p(e,n){var t=e.target;void 0===n&&(n=!1);var o=t&&t.tagName;return d(n)?!!(o&&n&&n.some(function(e){return e.toLowerCase()===o.toLowerCase()})):!!(o&&n&&!0===n)}var v=function(e,n,t){void 0===t&&(t=!1);var o,r=n.alt,a=n.meta,i=n.mod,c=n.shift,s=n.ctrl,f=n.keys,h=e.key,p=e.code,v=e.ctrlKey,m=e.metaKey,b=e.shiftKey,y=e.altKey,k=l(p),g=h.toLowerCase();if(!t){if(!y===r&&"alt"!==g||!b===c&&"shift"!==g)return!1;if(i){if(!m&&!v)return!1}else if(!m===a&&"meta"!==g&&"os"!==g||!v===s&&"ctrl"!==g&&"control"!==g)return!1}return!!(f&&1===f.length&&(f.includes(g)||f.includes(k)))||(f?(void 0===o&&(o=","),(d(f)?f:f.split(o)).every(function(e){return u.has(e.trim().toLowerCase())})):!f)},m=(0,o.createContext)(void 0),b=(0,o.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),y=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},k="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function g(e,n,t,r){var a,i=(0,o.useRef)(null),u=(0,o.useRef)(!1),g=t instanceof Array?r instanceof Array?void 0:r:t,w=d(e)?e.join(null==g?void 0:g.splitKey):e,E=t instanceof Array?t:r instanceof Array?r:void 0,C=(0,o.useCallback)(n,null!=E?E:[]),j=(0,o.useRef)(C);E?j.current=C:j.current=n;var L=(!function e(n,t){return n&&t&&"object"==typeof n&&"object"==typeof t?Object.keys(n).length===Object.keys(t).length&&Object.keys(n).reduce(function(o,r){return o&&e(n[r],t[r])},!0):n===t}((a=(0,o.useRef)(void 0)).current,g)&&(a.current=g),a.current),x=(0,o.useContext)(b).enabledScopes,I=(0,o.useContext)(m);return k(function(){if((null==L?void 0:L.enabled)!==!1&&(e=null==L?void 0:L.scopes,0===x.length&&e?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!!(!e||x.some(function(n){return e.includes(n)})||x.includes("*")))){var e,n=function(e,n){var t;if(void 0===n&&(n=!1),!(p(e,["input","textarea","select"])&&!p(e,null==L?void 0:L.enableOnFormTags)||null!=L&&null!=L.ignoreEventWhen&&L.ignoreEventWhen(e))){if(null!==i.current&&document.activeElement!==i.current&&!i.current.contains(document.activeElement)){y(e);return}(null==(t=e.target)||!t.isContentEditable||null!=L&&L.enableOnContentEditable)&&c(w,null==L?void 0:L.splitKey).forEach(function(t){var o,r,a,i=s(t,null==L?void 0:L.combinationKey);if(v(e,i,null==L?void 0:L.ignoreModifiers)||null!=(a=i.keys)&&a.includes("*")){if(n&&u.current)return;if(("function"==typeof(o=null==L?void 0:L.preventDefault)&&o(e,i)||!0===o)&&e.preventDefault(),"function"==typeof(r=null==L?void 0:L.enabled)?!r(e,i):!0!==r&&void 0!==r){y(e);return}j.current(e,i),n||(u.current=!0)}})}},t=function(e){void 0!==e.key&&(f(l(e.code)),((null==L?void 0:L.keydown)===void 0&&(null==L?void 0:L.keyup)!==!0||null!=L&&L.keydown)&&n(e))},o=function(e){void 0!==e.key&&(h(l(e.code)),u.current=!1,null!=L&&L.keyup&&n(e,!0))},r=i.current||(null==g?void 0:g.document)||document;return r.addEventListener("keyup",o),r.addEventListener("keydown",t),I&&c(w,null==L?void 0:L.splitKey).forEach(function(e){return I.addHotkey(s(e,null==L?void 0:L.combinationKey,null==L?void 0:L.description))}),function(){r.removeEventListener("keyup",o),r.removeEventListener("keydown",t),I&&c(w,null==L?void 0:L.splitKey).forEach(function(e){return I.removeHotkey(s(e,null==L?void 0:L.combinationKey,null==L?void 0:L.description))})}}},[w,L,x]),i}}}]);