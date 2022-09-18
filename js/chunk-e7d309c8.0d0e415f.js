(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7d309c8"],{"3ad6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("b-form",{attrs:{id:"input-form"},on:{change:t.formChanged}},[i("b-card",{attrs:{"bg-variant":"light"}},[i("b-icon-x-square",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-delete",modifiers:{"modal-delete":!0}}],staticClass:"icon-delete main"}),i("b-form-group",{attrs:{id:"input-group-1",label:"Заголовок заметки:","label-for":"input-1",description:"Озаглавьте ваш todo-список как-нибудь"}},[i("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Заголовок"},model:{value:t.localArticle.title,callback:function(e){t.$set(t.localArticle,"title",e)},expression:"localArticle.title"}})],1)],1),i("hr"),i("b-card",{attrs:{"bg-variant":"light"}},[i("b-form-group",{attrs:{id:"input-group-2",label:"Todo-список:"}},t._l(t.localArticle.list,(function(e,a){return i("div",{key:a,staticClass:"list-item"},[i("b-form-checkbox",{model:{value:e.done,callback:function(i){t.$set(e,"done",i)},expression:"item.done"}}),i("b-form-input",{attrs:{id:"list-input-"+a,type:"text",required:"",placeholder:"Мероприятие"},model:{value:e.text,callback:function(i){t.$set(e,"text",i)},expression:"item.text"}}),i("b-icon-x-square",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"icon-delete",attrs:{title:"Удалить мероприятие"},on:{click:function(e){return t.deleteListItem(a)}}})],1)})),0)],1),i("hr"),i("b-card",{attrs:{"bg-variant":"light"}},[i("b-form-group",{attrs:{id:"input-group-3","label-cols-lg":"auto","label-size":"large",label:"Добавить мероприятие в список:"}},[i("b-form-input",{attrs:{id:"new-item-input",type:"text",placeholder:"Новое мероприятие"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addListItem(e)}},model:{value:t.newListItem,callback:function(e){t.newListItem=e},expression:"newListItem"}})],1)],1),i("hr"),i("b-button",{staticClass:"mr-2",attrs:{variant:"primary",disabled:!t.changed},on:{click:t.onSave}},[t._v(" Сохранить ")]),i("b-button",{staticClass:"mr-2",attrs:{disabled:!t.changed},on:{click:t.onReset}},[t._v(" "+t._s(t.formModes[t.currentMode].buttonText)+" ")]),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-exit",modifiers:{"modal-exit":!0}}],staticClass:"mr-2",attrs:{variant:"danger",icon:"box-arrow-right"}},[t._v(" Вернуться на главную ")])],1),i("b-modal",{attrs:{id:"modal-request",title:"Внимание!"},on:{ok:t.reloadData,cancel:function(e){t.showModal=!1}},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("p",{staticClass:"my-4"},[t._v(t._s(t.formModes[t.currentMode].modalText))])]),i("b-modal",{attrs:{id:"modal-exit",title:"Внимание!"},on:{ok:t.onExit}},[i("p",{staticClass:"my-4"},[t._v("Вы действительно хотите вернуться на главную страницу?")]),i("p",{staticClass:"my-3"},[t._v("(все несохраненные изменения будут потеряны)")])]),i("b-modal",{attrs:{id:"modal-delete",title:"Внимание!"},on:{ok:t.deleteAllArticle}},[i("p",{staticClass:"my-4"},[t._v("Вы действительно хотите удалить всю заметку?")]),i("p",{staticClass:"my-3"},[t._v("(это действие невозможно будет отменить)")])])],1)},r=[],l=(i("a434"),i("5530")),o=i("2f62"),s=i("4360"),n={name:"Article",data:function(){var t={id:+this.$route.params.id,title:+this.$route.params.id?s["a"].getters.getArticleTitle(+this.$route.params.id):"",list:+this.$route.params.id?JSON.parse(JSON.stringify(s["a"].getters.getTodo(+this.$route.params.id))):[]};return{storeArticle:JSON.parse(JSON.stringify(t)),localArticle:JSON.parse(JSON.stringify(t)),backupArticle:{id:0,title:"",list:[]},newListItem:"",changed:!1,showModal:!1,formModes:[{buttonText:"Отменить изменения",modalText:"Отменить сделанные изменения?"},{buttonText:"Вернуть изменения",modalText:"Вернуть отмененные изменения?"}],currentMode:0}},methods:Object(l["a"])(Object(l["a"])({},Object(o["c"])(["updateArticle","deleteArticle","addArticle"])),{},{reloadData:function(){this.currentMode?(this.localArticle=JSON.parse(JSON.stringify(this.backupArticle)),this.currentMode--):(this.backupArticle=JSON.parse(JSON.stringify(this.localArticle)),this.localArticle=JSON.parse(JSON.stringify(this.storeArticle)),this.currentMode++)},formChanged:function(){this.changed=!0,this.currentMode=0},onSave:function(){this.localArticle.id?this.updateArticle(this.localArticle):(this.localArticle.id=s["a"].getters.getNewId(),this.addArticle(this.localArticle)),this.storeArticle=JSON.parse(JSON.stringify(this.localArticle)),this.currentMode=0,this.changed=!1},onReset:function(){this.showModal=!0},onExit:function(){this.$router.push({name:"Home"})},deleteListItem:function(t){this.list.splice(t,1),this.changed=!0},addListItem:function(){this.newListItem&&(this.localArticle.list.push({text:this.newListItem,done:!1}),this.newListItem="",document.getElementById("new-item-input").focus())},deleteAllArticle:function(){this.deleteArticle(this.localArticle.id),this.onExit()}})},c=n,d=(i("5b91"),i("2877")),u=Object(d["a"])(c,a,r,!1,null,"5f57e216",null);e["default"]=u.exports},"5b91":function(t,e,i){"use strict";var a=i("a5de"),r=i.n(a);r.a},a434:function(t,e,i){"use strict";var a=i("23e7"),r=i("23cb"),l=i("a691"),o=i("50c4"),s=i("7b0b"),n=i("65f0"),c=i("8418"),d=i("1dde"),u=i("ae40"),m=d("splice"),h=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,f=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m||!h},{splice:function(t,e){var i,a,d,u,m,h,v=s(this),A=o(v.length),x=r(t,A),w=arguments.length;if(0===w?i=a=0:1===w?(i=0,a=A-x):(i=w-2,a=f(p(l(e),0),A-x)),A+i-a>b)throw TypeError(g);for(d=n(v,a),u=0;u<a;u++)m=x+u,m in v&&c(d,u,v[m]);if(d.length=a,i<a){for(u=x;u<A-a;u++)m=u+a,h=u+i,m in v?v[h]=v[m]:delete v[h];for(u=A;u>A-a+i;u--)delete v[u-1]}else if(i>a)for(u=A-a;u>x;u--)m=u+a-1,h=u+i-1,m in v?v[h]=v[m]:delete v[h];for(u=0;u<i;u++)v[u+x]=arguments[u+2];return v.length=A-a+i,d}})},a5de:function(t,e,i){}}]);
//# sourceMappingURL=chunk-e7d309c8.0d0e415f.js.map