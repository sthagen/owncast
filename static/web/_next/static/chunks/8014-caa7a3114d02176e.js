(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8014],{13882:function(i,e,o){"use strict";function a(i,e){if(e.length<i)throw TypeError(i+" argument"+(i>1?"s":"")+" required, but only "+e.length+" present")}o.d(e,{Z:function(){return a}})},19013:function(i,e,o){"use strict";o.d(e,{Z:function(){return t}});var a=o(13882);function r(i){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function t(i){(0,a.Z)(1,arguments);var e=Object.prototype.toString.call(i);return i instanceof Date||"object"===r(i)&&"[object Date]"===e?new Date(i.getTime()):"number"==typeof i||"[object Number]"===e?new Date(i):(("string"==typeof i||"[object String]"===e)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},42238:function(i,e,o){var a;!function(r,t){"use strict";var n="function",s="undefined",b="object",w="string",l="major",c="model",d="name",u="type",p="vendor",m="version",f="architecture",h="console",g="mobile",v="tablet",k="smarttv",x="wearable",y="embedded",_="Amazon",S="Apple",T="ASUS",N="BlackBerry",q="Browser",z="Chrome",A="Firefox",E="Google",C="Huawei",O="Microsoft",j="Motorola",U="Opera",D="Samsung",P="Sharp",R="Sony",M="Xiaomi",B="Zebra",V="Facebook",G="Chromium OS",I="Mac OS",Z=function(i,e){var o={};for(var a in i)e[a]&&e[a].length%2==0?o[a]=e[a].concat(i[a]):o[a]=i[a];return o},L=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},W=function(i,e){return typeof i===w&&-1!==F(e).indexOf(F(i))},F=function(i){return i.toLowerCase()},H=function(i,e){if(typeof i===w)return i=i.replace(/^\s\s*/,""),typeof e===s?i:i.substring(0,350)},$=function(i,e){for(var o,a,r,s,w,l,c=0;c<e.length&&!w;){var d=e[c],u=e[c+1];for(o=a=0;o<d.length&&!w&&d[o];)if(w=d[o++].exec(i))for(r=0;r<u.length;r++)l=w[++a],typeof(s=u[r])===b&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==n||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):t:this[s[0]]=l?s[1].call(this,l,s[2]):t:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):t):this[s]=l||t;c+=2}},X=function(i,e){for(var o in e)if(typeof e[o]===b&&e[o].length>0){for(var a=0;a<e[o].length;a++)if(W(e[o][a],i))return"?"===o?t:o}else if(W(e[o],i))return"?"===o?t:o;return i},K={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Q={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,m],[/opios[\/ ]+([\w\.]+)/i],[m,[d,U+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[d,U]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[d,"UC"+q]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[m,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+q],m],[/\bfocus\/([\w\.]+)/i],[m,[d,A+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[d,U+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[d,U+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[d,"MIUI "+q]],[/fxios\/([-\w\.]+)/i],[m,[d,A]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 "+q]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 "+q],m],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[d,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,V],m],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[d,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[d,z+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,z+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[d,"Android "+q]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[m,X,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[d,A+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[d,m],[/(cobalt)\/([\w\.]+)/i],[d,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,F]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",F]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,F]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[p,D],[u,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[p,D],[u,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[p,S],[u,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[p,S],[u,v]],[/(macintosh);/i],[c,[p,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[p,P],[u,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[p,C],[u,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[p,C],[u,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[p,M],[u,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[p,M],[u,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[p,"OPPO"],[u,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[p,"Vivo"],[u,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[p,"Realme"],[u,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[p,j],[u,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[p,j],[u,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[p,"LG"],[u,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[p,"LG"],[u,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[p,"Lenovo"],[u,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[p,"Nokia"],[u,g]],[/(pixel c)\b/i],[c,[p,E],[u,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[p,E],[u,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[p,R],[u,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[p,R],[u,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[p,"OnePlus"],[u,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[p,_],[u,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[p,_],[u,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,p,[u,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[p,N],[u,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[p,T],[u,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[p,T],[u,g]],[/(nexus 9)/i],[c,[p,"HTC"],[u,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[c,/_/g," "],[u,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[p,"Acer"],[u,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[p,"Meizu"],[u,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,c,[u,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,c,[u,v]],[/(surface duo)/i],[c,[p,O],[u,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[p,"Fairphone"],[u,g]],[/(u304aa)/i],[c,[p,"AT&T"],[u,g]],[/\bsie-(\w*)/i],[c,[p,"Siemens"],[u,g]],[/\b(rct\w+) b/i],[c,[p,"RCA"],[u,v]],[/\b(venue[\d ]{2,7}) b/i],[c,[p,"Dell"],[u,v]],[/\b(q(?:mv|ta)\w+) b/i],[c,[p,"Verizon"],[u,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[p,"Barnes & Noble"],[u,v]],[/\b(tm\d{3}\w+) b/i],[c,[p,"NuVision"],[u,v]],[/\b(k88) b/i],[c,[p,"ZTE"],[u,v]],[/\b(nx\d{3}j) b/i],[c,[p,"ZTE"],[u,g]],[/\b(gen\d{3}) b.+49h/i],[c,[p,"Swiss"],[u,g]],[/\b(zur\d{3}) b/i],[c,[p,"Swiss"],[u,v]],[/\b((zeki)?tb.*\b) b/i],[c,[p,"Zeki"],[u,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],c,[u,v]],[/\b(ns-?\w{0,9}) b/i],[c,[p,"Insignia"],[u,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[p,"NextBook"],[u,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],c,[u,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],c,[u,g]],[/\b(ph-1) /i],[c,[p,"Essential"],[u,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[p,"Envizen"],[u,v]],[/\b(trio[-\w\. ]+) b/i],[c,[p,"MachSpeed"],[u,v]],[/\btu_(1491) b/i],[c,[p,"Rotor"],[u,v]],[/(shield[\w ]+) b/i],[c,[p,"Nvidia"],[u,v]],[/(sprint) (\w+)/i],[p,c,[u,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[p,O],[u,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[p,B],[u,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[p,B],[u,g]],[/smart-tv.+(samsung)/i],[p,[u,k]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[p,D],[u,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,"LG"],[u,k]],[/(apple) ?tv/i],[p,[c,S+" TV"],[u,k]],[/crkey/i],[[c,z+"cast"],[p,E],[u,k]],[/droid.+aft(\w)( bui|\))/i],[c,[p,_],[u,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[p,P],[u,k]],[/(bravia[\w ]+)( bui|\))/i],[c,[p,R],[u,k]],[/(mitv-\w{5}) bui/i],[c,[p,M],[u,k]],[/Hbbtv.*(technisat) (.*);/i],[p,c,[u,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,H],[c,H],[u,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,c,[u,h]],[/droid.+; (shield) bui/i],[c,[p,"Nvidia"],[u,h]],[/(playstation [345portablevi]+)/i],[c,[p,R],[u,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[p,O],[u,h]],[/((pebble))app/i],[p,c,[u,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[p,S],[u,x]],[/droid.+; (glass) \d/i],[c,[p,E],[u,x]],[/droid.+; (wt63?0{2,3})\)/i],[c,[p,B],[u,x]],[/(quest( 2| pro)?)/i],[c,[p,V],[u,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[u,y]],[/(aeobc)\b/i],[c,[p,_],[u,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[u,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[u,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[u,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[d,[m,X,K]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,"Windows"],[m,X,K]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,I],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,m],[/\(bb(10);/i],[m,[d,N]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[d,A+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[d,z+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,G],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,m],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,m]]},Y=function(i,e){if(typeof i===b&&(e=i,i=t),!(this instanceof Y))return new Y(i,e).getResult();var o=typeof r!==s&&r.navigator?r.navigator:t,a=i||(o&&o.userAgent?o.userAgent:""),h=o&&o.userAgentData?o.userAgentData:t,k=e?Z(Q,e):Q,x=o&&o.userAgent==a;return this.getBrowser=function(){var i,e={};return e[d]=t,e[m]=t,$.call(e,a,k.browser),e[l]=typeof(i=e[m])===w?i.replace(/[^\d\.]/g,"").split(".")[0]:t,x&&o&&o.brave&&typeof o.brave.isBrave==n&&(e[d]="Brave"),e},this.getCPU=function(){var i={};return i[f]=t,$.call(i,a,k.cpu),i},this.getDevice=function(){var i={};return i[p]=t,i[c]=t,i[u]=t,$.call(i,a,k.device),x&&!i[u]&&h&&h.mobile&&(i[u]=g),x&&"Macintosh"==i[c]&&o&&typeof o.standalone!==s&&o.maxTouchPoints&&o.maxTouchPoints>2&&(i[c]="iPad",i[u]=v),i},this.getEngine=function(){var i={};return i[d]=t,i[m]=t,$.call(i,a,k.engine),i},this.getOS=function(){var i={};return i[d]=t,i[m]=t,$.call(i,a,k.os),x&&!i[d]&&h&&"Unknown"!=h.platform&&(i[d]=h.platform.replace(/chrome os/i,G).replace(/macos/i,I)),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return a},this.setUA=function(i){return a=typeof i===w&&i.length>350?H(i,350):i,this},this.setUA(a),this};Y.VERSION="1.0.35",Y.BROWSER=L([d,m,l]),Y.CPU=L([f]),Y.DEVICE=L([c,p,u,h,g,k,v,x,y]),Y.ENGINE=Y.OS=L([d,m]),typeof e!==s?(i.exports&&(e=i.exports=Y),e.UAParser=Y):o.amdO?(a=(function(){return Y}).call(e,o,e,i),t!==a&&(i.exports=a)):typeof r!==s&&(r.UAParser=Y);var J=typeof r!==s&&(r.jQuery||r.Zepto);if(J&&!J.ua){var ii=new Y;J.ua=ii.getResult(),J.ua.get=function(){return ii.getUA()},J.ua.set=function(i){ii.setUA(i);var e=ii.getResult();for(var o in e)J.ua[o]=e[o]}}}("object"==typeof window?window:this)}}]);