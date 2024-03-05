import{j as h,R as A,u as Dt,a as St,r as it,b as kt,P as jt,g as Et}from"./index-DbSWs9oJ.js";import{c as Ct,u as Nt,a as Rt,H as Tt}from"./Header-DNdlFSUa.js";import{B as Lt,a as Ut}from"./Button-gTK2SIlE.js";const Ot=()=>h.jsx("footer",{className:"footer",children:h.jsxs("div",{className:"footer__content container",children:[h.jsx("div",{className:"footer__content__left",children:h.jsxs("picture",{children:[h.jsx("source",{media:"(max-width: 600px)",srcSet:"./images/logo-white-mobile.svg"}),h.jsx("img",{height:"42px",width:"85px",src:"./images/logo-white.svg",alt:"Logo"})]})}),h.jsx("div",{className:"footer__content__right",children:h.jsx("p",{children:"© 2023 RIMAC Seguros y Reaseguros."})})]})}),Ke=A.forwardRef(({checked:e,onChange:s,...t},a)=>h.jsx("input",{ref:a,onClick:s,checked:e,className:"checkbox",type:"checkbox",...t})),Ge=A.forwardRef(({label:e,onChange:s,border:t=!0,...a},l)=>h.jsxs("div",{className:Ct("container-input",t?"container-input--border":""),children:[h.jsx("label",{className:"container-input__label",children:e}),h.jsx("input",{ref:l,className:"container-input__input",onChange:s,...a})]}));var de=e=>e.type==="checkbox",ie=e=>e instanceof Date,L=e=>e==null;const at=e=>typeof e=="object";var k=e=>!L(e)&&!Array.isArray(e)&&at(e)&&!ie(e),nt=e=>k(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,Pt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,lt=(e,s)=>e.has(Pt(s)),Bt=e=>{const s=e.constructor&&e.constructor.prototype;return k(s)&&s.hasOwnProperty("isPrototypeOf")},Ce=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function U(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ce&&(e instanceof Blob||e instanceof FileList))&&(t||k(e)))if(s=t?[]:{},!t&&!Bt(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=U(e[a]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,d=(e,s,t)=>{if(!s||!k(e))return t;const a=fe(s.split(/[,[\].]+?/)).reduce((l,n)=>L(l)?l:l[n],e);return S(a)||a===e?S(e[s])?t:e[s]:a},W=e=>typeof e=="boolean";const be={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Mt=A.createContext(null),Ne=()=>A.useContext(Mt);var ut=(e,s,t,a=!0)=>{const l={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(l,n,{get:()=>{const y=n;return s._proxyFormState[y]!==$.all&&(s._proxyFormState[y]=!a||$.all),t&&(t[y]=!0),e[y]}});return l},q=e=>k(e)&&!Object.keys(e).length,ot=(e,s,t,a)=>{t(e);const{name:l,...n}=e;return q(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(y=>s[y]===(!a||$.all))},ve=e=>Array.isArray(e)?e:[e],ct=(e,s,t)=>!e||!s||e===s||ve(e).some(a=>a&&(t?a===s:a.startsWith(s)||s.startsWith(a)));function Re(e){const s=A.useRef(e);s.current=e,A.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function It(e){const s=Ne(),{control:t=s.control,disabled:a,name:l,exact:n}=e||{},[y,v]=A.useState(t._formState),p=A.useRef(!0),w=A.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),b=A.useRef(l);return b.current=l,Re({disabled:a,next:m=>p.current&&ct(b.current,m.name,n)&&ot(m,w.current,t._updateFormState)&&v({...t._formState,...m}),subject:t._subjects.state}),A.useEffect(()=>(p.current=!0,w.current.isValid&&t._updateValid(!0),()=>{p.current=!1}),[t]),ut(y,t,w.current,!1)}var z=e=>typeof e=="string",dt=(e,s,t,a,l)=>z(e)?(a&&s.watch.add(e),d(t,e,l)):Array.isArray(e)?e.map(n=>(a&&s.watch.add(n),d(t,n))):(a&&(s.watchAll=!0),t);function qt(e){const s=Ne(),{control:t=s.control,name:a,defaultValue:l,disabled:n,exact:y}=e||{},v=A.useRef(a);v.current=a,Re({disabled:n,subject:t._subjects.values,next:b=>{ct(v.current,b.name,y)&&w(U(dt(v.current,t._names,b.values||t._formValues,!1,l)))}});const[p,w]=A.useState(t._getWatch(a,l));return A.useEffect(()=>t._removeUnmounted()),p}var Te=e=>/^\w*$/.test(e),ft=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),D=(e,s,t)=>{let a=-1;const l=Te(s)?[s]:ft(s),n=l.length,y=n-1;for(;++a<n;){const v=l[a];let p=t;if(a!==y){const w=e[v];p=k(w)||Array.isArray(w)?w:isNaN(+l[a+1])?{}:[]}e[v]=p,e=e[v]}return e};function Ht(e){const s=Ne(),{name:t,disabled:a,control:l=s.control,shouldUnregister:n}=e,y=lt(l._names.array,t),v=qt({control:l,name:t,defaultValue:d(l._formValues,t,d(l._defaultValues,t,e.defaultValue)),exact:!0}),p=It({control:l,name:t}),w=A.useRef(l.register(t,{...e.rules,value:v,...W(e.disabled)?{disabled:e.disabled}:{}}));return A.useEffect(()=>{const b=l._options.shouldUnregister||n,m=(O,B)=>{const C=d(l._fields,O);C&&(C._f.mount=B)};if(m(t,!0),b){const O=U(d(l._options.defaultValues,t));D(l._defaultValues,t,O),S(d(l._formValues,t))&&D(l._formValues,t,O)}return()=>{(y?b&&!l._state.action:b)?l.unregister(t):m(t,!1)}},[t,l,y,n]),A.useEffect(()=>{d(l._fields,t)&&l._updateDisabledField({disabled:a,fields:l._fields,name:t,value:d(l._fields,t)._f.value})},[a,t,l]),{field:{name:t,value:v,...W(a)||p.disabled?{disabled:p.disabled||a}:{},onChange:A.useCallback(b=>w.current.onChange({target:{value:nt(b),name:t},type:be.CHANGE}),[t]),onBlur:A.useCallback(()=>w.current.onBlur({target:{value:d(l._formValues,t),name:t},type:be.BLUR}),[t,l]),ref:b=>{const m=d(l._fields,t);m&&b&&(m._f.ref={focus:()=>b.focus(),select:()=>b.select(),setCustomValidity:O=>b.setCustomValidity(O),reportValidity:()=>b.reportValidity()})}},formState:p,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(p.errors,t)},isDirty:{enumerable:!0,get:()=>!!d(p.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!d(p.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!d(p.validatingFields,t)},error:{enumerable:!0,get:()=>d(p.errors,t)}})}}const Je=e=>e.render(Ht(e));var Wt=(e,s,t,a,l)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:l||!0}}:{},Qe=e=>({isOnSubmit:!e||e===$.onSubmit,isOnBlur:e===$.onBlur,isOnChange:e===$.onChange,isOnAll:e===$.all,isOnTouch:e===$.onTouched}),Xe=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ce=(e,s,t,a)=>{for(const l of t||Object.keys(e)){const n=d(e,l);if(n){const{_f:y,...v}=n;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],l)&&!a)break;if(y.ref&&s(y.ref,y.name)&&!a)break;ce(v,s)}else k(v)&&ce(v,s)}}};var $t=(e,s,t)=>{const a=fe(d(e,t));return D(a,"root",s[t]),D(e,t,a),e},Le=e=>e.type==="file",X=e=>typeof e=="function",_e=e=>{if(!Ce)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},me=e=>z(e),Ue=e=>e.type==="radio",xe=e=>e instanceof RegExp;const Ye={value:!1,isValid:!1},Ze={value:!0,isValid:!0};var yt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?Ze:{value:e[0].value,isValid:!0}:Ze:Ye}return Ye};const et={isValid:!1,value:null};var ht=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,et):et;function tt(e,s,t="validate"){if(me(e)||Array.isArray(e)&&e.every(me)||W(e)&&!e)return{type:t,message:me(e)?e:"",ref:s}}var se=e=>k(e)&&!xe(e)?e:{value:e,message:""},rt=async(e,s,t,a,l)=>{const{ref:n,refs:y,required:v,maxLength:p,minLength:w,min:b,max:m,pattern:O,validate:B,name:C,valueAsNumber:pe,mount:Q,disabled:ae}=e._f,x=d(s,C);if(!Q||ae)return{};const K=y?y[0]:n,G=_=>{a&&K.reportValidity&&(K.setCustomValidity(W(_)?"":_||""),K.reportValidity())},j={},ee=Ue(n),ye=de(n),Y=ee||ye,te=(pe||Le(n))&&S(n.value)&&S(x)||_e(n)&&n.value===""||x===""||Array.isArray(x)&&!x.length,M=Wt.bind(null,C,t,j),he=(_,V,E,T=J.maxLength,H=J.minLength)=>{const I=_?V:E;j[C]={type:_?T:H,message:I,ref:n,...M(_?T:H,I)}};if(l?!Array.isArray(x)||!x.length:v&&(!Y&&(te||L(x))||W(x)&&!x||ye&&!yt(y).isValid||ee&&!ht(y).isValid)){const{value:_,message:V}=me(v)?{value:!!v,message:v}:se(v);if(_&&(j[C]={type:J.required,message:V,ref:K,...M(J.required,V)},!t))return G(V),j}if(!te&&(!L(b)||!L(m))){let _,V;const E=se(m),T=se(b);if(!L(x)&&!isNaN(x)){const H=n.valueAsNumber||x&&+x;L(E.value)||(_=H>E.value),L(T.value)||(V=H<T.value)}else{const H=n.valueAsDate||new Date(x),I=ue=>new Date(new Date().toDateString()+" "+ue),ne=n.type=="time",le=n.type=="week";z(E.value)&&x&&(_=ne?I(x)>I(E.value):le?x>E.value:H>new Date(E.value)),z(T.value)&&x&&(V=ne?I(x)<I(T.value):le?x<T.value:H<new Date(T.value))}if((_||V)&&(he(!!_,E.message,T.message,J.max,J.min),!t))return G(j[C].message),j}if((p||w)&&!te&&(z(x)||l&&Array.isArray(x))){const _=se(p),V=se(w),E=!L(_.value)&&x.length>+_.value,T=!L(V.value)&&x.length<+V.value;if((E||T)&&(he(E,_.message,V.message),!t))return G(j[C].message),j}if(O&&!te&&z(x)){const{value:_,message:V}=se(O);if(xe(_)&&!x.match(_)&&(j[C]={type:J.pattern,message:V,ref:n,...M(J.pattern,V)},!t))return G(V),j}if(B){if(X(B)){const _=await B(x,s),V=tt(_,K);if(V&&(j[C]={...V,...M(J.validate,V.message)},!t))return G(V.message),j}else if(k(B)){let _={};for(const V in B){if(!q(_)&&!t)break;const E=tt(await B[V](x,s),K,V);E&&(_={...E,...M(V,E.message)},G(E.message),t&&(j[C]=_))}if(!q(_)&&(j[C]={ref:K,..._},!t))return j}}return G(!0),j};function zt(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=S(e)?a++:e[s[a++]];return e}function Kt(e){for(const s in e)if(e.hasOwnProperty(s)&&!S(e[s]))return!1;return!0}function R(e,s){const t=Array.isArray(s)?s:Te(s)?[s]:ft(s),a=t.length===1?e:zt(e,t),l=t.length-1,n=t[l];return a&&delete a[n],l!==0&&(k(a)&&q(a)||Array.isArray(a)&&Kt(a))&&R(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:l=>{for(const n of e)n.next&&n.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(n=>n!==l)}}),unsubscribe:()=>{e=[]}}},Ve=e=>L(e)||!at(e);function Z(e,s){if(Ve(e)||Ve(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const l of t){const n=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const y=s[l];if(ie(n)&&ie(y)||k(n)&&k(y)||Array.isArray(n)&&Array.isArray(y)?!Z(n,y):n!==y)return!1}}return!0}var gt=e=>e.type==="select-multiple",Gt=e=>Ue(e)||de(e),je=e=>_e(e)&&e.isConnected,Jt=e=>k(e)&&Object.values(e).some(s=>s),vt=e=>{for(const s in e)if(X(e[s]))return!0;return!1};function Fe(e,s={}){const t=Array.isArray(e);if(k(e)||t)for(const a in e)Array.isArray(e[a])||k(e[a])&&!vt(e[a])?(s[a]=Array.isArray(e[a])?[]:{},Fe(e[a],s[a])):L(e[a])||(s[a]=!0);return s}function mt(e,s,t){const a=Array.isArray(e);if(k(e)||a)for(const l in e)Array.isArray(e[l])||k(e[l])&&!vt(e[l])?S(s)||Ve(t[l])?t[l]=Array.isArray(e[l])?Fe(e[l],[]):{...Fe(e[l])}:mt(e[l],L(s)?{}:s[l],t[l]):t[l]=!Z(e[l],s[l]);return t}var ge=(e,s)=>mt(e,s,Fe(s)),bt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>S(e)?e:s?e===""?NaN:e&&+e:t&&z(e)?new Date(e):a?a(e):e;function Ee(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Le(s)?s.files:Ue(s)?ht(e.refs).value:gt(s)?[...s.selectedOptions].map(({value:t})=>t):de(s)?yt(e.refs).value:bt(S(s.value)?e.ref.value:s.value,e)}var Qt=(e,s,t,a)=>{const l={};for(const n of e){const y=d(s,n);y&&D(l,n,y._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:a}},oe=e=>S(e)?e:xe(e)?e.source:k(e)?xe(e.value)?e.value.source:e.value:e,Xt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function st(e,s,t){const a=d(e,t);if(a||Te(t))return{error:a,name:t};const l=t.split(".");for(;l.length;){const n=l.join("."),y=d(s,n),v=d(e,n);if(y&&!Array.isArray(y)&&t!==n)return{name:t};if(v&&v.type)return{name:n,error:v};l.pop()}return{name:t}}var Yt=(e,s,t,a,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(s||e):(t?a.isOnBlur:l.isOnBlur)?!e:(t?a.isOnChange:l.isOnChange)?e:!0,Zt=(e,s)=>!fe(d(e,s)).length&&R(e,s);const er={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function tr(e={}){let s={...er,...e},t={submitCount:0,isDirty:!1,isLoading:X(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},l=k(s.defaultValues)||k(s.values)?U(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:U(l),y={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p,w=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:ke(),array:ke(),state:ke()},O=Qe(s.mode),B=Qe(s.reValidateMode),C=s.criteriaMode===$.all,pe=r=>i=>{clearTimeout(w),w=setTimeout(r,i)},Q=async r=>{if(b.isValid||r){const i=s.resolver?q((await Y()).errors):await M(a,!0);i!==t.isValid&&m.state.next({isValid:i})}},ae=(r,i)=>{(b.isValidating||b.validatingFields)&&(i.forEach(u=>{D(t.validatingFields,u,r)}),t.isValidating=Jt(t.validatingFields),m.state.next({validatingFields:t.validatingFields,isValidating:t.isValidating}))},x=(r,i=[],u,f,c=!0,o=!0)=>{if(f&&u){if(y.action=!0,o&&Array.isArray(d(a,r))){const g=u(d(a,r),f.argA,f.argB);c&&D(a,r,g)}if(o&&Array.isArray(d(t.errors,r))){const g=u(d(t.errors,r),f.argA,f.argB);c&&D(t.errors,r,g),Zt(t.errors,r)}if(b.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const g=u(d(t.touchedFields,r),f.argA,f.argB);c&&D(t.touchedFields,r,g)}b.dirtyFields&&(t.dirtyFields=ge(l,n)),m.state.next({name:r,isDirty:_(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else D(n,r,i)},K=(r,i)=>{D(t.errors,r,i),m.state.next({errors:t.errors})},G=r=>{t.errors=r,m.state.next({errors:t.errors,isValid:!1})},j=(r,i,u,f)=>{const c=d(a,r);if(c){const o=d(n,r,S(u)?d(l,r):u);S(o)||f&&f.defaultChecked||i?D(n,r,i?o:Ee(c._f)):T(r,o),y.mount&&Q()}},ee=(r,i,u,f,c)=>{let o=!1,g=!1;const F={name:r},N=!!(d(a,r)&&d(a,r)._f.disabled);if(!u||f){b.isDirty&&(g=t.isDirty,t.isDirty=F.isDirty=_(),o=g!==F.isDirty);const P=N||Z(d(l,r),i);g=!!(!N&&d(t.dirtyFields,r)),P||N?R(t.dirtyFields,r):D(t.dirtyFields,r,!0),F.dirtyFields=t.dirtyFields,o=o||b.dirtyFields&&g!==!P}if(u){const P=d(t.touchedFields,r);P||(D(t.touchedFields,r,u),F.touchedFields=t.touchedFields,o=o||b.touchedFields&&P!==u)}return o&&c&&m.state.next(F),o?F:{}},ye=(r,i,u,f)=>{const c=d(t.errors,r),o=b.isValid&&W(i)&&t.isValid!==i;if(e.delayError&&u?(p=pe(()=>K(r,u)),p(e.delayError)):(clearTimeout(w),p=null,u?D(t.errors,r,u):R(t.errors,r)),(u?!Z(c,u):c)||!q(f)||o){const g={...f,...o&&W(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...g},m.state.next(g)}ae(!1,Object.keys(t.validatingFields).filter(g=>g===r))},Y=async r=>s.resolver(n,s.context,Qt(r||v.mount,a,s.criteriaMode,s.shouldUseNativeValidation)),te=async r=>{const{errors:i}=await Y(r);if(r)for(const u of r){const f=d(i,u);f?D(t.errors,u,f):R(t.errors,u)}else t.errors=i;return i},M=async(r,i,u={valid:!0})=>{for(const f in r){const c=r[f];if(c){const{_f:o,...g}=c;if(o){const F=v.array.has(o.name),N=await rt(c,n,C,s.shouldUseNativeValidation&&!i,F);if(N[o.name]&&(u.valid=!1,i))break;!i&&(d(N,o.name)?F?$t(t.errors,N,o.name):D(t.errors,o.name,N[o.name]):R(t.errors,o.name))}g&&await M(g,i,u)}}return u.valid},he=()=>{for(const r of v.unMount){const i=d(a,r);i&&(i._f.refs?i._f.refs.every(u=>!je(u)):!je(i._f.ref))&&Ae(r)}v.unMount=new Set},_=(r,i)=>(r&&i&&D(n,r,i),!Z(Oe(),l)),V=(r,i,u)=>dt(r,v,{...y.mount?n:S(i)?l:z(r)?{[r]:i}:i},u,i),E=r=>fe(d(y.mount?n:l,r,e.shouldUnregister?d(l,r,[]):[])),T=(r,i,u={})=>{const f=d(a,r);let c=i;if(f){const o=f._f;o&&(!o.disabled&&D(n,r,bt(i,o)),c=_e(o.ref)&&L(i)?"":i,gt(o.ref)?[...o.ref.options].forEach(g=>g.selected=c.includes(g.value)):o.refs?de(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(F=>F===g.value):c===g.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(g=>g.checked=g.value===c):Le(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||m.values.next({name:r,values:{...n}})))}(u.shouldDirty||u.shouldTouch)&&ee(r,c,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ue(r)},H=(r,i,u)=>{for(const f in i){const c=i[f],o=`${r}.${f}`,g=d(a,o);(v.array.has(r)||!Ve(c)||g&&!g._f)&&!ie(c)?H(o,c,u):T(o,c,u)}},I=(r,i,u={})=>{const f=d(a,r),c=v.array.has(r),o=U(i);D(n,r,o),c?(m.array.next({name:r,values:{...n}}),(b.isDirty||b.dirtyFields)&&u.shouldDirty&&m.state.next({name:r,dirtyFields:ge(l,n),isDirty:_(r,o)})):f&&!f._f&&!L(o)?H(r,o,u):T(r,o,u),Xe(r,v)&&m.state.next({...t}),m.values.next({name:y.mount?r:void 0,values:{...n}})},ne=async r=>{const i=r.target;let u=i.name,f=!0;const c=d(a,u),o=()=>i.type?Ee(c._f):nt(r),g=F=>{f=Number.isNaN(F)||F===d(n,u,F)};if(c){let F,N;const P=o(),re=r.type===be.BLUR||r.type===be.FOCUS_OUT,pt=!Xt(c._f)&&!s.resolver&&!d(t.errors,u)&&!c._f.deps||Yt(re,d(t.touchedFields,u),t.isSubmitted,B,O),De=Xe(u,v,re);D(n,u,P),re?(c._f.onBlur&&c._f.onBlur(r),p&&p(0)):c._f.onChange&&c._f.onChange(r);const Se=ee(u,P,re,!1),At=!q(Se)||De;if(!re&&m.values.next({name:u,type:r.type,values:{...n}}),pt)return b.isValid&&Q(),At&&m.state.next({name:u,...De?{}:Se});if(!re&&De&&m.state.next({...t}),ae(!0,[u]),s.resolver){const{errors:$e}=await Y([u]);if(g(P),f){const wt=st(t.errors,a,u),ze=st($e,a,wt.name||u);F=ze.error,u=ze.name,N=q($e)}}else F=(await rt(c,n,C,s.shouldUseNativeValidation))[u],g(P),f&&(F?N=!1:b.isValid&&(N=await M(a,!0)));f&&(c._f.deps&&ue(c._f.deps),ye(u,N,F,Se))}},le=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},ue=async(r,i={})=>{let u,f;const c=ve(r);if(ae(!0,c),s.resolver){const o=await te(S(r)?r:c);u=q(o),f=r?!c.some(g=>d(o,g)):u}else r?(f=(await Promise.all(c.map(async o=>{const g=d(a,o);return await M(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!f&&!t.isValid)&&Q()):f=u=await M(a);return m.state.next({...!z(r)||b.isValid&&u!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:u}:{},errors:t.errors,isValidating:!1}),i.shouldFocus&&!f&&ce(a,le,r?c:v.mount),f},Oe=r=>{const i={...l,...y.mount?n:{}};return S(r)?i:z(r)?d(i,r):r.map(u=>d(i,u))},Pe=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),isTouched:!!d((i||t).touchedFields,r),isValidating:!!d((i||t).validatingFields,r),error:d((i||t).errors,r)}),_t=r=>{r&&ve(r).forEach(i=>R(t.errors,i)),m.state.next({errors:r?t.errors:{}})},Be=(r,i,u)=>{const f=(d(a,r,{_f:{}})._f||{}).ref;D(t.errors,r,{...i,ref:f}),m.state.next({name:r,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&f&&f.focus&&f.focus()},xt=(r,i)=>X(r)?m.values.subscribe({next:u=>r(V(void 0,i),u)}):V(r,i,!0),Ae=(r,i={})=>{for(const u of r?ve(r):v.mount)v.mount.delete(u),v.array.delete(u),i.keepValue||(R(a,u),R(n,u)),!i.keepError&&R(t.errors,u),!i.keepDirty&&R(t.dirtyFields,u),!i.keepTouched&&R(t.touchedFields,u),!i.keepIsValidating&&R(t.validatingFields,u),!s.shouldUnregister&&!i.keepDefaultValue&&R(l,u);m.values.next({values:{...n}}),m.state.next({...t,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&Q()},Me=({disabled:r,name:i,field:u,fields:f,value:c})=>{if(W(r)){const o=r?void 0:S(c)?Ee(u?u._f:d(f,i)._f):c;D(n,i,o),ee(i,o,!1,!1,!0)}},we=(r,i={})=>{let u=d(a,r);const f=W(i.disabled);return D(a,r,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:r}},name:r,mount:!0,...i}}),v.mount.add(r),u?Me({field:u,disabled:i.disabled,name:r,value:i.value}):j(r,!0,i.value),{...f?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:oe(i.min),max:oe(i.max),minLength:oe(i.minLength),maxLength:oe(i.maxLength),pattern:oe(i.pattern)}:{},name:r,onChange:ne,onBlur:ne,ref:c=>{if(c){we(r,i),u=d(a,r);const o=S(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=Gt(o),F=u._f.refs||[];if(g?F.find(N=>N===o):o===u._f.ref)return;D(a,r,{_f:{...u._f,...g?{refs:[...F.filter(je),o,...Array.isArray(d(l,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),j(r,!1,void 0,o)}else u=d(a,r,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(lt(v.array,r)&&y.action)&&v.unMount.add(r)}}},Ie=()=>s.shouldFocusError&&ce(a,le,v.mount),Vt=r=>{W(r)&&(m.state.next({disabled:r}),ce(a,(i,u)=>{let f=r;const c=d(a,u);c&&W(c._f.disabled)&&(f||(f=c._f.disabled)),i.disabled=f},0,!1))},qe=(r,i)=>async u=>{let f;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let c=U(n);if(m.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:g}=await Y();t.errors=o,c=g}else await M(a);if(R(t.errors,"root"),q(t.errors)){m.state.next({errors:{}});try{await r(c,u)}catch(o){f=o}}else i&&await i({...t.errors},u),Ie(),setTimeout(Ie);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(t.errors)&&!f,submitCount:t.submitCount+1,errors:t.errors}),f)throw f},Ft=(r,i={})=>{d(a,r)&&(S(i.defaultValue)?I(r,U(d(l,r))):(I(r,i.defaultValue),D(l,r,U(i.defaultValue))),i.keepTouched||R(t.touchedFields,r),i.keepDirty||(R(t.dirtyFields,r),t.isDirty=i.defaultValue?_(r,U(d(l,r))):_()),i.keepError||(R(t.errors,r),b.isValid&&Q()),m.state.next({...t}))},He=(r,i={})=>{const u=r?U(r):l,f=U(u),c=q(r),o=c?l:f;if(i.keepDefaultValues||(l=u),!i.keepValues){if(i.keepDirtyValues)for(const g of v.mount)d(t.dirtyFields,g)?D(o,g,d(n,g)):I(g,d(o,g));else{if(Ce&&S(r))for(const g of v.mount){const F=d(a,g);if(F&&F._f){const N=Array.isArray(F._f.refs)?F._f.refs[0]:F._f.ref;if(_e(N)){const P=N.closest("form");if(P){P.reset();break}}}}a={}}n=e.shouldUnregister?i.keepDefaultValues?U(l):{}:U(o),m.array.next({values:{...o}}),m.values.next({values:{...o}})}v={mount:i.keepDirtyValues?v.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!b.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,m.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Z(r,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?[]:i.keepDirtyValues?i.keepDefaultValues&&n?ge(l,n):t.dirtyFields:i.keepDefaultValues&&r?ge(l,r):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},We=(r,i)=>He(X(r)?r(n):r,i);return{control:{register:we,unregister:Ae,getFieldState:Pe,handleSubmit:qe,setError:Be,_executeSchema:Y,_getWatch:V,_getDirty:_,_updateValid:Q,_removeUnmounted:he,_updateFieldArray:x,_updateDisabledField:Me,_getFieldArray:E,_reset:He,_resetDefaultValues:()=>X(s.defaultValues)&&s.defaultValues().then(r=>{We(r,s.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:Vt,_subjects:m,_proxyFormState:b,_setErrors:G,get _fields(){return a},get _formValues(){return n},get _state(){return y},set _state(r){y=r},get _defaultValues(){return l},get _names(){return v},set _names(r){v=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ue,register:we,handleSubmit:qe,watch:xt,setValue:I,getValues:Oe,reset:We,resetField:Ft,clearErrors:_t,unregister:Ae,setError:Be,setFocus:(r,i={})=>{const u=d(a,r),f=u&&u._f;if(f){const c=f.refs?f.refs[0]:f.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Pe}}function rr(e={}){const s=A.useRef(),t=A.useRef(),[a,l]=A.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:X(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...tr(e),formState:a});const n=s.current.control;return n._options=e,Re({subject:n._subjects.state,next:y=>{ot(y,n._proxyFormState,n._updateFormState,!0)&&l({...n._formState})}}),A.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),A.useEffect(()=>{if(n._proxyFormState.isDirty){const y=n._getDirty();y!==a.isDirty&&n._subjects.state.next({isDirty:y})}},[n,a.isDirty]),A.useEffect(()=>{e.values&&!Z(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,l(y=>({...y}))):n._resetDefaultValues()},[e.values,n]),A.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),A.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),A.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=ut(a,n),s.current}const sr=()=>{const e=Nt(w=>w.home.user),s=Dt(),t=St(),{register:a,control:l,setValue:n,handleSubmit:y,formState:{errors:v}}=rr();it.useEffect(()=>{n("dni",(e==null?void 0:e.dni)??""),n("phoneNumber",(e==null?void 0:e.phoneNumber)??""),n("acceptComunication",(e==null?void 0:e.acceptComunication)??!1),n("acceptPrivacity",(e==null?void 0:e.acceptPrivacity)??!1)},[e]);const p=w=>{if(!e)return;const{dni:b,acceptComunication:m,acceptPrivacity:O,phoneNumber:B}=w,C={...e,acceptPrivacity:O,acceptComunication:m,dni:b,phoneNumber:B};s(kt(C)),t(jt.PLANS)};return h.jsxs("form",{onSubmit:y(p),className:"form",children:[h.jsxs("div",{className:"form__container_title",children:[h.jsxs("div",{children:[h.jsx(Lt,{children:"Seguro Salud Flexible"}),h.jsx("h1",{children:"Creado para ti y tu familia"})]}),h.jsx("picture",{children:h.jsx("img",{width:"136px",height:"160px",src:"./images/family-mobile.webp"})})]}),h.jsx("p",{className:"form__instructions",children:"Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online."}),h.jsxs("div",{className:"input-select",children:[h.jsx("select",{children:h.jsx("option",{children:"DNI"})}),h.jsx(Ge,{...a("dni",{required:!0}),border:!1,label:"Nro. de documento"})]}),v.dni?h.jsx("p",{className:"error",children:"Requerido"}):null,h.jsxs("div",{className:"form-container-input",children:[h.jsx(Ge,{...a("phoneNumber",{required:!0}),label:"Celular"}),v.phoneNumber?h.jsx("p",{className:"error",children:"Requerido"}):null]}),h.jsxs("div",{className:"container-checkbox-error",children:[h.jsxs("div",{className:"container-checkbox",children:[h.jsx(Je,{control:l,name:"acceptPrivacity",rules:{required:!0},render:({field:{onChange:w,value:b}})=>h.jsx(Ke,{onChange:m=>w(m.target.checked),checked:b})}),h.jsx("label",{children:"Acepto la Política de Privacidad"})]}),v.acceptPrivacity?h.jsx("p",{className:"error",children:"Requerido"}):null]}),h.jsx("div",{children:h.jsxs("div",{className:"container-checkbox-error",children:[h.jsxs("div",{className:"container-checkbox",children:[h.jsx(Je,{control:l,name:"acceptComunication",rules:{required:!0},render:({field:{onChange:w,value:b}})=>h.jsx(Ke,{onChange:m=>w(m.target.checked),checked:b})}),h.jsx("label",{children:"Acepto la Política Comunicaciones Comerciales"})]}),v.acceptComunication?h.jsx("p",{className:"error",children:"Requerido"}):null]})}),h.jsx("p",{className:"form__terms",children:"Aplican Términos y Condiciones."}),h.jsx(Ut,{type:"submit",children:"Cotiza aquí"})]})},cr=()=>{const e=Rt();return it.useEffect(()=>{e(Et())},[]),h.jsxs(h.Fragment,{children:[h.jsx(Tt,{transparent:!0}),h.jsxs("div",{className:"container-home",children:[h.jsxs("div",{className:"container container-home__content",children:[h.jsx("picture",{children:h.jsx("img",{width:"480px",height:"560px",src:"./images/family.webp"})}),h.jsx(sr,{})]}),h.jsxs("picture",{children:[h.jsx("source",{media:"(min-width: 950px)",srcSet:"./images/blur-left.webp",type:"image/webp"}),h.jsx("img",{className:"blur-left",src:"./images/blur-left-mobile.webp",alt:""})]}),h.jsxs("picture",{children:[h.jsx("source",{media:"(min-width: 950px)",srcSet:"./images/blur-right.webp",type:"image/webp"}),h.jsx("img",{className:"blur-right",src:"./images/blur-right-mobile.webp",alt:""})]})]}),h.jsx(Ot,{})]})};export{cr as default};