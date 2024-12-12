import{e as H,r as z,q as Y,b as Me,h as se,j as C,y as Oe,o as Te,K as ge,N as xe,n as W,ax as ke,ai as Se,k as De,m as me,C as Re,V as _e}from"./index-CfziJAoE.js";import{m as K,e as Ee,b as ve,c as Le,a as Ie,S as Ae}from"./swiper-react-Cy9-RP1Q.js";import{c as te,a as $e,N as je,A as Be}from"./a11y-m8EKkMlX.js";function Pe(n){let{swiper:t,extendParams:p,on:e,emit:a}=n;const o="swiper-pagination";p({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:r=>r,formatFractionTotal:r=>r,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let h,c=0;function u(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function w(r,i){const{bulletActiveClass:f}=t.params.pagination;r&&(r=r[`${i==="prev"?"previous":"next"}ElementSibling`],r&&(r.classList.add(`${f}-${i}`),r=r[`${i==="prev"?"previous":"next"}ElementSibling`],r&&r.classList.add(`${f}-${i}-${i}`)))}function v(r,i,f){if(r=r%f,i=i%f,i===r+1)return"next";if(i===r-1)return"previous"}function y(r){const i=r.target.closest(te(t.params.pagination.bulletClass));if(!i)return;r.preventDefault();const f=ve(i)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===f)return;const M=v(t.realIndex,f,t.slides.length);M==="next"?t.slideNext():M==="previous"?t.slidePrev():t.slideToLoop(f)}else t.slideTo(f)}function g(){const r=t.rtl,i=t.params.pagination;if(u())return;let f=t.pagination.el;f=K(f);let M,_;const L=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,X=t.params.loop?Math.ceil(L/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(_=t.previousRealIndex||0,M=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(M=t.snapIndex,_=t.previousSnapIndex):(_=t.previousIndex||0,M=t.activeIndex||0),i.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const E=t.pagination.bullets;let A,N,l;if(i.dynamicBullets&&(h=Ee(E[0],t.isHorizontal()?"width":"height"),f.forEach(s=>{s.style[t.isHorizontal()?"width":"height"]=`${h*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&_!==void 0&&(c+=M-(_||0),c>i.dynamicMainBullets-1?c=i.dynamicMainBullets-1:c<0&&(c=0)),A=Math.max(M-c,0),N=A+(Math.min(E.length,i.dynamicMainBullets)-1),l=(N+A)/2),E.forEach(s=>{const d=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(m=>`${i.bulletActiveClass}${m}`)].map(m=>typeof m=="string"&&m.includes(" ")?m.split(" "):m).flat();s.classList.remove(...d)}),f.length>1)E.forEach(s=>{const d=ve(s);d===M?s.classList.add(...i.bulletActiveClass.split(" ")):t.isElement&&s.setAttribute("part","bullet"),i.dynamicBullets&&(d>=A&&d<=N&&s.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),d===A&&w(s,"prev"),d===N&&w(s,"next"))});else{const s=E[M];if(s&&s.classList.add(...i.bulletActiveClass.split(" ")),t.isElement&&E.forEach((d,m)=>{d.setAttribute("part",m===M?"bullet-active":"bullet")}),i.dynamicBullets){const d=E[A],m=E[N];for(let x=A;x<=N;x+=1)E[x]&&E[x].classList.add(...`${i.bulletActiveClass}-main`.split(" "));w(d,"prev"),w(m,"next")}}if(i.dynamicBullets){const s=Math.min(E.length,i.dynamicMainBullets+4),d=(h*s-h)/2-l*h,m=r?"right":"left";E.forEach(x=>{x.style[t.isHorizontal()?m:"top"]=`${d}px`})}}f.forEach((E,A)=>{if(i.type==="fraction"&&(E.querySelectorAll(te(i.currentClass)).forEach(N=>{N.textContent=i.formatFractionCurrent(M+1)}),E.querySelectorAll(te(i.totalClass)).forEach(N=>{N.textContent=i.formatFractionTotal(X)})),i.type==="progressbar"){let N;i.progressbarOpposite?N=t.isHorizontal()?"vertical":"horizontal":N=t.isHorizontal()?"horizontal":"vertical";const l=(M+1)/X;let s=1,d=1;N==="horizontal"?s=l:d=l,E.querySelectorAll(te(i.progressbarFillClass)).forEach(m=>{m.style.transform=`translate3d(0,0,0) scaleX(${s}) scaleY(${d})`,m.style.transitionDuration=`${t.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(E.innerHTML=i.renderCustom(t,M+1,X),A===0&&a("paginationRender",E)):(A===0&&a("paginationRender",E),a("paginationUpdate",E)),t.params.watchOverflow&&t.enabled&&E.classList[t.isLocked?"add":"remove"](i.lockClass)})}function R(){const r=t.params.pagination;if(u())return;const i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let f=t.pagination.el;f=K(f);let M="";if(r.type==="bullets"){let _=t.params.loop?Math.ceil(i/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&_>i&&(_=i);for(let L=0;L<_;L+=1)r.renderBullet?M+=r.renderBullet.call(t,L,r.bulletClass):M+=`<${r.bulletElement} ${t.isElement?'part="bullet"':""} class="${r.bulletClass}"></${r.bulletElement}>`}r.type==="fraction"&&(r.renderFraction?M=r.renderFraction.call(t,r.currentClass,r.totalClass):M=`<span class="${r.currentClass}"></span> / <span class="${r.totalClass}"></span>`),r.type==="progressbar"&&(r.renderProgressbar?M=r.renderProgressbar.call(t,r.progressbarFillClass):M=`<span class="${r.progressbarFillClass}"></span>`),t.pagination.bullets=[],f.forEach(_=>{r.type!=="custom"&&(_.innerHTML=M||""),r.type==="bullets"&&t.pagination.bullets.push(..._.querySelectorAll(te(r.bulletClass)))}),r.type!=="custom"&&a("paginationRender",f[0])}function b(){t.params.pagination=$e(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const r=t.params.pagination;if(!r.el)return;let i;typeof r.el=="string"&&t.isElement&&(i=t.el.querySelector(r.el)),!i&&typeof r.el=="string"&&(i=[...document.querySelectorAll(r.el)]),i||(i=r.el),!(!i||i.length===0)&&(t.params.uniqueNavElements&&typeof r.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...t.el.querySelectorAll(r.el)],i.length>1&&(i=i.filter(f=>Le(f,".swiper")[0]===t.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(t.pagination,{el:i}),i=K(i),i.forEach(f=>{r.type==="bullets"&&r.clickable&&f.classList.add(...(r.clickableClass||"").split(" ")),f.classList.add(r.modifierClass+r.type),f.classList.add(t.isHorizontal()?r.horizontalClass:r.verticalClass),r.type==="bullets"&&r.dynamicBullets&&(f.classList.add(`${r.modifierClass}${r.type}-dynamic`),c=0,r.dynamicMainBullets<1&&(r.dynamicMainBullets=1)),r.type==="progressbar"&&r.progressbarOpposite&&f.classList.add(r.progressbarOppositeClass),r.clickable&&f.addEventListener("click",y),t.enabled||f.classList.add(r.lockClass)}))}function I(){const r=t.params.pagination;if(u())return;let i=t.pagination.el;i&&(i=K(i),i.forEach(f=>{f.classList.remove(r.hiddenClass),f.classList.remove(r.modifierClass+r.type),f.classList.remove(t.isHorizontal()?r.horizontalClass:r.verticalClass),r.clickable&&(f.classList.remove(...(r.clickableClass||"").split(" ")),f.removeEventListener("click",y))})),t.pagination.bullets&&t.pagination.bullets.forEach(f=>f.classList.remove(...r.bulletActiveClass.split(" ")))}e("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const r=t.params.pagination;let{el:i}=t.pagination;i=K(i),i.forEach(f=>{f.classList.remove(r.horizontalClass,r.verticalClass),f.classList.add(t.isHorizontal()?r.horizontalClass:r.verticalClass)})}),e("init",()=>{t.params.pagination.enabled===!1?S():(b(),R(),g())}),e("activeIndexChange",()=>{typeof t.snapIndex>"u"&&g()}),e("snapIndexChange",()=>{g()}),e("snapGridLengthChange",()=>{R(),g()}),e("destroy",()=>{I()}),e("enable disable",()=>{let{el:r}=t.pagination;r&&(r=K(r),r.forEach(i=>i.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),e("lock unlock",()=>{g()}),e("click",(r,i)=>{const f=i.target,M=K(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&M&&M.length>0&&!f.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&f===t.navigation.nextEl||t.navigation.prevEl&&f===t.navigation.prevEl))return;const _=M[0].classList.contains(t.params.pagination.hiddenClass);a(_===!0?"paginationShow":"paginationHide"),M.forEach(L=>L.classList.toggle(t.params.pagination.hiddenClass))}});const F=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:r}=t.pagination;r&&(r=K(r),r.forEach(i=>i.classList.remove(t.params.pagination.paginationDisabledClass))),b(),R(),g()},S=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:r}=t.pagination;r&&(r=K(r),r.forEach(i=>i.classList.add(t.params.pagination.paginationDisabledClass))),I()};Object.assign(t.pagination,{enable:F,disable:S,render:R,update:g,init:b,destroy:I})}var ie={},oe={},le={},ee={};Object.defineProperty(ee,"__esModule",{value:!0});ee.Direction=void 0;var be;(function(n){n.Right="to right",n.Left="to left",n.Down="to bottom",n.Up="to top"})(be||(ee.Direction=be={}));(function(n){var t=H&&H.__spreadArray||function(l,s,d){if(d||arguments.length===2)for(var m=0,x=s.length,k;m<x;m++)(k||!(m in s))&&(k||(k=Array.prototype.slice.call(s,0,m)),k[m]=s[m]);return l.concat(k||Array.prototype.slice.call(s))};Object.defineProperty(n,"__esModule",{value:!0}),n.isIOS=n.useThumbOverlap=n.assertUnreachable=n.voidFn=n.getTrackBackground=n.replaceAt=n.schd=n.translate=n.getClosestThumbIndex=n.translateThumbs=n.getPaddingAndBorder=n.getMargin=n.checkInitialOverlap=n.checkValuesAgainstBoundaries=n.checkBoundaries=n.isVertical=n.relativeValue=n.normalizeValue=n.isStepDivisible=n.isTouchEvent=n.getStepDecimals=void 0;var p=z,e=ee,a=function(l){var s=l.toString().split(".")[1];return s?s.length:0};n.getStepDecimals=a;function o(l){return l.touches&&l.touches.length||l.changedTouches&&l.changedTouches.length}n.isTouchEvent=o;function h(l,s,d){var m=(s-l)/d,x=8,k=Number(m.toFixed(x));return parseInt(k.toString(),10)===k}n.isStepDivisible=h;function c(l,s,d,m,x,k,D){var T=1e11;if(l=Math.round(l*T)/T,!k){var P=D[s-1],$=D[s+1];if(P&&P>l)return P;if($&&$<l)return $}if(l>m)return m;if(l<d)return d;var q=Math.floor(l*T-d*T)%Math.floor(x*T),U=Math.floor(l*T-Math.abs(q)),V=q===0?l:U/T,B=Math.abs(q/T)<x/2?V:V+x,G=(0,n.getStepDecimals)(x);return parseFloat(B.toFixed(G))}n.normalizeValue=c;function u(l,s,d){return(l-s)/(d-s)}n.relativeValue=u;function w(l){return l===e.Direction.Up||l===e.Direction.Down}n.isVertical=w;function v(l,s,d){if(s>=d)throw new RangeError("min (".concat(s,") is equal/bigger than max (").concat(d,")"));if(l<s)throw new RangeError("value (".concat(l,") is smaller than min (").concat(s,")"));if(l>d)throw new RangeError("value (".concat(l,") is bigger than max (").concat(d,")"))}n.checkBoundaries=v;function y(l,s,d){return l<s?s:l>d?d:l}n.checkValuesAgainstBoundaries=y;function g(l){if(!(l.length<2)&&!l.slice(1).every(function(s,d){return l[d]<=s}))throw new RangeError("values={[".concat(l,"]} needs to be sorted when allowOverlap={false}"))}n.checkInitialOverlap=g;function R(l){var s=window.getComputedStyle(l);return{top:parseInt(s["margin-top"],10),bottom:parseInt(s["margin-bottom"],10),left:parseInt(s["margin-left"],10),right:parseInt(s["margin-right"],10)}}n.getMargin=R;function b(l){var s=window.getComputedStyle(l);return{top:parseInt(s["padding-top"],10)+parseInt(s["border-top-width"],10),bottom:parseInt(s["padding-bottom"],10)+parseInt(s["border-bottom-width"],10),left:parseInt(s["padding-left"],10)+parseInt(s["border-left-width"],10),right:parseInt(s["padding-right"],10)+parseInt(s["border-right-width"],10)}}n.getPaddingAndBorder=b;function I(l,s,d){var m=d?-1:1;l.forEach(function(x,k){return S(x,m*s[k].x,s[k].y)})}n.translateThumbs=I;function F(l,s,d,m){for(var x=0,k=A(l[0],s,d,m),D=1;D<l.length;D++){var T=A(l[D],s,d,m);T<k&&(k=T,x=D)}return x}n.getClosestThumbIndex=F;function S(l,s,d){l.style.transform="translate(".concat(s,"px, ").concat(d,"px)")}n.translate=S;var r=function(l){var s=[],d=null,m=function(){for(var x=[],k=0;k<arguments.length;k++)x[k]=arguments[k];s=x,!d&&(d=requestAnimationFrame(function(){d=null,l.apply(void 0,s)}))};return m};n.schd=r;function i(l,s,d){var m=l.slice(0);return m[s]=d,m}n.replaceAt=i;function f(l){var s=l.values,d=l.colors,m=l.min,x=l.max,k=l.direction,D=k===void 0?e.Direction.Right:k,T=l.rtl,P=T===void 0?!1:T;P&&D===e.Direction.Right?D=e.Direction.Left:P&&e.Direction.Left&&(D=e.Direction.Right);var $=s.slice(0).sort(function(U,V){return U-V}).map(function(U){return(U-m)/(x-m)*100}),q=$.reduce(function(U,V,B){return"".concat(U,", ").concat(d[B]," ").concat(V,"%, ").concat(d[B+1]," ").concat(V,"%")},"");return"linear-gradient(".concat(D,", ").concat(d[0]," 0%").concat(q,", ").concat(d[d.length-1]," 100%)")}n.getTrackBackground=f;function M(){}n.voidFn=M;function _(l){throw new Error("Didn't expect to get here")}n.assertUnreachable=_;var L=function(l,s,d,m,x){x===void 0&&(x=function(D){return D});var k=Math.ceil(t([l],Array.from(l.children),!0).reduce(function(D,T){var P=Math.ceil(T.getBoundingClientRect().width);if(T.innerText&&T.innerText.includes(d)&&T.childElementCount===0){var $=T.cloneNode(!0);$.innerHTML=x(s.toFixed(m)),$.style.visibility="hidden",document.body.appendChild($),P=Math.ceil($.getBoundingClientRect().width),document.body.removeChild($)}return P>D?P:D},l.getBoundingClientRect().width));return k},X=function(l,s,d,m,x,k,D){D===void 0&&(D=function($){return $});var T=[],P=function($){var q=L(d[$],m[$],x,k,D),U=s[$].x;s.forEach(function(V,B){var G=V.x,Z=L(d[B],m[B],x,k,D);$!==B&&(U>=G&&U<=G+Z||U+q>=G&&U+q<=G+Z)&&(T.includes(B)||(T.push($),T.push(B),T=t(t([],T,!0),[$,B],!1),P(B)))})};return P(l),Array.from(new Set(T.sort()))},E=function(l,s,d,m,x,k){m===void 0&&(m=.1),x===void 0&&(x=" - "),k===void 0&&(k=function(B){return B});var D=(0,n.getStepDecimals)(m),T=(0,p.useState)({}),P=T[0],$=T[1],q=(0,p.useState)(k(s[d].toFixed(D))),U=q[0],V=q[1];return(0,p.useEffect)(function(){if(l){var B=l.getThumbs();if(B.length<1)return;var G={},Z=l.getOffsets(),ne=X(d,Z,B,s,x,D,k),ce=k(s[d].toFixed(D));if(ne.length){var ae=ne.reduce(function(J,pe,fe,he){return J.length?t(t([],J,!0),[Z[he[fe]].x],!1):[Z[he[fe]].x]},[]);if(Math.min.apply(Math,ae)===Z[d].x){var ue=[];ne.forEach(function(J){ue.push(s[J].toFixed(D))}),ce=Array.from(new Set(ue.sort(function(J,pe){return parseFloat(J)-parseFloat(pe)}))).map(k).join(x);var we=Math.min.apply(Math,ae),de=Math.max.apply(Math,ae),Ce=B[ne[ae.indexOf(de)]].getBoundingClientRect().width;G.left="".concat(Math.abs(we-(de+Ce))/2,"px"),G.transform="translate(-50%, 0)"}else G.visibility="hidden"}V(ce),$(G)}},[l,s]),[U,P]};n.useThumbOverlap=E;function A(l,s,d,m){var x=l.getBoundingClientRect(),k=x.left,D=x.top,T=x.width,P=x.height;return w(m)?Math.abs(d-(D+P/2)):Math.abs(s-(k+T/2))}var N=function(){var l,s=((l=navigator.userAgentData)===null||l===void 0?void 0:l.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(s)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};n.isIOS=N})(le);var ze=H&&H.__extends||function(){var n=function(t,p){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])},n(t,p)};return function(t,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");n(t,p);function e(){this.constructor=t}t.prototype=p===null?Object.create(p):(e.prototype=p.prototype,new e)}}(),Fe=H&&H.__createBinding||(Object.create?function(n,t,p,e){e===void 0&&(e=p);var a=Object.getOwnPropertyDescriptor(t,p);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[p]}}),Object.defineProperty(n,e,a)}:function(n,t,p,e){e===void 0&&(e=p),n[e]=t[p]}),Ne=H&&H.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),Ue=H&&H.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var p in n)p!=="default"&&Object.prototype.hasOwnProperty.call(n,p)&&Fe(t,n,p);return Ne(t,n),t},ye=H&&H.__spreadArray||function(n,t,p){if(p||arguments.length===2)for(var e=0,a=t.length,o;e<a;e++)(o||!(e in t))&&(o||(o=Array.prototype.slice.call(t,0,e)),o[e]=t[e]);return n.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(oe,"__esModule",{value:!0});var re=Ue(z),O=le,j=ee,He=["ArrowRight","ArrowUp","k","PageUp"],qe=["ArrowLeft","ArrowDown","j","PageDown"],Ve=function(n){ze(t,n);function t(p){var e=n.call(this,p)||this;if(e.trackRef=re.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(a,o){return o}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var a=e.props,o=a.direction,h=a.values,c=a.min,u=a.max,w=e.trackRef.current;if(!w)return console.warn("No track element found."),[];var v=w.getBoundingClientRect(),y=(0,O.getPaddingAndBorder)(w);return e.getThumbs().map(function(g,R){var b={x:0,y:0},I=g.getBoundingClientRect(),F=(0,O.getMargin)(g);switch(o){case j.Direction.Right:return b.x=(F.left+y.left)*-1,b.y=((I.height-v.height)/2+y.top)*-1,b.x+=v.width*(0,O.relativeValue)(h[R],c,u)-I.width/2,b;case j.Direction.Left:return b.x=(F.right+y.right)*-1,b.y=((I.height-v.height)/2+y.top)*-1,b.x+=v.width-v.width*(0,O.relativeValue)(h[R],c,u)-I.width/2,b;case j.Direction.Up:return b.x=((I.width-v.width)/2+F.left+y.left)*-1,b.y=-y.left,b.y+=v.height-v.height*(0,O.relativeValue)(h[R],c,u)-I.height/2,b;case j.Direction.Down:return b.x=((I.width-v.width)/2+F.left+y.left)*-1,b.y=-y.left,b.y+=v.height*(0,O.relativeValue)(h[R],c,u)-I.height/2,b;default:return(0,O.assertUnreachable)(o)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(a){return a.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(a){return e.getThumbs().findIndex(function(o){return o===a.target||o.contains(a.target)})},e.addTouchEvents=function(a){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(a){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(a){var o;if(!(a.button!==0||(0,O.isIOS)()))if(a.persist(),a.preventDefault(),e.addMouseEvents(a.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(c){var u;return(u=c.current)===null||u===void 0?void 0:u.contains(a.target)}))return;e.setState({draggedTrackPos:[a.clientX,a.clientY]},function(){return e.onMove(a.clientX,a.clientY)})}else{var h=(0,O.getClosestThumbIndex)(e.thumbRefs.map(function(c){return c.current}),a.clientX,a.clientY,e.props.direction);(o=e.thumbRefs[h].current)===null||o===void 0||o.focus(),e.setState({draggedThumbIndex:h},function(){return e.onMove(a.clientX,a.clientY)})}},e.onResize=function(){(0,O.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(a){var o;if(a.persist(),e.addTouchEvents(a.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(c){var u;return(u=c.current)===null||u===void 0?void 0:u.contains(a.target)}))return;e.setState({draggedTrackPos:[a.touches[0].clientX,a.touches[0].clientY]},function(){return e.onMove(a.touches[0].clientX,a.touches[0].clientY)})}else{var h=(0,O.getClosestThumbIndex)(e.thumbRefs.map(function(c){return c.current}),a.touches[0].clientX,a.touches[0].clientY,e.props.direction);(o=e.thumbRefs[h].current)===null||o===void 0||o.focus(),e.setState({draggedThumbIndex:h},function(){return e.onMove(a.touches[0].clientX,a.touches[0].clientY)})}},e.onMouseOrTouchStart=function(a){if(!e.props.disabled){var o=(0,O.isTouchEvent)(a);if(!(!o&&a.button!==0)){var h=e.getTargetIndex(a);h!==-1&&(o?e.addTouchEvents(a):e.addMouseEvents(a),e.setState({draggedThumbIndex:h,thumbZIndexes:e.state.thumbZIndexes.map(function(c,u){return u===h?Math.max.apply(Math,e.state.thumbZIndexes):c<=e.state.thumbZIndexes[h]?c:c-1})}))}}},e.onMouseMove=function(a){a.preventDefault(),e.onMove(a.clientX,a.clientY)},e.onTouchMove=function(a){a.preventDefault(),e.onMove(a.touches[0].clientX,a.touches[0].clientY)},e.onKeyDown=function(a){var o=e.props,h=o.values,c=o.onChange,u=o.step,w=o.rtl,v=o.direction,y=e.state.isChanged,g=e.getTargetIndex(a.nativeEvent),R=w||v===j.Direction.Left||v===j.Direction.Down?-1:1;g!==-1&&(He.includes(a.key)?(a.preventDefault(),e.setState({draggedThumbIndex:g,isChanged:!0}),c((0,O.replaceAt)(h,g,e.normalizeValue(h[g]+R*(a.key==="PageUp"?u*10:u),g)))):qe.includes(a.key)?(a.preventDefault(),e.setState({draggedThumbIndex:g,isChanged:!0}),c((0,O.replaceAt)(h,g,e.normalizeValue(h[g]-R*(a.key==="PageDown"?u*10:u),g)))):a.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){y&&e.fireOnFinalChange()}):y&&e.fireOnFinalChange())},e.onKeyUp=function(a){var o=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){o&&e.fireOnFinalChange()})},e.onMove=function(a,o){var h=e.state,c=h.draggedThumbIndex,u=h.draggedTrackPos,w=e.props,v=w.direction,y=w.min,g=w.max,R=w.onChange,b=w.values,I=w.step,F=w.rtl;if(c===-1&&u[0]===-1&&u[1]===-1)return null;var S=e.trackRef.current;if(!S)return null;var r=S.getBoundingClientRect(),i=(0,O.isVertical)(v)?r.height:r.width;if(u[0]!==-1&&u[1]!==-1){var f=a-u[0],M=o-u[1],_=0;switch(v){case j.Direction.Right:case j.Direction.Left:_=f/i*(g-y);break;case j.Direction.Down:case j.Direction.Up:_=M/i*(g-y);break;default:(0,O.assertUnreachable)(v)}if(F&&(_*=-1),Math.abs(_)>=I/2){for(var L=0;L<e.thumbRefs.length;L++){if(b[L]===g&&Math.sign(_)===1||b[L]===y&&Math.sign(_)===-1)return;var X=b[L]+_;X>g?_=g-b[L]:X<y&&(_=y-b[L])}for(var E=b.slice(0),L=0;L<e.thumbRefs.length;L++)E=(0,O.replaceAt)(E,L,e.normalizeValue(b[L]+_,L));e.setState({draggedTrackPos:[a,o]}),R(E)}}else{var A=0;switch(v){case j.Direction.Right:A=(a-r.left)/i*(g-y)+y;break;case j.Direction.Left:A=(i-(a-r.left))/i*(g-y)+y;break;case j.Direction.Down:A=(o-r.top)/i*(g-y)+y;break;case j.Direction.Up:A=(i-(o-r.top))/i*(g-y)+y;break;default:(0,O.assertUnreachable)(v)}F&&(A=g+y-A),Math.abs(b[c]-A)>=I/2&&R((0,O.replaceAt)(b,c,e.normalizeValue(A,c)))}},e.normalizeValue=function(a,o){var h=e.props,c=h.min,u=h.max,w=h.step,v=h.allowOverlap,y=h.values;return(0,O.normalizeValue)(a,o,c,u,w,v,y)},e.onEnd=function(a){if(a.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var a=e.props,o=a.onFinalChange,h=a.values;o&&o(h)},e.updateMarkRefs=function(a){if(!a.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(a.max-a.min)/e.props.step,e.markRefs=[];for(var o=0;o<e.numOfMarks+1;o++)e.markRefs[o]=re.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var a=window.getComputedStyle(e.trackRef.current),o=parseInt(a.width,10),h=parseInt(a.height,10),c=parseInt(a.paddingLeft,10),u=parseInt(a.paddingTop,10),w=[],v=0;v<e.numOfMarks+1;v++){var y=9999,g=9999;if(e.markRefs[v].current){var R=e.markRefs[v].current.getBoundingClientRect();y=R.height,g=R.width}e.props.direction===j.Direction.Left||e.props.direction===j.Direction.Right?w.push([Math.round(o/e.numOfMarks*v+c-g/2),-Math.round((y-h)/2)]):w.push([Math.round(h/e.numOfMarks*v+u-y/2),-Math.round((g-o)/2)])}e.setState({markOffsets:w})}},p.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,O.schd)(e.onMouseMove),e.schdOnTouchMove=(0,O.schd)(e.onTouchMove),e.schdOnEnd=(0,O.schd)(e.onEnd),e.thumbRefs=p.values.map(function(){return re.createRef()}),e.updateMarkRefs(p),e}return t.prototype.componentDidMount=function(){var p=this,e=this.props,a=e.values,o=e.min,h=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",p.onResize)},unobserve:function(){return window.removeEventListener("resize",p.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,O.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(c){return(0,O.checkBoundaries)(c,p.props.min,p.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,O.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),a.forEach(function(c){(0,O.isStepDivisible)(o,c,h)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(p,e){var a=this.props,o=a.max,h=a.min,c=a.step,u=a.values,w=a.rtl;(p.max!==o||p.min!==h||p.step!==c)&&this.updateMarkRefs(this.props),(0,O.translateThumbs)(this.getThumbs(),this.getOffsets(),w),(p.max!==o||p.min!==h||p.step!==c||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),u.forEach(function(v){(0,O.isStepDivisible)(h,v,c)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var p={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,p),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var p=this,e=this.props,a=e.label,o=e.labelledBy,h=e.renderTrack,c=e.renderThumb,u=e.renderMark,w=u===void 0?function(){return null}:u,v=e.values,y=e.min,g=e.max,R=e.allowOverlap,b=e.disabled,I=this.state,F=I.draggedThumbIndex,S=I.thumbZIndexes,r=I.markOffsets;return h({props:{style:{transform:"scale(1)",cursor:F>-1?"grabbing":this.props.draggableTrack?(0,O.isVertical)(this.props.direction)?"ns-resize":"ew-resize":v.length===1&&!b?"pointer":"inherit"},onMouseDown:b?O.voidFn:this.onMouseDownTrack,onTouchStart:b?O.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:b,children:ye(ye([],r.map(function(i,f,M){return w({props:{style:p.props.direction===j.Direction.Left||p.props.direction===j.Direction.Right?{position:"absolute",left:"".concat(i[0],"px"),marginTop:"".concat(i[1],"px")}:{position:"absolute",top:"".concat(i[0],"px"),marginLeft:"".concat(i[1],"px")},key:"mark".concat(f),ref:p.markRefs[f]},index:f})}),!0),v.map(function(i,f){var M=p.state.draggedThumbIndex===f;return c({index:f,value:i,isDragged:M,props:{style:{position:"absolute",zIndex:S[f],cursor:b?"inherit":M?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:f,tabIndex:b?void 0:0,"aria-valuemax":R?g:v[f+1]||g,"aria-valuemin":R?y:v[f-1]||y,"aria-valuenow":i,draggable:!1,ref:p.thumbRefs[f],"aria-label":a,"aria-labelledby":o,role:"slider",onKeyDown:b?O.voidFn:p.onKeyDown,onKeyUp:b?O.voidFn:p.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:j.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(re.Component);oe.default=Ve;(function(n){var t=H&&H.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(n,"__esModule",{value:!0}),n.checkValuesAgainstBoundaries=n.relativeValue=n.useThumbOverlap=n.Direction=n.getTrackBackground=n.Range=void 0;var p=t(oe);n.Range=p.default;var e=le;Object.defineProperty(n,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(n,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(n,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(n,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var a=ee;Object.defineProperty(n,"Direction",{enumerable:!0,get:function(){return a.Direction}})})(ie);const Ge=1,Ye=1,Ke=Y.div`
  display: flex;
  align-items: "flex-start";
  padding: 24px 20px;
  flex-direction: column;
`,Xe=Y.div`
  margin-left: 30px;
  display: flex;
  right: -18px;
  align-items: center;
  justify-content: center;

  position: relative;
  .line {
    height: 1px;
    width: 11px;
    background-color: ${({theme:n})=>n.textColor};
  }
  .content {
    position: absolute;
    left: 40px;
    width: 300px;
  }
`,We=Y.div`
  flex-grow: 1;
  width: 36px;
  display: flex;
  height: ${({$isMobile:n})=>n?"250px":"400px"};

  .track {
    position: relative;
    width: 4px;
    height: 100%;
    border-radius: 36px;
    background-color: ${({theme:n})=>n.primaryColor};
    align-self: center;
    &::before,
    &::after {
      position: absolute;
      top: -27px;
      left: 0;
      content: "";
      width: 4px;
      height: 40px;
      border-radius: 36px;
      background-color: ${({theme:n})=>n.primaryColor};
    }
    &::after {
      top: inherit;
      bottom: -27px;
    }
  }
`,Ze=Y.div`
  height: 23px;
  width: 42px;
  border-radius: ${({theme:n})=>n.buttonRadius}px;
  background-color: ${({theme:n})=>n.primaryColor};
  box-shadow: 0px 3px 6px #00000029;
  position: relative;
  &::after {
    position: absolute;
    right: -9px;
    content: "";
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 11.5px 0px 12.5px 12px;
    transform: rotate(0deg);
    border-color: transparent transparent transparent
      ${({theme:n})=>n.primaryColor};
    transform: rotate(0deg);
  }
`,Je=({options:n,onAnswer:t})=>{const[p,e]=Me.useState([1]),a=n.length,{i18n:o}=se(),h=z.useCallback(c=>{var u;e(c),t(`${(u=n[c[0]-1])==null?void 0:u.value}`)},[t,n]);return z.useEffect(()=>{var c;t(`${(c=n[0])==null?void 0:c.value}`)},[]),C.jsx(Ke,{children:C.jsx(ie.Range,{step:Ge,min:Ye,max:a,direction:ie.Direction.Down,values:p,onChange:c=>h(c),rtl:!1,renderMark:({props:c,index:u})=>C.jsxs(Xe,{...c,children:[C.jsx("div",{className:"line"}),C.jsx("div",{className:"content",children:C.jsx(Oe.Text,{size:"14",children:n[u].label[o.language]})})]}),renderTrack:({props:c,children:u})=>C.jsx(We,{$isMobile:Te,role:"button",tabIndex:0,onMouseDown:c.onMouseDown,onTouchStart:c.onTouchStart,style:{...c.style},children:C.jsx("div",{className:"track",ref:c.ref,children:u})}),renderThumb:({props:c})=>C.jsx(Ze,{...c,style:{...c.style}})})})},Qe=Y.div`
  .step-image {
    z-index: 0;
  }
  > h4 {
    margin-top: 20px;
  }
  .options {
    margin-top: 30px;
    margin-bottom: 160px;
    .option {
      &:not(:last-child) {
        margin-bottom: 26px;
        @media (max-width: 768px) {
          margin-bottom: 7px;
        }
      }
    }

    &.buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 7px;
      .option {
        margin-bottom: 0px;
      }
    }
  }
`,et=Y.button`
  all: unset;
  border-radius: 20px;
  font-size: 14px;
  font-family: ${({theme:n})=>n.font};
  color: ${({theme:n})=>n.textColor};
  border: 1px solid
    ${({theme:n,$isActive:t})=>t?n.primaryColor:"#E0E0E0"};
  padding: 11px 17px;
`,tt=Y.div`
  position: relative;
  border-radius: ${({theme:n})=>n.cardRadius}px;
  background-color: ${({theme:n})=>ge(n.mode,n.white,n.textColor)};
  margin-bottom: 35px;
  padding: 11px 55px;
  z-index: 10;
  h4,
  p {
    color: ${({theme:n})=>ge(n.mode,n.textColor,n.white)};
  }
  &:before {
    content: "";
    position: absolute;
    width: 11vmin;
    height: 6vmin;
    box-shadow: rgb(51, 51, 51) 4vmin -0.5vmin;
    border-radius: 50%;
    top: -1vmin;
    transform: translate(-140%, -3vmin) rotate(165deg);
    left: 20vmin;
    z-index: -1;
    @media (max-width: 768px) {
      left: 25vmin;
      width: 12vmin;
      height: 9vmin;
      box-shadow: rgb(51, 51, 51) 5vmin 0.5vmin;
    }
  }
`,nt=({step:n,onAnswer:t,answers:p})=>{const{settings:e}=z.useContext(xe.EscolaLMSContext),{i18n:a}=se(),o=z.useCallback(()=>n.image?e.value.onboarding[n.image]:null,[n,e.value.onboarding]),h=z.useCallback(c=>{switch(n.type){case Q.radio:return C.jsx(W.Radio,{value:c.value,label:c.label[a.language],name:n.data,onChange:u=>t(u.target.value)});case Q.options:return C.jsx(et,{$isActive:p&&p[n.data]===c.value||!1,onClick:()=>t(c.value),children:c.label[a.language]});default:return C.jsx(W.Radio,{value:c.value,label:c.label[a.language],name:n.data,onChange:u=>t(u.target.value)})}},[a.language,n.type,n.data,t,p]);return C.jsxs(Qe,{children:[n.image&&o()&&C.jsx("div",{className:"step-image",children:C.jsx(ke,{path:o(),srcSizes:[500,750,1e3]})}),n.hint&&C.jsxs(tt,{children:[C.jsx(W.Title,{level:4,children:n.hint.title[a.language]}),C.jsx(W.Text,{size:"13",children:n.hint.text[a.language]})]}),C.jsx(W.Title,{level:4,children:n.question[a.language]}),C.jsxs("div",{className:`options ${n.type===Q.options?"buttons":""}`,children:[n.type===Q.slide&&C.jsx(Je,{options:n.options,onAnswer:t}),n.type!==Q.slide&&n.options.map((c,u)=>C.jsx("div",{className:"option",children:h(c)},c.value+u))]})]})},at=Y.div`
  background-color: ${({theme:n})=>n.white};
  padding: 60px 0;

  @media (max-width: 991px) {
    padding: 20px;
  }
  .onboarding__content {
    width: 100%;
    position: relative;
    ${({$lastStep:n})=>n&&Se`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}

    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        &.swiper-pagination-bullet-active {
          background-color: ${({theme:n})=>n.primaryColor} !important;
        }
      }
    }
    .next-step {
      margin: 0 auto;
      margin-top: ${({$lastStep:n})=>n?"70px":"0px"};
      position: ${({$lastStep:n})=>n?"relative":"absolute"};
      bottom: ${({$lastStep:n})=>n?"0":"60px"};
      left: 0;
      right: 0;
      max-width: 265px;
      min-width: ${({$lastStep:n})=>n?"265px":"auto"};
      z-index: 10;
    }
  }
`,rt=Y.div`
  text-align: center;
  img {
    max-height: 300px;
    object-fit: contain;
  }
  h2 {
    margin: 22px 0px;
  }
`;var Q=(n=>(n.radio="radio",n.options="options",n.slide="slide",n))(Q||{});const it=()=>{var F;const{settings:n,fetchSettings:t,updateProfile:p,fetchProfile:e,user:a}=z.useContext(xe.EscolaLMSContext),{t:o,i18n:h}=se(),c=De(),[u,w]=z.useState({steps:[],currentStep:0,answers:{},isLastStep:!1}),v=z.useRef();(F=a.value)!=null&&F.isOnboardingCompleted&&c.push(me.home);const y=z.useCallback(()=>{const S=Object.keys(n.value.onboarding).filter(r=>r.startsWith("step_")).map(r=>n.value.onboarding[r]).sort((r,i)=>r.order-i.order);w({steps:S,currentStep:0,isLastStep:!1})},[n]),g=z.useMemo(()=>{var S;if(n.value.onboarding&&((S=n.value.onboarding)!=null&&S.last_step))return{...n.value.onboarding.last_step,image:n.value.onboarding.image_last_step?n.value.onboarding.image_last_step:null}},[n]);z.useEffect(()=>{t(),y()},[t]),z.useEffect(()=>{v.current&&!u.isLastStep&&v.current.slideTo(u.currentStep)},[u]);const R=z.useCallback(async()=>{try{(await p({...u.answers,isOnboardingCompleted:!0})).success&&e()}catch(S){console.log("error",S)}c.push(me.home)},[u.answers,c]),b=z.useMemo(()=>{const S=u.steps[u.currentStep];return S&&u.answers&&u.answers[S.data]?!1:u.currentStep===u.steps.length?(w(i=>({...i,isLastStep:!0})),!1):!0},[u.steps,u.answers,u.currentStep]),I=z.useCallback(()=>{if(!g&&u.currentStep===u.steps.length-1){R();return}u.currentStep===u.steps.length?R():w(S=>({...S,currentStep:S.currentStep+1}))},[u.currentStep,u.steps.length,R,g]);return C.jsx(at,{className:"onboarding",$lastStep:u.isLastStep,children:C.jsx(Re,{children:C.jsx(_e.Col,{offset:{lg:3},lg:6,children:C.jsxs("div",{className:"onboarding__content",children:[u.isLastStep?null:C.jsx(Ie,{className:"onboarding__swiper",modules:[je,Be,Pe],slidesPerView:1,allowTouchMove:!1,initialSlide:0,pagination:!0,autoHeight:!0,onBeforeInit:S=>{v.current=S},children:u.steps.map((S,r)=>C.jsx(Ae,{children:C.jsx(nt,{answers:u.answers,step:S,onAnswer:i=>w(f=>({...f,answers:{...f.answers,[S.data]:i}}))})},r))}),u.isLastStep&&g&&C.jsxs(rt,{children:[(g==null?void 0:g.image)&&C.jsx(ke,{path:g==null?void 0:g.image,srcSizes:[500,750,1e3]}),C.jsx(W.Title,{level:2,children:g==null?void 0:g.title[h.language]}),C.jsx(W.Text,{children:g==null?void 0:g.text[h.language]})]}),C.jsx(W.Button,{className:"next-step",disabled:b,onClick:I,children:o("Next")})]})})})})},st=Y.div`
  background-color: #f8f8f8;
  height: 100%;
  min-height: calc(100vh - 110px);
  padding: 50px 150px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`,ut=()=>C.jsx(st,{children:C.jsx(it,{})});export{ut as default};
