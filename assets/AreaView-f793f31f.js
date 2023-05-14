import{d as x,c as v,o as n,a as l,b as e,t as m,w as M,h as $,e as a,i as H,u as w,F as k,f,g as I,s as b,r as V,j as R,k as C}from"./index-1e765653.js";import{f as B}from"./index-9772a4f5.js";const D={class:"task"},N=["textContent"],S=x({__name:"TaskRow",props:{task:null,helper:null},setup(s){const{task:o,helper:t}=s;t.completedTaskIds||(t.completedTaskIds=[]);const d=v({get(){return t.completedTaskIds?.includes?.(o.id)??!1},set(c){if(t.completedTaskIds)if(t.completedTaskIds.includes(o.id)){const i=t.completedTaskIds.indexOf(o.id);i>-1&&t.completedTaskIds.splice(i,1)}else t.completedTaskIds.push(o.id)}});return(c,i)=>(n(),l("div",D,[e("div",{style:{"padding-left":"8px"},textContent:m(s.task.title)},null,8,N),M(e("input",{style:{"min-width":"30px",height:"30px",margin:"5px 0"},type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=h=>H(d)?d.value=h:null)},null,512),[[$,a(d)]])]))}}),A={class:"helper-card",style:{"min-width":"320px"}},F=["textContent"],j=["textContent"],E=e("hr",null,null,-1),O=x({__name:"HelperRow",props:{helper:null,month:null},setup(s){const{helper:o,month:t}=s,c=w().getMonthTasks(t);return(i,h)=>(n(),l("div",A,[e("h3",{style:{padding:"6px"},textContent:m(s.helper.fio)},null,8,F),e("div",{style:{"padding-left":"8px","padding-bottom":"6px"},textContent:m(s.helper.schoolName)},null,8,j),E,(n(!0),l(k,null,f(a(c),p=>(n(),I(S,{task:p,helper:s.helper,key:"task"+p.id},null,8,["task","helper"]))),128))]))}});const U={key:0},q=e("div",{textContent:"Группа:"},null,-1),z=["innerHTML"],G=e("hr",null,null,-1),J=e("div",{textContent:"Координаторы:"},null,-1),K=["innerHTML"],P=e("hr",null,null,-1),Q=e("div",{textContent:"Советники:"},null,-1),W={class:"helpers-grid"},X={key:0},Y={key:1},Z={key:1},ne=x({__name:"AreaView",props:{id:null,month:null},setup(s){const o=s,t=w(),{areas:d,helpers:c,curator:i}=b(t),h=B(new Date(o.month),"LLLL"),p=i.value.filter(r=>r.areaId==o.id),y=v(()=>d.value.find(r=>r.id==o.id)),g=v(()=>c.value.filter(r=>r.areaId==o.id));let _=V("none");async function L(){_.value="saving",await t.saveHelpers(g.value),_.value="saved"}return R(()=>_.value="none"),(r,T)=>a(y)?(n(),l("div",U,[e("h1",null,"Задачи на "+m(a(h)),1),q,e("div",{innerHTML:a(y).name},null,8,z),G,J,e("div",null,[(n(!0),l(k,null,f(a(p),u=>(n(),l("div",{key:"cur"+u.id,innerHTML:u.fio},null,8,K))),128))]),P,Q,e("div",W,[(n(!0),l(k,null,f(a(g),u=>(n(),I(O,{key:"area"+u.id,helper:u,month:s.month},null,8,["helper","month"]))),128))]),e("button",{onClick:T[0]||(T[0]=u=>L()),class:"big-button",textContent:"Сохранить"}),a(_)=="saving"?(n(),l("div",X,"Сохранение... ⌛")):C("",!0),a(_)=="saved"?(n(),l("div",Y,"Сохранено ✔️")):C("",!0)])):(n(),l("div",Z,"Загрузка... ⌛"))}});export{ne as default};
