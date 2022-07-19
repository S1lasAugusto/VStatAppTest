(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voltametria-voltametria-module"],{

/***/ "Aibk":
/*!***************************************************!*\
  !*** ./src/app/voltametria/voltametria.module.ts ***!
  \***************************************************/
/*! exports provided: VoltametriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoltametriaPageModule", function() { return VoltametriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _voltametria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voltametria-routing.module */ "lObG");
/* harmony import */ var _voltametria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voltametria.page */ "jSzD");







let VoltametriaPageModule = class VoltametriaPageModule {
};
VoltametriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _voltametria_routing_module__WEBPACK_IMPORTED_MODULE_5__["VoltametriaPageRoutingModule"]
        ],
        declarations: [_voltametria_page__WEBPACK_IMPORTED_MODULE_6__["VoltametriaPage"]]
    })
], VoltametriaPageModule);



/***/ }),

/***/ "jSzD":
/*!*************************************************!*\
  !*** ./src/app/voltametria/voltametria.page.ts ***!
  \*************************************************/
/*! exports provided: VoltametriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoltametriaPage", function() { return VoltametriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_voltametria_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./voltametria.page.html */ "ly0x");
/* harmony import */ var _voltametria_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voltametria.page.scss */ "rAO+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let VoltametriaPage = class VoltametriaPage {
    constructor(router) {
        this.router = router;
        this.params = {
            op: 'DPV',
            fEsc: "5",
            pIni: -0.6,
            pFim: 0.0,
            pPas: 0.005,
            pPul: 0.01,
            tPul: 0.01,
            tPas: 0.025,
            tEqu: 5,
            nome: "",
            cpf: "",
            idade: '',
            peso: '',
        };
        this.estimatedParams = {
            sRat: Math.round((this.params.pPas / this.params.tPas) * 10) / 10,
            nPnt: Math.round(Math.abs(this.params.pFim - this.params.pIni) / this.params.pPas),
            tEst: Math.abs(this.params.pFim - this.params.pIni) / (this.params.pPas / this.params.tPas)
        };
    }
    goToChart() {
        const navigationExtras = {
            state: {
                params: Object.assign(Object.assign({}, this.params), this.estimatedParams)
            }
        };
        this.router.navigate(['/chart'], navigationExtras);
    }
};
VoltametriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
VoltametriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-voltametria',
        template: _raw_loader_voltametria_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_voltametria_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VoltametriaPage);



/***/ }),

/***/ "lObG":
/*!***********************************************************!*\
  !*** ./src/app/voltametria/voltametria-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VoltametriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoltametriaPageRoutingModule", function() { return VoltametriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _voltametria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voltametria.page */ "jSzD");




const routes = [
    {
        path: '',
        component: _voltametria_page__WEBPACK_IMPORTED_MODULE_3__["VoltametriaPage"]
    }
];
let VoltametriaPageRoutingModule = class VoltametriaPageRoutingModule {
};
VoltametriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VoltametriaPageRoutingModule);



/***/ }),

/***/ "ly0x":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voltametria/voltametria.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\" color=\"light\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\">\n        <ion-icon  slot=\"icon-only\" name=\"location-outline\" style=\"color: #000;\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon  slot=\"icon-only\" name=\"battery-full-outline\" style=\"color: #000;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\" style=\"color: #000;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Análise\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"success\">\n  <ion-item class=\"item-padding\">\n    <ion-label>Process (required)</ion-label>\n    <ion-select [(ngModel)]=\"params.op\">\n      <ion-select-option value=\"DPV\">DPV</ion-select-option>\n      <ion-select-option value=\"Hibridização\">Hibridização</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>(optional data)</ion-card-subtitle>\n      <ion-card-title>Patient Data</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Nome</ion-label>\n        <ion-input [(ngModel)]=\"params.nome\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">CPF</ion-label>\n        <ion-input [(ngModel)]=\"params.cpf\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Idade</ion-label>\n        <ion-input [(ngModel)]=\"params.idade\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Peso (Kg)</ion-label>\n        <ion-input [(ngModel)]=\"params.peso\"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-button expand=\"block\" color=\"warning\" (click)=\"goToChart()\">CONFIRM PROCESS\n        <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "rAO+":
/*!***************************************************!*\
  !*** ./src/app/voltametria/voltametria.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2x0YW1ldHJpYS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=voltametria-voltametria-module.js.map