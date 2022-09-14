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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let VoltametriaPage = class VoltametriaPage {
    constructor(router, alertController, toastController) {
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.operators = [];
        this.iconViews = {
            operatorsIcon: 'people-circle-outline'
        };
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
        };
        this.patientParams = {
            nome: "",
            cpf: "",
            idade: '',
            peso: '',
        };
        this.currentUser = {
            name: "Default",
            registerOperator: "0000",
        };
        this.estimatedParams = {
            sRat: Math.round((this.params.pPas / this.params.tPas) * 10) / 10,
            nPnt: Math.round(Math.abs(this.params.pFim - this.params.pIni) / this.params.pPas),
            tEst: Math.abs(this.params.pFim - this.params.pIni) / (this.params.pPas / this.params.tPas)
        };
        let operatorsJson = localStorage.getItem('operatorDB');
        let currentUserJson = localStorage.getItem('currentUserDB');
        if (operatorsJson != null) {
            this.operators = JSON.parse(operatorsJson);
        }
        if (currentUserJson != null) {
            this.currentUser = JSON.parse(currentUserJson);
        }
    }
    operatorsView(view) {
        this.iconViews[view] === 'people-circle' ?
            this.iconViews[view] = 'people-circle-outline' :
            this.iconViews[view] = 'people-circle';
    }
    addOperator() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Fill in operator information!',
                inputs: [
                    {
                        name: 'nameOperator',
                        type: 'text',
                        placeholder: 'Name',
                    },
                    {
                        name: 'registerOperator',
                        type: 'text',
                        id: 'name2-id',
                        placeholder: 'Registration Number',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        },
                    },
                    {
                        text: 'Ok',
                        handler: (form) => {
                            let operator = { name: form.nameOperator, registerOperator: form.registerOperator };
                            this.add(operator);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    add(operator) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (operator.name.trim().length < 1 || operator.registerOperator.trim().length < 1) {
                const toast = yield this.toastController.create({
                    message: "Fill in the fields correctly!",
                    duration: 2000,
                    position: 'middle',
                });
                toast.present();
                return;
            }
            else {
                this.operators.push(operator);
                this.updateLocalStorage();
            }
        });
    }
    goToChart() {
        if (this.patientParams.nome == '' || this.patientParams.cpf == '' || this.patientParams.idade == '' || this.patientParams.peso == '') {
            this.presentAlertConfirm();
        }
        else {
            const navigationExtras = {
                state: {
                    params: Object.assign(Object.assign(Object.assign(Object.assign({}, this.params), this.estimatedParams), this.patientParams), this.currentUser)
                }
            };
            this.router.navigate(['/chart'], navigationExtras);
        }
    }
    updateLocalStorage() {
        localStorage.setItem('operatorDB', JSON.stringify(this.operators));
    }
    delete(operator) {
        this.operators = this.operators.filter(operatorArray => operator != operatorArray);
        this.updateLocalStorage();
    }
    setCurrentUser(operator) {
        this.currentUser = operator;
        localStorage.setItem('currentUserDB', JSON.stringify(this.currentUser));
        this.iconViews.operatorsIcon = 'people-circle-outline';
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Some patient information was not filled in!',
                message: '<strong> Continue ?</strong>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        },
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                            if (this.patientParams.nome == '') {
                                this.patientParams.nome = 'Not Provided';
                            }
                            if (this.patientParams.cpf == '') {
                                this.patientParams.cpf = 'Not Provided';
                            }
                            if (this.patientParams.idade == '') {
                                this.patientParams.idade = 'Not Provided';
                            }
                            if (this.patientParams.peso == '') {
                                this.patientParams.peso = 'Not Provided';
                            }
                            console.log('Confirm Okay');
                            const navigationExtras = {
                                state: {
                                    params: Object.assign(Object.assign(Object.assign(Object.assign({}, this.params), this.estimatedParams), this.patientParams), this.currentUser)
                                }
                            };
                            this.router.navigate(['/chart'], navigationExtras);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
VoltametriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color=\"light\" collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"operatorsView('operatorsIcon')\" shape=\"round\" fill=\"clear\" size=\"small\" color=\"light\"\r\n        style=\"margin: 0;\">\r\n        <ion-icon slot=\"icon-only\" name=\"{{iconViews.operatorsIcon}}\" style=\"color: #000;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\" style=\"color: #000;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Analysis\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"tertiary\">\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Welcome !!</ion-card-subtitle>\r\n      <ion-card-title>{{currentUser.name}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <h2>\r\n        Register Operator: <br>\r\n      </h2>\r\n      <h4>#BR{{currentUser.registerOperator}} <br>\r\n      </h4>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card [style.display]=\"iconViews.operatorsIcon === 'people-circle'?'block':'none'\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Operator list</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list lines=\"full\" mode=\"ios\" class=\"animated bounceInUp\">\r\n        <ion-item-sliding *ngFor=\"let operator of operators\">\r\n          <ion-item>\r\n            <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label>{{ operator.name }}</ion-label>\r\n          </ion-item>\r\n          <ion-item-options>\r\n            <ion-item-option color=\"secondary\" expandable (click)=\"setCurrentUser(operator)\">\r\n              <ion-icon slot=\"bottom\" name=\"checkmark\"></ion-icon>\r\n              SELECT\r\n            </ion-item-option>\r\n            <ion-item-option (click)=\"delete(operator)\" color=\"danger\" expandable>\r\n              <ion-icon name='trash' slot=\"bottom\"></ion-icon>\r\n              DELETE\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </ion-list>\r\n      <br>\r\n      <ion-button expand=\"block\" color=\"tertiary\" (click)=\"addOperator()\">ADD OPERATOR\r\n        <ion-icon slot=\"end\" name=\"add-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-item class=\"item-padding\">\r\n      <ion-label>Process (required)</ion-label>\r\n      <ion-select [(ngModel)]=\"params.op\">\r\n        <ion-select-option value=\"DPV\">DPV</ion-select-option>\r\n        <ion-select-option value=\"Hibridização\">Hibridização</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>(optional data)</ion-card-subtitle>\r\n      <ion-card-title>Patient Data</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Patient's Name</ion-label>\r\n        <ion-input [(ngModel)]=\"patientParams.nome\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Patient's CPF</ion-label>\r\n        <ion-input [(ngModel)]=\"patientParams.cpf\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Patient Age</ion-label>\r\n        <ion-input [(ngModel)]=\"patientParams.idade\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Patient Weight (Kg)</ion-label>\r\n        <ion-input [(ngModel)]=\"patientParams.peso\"></ion-input>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-button expand=\"block\" color=\"tertiary\" (click)=\"goToChart()\">CONFIRM PROCESS\r\n        <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>");

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