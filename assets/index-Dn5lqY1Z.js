import{d as H,r as F,q as Y,b as ke,f as ie,j as C,w as Ce,i as Me,F as he,G as be,p as K,an as Te,h as Oe,o as ge,C as Se,y as De}from"./index-DdFzT1l9.js";import{m as X,e as Re,b as me,c as Q,d as Ee,f as _e,S as Le,N as Ie,A as $e,a as je}from"./a11y-CLu7RsxU.js";import{a as ye}from"./ResponsiveImage-DavIKUVS.js";function Ae(n){let{swiper:t,extendParams:p,on:e,emit:r}=n;const s="swiper-pagination";p({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),t.pagination={el:null,bullets:[]};let g,u=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function w(a,i){const{bulletActiveClass:f}=t.params.pagination;a&&(a=a[`${i==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${f}-${i}`),a=a[`${i==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${f}-${i}-${i}`)))}function b(a){const i=a.target.closest(Q(t.params.pagination.bulletClass));if(!i)return;a.preventDefault();const f=me(i)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===f)return;t.slideToLoop(f)}else t.slideTo(f)}function v(){const a=t.rtl,i=t.params.pagination;if(l())return;let f=t.pagination.el;f=X(f);let O,A;const L=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,I=t.params.loop?Math.ceil(L/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(A=t.previousRealIndex||0,O=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(O=t.snapIndex,A=t.previousSnapIndex):(A=t.previousIndex||0,O=t.activeIndex||0),i.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const R=t.pagination.bullets;let U,E,c;if(i.dynamicBullets&&(g=Re(R[0],t.isHorizontal()?"width":"height",!0),f.forEach(o=>{o.style[t.isHorizontal()?"width":"height"]=`${g*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&A!==void 0&&(u+=O-(A||0),u>i.dynamicMainBullets-1?u=i.dynamicMainBullets-1:u<0&&(u=0)),U=Math.max(O-u,0),E=U+(Math.min(R.length,i.dynamicMainBullets)-1),c=(E+U)/2),R.forEach(o=>{const d=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(m=>`${i.bulletActiveClass}${m}`)].map(m=>typeof m=="string"&&m.includes(" ")?m.split(" "):m).flat();o.classList.remove(...d)}),f.length>1)R.forEach(o=>{const d=me(o);d===O?o.classList.add(...i.bulletActiveClass.split(" ")):t.isElement&&o.setAttribute("part","bullet"),i.dynamicBullets&&(d>=U&&d<=E&&o.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),d===U&&w(o,"prev"),d===E&&w(o,"next"))});else{const o=R[O];if(o&&o.classList.add(...i.bulletActiveClass.split(" ")),t.isElement&&R.forEach((d,m)=>{d.setAttribute("part",m===O?"bullet-active":"bullet")}),i.dynamicBullets){const d=R[U],m=R[E];for(let y=U;y<=E;y+=1)R[y]&&R[y].classList.add(...`${i.bulletActiveClass}-main`.split(" "));w(d,"prev"),w(m,"next")}}if(i.dynamicBullets){const o=Math.min(R.length,i.dynamicMainBullets+4),d=(g*o-g)/2-c*g,m=a?"right":"left";R.forEach(y=>{y.style[t.isHorizontal()?m:"top"]=`${d}px`})}}f.forEach((R,U)=>{if(i.type==="fraction"&&(R.querySelectorAll(Q(i.currentClass)).forEach(E=>{E.textContent=i.formatFractionCurrent(O+1)}),R.querySelectorAll(Q(i.totalClass)).forEach(E=>{E.textContent=i.formatFractionTotal(I)})),i.type==="progressbar"){let E;i.progressbarOpposite?E=t.isHorizontal()?"vertical":"horizontal":E=t.isHorizontal()?"horizontal":"vertical";const c=(O+1)/I;let o=1,d=1;E==="horizontal"?o=c:d=c,R.querySelectorAll(Q(i.progressbarFillClass)).forEach(m=>{m.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${d})`,m.style.transitionDuration=`${t.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(R.innerHTML=i.renderCustom(t,O+1,I),U===0&&r("paginationRender",R)):(U===0&&r("paginationRender",R),r("paginationUpdate",R)),t.params.watchOverflow&&t.enabled&&R.classList[t.isLocked?"add":"remove"](i.lockClass)})}function h(){const a=t.params.pagination;if(l())return;const i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let f=t.pagination.el;f=X(f);let O="";if(a.type==="bullets"){let A=t.params.loop?Math.ceil(i/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&A>i&&(A=i);for(let L=0;L<A;L+=1)a.renderBullet?O+=a.renderBullet.call(t,L,a.bulletClass):O+=`<${a.bulletElement} ${t.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?O=a.renderFraction.call(t,a.currentClass,a.totalClass):O=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?O=a.renderProgressbar.call(t,a.progressbarFillClass):O=`<span class="${a.progressbarFillClass}"></span>`),t.pagination.bullets=[],f.forEach(A=>{a.type!=="custom"&&(A.innerHTML=O||""),a.type==="bullets"&&t.pagination.bullets.push(...A.querySelectorAll(Q(a.bulletClass)))}),a.type!=="custom"&&r("paginationRender",f[0])}function D(){t.params.pagination=Ee(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const a=t.params.pagination;if(!a.el)return;let i;typeof a.el=="string"&&t.isElement&&(i=t.el.querySelector(a.el)),!i&&typeof a.el=="string"&&(i=[...document.querySelectorAll(a.el)]),i||(i=a.el),!(!i||i.length===0)&&(t.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...t.el.querySelectorAll(a.el)],i.length>1&&(i=i.filter(f=>_e(f,".swiper")[0]===t.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(t.pagination,{el:i}),i=X(i),i.forEach(f=>{a.type==="bullets"&&a.clickable&&f.classList.add(...(a.clickableClass||"").split(" ")),f.classList.add(a.modifierClass+a.type),f.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(f.classList.add(`${a.modifierClass}${a.type}-dynamic`),u=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&f.classList.add(a.progressbarOppositeClass),a.clickable&&f.addEventListener("click",b),t.enabled||f.classList.add(a.lockClass)}))}function k(){const a=t.params.pagination;if(l())return;let i=t.pagination.el;i&&(i=X(i),i.forEach(f=>{f.classList.remove(a.hiddenClass),f.classList.remove(a.modifierClass+a.type),f.classList.remove(t.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(f.classList.remove(...(a.clickableClass||"").split(" ")),f.removeEventListener("click",b))})),t.pagination.bullets&&t.pagination.bullets.forEach(f=>f.classList.remove(...a.bulletActiveClass.split(" ")))}e("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const a=t.params.pagination;let{el:i}=t.pagination;i=X(i),i.forEach(f=>{f.classList.remove(a.horizontalClass,a.verticalClass),f.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass)})}),e("init",()=>{t.params.pagination.enabled===!1?z():(D(),h(),v())}),e("activeIndexChange",()=>{typeof t.snapIndex>"u"&&v()}),e("snapIndexChange",()=>{v()}),e("snapGridLengthChange",()=>{h(),v()}),e("destroy",()=>{k()}),e("enable disable",()=>{let{el:a}=t.pagination;a&&(a=X(a),a.forEach(i=>i.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),e("lock unlock",()=>{v()}),e("click",(a,i)=>{const f=i.target,O=X(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&O&&O.length>0&&!f.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&f===t.navigation.nextEl||t.navigation.prevEl&&f===t.navigation.prevEl))return;const A=O[0].classList.contains(t.params.pagination.hiddenClass);r(A===!0?"paginationShow":"paginationHide"),O.forEach(L=>L.classList.toggle(t.params.pagination.hiddenClass))}});const $=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:a}=t.pagination;a&&(a=X(a),a.forEach(i=>i.classList.remove(t.params.pagination.paginationDisabledClass))),D(),h(),v()},z=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:a}=t.pagination;a&&(a=X(a),a.forEach(i=>i.classList.add(t.params.pagination.paginationDisabledClass))),k()};Object.assign(t.pagination,{enable:$,disable:z,render:h,update:v,init:D,destroy:k})}var re={},se={},oe={},ae={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Direction=void 0,function(t){t.Right="to right",t.Left="to left",t.Down="to bottom",t.Up="to top"}(n.Direction||(n.Direction={}))})(ae);(function(n){var t=H&&H.__spreadArray||function(c,o,d){if(d||arguments.length===2)for(var m=0,y=o.length,x;m<y;m++)(x||!(m in o))&&(x||(x=Array.prototype.slice.call(o,0,m)),x[m]=o[m]);return c.concat(x||Array.prototype.slice.call(o))};Object.defineProperty(n,"__esModule",{value:!0}),n.useThumbOverlap=n.assertUnreachable=n.voidFn=n.getTrackBackground=n.replaceAt=n.schd=n.translate=n.getClosestThumbIndex=n.translateThumbs=n.getPaddingAndBorder=n.getMargin=n.checkInitialOverlap=n.checkValuesAgainstBoundaries=n.checkBoundaries=n.isVertical=n.relativeValue=n.normalizeValue=n.isStepDivisible=n.isTouchEvent=n.getStepDecimals=void 0;var p=F,e=ae,r=function(c){var o=c.toString().split(".")[1];return o?o.length:0};n.getStepDecimals=r;function s(c){return c.touches&&c.touches.length||c.changedTouches&&c.changedTouches.length}n.isTouchEvent=s;function g(c,o,d){var m=(o-c)/d,y=8,x=Number(m.toFixed(y));return parseInt(x.toString(),10)===x}n.isStepDivisible=g;function u(c,o,d,m,y,x,S){var T=1e11;if(c=Math.round(c*T)/T,!x){var P=S[o-1],_=S[o+1];if(P&&P>c)return P;if(_&&_<c)return _}if(c>m)return m;if(c<d)return d;var q=Math.floor(c*T-d*T)%Math.floor(y*T),N=Math.floor(c*T-Math.abs(q)),V=q===0?c:N/T,B=Math.abs(q/T)<y/2?V:V+y,G=(0,n.getStepDecimals)(y);return parseFloat(B.toFixed(G))}n.normalizeValue=u;function l(c,o,d){return(c-o)/(d-o)}n.relativeValue=l;function w(c){return c===e.Direction.Up||c===e.Direction.Down}n.isVertical=w;function b(c,o,d){if(o>=d)throw new RangeError("min (".concat(o,") is equal/bigger than max (").concat(d,")"));if(c<o)throw new RangeError("value (".concat(c,") is smaller than min (").concat(o,")"));if(c>d)throw new RangeError("value (".concat(c,") is bigger than max (").concat(d,")"))}n.checkBoundaries=b;function v(c,o,d){return c<o?o:c>d?d:c}n.checkValuesAgainstBoundaries=v;function h(c){if(!(c.length<2)&&!c.slice(1).every(function(o,d){return c[d]<=o}))throw new RangeError("values={[".concat(c,"]} needs to be sorted when allowOverlap={false}"))}n.checkInitialOverlap=h;function D(c){var o=window.getComputedStyle(c);return{top:parseInt(o["margin-top"],10),bottom:parseInt(o["margin-bottom"],10),left:parseInt(o["margin-left"],10),right:parseInt(o["margin-right"],10)}}n.getMargin=D;function k(c){var o=window.getComputedStyle(c);return{top:parseInt(o["padding-top"],10)+parseInt(o["border-top-width"],10),bottom:parseInt(o["padding-bottom"],10)+parseInt(o["border-bottom-width"],10),left:parseInt(o["padding-left"],10)+parseInt(o["border-left-width"],10),right:parseInt(o["padding-right"],10)+parseInt(o["border-right-width"],10)}}n.getPaddingAndBorder=k;function $(c,o,d){var m=d?-1:1;c.forEach(function(y,x){return a(y,m*o[x].x,o[x].y)})}n.translateThumbs=$;function z(c,o,d,m){for(var y=0,x=E(c[0],o,d,m),S=1;S<c.length;S++){var T=E(c[S],o,d,m);T<x&&(x=T,y=S)}return y}n.getClosestThumbIndex=z;function a(c,o,d){c.style.transform="translate(".concat(o,"px, ").concat(d,"px)")}n.translate=a;var i=function(c){var o=[],d=null,m=function(){for(var y=[],x=0;x<arguments.length;x++)y[x]=arguments[x];o=y,!d&&(d=requestAnimationFrame(function(){d=null,c.apply(void 0,o)}))};return m};n.schd=i;function f(c,o,d){var m=c.slice(0);return m[o]=d,m}n.replaceAt=f;function O(c){var o=c.values,d=c.colors,m=c.min,y=c.max,x=c.direction,S=x===void 0?e.Direction.Right:x,T=c.rtl,P=T===void 0?!1:T;P&&S===e.Direction.Right?S=e.Direction.Left:P&&e.Direction.Left&&(S=e.Direction.Right);var _=o.slice(0).sort(function(N,V){return N-V}).map(function(N){return(N-m)/(y-m)*100}),q=_.reduce(function(N,V,B){return"".concat(N,", ").concat(d[B]," ").concat(V,"%, ").concat(d[B+1]," ").concat(V,"%")},"");return"linear-gradient(".concat(S,", ").concat(d[0]," 0%").concat(q,", ").concat(d[d.length-1]," 100%)")}n.getTrackBackground=O;function A(){}n.voidFn=A;function L(c){throw new Error("Didn't expect to get here")}n.assertUnreachable=L;var I=function(c,o,d,m,y){y===void 0&&(y=function(S){return S});var x=Math.ceil(t([c],Array.from(c.children),!0).reduce(function(S,T){var P=Math.ceil(T.getBoundingClientRect().width);if(T.innerText&&T.innerText.includes(d)&&T.childElementCount===0){var _=T.cloneNode(!0);_.innerHTML=y(o.toFixed(m)),_.style.visibility="hidden",document.body.appendChild(_),P=Math.ceil(_.getBoundingClientRect().width),document.body.removeChild(_)}return P>S?P:S},c.getBoundingClientRect().width));return x},R=function(c,o,d,m,y,x,S){S===void 0&&(S=function(_){return _});var T=[],P=function(_){var q=I(d[_],m[_],y,x,S),N=o[_].x;o.forEach(function(V,B){var G=V.x,W=I(d[B],m[B],y,x,S);_!==B&&(N>=G&&N<=G+W||N+q>=G&&N+q<=G+W)&&(T.includes(B)||(T.push(_),T.push(B),T=t(t([],T,!0),[_,B],!1),P(B)))})};return P(c),Array.from(new Set(T.sort()))},U=function(c,o,d,m,y,x){m===void 0&&(m=.1),y===void 0&&(y=" - "),x===void 0&&(x=function(B){return B});var S=(0,n.getStepDecimals)(m),T=(0,p.useState)({}),P=T[0],_=T[1],q=(0,p.useState)(x(o[d].toFixed(S))),N=q[0],V=q[1];return(0,p.useEffect)(function(){if(c){var B=c.getThumbs();if(B.length<1)return;var G={},W=c.getOffsets(),ee=R(d,W,B,o,y,S,x),le=x(o[d].toFixed(S));if(ee.length){var te=ee.reduce(function(Z,de,pe,fe){return Z.length?t(t([],Z,!0),[W[fe[pe]].x],!1):[W[fe[pe]].x]},[]);if(Math.min.apply(Math,te)===W[d].x){var ce=[];ee.forEach(function(Z){ce.push(o[Z].toFixed(S))}),le=Array.from(new Set(ce.sort(function(Z,de){return parseFloat(Z)-parseFloat(de)}))).map(x).join(y);var xe=Math.min.apply(Math,te),ue=Math.max.apply(Math,te),we=B[ee[te.indexOf(ue)]].getBoundingClientRect().width;G.left="".concat(Math.abs(xe-(ue+we))/2,"px"),G.transform="translate(-50%, 0)"}else G.visibility="hidden"}V(le),_(G)}},[c,o]),[N,P]};n.useThumbOverlap=U;function E(c,o,d,m){var y=c.getBoundingClientRect(),x=y.left,S=y.top,T=y.width,P=y.height;return w(m)?Math.abs(d-(S+P/2)):Math.abs(o-(x+T/2))}})(oe);var Be=H&&H.__extends||function(){var n=function(t,p){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])},n(t,p)};return function(t,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");n(t,p);function e(){this.constructor=t}t.prototype=p===null?Object.create(p):(e.prototype=p.prototype,new e)}}(),ze=H&&H.__createBinding||(Object.create?function(n,t,p,e){e===void 0&&(e=p);var r=Object.getOwnPropertyDescriptor(t,p);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[p]}}),Object.defineProperty(n,e,r)}:function(n,t,p,e){e===void 0&&(e=p),n[e]=t[p]}),Pe=H&&H.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),Fe=H&&H.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var p in n)p!=="default"&&Object.prototype.hasOwnProperty.call(n,p)&&ze(t,n,p);return Pe(t,n),t},ve=H&&H.__spreadArray||function(n,t,p){if(p||arguments.length===2)for(var e=0,r=t.length,s;e<r;e++)(s||!(e in t))&&(s||(s=Array.prototype.slice.call(t,0,e)),s[e]=t[e]);return n.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(se,"__esModule",{value:!0});var ne=Fe(F),M=oe,j=ae,Ue=["ArrowRight","ArrowUp","k","PageUp"],Ne=["ArrowLeft","ArrowDown","j","PageDown"],He=function(n){Be(t,n);function t(p){var e=n.call(this,p)||this;if(e.trackRef=ne.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(r,s){return s}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var r=e.props,s=r.direction,g=r.values,u=r.min,l=r.max,w=e.trackRef.current,b=w.getBoundingClientRect(),v=(0,M.getPaddingAndBorder)(w);return e.getThumbs().map(function(h,D){var k={x:0,y:0},$=h.getBoundingClientRect(),z=(0,M.getMargin)(h);switch(s){case j.Direction.Right:return k.x=(z.left+v.left)*-1,k.y=(($.height-b.height)/2+v.top)*-1,k.x+=b.width*(0,M.relativeValue)(g[D],u,l)-$.width/2,k;case j.Direction.Left:return k.x=(z.right+v.right)*-1,k.y=(($.height-b.height)/2+v.top)*-1,k.x+=b.width-b.width*(0,M.relativeValue)(g[D],u,l)-$.width/2,k;case j.Direction.Up:return k.x=(($.width-b.width)/2+z.left+v.left)*-1,k.y=-v.left,k.y+=b.height-b.height*(0,M.relativeValue)(g[D],u,l)-$.height/2,k;case j.Direction.Down:return k.x=(($.width-b.width)/2+z.left+v.left)*-1,k.y=-v.left,k.y+=b.height*(0,M.relativeValue)(g[D],u,l)-$.height/2,k;default:return(0,M.assertUnreachable)(s)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(r){return r.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(r){return e.getThumbs().findIndex(function(s){return s===r.target||s.contains(r.target)})},e.addTouchEvents=function(r){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(r){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(r){var s;if(r.button===0)if(r.persist(),r.preventDefault(),e.addMouseEvents(r.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(u){var l;return(l=u.current)===null||l===void 0?void 0:l.contains(r.target)}))return;e.setState({draggedTrackPos:[r.clientX,r.clientY]},function(){return e.onMove(r.clientX,r.clientY)})}else{var g=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(u){return u.current}),r.clientX,r.clientY,e.props.direction);(s=e.thumbRefs[g].current)===null||s===void 0||s.focus(),e.setState({draggedThumbIndex:g},function(){return e.onMove(r.clientX,r.clientY)})}},e.onResize=function(){(0,M.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(r){var s;if(r.persist(),e.addTouchEvents(r.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(u){var l;return(l=u.current)===null||l===void 0?void 0:l.contains(r.target)}))return;e.setState({draggedTrackPos:[r.touches[0].clientX,r.touches[0].clientY]},function(){return e.onMove(r.touches[0].clientX,r.touches[0].clientY)})}else{var g=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(u){return u.current}),r.touches[0].clientX,r.touches[0].clientY,e.props.direction);(s=e.thumbRefs[g].current)===null||s===void 0||s.focus(),e.setState({draggedThumbIndex:g},function(){return e.onMove(r.touches[0].clientX,r.touches[0].clientY)})}},e.onMouseOrTouchStart=function(r){if(!e.props.disabled){var s=(0,M.isTouchEvent)(r);if(!(!s&&r.button!==0)){var g=e.getTargetIndex(r);g!==-1&&(s?e.addTouchEvents(r):e.addMouseEvents(r),e.setState({draggedThumbIndex:g,thumbZIndexes:e.state.thumbZIndexes.map(function(u,l){return l===g?Math.max.apply(Math,e.state.thumbZIndexes):u<=e.state.thumbZIndexes[g]?u:u-1})}))}}},e.onMouseMove=function(r){r.preventDefault(),e.onMove(r.clientX,r.clientY)},e.onTouchMove=function(r){r.preventDefault(),e.onMove(r.touches[0].clientX,r.touches[0].clientY)},e.onKeyDown=function(r){var s=e.props,g=s.values,u=s.onChange,l=s.step,w=s.rtl,b=s.direction,v=e.state.isChanged,h=e.getTargetIndex(r.nativeEvent),D=w||b===j.Direction.Left||b===j.Direction.Down?-1:1;h!==-1&&(Ue.includes(r.key)?(r.preventDefault(),e.setState({draggedThumbIndex:h,isChanged:!0}),u((0,M.replaceAt)(g,h,e.normalizeValue(g[h]+D*(r.key==="PageUp"?l*10:l),h)))):Ne.includes(r.key)?(r.preventDefault(),e.setState({draggedThumbIndex:h,isChanged:!0}),u((0,M.replaceAt)(g,h,e.normalizeValue(g[h]-D*(r.key==="PageDown"?l*10:l),h)))):r.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){v&&e.fireOnFinalChange()}):v&&e.fireOnFinalChange())},e.onKeyUp=function(r){var s=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){s&&e.fireOnFinalChange()})},e.onMove=function(r,s){var g=e.state,u=g.draggedThumbIndex,l=g.draggedTrackPos,w=e.props,b=w.direction,v=w.min,h=w.max,D=w.onChange,k=w.values,$=w.step,z=w.rtl;if(u===-1&&l[0]===-1&&l[1]===-1)return null;var a=e.trackRef.current;if(!a)return null;var i=a.getBoundingClientRect(),f=(0,M.isVertical)(b)?i.height:i.width;if(l[0]!==-1&&l[1]!==-1){var O=r-l[0],A=s-l[1],L=0;switch(b){case j.Direction.Right:case j.Direction.Left:L=O/f*(h-v);break;case j.Direction.Down:case j.Direction.Up:L=A/f*(h-v);break;default:(0,M.assertUnreachable)(b)}if(z&&(L*=-1),Math.abs(L)>=$/2){for(var I=0;I<e.thumbRefs.length;I++){if(k[I]===h&&Math.sign(L)===1||k[I]===v&&Math.sign(L)===-1)return;var R=k[I]+L;R>h?L=h-k[I]:R<v&&(L=v-k[I])}for(var U=k.slice(0),I=0;I<e.thumbRefs.length;I++)U=(0,M.replaceAt)(U,I,e.normalizeValue(k[I]+L,I));e.setState({draggedTrackPos:[r,s]}),D(U)}}else{var E=0;switch(b){case j.Direction.Right:E=(r-i.left)/f*(h-v)+v;break;case j.Direction.Left:E=(f-(r-i.left))/f*(h-v)+v;break;case j.Direction.Down:E=(s-i.top)/f*(h-v)+v;break;case j.Direction.Up:E=(f-(s-i.top))/f*(h-v)+v;break;default:(0,M.assertUnreachable)(b)}z&&(E=h+v-E),Math.abs(k[u]-E)>=$/2&&D((0,M.replaceAt)(k,u,e.normalizeValue(E,u)))}},e.normalizeValue=function(r,s){var g=e.props,u=g.min,l=g.max,w=g.step,b=g.allowOverlap,v=g.values;return(0,M.normalizeValue)(r,s,u,l,w,b,v)},e.onEnd=function(r){if(r.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var r=e.props,s=r.onFinalChange,g=r.values;s&&s(g)},e.updateMarkRefs=function(r){if(!r.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(r.max-r.min)/e.props.step,e.markRefs=[];for(var s=0;s<e.numOfMarks+1;s++)e.markRefs[s]=ne.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var r=window.getComputedStyle(e.trackRef.current),s=parseInt(r.width,10),g=parseInt(r.height,10),u=parseInt(r.paddingLeft,10),l=parseInt(r.paddingTop,10),w=[],b=0;b<e.numOfMarks+1;b++){var v=9999,h=9999;if(e.markRefs[b].current){var D=e.markRefs[b].current.getBoundingClientRect();v=D.height,h=D.width}e.props.direction===j.Direction.Left||e.props.direction===j.Direction.Right?w.push([Math.round(s/e.numOfMarks*b+u-h/2),-Math.round((v-g)/2)]):w.push([Math.round(g/e.numOfMarks*b+l-v/2),-Math.round((h-s)/2)])}e.setState({markOffsets:w})}},p.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,M.schd)(e.onMouseMove),e.schdOnTouchMove=(0,M.schd)(e.onTouchMove),e.schdOnEnd=(0,M.schd)(e.onEnd),e.thumbRefs=p.values.map(function(){return ne.createRef()}),e.updateMarkRefs(p),e}return t.prototype.componentDidMount=function(){var p=this,e=this.props,r=e.values,s=e.min,g=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",p.onResize)},unobserve:function(){return window.removeEventListener("resize",p.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,M.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(u){return(0,M.checkBoundaries)(u,p.props.min,p.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),r.forEach(function(u){(0,M.isStepDivisible)(s,u,g)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(p,e){var r=this.props,s=r.max,g=r.min,u=r.step,l=r.values,w=r.rtl;(p.max!==s||p.min!==g||p.step!==u)&&this.updateMarkRefs(this.props),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),w),(p.max!==s||p.min!==g||p.step!==u||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),l.forEach(function(b){(0,M.isStepDivisible)(g,b,u)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var p={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,p),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var p=this,e=this.props,r=e.renderTrack,s=e.renderThumb,g=e.renderMark,u=g===void 0?function(){return null}:g,l=e.values,w=e.min,b=e.max,v=e.allowOverlap,h=e.disabled,D=this.state,k=D.draggedThumbIndex,$=D.thumbZIndexes,z=D.markOffsets;return r({props:{style:{transform:"scale(1)",cursor:k>-1?"grabbing":this.props.draggableTrack?(0,M.isVertical)(this.props.direction)?"ns-resize":"ew-resize":l.length===1&&!h?"pointer":"inherit"},onMouseDown:h?M.voidFn:this.onMouseDownTrack,onTouchStart:h?M.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:ve(ve([],z.map(function(a,i,f){return u({props:{style:p.props.direction===j.Direction.Left||p.props.direction===j.Direction.Right?{position:"absolute",left:"".concat(a[0],"px"),marginTop:"".concat(a[1],"px")}:{position:"absolute",top:"".concat(a[0],"px"),marginLeft:"".concat(a[1],"px")},key:"mark".concat(i),ref:p.markRefs[i]},index:i})}),!0),l.map(function(a,i){var f=p.state.draggedThumbIndex===i;return s({index:i,value:a,isDragged:f,props:{style:{position:"absolute",zIndex:$[i],cursor:h?"inherit":f?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:i,tabIndex:h?void 0:0,"aria-valuemax":v?b:l[i+1]||b,"aria-valuemin":v?w:l[i-1]||w,"aria-valuenow":a,draggable:!1,ref:p.thumbRefs[i],role:"slider",onKeyDown:h?M.voidFn:p.onKeyDown,onKeyUp:h?M.voidFn:p.onKeyUp}})}),!0)})},t.defaultProps={step:1,direction:j.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ne.Component);se.default=He;(function(n){var t=H&&H.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(n,"__esModule",{value:!0}),n.checkValuesAgainstBoundaries=n.relativeValue=n.useThumbOverlap=n.Direction=n.getTrackBackground=n.Range=void 0;var p=t(se);n.Range=p.default;var e=oe;Object.defineProperty(n,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(n,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(n,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(n,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var r=ae;Object.defineProperty(n,"Direction",{enumerable:!0,get:function(){return r.Direction}})})(re);const qe=1,Ve=1,Ge=Y.div`
  display: flex;
  align-items: "flex-start";
  padding: 24px 20px;
  flex-direction: column;
`,Ye=Y.div`
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
`,Xe=Y.div`
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
`,Ke=Y.div`
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
`,We=({options:n,onAnswer:t})=>{const[p,e]=ke.useState([1]),r=n.length,{i18n:s}=ie(),g=F.useCallback(u=>{var l;e(u),t(`${(l=n[u[0]-1])==null?void 0:l.value}`)},[t,n]);return F.useEffect(()=>{var u;t(`${(u=n[0])==null?void 0:u.value}`)},[]),C.jsx(Ge,{children:C.jsx(re.Range,{step:qe,min:Ve,max:r,direction:re.Direction.Down,values:p,onChange:u=>g(u),rtl:!1,renderMark:({props:u,index:l})=>C.jsxs(Ye,{...u,children:[C.jsx("div",{className:"line"}),C.jsx("div",{className:"content",children:C.jsx(Ce.Text,{size:"14",children:n[l].label[s.language]})})]}),renderTrack:({props:u,children:l})=>C.jsx(Xe,{$isMobile:Me,role:"button",tabIndex:0,onMouseDown:u.onMouseDown,onTouchStart:u.onTouchStart,style:{...u.style},children:C.jsx("div",{className:"track",ref:u.ref,children:l})}),renderThumb:({props:u})=>C.jsx(Ke,{...u,style:{...u.style}})})})},Ze=Y.div`
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
    }
  }
`,Je=Y.button`
  all: unset;
  border-radius: 20px;
  font-size: 14px;
  font-family: ${({theme:n})=>n.font};
  color: ${({theme:n})=>n.textColor};
  border: 1px solid
    ${({theme:n,$isActive:t})=>t?n.primaryColor:"#E0E0E0"};
  padding: 11px 17px;
`,Qe=Y.div`
  position: relative;
  border-radius: ${({theme:n})=>n.cardRadius}px;
  background-color: ${({theme:n})=>he(n.mode,n.white,n.textColor)};
  margin-bottom: 35px;
  padding: 11px 55px;
  z-index: 10;
  h4,
  p {
    color: ${({theme:n})=>he(n.mode,n.textColor,n.white)};
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
`,et=({step:n,onAnswer:t,answers:p})=>{const{settings:e}=F.useContext(be.EscolaLMSContext),{i18n:r}=ie(),s=F.useCallback(()=>n.image?e.value.onboarding[n.image]:null,[n,e.value.onboarding]),g=F.useCallback(u=>{switch(n.type){case J.radio:return C.jsx(K.Radio,{value:u.value,label:u.label[r.language],name:n.data,onChange:l=>t(l.target.value)});case J.options:return C.jsx(Je,{$isActive:p&&p[n.data]===u.value||!1,onClick:()=>t(u.value),children:u.label[r.language]});default:return C.jsx(K.Radio,{value:u.value,label:u.label[r.language],name:n.data,onChange:l=>t(l.target.value)})}},[r.language,n.type,n.data,t,p]);return C.jsxs(Ze,{children:[n.image&&s()&&C.jsx("div",{className:"step-image",children:C.jsx(ye,{path:s(),srcSizes:[500,750,1e3]})}),n.hint&&C.jsxs(Qe,{children:[C.jsx(K.Title,{level:4,children:n.hint.title[r.language]}),C.jsx(K.Text,{size:"13",children:n.hint.text[r.language]})]}),C.jsx(K.Title,{level:4,children:n.question[r.language]}),C.jsxs("div",{className:`options ${n.type===J.options?"buttons":""}`,children:[n.type===J.slide&&C.jsx(We,{options:n.options,onAnswer:t}),n.type!==J.slide&&n.options.map((u,l)=>C.jsx("div",{className:"option",children:g(u)},u.value+l))]})]})},tt=Y.div`
  background-color: ${({theme:n})=>n.white};
  padding: 60px 0;

  @media (max-width: 991px) {
    padding: 20px;
  }
  .onboarding__content {
    width: 100%;
    position: relative;
    ${({$lastStep:n})=>n&&Te`
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
`,nt=Y.div`
  text-align: center;
  img {
    max-height: 300px;
    object-fit: contain;
  }
  h2 {
    margin: 22px 0px;
  }
`;var J=(n=>(n.radio="radio",n.options="options",n.slide="slide",n))(J||{});const at=()=>{var z;const{settings:n,fetchSettings:t,updateProfile:p,fetchProfile:e,user:r}=F.useContext(be.EscolaLMSContext),{t:s,i18n:g}=ie(),u=Oe(),[l,w]=F.useState({steps:[],currentStep:0,answers:{},isLastStep:!1}),b=F.useRef();(z=r.value)!=null&&z.isOnboardingCompleted&&u.push(ge.home);const v=F.useCallback(()=>{const a=Object.keys(n.value.onboarding).filter(i=>i.startsWith("step_")).map(i=>n.value.onboarding[i]).sort((i,f)=>i.order-f.order);w({steps:a,currentStep:0,isLastStep:!1})},[n]),h=F.useMemo(()=>{var a;if(n.value.onboarding&&((a=n.value.onboarding)!=null&&a.last_step))return{...n.value.onboarding.last_step,image:n.value.onboarding.image_last_step?n.value.onboarding.image_last_step:null}},[n]);F.useEffect(()=>{t(),v()},[t]),F.useEffect(()=>{b.current&&!l.isLastStep&&b.current.slideTo(l.currentStep)},[l]);const D=F.useCallback(async()=>{try{(await p({...l.answers,isOnboardingCompleted:!0})).success&&e()}catch(a){console.log("error",a)}u.push(ge.home)},[l.answers,u]),k=F.useMemo(()=>{const a=l.steps[l.currentStep];return a&&l.answers&&l.answers[a.data]?!1:l.currentStep===l.steps.length?(w(f=>({...f,isLastStep:!0})),!1):!0},[l.steps,l.answers,l.currentStep]),$=F.useCallback(()=>{if(!h&&l.currentStep===l.steps.length-1){D();return}l.currentStep===l.steps.length?D():w(a=>({...a,currentStep:a.currentStep+1}))},[l.currentStep,l.steps.length,D,h]);return C.jsx(tt,{className:"onboarding",$lastStep:l.isLastStep,children:C.jsx(Se,{children:C.jsx(De.Col,{offset:{lg:3},lg:6,children:C.jsxs("div",{className:"onboarding__content",children:[l.isLastStep?null:C.jsx(Le,{className:"onboarding__swiper",modules:[Ie,$e,Ae],slidesPerView:1,allowTouchMove:!1,initialSlide:0,pagination:!0,autoHeight:!0,onBeforeInit:a=>{b.current=a},children:l.steps.map((a,i)=>C.jsx(je,{children:C.jsx(et,{answers:l.answers,step:a,onAnswer:f=>w(O=>({...O,answers:{...O.answers,[a.data]:f}}))})},i))}),l.isLastStep&&h&&C.jsxs(nt,{children:[(h==null?void 0:h.image)&&C.jsx(ye,{path:h==null?void 0:h.image,srcSizes:[500,750,1e3]}),C.jsx(K.Title,{level:2,children:h==null?void 0:h.title[g.language]}),C.jsx(K.Text,{children:h==null?void 0:h.text[g.language]})]}),C.jsx(K.Button,{className:"next-step",disabled:k,onClick:$,children:s("Next")})]})})})})},rt=Y.div`
  background-color: #f8f8f8;
  height: 100%;
  min-height: calc(100vh - 110px);
  padding: 50px 150px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`,lt=()=>C.jsx(rt,{children:C.jsx(at,{})});export{lt as default};
