(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6216],{56216:function(e,t,a){"use strict";a.r(t),a.d(t,{ChatContainer:function(){return eT}});var s,n,r,l,o,i=a(85893),c=a(26246),d=a(67294),h=a(5152),u=a.n(h),m=a(91951),x=a(59760),p=a.n(x),g=a(94184),_=a.n(g),C=a(94199),j=a(4480),f=a(63108),v=a(41366),b=a(2252);class N extends b.M{match(e){let{highlightString:t}=this.options;if(!t)return null;let a=e.match(t);return a?{index:a.index,length:a[0].length,match:a[0],valid:!0}:null}replaceWith(e,t){let{key:a}=t;return d.createElement("mark",{key:a},e)}asTag(){return"mark"}}var E=a(50085),y=a.n(E),M=a(77278);function w(e){let t=new Date(e);if(Number.isNaN(t))return"";let a=(0,M.Xb)(e);if(a>=1){let e=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"".concat(e," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var S=a(77466),T=a(48976),k=a.n(T);let G=e=>{let{badge:t,userColor:a,title:s}=e;return(0,i.jsx)("span",{style:{color:"var(--theme-color-users-".concat(a,")")},className:k().badge,title:s,children:t})},O=u()(()=>Promise.all([a.e(2074),a.e(7719)]).then(a.t.bind(a,27719,23)),{loadableGenerated:{webpack:()=>[27719]},ssr:!1}),D=e=>{let{userColor:t}=e;return(0,i.jsx)(G,{badge:(0,i.jsx)(O,{}),userColor:t,title:"Authenticated"})},A=u()(()=>Promise.all([a.e(2074),a.e(710)]).then(a.t.bind(a,20710,23)),{loadableGenerated:{webpack:()=>[20710]},ssr:!1}),F=e=>{let{userColor:t}=e;return(0,i.jsx)(G,{badge:(0,i.jsx)(A,{}),userColor:t,title:"Moderator"})},B=u()(()=>Promise.all([a.e(2074),a.e(6133)]).then(a.t.bind(a,56133,23)),{loadableGenerated:{webpack:()=>[56133]},ssr:!1}),R=e=>{let{userColor:t}=e;return(0,i.jsx)(G,{badge:(0,i.jsx)(B,{}),userColor:t,title:"Bot"})},L=u()(()=>Promise.all([a.e(173),a.e(164),a.e(4931),a.e(5402),a.e(7524),a.e(4041),a.e(3698),a.e(3013),a.e(4398),a.e(8091),a.e(3863),a.e(4860)]).then(a.bind(a,94860)).then(e=>e.ChatModerationActionMenu),{loadableGenerated:{webpack:()=>[94860]},ssr:!1}),P=e=>{let{children:t,user:a}=e,{displayName:s,createdAt:n}=a,r="".concat(s," first joined ").concat(w(n));return(0,i.jsx)(C.Z,{title:r,placement:"topLeft",mouseEnterDelay:1,children:t})},I=e=>{let{message:t,highlightString:a,showModeratorMenu:s,sentBySelf:n,sameUserAsLast:r,isAuthorModerator:l,isAuthorAuthenticated:o,isAuthorBot:c}=e,{id:d,body:h,user:u,timestamp:m}=t,{id:x,displayName:p,displayColor:g}=u,b=(0,j.sJ)(S.FI),E="var(--theme-color-users-".concat(g,")"),M="Sent ".concat(w(m)),T=[];return l&&T.push((0,i.jsx)(F,{userColor:g},"mod")),o&&T.push((0,i.jsx)(D,{userColor:g},"auth")),c&&T.push((0,i.jsx)(R,{userColor:g},"bot")),(0,i.jsx)("div",{className:_()(y().messagePadding,r&&y().messagePaddingCollapsed,"chat-message_user"),children:(0,i.jsxs)("div",{className:_()(y().root,{[y().ownMessage]:n}),style:{borderColor:E},children:[(0,i.jsx)("div",{className:y().background,style:{color:E}}),!r&&(0,i.jsx)(P,{user:u,children:(0,i.jsxs)("div",{className:y().user,style:{color:E},children:[(0,i.jsx)("span",{className:y().userName,children:p}),(0,i.jsx)("span",{children:T})]})}),(0,i.jsx)(C.Z,{title:M,mouseEnterDelay:1,children:(0,i.jsx)(f.wZ,{className:y().message,content:h,matchers:[new v.xc("url",{validateTLD:!1}),new N("highlight",{highlightString:a})]})}),s&&(0,i.jsx)("div",{className:y().modMenuWrapper,children:(0,i.jsx)(L,{messageID:d,accessToken:b,userID:x,userDisplayName:p})})]})})};var U=a(55241),W=a(77493),V=a(96391),H=a(26912),Z=a.n(H);let Y=u()(()=>Promise.all([a.e(7741),a.e(1559)]).then(a.bind(a,51559)).then(e=>e.EmojiPicker),{loadableGenerated:{webpack:()=>[51559]},ssr:!1}),J=u()(()=>Promise.all([a.e(2074),a.e(3366)]).then(a.t.bind(a,73366,23)),{loadableGenerated:{webpack:()=>[73366]},ssr:!1}),X=u()(()=>Promise.all([a.e(2074),a.e(2348)]).then(a.t.bind(a,92348,23)),{loadableGenerated:{webpack:()=>[92348]},ssr:!1}),z=e=>{let{attributes:t,element:a,children:s}=e,n=(0,V.vt)(),r=(0,V.UE)();return(0,i.jsxs)("span",{...t,contentEditable:!1,children:[(0,i.jsx)("img",{alt:a.alt,src:a.src,title:a.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(n&&r?"0 0 0 3px #B4D5FF":"none")}}),s]})},K=e=>{let{isVoid:t}=e;return e.isVoid=e=>"image"===e.type||t(e),e.isInline=e=>"image"===e.type,e},q=e=>{let t;if(W.xv.isText(e)){let t=e.text;return t}if(0===e.children.length)t=[{text:""}];else{var a;t=null===(a=e.children)||void 0===a?void 0:a.map(e=>q(e)).join("")}switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},Q=e=>{if(W.xv.isText(e))return e.text.length;if("image"===e.type)return 5;let t=0;return e.children.forEach(e=>{t+=Q(e)}),t},$=e=>{let{defaultText:t}=e,[a,s]=(0,d.useState)(!1),[n,r]=(0,d.useState)(null==t?void 0:t.length),l=(0,j.sJ)(S.Gt),o=(0,d.useMemo)(()=>(0,V.BU)(K((0,W.Jh)())),[]),c=()=>{if(!l){console.log("websocketService is not defined");return}let e=q(o);l.send({type:m.C.CHAT,body:e}),W.YR.delete(o,{at:{anchor:W.ML.start(o,[]),focus:W.ML.end(o,[])}}),r(0)},h=(e,t,a)=>({type:"image",alt:e,src:t,name:a,children:[{text:""}]}),u=(e,t)=>{if(!e)return;let{selection:a}=o,s=h(t,e,t);if(W.YR.insertNodes(o,s,{select:!0}),a){var n;let[e,t]=W.ML.parent(o,null===(n=a.focus)||void 0===n?void 0:n.path);o.isVoid(e)||W.NB.string(e).length?W.YR.insertNodes(o,s,{at:W.y$.next(t),select:!0}):(W.YR.insertNodes(o,s,{at:t,select:!0}),W.ML.normalize(o,{force:!0}))}else W.YR.insertNodes(o,s,{select:!0})},x=e=>{V.F3.focus(o),W.YR.insertText(o,e)},p=(e,t)=>{V.F3.focus(o),u(t,e)},g=e=>{let t=Q(o)+1;if("Enter"===e.key){e.preventDefault(),c();return}if("Backspace"===e.key){r(t-1);return}t+1>300&&e.preventDefault(),r(t+1)},C=e=>{let t=e.clipboardData.getData("text/plain"),{length:a}=t;n+a>300&&e.preventDefault()},f=e=>"image"===e.element.type?(0,i.jsx)(z,{...e}):(0,i.jsx)("p",{...e});return(0,i.jsx)("div",{className:Z().root,children:(0,i.jsxs)("div",{className:_()(Z().inputWrap,n>=300&&Z().maxCharacters),children:[(0,i.jsxs)(V.mH,{editor:o,value:[{type:"paragraph",children:[{text:t||""}]}],children:[(0,i.jsx)(V.CX,{className:"chat-text-input",onKeyDown:g,onPaste:C,renderElement:f,placeholder:"Send a message to chat",style:{width:"100%"},role:"textbox","aria-label":"Chat text input",autoFocus:!0}),(0,i.jsx)(U.Z,{content:(0,i.jsx)(Y,{onEmojiSelect:x,onCustomEmojiSelect:p}),trigger:"click",placement:"topRight",onOpenChange:e=>s(e),open:a})]}),(0,i.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,i.jsx)("button",{type:"button",className:Z().emojiButton,title:"Emoji picker button",onClick:()=>s(!a),children:(0,i.jsx)(X,{})}),(0,i.jsx)("button",{type:"button",className:Z().sendButton,title:"Send message Button",onClick:c,children:(0,i.jsx)(J,{})})]})]})})};var ee=a(93107),et=a.n(ee);function ea(){return(ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var es=function(e){return d.createElement("svg",ea({height:500,viewBox:"0 0 132.292 132.292",width:500,xmlns:"http://www.w3.org/2000/svg"},e),s||(s=d.createElement("linearGradient",{id:"moderator_svg__a",gradientUnits:"userSpaceOnUse",x1:432.851,x2:464.644,y1:49.977,y2:49.977},d.createElement("stop",{offset:0,stopColor:"#2087e2"}),d.createElement("stop",{offset:1,stopColor:"#b63fff"}))),n||(n=d.createElement("path",{d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",fill:"url(#moderator_svg__a)",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),r||(r=d.createElement("path",{d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z",fill:"#1d1535",fillOpacity:.335})),l||(l=d.createElement("path",{d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z",fill:"#e2e8f0",fillOpacity:.306})),o||(o=d.createElement("path",{d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))};let en=()=>(0,i.jsxs)("div",{className:et().chatModerationNotification,children:[(0,i.jsx)(es,{className:et().icon}),"You are now a moderator."]});var er=a(23421),el=a.n(er);let eo=e=>{let{message:{body:t,user:{displayName:a}},highlightString:s}=e;return(0,i.jsxs)("div",{className:_()([el().chatSystemMessage,"chat-message_system"]),children:[(0,i.jsx)("div",{className:el().user,children:(0,i.jsx)("span",{className:el().userName,children:a})}),(0,i.jsx)(f.wZ,{className:el().message,content:t,matchers:[new v.xc("url",{validateTLD:!1}),new N("highlight",{highlightString:s})]})]})};var ei=a(91044),ec=a.n(ei);let ed=u()(()=>Promise.all([a.e(2074),a.e(8725)]).then(a.t.bind(a,8725,23)),{loadableGenerated:{webpack:()=>[8725]},ssr:!1}),eh=e=>{let{isAuthorModerator:t,userColor:a,displayName:s}=e;return(0,i.jsxs)("div",{className:ec().root,children:[(0,i.jsxs)("span",{style:{color:"var(--theme-color-users-".concat(a,")")},children:[(0,i.jsx)("span",{style:{padding:"0 10px"},children:(0,i.jsx)(ed,{})}),(0,i.jsx)("span",{style:{fontWeight:"bold"},children:s}),t&&(0,i.jsx)("span",{children:(0,i.jsx)(F,{userColor:a})})]})," ","joined the chat."]})};var eu=a(71577);let em=u()(()=>Promise.all([a.e(2074),a.e(437)]).then(a.t.bind(a,20437,23)),{loadableGenerated:{webpack:()=>[20437]},ssr:!1}),ex=e=>{let{chatContainerRef:t,messages:a}=e;return(0,i.jsx)("div",{className:p().toBottomWrap,children:(0,i.jsx)(eu.Z,{type:"default",style:{color:"currentColor"},icon:(0,i.jsx)(em,{}),onClick:()=>t.current.scrollToIndex({index:a.length-1,behavior:"auto"}),children:"Go to last message"})})};var ep=a(65302),eg=a.n(ep);let e_=e=>{let{body:t}=e;return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:eg().chatAction})};var eC=a(71230),ej=a(15746),ef=a(24093),ev=a(85857),eb=a.n(ev);let eN=u()(()=>a.e(9069).then(a.bind(a,49069)),{loadableGenerated:{webpack:()=>[49069]},ssr:!1}),eE=u()(()=>a.e(5584).then(a.bind(a,15584)),{loadableGenerated:{webpack:()=>[15584]},ssr:!1}),ey=u()(()=>a.e(7268).then(a.bind(a,97268)),{loadableGenerated:{webpack:()=>[97268]},ssr:!1}),eM=e=>{let t,{message:a}=e,{body:s,title:n,image:r,link:l,type:o}=a;switch(o.toString()){case"FEDIVERSE_ENGAGEMENT_FOLLOW":t=eN;break;case"FEDIVERSE_ENGAGEMENT_LIKE":t=eE;break;case"FEDIVERSE_ENGAGEMENT_REPOST":t=ey}return(0,i.jsx)("div",{className:_()([eb().follower,"chat-message_social"]),children:(0,i.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(eC.Z,{wrap:!1,children:[(0,i.jsxs)(ej.Z,{span:6,children:[(0,i.jsx)(ef.C,{src:r,alt:"Avatar",className:eb().avatar,children:(0,i.jsx)("img",{src:"/logo",alt:"Logo",className:eb().placeholder})}),(0,i.jsx)(t,{className:eb().icon})]}),(0,i.jsxs)(ej.Z,{children:[(0,i.jsx)(eC.Z,{className:eb().account,children:n}),(0,i.jsx)(eC.Z,{className:eb().body,children:s})]})]})})})},ew=u()(()=>Promise.all([a.e(2074),a.e(1668)]).then(a.t.bind(a,51668,23)),{loadableGenerated:{webpack:()=>[51668]},ssr:!1});function eS(e){let{user:{scopes:t}}=e;return!!t&&0!==t.length&&t.includes("MODERATOR")}let eT=e=>{let{messages:t,usernameToHighlight:a,chatUserId:s,isModerator:n,showInput:r,height:l}=e,[o,h]=(0,d.useState)(!1),u=(0,d.useRef)(null),x=e=>{let{oldName:t,user:a}=e,{displayName:s,displayColor:n}=a,r="var(--theme-color-users-".concat(n,")");return(0,i.jsxs)("div",{className:p().nameChangeView,children:[(0,i.jsx)("div",{style:{marginRight:5,height:"max-content",margin:"auto 5px auto 0"},children:(0,i.jsx)(ew,{})}),(0,i.jsxs)("div",{className:p().nameChangeText,children:[(0,i.jsx)("span",{style:{color:r},children:t}),(0,i.jsx)("span",{className:p().plain,children:" is now known as "}),(0,i.jsx)("span",{style:{color:r},children:s})]})]})},g=e=>(0,i.jsx)(eM,{message:e}),_=e=>{let{user:{displayName:t,displayColor:a}}=e,s=eS(e);return(0,i.jsx)(eh,{displayName:t,userColor:a,isAuthorModerator:s})},C=e=>{let{body:t}=e;return(0,i.jsx)(e_,{body:t})},j=e=>{let t=eS(e);return t?(0,i.jsx)(en,{}):(0,i.jsx)("div",{style:{width:"1px",height:"1px"}})},f=(e,r)=>{switch(r.type){case m.C.CHAT:var l,o,c,d;return(0,i.jsx)(I,{message:r,showModeratorMenu:n,highlightString:a,sentBySelf:(null===(l=r.user)||void 0===l?void 0:l.id)===s,sameUserAsLast:function(e,t){if(e.length<2)return!1;let a=e[t];if(!a||!a.user)return!1;let{user:{id:s}}=a,n=e[t-1];if((null==n?void 0:n.type)!==m.C.CHAT||!(null==n?void 0:n.timestamp)||!a.timestamp)return!1;let r=new Date(null==n?void 0:n.timestamp).getTime(),l=new Date(a.timestamp).getTime();return!(l-r>12e4)&&s===(null==n?void 0:n.user.id)}(t,e),isAuthorModerator:null===(o=r.user.scopes)||void 0===o?void 0:o.includes("MODERATOR"),isAuthorBot:null===(c=r.user.scopes)||void 0===c?void 0:c.includes("BOT"),isAuthorAuthenticated:null===(d=r.user)||void 0===d?void 0:d.authenticated},r.id);case m.C.NAME_CHANGE:return x(r);case m.C.CONNECTED_USER_INFO:return j(r);case m.C.USER_JOINED:return _(r);case m.C.CHAT_ACTION:return C(r);case m.C.SYSTEM:return(0,i.jsx)(eo,{message:r,highlightString:a},r.id);case m.C.FEDIVERSE_ENGAGEMENT_FOLLOW:case m.C.FEDIVERSE_ENGAGEMENT_LIKE:case m.C.FEDIVERSE_ENGAGEMENT_REPOST:return g(r);default:return null}},v=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth";setTimeout(()=>{var s;null===(s=e.current)||void 0===s||s.scrollToIndex({index:t.length-1,behavior:a})},100),h(!0)};(0,d.useEffect)(()=>{setTimeout(()=>{v(u,"auto")},500)},[]);let b=(0,d.useMemo)(()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.OO,{id:"virtuoso",style:{height:l},className:p().virtuoso,ref:u,data:t,itemContent:(e,t)=>f(e,t),followOutput:e=>(e&&v(u,"smooth"),!1),alignToBottom:!0,atBottomThreshold:70,atBottomStateChange:e=>{h(e)}}),!o&&(0,i.jsx)(ex,{chatContainerRef:u,messages:t})]}),[t,a,s,n,o]);return(0,i.jsxs)("div",{id:"chat-container",className:p().chatContainer,children:[b,r&&(0,i.jsx)("div",{className:p().chatTextField,children:(0,i.jsx)($,{})})]})};eT.defaultProps={showInput:!0,height:"auto"}},65302:function(e){e.exports={chatAction:"ChatActionMessage_chatAction__x9Xsg"}},59760:function(e){e.exports={toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",nameChangeView:"ChatContainer_nameChangeView__ziyXN",nameChangeText:"ChatContainer_nameChangeText__yXG__",plain:"ChatContainer_plain__IPS19",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz",chatTextField:"ChatContainer_chatTextField__OqCGL"}},91044:function(e){e.exports={root:"ChatJoinMessage_root__vuVXa"}},93107:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},85857:function(e){e.exports={follower:"ChatSocialMessage_follower__TyNGH",avatar:"ChatSocialMessage_avatar__QbcNk",body:"ChatSocialMessage_body__aY2Oa",account:"ChatSocialMessage_account__uGSKr",icon:"ChatSocialMessage_icon__fiCk6",placeholder:"ChatSocialMessage_placeholder__NbhCH"}},23421:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},26912:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrap:"ChatTextField_inputWrap__1mAjD",maxCharacters:"ChatTextField_maxCharacters__yGT4s",emojiButton:"ChatTextField_emojiButton__ON_Cu",sendButton:"ChatTextField_sendButton__MOmD4"}},48976:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},50085:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}}}]);