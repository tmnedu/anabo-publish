import{d as f,c as v,o as s,a as o,b as e,t as c,w as M,h as $,e as a,i as H,j as b,u as w,F as k,f as x,g as I,s as V,r as R,k as B,l as C}from"./index-56ee9ada.js";import{f as D}from"./index-a8126e01.js";const N={class:"task"},S=["textContent"],A=f({__name:"TaskRow",props:{task:null,helper:null},setup(n){const{task:l,helper:t}=n;t.completedTaskIds||(t.completedTaskIds=[]);const d=v({get(){return t.completedTaskIds?.includes?.(l.id)??!1},set(h){if(t.completedTaskIds)if(t.completedTaskIds.includes(l.id)){const i=t.completedTaskIds.indexOf(l.id);i>-1&&t.completedTaskIds.splice(i,1)}else t.completedTaskIds.push(l.id)}});return(h,i)=>(s(),o("div",N,[e("div",{style:{"padding-left":"8px"},textContent:c(n.task.title)},null,8,S),M(e("input",{style:{"min-width":"30px",height:"30px",margin:"5px 0"},type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=p=>H(d)?d.value=p:null)},null,512),[[$,a(d)]]),b(" "+c(n.helper.completedTaskIds)+" "+c(n.task.id),1)]))}}),F={class:"helper-card",style:{"min-width":"320px"}},j=["textContent"],E=["textContent"],O=e("hr",null,null,-1),U=f({__name:"HelperRow",props:{helper:null,month:null},setup(n){const{helper:l,month:t}=n,h=w().getMonthTasks(t);return(i,p)=>(s(),o("div",F,[e("h3",{style:{padding:"6px"},textContent:c(n.helper.fio)},null,8,j),e("div",{style:{"padding-left":"8px","padding-bottom":"6px"},textContent:c(n.helper.schoolName)},null,8,E),O,(s(!0),o(k,null,x(a(h),m=>(s(),I(A,{task:m,helper:n.helper,key:"task"+m.id},null,8,["task","helper"]))),128))]))}});const q={key:0},z=e("div",{textContent:"Группа:"},null,-1),G=["innerHTML"],J=e("hr",null,null,-1),K=e("div",{textContent:"Координаторы:"},null,-1),P=["innerHTML"],Q=e("hr",null,null,-1),W=e("div",{textContent:"Советники:"},null,-1),X={class:"helpers-grid"},Y={key:0},Z={key:1},ee={key:1},se=f({__name:"AreaView",props:{id:null,month:null},setup(n){const l=n,t=w(),{areas:d,helpers:h,curator:i}=V(t),p=D(new Date(l.month),"LLLL"),m=i.value.filter(r=>r.areaId==l.id),y=v(()=>d.value.find(r=>r.id==l.id)),T=v(()=>h.value.filter(r=>r.areaId==l.id));let _=R("none");async function L(){_.value="saving",await t.saveHelpers(T.value),_.value="saved"}return B(()=>_.value="none"),(r,g)=>a(y)?(s(),o("div",q,[e("h1",null,"Задачи на "+c(a(p)),1),z,e("div",{innerHTML:a(y).name},null,8,G),J,K,e("div",null,[(s(!0),o(k,null,x(a(m),u=>(s(),o("div",{key:"cur"+u.id,innerHTML:u.fio},null,8,P))),128))]),Q,W,e("div",X,[(s(!0),o(k,null,x(a(T),u=>(s(),I(U,{key:"area"+u.id,helper:u,month:n.month},null,8,["helper","month"]))),128))]),e("button",{onClick:g[0]||(g[0]=u=>L()),class:"big-button",textContent:"Сохранить"}),a(_)=="saving"?(s(),o("div",Y,"Сохранение... ⌛")):C("",!0),a(_)=="saved"?(s(),o("div",Z,"Сохранено ✔️")):C("",!0)])):(s(),o("div",ee,"Загрузка... ⌛"))}});export{se as default};
