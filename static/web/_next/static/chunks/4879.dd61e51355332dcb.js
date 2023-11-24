"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4879],{44879:function(e,t,n){n.r(t),n.d(t,{shell:function(){return u}});var r={};function define(e,t){for(var n=0;n<t.length;n++)r[t[n]]=e}var o=["true","false"],i=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],s=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function tokenBase(e,t){if(e.eatSpace())return null;var n=e.sol(),o=e.next();if("\\"===o)return e.next(),null;if("'"===o||'"'===o||"`"===o)return t.tokens.unshift(tokenString(o,"`"===o?"quote":"string")),tokenize(e,t);if("#"===o)return n&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment");if("$"===o)return t.tokens.unshift(tokenDollar),tokenize(e,t);if("+"===o||"="===o)return"operator";if("-"===o)return e.eat("-"),e.eatWhile(/\w/),"attribute";if("<"==o){if(e.match("<<"))return"operator";var i=e.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);if(i)return t.tokens.unshift(tokenHeredoc(i[1]||i[2])),"string.special"}if(/\d/.test(o)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number";e.eatWhile(/[\w-]/);var s=e.current();return"="===e.peek()&&/\w+/.test(s)?"def":r.hasOwnProperty(s)?r[s]:null}function tokenString(e,t){var n="("==e?")":"{"==e?"}":e;return function(r,o){for(var i,s=!1;null!=(i=r.next());){if(i!==n||s){if("$"!==i||s||"'"===e||r.peek()==n){if(!s&&e!==n&&i===e)return o.tokens.unshift(tokenString(e,t)),tokenize(r,o);if(!s&&/['"]/.test(i)&&!/['"]/.test(e)){o.tokens.unshift(tokenStringStart(i,"string")),r.backUp(1);break}}else{s=!0,r.backUp(1),o.tokens.unshift(tokenDollar);break}}else{o.tokens.shift();break}s=!s&&"\\"===i}return t}}function tokenStringStart(e,t){return function(n,r){return r.tokens[0]=tokenString(e,t),n.next(),tokenize(n,r)}}define("atom",o),define("keyword",i),define("builtin",s);var tokenDollar=function(e,t){t.tokens.length>1&&e.eat("$");var n=e.next();return/['"({]/.test(n)?(t.tokens[0]=tokenString(n,"("==n?"quote":"{"==n?"def":"string"),tokenize(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),"def")};function tokenHeredoc(e){return function(t,n){return t.sol()&&t.string==e&&n.tokens.shift(),t.skipToEnd(),"string.special"}}function tokenize(e,t){return(t.tokens[0]||tokenBase)(e,t)}let u={name:"shell",startState:function(){return{tokens:[]}},token:function(e,t){return tokenize(e,t)},languageData:{autocomplete:o.concat(i,s),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}}}}]);