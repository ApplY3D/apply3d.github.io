(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),s=(a(28),a(18)),u=a(1),i=a.n(u),o=a(4),m=a(2);a(30);var d=Object(n.createContext)({}),f=function(e){return new Promise((function(t){return setTimeout(t,e)}))},p=function(){var e=Object(o.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(500);case 2:return e.abrupt("return","kode@kode.ru"===(null===t||void 0===t?void 0:t.trim().toLowerCase())&&"Enk0deng"===a?{success:!0}:{success:!1,error:"Invalid user data"});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(500);case 2:return e.abrupt("return",6===(null===t||void 0===t?void 0:t.toString().length)&&"NaN"!==typeof+t?{success:!0,token:Date.now()+6048e5}:{success:!1,error:"Enter any six digits"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(50);case 2:return e.abrupt("return",{success:!0});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=a(3),g=(a(31),function(e){var t=e.title,a=e.disabled,n=e.value,c=e.type,l=void 0===c?"text":c,s=e.onChange,u=e.onSubmit;return r.a.createElement("div",{className:"input-group"},t?r.a.createElement("label",{htmlFor:t},t):"",r.a.createElement("input",{disabled:a,className:"input",onKeyPress:function(e){13!==e.keyCode&&"Enter"!==e.code&&"Enter"!==e.key||u&&u()},id:t,value:n,onChange:function(e){s&&s(e.target.value)},type:l}))}),h=(a(32),function(e){var t=e.title,a=e.className,c=void 0===a?"":a,l=e.disabled,s=e.onClick,u=Object(n.useContext)(d).userLoading;return r.a.createElement("button",{disabled:u||l,className:"btn ".concat(c," ").concat(l?"btn--disabled":""),onClick:s},t)}),j=(a(33),function(){var e=Object(n.useState)("kode@kode.ru"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("Enk0deng"),s=Object(m.a)(l,2),u=s[0],f=s[1],p=Object(n.useState)(""),v=Object(m.a)(p,2),b=v[0],E=v[1],j=Object(n.useState)(!1),O=Object(m.a)(j,2),k=O[0],N=O[1],_=Object(n.useState)(!1),y=Object(m.a)(_,2),x=y[0],w=y[1],C=Object(n.useState)(""),S=Object(m.a)(C,2),B=S[0],F=S[1],A=Object(n.useContext)(d),L=A.tempUserData,I=A.login,P=A.logout,M=A.login2FA,D=A.userLoading,T=function(){N(!0),setTimeout((function(){return N(!1)}),500)},U=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(""),w(!0),e.next=4,I(a,u);case 4:(t=e.sent).success?(T(),w(!1)):(w(!1),F(t.error));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(""),e.next=3,M(b);case 3:(t=e.sent).success||F(t.error);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,P();case 3:T(),F(""),w(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"auth ".concat(L?"auth-2fa":"")},(!L||k||x)&&r.a.createElement("div",{className:"auth__wrapper auth__wrapper--login"},r.a.createElement("div",{className:"auth__inputs"},r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{disabled:D,title:"Email",value:a,onChange:c,onSubmit:U}),r.a.createElement(g,{disabled:D,title:"Password",value:u,type:"password",onChange:f,onSubmit:U}))),r.a.createElement("div",{className:"auth__error"},B||""),r.a.createElement("div",{className:"auth__tools"},r.a.createElement(h,{disabled:D,className:"btn--success",title:"Submit",onClick:U}))),(L||k||x)&&r.a.createElement("div",{className:"auth__wrapper auth__wrapper--2fa"},r.a.createElement("div",{className:"auth__inputs"},r.a.createElement(g,{disabled:D,title:"2FA Code",value:b,onChange:E,onSubmit:J})),r.a.createElement("div",{className:"auth__error"},B||""),r.a.createElement("div",{className:"auth__tools"},r.a.createElement(h,{disabled:D,className:"btn--dismiss",title:"Back",onClick:R}),r.a.createElement(h,{disabled:D,className:"btn--success",title:"Submit",onClick:J}))))}),O=(a(34),function(e){var t=e.leftBtn,a=e.rightBtn;return r.a.createElement("div",{className:"navbar"},t," ",a)}),k=(a(35),function(e){var t=e.navbar,a=e.content,n=t.enabled?r.a.createElement(O,{leftBtn:t.leftBtn||r.a.createElement("div",null),rightBtn:t.rightBtn}):r.a.createElement("div",null);return r.a.createElement("div",{className:"main"},n,r.a.createElement("div",{className:"main__wrapper"},a))}),N=a(13),_=(a(36),function(e){var t=e.arr,a=e.choseCallback,c=e.defaultValue,l=void 0===c?"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e":c,s=Object(n.useState)(t),u=Object(m.a)(s,2),i=u[0],o=u[1],d=Object(n.useState)(!1),f=Object(m.a)(d,2),p=f[0],v=f[1],b=Object(n.useState)(null),E=Object(m.a)(b,2),h=E[0],j=E[1],O=Object(n.useState)(""),k=Object(m.a)(O,2),_=k[0],y=k[1];Object(n.useEffect)((function(){var e;o(t=(null===(e=t)||void 0===e?void 0:e.length)>0?[null].concat(Object(N.a)(t)):[null])}),[t]),Object(n.useEffect)((function(){x(_)}),[_,y]);var x=function(e){var a=t.filter((function(t){return(null===t||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase()))||null===t}));o([null].concat(Object(N.a)(a)))},w=function(){v((function(e){return!e}))},C=function(e){if(e===h)return w();w(),j(e),a&&a(e)};return r.a.createElement("div",{className:"selector ".concat(p?"selector--active":"")},r.a.createElement("div",{onClick:w,className:"selector__selected"},h||l),r.a.createElement("ul",{className:"selector__options"},r.a.createElement(g,{value:_,onChange:y}),i.map((function(e,t){return r.a.createElement("li",{key:"".concat(e,"-").concat(t),onClick:C.bind(null,e),className:"selector__item ".concat(h===e?"selector__item--selected":"")},e||l)}))))}),y=(a(37),function(e){var t=e.children;return r.a.createElement("div",{className:"sidebar"},t)}),x=(a(38),a(39),function(e){var t=e.card,a=e.onClick;return r.a.createElement("div",{className:"card",onClick:a.bind(null,t)},r.a.createElement("img",{alt:t.name,src:t.imageUrl}),r.a.createElement("div",{className:"card__information"},t.name?r.a.createElement("p",null,"Name - ",t.name):"",t.artist?r.a.createElement("p",null,"Artist - ",t.artist):""))}),w=function(e){var t=e.cards,a=e.onCardClick,c=e.pagination,l=Object(n.useContext)(d).userLoading;return r.a.createElement("div",{className:"cards-catalog__wrapper"},r.a.createElement("div",{className:"cards-catalog"},0===t.length&&!l&&"No cards found :c",t.map((function(e){return r.a.createElement(x,{onClick:a,key:e.id,card:e})}))),c)},C=(a(40),function(e){var t,a=e.card,n=e.modalClose,c=Object(E.g)();return r.a.createElement("div",{id:"modal",className:"modal",onClick:function(e){e.target===document.getElementById("modal")&&n&&n()}},r.a.createElement("div",{className:"modal__info"},r.a.createElement("div",{className:"modal__img-container"},r.a.createElement("img",{alt:a.name,src:a.imageUrlHiRes})),r.a.createElement("div",{className:"modal__about-information"},r.a.createElement("h1",null,a.name),r.a.createElement("h2",null,a.types),r.a.createElement("h2",null,a.subtype),r.a.createElement("br",null),null===(t=a.attacks)||void 0===t?void 0:t.map((function(e){var t;return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement("p",null,r.a.createElement("span",null,e.name)," - ",r.a.createElement("span",null,e.damage)),null===(t=e.cost)||void 0===t?void 0:t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:"".concat(e,"-").concat(t)},r.a.createElement("b",null," ",e),r.a.createElement("br",null))})),r.a.createElement("br",null))})),r.a.createElement("div",{className:"modal__close-btn"},r.a.createElement(h,{className:"btn--dismiss",onClick:n,title:"\xd7"})),r.a.createElement("div",{className:"modal__away-btn"},r.a.createElement(h,{className:"btn--success",onClick:function(e){c.push("/card/".concat(e))}.bind(null,a.id),title:"More information..."})))))}),S=(a(46),function(e){var t=e.page,a=e.disabled,n=e.pageCount,c=void 0===n?1:n,l=e.setPage,s=e.pageRange,u=void 0===s?4:s;return r.a.createElement("div",{className:"pagination"},r.a.createElement(h,{className:"btn--prev",disabled:1===t||a,title:"< Prev",onClick:l.bind(null,(function(e){return e-1}))}),r.a.createElement("div",{className:"pagination__page-nums"},function(){var e=new Set([]),a=c-t,n=t-1,r=t,l=Math.floor(u/2);for(u%2===0&&l--;n>0&&l>0;)e.add(--r),n--,l--;for(r=t,l+=Math.floor(u/2);a>0&&l>0;)e.add(++r),a--,l--;for(r=Math.min.apply(Math,Object(N.a)(e));n>0&&l>0;)e.add(--r),n--,l--;return e.add(1),e.add(c),e.add(t),Array.from(e).sort((function(e,t){return e-t}))}().map((function(e){return 0!==e&&r.a.createElement(h,{disabled:t===e||a,title:e,onClick:l.bind(null,e)})}))),r.a.createElement(h,{className:"btn--next",disabled:t===c||0===c||a,title:"Next >",onClick:l.bind(null,(function(e){return e+1}))}))}),B=(a(47),function(){var e=Object(n.useContext)(d),t=e.logout,a=e.fetchTypes,c=e.fetchCards,l=e.userLoading,s=Object(n.useState)(1),u=Object(m.a)(s,2),f=u[0],p=u[1],v=Object(n.useState)(10),b=Object(m.a)(v,2),E=b[0],g=(b[1],Object(n.useState)(1)),j=Object(m.a)(g,2),O=j[0],N=j[1],x=Object(n.useState)(null),B=Object(m.a)(x,2),F=B[0],A=B[1],L=Object(n.useState)(null),I=Object(m.a)(L,2),P=I[0],M=I[1],D=Object(n.useState)(!1),T=Object(m.a)(D,2),U=T[0],J=T[1],R=Object(n.useState)(null),V=Object(m.a)(R,2),H=V[0],q=V[1],z=Object(n.useState)([]),K=Object(m.a)(z,2),G=K[0],Q=K[1],W=Object(n.useState)([]),X=Object(m.a)(W,2),Y=X[0],Z=X[1],$=Object(n.useState)([]),ee=Object(m.a)($,2),te=ee[0],ae=ee[1],ne=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(f,F,P,E);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=Math.ceil(t.headers.get("total-count")/E),N(0===n?1:n),Q(a.cards);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:t=e.sent,Z(t[0].subtypes),ae(t[1].types);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){ne()}),[f]),Object(n.useEffect)((function(){p(1),ne()}),[F,P]),Object(n.useEffect)((function(){re()}),[]);var ce={enabled:!0,leftBtn:null,rightBtn:r.a.createElement(h,{className:"btn--dismiss",onClick:t,title:"Logout"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{navbar:ce,content:r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement(_,{arr:te,defaultValue:"Type",choseCallback:function(e){A(e)}}),r.a.createElement(_,{arr:Y,defaultValue:"Subtype",choseCallback:function(e){M(e)}})),r.a.createElement(w,{pagination:r.a.createElement(S,{disabled:l,page:f,pageCount:O,setPage:p}),onCardClick:function(e){J(!0),q(e)},cards:G}))}),U&&H&&r.a.createElement(C,{card:H,modalClose:function(){J(!1)}}))}),F=(a(48),a(49),function(e){var t,a,n,c,l=e.card;return r.a.createElement("div",{className:"single-card"},r.a.createElement("div",{className:"single-card__info"},r.a.createElement("div",{className:"single-card__img-container"},r.a.createElement("img",{alt:l.name,src:l.imageUrlHiRes})),r.a.createElement("div",{className:"single-card__about-information"},r.a.createElement("h1",null," ",l.name),r.a.createElement("h2",null," ",l.types),r.a.createElement("h2",null," ",l.subtype),(null===(t=l.attacks)||void 0===t?void 0:t.length)>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"single-card__attacks"},r.a.createElement("h4",{style:{textAlign:"center",padding:"1rem"}},"Attacks:"),null===(a=l.attacks)||void 0===a?void 0:a.map((function(e){var t,a;return r.a.createElement("div",{key:e.name,className:"attack"},r.a.createElement("p",{className:"attack__title"},e.name," Deals"," ",r.a.createElement("span",{className:"attack__damage"},e.damage||0," damage")),0!==(null===(t=e.cost)||void 0===t?void 0:t.length)&&r.a.createElement("p",null,"And costs:"),null===(a=e.cost)||void 0===a?void 0:a.map((function(e,t){return r.a.createElement("p",{key:"".concat(e,"-").concat(t),className:"attack__cost"},"- ",e)})),e.text&&r.a.createElement("p",{className:"attack__text"},e.text))})))),(null===(n=l.resistances)||void 0===n?void 0:n.length)>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"single-card__resistances"},r.a.createElement("h4",{style:{textAlign:"center",padding:"1rem"}},"Resistances:"),null===(c=l.resistances)||void 0===c?void 0:c.map((function(e){return r.a.createElement("div",{key:e.type,className:"resistance"},r.a.createElement("p",{className:"resistance-type"},e.type," "),r.a.createElement("span",{className:"resistance-value"},e.value))})))),l.evolvesFrom?r.a.createElement("div",{className:"single-card__evolves"},"Evolves From ",l.evolvesFrom):"")))}),A=function(){var e=Object(n.useContext)(d),t=e.logout,a=e.fetchSingleCard,c=Object(E.h)().id,l=Object(E.g)(),s=Object(n.useState)(null),u=Object(m.a)(s,2),f=u[0],p=u[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(c);case 2:t=e.sent,p(t.card);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var v={enabled:!0,leftBtn:r.a.createElement(h,{onClick:l.goBack.bind(null),title:"< Back"}),rightBtn:r.a.createElement(h,{className:"btn--dismiss",onClick:t,title:"Logout"})};return r.a.createElement(k,{navbar:v,content:null!==f&&r.a.createElement(F,{card:f})})},L=(a(50),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loadingio-spinner-dual-ring-vi7ovl4y53r"},r.a.createElement("div",{className:"ldio-wjqcydmmwvd"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",null)))))}),I=function(){var e,t,a=JSON.parse(localStorage.getItem("userInfo")),c=(a=(null===(e=a)||void 0===e?void 0:e.email)&&(null===(t=a)||void 0===t?void 0:t.password)&&a.token?a:null)&&Date.now()<a.token,l=Object(n.useState)(c&&a?a:null),u=Object(m.a)(l,2),f=u[0],g=u[1],h=Object(n.useState)(!(!c||!a)),O=Object(m.a)(h,2),k=O[0],N=O[1],_=Object(n.useState)(!1),y=Object(m.a)(_,2),x=y[0],w=y[1],C=Object(n.useState)(null),S=Object(m.a)(C,2),F=S[0],I=S[1],P=function(e){return e?r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/cards",component:B}),r.a.createElement(E.b,{exact:!0,path:"/card/:id",component:A}),r.a.createElement(E.a,{to:"/cards"})):r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/auth",component:j}),r.a.createElement(E.a,{to:"/auth"}))}(k),M=function(){var e=Object(o.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,p(t,a);case 3:if(n=e.sent,w(!1),!n.success){e.next=10;break}return I({email:t,password:a}),e.abrupt("return",{success:!0});case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,v(t);case 3:if(a=e.sent,w(!1),!a.success){e.next=13;break}return N(!0),g(F),I(null),localStorage.setItem("userInfo",JSON.stringify(Object(s.a)(Object(s.a)({},F),{},{token:a.token}))),e.abrupt("return",{success:!0});case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,b();case 3:t=e.sent,w(!1),t.success&&(N(!1),g(null),I(null),localStorage.removeItem("userInfo"));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r,c,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,a=l.length>1?l[1]:void 0,n=l.length>2?l[2]:void 0,r=l.length>3&&void 0!==l[3]?l[3]:10,w(!0),e.next=7,fetch("https://api.pokemontcg.io/v1/cards?page=".concat(t,"&pageSize=").concat(r).concat(a?"&types=".concat(a):"").concat(n?"&subtype=".concat(n):""));case 7:return c=e.sent,w(!1),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),t=fetch("https://api.pokemontcg.io/v1/types"),a=fetch("https://api.pokemontcg.io/v1/subtypes"),e.next=5,Promise.all([a,t]);case 5:return n=e.sent,e.next=8,Promise.all(n.map((function(e){return null===e||void 0===e?void 0:e.json()})));case 8:return r=e.sent,w(!1),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,fetch("https://api.pokemontcg.io/v1/cards/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,w(!1),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=Object(n.useMemo)((function(){return{isAuthenticated:k,user:f,userLoading:x,tempUserData:F,login2FA:D,logout:T,login:M,fetchTypes:J,fetchCards:U,fetchSingleCard:R}}),[k,f,x,F,D,T,M,J,U,R]);return r.a.createElement(d.Provider,{value:V},x&&r.a.createElement("div",{className:"loading"},r.a.createElement(L,null)),r.a.createElement("div",{className:"app"},P))},P=a(10);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P.a,null,r.a.createElement(I,null))),document.getElementById("root"))}]),[[23,1,2]]]);
//# sourceMappingURL=main.49032a27.chunk.js.map