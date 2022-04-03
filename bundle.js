(()=>{"use strict";var e=[];function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers=n}var n,r;return n=e,(r=[{key:"_makeRequest",value:function(e){return e.then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))}},{key:"get",value:function(){var e=fetch(this._url,{method:"GET",headers:this._headers});return this._makeRequest(e)}},{key:"patch",value:function(e){var t=fetch(this._url,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)});return this._makeRequest(t)}},{key:"avatar",value:function(e){}},{key:"post",value:function(e){var t=fetch(this._url,{method:"POST",headers:this._headers,body:JSON.stringify(e)});return this._makeRequest(t)}},{key:"delete",value:function(e){var t=this._url+"/"+e,n=fetch(t,{method:"DELETE",headers:this._headers});return this._makeRequest(n)}},{key:"like",value:function(e){var t=this._url+"/"+e+"/likes",n=fetch(t,{method:"PUT",headers:this._headers});return this._makeRequest(n)}},{key:"dislike",value:function(e){var t=this._url+"/"+e+"/likes",n=fetch(t,{method:"DELETE",headers:this._headers});return this._makeRequest(n)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),r="popup_status_opened",o={templateSelector:"#element",templateClassName:".element"},i={inputSelector:".form__field",buttonElement:".form__button",inactiveButtonClass:"form__button_status_inactive",inputErrorClass:"form__field_type_error",errorClass:"form__input-error_active"},a=document.querySelector(".elements"),u=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__frame"),l=document.querySelector(".profile__name"),f=document.querySelector(".profile__description"),p=document.querySelector(".profile__avatar"),_=document.querySelector(".popup_type_profile").querySelector(".form"),h=document.querySelector(".popup_type_card-add").querySelector(".form"),y=document.querySelector(".popup__type_avatar_edit").querySelector(".form"),v={Accept:"Application/json","Content-Type":"Application/json",authorization:"1478eacc-254a-456a-9432-9f80e3ac7fe8"},m=new n("https://nomoreparties.co/v1/cohort-38/users/me",v),d=new n("https://mesto.nomoreparties.co/v1/cohort-38/users/me",v),b=new n("https://mesto.nomoreparties.co/v1/cohort-38/cards",v),g=new n("https://mesto.nomoreparties.co/v1/cohort-38/users/me/avatar",v);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"rendererItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"setItem",value:function(e){this._container.append(e)}},{key:"prepend",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._image=t.link,this._templateSelector=n.templateSelector,this._templateClassName=n.templateClassName,this._openPopupFunction=r,this._openAlertFunction=o,this._userId=i}var t,n;return t=e,(n=[{key:"generateCard",value:function(){this._element=this._getTemplate().cloneNode(!0),this._setEventListeners(),this._element.querySelector(".element__name").textContent=this._name;var e=this._element.querySelector(".element__picture");return e.src=this._image,e.alt=this._name,this._setLikesQuantity(this._data.likes.length),this._activateBin(),this._checkIsItMyLike()&&this._element.querySelector(".element__like").classList.add("element__like_state_active"),this._element}},{key:"getCardId",value:function(){return this._data._id}},{key:"deleteElement",value:function(){this._element.remove()}},{key:"_checkIsItMyLike",value:function(){var e=this,t=!1;return this._data.likes.forEach((function(n){n._id===e._userId&&(t=!0)})),t}},{key:"_setLikesQuantity",value:function(e){this._element.querySelector(".element__quantity").textContent=e}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(this._templateClassName)}},{key:"_setEventListeners",value:function(){var e,t=this;this._element.querySelector(".element__picture").addEventListener("click",(function(){t._openPopupFunction(t._image,t._name)})),this._element.querySelector(".element__like").addEventListener("click",(e=this,function(t){t.target.classList.contains("element__like_state_active")?b.dislike(e.getCardId()).then((function(t){e._setLikesQuantity(t.likes.length)})).catch((function(e){alert(e)})):b.like(e.getCardId()).then((function(t){e._setLikesQuantity(t.likes.length)})).catch((function(e){alert(e)})),t.target.classList.toggle("element__like_state_active")})),this._element.querySelector(".element__bin").addEventListener("click",(function(){t._openAlertFunction(t)}))}},{key:"_toggleLike",value:function(){this._element.querySelector(".element__like").classList.add("element__like_state_active")}},{key:"_activateBin",value:function(){this._data.owner._id===this._userId&&this._element.querySelector(".element__bin").classList.add("element__bin_state_visible")}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(r),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(r),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains(r)||t.target.classList.contains("popup__close"))&&e.close()}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function T(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFunction=t,n._submitText=n._popup.querySelector(".form__button").innerHTML,n}return t=a,n=[{key:"setEventListeners",value:function(){var e=this;P(R(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunction(e._getInputValues())}))}},{key:"setInputValues",value:function(e){this._inputList=this._popup.querySelectorAll(".form__field"),this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){this._popup.querySelector(".form").reset(),P(R(a.prototype),"close",this).call(this)}},{key:"toggleButtonText",value:function(){this._popup.querySelector(".form__button").innerText===this._submitText?this._popup.querySelector(".form__button").innerText="Сохранение...":this._popup.querySelector(".form__button").innerText=this._submitText}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".form__field"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}}],n&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function U(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imgViewPicture=t._popup.querySelector(".view__picture"),t._strViewName=t._popup.querySelector(".view__description"),t}return t=a,(n=[{key:"open",value:function(e,t){this._imgViewPicture.src=e,this._imgViewPicture.alt=t,this._strViewName.textContent=t,A(F(a.prototype),"open",this).call(this)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=z(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},J.apply(this,arguments)}function z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}function K(e,t){if(t&&("object"===Q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(r);if(o){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return K(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFunction=t,n}return t=a,(n=[{key:"open",value:function(e){this._obj=e,J(W(a.prototype),"open",this).call(this)}},{key:"close",value:function(){this._popup.querySelector(".form").reset(),J(W(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;J(W(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunction(e._getInputValues()),e.close()}))}},{key:"_getInputValues",value:function(){return this._obj}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Z(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),Z(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),Z(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),Z(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._validate(e)}))}))})),Z(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),Z(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():r._enableSubmitButton()})),Z(this,"_howInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),Z(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),this._inputSelector=t.inputSelector,this._buttonElement=n.querySelector(t.buttonElement),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"disableSubmitButton",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"renewValidator",value:function(){var e=this;this._inputList.forEach((function(t){e._validate(t)}))}},{key:"_validate",value:function(e){this._isValid(e),this._toggleButtonState()}},{key:"_enableSubmitButton",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass)}}])&&Y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var te,ne=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._aimName=t,this._aimDescription=n,this._aimAvatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{strName:this._aimName.textContent,strDescription:this._aimDescription.textContent,strAvatar:this._aimAvatar.src}}},{key:"getUserId",value:function(){return this._data._id}},{key:"setUserInfoNotUsed",value:function(e){var t=e.strName,n=e.strDescription;this._aimName.textContent=t,this._aimDescription.textContent=n}},{key:"setUserInfo",value:function(e){this._data=e,this._aimName.textContent=e.name,this._aimDescription.textContent=e.about,this._aimAvatar.src=e.avatar}},{key:"setAvatar",value:function(e){this._aimAvatar.src=e}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),re=new $(i,_);re.enableValidation();var oe=new $(i,h);oe.enableValidation();var ie=new $(i,y);ie.enableValidation();{var ae=new x(".popup__type_avatar_edit",de);ae.setEventListeners(),c.addEventListener("click",(function(){ae.setInputValues(se.getUserInfo()),ie.renewValidator(),ae.open()}));var ue=new x(".popup_type_profile",he);ue.setEventListeners();var se=new ne(l,f,p);u.addEventListener("click",(function(){ue.setInputValues(se.getUserInfo()),re.renewValidator(),ue.open()})),m.get().then((function(e){se.setUserInfo(e)})).then((function(){b.get().then((function(t){return t.forEach((function(t){e.push(t)})),e})).then((function(e){(te=new k({data:e,renderer:function(e){var t=ye(e);te.setItem(t)}},a)).rendererItems()})).catch((function(e){alert(e)}))})).catch((function(e){alert(e)}));var ce=new x(".popup_type_card-add",ve);ce.setEventListeners(),s.addEventListener("click",(function(){oe.renewValidator(),ce.open()}));var le=new M(".popup_type_picture");le.setEventListeners();var fe=function(e,t){le.open(e,t)};function he(e){d.patch({name:e.strName,about:e.strDescription}).then((function(e){ue.toggleButtonText(),se.setUserInfo(e)})).then((function(){ue.toggleButtonText(),ue.close()})).catch((function(e){alert(e)}))}function ye(e){return new S(e,o,fe,_e,se.getUserId()).generateCard()}function ve(e){b.post({name:e.strName,link:e.strDescription}).then((function(e){ce.toggleButtonText();var t=ye(e);te.prepend(t),oe.disableSubmitButton()})).then((function(){ce.toggleButtonText(),ce.close()})).catch((function(e){alert(e)}))}var pe=new X(".popup_type_alert",me);pe.setEventListeners();var _e=function(e){pe.open(e)};function me(e){b.delete(e.getCardId()).then((function(){e.deleteElement()})).catch((function(e){alert(e)}))}function de(e){g.patch({avatar:e.strAvatar}).then((function(e){ae.toggleButtonText(),se.setAvatar(e.avatar)})).then((function(){ae.toggleButtonText(),ae.close()})).catch((function(e){alert(e)}))}}})();