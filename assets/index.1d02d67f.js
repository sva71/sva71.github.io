var V=Object.defineProperty;var y=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var w=(s,e,o)=>e in s?V(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,m=(s,e)=>{for(var o in e||(e={}))v.call(e,o)&&w(s,o,e[o]);if(y)for(var o of y(e))O.call(e,o)&&w(s,o,e[o]);return s};import{A as C,a as N,r as c,c as k,b as n,d as a,w as d,o as _,t as x,e as r,f as S,V as P,p as T}from"./vendor.b2acce41.js";const A=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}};A();var M=(s,e)=>{const o=s.__vccOpts||s;for(const[u,t]of e)o[u]=t;return o};const R={components:{AgGridVue:C},data(){return{columnDefs:[{headerName:"#",sortable:!0,field:"taskId"},{headerName:"\u0410\u0432\u0442\u043E\u0440",sortable:!0,field:"authorPseudo"},{headerName:"\u041E\u043F\u0438\u0441",sortable:!0,field:"details"},{headerName:"\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430",sortable:!0,field:"platform"},{headerName:"\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",sortable:!0,field:"link"},{headerName:"\u0422\u0438\u043F",sortable:!0,field:"type"}],rowData:[],platforms:["facebook","twitter","telegram","president","change_org"],taskTypes:["petition","report"],modalShow:!1,deleteModalShow:!1,appending:!1,editing:!1,online:!1,buf:{taskId:0,authorPseudo:"",details:"",platform:"",link:"",type:""},gridOptions:{}}},mounted(){const s=[{_id:"625457c9e427785e6d061539",author:{chatneyID:"be4e0f0a-24b3-4219-9e47-1567c9dc66ee",pseudo:"testPseudo"},details:"\u041F\u0435\u0442\u0438\u0446\u0456\u044F \u0432\u0438\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0440\u0444 \u0437 \u041E\u041E\u041D",link:"https://www.change.org/p/expel-russian-federation-from-un",platform:"change_org",taskID:56,ts:1649694665892,type:"petition"},{_id:"6254577ee427785e6d06152c",author:{chatneyID:"be4e0f0a-24b3-4219-9e47-1567c9dc66ee",pseudo:"testPseudo"},details:"\u041F\u0435\u0442\u0438\u0446\u0456\u044F \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0430\u043D\u043A\u0446\u0456\u0457 \u043F\u0440\u043E\u0442\u0438 \u0411\u0456\u043B\u043E\u0440\u0443\u0441\u0456\u0457",link:"https://petition.president.gov.ua/petition/136176",platform:"president",taskID:55,ts:1649694590729,type:"petition"},{_id:"6254591fe427785e6d061560",author:{chatneyID:"be4e0f0a-24b3-4219-9e47-1567c9dc66ee",pseudo:"testPseudo"},details:"\u0420\u0430\u043D\u0434\u043E\u043C\u043D\u0438\u0439 \u043F\u043E\u0441\u0442 \u043A\u043B\u043E\u043D\u0430 \u043F\u0454\u0441\u043A\u043E\u0432\u0430",link:"https://www.facebook.com/permalink.php?story_fbid=101202365446807&id=100066711303531&substory_index=0",platform:"facebook",taskID:59,ts:1649695007862,type:"report"},{_id:"625458ebe427785e6d061553",author:{chatneyID:"be4e0f0a-24b3-4219-9e47-1567c9dc66ee",pseudo:"testPseudo"},details:"\u0420\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445",link:"https://t.me/CyberArmyofRussia_Reborn/101",platform:"telegram",taskID:58,ts:1649694955071,type:"report"},{_id:"62545cc0e427785e6d06158a",author:{chatneyID:"be4e0f0a-24b3-4219-9e47-1567c9dc66ee",pseudo:"testPseudo"},details:"\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043F\u043E\u0441\u043A\u0430\u0440\u0436\u0438\u0442\u0438\u0441\u044C \u043D\u0430 \u043A\u0430\u043D\u0430\u043B, \u044F\u043A\u0438\u0439 \u043F\u043E\u0448\u0438\u0440\u044E\u0454 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0456 \u0434\u0430\u043D\u0456 \u0443\u043A\u0440\u0430\u0457\u043D\u0446\u0456\u0432!",link:"https://t.me/CyberArmyofRussia_Reborn/84",platform:"telegram",taskID:60,ts:1649695936278,type:"report"},{_id:"6254613fe427785e6d0615f1",author:{chatneyID:"be4e0f0a-24b3-4219-9e47-1567c9dc66ee",pseudo:"testPseudo"},details:"\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043F\u043E\u0441\u043A\u0430\u0440\u0436\u0438\u0442\u0438\u0441\u044C \u043D\u0430 \u043A\u0430\u043D\u0430\u043B, \u0449\u043E \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0443\u0454 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043D\u0456",link:"https://t.me/CyberArmyofRussia_Reborn/84",platform:"telegram",taskID:61,ts:1649697087315,type:"report"},{_id:"625458ace427785e6d061546",author:{chatneyID:"be4e0f0a-24b3-4219-9e47-1567c9dc66ee",pseudo:"testPseudo"},details:"\u0420\u0430\u043D\u0434\u043E\u043C\u043D\u0438\u0439 \u0442\u0432\u0456\u0442 \u0448\u0430\u0440\u0456\u044F",link:"https://twitter.com/anatoliisharii/status/1513507485793009665",platform:"twitter",taskID:57,ts:1649694892818,type:"report"}];N.get("https://cors-anywhere.herokuapp.com/https://tala.cloudi.es/routes/26bb36adfb/tasks",{auth:{username:"warrior",password:"ArmyOfCyborgs"}}).then(e=>{this.online=!0;for(let o of e.data)this.rowData.push({taskId:o.taskID,authorPseudo:o.author.pseudo,details:o.details,platform:o.platform,link:o.link,type:o.type})}).catch(e=>{console.error(e.message);for(let o of s)this.rowData.push({taskId:o.taskID,authorPseudo:o.author.pseudo,details:o.details,platform:o.platform,link:o.link,type:o.type})}).finally(()=>this.gridOptions.api.sizeColumnsToFit())},methods:{getMaxId(){let s=0;for(let e of this.rowData)e.taskId>s&&(s=e.taskId);return s},clearBuf(){this.buf={taskId:0,authorPseudo:"",details:"",platform:"",link:"",type:""}},gridClick(){let s=this.gridOptions.api.getSelectedNodes();s.length&&(this.buf.taskId=s[0].data.taskId)},createTaskClick(){this.clearBuf(),this.buf.taskId=this.getMaxId()+1,this.appending=!0,this.modalShow=!0},editTaskClick(){let s=this.gridOptions.api.getSelectedNodes();s.length&&(this.editing=!0,this.buf=m({},s[0].data),this.modalShow=!0)},modalOk(){if(this.appending&&(this.rowData.push(this.buf),this.gridOptions.api.setRowData(this.rowData),this.clearBuf()),this.editing){let s=this.rowData.findIndex(e=>e.taskId===this.buf.taskId);this.rowData[s]=m({},this.buf),this.gridOptions.api.setRowData(this.rowData),this.clearBuf()}this.appending=!1,this.editing=!1},deleteTaskClick(){this.gridOptions.api.getSelectedNodes().length&&(this.deleteModalShow=!0)},deleteModalOk(){let e=this.gridOptions.api.getSelectedNodes()[0].data.taskId,o=this.rowData.findIndex(u=>u.taskId===e);this.rowData.splice(o,1),this.gridOptions.api.setRowData(this.rowData),this.clearBuf()}}},B={class:"wrapper",id:"top"},U={class:"top-panel"},L={class:"buttons"},E=r("\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F"),F=r("\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"),G=r("\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"),q={class:"status"},z={key:0,style:{color:"forestgreen","font-weight":"bold"}},K={key:1,style:{color:"red","font-weight":"bold"}},j={class:"input-group"},H={style:{width:"20%"}},J=r("ID:"),Q=n("div",{style:{width:"5%"}},null,-1),W={style:{width:"75%"}},X=r("\u0410\u0432\u0442\u043E\u0440:"),Y=r("\u041E\u043F\u0438\u0441:"),Z=r("\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430:"),$=r("\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F:"),ee=r("\u0422\u0438\u043F:");function te(s,e,o,u,t,l){const p=c("b-button"),f=c("b-form-text"),h=c("b-form-input"),D=c("b-form-textarea"),b=c("b-form-select"),g=c("b-modal"),I=c("ag-grid-vue");return _(),k("div",B,[n("div",U,[n("div",L,[a(p,{variant:"success",onClick:l.createTaskClick},{default:d(()=>[E]),_:1},8,["onClick"]),a(p,{variant:"primary",onClick:l.editTaskClick},{default:d(()=>[F]),_:1},8,["onClick"]),a(p,{variant:"danger",onClick:l.deleteTaskClick},{default:d(()=>[G]),_:1},8,["onClick"])]),n("div",q,[t.online?(_(),k("span",z,"Online")):(_(),k("span",K,"Offline"))])]),a(g,{id:"task-modal",title:"\u041D\u043E\u0432\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F",modelValue:t.modalShow,"onUpdate:modelValue":e[6]||(e[6]=i=>t.modalShow=i),onOk:l.modalOk},{default:d(()=>[n("div",j,[n("div",H,[a(f,null,{default:d(()=>[J]),_:1}),a(h,{modelValue:t.buf.taskId,"onUpdate:modelValue":e[0]||(e[0]=i=>t.buf.taskId=i),disabled:t.editing},null,8,["modelValue","disabled"])]),Q,n("div",W,[a(f,null,{default:d(()=>[X]),_:1}),a(h,{modelValue:t.buf.authorPseudo,"onUpdate:modelValue":e[1]||(e[1]=i=>t.buf.authorPseudo=i),placeholder:"\u041F\u0441\u0435\u0432\u0434\u043E \u0430\u0432\u0442\u043E\u0440\u0430"},null,8,["modelValue"])])]),a(f,null,{default:d(()=>[Y]),_:1}),a(D,{modelValue:t.buf.details,"onUpdate:modelValue":e[2]||(e[2]=i=>t.buf.details=i),placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043E\u043F\u0438\u0441 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F"},null,8,["modelValue"]),a(f,null,{default:d(()=>[Z]),_:1}),a(b,{options:t.platforms,modelValue:t.buf.platform,"onUpdate:modelValue":e[3]||(e[3]=i=>t.buf.platform=i)},null,8,["options","modelValue"]),a(f,null,{default:d(()=>[$]),_:1}),a(h,{modelValue:t.buf.link,"onUpdate:modelValue":e[4]||(e[4]=i=>t.buf.link=i),placeholder:"\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441"},null,8,["modelValue"]),a(f,null,{default:d(()=>[ee]),_:1}),a(b,{options:t.taskTypes,modelValue:t.buf.type,"onUpdate:modelValue":e[5]||(e[5]=i=>t.buf.type=i)},null,8,["options","modelValue"])]),_:1},8,["modelValue","onOk"]),a(g,{id:"delete-confirm",title:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F",modelValue:t.deleteModalShow,"onUpdate:modelValue":e[7]||(e[7]=i=>t.deleteModalShow=i),onOk:l.deleteModalOk},{default:d(()=>[n("p",null,"\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F #"+x(t.buf.taskId)+"?",1)]),_:1},8,["modelValue","onOk"]),a(I,{style:{width:"100%",height:"calc(95vh - 60px)"},class:"ag-theme-alpine",rowSelection:"single","grid-options":t.gridOptions,columnDefs:t.columnDefs,rowData:t.rowData,onClick:l.gridClick,onDblclick:l.editTaskClick},null,8,["grid-options","columnDefs","rowData","onClick","onDblclick"])])}var oe=M(R,[["render",te]]);const se=S(oe).use(P).use(T);se.mount("#app");
