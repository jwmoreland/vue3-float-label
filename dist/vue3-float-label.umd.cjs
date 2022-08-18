(function(e,s){typeof exports=="object"&&typeof module<"u"?module.exports=s(require("vue")):typeof define=="function"&&define.amd?define(["vue"],s):(e=typeof globalThis<"u"?globalThis:e||self,e["vue3-float-label"]=s(e.Vue))})(this,function(e){"use strict";const s="",h=["for"],g={__name:"FloatLabel",props:{label:{type:String,default:""},float:{type:Boolean},onFocus:{type:Boolean,default:!1}},setup(u){const a=u;let c=e.ref(null),f=e.ref(""),o=e.ref("");e.ref(a.label);let l=e.ref({}),n=e.ref(""),i=e.ref(""),d=e.ref(!1),p=e.ref(!1);const v="[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select",m=e.computed(()=>a.label),F=e.computed(()=>o.value&&f.value!==o.value),x=e.computed(()=>{let t=!1;return a.float?t=a.float:t=d.value,t}),y=()=>{f.value=m.value?a.label:o.value},E=()=>l.value.getAttribute("id"),_=()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,r=>(r^crypto.getRandomValues(new Uint8Array(1))[0]&15>>r/4).toString(16)),w=()=>{switch(i.value){case"input":case"textarea":return l.value.placeholder;case"select":let t=l.value.querySelector("option[disabled][selected]");return t?t.innerHTML:"";default:return""}},T=()=>{n.value||(n.value=_(),l.value.id=n.value)},V=()=>{l.value.addEventListener("input",b)},b=t=>{d.value=t.target.value.length>0},L=()=>{l.value.removeEventListener("input",b)};return e.watch(m,(t,r)=>{y()}),e.onMounted(()=>{l.value=c.value.querySelector(v),p.value=!!l.value,p.value?(n.value=E(),i.value=l.value?l.value.tagName.toLowerCase():"",o.value=w(),T(),setTimeout(()=>{V()},200)):o.value="",y()}),e.onBeforeUnmount(()=>{L()}),(t,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["float-label",{"float-label--fade-anim":e.unref(F),"float-label--on-focus":a.onFocus,"float-label--fixed":e.unref(x)}]),ref_key:"root",ref:c},[e.renderSlot(t.$slots,"default"),e.createElementVNode("label",{class:"float-label__label",for:e.unref(n)},e.toDisplayString(e.unref(f)),9,h)],2))}};return{install:(u,a)=>{u.component("FloatLabel",g)}}});
