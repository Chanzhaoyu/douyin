import{_ as n}from"./lock-Be6elCLs.js";import{u as d,k as u}from"./other-1N8zCxje.js";import{ao as m,B as c,_ as V}from"./common-D47ON4bJ.js";import"./vendor-lpXtEhx2.js";const v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXElEQVRYR+2Xu48PURTHP9/SI17REfwBQmU1JDbxLsTSCKFEsp14rMqqrF3RSVASovGIAovEJjRWRfwBCJ14xaM8cuRMco2Z3+/O+NlEsreamXvOPZ/5nnvPmRGlYWZWftbLe0lK1/vtxiemAUKFt8Aivy5L1jQdiaLvJC0u+/+RggB4CvSF8UpJL5oGjnVWAM/Dd1LS6lyAG8BAGO+TdLklwF7gUvjelLQjF+A0cDSMz0g60hJgDDgcvqOSjuUCbAHuhPF9SZtaAowDG8N3q6S7uQBzgM+JcZ+kZ00gzGwVMJn4zJX0JQsgNtA9oHjzMUlFSrI4zGwUKFI3LmlzlWPlKQiAE8BwOL0Clkv6lhPdzGYBL4FlYT8s6WQjgIB4BKwLxxFJxzMBTgFDYTshqb/Or1aBAPDgDlGMa8CgpA9VC5rZAuAcsCuZ75c00QqgIhX+yIuUB/Fz/TVsZkfdGATSYlMrfQHUUYHCyMzS/VA8/gH4RvXhG2xG6S27Bnf7LIAaJTpth6zg/w9ATQq+A7dDhm3AzH+SgorgXhHPenBJDuEfMR7cIQ4BXgGL0TUVTY/hdeCgpPc1x3AhcB7Y2ZNjaGZpIarsZjUgaTdtV4hK0k99KS69/d82o1oV6j7J5gEfE3l70Y7nS/pUTlkdwHYvtWH8UNKGTlWnbs7MHgDrY35A0q1cgLSbXZR0oCXABWB/+FZ20zoFrgC7w3FIku/qxsPM/BtwJByvStqTq8BjYE0Yd2ynnajMLG3nTyStzQV4DSz51SxK/3JNZUh+TN5IWtoVYPrfcKoV+AnThhIwJw9nGAAAAABJRU5ErkJggg==",g=""+new URL("../assets/qingshaonian-Cjy-fMTM.png",import.meta.url).href,p=""+new URL("../assets/img-type3-TUUXfOQ_.png",import.meta.url).href,A={class:"DetailSetting"},E={key:0,class:"content type1"},B={class:"right"},N={key:1,class:"content type2"},y={class:"footer"},T={class:"notice"},f={key:2,class:"content type2"},b={class:"footer"},S={class:"notice"},C=Vue.defineComponent({name:"DetailSetting",__name:"DetailSetting",setup(_){const r=VueRouter.useRoute(),o=d(),t=Vue.reactive({type:0,triggerTime:m.TRIGGER_TIME.TIME60});return Vue.onMounted(()=>{t.type=~~r.query.type;let s=localStorage.getItem("changeTriggerTime");s!==null&&(t.triggerTime=Number(s))}),(s,e)=>{const l=Vue.resolveComponent("BaseHeader"),i=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",A,[Vue.createVNode(l),t.type===0?(Vue.openBlock(),Vue.createElementBlock("div",E,[e[4]||(e[4]=Vue.createStaticVNode('<div class="notice" data-v-5b591513><img src="'+n+'" alt="" data-v-5b591513><span data-v-5b591513>时间锁已关闭</span></div><div class="row mt1r no-active" data-v-5b591513><div class="left" data-v-5b591513><img src="'+v+'" alt="" data-v-5b591513><span data-v-5b591513>可为时间锁设置一个触发时间</span></div></div><div class="row mt1r no-active" data-v-5b591513><div class="left" data-v-5b591513><img src="'+u+'" alt="" data-v-5b591513><span data-v-5b591513>开启时间锁后，单日使用时长超过触发时间，需输入密码才能继续使用</span></div></div><div class="row mt1r mb1r no-active" data-v-5b591513><div class="left" data-v-5b591513><img src="'+n+'" alt="" data-v-5b591513><span data-v-5b591513>开启时间锁，需先设置独立密码；忘记密码后可通过申诉重置密码</span></div></div>',4)),Vue.createElementVNode("div",{class:"row mt1r mb1r",onClick:e[0]||(e[0]=a=>Vue.unref(o)("trigger-time",{triggerTime:t.triggerTime}))},[e[3]||(e[3]=Vue.createElementVNode("div",{class:"left"},[Vue.createElementVNode("span",null,"触发时间")],-1)),Vue.createElementVNode("div",B,[Vue.createElementVNode("span",null,Vue.toDisplayString(t.triggerTime)+"分钟",1),Vue.createVNode(i,{direction:"right"})])]),e[5]||(e[5]=Vue.createElementVNode("div",{class:"footer"},[Vue.createElementVNode("div",{class:"button primary"},"开启时间锁")],-1))])):Vue.createCommentVNode("",!0),t.type===1?(Vue.openBlock(),Vue.createElementBlock("div",N,[e[8]||(e[8]=Vue.createElementVNode("img",{class:"desc",src:g,alt:""},null,-1)),Vue.createElementVNode("div",y,[Vue.createElementVNode("div",T,[e[6]||(e[6]=Vue.createElementVNode("span",null,"更多信息可阅读",-1)),Vue.createElementVNode("span",{style:{color:"yellow"},onClick:e[1]||(e[1]=a=>Vue.unref(o)("/service-protocol",{type:"儿童/青少年使用须知"}))},"《儿童/青少年使用须知》")]),e[7]||(e[7]=Vue.createElementVNode("div",{class:"button primary"},"开启青少年模式",-1))])])):Vue.createCommentVNode("",!0),t.type===2?(Vue.openBlock(),Vue.createElementBlock("div",f,[e[11]||(e[11]=Vue.createElementVNode("img",{class:"desc",src:p,alt:""},null,-1)),Vue.createElementVNode("div",b,[Vue.createElementVNode("div",S,[e[9]||(e[9]=Vue.createElementVNode("span",null,"我已阅读并接受",-1)),Vue.createElementVNode("span",{style:{color:"yellow"},onClick:e[2]||(e[2]=a=>Vue.unref(o)("/service-protocol",{type:"抖音亲子平台服务协议"}))}," 《抖音亲子平台服务协议》 ")]),Vue.createVNode(c,{type:"primary"},{default:Vue.withCtx(()=>e[10]||(e[10]=[Vue.createTextVNode("立即绑定")])),_:1})])])):Vue.createCommentVNode("",!0)])}}}),M=V(C,[["__scopeId","data-v-5b591513"]]);export{M as default};
