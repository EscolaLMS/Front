import{a as re,j as m,g as we,o as ke,q as K,D as ve,l as W,as as me,G as he,b as Me,f as fe,C as Te,J as Oe,ag as Se}from"./index-D5UVe-mj.js";import{r as P,R as Re}from"./sentry-DZqhWugq.js";import{a as _e,N as De,A as Ee,P as Ce,S as je}from"./swiper-CphuuvCl.js";import{c as z}from"./katex-D1m830yy.js";import"./lodash-Bu-jC-fW.js";var ne={},ae={},ie={},G={};Object.defineProperty(G,"__esModule",{value:!0});G.Direction=void 0;var ge;(function(t){t.Right="to right",t.Left="to left",t.Down="to bottom",t.Up="to top"})(ge||(G.Direction=ge={}));(function(t){var u=z&&z.__spreadArray||function(r,s,d){if(d||arguments.length===2)for(var b=0,x=s.length,v;b<x;b++)(v||!(b in s))&&(v||(v=Array.prototype.slice.call(s,0,b)),v[b]=s[b]);return r.concat(v||Array.prototype.slice.call(s))};Object.defineProperty(t,"__esModule",{value:!0}),t.isIOS=t.useThumbOverlap=t.assertUnreachable=t.voidFn=t.getTrackBackground=t.replaceAt=t.schd=t.translate=t.getClosestThumbIndex=t.translateThumbs=t.getPaddingAndBorder=t.getMargin=t.checkInitialOverlap=t.checkValuesAgainstBoundaries=t.checkBoundaries=t.isVertical=t.relativeValue=t.normalizeValue=t.isStepDivisible=t.isTouchEvent=t.getStepDecimals=void 0;var c=P,e=G,n=function(r){var s=r.toString().split(".")[1];return s?s.length:0};t.getStepDecimals=n;function i(r){return r.touches&&r.touches.length||r.changedTouches&&r.changedTouches.length}t.isTouchEvent=i;function l(r,s,d){var b=(s-r)/d,x=8,v=Number(b.toFixed(x));return parseInt(v.toString(),10)===v}t.isStepDivisible=l;function o(r,s,d,b,x,v,M){var w=1e11;if(r=Math.round(r*w)/w,!v){var I=M[s-1],R=M[s+1];if(I&&I>r)return I;if(R&&R<r)return R}if(r>b)return b;if(r<d)return d;var U=Math.floor(r*w-d*w)%Math.floor(x*w),L=Math.floor(r*w-Math.abs(U)),N=U===0?r:L/w,j=Math.abs(U/w)<x/2?N:N+x,V=(0,t.getStepDecimals)(x);return parseFloat(j.toFixed(V))}t.normalizeValue=o;function a(r,s,d){return(r-s)/(d-s)}t.relativeValue=a;function k(r){return r===e.Direction.Up||r===e.Direction.Down}t.isVertical=k;function f(r,s,d){if(s>=d)throw new RangeError("min (".concat(s,") is equal/bigger than max (").concat(d,")"));if(r<s)throw new RangeError("value (".concat(r,") is smaller than min (").concat(s,")"));if(r>d)throw new RangeError("value (".concat(r,") is bigger than max (").concat(d,")"))}t.checkBoundaries=f;function g(r,s,d){return r<s?s:r>d?d:r}t.checkValuesAgainstBoundaries=g;function h(r){if(!(r.length<2)&&!r.slice(1).every(function(s,d){return r[d]<=s}))throw new RangeError("values={[".concat(r,"]} needs to be sorted when allowOverlap={false}"))}t.checkInitialOverlap=h;function S(r){var s=window.getComputedStyle(r);return{top:parseInt(s["margin-top"],10),bottom:parseInt(s["margin-bottom"],10),left:parseInt(s["margin-left"],10),right:parseInt(s["margin-right"],10)}}t.getMargin=S;function p(r){var s=window.getComputedStyle(r);return{top:parseInt(s["padding-top"],10)+parseInt(s["border-top-width"],10),bottom:parseInt(s["padding-bottom"],10)+parseInt(s["border-bottom-width"],10),left:parseInt(s["padding-left"],10)+parseInt(s["border-left-width"],10),right:parseInt(s["padding-right"],10)+parseInt(s["border-right-width"],10)}}t.getPaddingAndBorder=p;function _(r,s,d){var b=d?-1:1;r.forEach(function(x,v){return T(x,b*s[v].x,s[v].y)})}t.translateThumbs=_;function B(r,s,d,b){for(var x=0,v=F(r[0],s,d,b),M=1;M<r.length;M++){var w=F(r[M],s,d,b);w<v&&(v=w,x=M)}return x}t.getClosestThumbIndex=B;function T(r,s,d){r.style.transform="translate(".concat(s,"px, ").concat(d,"px)")}t.translate=T;var D=function(r){var s=[],d=null,b=function(){for(var x=[],v=0;v<arguments.length;v++)x[v]=arguments[v];s=x,!d&&(d=requestAnimationFrame(function(){d=null,r.apply(void 0,s)}))};return b};t.schd=D;function O(r,s,d){var b=r.slice(0);return b[s]=d,b}t.replaceAt=O;function C(r){var s=r.values,d=r.colors,b=r.min,x=r.max,v=r.direction,M=v===void 0?e.Direction.Right:v,w=r.rtl,I=w===void 0?!1:w;I&&M===e.Direction.Right?M=e.Direction.Left:I&&e.Direction.Left&&(M=e.Direction.Right);var R=s.slice(0).sort(function(L,N){return L-N}).map(function(L){return(L-b)/(x-b)*100}),U=R.reduce(function(L,N,j){return"".concat(L,", ").concat(d[j]," ").concat(N,"%, ").concat(d[j+1]," ").concat(N,"%")},"");return"linear-gradient(".concat(M,", ").concat(d[0]," 0%").concat(U,", ").concat(d[d.length-1]," 100%)")}t.getTrackBackground=C;function Y(){}t.voidFn=Y;function $(r){throw new Error("Didn't expect to get here")}t.assertUnreachable=$;var A=function(r,s,d,b,x){x===void 0&&(x=function(M){return M});var v=Math.ceil(u([r],Array.from(r.children),!0).reduce(function(M,w){var I=Math.ceil(w.getBoundingClientRect().width);if(w.innerText&&w.innerText.includes(d)&&w.childElementCount===0){var R=w.cloneNode(!0);R.innerHTML=x(s.toFixed(b)),R.style.visibility="hidden",document.body.appendChild(R),I=Math.ceil(R.getBoundingClientRect().width),document.body.removeChild(R)}return I>M?I:M},r.getBoundingClientRect().width));return v},J=function(r,s,d,b,x,v,M){M===void 0&&(M=function(R){return R});var w=[],I=function(R){var U=A(d[R],b[R],x,v,M),L=s[R].x;s.forEach(function(N,j){var V=N.x,q=A(d[j],b[j],x,v,M);R!==j&&(L>=V&&L<=V+q||L+U>=V&&L+U<=V+q)&&(w.includes(j)||(w.push(R),w.push(j),w=u(u([],w,!0),[R,j],!1),I(j)))})};return I(r),Array.from(new Set(w.sort()))},H=function(r,s,d,b,x,v){b===void 0&&(b=.1),x===void 0&&(x=" - "),v===void 0&&(v=function(j){return j});var M=(0,t.getStepDecimals)(b),w=(0,c.useState)({}),I=w[0],R=w[1],U=(0,c.useState)(v(s[d].toFixed(M))),L=U[0],N=U[1];return(0,c.useEffect)(function(){if(r){var j=r.getThumbs();if(j.length<1)return;var V={},q=r.getOffsets(),Q=J(d,q,j,s,x,M,v),oe=v(s[d].toFixed(M));if(Q.length){var ee=Q.reduce(function(X,ue,le,de){return X.length?u(u([],X,!0),[q[de[le]].x],!1):[q[de[le]].x]},[]);if(Math.min.apply(Math,ee)===q[d].x){var se=[];Q.forEach(function(X){se.push(s[X].toFixed(M))}),oe=Array.from(new Set(se.sort(function(X,ue){return parseFloat(X)-parseFloat(ue)}))).map(v).join(x);var xe=Math.min.apply(Math,ee),ce=Math.max.apply(Math,ee),ye=j[Q[ee.indexOf(ce)]].getBoundingClientRect().width;V.left="".concat(Math.abs(xe-(ce+ye))/2,"px"),V.transform="translate(-50%, 0)"}else V.visibility="hidden"}N(oe),R(V)}},[r,s]),[L,I]};t.useThumbOverlap=H;function F(r,s,d,b){var x=r.getBoundingClientRect(),v=x.left,M=x.top,w=x.width,I=x.height;return k(b)?Math.abs(d-(M+I/2)):Math.abs(s-(v+w/2))}var be=function(){var r,s=((r=navigator.userAgentData)===null||r===void 0?void 0:r.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(s)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};t.isIOS=be})(ie);var Ie=z&&z.__extends||function(){var t=function(u,c){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},t(u,c)};return function(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");t(u,c);function e(){this.constructor=u}u.prototype=c===null?Object.create(c):(e.prototype=c.prototype,new e)}}(),Pe=z&&z.__createBinding||(Object.create?function(t,u,c,e){e===void 0&&(e=c);var n=Object.getOwnPropertyDescriptor(u,c);(!n||("get"in n?!u.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return u[c]}}),Object.defineProperty(t,e,n)}:function(t,u,c,e){e===void 0&&(e=c),t[e]=u[c]}),Ae=z&&z.__setModuleDefault||(Object.create?function(t,u){Object.defineProperty(t,"default",{enumerable:!0,value:u})}:function(t,u){t.default=u}),Be=z&&z.__importStar||function(t){if(t&&t.__esModule)return t;var u={};if(t!=null)for(var c in t)c!=="default"&&Object.prototype.hasOwnProperty.call(t,c)&&Pe(u,t,c);return Ae(u,t),u},pe=z&&z.__spreadArray||function(t,u,c){if(c||arguments.length===2)for(var e=0,n=u.length,i;e<n;e++)(i||!(e in u))&&(i||(i=Array.prototype.slice.call(u,0,e)),i[e]=u[e]);return t.concat(i||Array.prototype.slice.call(u))};Object.defineProperty(ae,"__esModule",{value:!0});var te=Be(P),y=ie,E=G,Le=["ArrowRight","ArrowUp","k","PageUp"],ze=["ArrowLeft","ArrowDown","j","PageDown"],$e=function(t){Ie(u,t);function u(c){var e=t.call(this,c)||this;if(e.trackRef=te.createRef(),e.thumbRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(n,i){return i}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var n=e.props,i=n.direction,l=n.values,o=n.min,a=n.max,k=e.trackRef.current;if(!k)return console.warn("No track element found."),[];var f=k.getBoundingClientRect(),g=(0,y.getPaddingAndBorder)(k);return e.getThumbs().map(function(h,S){var p={x:0,y:0},_=h.getBoundingClientRect(),B=(0,y.getMargin)(h);switch(i){case E.Direction.Right:return p.x=(B.left+g.left)*-1,p.y=((_.height-f.height)/2+g.top)*-1,p.x+=f.width*(0,y.relativeValue)(l[S],o,a)-_.width/2,p;case E.Direction.Left:return p.x=(B.right+g.right)*-1,p.y=((_.height-f.height)/2+g.top)*-1,p.x+=f.width-f.width*(0,y.relativeValue)(l[S],o,a)-_.width/2,p;case E.Direction.Up:return p.x=((_.width-f.width)/2+B.left+g.left)*-1,p.y=-g.left,p.y+=f.height-f.height*(0,y.relativeValue)(l[S],o,a)-_.height/2,p;case E.Direction.Down:return p.x=((_.width-f.width)/2+B.left+g.left)*-1,p.y=-g.left,p.y+=f.height*(0,y.relativeValue)(l[S],o,a)-_.height/2,p;default:return(0,y.assertUnreachable)(i)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(n){return n.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(n){return e.getThumbs().findIndex(function(i){return i===n.target||i.contains(n.target)})},e.addTouchEvents=function(n){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(n){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(n){var i;if(!(n.button!==0||(0,y.isIOS)()))if(n.persist(),n.preventDefault(),e.addMouseEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(o){var a;return(a=o.current)===null||a===void 0?void 0:a.contains(n.target)}))return;e.setState({draggedTrackPos:[n.clientX,n.clientY]},function(){return e.onMove(n.clientX,n.clientY)})}else{var l=(0,y.getClosestThumbIndex)(e.thumbRefs.map(function(o){return o.current}),n.clientX,n.clientY,e.props.direction);(i=e.thumbRefs[l].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.clientX,n.clientY)})}},e.onResize=function(){(0,y.translateThumbs)(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(n){var i;if(n.persist(),e.addTouchEvents(n.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(o){var a;return(a=o.current)===null||a===void 0?void 0:a.contains(n.target)}))return;e.setState({draggedTrackPos:[n.touches[0].clientX,n.touches[0].clientY]},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}else{var l=(0,y.getClosestThumbIndex)(e.thumbRefs.map(function(o){return o.current}),n.touches[0].clientX,n.touches[0].clientY,e.props.direction);(i=e.thumbRefs[l].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:l},function(){return e.onMove(n.touches[0].clientX,n.touches[0].clientY)})}},e.onMouseOrTouchStart=function(n){if(!e.props.disabled){var i=(0,y.isTouchEvent)(n);if(!(!i&&n.button!==0)){var l=e.getTargetIndex(n);l!==-1&&(i?e.addTouchEvents(n):e.addMouseEvents(n),e.setState({draggedThumbIndex:l,thumbZIndexes:e.state.thumbZIndexes.map(function(o,a){return a===l?Math.max.apply(Math,e.state.thumbZIndexes):o<=e.state.thumbZIndexes[l]?o:o-1})}))}}},e.onMouseMove=function(n){n.preventDefault(),e.onMove(n.clientX,n.clientY)},e.onTouchMove=function(n){n.preventDefault(),e.onMove(n.touches[0].clientX,n.touches[0].clientY)},e.onKeyDown=function(n){var i=e.props,l=i.values,o=i.onChange,a=i.step,k=i.rtl,f=i.direction,g=e.state.isChanged,h=e.getTargetIndex(n.nativeEvent),S=k||f===E.Direction.Left||f===E.Direction.Down?-1:1;h!==-1&&(Le.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:h,isChanged:!0}),o((0,y.replaceAt)(l,h,e.normalizeValue(l[h]+S*(n.key==="PageUp"?a*10:a),h)))):ze.includes(n.key)?(n.preventDefault(),e.setState({draggedThumbIndex:h,isChanged:!0}),o((0,y.replaceAt)(l,h,e.normalizeValue(l[h]-S*(n.key==="PageDown"?a*10:a),h)))):n.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){g&&e.fireOnFinalChange()}):g&&e.fireOnFinalChange())},e.onKeyUp=function(n){var i=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){i&&e.fireOnFinalChange()})},e.onMove=function(n,i){var l=e.state,o=l.draggedThumbIndex,a=l.draggedTrackPos,k=e.props,f=k.direction,g=k.min,h=k.max,S=k.onChange,p=k.values,_=k.step,B=k.rtl;if(o===-1&&a[0]===-1&&a[1]===-1)return null;var T=e.trackRef.current;if(!T)return null;var D=T.getBoundingClientRect(),O=(0,y.isVertical)(f)?D.height:D.width;if(a[0]!==-1&&a[1]!==-1){var C=n-a[0],Y=i-a[1],$=0;switch(f){case E.Direction.Right:case E.Direction.Left:$=C/O*(h-g);break;case E.Direction.Down:case E.Direction.Up:$=Y/O*(h-g);break;default:(0,y.assertUnreachable)(f)}if(B&&($*=-1),Math.abs($)>=_/2){for(var A=0;A<e.thumbRefs.length;A++){if(p[A]===h&&Math.sign($)===1||p[A]===g&&Math.sign($)===-1)return;var J=p[A]+$;J>h?$=h-p[A]:J<g&&($=g-p[A])}for(var H=p.slice(0),A=0;A<e.thumbRefs.length;A++)H=(0,y.replaceAt)(H,A,e.normalizeValue(p[A]+$,A));e.setState({draggedTrackPos:[n,i]}),S(H)}}else{var F=0;switch(f){case E.Direction.Right:F=(n-D.left)/O*(h-g)+g;break;case E.Direction.Left:F=(O-(n-D.left))/O*(h-g)+g;break;case E.Direction.Down:F=(i-D.top)/O*(h-g)+g;break;case E.Direction.Up:F=(O-(i-D.top))/O*(h-g)+g;break;default:(0,y.assertUnreachable)(f)}B&&(F=h+g-F),Math.abs(p[o]-F)>=_/2&&S((0,y.replaceAt)(p,o,e.normalizeValue(F,o)))}},e.normalizeValue=function(n,i){var l=e.props,o=l.min,a=l.max,k=l.step,f=l.allowOverlap,g=l.values;return(0,y.normalizeValue)(n,i,o,a,k,f,g)},e.onEnd=function(n){if(n.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var n=e.props,i=n.onFinalChange,l=n.values;i&&i(l)},e.updateMarkRefs=function(n){if(!n.renderMark){e.numOfMarks=void 0,e.markRefs=void 0;return}e.numOfMarks=(n.max-n.min)/e.props.step,e.markRefs=[];for(var i=0;i<e.numOfMarks+1;i++)e.markRefs[i]=te.createRef()},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||!e.numOfMarks||!e.markRefs||e.trackRef.current===null)){for(var n=window.getComputedStyle(e.trackRef.current),i=parseInt(n.width,10),l=parseInt(n.height,10),o=parseInt(n.paddingLeft,10),a=parseInt(n.paddingTop,10),k=[],f=0;f<e.numOfMarks+1;f++){var g=9999,h=9999;if(e.markRefs[f].current){var S=e.markRefs[f].current.getBoundingClientRect();g=S.height,h=S.width}e.props.direction===E.Direction.Left||e.props.direction===E.Direction.Right?k.push([Math.round(i/e.numOfMarks*f+o-h/2),-Math.round((g-l)/2)]):k.push([Math.round(l/e.numOfMarks*f+a-g/2),-Math.round((h-i)/2)])}e.setState({markOffsets:k})}},c.step===0)throw new Error('"step" property should be a positive number');return e.schdOnMouseMove=(0,y.schd)(e.onMouseMove),e.schdOnTouchMove=(0,y.schd)(e.onTouchMove),e.schdOnEnd=(0,y.schd)(e.onEnd),e.thumbRefs=c.values.map(function(){return te.createRef()}),e.updateMarkRefs(c),e}return u.prototype.componentDidMount=function(){var c=this,e=this.props,n=e.values,i=e.min,l=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",c.onResize)},unobserve:function(){return window.removeEventListener("resize",c.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,y.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(o){return(0,y.checkBoundaries)(o,c.props.min,c.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,y.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach(function(o){(0,y.isStepDivisible)(i,o,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},u.prototype.componentDidUpdate=function(c,e){var n=this.props,i=n.max,l=n.min,o=n.step,a=n.values,k=n.rtl;(c.max!==i||c.min!==l||c.step!==o)&&this.updateMarkRefs(this.props),(0,y.translateThumbs)(this.getThumbs(),this.getOffsets(),k),(c.max!==i||c.min!==l||c.step!==o||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),a.forEach(function(f){(0,y.isStepDivisible)(l,f,o)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},u.prototype.componentWillUnmount=function(){var c={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,c),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},u.prototype.render=function(){var c=this,e=this.props,n=e.label,i=e.labelledBy,l=e.renderTrack,o=e.renderThumb,a=e.renderMark,k=a===void 0?function(){return null}:a,f=e.values,g=e.min,h=e.max,S=e.allowOverlap,p=e.disabled,_=this.state,B=_.draggedThumbIndex,T=_.thumbZIndexes,D=_.markOffsets;return l({props:{style:{transform:"scale(1)",cursor:B>-1?"grabbing":this.props.draggableTrack?(0,y.isVertical)(this.props.direction)?"ns-resize":"ew-resize":f.length===1&&!p?"pointer":"inherit"},onMouseDown:p?y.voidFn:this.onMouseDownTrack,onTouchStart:p?y.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:p,children:pe(pe([],D.map(function(O,C,Y){return k({props:{style:c.props.direction===E.Direction.Left||c.props.direction===E.Direction.Right?{position:"absolute",left:"".concat(O[0],"px"),marginTop:"".concat(O[1],"px")}:{position:"absolute",top:"".concat(O[0],"px"),marginLeft:"".concat(O[1],"px")},key:"mark".concat(C),ref:c.markRefs[C]},index:C})}),!0),f.map(function(O,C){var Y=c.state.draggedThumbIndex===C;return o({index:C,value:O,isDragged:Y,props:{style:{position:"absolute",zIndex:T[C],cursor:p?"inherit":Y?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:C,tabIndex:p?void 0:0,"aria-valuemax":S?h:f[C+1]||h,"aria-valuemin":S?g:f[C-1]||g,"aria-valuenow":O,draggable:!1,ref:c.thumbRefs[C],"aria-label":n,"aria-labelledby":i,role:"slider",onKeyDown:p?y.voidFn:c.onKeyDown,onKeyUp:p?y.voidFn:c.onKeyUp}})}),!0)})},u.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:E.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},u}(te.Component);ae.default=$e;(function(t){var u=z&&z.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkValuesAgainstBoundaries=t.relativeValue=t.useThumbOverlap=t.Direction=t.getTrackBackground=t.Range=void 0;var c=u(ae);t.Range=c.default;var e=ie;Object.defineProperty(t,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(t,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(t,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(t,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var n=G;Object.defineProperty(t,"Direction",{enumerable:!0,get:function(){return n.Direction}})})(ne);const Fe=1,Ue=1,Ne=K.div`
  display: flex;
  align-items: "flex-start";
  padding: 24px 20px;
  flex-direction: column;
`,Ve=K.div`
  margin-left: 30px;
  display: flex;
  right: -18px;
  align-items: center;
  justify-content: center;

  position: relative;
  .line {
    height: 1px;
    width: 11px;
    background-color: ${({theme:t})=>t.textColor};
  }
  .content {
    position: absolute;
    left: 40px;
    width: 300px;
  }
`,Ke=K.div`
  flex-grow: 1;
  width: 36px;
  display: flex;
  height: ${({$isMobile:t})=>t?"250px":"400px"};

  .track {
    position: relative;
    width: 4px;
    height: 100%;
    border-radius: 36px;
    background-color: ${({theme:t})=>t.primaryColor};
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
      background-color: ${({theme:t})=>t.primaryColor};
    }
    &::after {
      top: inherit;
      bottom: -27px;
    }
  }
`,We=K.div`
  height: 23px;
  width: 42px;
  border-radius: ${({theme:t})=>t.buttonRadius}px;
  background-color: ${({theme:t})=>t.primaryColor};
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
      ${({theme:t})=>t.primaryColor};
    transform: rotate(0deg);
  }
`,Ye=({options:t,onAnswer:u})=>{const[c,e]=Re.useState([1]),n=t.length,{i18n:i}=re(),l=P.useCallback(o=>{var a;e(o),u(`${(a=t[o[0]-1])==null?void 0:a.value}`)},[u,t]);return P.useEffect(()=>{var o;u(`${(o=t[0])==null?void 0:o.value}`)},[]),m.jsx(Ne,{children:m.jsx(ne.Range,{step:Fe,min:Ue,max:n,direction:ne.Direction.Down,values:c,onChange:o=>l(o),rtl:!1,renderMark:({props:o,index:a})=>m.jsxs(Ve,{...o,children:[m.jsx("div",{className:"line"}),m.jsx("div",{className:"content",children:m.jsx(ke.Text,{size:"14",children:t[a].label[i.language]})})]}),renderTrack:({props:o,children:a})=>m.jsx(Ke,{$isMobile:we,role:"button",tabIndex:0,onMouseDown:o.onMouseDown,onTouchStart:o.onTouchStart,style:{...o.style},children:m.jsx("div",{className:"track",ref:o.ref,children:a})}),renderThumb:({props:o})=>m.jsx(We,{...o,style:{...o.style}})})})},qe=K.div`
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
`,Xe=K.button`
  all: unset;
  border-radius: 20px;
  font-size: 14px;
  font-family: ${({theme:t})=>t.font};
  color: ${({theme:t})=>t.textColor};
  border: 1px solid
    ${({theme:t,$isActive:u})=>u?t.primaryColor:"#E0E0E0"};
  padding: 11px 17px;
`,Ze=K.div`
  position: relative;
  border-radius: ${({theme:t})=>t.cardRadius}px;
  background-color: ${({theme:t})=>he(t.mode,t.white,t.textColor)};
  margin-bottom: 35px;
  padding: 11px 55px;
  z-index: 10;
  h4,
  p {
    color: ${({theme:t})=>he(t.mode,t.textColor,t.white)};
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
`,Ge=({step:t,onAnswer:u,answers:c})=>{const{settings:e}=P.useContext(ve.EscolaLMSContext),{i18n:n}=re(),i=P.useCallback(()=>t.image?e.value.onboarding[t.image]:null,[t,e.value.onboarding]),l=P.useCallback(o=>{switch(t.type){case Z.radio:return m.jsx(W.Radio,{value:o.value,label:o.label[n.language],name:t.data,onChange:a=>u(a.target.value)});case Z.options:return m.jsx(Xe,{$isActive:c&&c[t.data]===o.value||!1,onClick:()=>u(o.value),children:o.label[n.language]});default:return m.jsx(W.Radio,{value:o.value,label:o.label[n.language],name:t.data,onChange:a=>u(a.target.value)})}},[n.language,t.type,t.data,u,c]);return m.jsxs(qe,{children:[t.image&&i()&&m.jsx("div",{className:"step-image",children:m.jsx(me,{path:i(),srcSizes:[500,750,1e3]})}),t.hint&&m.jsxs(Ze,{children:[m.jsx(W.Title,{level:4,children:t.hint.title[n.language]}),m.jsx(W.Text,{size:"13",children:t.hint.text[n.language]})]}),m.jsx(W.Title,{level:4,children:t.question[n.language]}),m.jsxs("div",{className:`options ${t.type===Z.options?"buttons":""}`,children:[t.type===Z.slide&&m.jsx(Ye,{options:t.options,onAnswer:u}),t.type!==Z.slide&&t.options.map((o,a)=>m.jsx("div",{className:"option",children:l(o)},o.value+a))]})]})},He=K.div`
  background-color: ${({theme:t})=>t.white};
  padding: 60px 0;

  @media (max-width: 991px) {
    padding: 20px;
  }
  .onboarding__content {
    width: 100%;
    position: relative;
    ${({$lastStep:t})=>t&&Se`
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
          background-color: ${({theme:t})=>t.primaryColor} !important;
        }
      }
    }
    .next-step {
      margin: 0 auto;
      margin-top: ${({$lastStep:t})=>t?"70px":"0px"};
      position: ${({$lastStep:t})=>t?"relative":"absolute"};
      bottom: ${({$lastStep:t})=>t?"0":"60px"};
      left: 0;
      right: 0;
      max-width: 265px;
      min-width: ${({$lastStep:t})=>t?"265px":"auto"};
      z-index: 10;
    }
  }
`,Je=K.div`
  text-align: center;
  img {
    max-height: 300px;
    object-fit: contain;
  }
  h2 {
    margin: 22px 0px;
  }
`;var Z=(t=>(t.radio="radio",t.options="options",t.slide="slide",t))(Z||{});const Qe=()=>{var B;const{settings:t,fetchSettings:u,updateProfile:c,fetchProfile:e,user:n}=P.useContext(ve.EscolaLMSContext),{t:i,i18n:l}=re(),o=Me(),[a,k]=P.useState({steps:[],currentStep:0,answers:{},isLastStep:!1}),f=P.useRef();(B=n.value)!=null&&B.isOnboardingCompleted&&o.push(fe.home);const g=P.useCallback(()=>{const T=Object.keys(t.value.onboarding).filter(D=>D.startsWith("step_")).map(D=>t.value.onboarding[D]).sort((D,O)=>D.order-O.order);k({steps:T,currentStep:0,isLastStep:!1})},[t]),h=P.useMemo(()=>{var T;if(t.value.onboarding&&((T=t.value.onboarding)!=null&&T.last_step))return{...t.value.onboarding.last_step,image:t.value.onboarding.image_last_step?t.value.onboarding.image_last_step:null}},[t]);P.useEffect(()=>{u(),g()},[u]),P.useEffect(()=>{f.current&&!a.isLastStep&&f.current.slideTo(a.currentStep)},[a]);const S=P.useCallback(async()=>{try{(await c({...a.answers,isOnboardingCompleted:!0})).success&&e()}catch(T){console.log("error",T)}o.push(fe.home)},[a.answers,o]),p=P.useMemo(()=>{const T=a.steps[a.currentStep];return T&&a.answers&&a.answers[T.data]?!1:a.currentStep===a.steps.length?(k(O=>({...O,isLastStep:!0})),!1):!0},[a.steps,a.answers,a.currentStep]),_=P.useCallback(()=>{if(!h&&a.currentStep===a.steps.length-1){S();return}a.currentStep===a.steps.length?S():k(T=>({...T,currentStep:T.currentStep+1}))},[a.currentStep,a.steps.length,S,h]);return m.jsx(He,{className:"onboarding",$lastStep:a.isLastStep,children:m.jsx(Te,{children:m.jsx(Oe.Col,{offset:{lg:3},lg:6,children:m.jsxs("div",{className:"onboarding__content",children:[a.isLastStep?null:m.jsx(_e,{className:"onboarding__swiper",modules:[De,Ee,Ce],slidesPerView:1,allowTouchMove:!1,initialSlide:0,pagination:!0,autoHeight:!0,onBeforeInit:T=>{f.current=T},children:a.steps.map((T,D)=>m.jsx(je,{children:m.jsx(Ge,{answers:a.answers,step:T,onAnswer:O=>k(C=>({...C,answers:{...C.answers,[T.data]:O}}))})},D))}),a.isLastStep&&h&&m.jsxs(Je,{children:[(h==null?void 0:h.image)&&m.jsx(me,{path:h==null?void 0:h.image,srcSizes:[500,750,1e3]}),m.jsx(W.Title,{level:2,children:h==null?void 0:h.title[l.language]}),m.jsx(W.Text,{children:h==null?void 0:h.text[l.language]})]}),m.jsx(W.Button,{className:"next-step",disabled:p,onClick:_,children:i("Next")})]})})})})},et=K.div`
  background-color: #f8f8f8;
  height: 100%;
  min-height: calc(100vh - 110px);
  padding: 50px 150px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`,ot=()=>m.jsx(et,{children:m.jsx(Qe,{})});export{ot as default};
//# sourceMappingURL=index-BBCbQ_w9.js.map
