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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ReportsPage = class ReportsPage {
    constructor(alertController) {
        this.alertController = alertController;
        this.reports = [];
    }
    ngOnInit() {
        let reportJson = localStorage.getItem('reportDB');
        if (reportJson != null) {
            this.reports = JSON.parse(reportJson);
        }
    }
    delete(report) {
        let id = report.id;
        let toKeep = [];
        for (let i of this.reports) {
            if (i.id !== id) {
                toKeep.push(i);
            }
        }
        this.reports = toKeep;
        localStorage.setItem('reportDB', JSON.stringify(this.reports));
    }
    viewReport(report) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                mode: 'ios',
                header: 'Report View',
                subHeader: 'ID:' + report.id,
                message: '-----------------------//----------------------- ' + '<br>' +
                    '<strong>Operator:<strong> ' + report.nameOperator + '<br>' +
                    'N° Register: ' + report.registerOperator + '<br>' +
                    '-----------------------//----------------------- ' + '<br>' +
                    'Patient´s Name: ' + report.namePatient + '<br>' +
                    'CPF: ' + report.cpfPatient + '<br>' +
                    'Patient Age: ' + report.agePatient + '<br>' +
                    'Patient Weight: ' + report.weightPatient + '<br>' +
                    '-----------------------//----------------------- ' +
                    'Latitude: ' + report.latitude + '<br>' +
                    'Longitude: ' + report.longitude + '<br>' +
                    '-----------------------//----------------------- ' +
                    'Country Code: ' + report.countryCode + '<br>' +
                    'Country Name: ' + report.countryName + '<br>' +
                    'Postal Code: ' + report.postalCode + '<br>' +
                    'Administrative Area: ' + report.administrativeArea + '<br>' +
                    'Sub Administrative: ' + report.subAdministrativeArea + '<br>' +
                    'Sub Locality: ' + report.subLocality + '<br>' +
                    'Thoroughfare: ' + report.thoroughfare + '<br>' +
                    'subThoroughfare: ' + report.subThoroughfare + '<br>',
                buttons: ['OK'],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
ReportsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"light\" collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button style=\"color: #000;\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Reports\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"tertiary\">\r\n  <ion-card>\r\n    <ion-list lines=\"full\" mode=\"ios\" class=\"animated bounceInUp\">\r\n      <ion-item-sliding *ngFor=\"let report of reports\">\r\n        <ion-item>\r\n          <ion-icon name=\"document-outline\" slot=\"end\"></ion-icon>\r\n          <ion-label>Report Date:<br> {{ report.currentData }}\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item-options>\r\n          <ion-item-option color=\"secondary\" expandable (click)=\"viewReport(report)\">\r\n            <ion-icon slot=\"bottom\" name=\"eye-outline\"></ion-icon>\r\n            VIEW\r\n          </ion-item-option>\r\n          <ion-item-option color=\"danger\" expandable (click)=\"delete(report)\">\r\n            <ion-icon name='trash' slot=\"bottom\"></ion-icon>\r\n            DELETE\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-card>\r\n</ion-content>");

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