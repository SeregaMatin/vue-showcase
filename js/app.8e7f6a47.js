(function(t){function n(n){for(var r,o,s=n[0],i=n[1],u=n[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(n);while(l.length)l.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],r=!0,o=1;o<e.length;o++){var s=e[o];0!==a[s]&&(r=!1)}r&&(c.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a={app:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d208bfd":"48ad24d2","chunk-493b2716":"d5d15646","chunk-cdd16a0a":"a2da4e72"}[t]+".js"}function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var n=[],e={"chunk-493b2716":1,"chunk-cdd16a0a":1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=new Promise((function(n,e){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d208bfd":"31d6cfe0","chunk-493b2716":"b6681c04","chunk-cdd16a0a":"619d1d7b"}[t]+".css",a=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return n()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===r||d===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],f.parentNode.removeChild(f),e(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,e){r=a[t]=[n,e]}));n.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(t);var l=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(f);var e=a[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,e[1](l)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/vue-showcase/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=d;c.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0032":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"svg-icon"},[r("svg",{staticClass:"svg-icon__icon"},[r("use",{attrs:{"xlink:href":e("67f7")("./"+t.font)+"#"+t.icon}})]),t.$slots.badge?r("div",{staticClass:"svg-icon__badge"},[t._t("badge")],2):t._e()])},o=[],a=(e("28a5"),e("768b")),c={name:"SvgIcon",props:{src:{type:String,required:!0}},computed:{srcParts:function(){var t="".concat(this.src),n=t.split("#"),e=Object(a["a"])(n,2),r=e[0],o=e[1];if(!r||!o)throw new Error('Value of "src" attribute doesn\'t satisfy required format: <svg-icon src="font-name.svg#icon-name"></svg-icon>');return{font:r,icon:o}},font:function(){return this.srcParts.font},icon:function(){return this.srcParts.icon}}},s=c,i=(e("561d"),e("2877")),u=Object(i["a"])(s,r,o,!1,null,"2f43f008",null);n["a"]=u.exports},"07a4":function(t,n,e){"use strict";var r=e("2b0e"),o=e("2f62"),a=e("0e44"),c=(e("7514"),e("96cf"),e("3b8d")),s=e("bc3a"),i=e.n(s),u=2e3,d=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,n)})));case 1:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),l={getProducts:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d(u);case 2:return t.abrupt("return",i.a.get("".concat("/vue-showcase/","data/products.json")).then((function(t){return t.data})));case 3:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),getProduct:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d(u);case 2:return t.abrupt("return",i.a.get("".concat("/vue-showcase/","data/products.json")).then((function(t){return t.data})).then((function(t){var e=t.find((function(t){return t.id===n}));return e||Promise.reject(new Error("Product with id '".concat(n,"' not found")))})));case 3:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),addProductToCart:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d(u).then((function(){return n})));case 1:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),changeProductQuantityInCart:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d(u).then((function(){return n})));case 1:case"end":return t.stop()}}),t)})));function n(n,e){return t.apply(this,arguments)}return n}(),removeProductFromCart:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",d(u).then((function(){return n})));case 1:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()},f=e("fa7d"),p={namespaced:!0,state:{products:{},productsAlreadyLoaded:!1},getters:{hasProducts:function(t){return!Object(f["e"])(t.products)},productImagePath:function(t){return function(t,n){var e="/vue-showcase/";return"".concat(e,"data/products/").concat(t.id,"/").concat(n)}}},mutations:{setProducts:function(t,n){t.products=n},setProduct:function(t,n){r["a"].set(t.products,n.id,n)},setProductsAlreadyLoaded:function(t,n){t.productsAlreadyLoaded=n}},actions:{getProducts:function(t){var n=t.state,e=t.commit;return n.productsAlreadyLoaded?n.products:l.getProducts().then((function(t){var n=Object(f["a"])(t,"id");return e("setProducts",n),e("setProductsAlreadyLoaded",!0),n}))},getProduct:function(t,n){var e=t.state,r=t.commit,o=e.products[n];return o||l.getProduct(n).then((function(t){return r("setProduct",t),t}))},getRandomProducts:function(t,n){t.state;var e=t.dispatch;return e("getProducts").then((function(t){return Object(f["d"])(t,n)}))}}},m={namespaced:!0,state:{items:{},itemsTotalCount:0,itemsTotalPrice:0,isShown:!1},getters:{isEmpty:function(t){return 0===t.itemsTotalCount},hasProduct:function(t){return function(n){var e=t.items[n.id];return e&&e.quantity>0}}},mutations:{show:function(t){t.isShown=!0},hide:function(t){t.isShown=!1},addProduct:function(t,n){var e={product:n,quantity:1,totalPrice:n.price};r["a"].set(t.items,n.id,e),t.itemsTotalCount+=1,t.itemsTotalPrice+=n.price},changeProductQuantity:function(t,n){var e=n.product,r=n.newQuantity,o=t.items[e.id],a=r-o.quantity,c=a*e.price;o.quantity+=a,o.totalPrice+=c,t.itemsTotalCount+=a,t.itemsTotalPrice+=c},removeProduct:function(t,n){var e=t.items[n.id];r["a"].delete(t.items,n.id),t.itemsTotalCount-=e.quantity,t.itemsTotalPrice-=e.totalPrice}},actions:{addProduct:function(t,n){var e=t.commit;return l.addProductToCart(n).then((function(t){e("addProduct",t)}))},changeProductQuantity:function(t,n){var e=t.commit;e("changeProductQuantity",n)},removeProduct:function(t,n){var e=t.commit;return l.removeProductFromCart(n).then((function(t){e("removeProduct",t)}))}}},v=e("9224"),h=function(){localStorage.getItem("version")!==v["a"]&&(localStorage.clear(),localStorage.setItem("version",v["a"]))};r["a"].use(o["a"]);n["a"]=new o["a"].Store({state:{isLoading:!1,error:null},getters:{errorOccured:function(t){return!!t.error},errorMessage:function(t){var n=t.error||"";return n.message||n}},mutations:{showLoader:function(t){t.isLoading=!0},hideLoader:function(t){t.isLoading=!1},showError:function(t,n){t.error=n},hideError:function(t){t.error=null}},actions:{},modules:{showcase:p,cart:m},plugins:[h,Object(a["a"])({paths:["cart"]})]})},"16ac":function(t,n,e){},"1c4d":function(t,n,e){},"2e08":function(t,n,e){t.exports=e.p+"img/icomoon.b64ab5bb.svg"},"4bdd":function(t,n,e){"use strict";var r=e("f5ba"),o=e.n(r);o.a},"4c48":function(t,n,e){},5233:function(t,n,e){t.exports=e.p+"img/not-found.d1214384.png"},5609:function(t,n,e){},"561d":function(t,n,e){"use strict";var r=e("4c48"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"application typography",attrs:{id:"app"}},[r("transition",{attrs:{name:"fade"}},[t.isLoading?r("v-loader",{staticClass:"application__loader"}):t._e()],1),r("transition",{attrs:{name:"fade"}},[t.cartIsShown?r("v-modal",{staticClass:"application__cart-modal",on:{close:function(n){return t.hideCart()}},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n        Корзина покупок\n      ")]},proxy:!0}],null,!1,1432732199)},[r("cart")],1):t._e()],1),r("div",{staticClass:"application__header"},[r("div",{staticClass:"application__header-top-bar"},[r("v-button",{staticClass:"application__header-button",attrs:{href:"https://github.com/SeregaMatin/vue-showcase"}},[r("svg-icon",{staticClass:"svg-icon--size_m button__icon button__icon--left-aligned",attrs:{src:"icomoon.svg#icon-github"}}),t._v("\n        Страница проекта на GitHub\n      ")],1),r("v-button",{staticClass:"application__header-button",on:{click:function(n){return t.showCart()}}},[t._v("\n        Корзина покупок\n        "),r("svg-icon",{staticClass:"svg-icon--size_m button__icon button__icon--right-aligned",attrs:{src:"icomoon.svg#icon-cart"},scopedSlots:t._u([t.cartIsEmpty?null:{key:"badge",fn:function(){return[t._v("\n            "+t._s(t.cartItemsTotalCount)+"\n          ")]},proxy:!0}],null,!0)})],1)],1),r("div",{staticClass:"application__header-bottom-bar"},[r("router-link",{staticClass:"logo application__header-logo",attrs:{to:"/"}},[r("img",{staticClass:"logo__image",attrs:{src:e("a56b"),alt:"Логотип приложения"}}),r("div",{staticClass:"logo__caption"},[t._v("\n            Демонстрационное приложение\n            "),r("br"),t._v("\n            реализованное на Vue.js\n          ")])]),r("div",{staticClass:"navigation application__header-navigation"},[r("router-link",{staticClass:"navigation__tab",attrs:{to:"/","exact-active-class":"navigation__tab--active"}},[t._v("\n          Витрина товаров\n        ")]),r("router-link",{staticClass:"navigation__tab",attrs:{to:"/about","exact-active-class":"navigation__tab--active"}},[t._v("\n          О приложении\n        ")])],1)],1),r("transition",{attrs:{name:"fade"}},[t.errorOccured?r("v-message",{staticClass:"message--error application__header-error-message",on:{close:t.hideError}},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")]):t._e()],1)],1),r("div",{staticClass:"application__content"},[r("router-view")],1),r("div",{staticClass:"application__footer"},[r("router-link",{staticClass:"logo application__footer-logo",attrs:{to:"/"}},[r("img",{staticClass:"logo__image",attrs:{src:e("a56b"),alt:"Логотип приложения"}}),r("div",{staticClass:"logo__caption"},[t._v("\n          Демонстрационное приложение\n          "),r("br"),t._v("\n          реализованное на Vue.js\n        ")])]),r("div",{staticClass:"application__footer-links"},[r("a",{staticClass:"link link--on-surface",attrs:{href:"https://github.com/SeregaMatin"}},[r("svg-icon",{staticClass:"svg-icon--size_m link__icon link__icon--left-aligned",attrs:{src:"icomoon.svg#icon-github"}}),t._v("\n        github.com/SeregaMatin\n      ")],1),r("a",{staticClass:"link link--on-surface",attrs:{href:"https://vk.com/seregamatin"}},[r("svg-icon",{staticClass:"svg-icon--size_m link__icon link__icon--left-aligned",attrs:{src:"icomoon.svg#icon-vk"}}),t._v("\n        vk.com/seregamatin\n      ")],1)]),r("div",{staticClass:"application__footer-contacts"},[r("a",{staticClass:"link link--on-surface typography typography--body1",attrs:{href:"mailto:seregamatin@gmail.com"}},[r("svg-icon",{staticClass:"svg-icon--size_m link__icon link__icon--left-aligned",attrs:{src:"icomoon.svg#icon-mail"}}),t._v("\n        seregamatin@gmail.com\n      ")],1),r("a",{staticClass:"link link--on-surface",attrs:{href:"https://api.whatsapp.com/send?phone=79124923206"}},[r("svg-icon",{staticClass:"svg-icon--size_m link__icon link__icon--left-aligned",attrs:{src:"icomoon.svg#icon-whatsapp"}}),t._v("\n        +7(912)492-32-06\n      ")],1)])],1)],1)},a=[],c=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),s=e("2f62"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cart"},[t.cartIsEmpty?e("not-found",[t._v("\n    К сожалению, ваша корзина покупок пока пуста\n  ")]):e("div",{staticClass:"cart__content"},[e("div",{staticClass:"cart__items"},t._l(t.cartItems,(function(n){return e("div",{key:n.product.id,staticClass:"cart__item"},[e("div",{staticClass:"cart__item-image"},[e("router-link",{staticClass:"link",attrs:{to:{name:"product",params:{id:n.product.id,product:n.product}}},nativeOn:{click:function(n){return t.hideCart()}}},[e("img",{staticClass:"cart__item-image-img",attrs:{src:t.getProductImagePath(n.product,n.product.cover),alt:n.product.name}})])],1),e("div",{staticClass:"cart__item-name"},[e("router-link",{staticClass:"link link--on-background",attrs:{to:{name:"product",params:{id:n.product.id,product:n.product}}},nativeOn:{click:function(n){return t.hideCart()}}},[t._v("\n            "+t._s(n.product.name)+"\n          ")])],1),e("div",{staticClass:"cart__item-quantity"},[e("vue-numeric-input",{staticClass:"cart__item-quantity-input",attrs:{align:"center",value:n.quantity,min:1,max:1e3},on:{input:function(e){return t.changeProductQuantityInCart({product:n.product,newQuantity:e})}},scopedSlots:t._u([{key:"btnDecrement",fn:function(){return[e("svg-icon",{staticClass:"svg-icon--size_s button__icon",attrs:{src:"icomoon.svg#icon-minus"}})]},proxy:!0},{key:"btnIncrement",fn:function(){return[e("svg-icon",{staticClass:"svg-icon--size_s button__icon",attrs:{src:"icomoon.svg#icon-plus"}})]},proxy:!0}],null,!0)})],1),e("div",{staticClass:"cart__item-price"},[t._v("\n          "+t._s(t.getFormattedPrice(n.totalPrice))+" ₽\n          "),e("transition",{attrs:{name:"fade"}},[n.quantity>1?e("div",{staticClass:"cart__item-price-per-single-unit"},[t._v("\n              "+t._s(t.getFormattedPrice(n.product.price))+" ₽ /шт.\n            ")]):t._e()])],1),e("v-button",{staticClass:"cart__item-remove-button button--bezel-less",on:{click:function(e){return t.removeProductFromCart(n.product)}}},[e("svg-icon",{staticClass:"svg-icon--size_m button__icon",attrs:{src:"icomoon.svg#icon-trash"}})],1)],1)})),0),e("div",{staticClass:"cart__summary"},[e("div",{staticClass:"cart__summary-total"},[e("div",{staticClass:"cart__summary-total-caption"},[t._v("\n          Позиций\n        ")]),e("div",{staticClass:"cart__summary-total-value"},[t._v("\n          "+t._s(t.cartItemsTotalCount)+"\n        ")])]),e("div",{staticClass:"cart__summary-total"},[e("div",{staticClass:"cart__summary-total-caption"},[t._v("\n          На сумму\n        ")]),e("div",{staticClass:"cart__summary-total-value"},[t._v("\n          "+t._s(t.getFormattedPrice(t.cartItemsTotalPrice))+" ₽\n        ")])]),e("v-button",{staticClass:"cart__summary-print-button button--secondary",on:{click:function(n){return t.printCart()}}},[e("svg-icon",{staticClass:"svg-icon--size_m button__icon button__icon--left-aligned",attrs:{src:"icomoon.svg#icon-printer"}}),t._v("\n        Распечатать\n      ")],1)],1)])],1)},u=[],d=e("c0e9"),l=e.n(d),f=e("5247"),p=e.n(f),m=e("fa7d"),v=e("be4d"),h=e("0032"),g=e("af5a");function b(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?b(e,!0).forEach((function(n){Object(c["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var y={name:"Cart",components:{NotFound:v["a"],SvgIcon:h["a"],VButton:g["a"],VueNumericInput:p.a},computed:_({},Object(s["c"])("cart",{cartItems:"items",cartItemsTotalCount:"itemsTotalCount",cartItemsTotalPrice:"itemsTotalPrice"}),{},Object(s["b"])("cart",{cartIsEmpty:"isEmpty"})),methods:{removeProductFromCart:function(t){var n=this;return this.$store.dispatch("cart/removeProduct",t).catch((function(t){n.$store.commit("showError",t)}))},changeProductQuantityInCart:function(t){var n=this;return this.$store.dispatch("cart/changeProductQuantity",t).catch((function(t){n.$store.commit("showError",t)}))},getProductImagePath:function(t,n){return this.$store.getters["showcase/productImagePath"](t,n)},getFormattedPrice:function(t){return Object(m["b"])(t)},hideCart:function(){this.$store.commit("cart/hide")},printCart:function(){var t=this,n=this.$el.getElementsByClassName("cart__content")[0],e=n.getBoundingClientRect();l()(n,{windowWidth:e.width,windowHeight:e.height,width:n.scrollWidth,height:n.scrollHeight,scrollX:(1-e.width/window.innerWidth)*e.x,scrollY:(1-e.height/window.innerHeight)*e.y,ignoreElements:function(t){return t.classList.contains("cart__summary-print-button")},onclone:function(t){var n,e=t.getElementsByClassName("cart__content")[0],r=e&&e.getElementsByClassName("cart__item-name"),o=r.length;for(n=0;n<o;n++)r[n].setAttribute("style","display: block;")}}).then((function(t){var n=window.open("","Print-Window");n.document.open(),n.document.write('\n          <html>\n            <body onload="window.print()">\n            </body>\n          </html>'),n.document.body.appendChild(t),n.document.close(),setTimeout((function(){n.close()}))})).catch((function(n){t.$store.commit("showError",n)}))}}},C=y,w=(e("88b7"),e("2877")),P=Object(w["a"])(C,i,u,!1,null,null,null),O=P.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loader"})},k=[],A="body--overflow_hidden",E={name:"VLoader",mounted:function(){document.body.classList.contains(A)||document.body.classList.add(A)},destroyed:function(){document.body.classList.contains(A)&&document.body.classList.remove(A)}},S=E,x=(e("9e3c"),Object(w["a"])(S,j,k,!1,null,"3f789d39",null)),I=x.exports,L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"message"},[t._t("default"),e("svg-icon",{staticClass:"svg-icon--size_s message__close-button",attrs:{src:"icomoon.svg#icon-cross"},nativeOn:{click:function(n){return t.close(n)}}})],2)},T=[],B={name:"VMessage",components:{SvgIcon:h["a"]},methods:{close:function(){this.$emit("close")}}},z=B,F=(e("6b5b"),Object(w["a"])(z,L,T,!1,null,"1ef6d22c",null)),M=F.exports,N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal"},[e("div",{staticClass:"modal__window"},[e("div",{staticClass:"modal__header"},[t._t("header"),e("svg-icon",{staticClass:"svg-icon--size_s modal__close-button",attrs:{src:"icomoon.svg#icon-cross"},nativeOn:{click:function(n){return t.close(n)}}})],2),e("div",{staticClass:"modal__content"},[t._t("default")],2)])])},U=[],V="body--overflow_hidden",Q={name:"VModal",components:{SvgIcon:h["a"]},mounted:function(){document.body.classList.contains(V)||document.body.classList.add(V)},destroyed:function(){document.body.classList.contains(V)&&document.body.classList.remove(V)},methods:{close:function(){this.$emit("close")}}},G=Q,H=(e("d544"),Object(w["a"])(G,N,U,!1,null,"c3d866a2",null)),R=H.exports;function D(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function K(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?D(e,!0).forEach((function(n){Object(c["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):D(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var J={name:"app",components:{Cart:O,SvgIcon:h["a"],VButton:g["a"],VLoader:I,VMessage:M,VModal:R},computed:K({},Object(s["c"])({isLoading:function(t){return t.isLoading}}),{},Object(s["b"])({errorOccured:"errorOccured",errorMessage:"errorMessage"}),{},Object(s["c"])("cart",{cartIsShown:function(t){return t.isShown},cartItemsTotalCount:function(t){return t.itemsTotalCount}}),{},Object(s["b"])("cart",{cartIsEmpty:"isEmpty"})),created:function(){this.hideCart()},methods:{showCart:function(){this.$store.commit("cart/show")},hideCart:function(){this.$store.commit("cart/hide")},hideError:function(){this.$store.commit("hideError")}}},W=J,Y=(e("5c0b"),Object(w["a"])(W,o,a,!1,null,null,null)),X=Y.exports,q=e("8c4f"),$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.hasProducts?e("div",{staticClass:"view view__showcase"},[e("h1",{staticClass:"typography typography--headline1"},[t._v("\n    Витрина товаров\n  ")]),t.productsCount>0&&t.productsCount<=3?e("div",{staticClass:"showcase"},t._l(t.products,(function(t){return e("showcase-product",{key:t.id,staticClass:"showcase__product",attrs:{product:t}})})),1):t.productsCount>3?e("carousel",{staticClass:"showcase showcase--carousel",attrs:{perPage:3,navigationEnabled:!0,paginationEnabled:!1,scrollPerPage:!1,loop:!1},scopedSlots:t._u([{key:"navigationPrevLabel",fn:function(){return[e("svg-icon",{staticClass:"svg-icon--size_m",attrs:{src:"icomoon.svg#icon-chevron-left"}})]},proxy:!0},{key:"navigationNextLabel",fn:function(){return[e("svg-icon",{staticClass:"svg-icon--size_m",attrs:{src:"icomoon.svg#icon-chevron-right"}})]},proxy:!0}],null,!1,2636039012)},t._l(t.products,(function(t){return e("slide",{key:t.id},[e("showcase-product",{staticClass:"showcase__product--slide",attrs:{product:t}})],1)})),1):t._e()],1):e("div",{staticClass:"view view__showcase"},[e("h1",{staticClass:"typography typography--headline1"},[t._v("\n    Витрина товаров\n  ")]),e("not-found",[t._v("\n    К сожалению, на нашей витрине пока отсутствуют товары\n  ")])],1)},Z=[],tt=e("0a63"),nt=e("07a4"),et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"showcase__product"},[e("router-link",{staticClass:"link showcase__product-link",attrs:{to:{name:"product",params:{id:t.product.id,product:t.product}}}},[e("img",{staticClass:"showcase__product-image",attrs:{src:t.getProductImagePath(t.product,t.product.cover),alt:t.product.name}}),e("div",{staticClass:"showcase__product-name"},[t._v("\n      "+t._s(t.product.name)+"\n    ")]),e("div",{staticClass:"showcase__product-price"},[t._v("\n      "+t._s(t.getProductFormattedPrice(t.product))+" ₽\n    ")])]),t.hasProductInCart(t.product)?e("v-button",{staticClass:"showcase__product-cart-button button--bezel-less",on:{click:function(n){return t.removeProductFromCart(t.product)}}},[e("svg-icon",{staticClass:"svg-icon--size_m button__icon",attrs:{src:"icomoon.svg#icon-remove-from-cart"}})],1):e("v-button",{staticClass:"showcase__product-cart-button button--bezel-less",on:{click:function(n){return t.addProductToCart(t.product)}}},[e("svg-icon",{staticClass:"svg-icon--size_m button__icon",attrs:{src:"icomoon.svg#icon-add-to-cart"}})],1)],1)},rt=[],ot={name:"ShowcaseProduct",components:{SvgIcon:h["a"],VButton:g["a"]},props:{product:{type:Object,required:!0}},data:function(){return{publicPath:"/vue-showcase/"}},methods:{addProductToCart:function(t){var n=this;return this.$store.dispatch("cart/addProduct",t).catch((function(t){n.$store.commit("showError",t)}))},removeProductFromCart:function(t){var n=this;return this.$store.dispatch("cart/removeProduct",t).catch((function(t){n.$store.commit("showError",t)}))},hasProductInCart:function(t){return this.$store.getters["cart/hasProduct"](t)},getProductImagePath:function(t,n){return this.$store.getters["showcase/productImagePath"](t,n)},getProductFormattedPrice:function(t){return Object(m["b"])(t.price)}}},at=ot,ct=(e("9697"),Object(w["a"])(at,et,rt,!1,null,"6d3d472b",null)),st=ct.exports,it=function(t){return nt["a"].commit("showLoader"),nt["a"].dispatch("showcase/getRandomProducts",t).catch((function(t){nt["a"].commit("showError",t)})).finally((function(){nt["a"].commit("hideLoader")}))},ut=function(t){var n=t.vm,e=t.products;n.products=e},dt={name:"showcase",components:{NotFound:v["a"],ShowcaseProduct:st,SvgIcon:h["a"],Carousel:tt["Carousel"],Slide:tt["Slide"]},data:function(){return{publicPath:"/vue-showcase/",products:null}},computed:{hasProducts:function(){return!!this.products&&!Object(m["e"])(this.products)},productsCount:function(){return this.products?Object.keys(this.products).length:0}},beforeRouteEnter:function(t,n,e){var r=Object(m["c"])(1,10);it(r).then((function(t){e((function(n){return ut({vm:n,products:t})}))})).catch((function(t){e(!1)}))},beforeRouteUpdate:function(t,n,e){var r=this,o=Object(m["c"])(1,10);it(o).then((function(t){ut({vm:r,products:t}),e()})).catch((function(t){e(!1)}))}},lt=dt,ft=(e("faea"),Object(w["a"])(lt,$,Z,!1,null,null,null)),pt=ft.exports;r["a"].use(q["a"]);var mt=new q["a"]({routes:[{path:"/",name:"showcase",component:pt},{path:"/about",name:"about",component:function(){return e.e("chunk-493b2716").then(e.bind(null,"f820"))}},{path:"/product/:id",name:"product",component:function(){return e.e("chunk-cdd16a0a").then(e.bind(null,"d2f1"))}},{path:"*",name:"pageNotFound",component:function(){return e.e("chunk-2d208bfd").then(e.bind(null,"a5b5"))}}],scrollBehavior:function(t,n,e){return{x:0,y:0}}});r["a"].config.productionTip=!1,new r["a"]({router:mt,store:nt["a"],render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var r=e("e332"),o=e.n(r);o.a},"67f7":function(t,n,e){var r={"./icomoon.svg":"2e08"};function o(t){var n=a(t);return e(n)}function a(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="67f7"},"6b5b":function(t,n,e){"use strict";var r=e("8b1b"),o=e.n(r);o.a},"88b7":function(t,n,e){"use strict";var r=e("1c4d"),o=e.n(r);o.a},"8b1b":function(t,n,e){},9224:function(t){t.exports=JSON.parse('{"a":"0.2.0"}')},"959e":function(t,n,e){},9697:function(t,n,e){"use strict";var r=e("5609"),o=e.n(r);o.a},"9e3c":function(t,n,e){"use strict";var r=e("16ac"),o=e.n(r);o.a},a56b:function(t,n){t.exports="data:image/png;base64,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"},af5a:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",t._g({class:["button",{"button--loading":t.isLoading}],attrs:{href:t.href,role:t.href?"link":"button"}},t.listeners),[t._t("default")],2)},o=[],a=(e("8e6e"),e("ac6a"),e("456d"),e("bd86"));function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(e,!0).forEach((function(n){Object(a["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var i={name:"VButton",props:{href:{type:String,default:null}},data:function(){return{isLoading:!1}},computed:{listeners:function(){return s({},this.$listeners,{click:this.onClick})}},methods:{onClick:function(t){var n=this,e=this.$listeners.click;if("function"===typeof e){var r=e(t);r&&"function"===typeof r.finally&&(this.isLoading=!0,r.finally((function(){n.isLoading=!1})))}}}},u=i,d=(e("4bdd"),e("2877")),l=Object(d["a"])(u,r,o,!1,null,"70c03280",null);n["a"]=l.exports},be4d:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"not-found"},[r("img",{staticClass:"not-found__image",attrs:{src:e("5233")}}),r("div",{staticClass:"not-found__message"},[t._t("default",[t._v("\n      К сожалению, запрашиваемая страница не найдена\n    ")])],2)])},o=[],a={name:"NotFound"},c=a,s=(e("c025"),e("2877")),i=Object(s["a"])(c,r,o,!1,null,"b4deaa7e",null);n["a"]=i.exports},c025:function(t,n,e){"use strict";var r=e("959e"),o=e.n(r);o.a},c218:function(t,n,e){},d544:function(t,n,e){"use strict";var r=e("ec2b"),o=e.n(r);o.a},e332:function(t,n,e){},ec2b:function(t,n,e){},f5ba:function(t,n,e){},fa7d:function(t,n,e){"use strict";e.d(n,"e",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return c})),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return u}));e("a481"),e("28a5"),e("8615"),e("ac6a"),e("456d"),e("55dd");var r=function(t){var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0},o=function(t,n){var e=Math.ceil(t),r=Math.floor(n);return Math.floor(Math.random()*(r-e+1))+e},a=function(t,n){var e=[];return!Array.isArray(t)||n<=0?e:t.sort((function(){return Math.random()-Math.random()})).slice(0,n)},c=function(t,n){var e=[];if(r(t)||n<=0)return e;var o=a(Object.keys(t),n);return o.forEach((function(n){var r=t[n];e.push(r)})),e},s=function(t,n){var e,r={};if(!Array.isArray(t))return r;var o=t.length;for(e=0;e<o;e++){var a=t[e],c="".concat(a[n]);r[c]=a}return r},i=function(t){var n=t.number,e=t.thousandsSeparator,r=void 0===e?",":e,o="".concat(n).split(".");return o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,r),o.join(".")},u=function(t){var n={number:t,thousandsSeparator:" "};return i(n)}},faea:function(t,n,e){"use strict";var r=e("c218"),o=e.n(r);o.a}});
//# sourceMappingURL=app.8e7f6a47.js.map