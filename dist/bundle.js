import{createRequire as e}from"module";var t={738:(e,t,s)=>{const n=s(147),r=s(17),o=s(37),i=s(968).version,a=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function d(e){console.log(`[dotenv@${i}][DEBUG] ${e}`)}const c={config:function(e){let t=r.resolve(process.cwd(),".env"),s="utf8";const i=Boolean(e&&e.debug),a=Boolean(e&&e.override);var u;e&&(null!=e.path&&(t="~"===(u=e.path)[0]?r.join(o.homedir(),u.slice(1)):u),null!=e.encoding&&(s=e.encoding));try{const e=c.parse(n.readFileSync(t,{encoding:s}));return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?(!0===a&&(process.env[t]=e[t]),i&&d(!0===a?`"${t}" is already defined in \`process.env\` and WAS overwritten`:`"${t}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[t]=e[t]})),{parsed:e}}catch(e){return i&&d(`Failed to load ${t} ${e.message}`),{error:e}}},parse:function(e){const t={};let s,n=e.toString();for(n=n.replace(/\r\n?/gm,"\n");null!=(s=a.exec(n));){const e=s[1];let n=s[2]||"";n=n.trim();const r=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===r&&(n=n.replace(/\\n/g,"\n"),n=n.replace(/\\r/g,"\r")),t[e]=n}return t}};e.exports.config=c.config,e.exports.parse=c.parse,e.exports=c},147:t=>{t.exports=e(import.meta.url)("fs")},37:t=>{t.exports=e(import.meta.url)("os")},17:t=>{t.exports=e(import.meta.url)("path")},968:e=>{e.exports=JSON.parse('{"name":"dotenv","version":"16.0.3","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"require":"./lib/main.js","types":"./lib/main.d.ts","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^17.0.9","decache":"^4.6.1","dtslint":"^3.7.0","sinon":"^12.0.1","standard":"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2","tap":"^15.1.6","tar":"^6.1.11","typescript":"^4.5.4"},"engines":{"node":">=12"}}')}},s={};function n(e){var r=s[e];if(void 0!==r)return r.exports;var o=s[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const t=e(import.meta.url)("http");n(738).config();const s={PORT:process.env.PORT||4e3,NODE_ENV:"production"},r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o=function(e){return"string"==typeof e&&r.test(e)},i=e(import.meta.url)("crypto");var a=n.n(i);const d={randomUUID:a().randomUUID},c=new Uint8Array(256);let u=c.length;function p(){return u>c.length-16&&(a().randomFillSync(c),u=0),c.slice(u,u+=16)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));const g=function(e,t,s){if(d.randomUUID&&!t&&!e)return d.randomUUID();const n=(e=e||{}).random||(e.rng||p)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){s=s||0;for(let e=0;e<16;++e)t[s+e]=n[e];return t}return function(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}(n)};class f{static httpMethodsWithBody=["POST","PUT"];requests={GET:{},POST:{},PUT:{},DELETE:{}};async handleRequest(e,t){const s=e.method,n=this.requests[s],r=this.findMatchingHandler(e,n);if(r)return await this.enrichRequestWithBodyIfRequired(e),t.setHeader("Content-Type","application/json"),r(e,t);t.statusCode=404,t.write("The request doesn't exist"),t.end()}async enrichRequestWithBodyIfRequired(e){if(f.httpMethodsWithBody.includes(e.method)){const t=await f.getRequestBody(e)||{};e.body=t}}findMatchingHandler(e,t){let s;for(const n in t){const r=this.getRegexpFromPath(n);r.test(e.url)&&(e.parameters=e.url.match(r)?.groups||{},s=t[n])}return s}getRegexpFromPath(e){const t=e.replace(/(.*)({(.*)})/,"$1(?<$3>.*)");return new RegExp(t)}get(e,t){this.requests.GET[e]=t}post(e,t){this.requests.POST[e]=t}put(e,t){this.requests.PUT[e]=t}delete(e,t){this.requests.DELETE[e]=t}static getRequestBody(e){let t="";return e.on("data",(e=>{t+=e.toString()})),new Promise(((s,n)=>{e.on("end",(()=>{try{const e=JSON.parse(t);s(e)}catch(e){n(e)}s()})),e.on("error",(e=>{n(e)}))}))}getInstance(){return this}}const m={isUserDataValid(e){const t=e.username&&"string"==typeof e.username,s=isFinite(e.age)&&e.age>=0,n=Array.isArray(e.hobbies)&&e.hobbies.every((e=>"string"==typeof e));return t&&s&&n}};process.USERS=[];const y=async e=>process.USERS.find((t=>t.id===e)),h=y,v=new f,w=(e,t)=>{const s=o(t)&&4===function(e){if(!o(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}(t);return s||(e.statusCode=400,e.write(JSON.stringify({message:"The user id is not valid uuid"})),e.end()),s};v.get("/api/users",(async(e,t)=>{t.write(JSON.stringify(await(async()=>process.USERS)())),t.statusCode=200,t.end()})),v.get("/api/users/{userId}",(async(e,t)=>{const{userId:s}=e.parameters,n=JSON.stringify(await h(s));w(t,s)&&(n?(t.write(n),t.statusCode=200):(t.statusCode=404,t.write(JSON.stringify({message:"The user is not found"}))),t.end())})),v.post("/api/users",(async(e,t)=>{const s=e.body;if(!m.isUserDataValid(s))return t.statusCode=400,t.write(JSON.stringify({message:"Invalid data for request"})),void t.end();const n={id:g(),username:s.username,age:s.age,hobbies:s.hobbies},r=await(async e=>(process.USERS.push(e),e))(n);t.statusCode=201,t.end(JSON.stringify(r))})),v.put("/api/users/{userId}",(async(e,t)=>{const{userId:s}=e.parameters,n=e.body,r=await h(s);if(w(t,s)){if(r){if(!m.isUserDataValid(n))return t.statusCode=400,t.write(JSON.stringify({message:"Invalid data for request"})),void t.end();const e=await(async(e,t)=>{let s=await y(e);return Object.assign(s,{username:t.username,age:t.age,hobbies:t.hobbies})})(s,n);t.statusCode=200,t.write(JSON.stringify(e))}else t.statusCode=404,t.write(JSON.stringify({message:"The user is not found"}));t.end()}})),v.delete("/api/users/{userId}",(async(e,t)=>{const{userId:s}=e.parameters;w(t,s)&&(await(async e=>{let t;const s=process.USERS.findIndex((t=>t.id===e));return s>-1&&(t=process.USERS.splice(s,1)[0]),t})(s)?(t.statusCode=204,t.write(JSON.stringify({message:"The user has been deleted"}))):(t.statusCode=404,t.write(JSON.stringify({message:"The user is not found"}))),t.end())}));const b=v,{PORT:S}=s;(async()=>{const e=(0,t.createServer)((async(e,t)=>{console.log("The request was handled on port: "+S);try{await b.handleRequest(e,t)}catch(e){(e=>{e.statusCode=500,e.write("Something was wrong on server side"),e.end()})(t)}}));await new Promise(((t,s)=>{e.listen(S,(async()=>{console.log(`Server is listening on port ${S}`),t(e)}))}))})()})();