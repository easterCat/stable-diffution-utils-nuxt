import{_ as l}from"./AppAnimate.vue_vue_type_script_setup_true_lang.cfb15b5e.js";import{u as e}from"./index.ab114e08.js";import{J as a,K as s,_ as t,I as i,aT as o,aU as n,a8 as c,aV as u,aS as d,r as v,v as r,x as m,a2 as p,u as k,a0 as h,Z as f,Y as C,aC as y,X as g,C as _,aW as b,aX as x,aY as z,ap as j,a4 as w,L as S,V,aE as L,aZ as T}from"./entry.867af431.js";import{u as E,a as B}from"./shop.e35e1083.js";import{_ as O}from"./document-copy.a9c0c615.js";import{E as A,a as N,b as U}from"./element-plus.bb8e70a3.js";import{_ as I,a as M,b as $,c as G}from"./plus.4333bf2a.js";import{_ as H}from"./delete.b5254baa.js";import{_ as J}from"./copy-document.961de030.js";import{_ as K}from"./shopping-trolley.336a7f0f.js";import{d as X}from"./vuedraggable.888f871d.js";import"./lodash.ea4d81e6.js";import"./sortablejs.8210fcbe.js";const Y={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Z=[t("path",{fill:"currentColor",d:"m199.04 672.64l193.984 112l224-387.968l-193.92-112l-224 388.032zm-23.872 60.16l32.896 148.288l144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112l56.704-98.112l-193.984-112l-56.64 98.112zM104.32 708.8l384-665.024l304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"},null,-1)];const D={name:"ep-edit-pen",render:function(l,e){return a(),s("svg",Y,Z)}},R={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},W=[t("path",{fill:"currentColor",d:"M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z"},null,-1)];const q={name:"ep-home-filled",render:function(l,e){return a(),s("svg",R,W)}},F={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},P=[t("path",{fill:"currentColor",d:"M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"},null,-1)];const Q={name:"ep-arrow-left-bold",render:function(l,e){return a(),s("svg",F,P)}},ll=l=>(x("data-v-e5fb4407"),l=l(),z(),l),el={class:"header"},al={class:"back"},sl={class:"header-center"},tl={class:"header-right"},il={class:"body"},ol={class:"left"},nl={class:"left-layer1"},cl=ll((()=>t("div",{class:"layer-top"},"数据来源",-1))),ul={class:"layer-bottom"},dl=ll((()=>t("div",{class:"layer-top"},"标签类别",-1))),vl={key:0,class:"type-list"},rl=["onClick"],ml={key:1,class:"type-list"},pl=["onClick"],kl={class:"center"},hl={class:"shop-card-con"},fl={class:"shop-item"},Cl={class:"tran-text"},yl={class:"right"},gl={class:"tag-list"},_l={class:"text-con"},bl={class:"zh"},xl={class:"text-con"},zl={class:"zh"},jl={key:0,class:"import-wrapper"},wl={class:"import-layer"},Sl={class:"import-button"},Vl=T(i({__name:"index",props:["modelValue"],async setup(i){let x,z;const{DefaultTagsApi:T}=e(),Y=([x,z]=o((()=>T.getTags())),x=await x,z(),x),Z=JSON.parse(Y),R=n().public.GELBOORU_TOKEN,W=c({animation:400,group:"people",disabled:!1,ghostClass:"ghost"}),{GelbooruApi:F,ShopApi:P}=e(),ll=u(),Vl=d(),Ll=v("1"),Tl=v(""),El=v(!1),Bl=v(1),Ol=v(0),{copy:Al}=E(),{addShop:Nl,renameShopName:Ul,shopList:Il,shop:Ml,onlySetShop:$l,initShop:Gl,setShop:Hl,clearShop:Jl,removeShopByName:Kl,copyShop:Xl,addOneCircle:Yl,removeOneCircle:Zl,createNewShopItem:Dl}=B(),Rl=v(Z.class),Wl=v(Rl.value[0].data),ql=v([]),Fl=v([]);r(Il,(l=>{"pc-design"===ll.name&&$l(l.map((l=>l.text)).join(", "))}));const Pl=()=>{Vl.go(-1)},Ql=()=>{Vl.replace("/pc/home")},le=()=>{El.value=!0},ee=()=>{Hl(Tl.value),El.value=!1},ae=async()=>{var l;const e=await P.translate({text:Ml.value,type:1});(null==(l=null==e?void 0:e.data)?void 0:l.translateText).split("，").forEach(((l,e)=>{Il.value[e].translateText=l}))},se=l=>{Bl.value=l,Ol.value=0,2===l&&(async()=>{const l=await F.getList();ql.value=l.data})()},te=async(l,e)=>{if(1===Bl.value)Wl.value=Rl.value[l].data,Ol.value=l;else if(2===Bl.value){const a=await F.getTagsById({token:R,page:1,limit:100,category_id:e});Ol.value=l,Fl.value=a.data}};return m((()=>{Gl()})),(e,i)=>{const o=Q,n=q,c=K,u=I,d=J,v=M,r=H,m=A,x=N,z=$,T=D,E=G,B=U,Y=O,Z=l;return a(),s("div",{class:f(["design-page page",{white:"2"===Ll.value}])},[t("div",el,[t("div",al,[p(o,{onClick:Pl}),p(n,{onClick:Ql})]),t("div",sl,[p(c,{onClick:le}),p(u,{onClick:k(Dl)},null,8,["onClick"]),p(d,{onClick:k(Xl)},null,8,["onClick"]),p(v,{onClick:ae}),p(r,{onClick:k(Jl)},null,8,["onClick"])]),t("div",tl,[p(x,{modelValue:Ll.value,"onUpdate:modelValue":i[0]||(i[0]=l=>Ll.value=l),class:"ml-4"},{default:h((()=>[p(m,{label:"1",size:"large"},{default:h((()=>[j("深色")])),_:1}),p(m,{label:"2",size:"large"},{default:h((()=>[j("浅色")])),_:1})])),_:1},8,["modelValue"])])]),t("div",il,[t("div",ol,[t("div",nl,[cl,t("div",ul,[t("div",{class:f(["left-menu",{"item-active":1===Bl.value}]),onClick:i[1]||(i[1]=l=>se(1))}," 常规标签 ",2),t("div",{class:f(["left-menu",{"item-active":2===Bl.value}]),onClick:i[2]||(i[2]=l=>se(2))}," Gelbooru标签 ",2),t("div",{class:f(["left-menu",{"item-active":3===Bl.value}]),onClick:i[3]||(i[3]=l=>se(3))}," EH标签(500个) ",2),t("div",{class:f(["left-menu",{"item-active":4===Bl.value}]),onClick:i[4]||(i[4]=l=>se(4))}," EH标签(31000个) ",2)]),dl,1===Bl.value?(a(),s("div",vl,[(a(!0),s(C,null,y(Rl.value,((l,e)=>(a(),s("div",{key:e,class:f(["type-item",{"type-item-active ":e===Ol.value}]),onClick:l=>te(e)},w(null==l?void 0:l.name),11,rl)))),128))])):g("",!0),2===Bl.value?(a(),s("div",ml,[(a(!0),s(C,null,y(ql.value,((l,e)=>(a(),s("div",{key:e,class:f(["type-item",{"type-item-active ":e===Ol.value}]),onClick:a=>te(e,null==l?void 0:l.id)},w(null==l?void 0:l.name)+"("+w(null==l?void 0:l.level)+") ",11,pl)))),128))])):g("",!0)])]),t("div",kl,[t("div",hl,[p(k(X),{modelValue:k(Il),"onUpdate:modelValue":i[5]||(i[5]=l=>_(Il)?Il.value=l:null),"component-data":{name:"list"},"drag-options":k(W),"item-key":l=>{(l=>{b.v4()})(l)}},{item:h((({element:l})=>[t("div",fl,[t("div",null,[t("span",null,w(l.text),1),t("span",Cl,w(l.translateText),1),p(u,{class:"add",onClick:e=>k(Yl)(l.text)},null,8,["onClick"]),p(z,{class:"minus",onClick:e=>k(Zl)(l.text)},null,8,["onClick"]),p(T,{class:"remove",onClick:e=>k(Ul)(l.text)},null,8,["onClick"]),p(E,{class:"remove",onClick:e=>k(Kl)(l.text)},null,8,["onClick"])])])])),_:1},8,["modelValue","drag-options","item-key"])])]),t("div",yl,[t("div",gl,[1===Bl.value?(a(!0),s(C,{key:0},y(Wl.value,((l,i)=>(a(),s("div",{key:i,class:"tag-item"},[t("div",_l,[t("p",bl,w(null==l?void 0:l.zh)+" "+w(null==l?void 0:l.en),1)]),t("div",null,[p(B,{size:"small",circle:"",onClick:e=>k(Nl)(null==l?void 0:l.en)},{default:h((()=>[S(e.$slots,"icon",{},(()=>[p(c)]),!0)])),_:2},1032,["onClick"]),p(B,{size:"small",circle:"",onClick:e=>k(Al)(null==l?void 0:l.en)},{default:h((()=>[S(e.$slots,"icon",{},(()=>[p(Y)]),!0)])),_:2},1032,["onClick"])])])))),128)):g("",!0),2===Bl.value?(a(!0),s(C,{key:1},y(Fl.value,((l,i)=>(a(),s("div",{key:i,class:"tag-item"},[t("div",xl,[t("p",zl,w(null==l?void 0:l.t_name)+" "+w(null==l?void 0:l.name),1)]),t("div",null,[p(B,{size:"small",circle:"",onClick:e=>k(Nl)(null==l?void 0:l.en)},{default:h((()=>[S(e.$slots,"icon",{},(()=>[p(c)]),!0)])),_:2},1032,["onClick"]),p(B,{size:"small",circle:"",onClick:e=>k(Al)(null==l?void 0:l.en)},{default:h((()=>[S(e.$slots,"icon",{},(()=>[p(Y)]),!0)])),_:2},1032,["onClick"])])])))),128)):g("",!0)])])]),p(Z,null,{default:h((()=>[El.value?(a(),s("div",jl,[t("div",wl,[V(t("textarea",{"onUpdate:modelValue":i[6]||(i[6]=l=>Tl.value=l),type:"text"},null,512),[[L,Tl.value]])]),t("div",Sl,[t("button",{onClick:i[7]||(i[7]=()=>El.value=!1)},"取消"),t("button",{onClick:ee},"确定")])])):g("",!0)])),_:1})],2)}}}),[["__scopeId","data-v-e5fb4407"]]);export{Vl as default};
