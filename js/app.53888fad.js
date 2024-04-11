(function(){"use strict";var e={8422:function(e,a,t){var l=t(3751),n=t(5220),o=(t(4114),t(641)),s=t(33),i=t(953),u={baseLink:"https://api.apiforge.net/v1/api",id:localStorage.getItem("id"),get:async function(e){const a=await fetch(this.baseLink+e,{method:"GET",headers:r()});a.ok||401!==a.status||(localStorage.removeItem("token"),sa.push("/food_delivery/login"));const t=await a.json();return t},post:async function(e,a){const t=await fetch(this.baseLink+e,{method:"POST",headers:r(),body:JSON.stringify(a)});t.ok||401!==t.status||(localStorage.removeItem("token"),sa.push("/food_delivery/login"));const l=await t.json();return l},put:async function(e,a){const t=await fetch(this.baseLink+e,{method:"PUT",headers:r(),body:JSON.stringify(a)});t.ok||401!==t.status?401===t.status&&localStorage.removeItem("token"):localStorage.removeItem("token");const l=await t.json();return l},delete:async function(e){const a=await fetch(this.baseLink+e,{method:"DELETE",headers:r()});if(a.ok||401!==a.status){if(401!==a.status){const e=await a.json();return e}localStorage.removeItem("token")}else localStorage.removeItem("token")}};function r(){const e="65fb08b9df7bc89ef3a6f520",a=localStorage.getItem("token");return{"Content-type":"application/json",api_key:e,authorization:`Bearer ${a}`}}const c={class:"popup center"},d={class:"title"},v={class:"desc"},k={class:"btn-dismiss"};var p={__name:"AccountPopup",props:{isBorderRed:Boolean},setup(e){const a=e;return(e,t)=>((0,o.uX)(),(0,o.CE)("main",null,[(0,o.Lk)("div",c,[(0,o.Lk)("div",{class:(0,s.C4)(["icon",{"red-border":a.isBorderRed}])},[(0,o.Lk)("p",null,[(0,o.RG)(e.$slots,"icon")])],2),(0,o.Lk)("div",d,[(0,o.RG)(e.$slots,"titleText")]),(0,o.Lk)("div",v,[(0,o.RG)(e.$slots,"descText")]),(0,o.Lk)("div",k,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=a=>e.$emit("close-popup"))},"Okay!")])])]))}},m=t(6262);const f=(0,m.A)(p,[["__scopeId","data-v-46d74fda"]]);var L=f,g=t(6278);const b=e=>((0,o.Qi)("data-v-6534ed8d"),e=e(),(0,o.jt)(),e),h={class:"checkMain"},_=b((()=>(0,o.Lk)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2"},[(0,o.Lk)("circle",{class:"path circle",fill:"none",stroke:"#66fcf1","stroke-width":"6","stroke-miterlimit":"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,o.Lk)("polyline",{class:"path check",fill:"none",stroke:"#66fcf1","stroke-width":"6","stroke-linecap":"round","stroke-miterlimit":"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})],-1))),y=b((()=>(0,o.Lk)("p",{class:"success"},"Uspesno!",-1))),C=[_,y];function I(e,a){return(0,o.uX)(),(0,o.CE)("div",h,C)}const w={},j=(0,m.A)(w,[["render",I],["__scopeId","data-v-6534ed8d"]]);var E=j;const K=e=>((0,o.Qi)("data-v-0027e4ee"),e=e(),(0,o.jt)(),e),R=K((()=>(0,o.Lk)("h3",null,"Login",-1))),X={class:"formBox"},S=K((()=>(0,o.Lk)("label",{for:"email"},"Email",-1))),O={class:"formBox"},P=K((()=>(0,o.Lk)("label",{for:"pass"},"Password",-1))),x={class:"toCreate"},F=K((()=>(0,o.Lk)("p",null,"Dont have an account?",-1)));var T={__name:"LoginPage",setup(e){localStorage.removeItem("token");const a=(0,g.Pj)(),t=(0,n.rd)(),r=(0,i.KR)(""),c=(0,i.KR)(""),d=(0,i.KR)(!1),v=(0,i.KR)(""),k=(0,i.KR)(""),p=(0,i.KR)(""),m=(0,i.KR)(""),f=(0,i.KR)(null),b=(0,i.Kh)({email:{value:r,invalid:!1},password:{value:c,invalid:!1}});function h(){let e=!1;return Object.keys(b).forEach((a=>{""===b[a].value?(v.value="❌",k.value="Neuspesno!",m.value=!0,b[a].invalid=!0,e=!0):b[a].invalid=!1})),e}async function _(){if(h())return;d.value=!0;const e=await u.post("/restaurants/users/login",{email:r.value,password:c.value});localStorage.setItem("token",e.data.token),"ok"===e.status?(f.value=!0,a.state.loggedUser=!0,setTimeout((()=>{t.push("/food_delivery/restaurants")}),1500)):(v.value="❌",k.value="Neuspesno!",m.value=!0,d.value=!1)}function y(){k.value=""}return(e,a)=>{const t=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[k.value?((0,o.uX)(),(0,o.Wv)(L,{key:0,isBorderRed:m.value,onClosePopup:y},{icon:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(v.value),1)])),titleText:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(k.value),1)])),descText:(0,o.k6)((()=>[(0,o.Lk)("h1",null,(0,s.v_)(p.value),1)])),_:1},8,["isBorderRed"])):(0,o.Q3)("",!0),(0,o.Lk)("section",null,[f.value?((0,o.uX)(),(0,o.Wv)(E,{key:0})):((0,o.uX)(),(0,o.CE)("div",{key:1,class:(0,s.C4)(["box",{active:d.value}]),onKeydown:(0,l.jR)(_,["enter"])},[(0,o.Lk)("form",{onSubmit:a[2]||(a[2]=(0,l.D$)((()=>{}),["prevent"]))},[R,(0,o.Lk)("div",X,[S,(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e)},null,512),[[l.Jo,r.value]])]),(0,o.Lk)("div",O,[P,(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e)},null,512),[[l.Jo,c.value]])]),(0,o.Lk)("div",x,[F,(0,o.bF)(t,{to:"/food_delivery/create"},{default:(0,o.k6)((()=>[(0,o.eW)("Create")])),_:1})]),(0,o.Lk)("div",{class:"submitButton"},[(0,o.Lk)("button",{type:"button",onClick:_},"Submit!")])],32)],34))])],64)}}};const B=(0,m.A)(T,[["__scopeId","data-v-0027e4ee"]]);var W=B;const A=e=>((0,o.Qi)("data-v-68a67f8f"),e=e(),(0,o.jt)(),e),U=A((()=>(0,o.Lk)("h3",null,"Create accout",-1))),Q={class:"formBox"},$={class:"formBox"},D={class:"formBox"},z={class:"formBox"},N={class:"toCreate"},J=A((()=>(0,o.Lk)("p",null,"Already have an account?",-1)));var V={__name:"CreateAccount",setup(e){const a=(0,i.KR)(!1),t=(0,i.KR)(""),n=(0,i.KR)(""),r=(0,i.KR)(""),c=(0,i.KR)(""),d=(0,i.Kh)({name:{value:"",invalid:!1},email:{value:"",invalid:!1},password:{value:"",invalid:!1},confirm:{value:"",invalid:!1}});function v(){Object.keys(d).forEach((e=>{""===d[e].value?(n.value="Neuspesno!",t.value="❌",c.value=!0,d[e].invalid=!0):d[e].invalid=!1,"email"!==e||d.email.value.includes("@")&&d.email.value.includes(".com")||(n.value="Neuspesno!",t.value="❌",c.value=!0,d.email.invalid=!0),d[e].value.length<5&&(n.value="Neuspesno!",t.value="❌",c.value=!0,d[e].invalid=!0)})),d.password.value!==d.confirm.value&&(n.value="Neuspesno!",t.value="❌",c.value=!0,d.password.invalid=!0,d.confirm.invalid=!0)}async function k(){v();let e=!0;Object.values(d).forEach((a=>{a.invalid&&(e=!1)})),e&&(a.value=!0,Object.values(d).some((async e=>{if(!e.invalid){const e=await u.post("/restaurants/users",{username:d.name.value,email:d.email.value,password:d.password.value});"ok"===e.status?(t.value="✔️",c.value=!1,n.value="Odobreno!",localStorage.setItem("id",e.data.user.id),a.value=!1):(t.value="❌",n.value="Neuspesno!",c.value=!0,a.value=!1)}})))}function p(){n.value=""}return(e,i)=>{const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[n.value?((0,o.uX)(),(0,o.Wv)(L,{key:0,isBorderRed:c.value,onClosePopup:p},{icon:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(t.value),1)])),titleText:(0,o.k6)((()=>[(0,o.Lk)("p",null,(0,s.v_)(n.value),1)])),descText:(0,o.k6)((()=>[(0,o.Lk)("h1",null,(0,s.v_)(r.value),1)])),_:1},8,["isBorderRed"])):(0,o.Q3)("",!0),(0,o.Lk)("section",null,[(0,o.Lk)("div",{class:(0,s.C4)(["box",{active:a.value}])},[(0,o.Lk)("form",{onSubmit:i[4]||(i[4]=(0,l.D$)((()=>{}),["prevent"]))},[U,(0,o.Lk)("div",Q,[(0,o.Lk)("label",{for:"email",class:(0,s.C4)({red:!0===d.name.invalid})},"User name",2),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":i[0]||(i[0]=e=>d.name.value=e)},null,512),[[l.Jo,d.name.value]])]),(0,o.Lk)("div",$,[(0,o.Lk)("label",{for:"email",class:(0,s.C4)({red:!0===d.email.invalid})},"Email",2),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":i[1]||(i[1]=e=>d.email.value=e)},null,512),[[l.Jo,d.email.value]])]),(0,o.Lk)("div",D,[(0,o.Lk)("label",{for:"pass",class:(0,s.C4)({red:!0===d.password.invalid})},"Create Password",2),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":i[2]||(i[2]=e=>d.password.value=e)},null,512),[[l.Jo,d.password.value]])]),(0,o.Lk)("div",z,[(0,o.Lk)("label",{for:"pass",class:(0,s.C4)({red:!0===d.confirm.invalid})},"Confirm password",2),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":i[3]||(i[3]=e=>d.confirm.value=e)},null,512),[[l.Jo,d.confirm.value]])]),(0,o.Lk)("div",N,[J,(0,o.bF)(u,{to:"/food_delivery/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Login")])),_:1})]),(0,o.Lk)("div",{class:"submitButton"},[(0,o.Lk)("button",{type:"button",onClick:k},"Submit!")])],32)],2)])],64)}}};const q=(0,m.A)(V,[["__scopeId","data-v-68a67f8f"]]);var M=q;const G=e=>((0,o.Qi)("data-v-1361e2be"),e=e(),(0,o.jt)(),e),Z=G((()=>(0,o.Lk)("div",{class:"spinner"},[(0,o.Lk)("div",{class:"lds-roller"},[(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div")])],-1))),H=[Z];function Y(e,a){return(0,o.uX)(),(0,o.CE)("section",null,H)}const ee={},ae=(0,m.A)(ee,[["render",Y],["__scopeId","data-v-1361e2be"]]);var te=ae;const le=e=>((0,o.Qi)("data-v-0b88bc9c"),e=e(),(0,o.jt)(),e),ne={class:"mainContent"},oe={class:"restaurantList"},se=["onClick"],ie={class:"restaurantImage"},ue=["src","alt"],re=le((()=>(0,o.Lk)("div",{class:"deliveryStatus"},[(0,o.Lk)("p",null,"Delivery available")],-1))),ce={class:"restaurantDetails"},de={class:"restaurantName"},ve={class:"restaurantDescription"};var ke={__name:"RestaurantPage",setup(e){const a=(0,g.Pj)(),t=(0,n.rd)(),l=(0,i.KR)(null);async function r(){const e=await u.get("/restaurants");l.value=e.data.restaurants}async function c(){const e=await u.get("/restaurants/cart");a.dispatch("calculateCounter",e.data.cart)}function d(e){t.push(`/food_delivery/restaurants/${e}`)}return(0,o.sV)((()=>{r(),c()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",null,[null===l.value?((0,o.uX)(),(0,o.Wv)(te,{key:0})):(0,o.Q3)("",!0),(0,o.Lk)("div",ne,[(0,o.Lk)("ul",oe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.value,((e,a)=>((0,o.uX)(),(0,o.CE)("li",{key:a,onClick:a=>d(e.id),class:"card"},[(0,o.Lk)("div",ie,[(0,o.Lk)("img",{src:e.bannerImage,alt:e.title},null,8,ue),re]),(0,o.Lk)("div",ce,[(0,o.Lk)("h2",de,(0,s.v_)(e.title),1),(0,o.Lk)("p",ve,(0,s.v_)(e.description),1)])],8,se)))),128))])])]))}};const pe=(0,m.A)(ke,[["__scopeId","data-v-0b88bc9c"]]);var me=pe;const fe={class:"popUpMain"},Le={class:"content"},ge={class:"title"},be={class:"message"},he={class:"button"};function _e(e,a){return(0,o.uX)(),(0,o.CE)("section",{onClick:a[1]||(a[1]=a=>e.$emit("close-popup"))},[(0,o.Lk)("div",fe,[(0,o.Lk)("div",Le,[(0,o.Lk)("div",ge,[(0,o.Lk)("h1",null,[(0,o.RG)(e.$slots,"title",{},void 0,!0)])]),(0,o.Lk)("div",be,[(0,o.RG)(e.$slots,"message",{},void 0,!0)]),(0,o.Lk)("div",he,[(0,o.Lk)("button",{onClick:a[0]||(a[0]=a=>e.$emit("close-popup"))},"Okay!")])])])])}const ye={},Ce=(0,m.A)(ye,[["render",_e],["__scopeId","data-v-7998a685"]]);var Ie=Ce;const we={style:{"border-bottom":"2px solid #66f1fc","font-size":"20px"}},je={class:"card"},Ee={class:"cardImage"},Ke=["src"],Re={class:"content"},Xe={class:"card-content"},Se=["for","onChange"],Oe={class:"cart"},Pe={class:"counter"},xe={class:"button"};var Fe={__name:"MealPopup",props:{meal:Object},emits:["close-popup"],setup(e,{emit:a}){const t=(0,g.Pj)(),n=e,r=(0,i.KR)(""),c=(0,i.KR)(""),d=(0,i.KR)(1),v=(0,i.KR)(parseInt(n.meal.price)),k=(0,i.KR)(null),p=a;function m(){d.value>0&&(d.value++,v.value=parseInt(n.meal.price)*d.value)}function f(){if(d.value>1)d.value--,v.value=parseInt(n.meal.price)*d.value;else{if(1!==d.value)return;v.value=parseInt(n.meal.price)*d.value}}function L(){k.value=!0}function b(){k.value=!1,setTimeout((()=>{p("close-popup")}),100)}async function h(e){const a=await _(e),l=t.state.cartItems,o={order:[{mealId:e,quantity:d.value+a}]},s=await u.put("/restaurants/cart",o);"ok"===s.status&&(l.some((a=>a.mealId===e))?(r.value="Bravo!",c.value="Jelo je poslato u korpu!"):(t.dispatch("addToCart",n.meal),r.value="Bravo!",c.value="Jelo je poslato u korpu!"))}async function _(e){const a=await u.get("/restaurants/cart"),t=await a.data.cart.find((a=>a.mealId===e));return t?t.quantity:0}function y(e){h(e),L()}return(0,o.sV)((()=>{L()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",{onClick:b},[r.value?((0,o.uX)(),(0,o.Wv)(Ie,{key:0},{title:(0,o.k6)((()=>[(0,o.Lk)("h1",we,(0,s.v_)(r.value),1)])),message:(0,o.k6)((()=>[(0,o.Lk)("h3",null,(0,s.v_)(c.value),1)])),_:1})):(0,o.Q3)("",!0),(0,o.bF)(l.eB,{name:"popup"},{default:(0,o.k6)((()=>[k.value?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"popup-container",onClick:a[1]||(a[1]=(0,l.D$)((()=>{}),["stop"]))},[(0,o.Lk)("div",je,[(0,o.Lk)("div",Ee,[(0,o.Lk)("img",{src:n.meal.image,alt:""},null,8,Ke),(0,o.Lk)("button",{onClick:b},">")]),(0,o.Lk)("div",Re,[(0,o.Lk)("div",Xe,[(0,o.Lk)("h1",null,(0,s.v_)(n.meal.title),1),(0,o.Lk)("h3",null,(0,s.v_)(n.meal.price)+",00 rsd",1)]),(0,o.Lk)("p",null,(0,s.v_)(n.meal.description),1),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.meal.additions,((a,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"additions",key:t},[(0,o.Lk)("label",{for:"inpPrice"+t,onChange:t=>e.handleCheckboxChange(a.title)},(0,s.v_)(a.title),41,Se)])))),128)),(0,o.Lk)("div",Oe,[(0,o.Lk)("div",Pe,[(0,o.Lk)("button",{onClick:f},"-"),(0,o.Lk)("p",null,(0,s.v_)(d.value),1),(0,o.Lk)("button",{onClick:m},"+")]),(0,o.Lk)("div",xe,[(0,o.Lk)("button",{onClick:a[0]||(a[0]=e=>y(n.meal.id))},"Dodaj u korpu! "+(0,s.v_)(v.value)+" rsd",1)])])])])])):(0,o.Q3)("",!0)])),_:1})]))}};const Te=(0,m.A)(Fe,[["__scopeId","data-v-1bffa013"]]);var Be=Te;const We={key:1},Ae={class:"restaurantImage"},Ue=["src"],Qe={class:"restName"},$e={class:"listOfMeals"},De={class:"mealList"},ze=["onClick"],Ne=["src"],Je={class:"mealDetails"},Ve={class:"mealInfo"},qe={class:"prices"};var Me={__name:"SingleRest",props:{restId:String},setup(e){const a=e;a&&localStorage.setItem("restaurantId",a.restId);const t=(0,i.KR)([]),l=(0,i.KR)(null),n=(0,i.KR)(null);async function r(){const e=localStorage.getItem("restaurantId"),a=await u.get(`/restaurants/${e}`),n=await u.get(`/restaurants/${e}/meals`);t.value=a.data,l.value=n.data.meals,localStorage.setItem("restID",a.data.id)}function c(e){n.value=e}function d(){n.value=null}return r(),(e,a)=>null===l.value?((0,o.uX)(),(0,o.Wv)(te,{key:0})):((0,o.uX)(),(0,o.CE)("section",We,[(0,o.Lk)("div",Ae,[(0,o.Lk)("img",{src:t.value.bannerImage,alt:""},null,8,Ue)]),(0,o.Lk)("div",Qe,[(0,o.Lk)("h1",null,(0,s.v_)(t.value.title),1),(0,o.Lk)("h3",null,(0,s.v_)(t.value.description),1)]),(0,o.Lk)("div",$e,[(0,o.Lk)("ul",De,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.value,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id,class:"mealItem",onClick:a=>c(e)},[(0,o.Lk)("img",{src:e.image,alt:"Meal Image",class:"mealImage"},null,8,Ne),(0,o.Lk)("div",Je,[(0,o.Lk)("div",Ve,[(0,o.Lk)("h2",null,(0,s.v_)(e.title),1),(0,o.Lk)("p",null,(0,s.v_)(e.description),1),(0,o.Lk)("div",qe,[(0,o.Lk)("p",null,"Cena: "+(0,s.v_)(e.price)+"rsd",1)])])])],8,ze)))),128))])]),n.value?((0,o.uX)(),(0,o.Wv)(Be,{key:0,meal:n.value,onClosePopup:d},null,8,["meal"])):(0,o.Q3)("",!0)]))}};const Ge=(0,m.A)(Me,[["__scopeId","data-v-351129ea"]]);var Ze=Ge;async function He(e,a,t){const l=localStorage.getItem("token");if(l)return t();t({name:"Login"})}const Ye=(0,o.Fv)('<div class="main" data-v-02db7af8><div class="title" data-v-02db7af8><h3 data-v-02db7af8>O aplikaciji</h3></div><div class="desc" data-v-02db7af8><p data-v-02db7af8>Ideja same aplikacije bazira se na jednostavnoj upotrebi kao i na lakom pristupu korisnicima pri odabiru hrane.</p><p data-v-02db7af8>Aplikacija je &#39;responsive&#39; i prilagodjava se svim uredjajima.</p><p data-v-02db7af8>Za potrebe projekta, koriscena je baza podataka sa veb sajta <strong data-v-02db7af8><a href="https://apiforge.net/" data-v-02db7af8>ApiForge.net</a></strong>, koja se pokazala izuzetno pouzdanom i efikasnom u ovom trenutku.</p><p data-v-02db7af8>Korisnici u ovoj aplikaciji mogu da ostvare sledece funkcije:</p></div><div class="list" data-v-02db7af8><li data-v-02db7af8> Kreiranje/prijavljivanje na nov nalog </li><li data-v-02db7af8> Pristup restoranima sa razlicitim jelima </li><li data-v-02db7af8> Odabir hrane, kao i odabir kolicine odredjene hrane </li><li data-v-02db7af8> Dodavanje/uklanjanje hrane iz korpe </li><li data-v-02db7af8> Zavrsetak kupovine </li></div><div class="desc2" data-v-02db7af8><p data-v-02db7af8>Projekat izradio <strong data-v-02db7af8>Marko Pantovic</strong></p></div></div>',1),ea=[Ye];function aa(e,a){return(0,o.uX)(),(0,o.CE)("section",null,ea)}const ta={},la=(0,m.A)(ta,[["render",aa],["__scopeId","data-v-02db7af8"]]);var na=la;const oa=(0,n.aE)({history:(0,n.LA)(),routes:[{path:"/food_delivery/",component:me},{path:"/",redirect:"/food_delivery/"},{path:"/food_delivery/login",component:W,name:"Login"},{path:"/food_delivery/create",component:M},{path:"/food_delivery/restaurants",component:me,beforeEnter:[He]},{path:"/food_delivery/restaurants/:restId",props:!0,component:Ze},{path:"/:notFound(.*)",component:W},{path:"/food_delivery/about",component:na}]});var sa=oa;const ia={class:"headerTitle"},ua={key:0},ra={key:1},ca={class:"totalCounter"},da={class:"cartList"},va=["src"],ka={class:"cartItemDetails"},pa={class:"deleteMeal"},ma=["onClick"],fa={key:0,class:"finishOrder"};var La={__name:"TheCart",emits:["close-cart"],setup(e,{emit:a}){const t=a,n=(0,g.Pj)(),r=(0,i.KR)(null),c=(0,i.KR)(0),d=(0,i.KR)(!1),v=(0,i.KR)(!1);async function k(){const e=await u.get("/restaurants/cart");"ok"===e.status&&(r.value=e.data.cart,n.dispatch("calculateCounter",e.data.cart),c.value=0,r.value.forEach((e=>c.value+=e.singleUnitPrice*e.quantity)))}async function p(e){const a={order:[{mealId:e,quantity:0}]},t=(await u.put("/restaurants/cart",a),r.value.find((a=>a.mealId===e)));c.value-=t.singleUnitPrice*t.quantity;const l=r.value.findIndex((a=>a.mealId===e));r.value.splice(l,1)}function m(){d.value=!0}function f(){d.value=!1,setTimeout((()=>{t("close-cart")}),300)}async function L(){const e=await u.delete("/restaurants/cart");v.value=!0,"ok"===e.status&&setTimeout((()=>{n.dispatch("calculateCounter",e.data.cart),c.value=0,r.value=null}),1500)}return(0,o.sV)((()=>{k(),m()})),(e,a)=>((0,o.uX)(),(0,o.CE)("section",{onClick:f},[(0,o.bF)(l.eB,{name:"fadeInOut"},{default:(0,o.k6)((()=>[d.value?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"mainCart",onClick:a[0]||(a[0]=(0,l.D$)((()=>{}),["stop"]))},[(0,o.Lk)("div",ia,[null===r.value||0===r.value.length?((0,o.uX)(),(0,o.CE)("p",ua,"Korpa je prazna 😊")):((0,o.uX)(),(0,o.CE)("h1",ra,"Korpa"))]),(0,o.Lk)("div",ca,[(0,o.Lk)("h1",null,"Ukupna cena: "+(0,s.v_)(c.value)+" rsd",1)]),(0,o.Lk)("ul",da,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.value,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.mealId},[(0,o.Lk)("img",{src:e.image,alt:"",class:"cartItemImage"},null,8,va),(0,o.Lk)("div",ka,[(0,o.Lk)("h3",null,(0,s.v_)(e.title),1),(0,o.Lk)("p",null,(0,s.v_)(e.singleUnitPrice*e.quantity)+" rsd",1),(0,o.Lk)("p",null,"Kolicina: "+(0,s.v_)(e.quantity),1)]),(0,o.Lk)("div",pa,[(0,o.Lk)("button",{onClick:a=>p(e.mealId)},"X",8,ma)])])))),128))]),r.value?.length?((0,o.uX)(),(0,o.CE)("div",fa,[v.value?((0,o.uX)(),(0,o.Wv)(E,{key:1})):((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:L},"Zavrsi kupovinu"))])):(0,o.Q3)("",!0)])):(0,o.Q3)("",!0)])),_:1})]))}};const ga=(0,m.A)(La,[["__scopeId","data-v-7d1800bd"]]);var ba=ga;const ha={class:"navbar"},_a={class:"logo"},ya={class:"links"},Ca={class:"special"},Ia={key:0},wa={class:"toggle_btn"},ja={key:0,class:"dropDown"},Ea={class:"special"},Ka={key:0};var Ra={__name:"TheHeader",setup(e){const a=(0,g.Pj)(),t=(0,i.KR)(!1),n=(0,i.KR)(!1),r=(0,o.EW)((()=>a.getters.getCartCounter)),c=(0,i.KR)(null);function d(e){e.stopPropagation(),t.value=!t.value}function v(){n.value=!n.value}function k(){n.value=!1}async function p(){const e=await u.get("/restaurants/cart/");c.value=e.data.cart,await a.dispatch("calculateCounter",e.data.cart)}const m=e=>{const a=document.querySelector(".dropDown");a&&!a.contains(e.target)&&(t.value=!1)};return(0,o.sV)((()=>{window.addEventListener("click",m)})),(0,o.hi)((()=>{window.removeEventListener("click",m)})),p(),(e,a)=>{const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("main",null,[(0,o.Lk)("header",null,[(0,o.Lk)("div",ha,[(0,o.Lk)("div",_a,[(0,o.bF)(i,{to:"/food_delivery/"},{default:(0,o.k6)((()=>[(0,o.eW)("Logo")])),_:1})]),(0,o.Lk)("ul",ya,[(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/food_delivery/"},{default:(0,o.k6)((()=>[(0,o.eW)("Pocetna")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/food_delivery/about"},{default:(0,o.k6)((()=>[(0,o.eW)("O aplikaciji")])),_:1})]),(0,o.Lk)("li",Ca,[(0,o.Lk)("a",{onClick:v},"Korpa"),(0,o.eW)(),r.value?.length?((0,o.uX)(),(0,o.CE)("p",Ia,(0,s.v_)(r.value.length),1)):(0,o.Q3)("",!0)]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/food_delivery/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Logout")])),_:1})])]),(0,o.Lk)("div",wa,[(0,o.Lk)("img",{onClick:a[0]||(a[0]=e=>d(e)),width:"50",height:"50",src:"https://img.icons8.com/3d-fluency/188/menu.png",alt:"menu"})])]),(0,o.bF)(l.eB,{name:"drop"},{default:(0,o.k6)((()=>[t.value?((0,o.uX)(),(0,o.CE)("div",ja,[(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/food_delivery/"},{default:(0,o.k6)((()=>[(0,o.eW)("Pocetna")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/food_delivery/about"},{default:(0,o.k6)((()=>[(0,o.eW)("O aplikaciji")])),_:1})]),(0,o.Lk)("li",Ea,[(0,o.Lk)("a",{onClick:v},"Korpa"),(0,o.eW)(),r.value?.length?((0,o.uX)(),(0,o.CE)("p",Ka,(0,s.v_)(r.value.length),1)):(0,o.Q3)("",!0)]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/food_delivery/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Logout")])),_:1})])])):(0,o.Q3)("",!0)])),_:1})])]),n.value?((0,o.uX)(),(0,o.Wv)(ba,{key:0,onCloseCart:k})):(0,o.Q3)("",!0)],64)}}};const Xa=(0,m.A)(Ra,[["__scopeId","data-v-498bd3af"]]);var Sa=Xa,Oa={__name:"App",setup(e){const a=(0,n.lq)(),t=["/food_delivery/login","/food_delivery/create"];return(e,l)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t.includes((0,i.R1)(a).path)?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(Sa,{key:0})),(0,o.bF)(n)],64)}}};const Pa=Oa;var xa=Pa;const Fa=(0,g.y$)({state(){return{cartItems:[],loggedUser:!0}},mutations:{calculateCounter(e,a){e.cartItems=a},addToCart(e,a){e.cartItems.push(a)},userLogStatus(e,a){e.loggedUser=a}},getters:{getCartCounter(e){return e.cartItems},getUserStatus(e){return e.loggedUser}},actions:{calculateCounter(e,a){e.commit("calculateCounter",a)},addToCart(e,a){e.commit("addToCart",a)},userLogStatus(e,a){e.commit("userLogStatus",a)}}});var Ta=Fa;const Ba=(0,l.Ef)(xa);Ba.use(sa),Ba.use(Ta),Ba.mount("#app")}},a={};function t(l){var n=a[l];if(void 0!==n)return n.exports;var o=a[l]={exports:{}};return e[l].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,l,n,o){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],o=e[c][2];for(var i=!0,u=0;u<l.length;u++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[u])}))?l.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var r=n();void 0!==r&&(a=r)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,n,o]}}(),function(){t.d=function(e,a){for(var l in a)t.o(a,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,o,s=l[0],i=l[1],u=l[2],r=0;if(s.some((function(a){return 0!==e[a]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(u)var c=u(t)}for(a&&a(l);r<s.length;r++)o=s[r],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},l=self["webpackChunkvue_first_app"]=self["webpackChunkvue_first_app"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=t.O(void 0,[504],(function(){return t(8422)}));l=t.O(l)})();
//# sourceMappingURL=app.53888fad.js.map