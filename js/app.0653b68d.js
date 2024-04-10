(function(){"use strict";var e={3071:function(e,a,t){var l=t(3751),n=t(5220),o=(t(4114),t(641)),s=t(33),u=t(953),i={baseLink:"https://api.apiforge.net/v1/api",id:localStorage.getItem("id"),get:async function(e){const a=await fetch(this.baseLink+e,{method:"GET",headers:r()});a.ok||401!==a.status||(localStorage.removeItem("token"),Ve.push("/food_delivery/login"));const t=await a.json();return t},post:async function(e,a){const t=await fetch(this.baseLink+e,{method:"POST",headers:r(),body:JSON.stringify(a)});t.ok||401!==t.status||(localStorage.removeItem("token"),Ve.push("/login"));const l=await t.json();return l},put:async function(e,a){const t=await fetch(this.baseLink+e,{method:"PUT",headers:r(),body:JSON.stringify(a)});t.ok||401!==t.status?401===t.status&&localStorage.removeItem("token"):localStorage.removeItem("token");const l=await t.json();return l},delete:async function(e){const a=await fetch(this.baseLink+e,{method:"DELETE",headers:r()});if(a.ok||401!==a.status){if(401!==a.status){const e=await a.json();return e}localStorage.removeItem("token")}else localStorage.removeItem("token")}};function r(){const e="65fb08b9df7bc89ef3a6f520",a=localStorage.getItem("token");return{"Content-type":"application/json",api_key:e,authorization:`Bearer ${a}`}}const c={class:"popup center"},v={class:"title"},d={class:"desc"},p={class:"btn-dismiss"};var k={__name:"AccountPopup",props:{isBorderRed:Boolean},setup(e){const a=e;return(e,t)=>((0,o.uX)(),(0,o.CE)("main",null,[(0,o.Lk)("div",c,[(0,o.Lk)("div",{class:(0,s.C4)(["icon",{"red-border":a.isBorderRed}])},[(0,o.Lk)("p",null,[(0,o.RG)(e.$slots,"icon")])],2),(0,o.Lk)("div",v,[(0,o.RG)(e.$slots,"titleText")]),(0,o.Lk)("div",d,[(0,o.RG)(e.$slots,"descText")]),(0,o.Lk)("div",p,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=a=>e.$emit("close-popup"))},"Okay!")])])]))}},m=t(6262);const L=(0,m.A)(k,[["__scopeId","data-v-46d74fda"]]);var f=L,g=t(6278);const h=e=>((0,o.Qi)("data-v-7811b08f"),e=e(),(0,o.jt)(),e),y=h((()=>(0,o.Lk)("h3",null,"Login",-1))),b={class:"formBox"},C=h((()=>(0,o.Lk)("label",{for:"email"},"Email",-1))),_={class:"formBox"},I=h((()=>(0,o.Lk)("label",{for:"pass"},"Password",-1))),w={class:"toCreate"},E=h((()=>(0,o.Lk)("p",null,"Dont have an account?",-1)));var K={__name:"LoginPage",setup(e){localStorage.removeItem("token");const a=(0,g.Pj)(),t=(0,n.rd)(),r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.KR)(!1),d=(0,u.KR)(""),p=(0,u.KR)(""),k=(0,u.KR)(""),m=(0,u.KR)(""),L=(0,u.Kh)({email:{value:r,invalid:!1},password:{value:c,invalid:!1}});function h(){let e=!1;return Object.keys(L).forEach((a=>{""===L[a].value?(d.value="❌",p.value="Failed!",k.value="Please,fill all inputs!",m.value=!0,L[a].invalid=!0,e=!0):L[a].invalid=!1})),e}async function K(){if(h())return;v.value=!0;const e=await i.post("/restaurants/users/login",{email:r.value,password:c.value});localStorage.setItem("token",e.data.token),"ok"===e.status?(d.value="✔️",p.value="Odobreno!",k.value="Bicete prebaceni na pocetnu stranicu!",m.value=!1,v.value=!1,setTimeout((()=>{a.state.loggedUser=!0,t.push("/food_delivery/restaurants")}),1500)):(d.value="❌",p.value="Neuspesno!",k.value="Molim vas, pokusajte opet!",m.value=!0,v.value=!1)}function R(){p.value=""}return(e,a)=>{const t=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[p.value?((0,o.uX)(),(0,o.Wv)(f,{key:0,isBorderRed:m.value,onClosePopup:R},{icon:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(d.value),1)])),titleText:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(p.value),1)])),descText:(0,o.k6)((()=>[(0,o.Lk)("h1",null,(0,s.v_)(k.value),1)])),_:1},8,["isBorderRed"])):(0,o.Q3)("",!0),(0,o.Lk)("section",null,[(0,o.Lk)("div",{class:(0,s.C4)(["box",{active:v.value}]),onKeydown:(0,l.jR)(K,["enter"])},[(0,o.Lk)("form",{onSubmit:a[2]||(a[2]=(0,l.D$)((()=>{}),["prevent"]))},[y,(0,o.Lk)("div",b,[C,(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e)},null,512),[[l.Jo,r.value]])]),(0,o.Lk)("div",_,[I,(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e)},null,512),[[l.Jo,c.value]])]),(0,o.Lk)("div",w,[E,(0,o.bF)(t,{to:"/create"},{default:(0,o.k6)((()=>[(0,o.eW)("Create")])),_:1})]),(0,o.Lk)("div",{class:"submitButton"},[(0,o.Lk)("button",{type:"button",onClick:K},"Submit!")])],32)],34)])],64)}}};const R=(0,m.A)(K,[["__scopeId","data-v-7811b08f"]]);var j=R;const X=e=>((0,o.Qi)("data-v-7050115d"),e=e(),(0,o.jt)(),e),S=X((()=>(0,o.Lk)("h3",null,"Create accout",-1))),O={class:"formBox"},P={class:"formBox"},x={class:"formBox"},T={class:"formBox"},B={class:"toCreate"},U=X((()=>(0,o.Lk)("p",null,"Already have an account?",-1)));var Q={__name:"CreateAccount",setup(e){const a=(0,u.KR)(!1),t=(0,u.KR)(""),n=(0,u.KR)(""),r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.Kh)({name:{value:"",invalid:!1},email:{value:"",invalid:!1},password:{value:"",invalid:!1},confirm:{value:"",invalid:!1}});function d(){Object.keys(v).forEach((e=>{""===v[e].value?(n.value="Neuspesno!",t.value="❌",c.value=!0,r.value="Popunite sva polja! Takodje, sifre moraju da budu iste!",v[e].invalid=!0):v[e].invalid=!1,"email"!==e||v.email.value.includes("@")||(n.value="Neuspesno!",t.value="❌",c.value=!0,r.value="Email adresa mora sadrsati @ simbol!",v.email.invalid=!0)})),v.password.value!==v.confirm.value&&(n.value="Neuspesno!",t.value="❌",c.value=!0,r.value="Popunite sva polja! Takodje, sifre moraju da budu iste!",v.password.invalid=!0,v.confirm.invalid=!0)}async function p(){d();let e=!0;Object.values(v).forEach((a=>{a.invalid&&(e=!1)})),e&&(a.value=!0,Object.values(v).some((async e=>{if(!e.invalid){const e=await i.post("/restaurants/users",{username:v.name.value,email:v.email.value,password:v.password.value});"ok"===e.status?(t.value="✔️",c.value=!1,n.value="Odobreno!!",r.value="Sada mozete da se prijavite na novi profil!",localStorage.setItem("id",e.data.user.id),a.value=!1):(t.value="❌",n.value="Neuspesno!",r.value="Pokusajte ponovo!",c.value=!0,a.value=!1)}})))}function k(){n.value=""}return(e,u)=>{const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[n.value?((0,o.uX)(),(0,o.Wv)(f,{key:0,isBorderRed:c.value,onClosePopup:k},{icon:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(t.value),1)])),titleText:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(n.value),1)])),descText:(0,o.k6)((()=>[(0,o.Lk)("h1",null,(0,s.v_)(r.value),1)])),_:1},8,["isBorderRed"])):(0,o.Q3)("",!0),(0,o.Lk)("section",null,[(0,o.Lk)("div",{class:(0,s.C4)(["box",{active:a.value}])},[(0,o.Lk)("form",{onSubmit:u[4]||(u[4]=(0,l.D$)((()=>{}),["prevent"]))},[S,(0,o.Lk)("div",O,[(0,o.Lk)("label",{for:"email",class:(0,s.C4)({red:!0===v.name.invalid})},"User name",2),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":u[0]||(u[0]=e=>v.name.value=e)},null,512),[[l.Jo,v.name.value]])]),(0,o.Lk)("div",P,[(0,o.Lk)("label",{for:"email",class:(0,s.C4)({red:!0===v.email.invalid})},"Email",2),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":u[1]||(u[1]=e=>v.email.value=e)},null,512),[[l.Jo,v.email.value]])]),(0,o.Lk)("div",x,[(0,o.Lk)("label",{for:"pass",class:(0,s.C4)({red:!0===v.password.invalid})},"Create Password",2),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":u[2]||(u[2]=e=>v.password.value=e)},null,512),[[l.Jo,v.password.value]])]),(0,o.Lk)("div",T,[(0,o.Lk)("label",{for:"pass",class:(0,s.C4)({red:!0===v.confirm.invalid})},"Confirm password",2),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":u[3]||(u[3]=e=>v.confirm.value=e)},null,512),[[l.Jo,v.confirm.value]])]),(0,o.Lk)("div",B,[U,(0,o.bF)(i,{to:"/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Login")])),_:1})]),(0,o.Lk)("div",{class:"submitButton"},[(0,o.Lk)("button",{type:"button",onClick:p},"Submit!")])],32)],2)])],64)}}};const F=(0,m.A)(Q,[["__scopeId","data-v-7050115d"]]);var $=F;const A=e=>((0,o.Qi)("data-v-1361e2be"),e=e(),(0,o.jt)(),e),D=A((()=>(0,o.Lk)("div",{class:"spinner"},[(0,o.Lk)("div",{class:"lds-roller"},[(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div")])],-1))),W=[D];function q(e,a){return(0,o.uX)(),(0,o.CE)("section",null,W)}const V={},J=(0,m.A)(V,[["render",q],["__scopeId","data-v-1361e2be"]]);var N=J;const G=e=>((0,o.Qi)("data-v-0b88bc9c"),e=e(),(0,o.jt)(),e),M={class:"mainContent"},z={class:"restaurantList"},H=["onClick"],Z={class:"restaurantImage"},Y=["src","alt"],ee=G((()=>(0,o.Lk)("div",{class:"deliveryStatus"},[(0,o.Lk)("p",null,"Delivery available")],-1))),ae={class:"restaurantDetails"},te={class:"restaurantName"},le={class:"restaurantDescription"};var ne={__name:"RestaurantPage",setup(e){const a=(0,g.Pj)(),t=(0,n.rd)(),l=(0,u.KR)(null);async function r(){const e=await i.get("/restaurants");l.value=e.data.restaurants}async function c(){const e=await i.get("/restaurants/cart");a.dispatch("calculateCounter",e.data.cart)}function v(e){t.push(`/food_delivery/restaurants/${e}`)}return(0,o.sV)((()=>{r(),c()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",null,[null===l.value?((0,o.uX)(),(0,o.Wv)(N,{key:0})):(0,o.Q3)("",!0),(0,o.Lk)("div",M,[(0,o.Lk)("ul",z,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.value,((e,a)=>((0,o.uX)(),(0,o.CE)("li",{key:a,onClick:a=>v(e.id),class:"card"},[(0,o.Lk)("div",Z,[(0,o.Lk)("img",{src:e.bannerImage,alt:e.title},null,8,Y),ee]),(0,o.Lk)("div",ae,[(0,o.Lk)("h2",te,(0,s.v_)(e.title),1),(0,o.Lk)("p",le,(0,s.v_)(e.description),1)])],8,H)))),128))])])]))}};const oe=(0,m.A)(ne,[["__scopeId","data-v-0b88bc9c"]]);var se=oe;const ue={class:"popUpMain"},ie={class:"content"},re={class:"title"},ce={class:"message"},ve={class:"button"};function de(e,a){return(0,o.uX)(),(0,o.CE)("section",{onClick:a[1]||(a[1]=a=>e.$emit("close-popup"))},[(0,o.Lk)("div",ue,[(0,o.Lk)("div",ie,[(0,o.Lk)("div",re,[(0,o.Lk)("h1",null,[(0,o.RG)(e.$slots,"title",{},void 0,!0)])]),(0,o.Lk)("div",ce,[(0,o.RG)(e.$slots,"message",{},void 0,!0)]),(0,o.Lk)("div",ve,[(0,o.Lk)("button",{onClick:a[0]||(a[0]=a=>e.$emit("close-popup"))},"Okay!")])])])])}const pe={},ke=(0,m.A)(pe,[["render",de],["__scopeId","data-v-7998a685"]]);var me=ke;const Le={style:{"border-bottom":"2px solid #66f1fc","font-size":"20px"}},fe={class:"card"},ge={class:"cardImage"},he=["src"],ye={class:"content"},be={class:"card-content"},Ce=["for","onChange"],_e={class:"cart"},Ie={class:"counter"},we={class:"button"};var Ee={__name:"MealPopup",props:{meal:Object},emits:["close-popup"],setup(e,{emit:a}){const t=(0,g.Pj)(),n=e,r=(0,u.KR)(""),c=(0,u.KR)(""),v=(0,u.KR)(1),d=(0,u.KR)(parseInt(n.meal.price)),p=(0,u.KR)(null),k=a;function m(){v.value>0&&(v.value++,d.value=parseInt(n.meal.price)*v.value)}function L(){if(v.value>1)v.value--,d.value=parseInt(n.meal.price)*v.value;else{if(1!==v.value)return;d.value=parseInt(n.meal.price)*v.value}}function f(){p.value=!0}function h(){p.value=!1,setTimeout((()=>{k("close-popup")}),100)}async function y(e){const a=await b(e),l={order:[{mealId:e,quantity:v.value+a}]},o=await i.put("/restaurants/cart",l);"ok"===o.status&&(t.dispatch("addToCart",n.meal),r.value="Bravo!",c.value="Jelo je poslato u korpu! ")}async function b(e){const a=await i.get("/restaurants/cart"),t=await a.data.cart.find((a=>a.mealId===e));return t?t.quantity:0}function C(e){y(e),f()}return(0,o.sV)((()=>{f()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",{onClick:h},[r.value?((0,o.uX)(),(0,o.Wv)(me,{key:0},{title:(0,o.k6)((()=>[(0,o.Lk)("h1",Le,(0,s.v_)(r.value),1)])),message:(0,o.k6)((()=>[(0,o.Lk)("h3",null,(0,s.v_)(c.value),1)])),_:1})):(0,o.Q3)("",!0),(0,o.bF)(l.eB,{name:"popup"},{default:(0,o.k6)((()=>[p.value?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"popup-container",onClick:a[1]||(a[1]=(0,l.D$)((()=>{}),["stop"]))},[(0,o.Lk)("div",fe,[(0,o.Lk)("div",ge,[(0,o.Lk)("img",{src:n.meal.image,alt:""},null,8,he),(0,o.Lk)("button",{onClick:h},">")]),(0,o.Lk)("div",ye,[(0,o.Lk)("div",be,[(0,o.Lk)("h1",null,(0,s.v_)(n.meal.title),1),(0,o.Lk)("h3",null,(0,s.v_)(n.meal.price)+",00 rsd",1)]),(0,o.Lk)("p",null,(0,s.v_)(n.meal.description),1),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.meal.additions,((a,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"additions",key:t},[(0,o.Lk)("label",{for:"inpPrice"+t,onChange:t=>e.handleCheckboxChange(a.title)},(0,s.v_)(a.title),41,Ce)])))),128)),(0,o.Lk)("div",_e,[(0,o.Lk)("div",Ie,[(0,o.Lk)("button",{onClick:L},"-"),(0,o.Lk)("p",null,(0,s.v_)(v.value),1),(0,o.Lk)("button",{onClick:m},"+")]),(0,o.Lk)("div",we,[(0,o.Lk)("button",{onClick:a[0]||(a[0]=e=>C(n.meal.id))},"Dodaj u korpu! "+(0,s.v_)(d.value)+" rsd",1)])])])])])):(0,o.Q3)("",!0)])),_:1})]))}};const Ke=(0,m.A)(Ee,[["__scopeId","data-v-11ffed6f"]]);var Re=Ke;const je={key:1},Xe={class:"restaurantImage"},Se=["src"],Oe={class:"restName"},Pe={class:"listOfMeals"},xe={class:"mealList"},Te=["onClick"],Be=["src"],Ue={class:"mealDetails"},Qe={class:"mealInfo"},Fe={class:"prices"};var $e={__name:"SingleRest",props:{restId:String},setup(e){const a=e;a&&localStorage.setItem("restaurantId",a.restId);const t=(0,u.KR)([]),l=(0,u.KR)(null),n=(0,u.KR)(null);async function r(){const e=localStorage.getItem("restaurantId"),a=await i.get(`/restaurants/${e}`),n=await i.get(`/restaurants/${e}/meals`);t.value=a.data,l.value=n.data.meals,localStorage.setItem("restID",a.data.id)}function c(e){n.value=e}function v(){n.value=null}return r(),(e,a)=>null===l.value?((0,o.uX)(),(0,o.Wv)(N,{key:0})):((0,o.uX)(),(0,o.CE)("section",je,[(0,o.Lk)("div",Xe,[(0,o.Lk)("img",{src:t.value.bannerImage,alt:""},null,8,Se)]),(0,o.Lk)("div",Oe,[(0,o.Lk)("h1",null,(0,s.v_)(t.value.title),1),(0,o.Lk)("h3",null,(0,s.v_)(t.value.description),1)]),(0,o.Lk)("div",Pe,[(0,o.Lk)("ul",xe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.value,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id,class:"mealItem",onClick:a=>c(e)},[(0,o.Lk)("img",{src:e.image,alt:"Meal Image",class:"mealImage"},null,8,Be),(0,o.Lk)("div",Ue,[(0,o.Lk)("div",Qe,[(0,o.Lk)("h2",null,(0,s.v_)(e.title),1),(0,o.Lk)("p",null,(0,s.v_)(e.description),1),(0,o.Lk)("div",Fe,[(0,o.Lk)("p",null,"Cena: "+(0,s.v_)(e.price)+"rsd",1)])])])],8,Te)))),128))])]),n.value?((0,o.uX)(),(0,o.Wv)(Re,{key:0,meal:n.value,onClosePopup:v},null,8,["meal"])):(0,o.Q3)("",!0)]))}};const Ae=(0,m.A)($e,[["__scopeId","data-v-351129ea"]]);var De=Ae;async function We(e,a,t){const l=localStorage.getItem("token");if(l)return t();t({name:"Login"})}const qe=(0,n.aE)({history:(0,n.LA)(),routes:[{path:"/food_delivery/",component:se},{path:"/food_delivery/login",component:j,name:"Login"},{path:"/food_delivery/create",component:$},{path:"/food_delivery/restaurants",component:se,beforeEnter:[We]},{path:"/food_delivery/restaurants/:restId",props:!0,component:De},{path:"/food_delivery/:notFound(.*)",component:j}]});var Ve=qe;const Je=e=>((0,o.Qi)("data-v-5935e9f1"),e=e(),(0,o.jt)(),e),Ne={class:"headerTitle"},Ge={key:0},Me={key:1},ze={class:"totalCounter"},He={class:"cartList"},Ze=["src"],Ye={class:"cartItemDetails"},ea={class:"deleteMeal"},aa=["onClick"],ta={key:0,class:"finishOrder"},la=Je((()=>(0,o.Lk)("p",null,"Zavrsi kupovinu!",-1))),na=Je((()=>(0,o.Lk)("input",{type:"checkbox"},null,-1))),oa=Je((()=>(0,o.Lk)("div",{class:"checkmark"},null,-1))),sa=Je((()=>(0,o.Lk)("svg",{width:"50",height:"50",xmlns:"http://www.w3.org/2000/svg",class:"celebrate"},[(0,o.Lk)("polygon",{points:"0,0 10,10"}),(0,o.Lk)("polygon",{points:"0,25 10,25"}),(0,o.Lk)("polygon",{points:"0,50 10,40"}),(0,o.Lk)("polygon",{points:"50,0 40,10"}),(0,o.Lk)("polygon",{points:"50,25 40,25"}),(0,o.Lk)("polygon",{points:"50,50 40,40"})],-1))),ua=[na,oa,sa];var ia={__name:"TheCart",emits:["close-cart"],setup(e,{emit:a}){const t=a,n=(0,g.Pj)(),r=(0,u.KR)(null),c=(0,u.KR)(0),v=(0,u.KR)(!1);async function d(){const e=await i.get("/restaurants/cart");"ok"===e.status&&(r.value=e.data.cart,n.dispatch("calculateCounter",e.data.cart),c.value=0,r.value.forEach((e=>c.value+=e.singleUnitPrice*e.quantity)))}async function p(e){const a={order:[{mealId:e,quantity:0}]},t=(await i.put("/restaurants/cart",a),r.value.find((a=>a.mealId===e)));c.value-=t.singleUnitPrice*t.quantity;const l=r.value.findIndex((a=>a.mealId===e));r.value.splice(l,1)}function k(){v.value=!0}function m(){v.value=!1,setTimeout((()=>{t("close-cart")}),300)}async function L(){const e=await i.delete("/restaurants/cart"),a=document.querySelector(".finishOrder p");a.innerText="Uspesno!","ok"===e.status&&setTimeout((()=>{n.dispatch("calculateCounter",e.data.cart),c.value=0,r.value=null}),1e3)}return(0,o.sV)((()=>{d(),k()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",{onClick:m},[(0,o.bF)(l.eB,{name:"fadeInOut"},{default:(0,o.k6)((()=>[v.value?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"mainCart",onClick:a[0]||(a[0]=(0,l.D$)((()=>{}),["stop"]))},[(0,o.Lk)("div",Ne,[null===r.value||0===r.value.length?((0,o.uX)(),(0,o.CE)("p",Ge,"Korpa je prazna 😊")):((0,o.uX)(),(0,o.CE)("h1",Me,"Korpa"))]),(0,o.Lk)("div",ze,[(0,o.Lk)("h1",null,"Ukupna cena: "+(0,s.v_)(c.value)+" rsd",1)]),(0,o.Lk)("ul",He,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.value,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.mealId},[(0,o.Lk)("img",{src:e.image,alt:"",class:"cartItemImage"},null,8,Ze),(0,o.Lk)("div",Ye,[(0,o.Lk)("h3",null,(0,s.v_)(e.title),1),(0,o.Lk)("p",null,(0,s.v_)(e.singleUnitPrice*e.quantity)+" rsd",1),(0,o.Lk)("p",null,"Kolicina: "+(0,s.v_)(e.quantity),1)]),(0,o.Lk)("div",ea,[(0,o.Lk)("button",{onClick:a=>p(e.mealId)},"X",8,aa)])])))),128))]),r.value?.length?((0,o.uX)(),(0,o.CE)("div",ta,[la,(0,o.Lk)("label",{class:"container",onClick:L},ua)])):(0,o.Q3)("",!0)])):(0,o.Q3)("",!0)])),_:1})]))}};const ra=(0,m.A)(ia,[["__scopeId","data-v-5935e9f1"]]);var ca=ra;const va=e=>((0,o.Qi)("data-v-cf79150a"),e=e(),(0,o.jt)(),e),da={class:"navbar"},pa={class:"logo"},ka={class:"links"},ma=va((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"Pocetna")],-1))),La=va((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"O nama")],-1))),fa=va((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"Usluge")],-1))),ga={class:"special"},ha={key:0},ya={class:"toggle_btn"},ba={key:0,class:"dropDown"},Ca=va((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"Pocetna")],-1))),_a=va((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"O nama")],-1))),Ia=va((()=>(0,o.Lk)("li",null,[(0,o.Lk)("a",null,"Usluge")],-1))),wa={class:"special"},Ea={key:0};var Ka={__name:"TheHeader",setup(e){const a=(0,g.Pj)(),t=(0,u.KR)(!1),n=(0,u.KR)(!1),r=(0,o.EW)((()=>a.getters.getCartCounter)),c=(0,u.KR)(null);function v(e){e.stopPropagation(),t.value=!t.value}function d(){n.value=!n.value}function p(){n.value=!1}async function k(){const e=await i.get("/restaurants/cart/");c.value=e.data.cart,await a.dispatch("calculateCounter",e.data.cart)}const m=e=>{const a=document.querySelector(".dropDown");a&&!a.contains(e.target)&&(t.value=!1)};return(0,o.sV)((()=>{window.addEventListener("click",m)})),(0,o.hi)((()=>{window.removeEventListener("click",m)})),k(),(e,a)=>{const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("main",null,[(0,o.Lk)("header",null,[(0,o.Lk)("div",da,[(0,o.Lk)("div",pa,[(0,o.bF)(u,{to:"/food_delivery/"},{default:(0,o.k6)((()=>[(0,o.eW)("Logo")])),_:1})]),(0,o.Lk)("ul",ka,[ma,La,fa,(0,o.Lk)("li",ga,[(0,o.Lk)("a",{onClick:d},"Korpa"),(0,o.eW)(),r.value?.length?((0,o.uX)(),(0,o.CE)("p",ha,(0,s.v_)(r.value.length),1)):(0,o.Q3)("",!0)])]),(0,o.Lk)("div",ya,[(0,o.Lk)("img",{onClick:a[0]||(a[0]=e=>v(e)),width:"50",height:"50",src:"https://img.icons8.com/3d-fluency/188/menu.png",alt:"menu"})])]),(0,o.bF)(l.eB,{name:"drop"},{default:(0,o.k6)((()=>[t.value?((0,o.uX)(),(0,o.CE)("div",ba,[Ca,_a,Ia,(0,o.Lk)("li",wa,[(0,o.Lk)("a",{onClick:d},"Korpa"),(0,o.eW)(),r.value?.length?((0,o.uX)(),(0,o.CE)("p",Ea,(0,s.v_)(r.value.length),1)):(0,o.Q3)("",!0)])])):(0,o.Q3)("",!0)])),_:1})])]),n.value?((0,o.uX)(),(0,o.Wv)(ca,{key:0,onCloseCart:p})):(0,o.Q3)("",!0)],64)}}};const Ra=(0,m.A)(Ka,[["__scopeId","data-v-cf79150a"]]);var ja=Ra,Xa={__name:"App",setup(e){const a=(0,n.lq)(),t=["/login","/create"];return(e,l)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t.includes((0,u.R1)(a).path)?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(ja,{key:0})),(0,o.bF)(n)],64)}}};const Sa=Xa;var Oa=Sa;const Pa=(0,g.y$)({state(){return{cartItems:[],loggedUser:!0}},mutations:{calculateCounter(e,a){e.cartItems=a},addToCart(e,a){e.cartItems.push(a)},userLogStatus(e,a){e.loggedUser=a}},getters:{getCartCounter(e){return e.cartItems},getUserStatus(e){return e.loggedUser}},actions:{calculateCounter(e,a){e.commit("calculateCounter",a)},addToCart(e,a){e.commit("addToCart",a)},userLogStatus(e,a){e.commit("userLogStatus",a)}}});var xa=Pa;const Ta=(0,l.Ef)(Oa);Ta.use(Ve),Ta.use(xa),Ta.mount("#app")}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var o=a[l]={exports:{}};return e[l].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,o){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],o=e[c][2];for(var u=!0,i=0;i<l.length;i++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[i])}))?l.splice(i--,1):(u=!1,o<s&&(s=o));if(u){e.splice(c--,1);var r=n();void 0!==r&&(a=r)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,n,o]}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,o,s=l[0],u=l[1],i=l[2],r=0;if(s.some((function(a){return 0!==e[a]}))){for(n in u)t.o(u,n)&&(t.m[n]=u[n]);if(i)var c=i(t)}for(a&&a(l);r<s.length;r++)o=s[r],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},l=self["webpackChunkvue_first_app"]=self["webpackChunkvue_first_app"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(3071)}));l=t.O(l)})();
//# sourceMappingURL=app.0653b68d.js.map