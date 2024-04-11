(function(){"use strict";var e={3768:function(e,a,t){var l=t(3751),n=t(5220),o=(t(4114),t(641)),s=t(33),u=t(953),i={baseLink:"https://api.apiforge.net/v1/api",id:localStorage.getItem("id"),get:async function(e){const a=await fetch(this.baseLink+e,{method:"GET",headers:r()});a.ok||401!==a.status||(localStorage.removeItem("token"),ea.push("/food_delivery/login"));const t=await a.json();return t},post:async function(e,a){const t=await fetch(this.baseLink+e,{method:"POST",headers:r(),body:JSON.stringify(a)});t.ok||401!==t.status||(localStorage.removeItem("token"),ea.push("/food_delivery/login"));const l=await t.json();return l},put:async function(e,a){const t=await fetch(this.baseLink+e,{method:"PUT",headers:r(),body:JSON.stringify(a)});t.ok||401!==t.status?401===t.status&&localStorage.removeItem("token"):localStorage.removeItem("token");const l=await t.json();return l},delete:async function(e){const a=await fetch(this.baseLink+e,{method:"DELETE",headers:r()});if(a.ok||401!==a.status){if(401!==a.status){const e=await a.json();return e}localStorage.removeItem("token")}else localStorage.removeItem("token")}};function r(){const e="65fb08b9df7bc89ef3a6f520",a=localStorage.getItem("token");return{"Content-type":"application/json",api_key:e,authorization:`Bearer ${a}`}}const c={class:"popup center"},v={class:"title"},d={class:"desc"},k={class:"btn-dismiss"};var p={__name:"AccountPopup",props:{isBorderRed:Boolean},setup(e){const a=e;return(e,t)=>((0,o.uX)(),(0,o.CE)("main",null,[(0,o.Lk)("div",c,[(0,o.Lk)("div",{class:(0,s.C4)(["icon",{"red-border":a.isBorderRed}])},[(0,o.Lk)("p",null,[(0,o.RG)(e.$slots,"icon")])],2),(0,o.Lk)("div",v,[(0,o.RG)(e.$slots,"titleText")]),(0,o.Lk)("div",d,[(0,o.RG)(e.$slots,"descText")]),(0,o.Lk)("div",k,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=a=>e.$emit("close-popup"))},"Okay!")])])]))}},m=t(6262);const f=(0,m.A)(p,[["__scopeId","data-v-46d74fda"]]);var L=f,g=t(6278);const h=e=>((0,o.Qi)("data-v-6534ed8d"),e=e(),(0,o.jt)(),e),y={class:"checkMain"},_=h((()=>(0,o.Lk)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"},[(0,o.Lk)("circle",{class:"path circle",fill:"none",stroke:"#66fcf1","stroke-width":"6","stroke-miterlimit":"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,o.Lk)("polyline",{class:"path check",fill:"none",stroke:"#66fcf1","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})],-1))),C=h((()=>(0,o.Lk)("p",{class:"success"},"Uspesno!",-1))),b=[_,C];function I(e,a){return(0,o.uX)(),(0,o.CE)("div",y,b)}const w={},E=(0,m.A)(w,[["render",I],["__scopeId","data-v-6534ed8d"]]);var K=E;const R=e=>((0,o.Qi)("data-v-0027e4ee"),e=e(),(0,o.jt)(),e),X=R((()=>(0,o.Lk)("h3",null,"Login",-1))),j={class:"formBox"},S=R((()=>(0,o.Lk)("label",{for:"email"},"Email",-1))),O={class:"formBox"},x=R((()=>(0,o.Lk)("label",{for:"pass"},"Password",-1))),P={class:"toCreate"},T=R((()=>(0,o.Lk)("p",null,"Dont have an account?",-1)));var B={__name:"LoginPage",setup(e){localStorage.removeItem("token");const a=(0,g.Pj)(),t=(0,n.rd)(),r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.KR)(!1),d=(0,u.KR)(""),k=(0,u.KR)(""),p=(0,u.KR)(""),m=(0,u.KR)(""),f=(0,u.KR)(null),h=(0,u.Kh)({email:{value:r,invalid:!1},password:{value:c,invalid:!1}});function y(){let e=!1;return Object.keys(h).forEach((a=>{""===h[a].value?(d.value="❌",k.value="Neuspesno!",m.value=!0,h[a].invalid=!0,e=!0):h[a].invalid=!1})),e}async function _(){if(y())return;v.value=!0;const e=await i.post("/restaurants/users/login",{email:r.value,password:c.value});localStorage.setItem("token",e.data.token),"ok"===e.status?(f.value=!0,a.state.loggedUser=!0,setTimeout((()=>{t.push("/food_delivery/restaurants")}),1500)):(d.value="❌",k.value="Neuspesno!",m.value=!0,v.value=!1)}function C(){k.value=""}return(e,a)=>{const t=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[k.value?((0,o.uX)(),(0,o.Wv)(L,{key:0,isBorderRed:m.value,onClosePopup:C},{icon:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(d.value),1)])),titleText:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(k.value),1)])),descText:(0,o.k6)((()=>[(0,o.Lk)("h1",null,(0,s.v_)(p.value),1)])),_:1},8,["isBorderRed"])):(0,o.Q3)("",!0),(0,o.Lk)("section",null,[f.value?((0,o.uX)(),(0,o.Wv)(K,{key:0})):((0,o.uX)(),(0,o.CE)("div",{key:1,class:(0,s.C4)(["box",{active:v.value}]),onKeydown:(0,l.jR)(_,["enter"])},[(0,o.Lk)("form",{onSubmit:a[2]||(a[2]=(0,l.D$)((()=>{}),["prevent"]))},[X,(0,o.Lk)("div",j,[S,(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e)},null,512),[[l.Jo,r.value]])]),(0,o.Lk)("div",O,[x,(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e)},null,512),[[l.Jo,c.value]])]),(0,o.Lk)("div",P,[T,(0,o.bF)(t,{to:"/food_delivery/create"},{default:(0,o.k6)((()=>[(0,o.eW)("Create")])),_:1})]),(0,o.Lk)("div",{class:"submitButton"},[(0,o.Lk)("button",{type:"button",onClick:_},"Submit!")])],32)],34))])],64)}}};const F=(0,m.A)(B,[["__scopeId","data-v-0027e4ee"]]);var Q=F;const U=e=>((0,o.Qi)("data-v-68a67f8f"),e=e(),(0,o.jt)(),e),W=U((()=>(0,o.Lk)("h3",null,"Create accout",-1))),$={class:"formBox"},A={class:"formBox"},D={class:"formBox"},N={class:"formBox"},J={class:"toCreate"},V=U((()=>(0,o.Lk)("p",null,"Already have an account?",-1)));var q={__name:"CreateAccount",setup(e){const a=(0,u.KR)(!1),t=(0,u.KR)(""),n=(0,u.KR)(""),r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.Kh)({name:{value:"",invalid:!1},email:{value:"",invalid:!1},password:{value:"",invalid:!1},confirm:{value:"",invalid:!1}});function d(){Object.keys(v).forEach((e=>{""===v[e].value?(n.value="Neuspesno!",t.value="❌",c.value=!0,v[e].invalid=!0):v[e].invalid=!1,"email"!==e||v.email.value.includes("@")&&v.email.value.includes(".com")||(n.value="Neuspesno!",t.value="❌",c.value=!0,v.email.invalid=!0),v[e].value.length<5&&(n.value="Neuspesno!",t.value="❌",c.value=!0,v[e].invalid=!0)})),v.password.value!==v.confirm.value&&(n.value="Neuspesno!",t.value="❌",c.value=!0,v.password.invalid=!0,v.confirm.invalid=!0)}async function k(){d();let e=!0;Object.values(v).forEach((a=>{a.invalid&&(e=!1)})),e&&(a.value=!0,Object.values(v).some((async e=>{if(!e.invalid){const e=await i.post("/restaurants/users",{username:v.name.value,email:v.email.value,password:v.password.value});"ok"===e.status?(t.value="✔️",c.value=!1,n.value="Odobreno!",localStorage.setItem("id",e.data.user.id),a.value=!1):(t.value="❌",n.value="Neuspesno!",c.value=!0,a.value=!1)}})))}function p(){n.value=""}return(e,u)=>{const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[n.value?((0,o.uX)(),(0,o.Wv)(L,{key:0,isBorderRed:c.value,onClosePopup:p},{icon:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(t.value),1)])),titleText:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(n.value),1)])),descText:(0,o.k6)((()=>[(0,o.Lk)("h1",null,(0,s.v_)(r.value),1)])),_:1},8,["isBorderRed"])):(0,o.Q3)("",!0),(0,o.Lk)("section",null,[(0,o.Lk)("div",{class:(0,s.C4)(["box",{active:a.value}])},[(0,o.Lk)("form",{onSubmit:u[4]||(u[4]=(0,l.D$)((()=>{}),["prevent"]))},[W,(0,o.Lk)("div",$,[(0,o.Lk)("label",{for:"email",class:(0,s.C4)({red:!0===v.name.invalid})},"User name",2),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":u[0]||(u[0]=e=>v.name.value=e)},null,512),[[l.Jo,v.name.value]])]),(0,o.Lk)("div",A,[(0,o.Lk)("label",{for:"email",class:(0,s.C4)({red:!0===v.email.invalid})},"Email",2),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":u[1]||(u[1]=e=>v.email.value=e)},null,512),[[l.Jo,v.email.value]])]),(0,o.Lk)("div",D,[(0,o.Lk)("label",{for:"pass",class:(0,s.C4)({red:!0===v.password.invalid})},"Create Password",2),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":u[2]||(u[2]=e=>v.password.value=e)},null,512),[[l.Jo,v.password.value]])]),(0,o.Lk)("div",N,[(0,o.Lk)("label",{for:"pass",class:(0,s.C4)({red:!0===v.confirm.invalid})},"Confirm password",2),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":u[3]||(u[3]=e=>v.confirm.value=e)},null,512),[[l.Jo,v.confirm.value]])]),(0,o.Lk)("div",J,[V,(0,o.bF)(i,{to:"/food_delivery/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Login")])),_:1})]),(0,o.Lk)("div",{class:"submitButton"},[(0,o.Lk)("button",{type:"button",onClick:k},"Submit!")])],32)],2)])],64)}}};const G=(0,m.A)(q,[["__scopeId","data-v-68a67f8f"]]);var M=G;const z=e=>((0,o.Qi)("data-v-1361e2be"),e=e(),(0,o.jt)(),e),H=z((()=>(0,o.Lk)("div",{class:"spinner"},[(0,o.Lk)("div",{class:"lds-roller"},[(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div")])],-1))),Z=[H];function Y(e,a){return(0,o.uX)(),(0,o.CE)("section",null,Z)}const ee={},ae=(0,m.A)(ee,[["render",Y],["__scopeId","data-v-1361e2be"]]);var te=ae;const le=e=>((0,o.Qi)("data-v-0b88bc9c"),e=e(),(0,o.jt)(),e),ne={class:"mainContent"},oe={class:"restaurantList"},se=["onClick"],ue={class:"restaurantImage"},ie=["src","alt"],re=le((()=>(0,o.Lk)("div",{class:"deliveryStatus"},[(0,o.Lk)("p",null,"Delivery available")],-1))),ce={class:"restaurantDetails"},ve={class:"restaurantName"},de={class:"restaurantDescription"};var ke={__name:"RestaurantPage",setup(e){const a=(0,g.Pj)(),t=(0,n.rd)(),l=(0,u.KR)(null);async function r(){const e=await i.get("/restaurants");l.value=e.data.restaurants}async function c(){const e=await i.get("/restaurants/cart");a.dispatch("calculateCounter",e.data.cart)}function v(e){t.push(`/food_delivery/restaurants/${e}`)}return(0,o.sV)((()=>{r(),c()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",null,[null===l.value?((0,o.uX)(),(0,o.Wv)(te,{key:0})):(0,o.Q3)("",!0),(0,o.Lk)("div",ne,[(0,o.Lk)("ul",oe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.value,((e,a)=>((0,o.uX)(),(0,o.CE)("li",{key:a,onClick:a=>v(e.id),class:"card"},[(0,o.Lk)("div",ue,[(0,o.Lk)("img",{src:e.bannerImage,alt:e.title},null,8,ie),re]),(0,o.Lk)("div",ce,[(0,o.Lk)("h2",ve,(0,s.v_)(e.title),1),(0,o.Lk)("p",de,(0,s.v_)(e.description),1)])],8,se)))),128))])])]))}};const pe=(0,m.A)(ke,[["__scopeId","data-v-0b88bc9c"]]);var me=pe;const fe={class:"popUpMain"},Le={class:"content"},ge={class:"title"},he={class:"message"},ye={class:"button"};function _e(e,a){return(0,o.uX)(),(0,o.CE)("section",{onClick:a[1]||(a[1]=a=>e.$emit("close-popup"))},[(0,o.Lk)("div",fe,[(0,o.Lk)("div",Le,[(0,o.Lk)("div",ge,[(0,o.Lk)("h1",null,[(0,o.RG)(e.$slots,"title",{},void 0,!0)])]),(0,o.Lk)("div",he,[(0,o.RG)(e.$slots,"message",{},void 0,!0)]),(0,o.Lk)("div",ye,[(0,o.Lk)("button",{onClick:a[0]||(a[0]=a=>e.$emit("close-popup"))},"Okay!")])])])])}const Ce={},be=(0,m.A)(Ce,[["render",_e],["__scopeId","data-v-7998a685"]]);var Ie=be;const we={style:{"border-bottom":"2px solid #66f1fc","font-size":"20px"}},Ee={class:"card"},Ke={class:"cardImage"},Re=["src"],Xe={class:"content"},je={class:"card-content"},Se=["for","onChange"],Oe={class:"cart"},xe={class:"counter"},Pe={class:"button"};var Te={__name:"MealPopup",props:{meal:Object},emits:["close-popup"],setup(e,{emit:a}){const t=(0,g.Pj)(),n=e,r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.KR)(1),d=(0,u.KR)(parseInt(n.meal.price)),k=(0,u.KR)(null),p=a;function m(){v.value>0&&(v.value++,d.value=parseInt(n.meal.price)*v.value)}function f(){if(v.value>1)v.value--,d.value=parseInt(n.meal.price)*v.value;else{if(1!==v.value)return;d.value=parseInt(n.meal.price)*v.value}}function L(){k.value=!0}function h(){k.value=!1,setTimeout((()=>{p("close-popup")}),100)}async function y(e){const a=await _(e),l=t.state.cartItems,o={order:[{mealId:e,quantity:v.value+a}]},s=await i.put("/restaurants/cart",o);"ok"===s.status&&(l.some((a=>a.mealId===e))?(r.value="Bravo!",c.value="Jelo je poslato u korpu!"):(t.dispatch("addToCart",n.meal),r.value="Bravo!",c.value="Jelo je poslato u korpu!"))}async function _(e){const a=await i.get("/restaurants/cart"),t=await a.data.cart.find((a=>a.mealId===e));return t?t.quantity:0}function C(e){y(e),L()}return(0,o.sV)((()=>{L()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",{onClick:h},[r.value?((0,o.uX)(),(0,o.Wv)(Ie,{key:0},{title:(0,o.k6)((()=>[(0,o.Lk)("h1",we,(0,s.v_)(r.value),1)])),message:(0,o.k6)((()=>[(0,o.Lk)("h3",null,(0,s.v_)(c.value),1)])),_:1})):(0,o.Q3)("",!0),(0,o.bF)(l.eB,{name:"popup"},{default:(0,o.k6)((()=>[k.value?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"popup-container",onClick:a[1]||(a[1]=(0,l.D$)((()=>{}),["stop"]))},[(0,o.Lk)("div",Ee,[(0,o.Lk)("div",Ke,[(0,o.Lk)("img",{src:n.meal.image,alt:""},null,8,Re),(0,o.Lk)("button",{onClick:h},">")]),(0,o.Lk)("div",Xe,[(0,o.Lk)("div",je,[(0,o.Lk)("h1",null,(0,s.v_)(n.meal.title),1),(0,o.Lk)("h3",null,(0,s.v_)(n.meal.price)+",00 rsd",1)]),(0,o.Lk)("p",null,(0,s.v_)(n.meal.description),1),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.meal.additions,((a,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"additions",key:t},[(0,o.Lk)("label",{for:"inpPrice"+t,onChange:t=>e.handleCheckboxChange(a.title)},(0,s.v_)(a.title),41,Se)])))),128)),(0,o.Lk)("div",Oe,[(0,o.Lk)("div",xe,[(0,o.Lk)("button",{onClick:f},"-"),(0,o.Lk)("p",null,(0,s.v_)(v.value),1),(0,o.Lk)("button",{onClick:m},"+")]),(0,o.Lk)("div",Pe,[(0,o.Lk)("button",{onClick:a[0]||(a[0]=e=>C(n.meal.id))},"Dodaj u korpu! "+(0,s.v_)(d.value)+" rsd",1)])])])])])):(0,o.Q3)("",!0)])),_:1})]))}};const Be=(0,m.A)(Te,[["__scopeId","data-v-1bffa013"]]);var Fe=Be;const Qe={key:1},Ue={class:"restaurantImage"},We=["src"],$e={class:"restName"},Ae={class:"listOfMeals"},De={class:"mealList"},Ne=["onClick"],Je=["src"],Ve={class:"mealDetails"},qe={class:"mealInfo"},Ge={class:"prices"};var Me={__name:"SingleRest",props:{restId:String},setup(e){const a=e;a&&localStorage.setItem("restaurantId",a.restId);const t=(0,u.KR)([]),l=(0,u.KR)(null),n=(0,u.KR)(null);async function r(){const e=localStorage.getItem("restaurantId"),a=await i.get(`/restaurants/${e}`),n=await i.get(`/restaurants/${e}/meals`);t.value=a.data,l.value=n.data.meals,localStorage.setItem("restID",a.data.id)}function c(e){n.value=e}function v(){n.value=null}return r(),(e,a)=>null===l.value?((0,o.uX)(),(0,o.Wv)(te,{key:0})):((0,o.uX)(),(0,o.CE)("section",Qe,[(0,o.Lk)("div",Ue,[(0,o.Lk)("img",{src:t.value.bannerImage,alt:""},null,8,We)]),(0,o.Lk)("div",$e,[(0,o.Lk)("h1",null,(0,s.v_)(t.value.title),1),(0,o.Lk)("h3",null,(0,s.v_)(t.value.description),1)]),(0,o.Lk)("div",Ae,[(0,o.Lk)("ul",De,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.value,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id,class:"mealItem",onClick:a=>c(e)},[(0,o.Lk)("img",{src:e.image,alt:"Meal Image",class:"mealImage"},null,8,Je),(0,o.Lk)("div",Ve,[(0,o.Lk)("div",qe,[(0,o.Lk)("h2",null,(0,s.v_)(e.title),1),(0,o.Lk)("p",null,(0,s.v_)(e.description),1),(0,o.Lk)("div",Ge,[(0,o.Lk)("p",null,"Cena: "+(0,s.v_)(e.price)+"rsd",1)])])])],8,Ne)))),128))])]),n.value?((0,o.uX)(),(0,o.Wv)(Fe,{key:0,meal:n.value,onClosePopup:v},null,8,["meal"])):(0,o.Q3)("",!0)]))}};const ze=(0,m.A)(Me,[["__scopeId","data-v-351129ea"]]);var He=ze;async function Ze(e,a,t){const l=localStorage.getItem("token");if(l)return t();t({name:"Login"})}const Ye=(0,n.aE)({history:(0,n.LA)(),routes:[{path:"/food_delivery/",component:me},{path:"/",redirect:"/food_delivery/"},{path:"/food_delivery/login",component:Q,name:"Login"},{path:"/food_delivery/create",component:M},{path:"/food_delivery/restaurants",component:me,beforeEnter:[Ze]},{path:"/food_delivery/restaurants/:restId",props:!0,component:He},{path:"/:notFound(.*)",component:Q}]});var ea=Ye;const aa={class:"headerTitle"},ta={key:0},la={key:1},na={class:"totalCounter"},oa={class:"cartList"},sa=["src"],ua={class:"cartItemDetails"},ia={class:"deleteMeal"},ra=["onClick"],ca={key:0,class:"finishOrder"};var va={__name:"TheCart",emits:["close-cart"],setup(e,{emit:a}){const t=a,n=(0,g.Pj)(),r=(0,u.KR)(null),c=(0,u.KR)(0),v=(0,u.KR)(!1),d=(0,u.KR)(!1);async function k(){const e=await i.get("/restaurants/cart");"ok"===e.status&&(r.value=e.data.cart,n.dispatch("calculateCounter",e.data.cart),c.value=0,r.value.forEach((e=>c.value+=e.singleUnitPrice*e.quantity)))}async function p(e){const a={order:[{mealId:e,quantity:0}]},t=(await i.put("/restaurants/cart",a),r.value.find((a=>a.mealId===e)));c.value-=t.singleUnitPrice*t.quantity;const l=r.value.findIndex((a=>a.mealId===e));r.value.splice(l,1)}function m(){v.value=!0}function f(){v.value=!1,setTimeout((()=>{t("close-cart")}),300)}async function L(){const e=await i.delete("/restaurants/cart");d.value=!0,"ok"===e.status&&setTimeout((()=>{n.dispatch("calculateCounter",e.data.cart),c.value=0,r.value=null}),1500)}return(0,o.sV)((()=>{k(),m()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",{onClick:f},[(0,o.bF)(l.eB,{name:"fadeInOut"},{default:(0,o.k6)((()=>[v.value?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"mainCart",onClick:a[0]||(a[0]=(0,l.D$)((()=>{}),["stop"]))},[(0,o.Lk)("div",aa,[null===r.value||0===r.value.length?((0,o.uX)(),(0,o.CE)("p",ta,"Korpa je prazna 😊")):((0,o.uX)(),(0,o.CE)("h1",la,"Korpa"))]),(0,o.Lk)("div",na,[(0,o.Lk)("h1",null,"Ukupna cena: "+(0,s.v_)(c.value)+" rsd",1)]),(0,o.Lk)("ul",oa,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.value,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.mealId},[(0,o.Lk)("img",{src:e.image,alt:"",class:"cartItemImage"},null,8,sa),(0,o.Lk)("div",ua,[(0,o.Lk)("h3",null,(0,s.v_)(e.title),1),(0,o.Lk)("p",null,(0,s.v_)(e.singleUnitPrice*e.quantity)+" rsd",1),(0,o.Lk)("p",null,"Kolicina: "+(0,s.v_)(e.quantity),1)]),(0,o.Lk)("div",ia,[(0,o.Lk)("button",{onClick:a=>p(e.mealId)},"X",8,ra)])])))),128))]),r.value?.length?((0,o.uX)(),(0,o.CE)("div",ca,[d.value?((0,o.uX)(),(0,o.Wv)(K,{key:1})):((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:L},"Zavrsi kupovinu"))])):(0,o.Q3)("",!0)])):(0,o.Q3)("",!0)])),_:1})]))}};const da=(0,m.A)(va,[["__scopeId","data-v-7d1800bd"]]);var ka=da;const pa=e=>((0,o.Qi)("data-v-66d2a492"),e=e(),(0,o.jt)(),e),ma={class:"navbar"},fa={class:"logo"},La={class:"links"},ga=pa((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"Pocetna")],-1))),ha=pa((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"O nama")],-1))),ya={class:"special"},_a={key:0},Ca={class:"toggle_btn"},ba={key:0,class:"dropDown"},Ia=pa((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"Pocetna")],-1))),wa=pa((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"O nama")],-1))),Ea={class:"special"},Ka={key:0};var Ra={__name:"TheHeader",setup(e){const a=(0,g.Pj)(),t=(0,u.KR)(!1),n=(0,u.KR)(!1),r=(0,o.EW)((()=>a.getters.getCartCounter)),c=(0,u.KR)(null);function v(e){e.stopPropagation(),t.value=!t.value}function d(){n.value=!n.value}function k(){n.value=!1}async function p(){const e=await i.get("/restaurants/cart/");c.value=e.data.cart,await a.dispatch("calculateCounter",e.data.cart)}const m=e=>{const a=document.querySelector(".dropDown");a&&!a.contains(e.target)&&(t.value=!1)};return(0,o.sV)((()=>{window.addEventListener("click",m)})),(0,o.hi)((()=>{window.removeEventListener("click",m)})),p(),(e,a)=>{const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("main",null,[(0,o.Lk)("header",null,[(0,o.Lk)("div",ma,[(0,o.Lk)("div",fa,[(0,o.bF)(u,{to:"/food_delivery/"},{default:(0,o.k6)((()=>[(0,o.eW)("Logo")])),_:1})]),(0,o.Lk)("ul",La,[ga,ha,(0,o.Lk)("li",ya,[(0,o.Lk)("a",{onClick:d},"Korpa"),(0,o.eW)(),r.value?.length?((0,o.uX)(),(0,o.CE)("p",_a,(0,s.v_)(r.value.length),1)):(0,o.Q3)("",!0)]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/food_delivery/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Logout")])),_:1})])]),(0,o.Lk)("div",Ca,[(0,o.Lk)("img",{onClick:a[0]||(a[0]=e=>v(e)),width:"50",height:"50",src:"https://img.icons8.com/3d-fluency/188/menu.png",alt:"menu"})])]),(0,o.bF)(l.eB,{name:"drop"},{default:(0,o.k6)((()=>[t.value?((0,o.uX)(),(0,o.CE)("div",ba,[Ia,wa,(0,o.Lk)("li",Ea,[(0,o.Lk)("a",{onClick:d},"Korpa"),(0,o.eW)(),r.value?.length?((0,o.uX)(),(0,o.CE)("p",Ka,(0,s.v_)(r.value.length),1)):(0,o.Q3)("",!0)]),(0,o.Lk)("li",null,[(0,o.bF)(u,{to:"/food_delivery/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Logout")])),_:1})])])):(0,o.Q3)("",!0)])),_:1})])]),n.value?((0,o.uX)(),(0,o.Wv)(ka,{key:0,onCloseCart:k})):(0,o.Q3)("",!0)],64)}}};const Xa=(0,m.A)(Ra,[["__scopeId","data-v-66d2a492"]]);var ja=Xa,Sa={__name:"App",setup(e){const a=(0,n.lq)(),t=["/food_delivery/login","/food_delivery/create"];return(e,l)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t.includes((0,u.R1)(a).path)?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(ja,{key:0})),(0,o.bF)(n)],64)}}};const Oa=Sa;var xa=Oa;const Pa=(0,g.y$)({state(){return{cartItems:[],loggedUser:!0}},mutations:{calculateCounter(e,a){e.cartItems=a},addToCart(e,a){e.cartItems.push(a)},userLogStatus(e,a){e.loggedUser=a}},getters:{getCartCounter(e){return e.cartItems},getUserStatus(e){return e.loggedUser}},actions:{calculateCounter(e,a){e.commit("calculateCounter",a)},addToCart(e,a){e.commit("addToCart",a)},userLogStatus(e,a){e.commit("userLogStatus",a)}}});var Ta=Pa;const Ba=(0,l.Ef)(xa);Ba.use(ea),Ba.use(Ta),Ba.mount("#app")}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var o=a[l]={exports:{}};return e[l].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,o){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],o=e[c][2];for(var u=!0,i=0;i<l.length;i++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[i])}))?l.splice(i--,1):(u=!1,o<s&&(s=o));if(u){e.splice(c--,1);var r=n();void 0!==r&&(a=r)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,n,o]}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,o,s=l[0],u=l[1],i=l[2],r=0;if(s.some((function(a){return 0!==e[a]}))){for(n in u)t.o(u,n)&&(t.m[n]=u[n]);if(i)var c=i(t)}for(a&&a(l);r<s.length;r++)o=s[r],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},l=self["webpackChunkvue_first_app"]=self["webpackChunkvue_first_app"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(3768)}));l=t.O(l)})();
//# sourceMappingURL=app.dd42ff6c.js.map