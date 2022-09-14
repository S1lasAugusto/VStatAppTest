(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hibridizacao-hibridizacao-module"],{

/***/ "EZH7":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hibridizacao/hibridizacao.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"goToChart()\">\r\n        <ion-icon slot=\"icon-only\" name=\"analytics-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Hibridização\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-item class=\"item-padding\">\r\n    <ion-label position=\"stacked\">Temperatura Alvo(°C)</ion-label>\r\n    <ion-input [(ngModel)]=\"params.sTmp\"></ion-input>\r\n  </ion-item>\r\n  <ion-item class=\"item-padding\">\r\n    <ion-label position=\"stacked\">Duração (min)</ion-label>\r\n    <ion-input [(ngModel)]=\"params.dTim\"></ion-input>\r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Ip9P":
/*!*****************************************************!*\
  !*** ./src/app/hibridizacao/hibridizacao.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-color-background: #21e84c;\n  --ion-color-background-rgb: 33,232,76;\n  --ion-color-background-contrast: #000000;\n  --ion-color-background-contrast-rgb: 0,0,0;\n  --ion-color-background-shade: #1dcc43;\n  --ion-color-background-tint: #37ea5e;\n}\n\n.ion-color-background {\n  --ion-color-base: var(--ion-color-background);\n  --ion-color-base-rgb: var(--ion-color-background-rgb);\n  --ion-color-contrast: var(--ion-color-background-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-background-contrast-rgb);\n  --ion-color-shade: var(--ion-color-background-shade);\n  --ion-color-tint: var(--ion-color-background-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhpYnJpZGl6YWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7QUFDRDs7QUFFQTtFQUNDLDZDQUFBO0VBQ0EscURBQUE7RUFDQSwwREFBQTtFQUNBLGtFQUFBO0VBQ0Esb0RBQUE7RUFDQSxrREFBQTtBQUNEIiwiZmlsZSI6ImhpYnJpZGl6YWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcblx0LS1pb24tY29sb3ItYmFja2dyb3VuZDogIzIxZTg0YztcclxuXHQtLWlvbi1jb2xvci1iYWNrZ3JvdW5kLXJnYjogMzMsMjMyLDc2O1xyXG5cdC0taW9uLWNvbG9yLWJhY2tncm91bmQtY29udHJhc3Q6ICMwMDAwMDA7XHJcblx0LS1pb24tY29sb3ItYmFja2dyb3VuZC1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG5cdC0taW9uLWNvbG9yLWJhY2tncm91bmQtc2hhZGU6ICMxZGNjNDM7XHJcblx0LS1pb24tY29sb3ItYmFja2dyb3VuZC10aW50OiAjMzdlYTVlO1xyXG59XHJcblxyXG4uaW9uLWNvbG9yLWJhY2tncm91bmQge1xyXG5cdC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kKTtcclxuXHQtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtcmdiKTtcclxuXHQtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtY29udHJhc3QpO1xyXG5cdC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtY29udHJhc3QtcmdiKTtcclxuXHQtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cdC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kLXRpbnQpO1xyXG59Il19 */");

/***/ }),

/***/ "aN35":
/*!*************************************************************!*\
  !*** ./src/app/hibridizacao/hibridizacao-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HibridizacaoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HibridizacaoPageRoutingModule", function() { return HibridizacaoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _hibridizacao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hibridizacao.page */ "lZpH");




const routes = [
    {
        path: '',
        component: _hibridizacao_page__WEBPACK_IMPORTED_MODULE_3__["HibridizacaoPage"]
    }
];
let HibridizacaoPageRoutingModule = class HibridizacaoPageRoutingModule {
};
HibridizacaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HibridizacaoPageRoutingModule);



/***/ }),

/***/ "er8Z":
/*!*****************************************************!*\
  !*** ./src/app/hibridizacao/hibridizacao.module.ts ***!
  \*****************************************************/
/*! exports provided: HibridizacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HibridizacaoPageModule", function() { return HibridizacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _hibridizacao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hibridizacao-routing.module */ "aN35");
/* harmony import */ var _hibridizacao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hibridizacao.page */ "lZpH");







let HibridizacaoPageModule = class HibridizacaoPageModule {
};
HibridizacaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _hibridizacao_routing_module__WEBPACK_IMPORTED_MODULE_5__["HibridizacaoPageRoutingModule"]
        ],
        declarations: [_hibridizacao_page__WEBPACK_IMPORTED_MODULE_6__["HibridizacaoPage"]]
    })
], HibridizacaoPageModule);



/***/ }),

/***/ "lZpH":
/*!***************************************************!*\
  !*** ./src/app/hibridizacao/hibridizacao.page.ts ***!
  \***************************************************/
/*! exports provided: HibridizacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HibridizacaoPage", function() { return HibridizacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hibridizacao_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hibridizacao.page.html */ "EZH7");
/* harmony import */ var _hibridizacao_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hibridizacao.page.scss */ "Ip9P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let HibridizacaoPage = class HibridizacaoPage {
    constructor(router) {
        this.router = router;
        this.params = {
            op: "HBZ",
            sTmp: "40",
            dTim: "10"
        };
    }
    goToChart() {
        const navigationExtras = {
            state: {
                params: this.params
            }
        };
        this.router.navigate(['/chart'], navigationExtras);
    }
};
HibridizacaoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HibridizacaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hibridizacao',
        template: _raw_loader_hibridizacao_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hibridizacao_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HibridizacaoPage);



/***/ })

}]);
//# sourceMappingURL=hibridizacao-hibridizacao-module.js.map