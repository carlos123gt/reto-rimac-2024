import{u as o,i,P as l,j as s,k as c}from"./index-LY79wXMt.js";const d=o,g=i,h=(...e)=>e.filter(Boolean).join(" "),x=(e,r)=>{let a=l.HOME,t=0;for(const n of e){if(r.includes(n.path))break;t++}return t!==0&&(a=e[t-1].path),{prevPath:a,currentStep:t+1}},m=e=>{const r=new Date,a=new Date(e);return r.getFullYear()-a.getFullYear()},u=({transparent:e=!1})=>s.jsx("header",{className:h("header",e?"header--transparent":""),children:s.jsxs("nav",{className:"container header-nav",children:[s.jsx("img",{className:"header-nav__logo",width:"65px",height:"32px",src:"./images/logo.svg",alt:"Logo"}),s.jsxs("ul",{className:"header-nav__information",style:{display:"flex",alignItems:"center",gap:"1em"},children:[s.jsx("li",{children:"¡Compra por este medio!"}),s.jsxs("li",{children:[s.jsx("img",{width:"20px",height:"20px",src:"./icons/phone.svg",alt:"Phone Icon"}),s.jsx("p",{children:c})]})]})]})});export{u as H,d as a,x as b,h as c,m as g,g as u};