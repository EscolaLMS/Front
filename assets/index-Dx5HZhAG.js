import{d as H,r as F,q as Y,b as ke,f as ie,j as C,s as Ce,n as Me,cH as he,D as be,m as K,an as Te,i as Oe,l as ge,C as Se,w as De}from"./index-Ba_2FdXr.js";import{m as X,d as Re,b as me,f as Ee,a as _e,S as Le}from"./swiper-react-7yEnN6SU.js";import{c as Q,a as Ie,N as $e,A as je}from"./a11y-CZHHFuqB.js";import{a as xe}from"./ResponsiveImage-DZYeXYfo.js";function Ae(n){let{swiper:t,extendParams:p,on:e,emit:a}=n;const s="swiper-pagination";p({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:r=>r,formatFractionTotal:r=>r,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),t.pagination={el:null,bullets:[]};let h,c=0;function u(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function w(r,i){const{bulletActiveClass:f}=t.params.pagination;r&&(r=r[`${i==="prev"?"previous":"next"}ElementSibling`],r&&(r.classList.add(`${f}-${i}`),r=r[`${i==="prev"?"previous":"next"}ElementSibling`],r&&r.classList.add(`${f}-${i}-${i}`)))}function b(r){const i=r.target.closest(Q(t.params.pagination.bulletClass));if(!i)return;r.preventDefault();const f=me(i)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===f)return;t.slideToLoop(f)}else t.slideTo(f)}function m(){const r=t.rtl,i=t.params.pagination;if(u())return;let f=t.pagination.el;f=X(f);let O,A;const L=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,I=t.params.loop?Math.ceil(L/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(A=t.previousRealIndex||0,O=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(O=t.snapIndex,A=t.previousSnapIndex):(A=t.previousIndex||0,O=t.activeIndex||0),i.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const R=t.pagination.bullets;let U,E,l;if(i.dynamicBullets&&(h=Re(R[0],t.isHorizontal()?"width":"height",!0),f.forEach(o=>{o.style[t.isHorizontal()?"width":"height"]=`${h*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&A!==void 0&&(c+=O-(A||0),c>i.dynamicMainBullets-1?c=i.dynamicMainBullets-1:c<0&&(c=0)),U=Math.max(O-c,0),E=U+(Math.min(R.length,i.dynamicMainBullets)-1),l=(E+U)/2),R.forEach(o=>{const d=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(g=>`${i.bulletActiveClass}${g}`)].map(g=>typeof g=="string"&&g.includes(" ")?g.split(" "):g).flat();o.classList.remove(...d)}),f.length>1)R.forEach(o=>{const d=me(o);d===O?o.classList.add(...i.bulletActiveClass.split(" ")):t.isElement&&o.setAttribute("part","bullet"),i.dynamicBullets&&(d>=U&&d<=E&&o.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),d===U&&w(o,"prev"),d===E&&w(o,"next"))});else{const o=R[O];if(o&&o.classList.add(...i.bulletActiveClass.split(" ")),t.isElement&&R.forEach((d,g)=>{d.setAttribute("part",g===O?"bullet-active":"bullet")}),i.dynamicBullets){const d=R[U],g=R[E];for(let x=U;x<=E;x+=1)R[x]&&R[x].classList.add(...`${i.bulletActiveClass}-main`.split(" "));w(d,"prev"),w(g,"next")}}if(i.dynamicBullets){const o=Math.min(R.length,i.dynamicMainBullets+4),d=(h*o-h)/2-l*h,g=r?"right":"left";R.forEach(x=>{x.style[t.isHorizontal()?g:"top"]=`${d}px`})}}f.forEach((R,U)=>{if(i.type==="fraction"&&(R.querySelectorAll(Q(i.currentClass)).forEach(E=>{E.textContent=i.formatFractionCurrent(O+1)}),R.querySelectorAll(Q(i.totalClass)).forEach(E=>{E.textContent=i.formatFractionTotal(I)})),i.type==="progressbar"){let E;i.progressbarOpposite?E=t.isHorizontal()?"vertical":"horizontal":E=t.isHorizontal()?"horizontal":"vertical";const l=(O+1)/I;let o=1,d=1;E==="horizontal"?o=l:d=l,R.querySelectorAll(Q(i.progressbarFillClass)).forEach(g=>{g.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${d})`,g.style.transitionDuration=`${t.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(R.innerHTML=i.renderCustom(t,O+1,I),U===0&&a("paginationRender",R)):(U===0&&a("paginationRender",R),a("paginationUpdate",R)),t.params.watchOverflow&&t.enabled&&R.classList[t.isLocked?"add":"remove"](i.lockClass)})}function v(){const r=t.params.pagination;if(u())return;const i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let f=t.pagination.el;f=X(f);let O="";if(r.type==="bullets"){let A=t.params.loop?Math.ceil(i/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&A>i&&(A=i);for(let L=0;L<A;L+=1)r.renderBullet?O+=r.renderBullet.call(t,L,r.bulletClass):O+=`<${r.bulletElement} ${t.isElement?'part="bullet"':""} class="${r.bulletClass}"></${r.bulletElement}>`}r.type==="fraction"&&(r.renderFraction?O=r.renderFraction.call(t,r.currentClass,r.totalClass):O=`<span class="${r.currentClass}"></span> / <span class="${r.totalClass}"></span>`),r.type==="progressbar"&&(r.renderProgressbar?O=r.renderProgressbar.call(t,r.progressbarFillClass):O=`<span class="${r.progressbarFillClass}"></span>`),t.pagination.bullets=[],f.forEach(A=>{r.type!=="custom"&&(A.innerHTML=O||""),r.type==="bullets"&&t.pagination.bullets.push(...A.querySelectorAll(Q(r.bulletClass)))}),r.type!=="custom"&&a("paginationRender",f[0])}function D(){t.params.pagination=Ie(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const r=t.params.pagination;if(!r.el)return;let i;typeof r.el=="string"&&t.isElement&&(i=t.el.querySelector(r.el)),!i&&typeof r.el=="string"&&(i=[...document.querySelectorAll(r.el)]),i||(i=r.el),!(!i||i.length===0)&&(t.params.uniqueNavElements&&typeof r.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...t.el.querySelectorAll(r.el)],i.length>1&&(i=i.filter(f=>Ee(f,".swiper")[0]===t.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(t.pagination,{el:i}),i=X(i),i.forEach(f=>{r.type==="bullets"&&r.clickable&&f.classList.add(...(r.clickableClass||"").split(" ")),f.classList.add(r.modifierClass+r.type),f.classList.add(t.isHorizontal()?r.horizontalClass:r.verticalClass),r.type==="bullets"&&r.dynamicBullets&&(f.classList.add(`${r.modifierClass}${r.type}-dynamic`),c=0,r.dynamicMainBullets<1&&(r.dynamicMainBullets=1)),r.type==="progressbar"&&r.progressbarOpposite&&f.classList.add(r.progressbarOppositeClass),r.clickable&&f.addEventListener("click",b),t.enabled||f.classList.add(r.lockClass)}))}function k(){const r=t.params.pagination;if(u())return;let i=t.pagination.el;i&&(i=X(i),i.forEach(f=>{f.classList.remove(r.hiddenClass),f.classList.remove(r.modifierClass+r.type),f.classList.remove(t.isHorizontal()?r.horizontalClass:r.verticalClass),r.clickable&&(f.classList.remove(...(r.clickableClass||"").split(" ")),f.removeEventListener("click",b))})),t.pagination.bullets&&t.pagination.bullets.forEach(f=>f.classList.remove(...r.bulletActiveClass.split(" ")))}e("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const r=t.params.pagination;let{el:i}=t.pagination;i=X(i),i.forEach(f=>{f.classList.remove(r.horizontalClass,r.verticalClass),f.classList.add(t.isHorizontal()?r.horizontalClass:r.verticalClass)})}),e("init",()=>{t.params.pagination.enabled===!1?z():(D(),v(),m())}),e("activeIndexChange",()=>{typeof t.snapIndex>"u"&&m()}),e("snapIndexChange",()=>{m()}),e("snapGridLengthChange",()=>{v(),m()}),e("destroy",()=>{k()}),e("enable disable",()=>{let{el:r}=t.pagination;r&&(r=X(r),r.forEach(i=>i.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),e("lock unlock",()=>{m()}),e("click",(r,i)=>{const f=i.target,O=X(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&O&&O.length>0&&!f.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&f===t.navigation.nextEl||t.navigation.prevEl&&f===t.navigation.prevEl))return;const A=O[0].classList.contains(t.params.pagination.hiddenClass);a(A===!0?"paginationShow":"paginationHide"),O.forEach(L=>L.classList.toggle(t.params.pagination.hiddenClass))}});const $=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:r}=t.pagination;r&&(r=X(r),r.forEach(i=>i.classList.remove(t.params.pagination.paginationDisabledClass))),D(),v(),m()},z=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:r}=t.pagination;r&&(r=X(r),r.forEach(i=>i.classList.add(t.params.pagination.paginationDisabledClass))),k()};Object.assign(t.pagination,{enable:$,disable:z,render:v,update:m,init:D,destroy:k})}var re={},se={},oe={},ae={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Direction=void 0,function(t){t.Right="to right",t.Left="to left",t.Down="to bottom",t.Up="to top"}(n.Direction||(n.Direction={}))})(ae);(function(n){var t=H&&H.__spreadArray||function(l,o,d){if(d||arguments.length===2)for(var g=0,x=o.length,y;g<x;g++)(y||!(g in o))&&(y||(y=Array.prototype.slice.call(o,0,g)),y[g]=o[g]);return l.concat(y||Array.prototype.slice.call(o))};Object.defineProperty(n,"__esModule",{value:!0}),n.useThumbOverlap=n.assertUnreachable=n.voidFn=n.getTrackBackground=n.replaceAt=n.schd=n.translate=n.getClosestThumbIndex=n.translateThumbs=n.getPaddingAndBorder=n.getMargin=n.checkInitialOverlap=n.checkValuesAgainstBoundaries=n.checkBoundaries=n.isVertical=n.relativeValue=n.normalizeValue=n.isStepDivisible=n.isTouchEvent=n.getStepDecimals=void 0;var p=F,e=ae,a=function(l){var o=l.toString().split(".")[1];return o?o.length:0};n.getStepDecimals=a;function s(l){return l.touches&&l.touches.length||l.changedTouches&&l.changedTouches.length}n.isTouchEvent=s;function h(l,o,d){var g=(o-l)/d,x=8,y=Number(g.toFixed(x));return parseInt(y.toString(),10)===y}n.isStepDivisible=h;function c(l,o,d,g,x,y,S){var T=1e11;if(l=Math.round(l*T)/T,!y){var P=S[o-1],_=S[o+1];if(P&&P>l)return P;if(_&&_<l)return _}if(l>g)return g;if(l<d)return d;var q=Math.floor(l*T-d*T)%Math.floor(x*T),N=Math.floor(l*T-Math.abs(q)),V=q===0?l:N/T,B=Math.abs(q/T)<x/2?V:V+x,G=(0,n.getStepDecimals)(x);return parseFloat(B.toFixed(G))}n.normalizeValue=c;function u(l,o,d){return(l-o)/(d-o)}n.relativeValue=u;function w(l){return l===e.Direction.Up||l===e.Direction.Down}n.isVertical=w;function b(l,o,d){if(o>=d)throw new RangeError("min (".concat(o,") is equal/bigger than max (").concat(d,")"));if(l<o)throw new RangeError("value (".concat(l,") is smaller than min (").concat(o,")"));if(l>d)throw new RangeError("value (".concat(l,") is bigger than max (").concat(d,")"))}n.checkBoundaries=b;function m(l,o,d){return l<o?o:l>d?d:l}n.checkValuesAgainstBoundaries=m;function v(l){if(!(l.length<2)&&!l.slice(1).every(function(o,d){return l[d]<=o}))throw new RangeError("values={[".concat(l,"]} needs to be sorted when allowOverlap={false}"))}n.checkInitialOverlap=v;function D(l){var o=window.getComputedStyle(l);return{top:parseInt(o["margin-top"],10),bottom:parseInt(o["margin-bottom"],10),left:parseInt(o["margin-left"],10),right:parseInt(o["margin-right"],10)}}n.getMargin=D;function k(l){var o=window.getComputedStyle(l);return{top:parseInt(o["padding-top"],10)+parseInt(o["border-top-width"],10),bottom:parseInt(o["padding-bottom"],10)+parseInt(o["border-bottom-width"],10),left:parseInt(o["padding-left"],10)+parseInt(o["border-left-width"],10),right:parseInt(o["padding-right"],10)+parseInt(o["border-right-width"],10)}}n.getPaddingAndBorder=k;function $(l,o,d){var g=d?-1:1;l.forEach(function(x,y){return r(x,g*o[y].x,o[y].y)})}n.translateThumbs=$;function z(l,o,d,g){for(var x=0,y=E(l[0],o,d,g),S=1;S<l.length;S++){var T=E(l[S],o,d,g);T<y&&(y=T,x=S)}return x}n.getClosestThumbIndex=z;function r(l,o,d){l.style.transform="translate(".concat(o,"px, ").concat(d,"px)")}n.translate=r;var i=function(l){var o=[],d=null,g=function(){for(var x=[],y=0;y<arguments.length;y++)x[y]=arguments[y];o=x,!d&&(d=requestAnimationFrame(function(){d=null,l.apply(void 0,o)}))};return g};n.schd=i;function f(l,o,d){var g=l.slice(0);return g[o]=d,g}n.replaceAt=f;function O(l){var o=l.values,d=l.colors,g=l.min,x=l.max,y=l.direction,S=y===void 0?e.Direction.Right:y,T=l.rtl,P=T===void 0?!1:T;P&&S===e.Direction.Right?S=e.Direction.Left:P&&e.Direction.Left&&(S=e.Direction.Right);var _=o.slice(0).sort(function(N,V){return N-V}).map(function(N){return(N-g)/(x-g)*100}),q=_.reduce(function(N,V,B){return"".concat(N,", ").concat(d[B]," ").concat(V,"%, ").concat(d[B+1]," ").concat(V,"%")},"");return"linear-gradient(".concat(S,", ").concat(d[0]," 0%").concat(q,", ").concat(d[d.length-1]," 100%)")}n.getTrackBackground=O;function A(){}n.voidFn=A;function L(l){throw new Error("Didn't expect to get here")}n.assertUnreachable=L;var I=function(l,o,d,g,x){x===void 0&&(x=function(S){return S});var y=Math.ceil(t([l],Array.from(l.children),!0).reduce(function(S,T){var P=Math.ceil(T.getBoundingClientRect().width);if(T.innerText&&T.innerText.includes(d)&&T.childElementCount===0){var _=T.cloneNode(!0);_.innerHTML=x(o.toFixed(g)),_.style.visibility="hidden",document.body.appendChild(_),P=Math.ceil(_.getBoundingClientRect().width),document.body.removeChild(_)}return P>S?P:S},l.getBoundingClientRect().width));return y},R=function(l,o,d,g,x,y,S){S===void 0&&(S=function(_){return _});var T=[],P=function(_){var q=I(d[_],g[_],x,y,S),N=o[_].x;o.forEach(function(V,B){var G=V.x,W=I(d[B],g[B],x,y,S);_!==B&&(N>=G&&N<=G+W||N+q>=G&&N+q<=G+W)&&(T.includes(B)||(T.push(_),T.push(B),T=t(t([],T,!0),[_,B],!1),P(B)))})};return P(l),Array.from(new Set(T.sort()))},U=function(l,o,d,g,x,y){g===void 0&&(g=.1),x===void 0&&(x=" - "),y===void 0&&(y=function(B){return B});var S=(0,n.getStepDecimals)(g),T=(0,p.useState)({}),P=T[0],_=T[1],q=(0,p.useState)(y(o[d].toFixed(S))),N=q[0],V=q[1];return(0,p.useEffect)(function(){if(l){var B=l.getThumbs();if(B.length<1)return;var G={},W=l.getOffsets(),ee=R(d,W,B,o,x,S,y),le=y(o[d].toFixed(S));if(ee.length){var te=ee.reduce(function(Z,de,pe,fe){return Z.length?t(t([],Z,!0),[W[fe[pe]].x],!1):[W[fe[pe]].x]},[]);if(Math.min.apply(Math,te)===W[d].x){var ce=[];ee.forEach(function(Z){ce.push(o[Z].toFixed(S))}),le=Array.from(new Set(ce.sort(function(Z,de){return parseFloat(Z)-parseFloat(de)}))).map(y).join(x);var ye=Math.min.apply(Math,te),ue=Math.max.apply(Math,te),we=B[ee[te.indexOf(ue)]].getBoundingClientRect().width;G.left="".concat(Math.abs(ye-(ue+we))/2,"px"),G.transform="translate(-50%, 0)"}else G.visibility="hidden"}V(le),_(G)}},[l,o]),[N,P]};n.useThumbOverlap=U;function E(l,o,d,g){var x=l.getBoundingClientRect(),y=x.left,S=x.top,T=x.width,P=x.height;return w(g)?Math.abs(d-(S+P/2)):Math.abs(o-(y+T/2))}})(oe);var Be=H&&H.__extends||function(){var n=function(t,p){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])},n(t,p)};return function(t,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");n(t,p);function e(){this.constructor=t}t.prototype=p===null?Object.create(p):(e.prototype=p.prototype,new e)}}(),ze=H&&H.__createBinding||(Object.create?function(n,t,p,e){e===void 0&&(e=p);var a=Object.getOwnPropertyDescriptor(t,p);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[p]}}),Object.defineProperty(n,e,a)}:function(n,t,p,e){e===void 0&&(e=p),n[e]=t[p]}),Pe=H&&H.__setModuleDefault||(Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t}),Fe=H&&H.__importStar||function(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var p in n)p!=="default"&&Object.prototype.hasOwnProperty.call(n,p)&&ze(t,n,p);return Pe(t,n),t},ve=H&&H.__spreadArray||function(n,t,p){if(p||arguments.length===2)for(var e=0,a=t.length,s;e<a;e++)(s||!(e in t))&&(s||(s=Array.prototype.slice.call(t,0,e)),s[e]=t[e]);return n.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(se,"__esModule",{value:!0});var ne=Fe(F),M=oe,j=ae,Ue=["ArrowRight","ArrowUp","k","PageUp"],Ne=["ArrowLeft","ArrowDown","j","PageDown"],He=function(n){Be(t,n);function t(p){var e=n.call(this,p)||this;if(e.trackRef=ne.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(a,s){return s}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var a=e.props,s=a.direction,h=a.values,c=a.min,u=a.max,w=e.trackRef.current,b=w.getBoundingClientRect(),m=(0,M.getPaddingAndBorder)(w);return e.getThumbs().map(function(v,D){var k={x:0,y:0},$=v.getBoundingClientRect(),z=(0,M.getMargin)(v);switch(s){case j.Direction.Right:return k.x=(z.left+m.left)*-1,k.y=(($.height-b.height)/2+m.top)*-1,k.x+=b.width*(0,M.relativeValue)(h[D],c,u)-$.width/2,k;case j.Direction.Left:return k.x=(z.right+m.right)*-1,k.y=(($.height-b.height)/2+m.top)*-1,k.x+=b.width-b.width*(0,M.relativeValue)(h[D],c,u)-$.width/2,k;case j.Direction.Up:return k.x=(($.width-b.width)/2+z.left+m.left)*-1,k.y=-m.left,k.y+=b.height-b.height*(0,M.relativeValue)(h[D],c,u)-$.height/2,k;case j.Direction.Down:return k.x=(($.width-b.width)/2+z.left+m.left)*-1,k.y=-m.left,k.y+=b.height*(0,M.relativeValue)(h[D],c,u)-$.height/2,k;default:return(0,M.assertUnreachable)(s)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(a){return a.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(a){return e.getThumbs().findIndex(function(s){return s===a.target||s.contains(a.target)})},e.addTouchEvents=function(a){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(a){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(a){var s;if(a.button===0)if(a.persist(),a.preventDefault(),e.addMouseEvents(a.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(c){var u;return(u=c.current)===null||u===void 0?void 0:u.contains(a.target)}))return;e.setState({draggedTrackPos:[a.clientX,a.clientY]},function(){return e.onMove(a.clientX,a.clientY)})}else{var h=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(c){return c.current}),a.clientX,a.clientY,e.props.direction);(s=e.thumbRefs[h].current)===null||s===void 0||s.focus(),e.setState({draggedThumbIndex:h},function(){return e.onMove(a.clientX,a.clientY)})}},e.onResize=function(){(0,M.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(a){var s;if(a.persist(),e.addTouchEvents(a.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(c){var u;return(u=c.current)===null||u===void 0?void 0:u.contains(a.target)}))return;e.setState({draggedTrackPos:[a.touches[0].clientX,a.touches[0].clientY]},function(){return e.onMove(a.touches[0].clientX,a.touches[0].clientY)})}else{var h=(0,M.getClosestThumbIndex)(e.thumbRefs.map(function(c){return c.current}),a.touches[0].clientX,a.touches[0].clientY,e.props.direction);(s=e.thumbRefs[h].current)===null||s===void 0||s.focus(),e.setState({draggedThumbIndex:h},function(){return e.onMove(a.touches[0].clientX,a.touches[0].clientY)})}},e.onMouseOrTouchStart=function(a){if(!e.props.disabled){var s=(0,M.isTouchEvent)(a);if(!(!s&&a.button!==0)){var h=e.getTargetIndex(a);h!==-1&&(s?e.addTouchEvents(a):e.addMouseEvents(a),e.setState({draggedThumbIndex:h,thumbZIndexes:e.state.thumbZIndexes.map(function(c,u){return u===h?Math.max.apply(Math,e.state.thumbZIndexes):c<=e.state.thumbZIndexes[h]?c:c-1})}))}}},e.onMouseMove=function(a){a.preventDefault(),e.onMove(a.clientX,a.clientY)},e.onTouchMove=function(a){a.preventDefault(),e.onMove(a.touches[0].clientX,a.touches[0].clientY)},e.onKeyDown=function(a){var s=e.props,h=s.values,c=s.onChange,u=s.step,w=s.rtl,b=s.direction,m=e.state.isChanged,v=e.getTargetIndex(a.nativeEvent),D=w||b===j.Direction.Left||b===j.Direction.Down?-1:1;v!==-1&&(Ue.includes(a.key)?(a.preventDefault(),e.setState({draggedThumbIndex:v,isChanged:!0}),c((0,M.replaceAt)(h,v,e.normalizeValue(h[v]+D*(a.key==="PageUp"?u*10:u),v)))):Ne.includes(a.key)?(a.preventDefault(),e.setState({draggedThumbIndex:v,isChanged:!0}),c((0,M.replaceAt)(h,v,e.normalizeValue(h[v]-D*(a.key==="PageDown"?u*10:u),v)))):a.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){m&&e.fireOnFinalChange()}):m&&e.fireOnFinalChange())},e.onKeyUp=function(a){var s=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){s&&e.fireOnFinalChange()})},e.onMove=function(a,s){var h=e.state,c=h.draggedThumbIndex,u=h.draggedTrackPos,w=e.props,b=w.direction,m=w.min,v=w.max,D=w.onChange,k=w.values,$=w.step,z=w.rtl;if(c===-1&&u[0]===-1&&u[1]===-1)return null;var r=e.trackRef.current;if(!r)return null;var i=r.getBoundingClientRect(),f=(0,M.isVertical)(b)?i.height:i.width;if(u[0]!==-1&&u[1]!==-1){var O=a-u[0],A=s-u[1],L=0;switch(b){case j.Direction.Right:case j.Direction.Left:L=O/f*(v-m);break;case j.Direction.Down:case j.Direction.Up:L=A/f*(v-m);break;default:(0,M.assertUnreachable)(b)}if(z&&(L*=-1),Math.abs(L)>=$/2){for(var I=0;I<e.thumbRefs.length;I++){if(k[I]===v&&Math.sign(L)===1||k[I]===m&&Math.sign(L)===-1)return;var R=k[I]+L;R>v?L=v-k[I]:R<m&&(L=m-k[I])}for(var U=k.slice(0),I=0;I<e.thumbRefs.length;I++)U=(0,M.replaceAt)(U,I,e.normalizeValue(k[I]+L,I));e.setState({draggedTrackPos:[a,s]}),D(U)}}else{var E=0;switch(b){case j.Direction.Right:E=(a-i.left)/f*(v-m)+m;break;case j.Direction.Left:E=(f-(a-i.left))/f*(v-m)+m;break;case j.Direction.Down:E=(s-i.top)/f*(v-m)+m;break;case j.Direction.Up:E=(f-(s-i.top))/f*(v-m)+m;break;default:(0,M.assertUnreachable)(b)}z&&(E=v+m-E),Math.abs(k[c]-E)>=$/2&&D((0,M.replaceAt)(k,c,e.normalizeValue(E,c)))}},e.normalizeValue=function(a,s){var h=e.props,c=h.min,u=h.max,w=h.step,b=h.allowOverlap,m=h.values;return(0,M.normalizeValue)(a,s,c,u,w,b,m)},e.onEnd=function(a){if(a.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var a=e.props,s=a.onFinalChange,h=a.values;s&&s(h)},e.updateMarkRefs=function(a){if(!a.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(a.max-a.min)/e.props.step,e.markRefs=[];for(var s=0;s<e.numOfMarks+1;s++)e.markRefs[s]=ne.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var a=window.getComputedStyle(e.trackRef.current),s=parseInt(a.width,10),h=parseInt(a.height,10),c=parseInt(a.paddingLeft,10),u=parseInt(a.paddingTop,10),w=[],b=0;b<e.numOfMarks+1;b++){var m=9999,v=9999;if(e.markRefs[b].current){var D=e.markRefs[b].current.getBoundingClientRect();m=D.height,v=D.width}e.props.direction===j.Direction.Left||e.props.direction===j.Direction.Right?w.push([Math.round(s/e.numOfMarks*b+c-v/2),-Math.round((m-h)/2)]):w.push([Math.round(h/e.numOfMarks*b+u-m/2),-Math.round((v-s)/2)])}e.setState({markOffsets:w})}},p.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,M.schd)(e.onMouseMove),e.schdOnTouchMove=(0,M.schd)(e.onTouchMove),e.schdOnEnd=(0,M.schd)(e.onEnd),e.thumbRefs=p.values.map(function(){return ne.createRef()}),e.updateMarkRefs(p),e}return t.prototype.componentDidMount=function(){var p=this,e=this.props,a=e.values,s=e.min,h=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",p.onResize)},unobserve:function(){return window.removeEventListener("resize",p.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,M.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(c){return(0,M.checkBoundaries)(c,p.props.min,p.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),a.forEach(function(c){(0,M.isStepDivisible)(s,c,h)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(p,e){var a=this.props,s=a.max,h=a.min,c=a.step,u=a.values,w=a.rtl;(p.max!==s||p.min!==h||p.step!==c)&&this.updateMarkRefs(this.props),(0,M.translateThumbs)(this.getThumbs(),this.getOffsets(),w),(p.max!==s||p.min!==h||p.step!==c||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),u.forEach(function(b){(0,M.isStepDivisible)(h,b,c)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var p={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,p),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var p=this,e=this.props,a=e.renderTrack,s=e.renderThumb,h=e.renderMark,c=h===void 0?function(){return null}:h,u=e.values,w=e.min,b=e.max,m=e.allowOverlap,v=e.disabled,D=this.state,k=D.draggedThumbIndex,$=D.thumbZIndexes,z=D.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:k>-1?"grabbing":this.props.draggableTrack?(0,M.isVertical)(this.props.direction)?"ns-resize":"ew-resize":u.length===1&&!v?"pointer":"inherit"},onMouseDown:v?M.voidFn:this.onMouseDownTrack,onTouchStart:v?M.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:v,children:ve(ve([],z.map(function(r,i,f){return c({props:{style:p.props.direction===j.Direction.Left||p.props.direction===j.Direction.Right?{position:"absolute",left:"".concat(r[0],"px"),marginTop:"".concat(r[1],"px")}:{position:"absolute",top:"".concat(r[0],"px"),marginLeft:"".concat(r[1],"px")},key:"mark".concat(i),ref:p.markRefs[i]},index:i})}),!0),u.map(function(r,i){var f=p.state.draggedThumbIndex===i;return s({index:i,value:r,isDragged:f,props:{style:{position:"absolute",zIndex:$[i],cursor:v?"inherit":f?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:i,tabIndex:v?void 0:0,"aria-valuemax":m?b:u[i+1]||b,"aria-valuemin":m?w:u[i-1]||w,"aria-valuenow":r,draggable:!1,ref:p.thumbRefs[i],role:"slider",onKeyDown:v?M.voidFn:p.onKeyDown,onKeyUp:v?M.voidFn:p.onKeyUp}})}),!0)})},t.defaultProps={step:1,direction:j.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ne.Component);se.default=He;(function(n){var t=H&&H.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(n,"__esModule",{value:!0}),n.checkValuesAgainstBoundaries=n.relativeValue=n.useThumbOverlap=n.Direction=n.getTrackBackground=n.Range=void 0;var p=t(se);n.Range=p.default;var e=oe;Object.defineProperty(n,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(n,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(n,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(n,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var a=ae;Object.defineProperty(n,"Direction",{enumerable:!0,get:function(){return a.Direction}})})(re);const qe=1,Ve=1,Ge=Y.div`
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
`,We=({options:n,onAnswer:t})=>{const[p,e]=ke.useState([1]),a=n.length,{i18n:s}=ie(),h=F.useCallback(c=>{var u;e(c),t(`${(u=n[c[0]-1])==null?void 0:u.value}`)},[t,n]);return F.useEffect(()=>{var c;t(`${(c=n[0])==null?void 0:c.value}`)},[]),C.jsx(Ge,{children:C.jsx(re.Range,{step:qe,min:Ve,max:a,direction:re.Direction.Down,values:p,onChange:c=>h(c),rtl:!1,renderMark:({props:c,index:u})=>C.jsxs(Ye,{...c,children:[C.jsx("div",{className:"line"}),C.jsx("div",{className:"content",children:C.jsx(Ce.Text,{size:"14",children:n[u].label[s.language]})})]}),renderTrack:({props:c,children:u})=>C.jsx(Xe,{$isMobile:Me,role:"button",tabIndex:0,onMouseDown:c.onMouseDown,onTouchStart:c.onTouchStart,style:{...c.style},children:C.jsx("div",{className:"track",ref:c.ref,children:u})}),renderThumb:({props:c})=>C.jsx(Ke,{...c,style:{...c.style}})})})},Ze=Y.div`
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
`,et=({step:n,onAnswer:t,answers:p})=>{const{settings:e}=F.useContext(be.EscolaLMSContext),{i18n:a}=ie(),s=F.useCallback(()=>n.image?e.value.onboarding[n.image]:null,[n,e.value.onboarding]),h=F.useCallback(c=>{switch(n.type){case J.radio:return C.jsx(K.Radio,{value:c.value,label:c.label[a.language],name:n.data,onChange:u=>t(u.target.value)});case J.options:return C.jsx(Je,{$isActive:p&&p[n.data]===c.value||!1,onClick:()=>t(c.value),children:c.label[a.language]});default:return C.jsx(K.Radio,{value:c.value,label:c.label[a.language],name:n.data,onChange:u=>t(u.target.value)})}},[a.language,n.type,n.data,t,p]);return C.jsxs(Ze,{children:[n.image&&s()&&C.jsx("div",{className:"step-image",children:C.jsx(xe,{path:s(),srcSizes:[500,750,1e3]})}),n.hint&&C.jsxs(Qe,{children:[C.jsx(K.Title,{level:4,children:n.hint.title[a.language]}),C.jsx(K.Text,{size:"13",children:n.hint.text[a.language]})]}),C.jsx(K.Title,{level:4,children:n.question[a.language]}),C.jsxs("div",{className:`options ${n.type===J.options?"buttons":""}`,children:[n.type===J.slide&&C.jsx(We,{options:n.options,onAnswer:t}),n.type!==J.slide&&n.options.map((c,u)=>C.jsx("div",{className:"option",children:h(c)},c.value+u))]})]})},tt=Y.div`
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
`;var J=(n=>(n.radio="radio",n.options="options",n.slide="slide",n))(J||{});const at=()=>{var z;const{settings:n,fetchSettings:t,updateProfile:p,fetchProfile:e,user:a}=F.useContext(be.EscolaLMSContext),{t:s,i18n:h}=ie(),c=Oe(),[u,w]=F.useState({steps:[],currentStep:0,answers:{},isLastStep:!1}),b=F.useRef();(z=a.value)!=null&&z.isOnboardingCompleted&&c.push(ge.home);const m=F.useCallback(()=>{const r=Object.keys(n.value.onboarding).filter(i=>i.startsWith("step_")).map(i=>n.value.onboarding[i]).sort((i,f)=>i.order-f.order);w({steps:r,currentStep:0,isLastStep:!1})},[n]),v=F.useMemo(()=>{if(n.value.onboarding.last_step)return{...n.value.onboarding.last_step,image:n.value.onboarding.image_last_step}},[n]);F.useEffect(()=>{t(),m()},[t]),F.useEffect(()=>{b.current&&!u.isLastStep&&b.current.slideTo(u.currentStep)},[u]);const D=F.useCallback(async()=>{try{(await p({...u.answers,isOnboardingCompleted:!0})).success&&e()}catch(r){console.log("error",r)}c.push(ge.home)},[u.answers,c]),k=F.useMemo(()=>{const r=u.steps[u.currentStep];return r&&u.answers&&u.answers[r.data]?!1:u.currentStep===u.steps.length?(w(f=>({...f,isLastStep:!0})),!1):!0},[u.steps,u.answers,u.currentStep]),$=F.useCallback(()=>{u.currentStep===u.steps.length?D():w(r=>({...r,currentStep:r.currentStep+1}))},[u.currentStep,u.steps.length,D]);return C.jsx(tt,{className:"onboarding",$lastStep:u.isLastStep,children:C.jsx(Se,{children:C.jsx(De.Col,{offset:{lg:3},lg:6,children:C.jsxs("div",{className:"onboarding__content",children:[u.isLastStep?C.jsxs(nt,{children:[C.jsx(xe,{path:v.image,srcSizes:[500,750,1e3]}),C.jsx(K.Title,{level:2,children:v.title[h.language]}),C.jsx(K.Text,{children:v.text[h.language]})]}):C.jsx(_e,{className:"onboarding__swiper",modules:[$e,je,Ae],slidesPerView:1,allowTouchMove:!1,initialSlide:0,pagination:!0,autoHeight:!0,onBeforeInit:r=>{b.current=r},children:u.steps.map((r,i)=>C.jsx(Le,{children:C.jsx(et,{answers:u.answers,step:r,onAnswer:f=>w(O=>({...O,answers:{...O.answers,[r.data]:f}}))})},i))}),C.jsx(K.Button,{className:"next-step",disabled:k,onClick:$,children:s("Next")})]})})})})},rt=Y.div`
  background-color: #f8f8f8;
  height: 100%;
  min-height: calc(100vh - 110px);
  padding: 50px 150px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`,ct=()=>C.jsx(rt,{children:C.jsx(at,{})});export{ct as default};
