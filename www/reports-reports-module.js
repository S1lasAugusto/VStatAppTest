(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "N1RA":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Ow1S":
/*!*****************************************!*\
  !*** ./src/app/reports/reports.page.ts ***!
  \*****************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reports_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reports.page.html */ "WQWT");
/* harmony import */ var _reports_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.page.scss */ "N1RA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReportsPage = class ReportsPage {
    constructor() { }
    ngOnInit() {
    }
};
ReportsPage.ctorParameters = () => [];
ReportsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reports',
        template: _raw_loader_reports_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reports_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportsPage);



/***/ }),

/***/ "WQWT":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"light\" collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #000;\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Reports\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "fh+f":
/*!***************************************************!*\
  !*** ./src/app/reports/reports-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageRoutingModule", function() { return ReportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.page */ "Ow1S");




const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_3__["ReportsPage"]
    }
];
let ReportsPageRoutingModule = class ReportsPageRoutingModule {
};
ReportsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportsPageRoutingModule);



/***/ }),

/***/ "uHdG":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports-routing.module */ "fh+f");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.page */ "Ow1S");







let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportsPageRoutingModule"]
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]]
    })
], ReportsPageModule);



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map