import{j as l}from"./other-1N8zCxje.js";import{aq as y,ar as h,o as p,P as f,al as g,a0 as _,_ as x}from"./common-D47ON4bJ.js";import"./vendor-lpXtEhx2.js";const N={class:"lookHistory"},k={class:"content"},C={key:1,class:"empty"},S=Vue.defineComponent({name:"LookHistory",__name:"LookHistory",setup(v){const e=Vue.reactive({loadingVideo:!1,loadingOther:!1,isClearHistoryVideo:!1,isClearHistoryOther:!1,currentSlideItemIndex:0,pageSize:15,historyVideo:{total:0,pageNo:0,list:[]},historyOther:{total:0,pageNo:0,list:[]}}),a=Vue.computed(()=>e.currentSlideItemIndex===0?e.historyVideo.list.length:e.historyOther.list.length);Vue.onMounted(()=>{r(!0),n(!0)});async function r(o=!1){if(e.loadingVideo||e.isClearHistoryVideo)return;if(!o){if(e.historyVideo.total<=e.historyVideo.list.length)return;e.historyVideo.pageNo++}e.loadingVideo=!0;let t=await y({pageNo:e.historyVideo.pageNo,pageSize:e.pageSize});console.log(t),e.loadingVideo=!1,t.success&&(e.historyVideo.list=e.historyVideo.list.concat(t.data.list),e.historyVideo.total=t.data.total)}async function n(o=!1){if(e.loadingOther||e.isClearHistoryOther)return;e.loadingOther=!0,o||e.historyOther.pageNo++;let t=await h({pageNo:e.historyOther.pageNo,pageSize:e.pageSize});e.loadingOther=!1,t.success&&(e.historyOther.list=e.historyOther.list.concat(t.data.list),e.historyOther.total=t.data.total)}function d(){_("确定清空？","清空后，以往观看记录不再展示","gray",()=>{if(e.currentSlideItemIndex===0){e.historyVideo.list=[],e.isClearHistoryVideo=!0;return}e.historyOther.list=[],e.isClearHistoryVideo=!0})}return(o,t)=>{const c=Vue.resolveComponent("BaseHeader"),u=Vue.resolveComponent("Indicator"),V=Vue.resolveComponent("Loading"),s=Vue.resolveComponent("SlideItem"),m=Vue.resolveComponent("SlideHorizontal");return Vue.openBlock(),Vue.createElementBlock("div",N,[Vue.createVNode(c,null,Vue.createSlots({center:Vue.withCtx(()=>[t[2]||(t[2]=Vue.createElementVNode("span",{class:"f16"},"观看历史",-1))]),_:2},[a.value?{name:"right",fn:Vue.withCtx(()=>[Vue.createElementVNode("span",{class:"second-text-color f13",onClick:d},"清空")]),key:"0"}:void 0]),1024),Vue.createElementVNode("div",k,[Vue.createVNode(u,{style:{width:"calc(100vw - 2rem)","margin-left":"1rem"},tabStyleWidth:"50%",tabTexts:["视频","影视综"],"active-index":e.currentSlideItemIndex,"onUpdate:activeIndex":t[0]||(t[0]=i=>e.currentSlideItemIndex=i)},null,8,["active-index"]),Vue.createVNode(m,{index:e.currentSlideItemIndex,"onUpdate:index":t[1]||(t[1]=i=>e.currentSlideItemIndex=i),class:"SlideHorizontal"},{default:Vue.withCtx(()=>[Vue.createVNode(s,{class:"tab1",style:{overflow:"auto"}},{default:Vue.withCtx(()=>[Vue.createVNode(p,{class:"Scroll",onPulldown:r},{default:Vue.withCtx(()=>[e.historyVideo.total?(Vue.openBlock(),Vue.createBlock(f,{key:0,list:e.historyVideo.list},null,8,["list"])):Vue.createCommentVNode("",!0),e.loadingVideo?(Vue.openBlock(),Vue.createBlock(V,{key:1,"is-full-screen":!1})):(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:2},[e.historyVideo.list.length?(Vue.openBlock(),Vue.createBlock(g,{key:0})):(Vue.openBlock(),Vue.createElementBlock("div",C,t[3]||(t[3]=[Vue.createElementVNode("img",{src:l,alt:""},null,-1),Vue.createElementVNode("div",{class:"title"},"暂无观看历史记录",-1)])))],64))]),_:1})]),_:1}),Vue.createVNode(s,{class:"tab2"},{default:Vue.withCtx(()=>t[4]||(t[4]=[Vue.createElementVNode("div",{class:"empty"},[Vue.createElementVNode("img",{src:l,alt:""}),Vue.createElementVNode("div",{class:"title"},"暂无观影历史记录")],-1)])),_:1})]),_:1},8,["index"])])])}}}),B=x(S,[["__scopeId","data-v-2c5159b9"]]);export{B as default};
