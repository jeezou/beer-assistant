(function(){"use strict";var e={1497:function(e,t,a){var n=a(9242),s=a(3396);function r(e,t,a,n,r,i){const o=(0,s.up)("Profile");return(0,s.wg)(),(0,s.j4)(o,{msg:"Welcome to Your Vue.js App"})}var i=a(7139);const o={class:"wrapper"},l={class:"profile"},c=["src"],_={class:"profile__info"},u={class:"profile__name"},b={class:"profile__yo"},h={class:"profile__post"},p={class:"beer"},f=(0,s._)("h1",null,[(0,s._)("span",{class:"beer__header"},"Beer"),(0,s.Uk)(" Recommendation")],-1),d={class:"beer__items"},m={class:"beer__item name"},v=(0,s._)("span",{class:"beer__title"},"Title: ",-1),g={class:"beer__content"},w={class:"beer__item brand"},D=(0,s._)("span",{class:"beer__title"},"Brand: ",-1),y={class:"beer__content"},z={class:"beer__item style"},j=(0,s._)("span",{class:"beer__title"},"Style: ",-1),O={class:"beer__content"},k={class:"beer__item hop"},B=(0,s._)("span",{class:"beer__title"},"Hop: ",-1),A={class:"beer__content"},P={class:"beer__item malts"},U=(0,s._)("span",{class:"beer__title"},"Malts: ",-1),x={class:"beer__content"},M={class:"beer__item alc"},N=(0,s._)("span",{class:"beer__title"},"Alcohol: ",-1),S={class:"beer__content"},C={class:"beer__item blg"},F=(0,s._)("span",{class:"beer__title"},"BLG: ",-1),T={class:"beer__content"},Y={class:"beer__item ibu"},$=(0,s._)("span",{class:"beer__title"},"IBU: ",-1),G={class:"beer__content"},R={class:"button-field"},W=(0,s._)("div",{class:"button-field__header"},[(0,s.Uk)(" Wanna Another "),(0,s._)("span",{class:"yellow"},"  Recommendation"),(0,s.Uk)("? ")],-1);function Z(e,t,a,n,r,Z){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",l,[(0,s._)("img",{src:this.userData.avatar,alt:"avatar",class:"profile__avatar"},null,8,c),(0,s._)("div",_,[(0,s._)("div",u,[(0,s.Uk)((0,i.zw)(this.userData.first_name)+" "+(0,i.zw)(this.userData.last_name)+", ",1),(0,s._)("span",b,(0,i.zw)(this.getAge(this.userData.date_of_birth)),1)]),(0,s._)("div",h,(0,i.zw)(this.userData.employment.title),1)])]),(0,s._)("div",p,[f,(0,s._)("div",d,[(0,s._)("div",m,[v,(0,s._)("span",g,(0,i.zw)(this.beerData.name),1)]),(0,s._)("div",w,[D,(0,s._)("span",y,(0,i.zw)(this.beerData.brand),1)]),(0,s._)("div",z,[j,(0,s._)("span",O,(0,i.zw)(this.beerData.style),1)]),(0,s._)("div",k,[B,(0,s._)("span",A,(0,i.zw)(this.beerData.hop),1)]),(0,s._)("div",P,[U,(0,s._)("span",x,(0,i.zw)(this.beerData.malts),1)]),(0,s._)("div",M,[N,(0,s._)("span",S,(0,i.zw)(this.beerData.alcohol),1)]),(0,s._)("div",C,[F,(0,s._)("span",T,(0,i.zw)(this.beerData.blg),1)]),(0,s._)("div",Y,[$,(0,s._)("span",G,(0,i.zw)(this.beerData.ibu),1)])]),(0,s._)("div",R,[W,(0,s._)("div",{class:"button-field__button",onClick:t[0]||(t[0]=(...e)=>this.getNewBeerData&&this.getNewBeerData(...e))}," Get New ")])])])}var E={name:"Profile",components:{},data(){return{userData:null,beerData:null}},created(){this.fetchData()},methods:{getAge(e){let t=new Date,a=new Date(e),n=t.getFullYear()-a.getFullYear(),s=t.getMonth()-a.getMonth();return(s<0||0===s&&t.getDate()<a.getDate())&&n--,n},getNewBeerData(){fetch("https://random-data-api.com/api/beer/random_beer").then((e=>e.json())).then((e=>this.beerData=e)).catch((e=>console.log(`Something went wrong ${e}`)))},fetchData(){fetch("https://random-data-api.com/api/beer/random_beer").then((e=>e.json())).then((e=>this.beerData=e)).catch((e=>console.log(`Something went wrong ${e}`))),fetch("https://random-data-api.com/api/users/random_user").then((e=>e.json())).then((e=>this.userData=e)).catch((e=>console.log(`Something went wrong ${e}`)))}}},H=a(89);const I=(0,H.Z)(E,[["render",Z]]);var L=I,V={name:"App",components:{Profile:L}};const q=(0,H.Z)(V,[["render",r]]);var J=q;(0,n.ri)(J).mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,r){if(!n){var i=1/0;for(_=0;_<e.length;_++){n=e[_][0],s=e[_][1],r=e[_][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(o=!1,r<i&&(i=r));if(o){e.splice(_--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var _=e.length;_>0&&e[_-1][2]>r;_--)e[_]=e[_-1];e[_]=[n,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,i=n[0],o=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var _=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(_)},n=self["webpackChunkbeer_assistant"]=self["webpackChunkbeer_assistant"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(1497)}));n=a.O(n)})();
//# sourceMappingURL=app.eb3ba369.js.map