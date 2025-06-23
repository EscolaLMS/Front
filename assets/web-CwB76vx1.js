import{bV as m,bW as y,bX as v,bY as M,bZ as ee,b_ as j,b$ as Ee,c0 as _e,c1 as Ne,c2 as Ce,c3 as Oe,c4 as k,c5 as A,c6 as De}from"./index-B2DLdQWL.js";import"./sentry-DZqhWugq.js";import"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";const te="@firebase/installations",K="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=1e4,ie=`w:${K}`,oe="FIS_v2",Pe="https://firebaseinstallations.googleapis.com/v1",Re=60*60*1e3,Me="installations",je="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},g=new ee(Me,je,Ke);function re(e){return e instanceof Ee&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae({projectId:e}){return`${Pe}/projects/${e}/installations`}function se(e){return{token:e.token,requestStatus:2,expiresIn:$e(e.expiresIn),creationTime:Date.now()}}async function ce(e,t){const i=(await t.json()).error;return g.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ue({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Fe(e,{refreshToken:t}){const n=ue(e);return n.append("Authorization",qe(t)),n}async function de(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $e(e){return Number(e.replace("s","000"))}function qe(e){return`${oe} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=ae(e),o=ue(e),r=t.getImmediate({optional:!0});if(r){const d=await r.getHeartbeatsHeader();d&&o.append("x-firebase-client",d)}const a={fid:n,authVersion:oe,appId:e.appId,sdkVersion:ie},c={method:"POST",headers:o,body:JSON.stringify(a)},f=await de(()=>fetch(i,c));if(f.ok){const d=await f.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:se(d.authToken)}}else throw await ce("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=/^[cdef][\w-]{21}$/,P="";function Be(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=He(e);return Ve.test(n)?n:P}catch{return P}}function He(e){return xe(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function pe(e,t){const n=I(e);ge(n,t),Ue(n,t)}function ge(e,t){const n=le.get(e);if(n)for(const i of n)i(t)}function Ue(e,t){const n=We();n&&n.postMessage({key:e,fid:t}),Ge()}let p=null;function We(){return!p&&"BroadcastChannel"in self&&(p=new BroadcastChannel("[Firebase] FID Change"),p.onmessage=e=>{ge(e.data.key,e.data.fid)}),p}function Ge(){le.size===0&&p&&(p.close(),p=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="firebase-installations-database",Ye=1,h="firebase-installations-store";let E=null;function F(){return E||(E=j(Je,Ye,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(h)}}})),E}async function T(e,t){const n=I(e),o=(await F()).transaction(h,"readwrite"),r=o.objectStore(h),a=await r.get(n);return await r.put(t,n),await o.done,(!a||a.fid!==t.fid)&&pe(e,t.fid),t}async function he(e){const t=I(e),i=(await F()).transaction(h,"readwrite");await i.objectStore(h).delete(t),await i.done}async function S(e,t){const n=I(e),o=(await F()).transaction(h,"readwrite"),r=o.objectStore(h),a=await r.get(n),c=t(a);return c===void 0?await r.delete(n):await r.put(c,n),await o.done,c&&(!a||a.fid!==c.fid)&&pe(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e){let t;const n=await S(e.appConfig,i=>{const o=ze(i),r=Xe(e,o);return t=r.registrationPromise,r.installationEntry});return n.fid===P?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ze(e){const t=e||{fid:Be(),registrationStatus:0};return we(t)}function Xe(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(g.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Qe(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ze(e)}:{installationEntry:t}}async function Qe(e,t){try{const n=await Le(e,t);return T(e.appConfig,n)}catch(n){throw re(n)&&n.customData.serverCode===409?await he(e.appConfig):await T(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ze(e){let t=await W(e.appConfig);for(;t.registrationStatus===1;)await fe(100),t=await W(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await $(e);return i||n}return t}function W(e){return S(e,t=>{if(!t)throw g.create("installation-not-found");return we(t)})}function we(e){return et(e)?{fid:e.fid,registrationStatus:0}:e}function et(e){return e.registrationStatus===1&&e.registrationTime+ne<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt({appConfig:e,heartbeatServiceProvider:t},n){const i=nt(e,n),o=Fe(e,n),r=t.getImmediate({optional:!0});if(r){const d=await r.getHeartbeatsHeader();d&&o.append("x-firebase-client",d)}const a={installation:{sdkVersion:ie,appId:e.appId}},c={method:"POST",headers:o,body:JSON.stringify(a)},f=await de(()=>fetch(i,c));if(f.ok){const d=await f.json();return se(d)}else throw await ce("Generate Auth Token",f)}function nt(e,{fid:t}){return`${ae(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){let n;const i=await S(e.appConfig,r=>{if(!be(r))throw g.create("not-registered");const a=r.authToken;if(!t&&rt(a))return r;if(a.requestStatus===1)return n=it(e,t),r;{if(!navigator.onLine)throw g.create("app-offline");const c=st(r);return n=ot(e,c),c}});return n?await n:i.authToken}async function it(e,t){let n=await G(e.appConfig);for(;n.authToken.requestStatus===1;)await fe(100),n=await G(e.appConfig);const i=n.authToken;return i.requestStatus===0?q(e,t):i}function G(e){return S(e,t=>{if(!be(t))throw g.create("not-registered");const n=t.authToken;return ct(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ot(e,t){try{const n=await tt(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await T(e.appConfig,i),n}catch(n){if(re(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await he(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await T(e.appConfig,i)}throw n}}function be(e){return e!==void 0&&e.registrationStatus===2}function rt(e){return e.requestStatus===2&&!at(e)}function at(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Re}function st(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ct(e){return e.requestStatus===1&&e.requestTime+ne<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e){const t=e,{installationEntry:n,registrationPromise:i}=await $(t);return i?i.catch(console.error):q(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t=!1){const n=e;return await ft(n),(await q(n,t)).token}async function ft(e){const{registrationPromise:t}=await $(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e){if(!e||!e.options)throw _("App Configuration");if(!e.name)throw _("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw _(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function _(e){return g.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="installations",pt="installations-internal",gt=e=>{const t=e.getProvider("app").getImmediate(),n=lt(t),i=M(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},ht=e=>{const t=e.getProvider("app").getImmediate(),n=M(t,me).getImmediate();return{getId:()=>ut(n),getToken:o=>dt(n,o)}};function wt(){y(new v(me,gt,"PUBLIC")),y(new v(pt,ht,"PRIVATE"))}wt();m(te,K);m(te,K,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="/firebase-messaging-sw.js",mt="/firebase-cloud-messaging-push-scope",ye="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",yt="https://fcmregistrations.googleapis.com/v1",ve="google.c.a.c_id",vt="google.c.a.c_l",Tt="google.c.a.ts",kt="google.c.a.e";var J;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(J||(J={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var b;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(b||(b={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function It(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let r=0;r<i.length;++r)o[r]=i.charCodeAt(r);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="fcm_token_details_db",St=5,Y="fcm_token_object_Store";async function At(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(N))return null;let t=null;return(await j(N,St,{upgrade:async(i,o,r,a)=>{var c;if(o<2||!i.objectStoreNames.contains(Y))return;const f=a.objectStore(Y),d=await f.index("fcmSenderId").get(e);if(await f.clear(),!!d){if(o===2){const s=d;if(!s.auth||!s.p256dh||!s.endpoint)return;t={token:s.fcmToken,createTime:(c=s.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:s.auth,p256dh:s.p256dh,endpoint:s.endpoint,swScope:s.swScope,vapidKey:typeof s.vapidKey=="string"?s.vapidKey:l(s.vapidKey)}}}else if(o===3){const s=d;t={token:s.fcmToken,createTime:s.createTime,subscriptionOptions:{auth:l(s.auth),p256dh:l(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:l(s.vapidKey)}}}else if(o===4){const s=d;t={token:s.fcmToken,createTime:s.createTime,subscriptionOptions:{auth:l(s.auth),p256dh:l(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:l(s.vapidKey)}}}}}})).close(),await A(N),await A("fcm_vapid_details_db"),await A("undefined"),Et(t)?t:null}function Et(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="firebase-messaging-database",Nt=1,w="firebase-messaging-store";let C=null;function L(){return C||(C=j(_t,Nt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),C}async function Te(e){const t=V(e),i=await(await L()).transaction(w).objectStore(w).get(t);if(i)return i;{const o=await At(e.appConfig.senderId);if(o)return await x(e,o),o}}async function x(e,t){const n=V(e),o=(await L()).transaction(w,"readwrite");return await o.objectStore(w).put(t,n),await o.done,t}async function Ct(e){const t=V(e),i=(await L()).transaction(w,"readwrite");await i.objectStore(w).delete(t),await i.done}function V({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},u=new ee("messaging","Messaging",Ot);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t){const n=await H(e),i=Ie(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{r=await(await fetch(B(e.appConfig),o)).json()}catch(a){throw u.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(r.error){const a=r.error.message;throw u.create("token-subscribe-failed",{errorInfo:a})}if(!r.token)throw u.create("token-subscribe-no-token");return r.token}async function Pt(e,t){const n=await H(e),i=Ie(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{r=await(await fetch(`${B(e.appConfig)}/${t.token}`,o)).json()}catch(a){throw u.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(r.error){const a=r.error.message;throw u.create("token-update-failed",{errorInfo:a})}if(!r.token)throw u.create("token-update-no-token");return r.token}async function ke(e,t){const i={method:"DELETE",headers:await H(e)};try{const r=await(await fetch(`${B(e.appConfig)}/${t}`,i)).json();if(r.error){const a=r.error.message;throw u.create("token-unsubscribe-failed",{errorInfo:a})}}catch(o){throw u.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function B({projectId:e}){return`${yt}/projects/${e}/registrations`}async function H({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ie({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==ye&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=7*24*60*60*1e3;async function Mt(e){const t=await Ft(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:l(t.getKey("auth")),p256dh:l(t.getKey("p256dh"))},i=await Te(e.firebaseDependencies);if(i){if($t(i.subscriptionOptions,n))return Date.now()>=i.createTime+Rt?Kt(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await ke(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return z(e.firebaseDependencies,n)}else return z(e.firebaseDependencies,n)}async function jt(e){const t=await Te(e.firebaseDependencies);t&&(await ke(e.firebaseDependencies,t.token),await Ct(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Kt(e,t){try{const n=await Pt(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await x(e.firebaseDependencies,i),n}catch(n){throw n}}async function z(e,t){const i={token:await Dt(e,t),createTime:Date.now(),subscriptionOptions:t};return await x(e,i),i.token}async function Ft(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:It(t)})}function $t(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&i&&o&&r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return qt(t,e),Lt(t,e),xt(t,e),t}function qt(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const r=t.notification.icon;r&&(e.notification.icon=r)}function Lt(e,t){t.data&&(e.data=t.data)}function xt(e,t){var n,i,o,r,a;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(o=(i=t.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(r=t.notification)===null||r===void 0?void 0:r.click_action;c&&(e.fcmOptions.link=c);const f=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;f&&(e.fcmOptions.analyticsLabel=f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){return typeof e=="object"&&!!e&&ve in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){if(!e||!e.options)throw O("App Configuration Object");if(!e.name)throw O("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw O(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function O(e){return u.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Bt(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e){try{e.swRegistration=await navigator.serviceWorker.register(bt,{scope:mt}),e.swRegistration.update().catch(()=>{})}catch(t){throw u.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){if(!t&&!e.swRegistration&&await Se(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw u.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=ye)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){if(!navigator)throw u.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw u.create("permission-blocked");return await Wt(e,t==null?void 0:t.vapidKey),await Ut(e,t==null?void 0:t.serviceWorkerRegistration),Mt(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t,n){const i=Jt(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[ve],message_name:n[vt],message_time:n[Tt],message_device_time:Math.floor(Date.now()/1e3)})}function Jt(e){switch(e){case b.NOTIFICATION_CLICKED:return"notification_open";case b.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===b.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(X(n)):e.onMessageHandler.next(X(n)));const i=n.data;Vt(i)&&i[kt]==="1"&&await Gt(e,n.messageType,i)}const Q="@firebase/messaging",Z="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=e=>{const t=new Ht(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Yt(t,n)),t},Xt=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>Ae(t,i)}};function Qt(){y(new v("messaging",zt,"PUBLIC")),y(new v("messaging-internal",Xt,"PRIVATE")),m(Q,Z),m(Q,Z,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R(){try{await Ne()}catch{return!1}return typeof window<"u"&&Ce()&&Oe()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e){if(!navigator)throw u.create("only-available-in-window");return e.swRegistration||await Se(e),jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){if(!navigator)throw u.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e=_e()){return R().then(t=>{if(!t)throw u.create("unsupported-browser")},t=>{throw u.create("indexed-db-unsupported")}),M(k(e),"messaging").getImmediate()}async function tn(e,t){return e=k(e),Ae(e,t)}function nn(e){return e=k(e),Zt(e)}function on(e,t){return e=k(e),en(e,t)}Qt();class U extends De{constructor(){super(),R().then(t=>{if(!t)return;const n=D();on(n,i=>this.handleNotificationReceived(i))})}async checkPermissions(){return{receive:this.convertNotificationPermissionToPermissionState(Notification.permission)}}async requestPermissions(){const t=await Notification.requestPermission();return{receive:this.convertNotificationPermissionToPermissionState(t)}}async isSupported(){return{isSupported:await R()}}async getToken(t){const n=D();return{token:await tn(n,{vapidKey:t.vapidKey,serviceWorkerRegistration:t.serviceWorkerRegistration})}}async deleteToken(){const t=D();await nn(t)}async getDeliveredNotifications(){this.throwUnavailableError()}async removeDeliveredNotifications(t){this.throwUnavailableError()}async removeAllDeliveredNotifications(){this.throwUnavailableError()}async subscribeToTopic(t){this.throwUnavailableError()}async unsubscribeFromTopic(t){this.throwUnavailableError()}async createChannel(t){this.throwUnavailableError()}async deleteChannel(t){this.throwUnavailableError()}async listChannels(){this.throwUnavailableError()}handleNotificationReceived(t){const i={notification:this.createNotificationResult(t)};this.notifyListeners(U.notificationReceivedEvent,i)}createNotificationResult(t){var n,i,o;return{body:(n=t.notification)===null||n===void 0?void 0:n.body,data:t.data,id:t.messageId,image:(i=t.notification)===null||i===void 0?void 0:i.image,title:(o=t.notification)===null||o===void 0?void 0:o.title}}convertNotificationPermissionToPermissionState(t){let n="prompt";switch(t){case"granted":n="granted";break;case"denied":n="denied";break}return n}throwUnavailableError(){throw this.unavailable("Not available on web.")}}U.notificationReceivedEvent="notificationReceived";export{U as FirebaseMessagingWeb};
//# sourceMappingURL=web-CwB76vx1.js.map
