"use strict";(self.webpackChunkreact_modele=self.webpackChunkreact_modele||[]).push([[179],{9899:(e,t,r)=>{var n=r(745),s=r(5998),i=r(9342),c=r(7294),o=r(6974),a=(r(1249),r(5893));const l=function(){var e=(0,s.v9)((function(e){return e.recipes.list})),t=(0,s.v9)((function(e){return e.user.logged})),r=function(e){return e.isActive?"menu-link menu-link--active":"menu-link"};return(0,a.jsxs)("nav",{className:"menu",children:[(0,a.jsx)(i.OL,{to:"/",className:r,children:"Accueil "}),t&&(0,a.jsx)(i.OL,{to:"/fav",className:r,children:"Recettes préférées"}),e.map((function(e){return(0,a.jsx)(i.OL,{className:r,to:"/recipe/".concat(e.slug),children:e.title},e.id)}))]})};var u=r(5697),p=r.n(u);function d(e){var t=e.children;return(0,a.jsx)("main",{className:"page",children:t})}d.propTypes={children:p().node.isRequired};const f=d,m=r.p+"images/af1280e4c248079a099c.png";r(8309);function h(e){var t=e.type,r=e.name,n=e.placeholder,i=(0,s.v9)((function(e){return e.user[r]})),c=(0,s.I0)(),o="field-".concat(r);return(0,a.jsxs)("div",{className:i.length>0?"field field--has-content":"field",children:[(0,a.jsx)("input",{value:i,onChange:function(e){c({type:"CHANGE_VALUE",value:e.target.value,key:r})},id:o,type:t,className:"field-input",placeholder:n,name:r}),(0,a.jsx)("label",{htmlFor:o,className:"field-label",children:n})]})}h.propTypes={type:p().string,name:p().string.isRequired,placeholder:p().string.isRequired},h.defaultProps={type:"text"};const g=h;const j=function(){var e=(0,s.v9)((function(e){return e.user.logged})),t=(0,s.v9)((function(e){return e.user.pseudo})),r=(0,s.v9)((function(e){return e.user.loading})),n=(0,s.I0)();return(0,a.jsxs)("div",{className:"login-form",children:[r&&(0,a.jsx)("p",{children:"Veuillez patienter..."}),!r&&(0,a.jsxs)(a.Fragment,{children:[e&&(0,a.jsxs)("div",{className:"login-form-logged",children:[(0,a.jsxs)("p",{className:"login-form-message",children:["Bienvenue ",t]}),(0,a.jsx)("button",{type:"button",className:"login-form-button",onClick:function(){n({type:"LOGOUT"})},children:"Déconnexion"})]}),!e&&(0,a.jsxs)("form",{className:"login-form-element",onSubmit:function(e){e.preventDefault(),n({type:"LOGIN"})},children:[(0,a.jsx)(g,{name:"email",placeholder:"Adresse Email"}),(0,a.jsx)(g,{name:"password",type:"password",placeholder:"Mot de passe"}),(0,a.jsx)("button",{type:"submit",className:"login-form-button",children:"OK"})]})]})]})};const v=function(){return(0,a.jsxs)("header",{className:"header",children:[(0,a.jsx)("img",{src:m,className:"header-logo",alt:"Logo oRecipes"}),(0,a.jsx)(j,{})]})};r(9070),r(7941),r(2526),r(7327),r(1539),r(5003),r(9554),r(4747),r(9337),r(3321);function O(e){var t=e.thumbnail,r=e.title,n=e.difficulty,s=e.slug;return(0,a.jsxs)("article",{className:"card",children:[(0,a.jsx)("img",{className:"card-img",src:t,alt:r}),(0,a.jsxs)("div",{className:"card-content",children:[(0,a.jsx)("h2",{className:"card-title",children:r}),(0,a.jsxs)("p",{className:"card-desc",children:["Difficulté : ",n]}),(0,a.jsx)(i.rU,{to:"/recipe/".concat(s),className:"card-link",children:"Voir la recette"})]})]})}O.propTypes={thumbnail:p().string.isRequired,title:p().string.isRequired,difficulty:p().string.isRequired,slug:p().string.isRequired};const y=O;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){var t=e.title,r=e.text,n=e.recipes;return(0,a.jsxs)("section",{className:"content",children:[(0,a.jsx)("h1",{className:"content-title",children:t}),(0,a.jsx)("p",{className:"content-text",children:r}),n&&(0,a.jsx)("div",{className:"content-list",children:n.map((function(e){return(0,a.jsx)(y,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.id)}))})]})}N.propTypes={title:p().string.isRequired,text:p().string.isRequired,recipes:p().arrayOf(p().shape({id:p().number.isRequired}))},N.defaultProps={recipes:null};const w=N;r(9826);const P=function(){var e=(0,s.v9)((function(e){return e.recipes.list})),t=function(){var e;switch((arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).length){case 0:e="Découvrez prochainement nos recettes !";break;case 1:e="Dégustez notre recette la plus savoureuse.";break;default:e="Choisissez parmi nos recettes ce qui vous fait envie."}return e}(e);return(0,a.jsxs)(f,{children:[(0,a.jsx)(v,{}),(0,a.jsx)(w,{title:"Les recettes oRecipes",text:t,recipes:e})]})};function E(e){var t=e.name,r=e.thumbnail,n=e.author,s=e.difficulty;return(0,a.jsxs)("header",{className:"presentation",children:[(0,a.jsx)("img",{src:r,alt:"Bonnes crêpes",className:"presentation-image"}),(0,a.jsxs)("div",{className:"presentation-content",children:[(0,a.jsx)("h1",{className:"presentation-title",children:t}),(0,a.jsxs)("p",{className:"presentation-infos",children:[n," - ",s]})]})]})}E.propTypes={name:p().string.isRequired,thumbnail:p().string.isRequired,author:p().string.isRequired,difficulty:p().string.isRequired};const R=E;var D=function(e){var t=e.list;return(0,a.jsx)("ul",{className:"ingredients",children:t.map((function(e){return(0,a.jsxs)("li",{className:"ingredient",children:[(0,a.jsxs)("span",{className:"ingredient-quantity",children:[e.quantity," ",e.unit]})," ",e.name]},e.id)}))})};D.propTypes={list:p().arrayOf(p().shape({id:p().number,name:p().string,unit:p().string,quantity:p().oneOfType([p().string,p().number])}).isRequired).isRequired};const q=D;var A=function(e){var t=e.steps;return(0,a.jsx)("ol",{className:"steps",children:t.map((function(e){return(0,a.jsx)("li",{className:"step",children:e},e)}))})};A.propTypes={steps:p().arrayOf(p().string).isRequired};const S=A;const T=function(){var e=(0,o.UO)(),t=(0,s.v9)((function(t){return function(e,t){return e.find((function(e){return e.slug===t}))}(t.recipes.list,"".concat(e.slug))}));return t?(0,a.jsxs)(f,{children:[(0,a.jsx)(v,{}),(0,a.jsxs)("div",{className:"recipe",children:[(0,a.jsx)(R,{name:t.title,thumbnail:t.thumbnail,author:t.author,difficulty:t.difficulty}),(0,a.jsx)(q,{list:t.ingredients}),(0,a.jsx)(S,{steps:t.instructions})]})]}):(0,a.jsx)(o.Fg,{to:"/error",replace:!0})};const _=function(){return(0,a.jsxs)(f,{children:[(0,a.jsx)(v,{}),(0,a.jsx)(w,{title:"Erreur",text:"Nous sommes désolé, Une erreur s'est produite."})]})};const k=function(){var e=(0,s.v9)((function(e){return e.user.logged})),t=(0,s.v9)((function(e){return e.favorites.list})),r=(0,s.I0)();return(0,c.useEffect)((function(){r({type:"FETCH_FAV"})}),[]),e?(0,a.jsxs)(f,{children:[(0,a.jsx)(v,{}),(0,a.jsx)(w,{title:"Reccettes préférées",text:"Retrouvez ci-dessous vos recettes préférées.",recipes:t})]}):(0,a.jsx)(o.Fg,{to:"/",replace:!0})};const L=function(){return(0,a.jsx)("div",{className:"loading",children:"Veuillez patienter"})};var V="FETCH_RECIPES",C="SAVE_RECIPES";const U=function(){var e=(0,o.TH)();(0,c.useEffect)((function(){window.scrollTo(0,0)}),[e.pathname])};const z=function(){U();var e=(0,s.I0)(),t=(0,s.v9)((function(e){return e.recipes.loading}));return(0,c.useEffect)((function(){e({type:V})}),[]),t?(0,a.jsx)(L,{}):(0,a.jsxs)("div",{className:"app",children:[(0,a.jsx)(l,{}),(0,a.jsxs)(o.Z5,{children:[(0,a.jsx)(o.AW,{path:"/",element:(0,a.jsx)(P,{})}),(0,a.jsx)(o.AW,{path:"/recipe/:slug",element:(0,a.jsx)(T,{})}),(0,a.jsx)(o.AW,{path:"/fav",element:(0,a.jsx)(k,{})}),(0,a.jsx)(o.AW,{path:"*",element:(0,a.jsx)(_,{})})]})]})};var F=r(5857);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B={list:[],loading:!0};const W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===C?G(G({},e),{},{list:t.recipes,loading:!1}):e};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y={logged:!1,email:"",password:"",pseudo:"",loading:!1};const Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOGIN":return K(K({},e),{},{loading:!0});case"SAVE_USER":return K(K({},e),{},{logged:!0,loading:!1,email:"",password:"",pseudo:t.pseudo});case"CHANGE_VALUE":return K(K({},e),{},X({},t.key,t.value));case"LOGOUT":return K(K({},e),{},{logged:!1,pseudo:""});default:return e}};function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ee={list:[]};const te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOGOUT":return Q(Q({},e),{},{list:[]});case"SAVE_FAV":return Q(Q({},e),{},{list:t.recipes});default:return e}};const re=(0,F.UY)({recipes:W,user:Z,favorites:te});var ne=r(9669),se=r.n(ne)().create({baseURL:"http://51.91.251.65:3011"});const ie=function(e){return function(t){return function(r){if(r.type===V)se.get("/recipes").then((function(t){e.dispatch(function(e){return{type:C,recipes:e}}(t.data))})).catch((function(e){console.log(e),alert("Erreur de chargement, veuillez réessayer")}));else if("LOGIN"===r.type){var n=e.getState();se.post("/login",{email:n.user.email,password:n.user.password}).then((function(t){se.defaults.headers.common.Authorization="Bearer ".concat(t.data.token),e.dispatch({type:"SAVE_USER",pseudo:t.data.pseudo})})).catch((function(e){console.log(e),alert("Erreur de chargement, veuillez réessayer")}))}else"FETCH_FAV"===r.type?se.get("/favorites").then((function(t){e.dispatch({type:"SAVE_FAV",recipes:t.data.favorites})})).catch((function(e){console.log(e),alert("Erreur de chargement, veuillez réessayer")})):"LOGOUT"===r.type&&(se.defaults.headers.common.Authorization=void 0);t(r)}}};var ce=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.qC)((0,F.md)(ie));const oe=(0,F.MT)(re,ce);var ae=(0,a.jsx)(s.zt,{store:oe,children:(0,a.jsx)(i.VK,{children:(0,a.jsx)(z,{})})});(0,n.s)(document.getElementById("root")).render(ae)},9193:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[601],(()=>(t(9193),t(9899))));e.O()}]);