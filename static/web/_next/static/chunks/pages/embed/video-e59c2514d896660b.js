(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3126,4114],{61357:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/video",function(){return t(24813)}])},21756:function(n,e,t){"use strict";t.d(e,{Q:function(){return a}});var r=t(85893),o=t(4480),c=t(44974);let a=()=>{let n=(0,o.sJ)(c.g1),{appearanceVariables:e,customStyles:t}=n,a=Object.keys(e).filter(n=>!!e[n]).map(n=>"--".concat(n,": ").concat(e[n]));return(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(a.join(";\n"),"\n				}\n				").concat(t,"\n			")}})}},74681:function(n,e,t){"use strict";t.d(e,{R:function(){return h}});var r=t(85893),o=t(27049),c=t(45938),a=t(5152),s=t.n(a),i=t(94184),u=t.n(i),l=t(40158),f=t.n(l);let d=s()(()=>Promise.all([t.e(2074),t.e(9095)]).then(t.t.bind(t,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1}),h=n=>{let e,{streamName:t,customText:a,lastLive:s,notificationsEnabled:i,fediverseAccount:l,showsHeader:h=!0,onNotifyClick:m,onFollowClick:p,className:_}=n;return e=a||(!a&&i&&l?(0,r.jsxs)("span",{children:["This stream is offline. You can"," ",(0,r.jsx)("span",{role:"link",tabIndex:0,className:f().actionLink,onClick:m,children:"be notified"})," ","the next time ",t," goes live or"," ",(0,r.jsx)("span",{role:"link",tabIndex:0,className:f().actionLink,onClick:p,children:"follow"})," ",l," on the Fediverse."]}):!a&&i?(0,r.jsxs)("span",{children:["This stream is offline."," ",(0,r.jsx)("span",{role:"link",tabIndex:0,className:f().actionLink,onClick:m,children:"Be notified"})," ","the next time ",t," goes live."]}):!a&&l?(0,r.jsxs)("span",{children:["This stream is offline."," ",(0,r.jsx)("span",{role:"link",tabIndex:0,className:f().actionLink,onClick:p,children:"Follow"})," ",l," on the Fediverse to see the next time ",t," goes live."]}):"This stream is offline. Check back soon!"),(0,r.jsx)("div",{id:"offline-banner",className:u()(f().outerContainer,_),children:(0,r.jsxs)("div",{className:f().innerContainer,children:[h&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:f().header,children:t}),(0,r.jsx)(o.Z,{className:f().separator})]}),(0,r.jsx)("div",{className:f().bodyText,children:e}),s&&(0,r.jsxs)("div",{className:f().lastLiveDate,children:[(0,r.jsx)(d,{className:f().clockIcon}),"Last live ".concat((0,c.Z)(new Date(s))," ago.")]})]})})}},48831:function(n,e,t){"use strict";t.d(e,{X:function(){return p}});var r=t(85893),o=t(45938),c=t(68730),a=t(67294),s=t(5152),i=t.n(s),u=t(94184),l=t.n(u),f=t(29485),d=t.n(f),h=t(63516);let m=i()(()=>Promise.all([t.e(2074),t.e(1965)]).then(t.t.bind(t,41965,23)),{loadableGenerated:{webpack:()=>[41965]},ssr:!1}),p=n=>{let e,{online:t,lastConnectTime:s,lastDisconnectTime:i,viewerCount:u,className:f}=n,[,p]=(0,a.useState)(new Date);(0,a.useEffect)(()=>{let n=setInterval(()=>p(new Date),1e3);return()=>{clearInterval(n)}},[]);let _="";if(t&&s){let n=function(n){let e="hour",t="minute",r=(0,c.Z)({start:n,end:new Date});return r.days>=1?"".concat(r.days," ").concat((0,h._6)("day",r.days),"\n			").concat(r.hours," ").concat((0,h._6)(e,r.hours)):r.hours>=1?"".concat(r.hours," ").concat((0,h._6)(e,r.hours)," ").concat(r.minutes,"\n			").concat((0,h._6)(t,r.minutes)):"".concat(r.minutes," ").concat((0,h._6)(t,r.minutes),"\n		").concat(r.seconds," ").concat((0,h._6)("second",r.seconds))}(new Date(s));_=t?"Live for  ".concat(n):"Offline",e=u>0&&(0,r.jsxs)("div",{className:d().right,children:[(0,r.jsx)("span",{children:(0,r.jsx)(m,{})}),(0,r.jsx)("span",{children:" ".concat(u)})]})}else!t&&(_="Offline",i&&(e="Last live ".concat((0,o.Z)(new Date(i))," ago.")));return(0,r.jsxs)("div",{className:l()(d().statusbar,f),role:"status",children:[(0,r.jsx)("div",{children:_}),(0,r.jsx)("div",{children:e})]})};p.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},24813:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return d}});var r=t(85893);t(67294);var o=t(4480),c=t(11163),a=t(26303),s=t(44974),i=t(74681),u=t(48831),l=t(22864),f=t(21756);function d(){var n;let e=(0,o.sJ)(s.RI),t=(0,o.sJ)(s.g1),d=(0,o.sJ)(s.Q),{name:h}=t,{offlineMessage:m}=t,{viewerCount:p,lastConnectTime:_,lastDisconnectTime:x,streamTitle:b}=e,v=(0,o.sJ)(s.YW),j=(0,c.useRouter)(),w=null!==(n=j.asPath.split("?")[1])&&void 0!==n?n:"",k=w.split("&").reduce((n,e)=>{let[t,r]=e.split("=");return{...n,[t]:r}},{}),y="true"===k.initiallyMuted,g=(0,r.jsx)(a.Z,{active:!0,style:{padding:"10px"},paragraph:{rows:10}}),N=(0,r.jsx)(i.R,{streamName:h,customText:m,notificationsEnabled:!1}),O=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.OwncastPlayer,{source:"/hls/stream.m3u8",online:v,initiallyMuted:y,title:b||h,fill:!0}),(0,r.jsx)(u.X,{online:v,lastConnectTime:_,lastDisconnectTime:x,viewerCount:p})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.me,{}),(0,r.jsx)(f.Q,{}),(0,r.jsx)("div",{className:"video-embed",children:d.appLoading?g:v?O:N})]})}},81453:function(n,e,t){"use strict";t.d(e,{$i:function(){return A},$l:function(){return U},Bu:function(){return x},E8:function(){return Z},Ff:function(){return T},GC:function(){return j},GR:function(){return K},HP:function(){return P},IO:function(){return B},Kp:function(){return m},Kt:function(){return Y},M_:function(){return L},N$:function(){return F},NE:function(){return i},NM:function(){return _},Q_:function(){return u},Qc:function(){return O},RB:function(){return b},UJ:function(){return Q},WB:function(){return a},WE:function(){return g},WQ:function(){return y},Wr:function(){return I},XA:function(){return C},Y9:function(){return S},a_:function(){return h},ao:function(){return f},bl:function(){return l},e_:function(){return M},hn:function(){return N},iG:function(){return D},iV:function(){return d},jr:function(){return v},kb:function(){return G},kg:function(){return W},ms:function(){return E},nx:function(){return w},op:function(){return R},qk:function(){return p},rQ:function(){return X},sG:function(){return k},um:function(){return J}});var r=t(34155);let o=r.env.NEXT_PUBLIC_ADMIN_USERNAME,c=r.env.NEXT_PUBLIC_ADMIN_STREAMKEY,a="/",s="".concat(a,"api/admin/"),i=15e3,u="".concat(s,"status"),l="".concat(s,"serverconfig"),f="".concat(s,"config"),d="".concat(s,"viewersOverTime"),h="".concat(s,"viewers"),m="".concat(s,"chat/clients"),p="".concat(s,"chat/users/disabled"),_="".concat(s,"chat/users/setenabled"),x="".concat(s,"chat/users/ipbans"),b="".concat(s,"chat/users/ipbans/remove"),v="".concat(s,"chat/users/setmoderator"),j="".concat(s,"chat/users/moderators"),w="".concat(s,"hardwarestats"),k="".concat(s,"logs"),y="".concat(s,"logs/warnings"),g="".concat(s,"chat/messages"),N="/api/admin/chat/messagevisibility",O="".concat(s,"emoji/upload"),T="".concat(s,"emoji/delete"),E="".concat(s,"accesstokens"),I="".concat(s,"accesstokens/delete"),B="".concat(s,"accesstokens/create"),C="".concat(s,"webhooks"),L="".concat(s,"webhooks/delete"),D="".concat(s,"webhooks/create"),A="".concat(a,"api/socialplatforms"),M="".concat(s,"federation/send"),P="".concat(s,"followers"),Z="".concat(s,"followers/pending"),S="".concat(s,"followers/blocked"),G="".concat(s,"followers/approve"),R="".concat(s,"federation/actions"),F="".concat(s,"metrics/video"),J="".concat(s,"config/streamkeys"),Q="".concat(s,"yp/reset");async function X(n,e){let{data:t,method:r="GET",auth:a=!0}=e||{},s={method:r};if(t&&(s.body=JSON.stringify(t)),a&&o&&c){let n=btoa("".concat(o,":").concat(c));s.headers={Authorization:"Basic ".concat(n)},s.mode="cors",s.credentials="include"}let i=await fetch(n,s),u=await i.json();if(!i.ok){let n=u.message||"An error has occurred: ".concat(i.status);throw Error(n)}return u}async function U(n,e){let t={method:"GET",auth:!1,...e};return X(n,t)}async function W(n){try{let e=await fetch(n,{referrerPolicy:"no-referrer",referrer:""});if(!e.ok){let n="An error has occured: ".concat(e.status);throw Error(n)}let t=await e.json();return t}catch(n){console.log(n)}return{}}async function Y(){return W("https://api.github.com/repos/owncast/owncast/releases/latest")}let $=/^\d+(\.\d+){0,2}$/;async function K(n){let e=await Y(),t=e.tag_name;return("v"===t.substr(0,1)&&(t=t.substr(1)),!function(n,e){if(!n||!e||0===n.length||0===e.length)return!1;if(n===e)return!0;if($.test(n)&&$.test(e)){let t=n.split(".");for(;t.length<3;)t.push("0");let r=e.split(".");for(;r.length<3;)r.push("0");for(let n=0;n<3;n++){let e=parseInt(t[n],10),o=parseInt(r[n],10);if(e!==o)return e>o}return!0}return n>=e}(n,t))?t:null}},40158:function(n){n.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},29485:function(n){n.exports={statusbar:"Statusbar_statusbar__AtVnB"}},11163:function(n,e,t){n.exports=t(96885)},10434:function(n){function e(){return n.exports=e=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.__esModule=!0,n.exports.default=n.exports,e.apply(this,arguments)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports},59199:function(n,e,t){"use strict";function r(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}t.d(e,{Z:function(){return r}})},74902:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(30907),o=t(59199),c=t(40181);function a(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||(0,o.Z)(n)||(0,c.Z)(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(n){n.O(0,[2544,2184,5938,2332,5273,9243,6959,781,9774,2888,179],function(){return n(n.s=61357)}),_N_E=n.O()}]);