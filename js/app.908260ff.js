(function(){"use strict";var e={579:function(e,a,t){var l=t(3751),n=t(5220),s=(t(4114),t(641)),o=t(33),u=t(953),i={baseLink:"https://api.apiforge.net/v1/api",id:localStorage.getItem("id"),get:async function(e){const a=await fetch(this.baseLink+e,{method:"GET",headers:r()});a.ok||401!==a.status||(localStorage.removeItem("token"),Ve.push("/login"));const t=await a.json();return t},post:async function(e,a){const t=await fetch(this.baseLink+e,{method:"POST",headers:r(),body:JSON.stringify(a)});t.ok||401!==t.status||(localStorage.removeItem("token"),Ve.push("/login"));const l=await t.json();return l},put:async function(e,a){const t=await fetch(this.baseLink+e,{method:"PUT",headers:r(),body:JSON.stringify(a)});t.ok||401!==t.status?401===t.status&&localStorage.removeItem("token"):localStorage.removeItem("token");const l=await t.json();return l},delete:async function(e){const a=await fetch(this.baseLink+e,{method:"DELETE",headers:r()});if(a.ok||401!==a.status){if(401!==a.status){const e=await a.json();return e}localStorage.removeItem("token")}else localStorage.removeItem("token")}};function r(){const e="65fb08b9df7bc89ef3a6f520",a=localStorage.getItem("token");return{"Content-type":"application/json",api_key:e,authorization:`Bearer ${a}`}}const c={class:"popup center"},v={class:"title"},d={class:"desc"},k={class:"btn-dismiss"};var p={__name:"AccountPopup",props:{isBorderRed:Boolean},setup(e){const a=e;return(e,t)=>((0,s.uX)(),(0,s.CE)("main",null,[(0,s.Lk)("div",c,[(0,s.Lk)("div",{class:(0,o.C4)(["icon",{"red-border":a.isBorderRed}])},[(0,s.Lk)("p",null,[(0,s.RG)(e.$slots,"icon")])],2),(0,s.Lk)("div",v,[(0,s.RG)(e.$slots,"titleText")]),(0,s.Lk)("div",d,[(0,s.RG)(e.$slots,"descText")]),(0,s.Lk)("div",k,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=a=>e.$emit("close-popup"))},"Okay!")])])]))}},m=t(6262);const L=(0,m.A)(p,[["__scopeId","data-v-46d74fda"]]);var f=L,g=t(6278);const h=e=>((0,s.Qi)("data-v-0cfde91e"),e=e(),(0,s.jt)(),e),C=h((()=>(0,s.Lk)("h3",null,"Login",-1))),b={class:"formBox"},y=h((()=>(0,s.Lk)("label",{for:"email"},"Email",-1))),_={class:"formBox"},w=h((()=>(0,s.Lk)("label",{for:"pass"},"Password",-1))),I={class:"toCreate"},E=h((()=>(0,s.Lk)("p",null,"Dont have an account?",-1)));var R={__name:"LoginPage",setup(e){localStorage.removeItem("token");const a=(0,g.Pj)(),t=(0,n.rd)(),r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.KR)(!1),d=(0,u.KR)(""),k=(0,u.KR)(""),p=(0,u.KR)(""),m=(0,u.KR)(""),L=(0,u.Kh)({email:{value:r,invalid:!1},password:{value:c,invalid:!1}});function h(){let e=!1;return Object.keys(L).forEach((a=>{""===L[a].value?(d.value="❌",k.value="Failed!",p.value="Please,fill all inputs!",m.value=!0,L[a].invalid=!0,e=!0):L[a].invalid=!1})),e}async function R(){if(h())return;v.value=!0;const e=await i.post("/restaurants/users/login",{email:r.value,password:c.value});localStorage.setItem("token",e.data.token),"ok"===e.status?(d.value="✔️",k.value="Success!",p.value="You will be transfered to main page!",m.value=!1,v.value=!1,setTimeout((()=>{a.state.loggedUser=!0,t.push("/restaurants")}),1500)):(d.value="❌",k.value="Failed!",p.value="Please,try again!",m.value=!0,v.value=!1)}function K(){k.value=""}return(e,a)=>{const t=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[k.value?((0,s.uX)(),(0,s.Wv)(f,{key:0,isBorderRed:m.value,onClosePopup:K},{icon:(0,s.k6)((()=>[(0,s.Lk)("p",null,(0,o.v_)(d.value),1)])),titleText:(0,s.k6)((()=>[(0,s.Lk)("p",null,(0,o.v_)(k.value),1)])),descText:(0,s.k6)((()=>[(0,s.Lk)("h1",null,(0,o.v_)(p.value),1)])),_:1},8,["isBorderRed"])):(0,s.Q3)("",!0),(0,s.Lk)("section",null,[(0,s.Lk)("div",{class:(0,o.C4)(["box",{active:v.value}]),onKeydown:(0,l.jR)(R,["enter"])},[(0,s.Lk)("form",{onSubmit:a[2]||(a[2]=(0,l.D$)((()=>{}),["prevent"]))},[C,(0,s.Lk)("div",b,[y,(0,s.bo)((0,s.Lk)("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e)},null,512),[[l.Jo,r.value]])]),(0,s.Lk)("div",_,[w,(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e)},null,512),[[l.Jo,c.value]])]),(0,s.Lk)("div",I,[E,(0,s.bF)(t,{to:"/create"},{default:(0,s.k6)((()=>[(0,s.eW)("Create")])),_:1})]),(0,s.Lk)("div",{class:"submitButton"},[(0,s.Lk)("button",{type:"button",onClick:R},"Submit!")])],32)],34)])],64)}}};const K=(0,m.A)(R,[["__scopeId","data-v-0cfde91e"]]);var X=K;const S=e=>((0,s.Qi)("data-v-0c0a4f8e"),e=e(),(0,s.jt)(),e),j=S((()=>(0,s.Lk)("h3",null,"Create accout",-1))),P={class:"formBox"},x={class:"formBox"},O={class:"formBox"},T={class:"formBox"},F={class:"toCreate"},A=S((()=>(0,s.Lk)("p",null,"Already have an account?",-1)));var B={__name:"CreateAccount",setup(e){const a=(0,u.KR)(!1),t=(0,u.KR)(""),n=(0,u.KR)(""),r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.Kh)({name:{value:"",invalid:!1},email:{value:"",invalid:!1},password:{value:"",invalid:!1},confirm:{value:"",invalid:!1}});function d(){Object.keys(v).forEach((e=>{""===v[e].value?(n.value="Failed!",t.value="❌",c.value=!0,r.value="Please, fill all input fields... Also, passwords must match!",v[e].invalid=!0):v[e].invalid=!1,"email"!==e||v.email.value.includes("@")||(n.value="Failed!",t.value="❌",c.value=!0,r.value="Your email must include @ symbol!",v.email.invalid=!0)})),v.password.value!==v.confirm.value&&(n.value="Failed!",t.value="❌",c.value=!0,r.value="Please, fill all input fields... Also, passwords must match!",v.password.invalid=!0,v.confirm.invalid=!0)}async function k(){d();let e=!0;Object.values(v).forEach((a=>{a.invalid&&(e=!1)})),e&&(a.value=!0,Object.values(v).some((async e=>{if(!e.invalid){const e=await i.post("/restaurants/users",{username:v.name.value,email:v.email.value,password:v.password.value});"ok"===e.status?(t.value="✔️",c.value=!1,n.value="Success!!",r.value="You can now login to this user!",localStorage.setItem("id",e.data.user.id),a.value=!1):(t.value="❌",n.value="Failed!",r.value="Please, try again!",c.value=!0,a.value=!1)}})))}function p(){n.value=""}return(e,u)=>{const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[n.value?((0,s.uX)(),(0,s.Wv)(f,{key:0,isBorderRed:c.value,onClosePopup:p},{icon:(0,s.k6)((()=>[(0,s.Lk)("p",null,(0,o.v_)(t.value),1)])),titleText:(0,s.k6)((()=>[(0,s.Lk)("p",null,(0,o.v_)(n.value),1)])),descText:(0,s.k6)((()=>[(0,s.Lk)("h1",null,(0,o.v_)(r.value),1)])),_:1},8,["isBorderRed"])):(0,s.Q3)("",!0),(0,s.Lk)("section",null,[(0,s.Lk)("div",{class:(0,o.C4)(["box",{active:a.value}])},[(0,s.Lk)("form",{onSubmit:u[4]||(u[4]=(0,l.D$)((()=>{}),["prevent"]))},[j,(0,s.Lk)("div",P,[(0,s.Lk)("label",{for:"email",class:(0,o.C4)({red:!0===v.name.invalid})},"User name",2),(0,s.bo)((0,s.Lk)("input",{type:"email","onUpdate:modelValue":u[0]||(u[0]=e=>v.name.value=e)},null,512),[[l.Jo,v.name.value]])]),(0,s.Lk)("div",x,[(0,s.Lk)("label",{for:"email",class:(0,o.C4)({red:!0===v.email.invalid})},"Email",2),(0,s.bo)((0,s.Lk)("input",{type:"email","onUpdate:modelValue":u[1]||(u[1]=e=>v.email.value=e)},null,512),[[l.Jo,v.email.value]])]),(0,s.Lk)("div",O,[(0,s.Lk)("label",{for:"pass",class:(0,o.C4)({red:!0===v.password.invalid})},"Create Password",2),(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":u[2]||(u[2]=e=>v.password.value=e)},null,512),[[l.Jo,v.password.value]])]),(0,s.Lk)("div",T,[(0,s.Lk)("label",{for:"pass",class:(0,o.C4)({red:!0===v.confirm.invalid})},"Confirm password",2),(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":u[3]||(u[3]=e=>v.confirm.value=e)},null,512),[[l.Jo,v.confirm.value]])]),(0,s.Lk)("div",F,[A,(0,s.bF)(i,{to:"/login"},{default:(0,s.k6)((()=>[(0,s.eW)("Login")])),_:1})]),(0,s.Lk)("div",{class:"submitButton"},[(0,s.Lk)("button",{type:"button",onClick:k},"Submit!")])],32)],2)])],64)}}};const Q=(0,m.A)(B,[["__scopeId","data-v-0c0a4f8e"]]);var U=Q;const $=e=>((0,s.Qi)("data-v-1361e2be"),e=e(),(0,s.jt)(),e),D=$((()=>(0,s.Lk)("div",{class:"spinner"},[(0,s.Lk)("div",{class:"lds-roller"},[(0,s.Lk)("div"),(0,s.Lk)("div"),(0,s.Lk)("div"),(0,s.Lk)("div"),(0,s.Lk)("div"),(0,s.Lk)("div"),(0,s.Lk)("div"),(0,s.Lk)("div")])],-1))),W=[D];function V(e,a){return(0,s.uX)(),(0,s.CE)("section",null,W)}const q={},J=(0,m.A)(q,[["render",V],["__scopeId","data-v-1361e2be"]]);var G=J;const M=e=>((0,s.Qi)("data-v-02a4d14c"),e=e(),(0,s.jt)(),e),N={class:"mainContent"},Y={class:"restaurantList"},H=["onClick"],z={class:"restaurantImage"},Z=["src","alt"],ee=M((()=>(0,s.Lk)("div",{class:"deliveryStatus"},[(0,s.Lk)("p",null,"Delivery available")],-1))),ae={class:"restaurantDetails"},te={class:"restaurantName"},le={class:"restaurantDescription"};var ne={__name:"RestaurantPage",setup(e){const a=(0,g.Pj)(),t=(0,n.rd)(),l=(0,u.KR)(null);async function r(){const e=await i.get("/restaurants");l.value=e.data.restaurants}async function c(){const e=await i.get("/restaurants/cart");a.dispatch("calculateCounter",e.data.cart)}function v(e){t.push(`/restaurants/${e}`)}return(0,s.sV)((()=>{r(),c()})),(e,a)=>((0,s.uX)(),(0,s.CE)("section",null,[null===l.value?((0,s.uX)(),(0,s.Wv)(G,{key:0})):(0,s.Q3)("",!0),(0,s.Lk)("div",N,[(0,s.Lk)("ul",Y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.value,((e,a)=>((0,s.uX)(),(0,s.CE)("li",{key:a,onClick:a=>v(e.id),class:"card"},[(0,s.Lk)("div",z,[(0,s.Lk)("img",{src:e.bannerImage,alt:e.title},null,8,Z),ee]),(0,s.Lk)("div",ae,[(0,s.Lk)("h2",te,(0,o.v_)(e.title),1),(0,s.Lk)("p",le,(0,o.v_)(e.description),1)])],8,H)))),128))])])]))}};const se=(0,m.A)(ne,[["__scopeId","data-v-02a4d14c"]]);var oe=se;const ue={class:"popUpMain"},ie={class:"content"},re={class:"title"},ce={class:"message"},ve={class:"button"};function de(e,a){return(0,s.uX)(),(0,s.CE)("section",{onClick:a[1]||(a[1]=a=>e.$emit("close-popup"))},[(0,s.Lk)("div",ue,[(0,s.Lk)("div",ie,[(0,s.Lk)("div",re,[(0,s.Lk)("h1",null,[(0,s.RG)(e.$slots,"title",{},void 0,!0)])]),(0,s.Lk)("div",ce,[(0,s.RG)(e.$slots,"message",{},void 0,!0)]),(0,s.Lk)("div",ve,[(0,s.Lk)("button",{onClick:a[0]||(a[0]=a=>e.$emit("close-popup"))},"Okay!")])])])])}const ke={},pe=(0,m.A)(ke,[["render",de],["__scopeId","data-v-d582f4b6"]]);var me=pe;const Le={style:{"border-bottom":"2px solid #66f1fc","font-size":"20px"}},fe={class:"card"},ge=["src"],he={class:"card-content"},Ce=["for","onChange"],be={class:"cart"},ye={class:"price"},_e={class:"counter"},we={class:"button"};var Ie={__name:"MealPopup",props:{meal:Object},emits:["close-popup"],setup(e,{emit:a}){const t=(0,g.Pj)(),n=e,r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.KR)(1),d=(0,u.KR)(parseInt(n.meal.price)),k=(0,u.KR)(null),p=a;function m(){v.value>0&&(v.value++,d.value=parseInt(n.meal.price)*v.value)}function L(){if(v.value>1)v.value--,d.value=parseInt(n.meal.price)*v.value;else{if(1!==v.value)return;d.value=parseInt(n.meal.price)*v.value}}function f(){k.value=!0}function h(){k.value=!1,setTimeout((()=>{p("close-popup")}),100)}async function C(e){const a={order:[{mealId:e,quantity:v.value}]},l=await i.put("/restaurants/cart",a);"ok"===l.status&&(t.dispatch("addToCart",n.meal),r.value="Success!!!",c.value="Item added to cart! ✔️")}return(0,s.sV)((()=>{f()})),(e,a)=>((0,s.uX)(),(0,s.CE)("section",{onClick:h},[r.value?((0,s.uX)(),(0,s.Wv)(me,{key:0},{title:(0,s.k6)((()=>[(0,s.Lk)("h1",Le,(0,o.v_)(r.value),1)])),message:(0,s.k6)((()=>[(0,s.Lk)("h3",null,(0,o.v_)(c.value),1)])),_:1})):(0,s.Q3)("",!0),(0,s.bF)(l.eB,{name:"popup"},{default:(0,s.k6)((()=>[k.value?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"popup-container",onClick:a[1]||(a[1]=(0,l.D$)((()=>{}),["stop"]))},[(0,s.Lk)("div",fe,[(0,s.Lk)("img",{src:n.meal.image,alt:""},null,8,ge),(0,s.Lk)("div",he,[(0,s.Lk)("h1",null,(0,o.v_)(n.meal.title),1),(0,s.Lk)("p",null,(0,o.v_)(n.meal.description),1)]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.meal.additions,((a,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"additions",key:t},[(0,s.Lk)("label",{for:"inpPrice"+t,onChange:t=>e.handleCheckboxChange(a.title)},(0,o.v_)(a.title),41,Ce)])))),128)),(0,s.Lk)("div",be,[(0,s.Lk)("div",ye,[(0,s.Lk)("p",null,(0,o.v_)(d.value)+"rsd",1)]),(0,s.Lk)("div",_e,[(0,s.Lk)("button",{onClick:L},"-"),(0,s.Lk)("p",null,(0,o.v_)(v.value),1),(0,s.Lk)("button",{onClick:m},"+")]),(0,s.Lk)("div",we,[(0,s.Lk)("button",{onClick:a[0]||(a[0]=e=>C(n.meal.id))},"Add to cart!")])])])])):(0,s.Q3)("",!0)])),_:1})]))}};const Ee=(0,m.A)(Ie,[["__scopeId","data-v-5a26d5f4"]]);var Re=Ee;const Ke={key:1},Xe={class:"restaurantImage"},Se=["src"],je={class:"restName"},Pe={class:"listOfMeals"},xe={class:"mealList"},Oe=["onClick"],Te=["src"],Fe={class:"mealDetails"},Ae={class:"mealInfo"},Be={class:"prices"};var Qe={__name:"SingleRest",props:{restId:String},setup(e){const a=e,t=(0,u.KR)([]),l=(0,u.KR)(null),n=(0,u.KR)(null);async function r(){const e=await i.get(`/restaurants/${a.restId}`),n=await i.get(`/restaurants/${a.restId}/meals`);t.value=e.data,l.value=n.data.meals,localStorage.setItem("restID",e.data.id)}function c(e){n.value=e}function v(){n.value=null}return r(),(e,a)=>null===l.value?((0,s.uX)(),(0,s.Wv)(G,{key:0})):((0,s.uX)(),(0,s.CE)("section",Ke,[(0,s.Lk)("div",Xe,[(0,s.Lk)("img",{src:t.value.bannerImage,alt:""},null,8,Se)]),(0,s.Lk)("div",je,[(0,s.Lk)("h1",null,(0,o.v_)(t.value.title),1),(0,s.Lk)("h3",null,(0,o.v_)(t.value.description),1)]),(0,s.Lk)("div",Pe,[(0,s.Lk)("ul",xe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.value,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:"mealItem",onClick:a=>c(e)},[(0,s.Lk)("img",{src:e.image,alt:"Meal Image",class:"mealImage"},null,8,Te),(0,s.Lk)("div",Fe,[(0,s.Lk)("div",Ae,[(0,s.Lk)("h2",null,(0,o.v_)(e.title),1),(0,s.Lk)("p",null,(0,o.v_)(e.description),1),(0,s.Lk)("div",Be,[(0,s.Lk)("p",null,"Cena: "+(0,o.v_)(e.price)+"rsd",1)])])])],8,Oe)))),128))])]),n.value?((0,s.uX)(),(0,s.Wv)(Re,{key:0,meal:n.value,onClosePopup:v},null,8,["meal"])):(0,s.Q3)("",!0)]))}};const Ue=(0,m.A)(Qe,[["__scopeId","data-v-0c13a566"]]);var $e=Ue;async function De(e,a,t){const l=localStorage.getItem("token");if(l)return t();t({name:"Login"})}const We=(0,n.aE)({history:(0,n.LA)(),routes:[{path:"/",component:oe},{path:"/login",component:X,name:"Login"},{path:"/create",component:U},{path:"/restaurants",component:oe,beforeEnter:[De]},{path:"/restaurants/:restId",props:!0,component:$e}]});var Ve=We;const qe=e=>((0,s.Qi)("data-v-3ffa79fb"),e=e(),(0,s.jt)(),e),Je={class:"headerTitle"},Ge={key:0},Me={key:1},Ne={class:"totalCounter"},Ye={class:"cartList"},He=["src"],ze={class:"cartItemDetails"},Ze={class:"deleteMeal"},ea=["onClick"],aa={key:0,class:"finishOrder"},ta=qe((()=>(0,s.Lk)("p",null,"Finish order!",-1))),la=qe((()=>(0,s.Lk)("input",{type:"checkbox"},null,-1))),na=qe((()=>(0,s.Lk)("div",{class:"checkmark"},null,-1))),sa=qe((()=>(0,s.Lk)("svg",{width:"50",height:"50",xmlns:"http://www.w3.org/2000/svg",class:"celebrate"},[(0,s.Lk)("polygon",{points:"0,0 10,10"}),(0,s.Lk)("polygon",{points:"0,25 10,25"}),(0,s.Lk)("polygon",{points:"0,50 10,40"}),(0,s.Lk)("polygon",{points:"50,0 40,10"}),(0,s.Lk)("polygon",{points:"50,25 40,25"}),(0,s.Lk)("polygon",{points:"50,50 40,40"})],-1))),oa=[la,na,sa];var ua={__name:"TheCart",emits:["close-cart"],setup(e,{emit:a}){const t=a,n=(0,g.Pj)(),r=(0,u.KR)(null),c=(0,u.KR)(0),v=(0,u.KR)(!1);async function d(){const e=await i.get("/restaurants/cart/");"ok"===e.status&&(r.value=e.data.cart,n.dispatch("calculateCounter",e.data.cart),c.value=0,r.value.forEach((e=>c.value+=e.singleUnitPrice*e.quantity)))}async function k(e){const a={order:[{mealId:e,quantity:0}]},t=await i.put("/restaurants/cart",a);console.log(t);const l=r.value.find((a=>a.mealId===e));c.value-=l.singleUnitPrice*l.quantity;const n=r.value.findIndex((a=>a.mealId===e));r.value.splice(n,1)}function p(){v.value=!0}function m(){v.value=!1,setTimeout((()=>{t("close-cart")}),300)}async function L(){const e=await i.delete("/restaurants/cart"),a=document.querySelector(".finishOrder p");a.innerText="Order finished!","ok"===e.status&&setTimeout((()=>{n.dispatch("calculateCounter",e.data.cart),c.value=0,r.value=null}),1e3)}return(0,s.sV)((()=>{d(),p()})),(e,a)=>((0,s.uX)(),(0,s.CE)("section",{onClick:m},[(0,s.bF)(l.eB,{name:"fadeInOut"},{default:(0,s.k6)((()=>[v.value?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"mainCart",onClick:a[0]||(a[0]=(0,l.D$)((()=>{}),["stop"]))},[(0,s.Lk)("div",Je,[null===r.value||0===r.value.length?((0,s.uX)(),(0,s.CE)("p",Ge,"Your cart is empty 😊")):((0,s.uX)(),(0,s.CE)("h1",Me,"Cart"))]),(0,s.Lk)("div",Ne,[(0,s.Lk)("h1",null,"Ukupna cena: "+(0,o.v_)(c.value)+" rsd",1)]),(0,s.Lk)("ul",Ye,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.value,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.mealId},[(0,s.Lk)("img",{src:e.image,alt:"",class:"cartItemImage"},null,8,He),(0,s.Lk)("div",ze,[(0,s.Lk)("h3",null,(0,o.v_)(e.title),1),(0,s.Lk)("p",null,(0,o.v_)(e.singleUnitPrice*e.quantity)+" rsd",1),(0,s.Lk)("p",null,"Kolicina: "+(0,o.v_)(e.quantity),1)]),(0,s.Lk)("div",Ze,[(0,s.Lk)("button",{onClick:a=>k(e.mealId)},"X",8,ea)])])))),128))]),r.value?.length?((0,s.uX)(),(0,s.CE)("div",aa,[ta,(0,s.Lk)("label",{class:"container",onClick:L},oa)])):(0,s.Q3)("",!0)])):(0,s.Q3)("",!0)])),_:1})]))}};const ia=(0,m.A)(ua,[["__scopeId","data-v-3ffa79fb"]]);var ra=ia;const ca=e=>((0,s.Qi)("data-v-75010fe3"),e=e(),(0,s.jt)(),e),va={class:"navbar"},da={class:"logo"},ka={class:"links"},pa=ca((()=>(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:""},"Home")],-1))),ma=ca((()=>(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:""},"About")],-1))),La=ca((()=>(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:""},"Service")],-1))),fa={class:"special"},ga={key:0},ha={class:"toggle_btn"},Ca={key:0,class:"dropDown"},ba=ca((()=>(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:""},"Home")],-1))),ya=ca((()=>(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:""},"About")],-1))),_a=ca((()=>(0,s.Lk)("li",null,[(0,s.Lk)("a",{href:""},"Service")],-1))),wa={class:"special"},Ia={key:0};var Ea={__name:"TheHeader",setup(e){const a=(0,g.Pj)(),t=(0,u.KR)(!1),n=(0,u.KR)(!1),r=(0,s.EW)((()=>a.getters.getCartCounter)),c=(0,u.KR)(null);function v(e){e.stopPropagation(),t.value=!t.value}function d(){n.value=!n.value}function k(){n.value=!1}async function p(){const e=await i.get("/restaurants/cart/");c.value=e.data.cart,await a.dispatch("calculateCounter",e.data.cart)}const m=e=>{const a=document.querySelector(".dropDown");a&&!a.contains(e.target)&&(t.value=!1)};return(0,s.sV)((()=>{window.addEventListener("click",m)})),(0,s.hi)((()=>{window.removeEventListener("click",m)})),p(),(e,a)=>{const u=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("main",null,[(0,s.Lk)("header",null,[(0,s.Lk)("div",va,[(0,s.Lk)("div",da,[(0,s.bF)(u,{to:"/restaurants"},{default:(0,s.k6)((()=>[(0,s.eW)("Logo")])),_:1})]),(0,s.Lk)("ul",ka,[pa,ma,La,(0,s.Lk)("li",fa,[(0,s.Lk)("a",{onClick:d},"Cart"),(0,s.eW)(),r.value?.length?((0,s.uX)(),(0,s.CE)("p",ga,(0,o.v_)(r.value.length),1)):(0,s.Q3)("",!0)])]),(0,s.Lk)("div",ha,[(0,s.Lk)("img",{onClick:a[0]||(a[0]=e=>v(e)),width:"50",height:"50",src:"https://img.icons8.com/3d-fluency/188/menu.png",alt:"menu"})])]),(0,s.bF)(l.eB,{name:"drop"},{default:(0,s.k6)((()=>[t.value?((0,s.uX)(),(0,s.CE)("div",Ca,[ba,ya,_a,(0,s.Lk)("li",wa,[(0,s.Lk)("a",{onClick:d},"Cart"),(0,s.eW)(),r.value?.length?((0,s.uX)(),(0,s.CE)("p",Ia,(0,o.v_)(r.value.length),1)):(0,s.Q3)("",!0)])])):(0,s.Q3)("",!0)])),_:1})])]),n.value?((0,s.uX)(),(0,s.Wv)(ra,{key:0,onCloseCart:k})):(0,s.Q3)("",!0)],64)}}};const Ra=(0,m.A)(Ea,[["__scopeId","data-v-75010fe3"]]);var Ka=Ra,Xa={__name:"App",setup(e){const a=(0,n.lq)(),t=["/login","/create"];return(e,l)=>{const n=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[t.includes((0,u.R1)(a).path)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(Ka,{key:0})),(0,s.bF)(n)],64)}}};const Sa=Xa;var ja=Sa;const Pa=(0,g.y$)({state(){return{cartItems:[],loggedUser:!0}},mutations:{calculateCounter(e,a){e.cartItems=a},addToCart(e,a){e.cartItems.push(a)},userLogStatus(e,a){e.loggedUser=a}},getters:{getCartCounter(e){return e.cartItems},getUserStatus(e){return e.loggedUser}},actions:{calculateCounter(e,a){e.commit("calculateCounter",a)},addToCart(e,a){e.commit("addToCart",a)},userLogStatus(e,a){e.commit("userLogStatus",a)}}});var xa=Pa;const Oa=(0,l.Ef)(ja);Oa.use(Ve),Oa.use(xa),Oa.mount("#app")}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var s=a[l]={exports:{}};return e[l].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,s){if(!l){var o=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],s=e[c][2];for(var u=!0,i=0;i<l.length;i++)(!1&s||o>=s)&&Object.keys(t.O).every((function(e){return t.O[e](l[i])}))?l.splice(i--,1):(u=!1,s<o&&(o=s));if(u){e.splice(c--,1);var r=n();void 0!==r&&(a=r)}}return a}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[l,n,s]}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,s,o=l[0],u=l[1],i=l[2],r=0;if(o.some((function(a){return 0!==e[a]}))){for(n in u)t.o(u,n)&&(t.m[n]=u[n]);if(i)var c=i(t)}for(a&&a(l);r<o.length;r++)s=o[r],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},l=self["webpackChunkvue_first_app"]=self["webpackChunkvue_first_app"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(579)}));l=t.O(l)})();
//# sourceMappingURL=app.908260ff.js.map