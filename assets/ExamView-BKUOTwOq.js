const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/-before-6-SDfPpTif.js","assets/index-CuzaqZdI.js","assets/index-C7I7ou67.css","assets/-notice-DwTkJlxH.js","assets/1-tiMUcKSC.js","assets/1-C4zrGVNu.css","assets/10-BLhmK1KR.js","assets/11-CUUl7n3M.js","assets/2-CbK4r3SG.js","assets/3-sN_juNpO.js","assets/4-Bh8KFFym.js","assets/5-BKY0hwXI.js","assets/6-fAPaK8hm.js","assets/7-D5F4DgUs.js","assets/8-cRnV6qIx.js","assets/9-0Zj62-Nq.js","assets/1-MJX-sw78.js"])))=>i.map(i=>d[i]);
import{c as l,o,a as e,r as K,n as E,b as V,w as U,d as D,s as j,e as Q,f as N,g as O,h as B,F as f,i as S,t as v,j as c,_ as z,k as w,u as k,l as _,m as T,p as L,v as W,q as M,x as X}from"./index-CuzaqZdI.js";const A=(i,r,t)=>{const u=i[r];return u?typeof u=="function"?u():Promise.resolve(u):new Promise((n,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+r+(r.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},Z={class:"ts-content"},H={__name:"Content",props:{borderColor:String,bgColor:String},setup(i){return(r,t)=>(o(),l("div",{class:"ts-box is-start-indicated",style:E([{"font-family":"'noto sans tc'","font-size":"16px"},{"border-color":i.borderColor,"background-color":i.bgColor}])},[e("div",Z,[K(r.$slots,"default")])],4))}},q={__name:"ProblemNotFound",setup(i){return(r,t)=>(o(),V(H,{borderColor:"#f33",bgColor:"#fdd"},{default:U(()=>t[0]||(t[0]=[D(" 找不到這一題的設定檔 ٩(ŏ﹏ŏ、)۶ ，請檢查 console。 ")])),_:1}))}},Y={class:"ts-wrap is-vertical"},ee={key:0,class:"ts-wrap is-compact is-vertical"},te={class:"ts-accordion"},F={__name:"Problem",props:{uni:String,year:String,no:String,problemData:Object},emits:["loadingCompleted"],setup(i,{emit:r}){const t=i,u=r,n=j(null),a=j([]);Q(async()=>{if(n.value=N(()=>A(Object.assign({"./ntu/112/problem/-before-6.vue":()=>c(()=>import("./-before-6-SDfPpTif.js"),__vite__mapDeps([0,1,2])),"./ntu/112/problem/-notice.vue":()=>c(()=>import("./-notice-DwTkJlxH.js"),__vite__mapDeps([3,1,2])),"./ntu/112/problem/1.vue":()=>c(()=>import("./1-tiMUcKSC.js"),__vite__mapDeps([4,1,2,5])),"./ntu/112/problem/10.vue":()=>c(()=>import("./10-BLhmK1KR.js"),__vite__mapDeps([6,1,2])),"./ntu/112/problem/11.vue":()=>c(()=>import("./11-CUUl7n3M.js"),__vite__mapDeps([7,1,2])),"./ntu/112/problem/2.vue":()=>c(()=>import("./2-CbK4r3SG.js"),__vite__mapDeps([8,1,2])),"./ntu/112/problem/3.vue":()=>c(()=>import("./3-sN_juNpO.js"),__vite__mapDeps([9,1,2])),"./ntu/112/problem/4.vue":()=>c(()=>import("./4-Bh8KFFym.js"),__vite__mapDeps([10,1,2])),"./ntu/112/problem/5.vue":()=>c(()=>import("./5-BKY0hwXI.js"),__vite__mapDeps([11,1,2])),"./ntu/112/problem/6.vue":()=>c(()=>import("./6-fAPaK8hm.js"),__vite__mapDeps([12,1,2])),"./ntu/112/problem/7.vue":()=>c(()=>import("./7-D5F4DgUs.js"),__vite__mapDeps([13,1,2])),"./ntu/112/problem/8.vue":()=>c(()=>import("./8-cRnV6qIx.js"),__vite__mapDeps([14,1,2])),"./ntu/112/problem/9.vue":()=>c(()=>import("./9-0Zj62-Nq.js"),__vite__mapDeps([15,1,2]))}),`./${t.uni}/${t.year}/problem/${t.no}.vue`,5).catch(p).then(y)),t.no[0]!="-"){if(!t.problemData){console.error(`Problem data is not exist. (problem ${t.no})
-> Set the @/components/exam/${t.uni}/${t.year}/config.json > problem.${t.no}: {...}`);return}if(!t.problemData.content||t.problemData.content.length===0){console.warn(`Problem content is undefined or empty. (problem ${t.no})
-> Add { "type": ?, "id": ? } in @/components/exam/${t.uni}/${t.year}/config.json > problem.${t.no}.content: [...]`);return}a.value=await Promise.all(t.problemData.content.map(m))}});const p=()=>(console.error(`Problem comp is not exist. (problem ${t.no})
-> Check if @/components/exam/${t.uni}/${t.year}/problem/${t.no}.vue exist?
-> If ${t.no}.vue exist, check the "${t.no}" is in @/components/exam/${t.uni}/${t.year}/config.json > section: [...]`),q),y=g=>(u("loadingCompleted"),g),m=g=>N(()=>A(Object.assign({"./ntu/112/content/1.vue":()=>c(()=>import("./1-MJX-sw78.js"),__vite__mapDeps([16,1,2]))}),`./${t.uni}/${t.year}/content/${g.id}.vue`,5).catch(()=>q));return(g,h)=>(o(),l("div",Y,[(o(),V(B(n.value))),i.problemData&&i.no[0]!="-"?(o(),l("div",ee,[(o(!0),l(f,null,S(i.problemData.content,(C,$)=>(o(),l(f,null,[C.type==="answer"?(o(),V(H,{key:0,borderColor:"#7af",bgColor:"#def"},{default:U(()=>[e("details",te,[e("summary",null,"解答 "+v(C.suffix),1),(o(),V(B(a.value[$])))])]),_:2},1024)):O("",!0)],64))),256))])):O("",!0)]))}},se=["ntu","nctu"],ne={ntu:{shortName:"台大",yearList:["112","111"]},nctu:{shortName:"交大",yearList:["110","109"]}},x={uniList:se,uni:ne},oe=["start"],ie={key:1},le={key:2,class:"ts-divider is-section"},ae={key:0,class:"ts-wrap is-vertical is-middle-aligned exam-cover"},re={class:"ts-text is-huge is-bold"},ue={class:"ts-list is-unordered"},de={class:"item"},ce={key:1,class:"ts-wrap is-vertical is-middle-aligned exam-cover"},me={__name:"ExamPaper",props:{uni:String,year:String,examConfig:Object,isProblemVisible:Boolean,isExamOver:Boolean,examTimeSec:Number},emits:["clickStartExam","resetTimer"],setup(i,{emit:r}){const t=r;return(u,n)=>(o(),l(f,null,[e("div",{class:"ts-content problem-font exam",style:E({filter:i.isProblemVisible?"none":"blur(10px)"})},[(o(!0),l(f,null,S(i.examConfig.section,(a,p)=>(o(),l(f,null,[a[0]!=="-"?(o(),l("ol",{key:0,style:E({"padding-left":11+9*a.length+"px"}),start:a},[e("li",null,[w(F,{uni:i.uni,year:i.year,no:a,problemData:i.examConfig.problem[a]},null,8,["uni","year","no","problemData"])])],12,oe)):(o(),l("div",ie,[w(F,{uni:i.uni,year:i.year,no:a},null,8,["uni","year","no"])])),p!=i.examConfig.section.length-1?(o(),l("div",le)):O("",!0)],64))),256))],4),i.isProblemVisible?O("",!0):(o(),l(f,{key:0},[i.isExamOver?(o(),l("div",ce,[n[7]||(n[7]=e("div",{class:"ts-text is-huge is-bold"},"考試結束",-1)),e("button",{class:"ts-button is-start-icon",onClick:n[1]||(n[1]=a=>{t("resetTimer")})},n[6]||(n[6]=[e("span",{class:"ts-icon is-arrow-rotate-left-icon"},null,-1),D("重新計時 ")]))])):(o(),l("div",ae,[e("div",re,v(k(x).uni[i.uni].shortName)+"  "+v(i.year),1),e("div",ue,[e("div",de," 快速看過全部題目後再開始作答，考試時間為 "+v(Math.floor(i.examTimeSec/60))+" 分鐘，請做好配速。 ",1),n[2]||(n[2]=e("div",{class:"item"},"如果有給手寫答案紙，且題本沒有附註「只寫答案即可」，建議附上運算過程。",-1)),n[3]||(n[3]=e("div",{class:"item"},"簡單題目請先做完，若時間夠，驗算一遍後再做剩餘題目。",-1))]),e("button",{class:"ts-button is-start-icon",onClick:n[0]||(n[0]=a=>{t("clickStartExam")})},n[4]||(n[4]=[e("span",{class:"ts-icon is-pen-icon"},null,-1),D("開始作答 ")])),n[5]||(n[5]=e("div",{class:"ts-text is-small is-secondary is-italic"}," 如果你只想翻閱一下歷屆試題，可以關閉左側選單中的「測驗模式」 ",-1))]))],64))],64))}},ve=z(me,[["__scopeId","data-v-99abd743"]]),pe={class:"ts-grid"},be={class:"column"},_e={class:"ts-box is-vertical is-compact sidebar"},fe={class:"ts-content is-dense sidebar-setting"},ye={class:"ts-switch"},xe={class:"ts-content is-dense"},ge={class:"sidebar-table"},ke={class:"column ts-select is-solid is-fluid"},$e=["value"],Ee={class:"column ts-select is-solid is-fluid"},Ce=["value"],Pe={class:"ts-content is-dense"},Te={class:"sidebar-table"},Ve={class:"ts-wrap is-compact is-middle-aligned"},De=["disabled"],Oe={key:0,class:"ts-icon is-pause-icon"},Se={key:1,class:"ts-icon is-play-icon"},he=["disabled"],Le={key:0,class:"sidebar-timer-time"},we={key:1,class:"sidebar-timer-time"},Ae={class:"ts-content is-dense"},Re=["href","data-tooltip"],Ie={key:1},je={class:"column is-fluid"},Ne={class:"ts-box"},Be={__name:"ExamView",setup(i){const r=_("ntu"),t=_(x.uni[r.value].yearList[0]),u=_({});T(t,async b=>{try{const s=await A(Object.assign({"../components/exam/ntu/112/config.json":()=>c(()=>import("./config-BTQloobU.js"),[])}),`../components/exam/${r.value}/${b}/config.json`,6);u.value=s.default}catch{console.error(`Exam config is not exist. (${r.value}, ${b})
-> Check if @/components/exam/${r.value}/${b}/config.json exist?
`),u.value={}}},{immediate:!0});const n=_(!1),a=_(!n.value),p=_(!1),y=_(2),m=_(y.value);T(n,b=>{P(),a.value=!b}),T(u,()=>{n.value&&h()});const g=()=>{m.value<=0||(G(),a.value||(a.value=!0))},h=()=>{P(),a.value=!1},C=()=>{P(),R(),a.value=!0};let $=null;const R=()=>{p.value=!0,$=setInterval(()=>{m.value--},1e3)},I=()=>{p.value=!1,clearInterval($),$=null},P=()=>{I(),m.value=y.value},G=()=>{p.value?I():R()};T(m,b=>{b<=0&&(a.value=!1)});const J=()=>{};return(b,s)=>(o(),l("div",pe,[e("div",be,[e("div",_e,[e("div",fe,[e("label",ye,[L(e("input",{type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=d=>n.value=d),checked:""},null,512),[[W,n.value]]),s[4]||(s[4]=e("span",null,"測驗模式 ",-1)),s[5]||(s[5]=e("span",{class:"ts-icon is-circle-question-icon","data-tooltip":"開啟測驗模式後，題本內容會在作答前被隱藏，<br>並且不顯示解答。","data-html":"true"},null,-1))])]),s[14]||(s[14]=e("div",{class:"ts-divider"},null,-1)),e("div",xe,[e("table",ge,[e("tbody",null,[e("tr",null,[s[6]||(s[6]=e("td",null,[e("span",{class:"ts-icon is-school-icon"})],-1)),e("td",null,[e("div",ke,[L(e("select",{"onUpdate:modelValue":s[1]||(s[1]=d=>r.value=d),onChange:s[2]||(s[2]=d=>t.value=k(x).uni[r.value].yearList[0])},[(o(!0),l(f,null,S(k(x).uniList,d=>(o(),l("option",{key:d,value:d},v(k(x).uni[d].shortName?k(x).uni[d].shortName:"-"),9,$e))),128))],544),[[M,r.value]])])])]),e("tr",null,[s[7]||(s[7]=e("td",null,[e("span",{class:"ts-icon is-calendar-icon"})],-1)),e("td",null,[e("div",Ee,[L(e("select",{"onUpdate:modelValue":s[3]||(s[3]=d=>t.value=d)},[(o(!0),l(f,null,S(k(x).uni[r.value].yearList,d=>(o(),l("option",{key:d,value:d},v(d||"-")+" 年 ",9,Ce))),128))],512),[[M,t.value]])])])])])])]),s[15]||(s[15]=e("div",{class:"ts-divider"},null,-1)),e("div",Pe,[e("table",Te,[e("tbody",null,[e("tr",null,[s[9]||(s[9]=e("td",null,[e("span",{class:"ts-icon is-hashtag-icon"})],-1)),e("td",null,[e("span",null,v(u.value.id?u.value.id:"-"),1),s[8]||(s[8]=e("span",{class:"ts-icon is-circle-question-icon is-start-spaced","data-tooltip":"題本編號"},null,-1))])]),e("tr",null,[s[10]||(s[10]=e("td",null,[e("span",{class:"ts-icon is-file-icon"})],-1)),e("td",null,v(u.value.subject?u.value.subject:"-"),1)])])])]),s[16]||(s[16]=e("div",{class:"ts-divider"},null,-1)),e("div",{class:"ts-content is-dense sidebar-timer",style:E({opacity:n.value?1:.4})},[e("div",Ve,[e("button",{class:"ts-button is-small is-icon is-outlined",onClick:g,disabled:!n.value},[p.value?(o(),l("span",Oe)):(o(),l("span",Se))],8,De),e("button",{class:"ts-button is-small is-icon is-outlined",onClick:h,disabled:!n.value},s[11]||(s[11]=[e("span",{class:"ts-icon is-rotate-left-icon"},null,-1)]),8,he),m.value>=0?(o(),l("span",Le,v(Math.floor(m.value/60))+":"+v(String(m.value%60).padStart(2,"0")),1)):(o(),l("span",we,"0:00"))]),e("div",{class:X(["ts-progress is-tiny sidebar-timer-progress",p.value?"is-processing":""])},[e("div",{class:"bar",style:E({"--value":100*(m.value/y.value),"background-color":m.value/y.value>.1?"#9bf":"#f88"})},null,4)],2)],4),s[17]||(s[17]=e("div",{class:"ts-divider"},null,-1)),e("div",Ae,[s[12]||(s[12]=e("span",{class:"ts-icon is-link-icon is-end-spaced"},null,-1)),u.value.link?(o(),l("a",{key:0,class:"sidebar-link-text",href:u.value.link,"data-tooltip":u.value.linkTip?u.value.linkTip:"沒有附註任何東西捏 (´･ω･`)",target:"_blank"},"題本來源",8,Re)):(o(),l("span",Ie,"來源未知"))]),s[18]||(s[18]=e("div",{class:"ts-divider"},null,-1)),e("div",{class:"ts-content is-dense"},[e("button",{class:"ts-button is-outlined is-start-icon",onClick:J,"data-tooltip":"暫時想不到要怎麼做 ^=⦁𖥦⦁=^ ੭"},s[13]||(s[13]=[e("span",{class:"ts-icon is-download-icon"},null,-1),D("下載題本 ")]))])])]),e("div",je,[e("div",Ne,[w(ve,{uni:r.value,year:t.value,examConfig:u.value,isProblemVisible:a.value,isExamOver:m.value<=0,examTimeSec:y.value,onClickStartExam:C,onResetTimer:P},null,8,["uni","year","examConfig","isProblemVisible","isExamOver","examTimeSec"])])])]))}},qe=z(Be,[["__scopeId","data-v-a521ccb6"]]);export{qe as default};
