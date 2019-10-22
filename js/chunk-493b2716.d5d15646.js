(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-493b2716"],{e9ad:function(n,t,i){},f26d:function(n,t,i){"use strict";var l=i("e9ad"),a=i.n(l);a.a},f820:function(n,t,i){"use strict";i.r(t);var l=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},a=[function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"view view__about"},[i("h1",{staticClass:"typography typography--headline1"},[n._v("\n    О приложении\n  ")]),i("div",{staticClass:"about"},[n._v("\n    Приложение представляет из себя витрину товаров, которая получает данные о товарах из JSON-файла.\n    "),i("br"),n._v("\n\n    JSON-файл содержит массив имеющихся товаров, для каждого из которых задан следующий набор полей:\n    "),i("ul",[i("li",[n._v("\n        id - идентификатор товара;\n      ")]),i("li",[n._v("\n        name - наименование товара;\n      ")]),i("li",[n._v("\n        description - описание товара;\n      ")]),i("li",[n._v("\n        price - цена товара;\n      ")]),i("li",[n._v("\n        cover - имя файла изображения, являющегося обложкой товара;\n      ")]),i("li",[n._v("\n        images - массив, содержащий все имена файлов с изображениями товара (файлы изображений, как и сам JSON-файл должны располагаться локально).\n      ")])]),n._v("\n\n    Получив данные из JSON-файла витрина случайным образом отображает до 10 товаров, т.е. может быть и 1 товар, и 2, и 3..., и 10,\n    и это происходит каждый раз, когда пользователь открывает витрину.\n    "),i("br"),n._v("\n    При этом витрина подстраивается под количество отображаемых товаров:\n    "),i("ul",[i("li",[n._v("\n        Если товар один, то блок товара растягивается на всю страницу;\n      ")]),i("li",[n._v("\n        Если товаров два или три, то блоки товаров отображаются несколькими колонками;\n      ")]),i("li",[n._v("\n        Если же товаров больше трёх, то блоки товаров отображаются слайдером с прокруткой;\n      ")])]),n._v("\n\n    Каждый блок товара на витрине удовлетворяет следующим требованиям:\n    "),i("ul",[i("li",[n._v("\n        В блоке отображается обложка товара;\n      ")]),i("li",[n._v("\n        Его наименование;\n      ")]),i("li",[n._v("\n        И цена;\n      ")]),i("li",[n._v("\n        При клике на товар осуществляется переход из витрины к карточке товара;\n      ")]),i("li",[n._v("\n        Также имеется возможность добавления товара в корзину и удаления из корзины.\n      ")])]),n._v("\n\n    Карточка товара является отдельной страницей приложения, которая помимо перечисленных выше требований удовлетворяет еще нескольким:\n    "),i("ul",[i("li",[n._v("\n        Карточка товара содержит еще и его описание;\n      ")]),i("li",[n._v("\n        А также все доступные изображения товара;\n      ")]),i("li",[n._v("\n        Из карточки товара есть возможность его добавления в корзину, и удаления из корзины.\n      ")])]),n._v("\n\n    У пользователя приложения есть возможность открыть корзину как со страницы витрины товаров, так и из карточки товара.\n    "),i("br"),n._v("\n    При этом корзина соответствует своим требованиям:\n    "),i("ul",[i("li",[n._v("\n        Она открывается в модальном окне;\n      ")]),i("li",[n._v("\n        Отображает все добавленные позиции, с их обложками, наименованием и ценой, а также общую стоимость всех позиций;\n      ")]),i("li",[n._v("\n        По каждой позиции есть возможность изменение количества единиц заказанной позиции, и возможность её удаления из корзины;\n      ")]),i("li",[n._v("\n        Из корзины есть возможность распечатать все добавленные позиции;\n      ")]),i("li",[n._v("\n        И наконец есть возможность закрытия модального окна корзины;\n      ")]),i("li",[n._v("\n        Кроме того состояние корзины сохраняется в localStorage, чтобы добавленные позиции не терялись,\n        когда пользователь закрывает приложение и возвращается спустя какое-то время.\n        Предусмотрена и очистка устаревших данных из localStorage, чтобы они не мешали нормальной работе приложения при его обновлениях.\n      ")])]),n._v("\n\n    Приложение реализовано на single-page framework-е "),i("a",{staticClass:"link",attrs:{href:"https://vuejs.org/"}},[n._v("Vue.js")]),n._v(".\n    "),i("br"),n._v("\n    Работа с состоянием реализована через "),i("a",{staticClass:"link",attrs:{href:"https://vuex.vuejs.org/"}},[n._v("Vuex")]),n._v(" - это реализация\n    "),i("a",{staticClass:"link",attrs:{href:"https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/"}},[n._v("Flux")]),n._v("\n    для "),i("a",{staticClass:"link",attrs:{href:"https://vuejs.org/"}},[n._v("Vue.js")]),n._v(".\n    "),i("br"),n._v("\n    Приложение свёрстано под разрешение 1280x800 (адаптивная вёрстка не требовалась).\n  ")])])}],v={name:"about"},e=v,s=(i("f26d"),i("2877")),_=Object(s["a"])(e,l,a,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-493b2716.d5d15646.js.map