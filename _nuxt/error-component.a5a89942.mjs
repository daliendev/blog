import{d as a,_ as c,o as E,c as f,n as k,g as P,u as t}from"./entry.830f29d6.mjs";const v={__name:"nuxt-error-page",props:{error:Object},setup(p){var n;const e=p.error;(e.stack||"").split(`
`).splice(1).map(s=>({text:s.replace("webpack:/","").replace(".vue",".js").trim(),internal:s.includes("node_modules")&&!s.includes(".cache")||s.includes("internal")||s.includes("new Promise")})).map(s=>`<span class="stack${s.internal?" internal":""}">${s.text}</span>`).join(`
`);const r=Number(e.statusCode||500),o=r===404,u=(n=e.statusMessage)!=null?n:o?"Page Not Found":"Internal Server Error",i=e.message||e.toString(),_=void 0,d=a(()=>c(()=>import("./error-404.60a8825f.mjs"),["_nuxt/error-404.60a8825f.mjs","_nuxt/error-404.042bd6ca.css","_nuxt/entry.830f29d6.mjs","_nuxt/entry.7842b056.css"])),l=a(()=>c(()=>import("./error-500.f94d8460.mjs"),["_nuxt/error-500.f94d8460.mjs","_nuxt/error-500.de29328c.css","_nuxt/entry.830f29d6.mjs","_nuxt/entry.7842b056.css"])),m=o?d:l;return(s,g)=>(E(),f(t(m),k(P({statusCode:t(r),statusMessage:t(u),description:t(i),stack:t(_)})),null,16))}},b=v;export{b as default};
