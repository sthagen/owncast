"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7466],{77466:function(e,t,n){let a;n.d(t,{me:function(){return Z},FI:function(){return I},Q:function(){return m},L4:function(){return _},j$:function(){return k},ZA:function(){return L},g1:function(){return p},g8:function(){return F},db:function(){return T},ap:function(){return G},di:function(){return P},pT:function(){return H},hz:function(){return D},YW:function(){return V},We:function(){return M},RI:function(){return b},pH:function(){return Y},Gt:function(){return v}});var o,i,r=n(67294),s=n(4480),c=n(23917),l=class{static async getConfig(){let e=await fetch("/api/config"),t=await e.json();return t}},u=n(64777),d=class{static async getChatHistory(e){let t=await (0,u.$l)("".concat("/api/chat","?accessToken=").concat(e));return t}static async registerUser(e){let t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:e})},n=await (0,u.$l)("/api/chat/register",t);return n}},E=n(91951);class h{createAndConnect(e){let t=new URL(e);t.protocol="https:"===window.location.protocol?"wss:":"ws:",t.pathname="/ws",t.port="3000"===window.location.port?"8080":window.location.port,t.searchParams.append("accessToken",this.accessToken),console.debug("connecting to ",t.toString());let n=new WebSocket(t.toString());n.onopen=this.onOpen.bind(this),n.onerror=this.onError.bind(this),n.onmessage=this.onMessage.bind(this),this.websocket=n}onOpen(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer)}onError(e){console.error("Chat has been disconnected and is likely not working for you. It's possible you were removed from chat. If this is a server configuration issue, visit troubleshooting steps to resolve. https://owncast.online/docs/troubleshooting/#chat-is-disabled: ".concat("Socket error: ".concat(e))),this.websocket.close(),this.isShutdown||this.scheduleReconnect()}scheduleReconnect(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer),this.backOff*=2,this.websocketReconnectTimer=setTimeout(this.createAndConnect,5e3+Math.min(this.backOff,1e4))}shutdown(){this.isShutdown=!0,this.websocket.close()}onMessage(e){let t;let n=e.data.split("\n");for(let e=0;e<n.length;e++){try{t=JSON.parse(n[e]),this.handleMessage&&this.handleMessage(t)}catch(e){console.error(e,e.data);return}if(!t.type){console.error("No type provided",t);return}if(t.type===E.C.PING){this.sendPong();return}}}isConnected(){var e,t;return(null===(e=this.websocket)||void 0===e?void 0:e.readyState)===(null===(t=this.websocket)||void 0===t?void 0:t.OPEN)}send(e){e.type&&E.C[e.type]||console.warn('Outbound message: Unknown socket message type: "'.concat(e.type,'" sent.'));let t=JSON.stringify(e);this.websocket.send(t)}sendPong(){let e={type:E.C.PONG};this.send(e)}constructor(e,t,n){this.isShutdown=!1,this.backOff=1e3,this.accessToken=e,this.path=t,this.websocketReconnectTimer=null,this.isShutdown=!1,this.createAndConnect=this.createAndConnect.bind(this),this.shutdown=this.shutdown.bind(this),this.createAndConnect(n)}}var f=n(4723);(o=i||(i={})).Loading="LOADING",o.Loaded="LOADED",o.Online="ONLINE",o.Offline="OFFLINE",o.NeedsRegister="NEEDS_REGISTER",o.Fail="FAIL";let g=(0,f.C)({id:"appState",initial:"loading",predictableActionArguments:!0,states:{loading:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!0},on:{NEEDS_REGISTER:{target:"loading"},LOADED:{target:"ready"},FAIL:{target:"serverFailure"}}},ready:{initial:"offline",states:{online:{meta:{chatAvailable:!0,chatLoading:!1,videoAvailable:!0,appLoading:!1},on:{OFFLINE:{target:"goodbye"}}},offline:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!1},on:{ONLINE:{target:"online"}}},goodbye:{on:{ONLINE:{target:"online"}},meta:{chatAvailable:!0,chatLoading:!1,videoAvailable:!1,appLoading:!1},after:{3e5:{target:"offline"}}}}},serverFailure:{type:"final"},userfailure:{type:"final"}}});var y=n(72581),S=n(77278),O=function(e,t,n){let{user:a}=e,{id:o,displayName:i,displayColor:r,scopes:s,authenticated:c}=a;t(c),n({id:o.toString(),displayName:i,displayColor:r,isModerator:null==s?void 0:s.includes("MODERATOR")})},N=class{static async getStatus(){let e=await fetch("/api/status"),t=await e.json();return t}},A=function(e,t){t(t=>[...t,e])};s.zl.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=!1;let R="accessToken",w=!1,C="Cannot connect to the Owncast service. Please check your internet connection or if needed, double check this Owncast server is running.",b=(0,s.cn)({key:"serverStatusState",default:{online:!1,viewerCount:0,serverTime:new Date}}),p=(0,s.cn)({key:"clientConfigState",default:{name:"",summary:"",offlineMessage:"",logo:"",tags:[],version:"",nsfw:!1,extraPageContent:"",socialHandles:[],chatDisabled:!1,externalActions:[],customStyles:"",appearanceVariables:new Map,maxSocketPayloadSize:0,federation:{enabled:!1,account:"",followerCount:0},notifications:{browser:{enabled:!1,publicKey:""}},authentication:{indieAuthEnabled:!1}}}),I=(0,s.cn)({key:"accessTokenAtom",default:null}),T=(0,s.cn)({key:"currentUserAtom",default:null}),k=(0,s.cn)({key:"chatMessages",default:[]}),_=(0,s.cn)({key:"chatAuthenticatedAtom",default:!1}),v=(0,s.cn)({key:"websocketServiceAtom",default:null,dangerouslyAllowMutability:!0}),m=(0,s.cn)({key:"appState",default:{chatAvailable:!1,chatLoading:!0,videoAvailable:!1,appLoading:!0}}),D=(0,s.cn)({key:"isMobileAtom",default:void 0}),L=(0,s.cn)({key:"chatVisibilityToggleAtom",default:!0}),M=(0,s.cn)({key:"isVideoPlayingAtom",default:!1}),G=(0,s.cn)({key:"fatalErrorStateAtom",default:null}),F=(0,s.cn)({key:"clockSkewAtom",default:0}),U=(0,s.cn)({key:"removedMessageIds",default:[]}),H=(0,s.nZ)({key:"isChatVisibleSelector",get:e=>{let{get:t}=e,n=t(m),a=t(L),o=t(I);return o&&n.chatAvailable&&a}}),P=(0,s.nZ)({key:"isChatAvailableSelector",get:e=>{let{get:t}=e,n=t(m),a=t(I);return a&&n.chatAvailable}}),V=(0,s.nZ)({key:"isOnlineSelector",get:e=>{let{get:t}=e,n=t(m),a=t(M);return n.videoAvailable||a}}),Y=(0,s.nZ)({key:"visibleChatMessagesSelector",get:e=>{let{get:t}=e,n=t(k),a=t(U);return n.filter(e=>!a.includes(e.id))}}),Z=()=>{let e;let[t,n,o]=(0,c.e)(g),[u,f]=(0,s.FV)(T),D=(0,s.Zl)(_),[L,M]=(0,s.FV)(p),[,H]=(0,s.FV)(b),P=(0,s.Zl)(F),[V,Y]=(0,s.FV)(k),[Z,J]=(0,s.FV)(I),j=(0,s.Zl)(m),B=(0,s.Zl)(G),K=(0,s.Zl)(v),[W,X]=(0,s.FV)(U),[$,Q]=(0,r.useState)(!1),q=(e,t)=>{B({title:e,message:t})},x=e=>{n(e)},z=e=>{if(t.matches("loading")){let t=[i.Loaded];e.online?t.push(i.Online):t.push(i.Offline),x(t);return}e.online&&t.matches("ready")?x([i.Online]):e.online||t.matches("ready.offline")||x([i.Offline])},ee=async()=>{try{let e=await l.getConfig();M(e),B(null),Q(!0)}catch(e){q("Unable to reach Owncast server",C),console.error("ClientConfigService -> getConfig() ERROR: \n".concat(e))}},et=async()=>{try{let e=await N.getStatus();z(e),H(e);let{serverTime:t}=e,n=new Date(t).getTime()-Date.now();P(n),B(null)}catch(e){x([i.Fail]),q("Unable to reach Owncast server",C),console.error("serverStatusState -> getStatus() ERROR: \n".concat(e))}},en=async e=>{let t=(0,y.$o)(R);if(t){J(t);return}try{x([i.NeedsRegister]);let t=await d.registerUser(e),{accessToken:n,displayName:a,displayColor:o}=t;if(!n)return;f({...u,displayName:a,displayColor:o}),J(n),(0,y.qQ)(R,n)}catch(e){x([i.Fail]),console.error("ChatService -> registerUser() ERROR: \n".concat(e))}},ea=()=>{(0,y.qQ)(R,""),J(null),en()},eo=e=>{let{ids:t,visible:n}=e;if(n){let e=W.filter(e=>!t.includes(e));X(e)}else{let e=[...W,...t];X(e)}},ei=e=>{switch(e.type){case E.C.ERROR_NEEDS_REGISTRATION:ea();break;case E.C.CONNECTED_USER_INFO:O(e,D,f),w||(Y(t=>[...t,e]),w=!0);break;case E.C.CHAT:Y(t=>[...t,e]);break;case E.C.NAME_CHANGE:A(e,Y);break;case E.C.USER_JOINED:Y(t=>[...t,e]);break;case E.C.SYSTEM:Y(t=>[...t,e]);break;case E.C.CHAT_ACTION:Y(t=>[...t,e]);break;case E.C.VISIBILITY_UPDATE:eo(e);break;default:console.error("Unknown socket message type: ",e.type)}},er=async()=>{try{let e=await d.getChatHistory(Z);Y(t=>[...t,...e])}catch(e){console.error("ChatService -> getChatHistory() ERROR: \n".concat(e))}},es=async()=>{try{let{socketHostOverride:t}=L,n=window.location;n.hash="";let a=n.toString().replaceAll("#","");(e=new h(Z,"/ws",t||a)).handleMessage=ei,K(e)}catch(e){console.error("ChatService -> startChat() ERROR: \n".concat(e))}},ec=()=>{};return(0,r.useEffect)(()=>{try{if(window.configHydration){let e=JSON.parse(window.configHydration);M(e),Q(!0)}}catch(e){console.error("Error parsing config hydration",e)}try{if(window.statusHydration){let e=JSON.parse(window.statusHydration);H(e),z(e)}}catch(e){console.error("error parsing status hydration",e)}},[]),(0,r.useEffect)(()=>{!L.chatDisabled&&Z&&$&&es()},[$,Z]),(0,r.useEffect)(()=>{ec()},[V]),(0,r.useEffect)(()=>(ee(),en(),et(),clearInterval(a),a=setInterval(()=>{et()},5e3),()=>{clearInterval(a)}),[]),(0,r.useEffect)(()=>{Z&&er()},[Z]),(0,r.useEffect)(()=>{o.onTransition(e=>{let t=(0,S.YR)(e.meta);j(t)})},[]),null}},91951:function(e,t,n){var a,o;n.d(t,{C:function(){return a}}),(o=a||(a={})).CHAT="CHAT",o.PING="PING",o.NAME_CHANGE="NAME_CHANGE",o.COLOR_CHANGE="COLOR_CHANGE",o.PONG="PONG",o.SYSTEM="SYSTEM",o.USER_JOINED="USER_JOINED",o.CHAT_ACTION="CHAT_ACTION",o.FEDIVERSE_ENGAGEMENT_FOLLOW="FEDIVERSE_ENGAGEMENT_FOLLOW",o.FEDIVERSE_ENGAGEMENT_LIKE="FEDIVERSE_ENGAGEMENT_LIKE",o.FEDIVERSE_ENGAGEMENT_REPOST="FEDIVERSE_ENGAGEMENT_REPOST",o.CONNECTED_USER_INFO="CONNECTED_USER_INFO",o.ERROR_USER_DISABLED="ERROR_USER_DISABLED",o.ERROR_NEEDS_REGISTRATION="ERROR_NEEDS_REGISTRATION",o.ERROR_MAX_CONNECTIONS_EXCEEDED="ERROR_MAX_CONNECTIONS_EXCEEDED",o.VISIBILITY_UPDATE="VISIBILITY-UPDATE"},77278:function(e,t,n){function a(e,t){return 1===t?e:"".concat(e,"s")}function o(e){let t="string"==typeof e?new Date(e):e;return(new Date-t)/864e5}function i(e){return Object.keys(e).reduce((t,n)=>{let a=e[n];return Object.assign(t,a),t},{})}n.d(t,{Xb:function(){return o},YR:function(){return i},_6:function(){return a}})},72581:function(e,t,n){n.d(t,{$o:function(){return o},dA:function(){return a},qQ:function(){return i}});let a={username:"username",hasDisplayedNotificationModal:"HAS_DISPLAYED_NOTIFICATION_MODAL",userVisitCount:"USER_VISIT_COUNT"};function o(e){try{return localStorage.getItem(e)}catch(e){}return null}function i(e,t){try{return""!==t&&null!==t?localStorage.setItem(e,t):localStorage.removeItem(e),!0}catch(e){}return!1}}}]);