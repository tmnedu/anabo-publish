import{d as y,o as l,a as u,w as k,n as g,b as n,p as T,t as f,r as m,f as c,c as p,u as w,k as C,g as a,i as b,F as h,e as $,h as L,j as V}from"./index-09f4c865.js";const B={class:"task"},D=y({__name:"AdminTaskRow",props:{task:null},setup(r){return(t,o)=>(l(),u("div",B,[k(n("input",{style:{padding:"8px"},"onUpdate:modelValue":o[0]||(o[0]=e=>r.task.title=e)},null,512),[[g,r.task.title]]),T(" "+f(r.task.id)+" ",1),n("button",{style:{padding:"8px"},onClick:o[1]||(o[1]=e=>t.$emit("remove"))},"Удалить")]))}}),R={style:{"margin-bottom":"12px"}},N=n("h1",null,"Выбрать месяц:",-1),S={style:{display:"flex","justify-content":"center","align-items":"center"}},j={key:0,textContent:"Производится сохранение ⌛"},E={key:1,textContent:"Задачи сохранены ✔️"},A=y({__name:"EditTasks",setup(r){let t=m(c(new Date,"yyyy-MM"));const o=p(()=>c(new Date(t.value),"LLLL yyyy"));let e=m("none");const d=w(),x=p(()=>d.getMonthTasks(t.value));async function _(){e.value="saving",await d.saveTasks(),e.value="saved"}async function M(v){e.value="saving",await d.removeTask(v),e.value="saved"}return C(()=>e.value="none"),(v,i)=>(l(),u("div",null,[n("div",R,[N,k(n("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>b(t)?t.value=s:t=s),type:"month"},null,512),[[g,a(t)]])]),n("h1",null,"Управление задачами на "+f(a(o)),1),(l(!0),u(h,null,$(a(x),s=>(l(),V(D,{key:s.id,task:s,onRemove:F=>M(s.id)},null,8,["task","onRemove"]))),128)),n("div",S,[n("button",{style:{padding:"8px",margin:"auto"},onClick:i[1]||(i[1]=s=>a(d).newTask(a(t)))}," Добавить новую задачу ")]),n("button",{onClick:i[2]||(i[2]=s=>_()),class:"big-button",textContent:"Сохранить"}),a(e)=="saving"?(l(),u("span",j)):a(e)=="saved"?(l(),u("span",E)):L("",!0)]))}});export{A as default};