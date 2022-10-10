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
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ "f8X/");






let ReportsPage = class ReportsPage {
    constructor(alertController, socialSharing) {
        this.alertController = alertController;
        this.socialSharing = socialSharing;
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
                buttons: [
                    {
                        text: 'Okay',
                        role: 'Okay',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm: blah');
                        },
                    },
                    {
                        text: 'Share',
                        handler: () => {
                            this.shareReport(report);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    shareReport(report) {
        this.socialSharing.share(JSON.stringify(report));
    }
};
ReportsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] }
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

/***/ "f8X/":
/*!****************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/social-sharing/__ivy_ngcc__/ngx/index.js ***!
  \****************************************************************************************/
/*! exports provided: SocialSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSharing", function() { return SocialSharing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ "aagO");




var SocialSharing = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharing.prototype.share = function (message, subject, file, url) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharing.prototype.shareWithOptions = function (options) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareViaEmail = function () { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToPhone = function (phone, message, fileOrFileArray, url) { return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsAppToPhone", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.pluginName = "SocialSharing";
    SocialSharing.plugin = "cordova-plugin-x-socialsharing";
    SocialSharing.pluginRef = "plugins.socialsharing";
    SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
SocialSharing.ɵfac = function SocialSharing_Factory(t) { return ɵSocialSharing_BaseFactory(t || SocialSharing); };
SocialSharing.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocialSharing, factory: function (t) { return SocialSharing.ɵfac(t); } });
var ɵSocialSharing_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SocialSharing);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocialSharing, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return SocialSharing;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["AwesomeCordovaNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9zb2NpYWwtc2hhcmluZy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7QUFDNUY7QUFHMEIsSUFvQ1MsaUNBQTBCO0FBQUM7QUFFdkM7QUFFa0M7QUFBTSxJQVU3RCw2QkFBSyxhQUFDLE9BQWdCLEVBQUUsT0FBZ0IsRUFBRSxJQUF3QixFQUFFLEdBQVk7QUFLbEMsSUFhOUMsd0NBQWdCLGFBQUMsT0FNaEI7QUFPRCxJQVlBLG1DQUFXLGFBQUMsT0FBZSxFQUFFLE9BQWdCLEVBQUUsT0FBZ0IsRUFBRSxLQUFjLEVBQUUsR0FBWTtBQVExRSxJQVNuQix1Q0FBZSxhQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsR0FBWTtBQVF2QyxJQVN0Qix3Q0FBZ0IsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPcEMsSUFXMUIsNERBQW9DLGFBQ2xDLE9BQWUsRUFDZixLQUFjLEVBQ2QsR0FBWSxFQUNaLGdCQUF5QjtBQVVmLElBS1oseUNBQWlCLGFBQUMsT0FBZSxFQUFFLEtBQWE7QUFPL0IsSUFVakIsd0NBQWdCLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0FBT3BCLElBVzFDLGtEQUEwQixhQUFDLFFBQWdCLEVBQUUsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0FBUTFELElBTWhDLG1DQUFXLGFBQUMsTUFBYyxFQUFFLFdBQW1CO0FBTzFDLElBS0wsd0NBQWdCO0FBUUwsSUFZWCxxQ0FBYSxhQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsRUFBWSxFQUNaLEVBQWEsRUFDYixHQUFjLEVBQ2QsS0FBeUI7QUFRNkIsSUFZeEQsZ0NBQVEsYUFBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPMUUsSUFNZiwrQ0FBdUIsYUFBQyxZQUFvQjtBQUtWLElBTWxDLHdDQUFnQixhQUFDLGVBQWtDO0FBS1IsSUFhM0MsK0NBQXVCLGFBQ3JCLEtBQWEsRUFDYixPQUFlLEVBQ2YsZUFBa0MsRUFDbEMsR0FBWTtBQUtxRjtBQUFnRDtBQUE2RDtBQUF1RDtBQUE0RjtpREEvUnBXLFVBQVU7Ozs7OzBCQUNMO0FBQUMsd0JBekNQO0FBQUUsRUF5Q2lDLDBCQUEwQjtBQUM1RCxTQURZLGFBQWE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU29jaWFsIFNoYXJpbmdcbiAqIEBwcmVtaWVyIHNvY2lhbC1zaGFyaW5nXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNoYXJlIHRleHQsIGZpbGVzLCBpbWFnZXMsIGFuZCBsaW5rcyB2aWEgc29jaWFsIG5ldHdvcmtzLCBzbXMsIGFuZCBlbWFpbC5cbiAqXG4gKiBGb3IgQnJvd3NlciB1c2FnZSBjaGVjayBvdXQgdGhlIFdlYiBTaGFyZSBBUEkgZG9jczogaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1NvY2lhbFNoYXJpbmctUGhvbmVHYXAtUGx1Z2luIzUtd2ViLXNoYXJlLWFwaVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTb2NpYWxTaGFyaW5nIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NvY2lhbC1zaGFyaW5nL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzb2NpYWxTaGFyaW5nOiBTb2NpYWxTaGFyaW5nKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBDaGVjayBpZiBzaGFyaW5nIHZpYSBlbWFpbCBpcyBzdXBwb3J0ZWRcbiAqIHRoaXMuc29jaWFsU2hhcmluZy5jYW5TaGFyZVZpYUVtYWlsKCkudGhlbigoKSA9PiB7XG4gKiAgIC8vIFNoYXJpbmcgdmlhIGVtYWlsIGlzIHBvc3NpYmxlXG4gKiB9KS5jYXRjaCgoKSA9PiB7XG4gKiAgIC8vIFNoYXJpbmcgdmlhIGVtYWlsIGlzIG5vdCBwb3NzaWJsZVxuICogfSk7XG4gKlxuICogLy8gU2hhcmUgdmlhIGVtYWlsXG4gKiB0aGlzLnNvY2lhbFNoYXJpbmcuc2hhcmVWaWFFbWFpbCgnQm9keScsICdTdWJqZWN0JywgWydyZWNpcGllbnRAZXhhbXBsZS5vcmcnXSkudGhlbigoKSA9PiB7XG4gKiAgIC8vIFN1Y2Nlc3MhXG4gKiB9KS5jYXRjaCgoKSA9PiB7XG4gKiAgIC8vIEVycm9yIVxuICogfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTb2NpYWxTaGFyaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teC1zb2NpYWxzaGFyaW5nJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zb2NpYWxzaGFyaW5nJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9Tb2NpYWxTaGFyaW5nLVBob25lR2FwLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTaGFyaW5nIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldFxuICAgKlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBUaGUgbWVzc2FnZSB5b3Ugd291bGQgbGlrZSB0byBzaGFyZS5cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ30gVGhlIHN1YmplY3RcbiAgICogQHBhcmFtIGZpbGUge3N0cmluZ3xzdHJpbmdbXX0gVVJMKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIGxvY2FsIHBhdGgocykgdG8gZmlsZShzKSBvciBpbWFnZShzKSwgb3IgYmFzZTY0IGRhdGEgb2YgYW4gaW1hZ2UuIE9ubHkgdGhlIGZpcnN0IGZpbGUvaW1hZ2Ugd2lsbCBiZSB1c2VkIG9uIFdpbmRvd3MgUGhvbmUuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gQSBVUkwgdG8gc2hhcmVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgfSlcbiAgc2hhcmUobWVzc2FnZT86IHN0cmluZywgc3ViamVjdD86IHN0cmluZywgZmlsZT86IHN0cmluZyB8IHN0cmluZ1tdLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgdXNpbmcgdGhlIHNoYXJlIHNoZWV0IHdpdGggYWRkaXRpb25hbCBvcHRpb25zIGFuZCByZXR1cm5zIGEgcmVzdWx0IG9iamVjdCBvciBhbiBlcnJvciBtZXNzYWdlIChyZXF1aXJlcyBwbHVnaW4gdmVyc2lvbiA1LjEuMCspXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtvYmplY3R9IFRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBtZXNzYWdlLCBzdWJqZWN0LCBmaWxlcywgdXJsIGFuZCBjaG9vc2VyVGl0bGUgcHJvcGVydGllcy5cbiAgICogQHBhcmFtIG9wdGlvbnMubWVzc2FnZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5zdWJqZWN0XG4gICAqIEBwYXJhbSBvcHRpb25zLmZpbGVzXG4gICAqIEBwYXJhbSBvcHRpb25zLnVybFxuICAgKiBAcGFyYW0gb3B0aW9ucy5jaG9vc2VyVGl0bGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVXaXRoT3B0aW9ucyhvcHRpb25zOiB7XG4gICAgbWVzc2FnZT86IHN0cmluZztcbiAgICBzdWJqZWN0Pzogc3RyaW5nO1xuICAgIGZpbGVzPzogc3RyaW5nW107XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGNob29zZXJUaXRsZT86IHN0cmluZztcbiAgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB5b3UgY2FuIHNoYXJlIHZpYSBhIHNwZWNpZmljIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gQXBwIG5hbWUgb3IgcGFja2FnZSBuYW1lLiBFeGFtcGxlczogaW5zdGFncmFtIG9yIGNvbS5hcHBsZS5zb2NpYWwuZmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDUsXG4gICAgZXJyb3JJbmRleDogNixcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgY2FuU2hhcmVWaWEoYXBwTmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nLCBzdWJqZWN0Pzogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIFR3aXR0ZXJcbiAgICpcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFUd2l0dGVyKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBGYWNlYm9va1xuICAgKlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBGYWNlYm9vayB3aXRoIGEgcGFzdGUgbWVzc2FnZSBoaW50XG4gICAqXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwYXN0ZU1lc3NhZ2VIaW50IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhRmFjZWJvb2tXaXRoUGFzdGVNZXNzYWdlSGludChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nLFxuICAgIHBhc3RlTWVzc2FnZUhpbnQ/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIEluc3RhZ3JhbVxuICAgKlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFJbnN0YWdyYW0obWVzc2FnZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIFdoYXRzQXBwXG4gICAqXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHAobWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIGEgV2hhdHNBcHAgQ29udGFjdFxuICAgKlxuICAgKiBAcGFyYW0gcmVjZWl2ZXIge3N0cmluZ30gUGFzcyBwaG9uZSBudW1iZXIgb24gQW5kcm9pZCwgYW5kIEFkZHJlc3Nib29rIElEIChhYmlkKSBvbiBpT1NcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfSBJbWFnZSB0byBzZW5kIChkb2VzIG5vdCB3b3JrIG9uIGlPU1xuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IExpbmsgdG8gc2VuZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwVG9SZWNlaXZlcihyZWNlaXZlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSB2aWEgU01TXG4gICAqXG4gICAqIEBwYXJhbSBtZXNzZ2Uge3N0cmluZ30gbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciB7c3RyaW5nfSBOdW1iZXIgb3IgbXVsdGlwbGUgbnVtYmVycyBzZXBlcmF0ZWQgYnkgY29tbWFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhU01TKG1lc3NnZTogc3RyaW5nLCBwaG9uZU51bWJlcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHlvdSBjYW4gc2hhcmUgdmlhIGVtYWlsXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIGNhblNoYXJlVmlhRW1haWwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIEVtYWlsXG4gICAqXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSB0byB7c3RyaW5nW119XG4gICAqIEBwYXJhbSBjYyB7c3RyaW5nW119IE9wdGlvbmFsXG4gICAqIEBwYXJhbSBiY2Mge3N0cmluZ1tdfSBPcHRpb25hbFxuICAgKiBAcGFyYW0gZmlsZXMge3N0cmluZ3xzdHJpbmdbXX0gT3B0aW9uYWwgVVJMIG9yIGxvY2FsIHBhdGggdG8gZmlsZShzKSB0byBhdHRhY2hcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgICBzdWNjZXNzSW5kZXg6IDYsXG4gICAgZXJyb3JJbmRleDogNyxcbiAgfSlcbiAgc2hhcmVWaWFFbWFpbChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc3ViamVjdDogc3RyaW5nLFxuICAgIHRvOiBzdHJpbmdbXSxcbiAgICBjYz86IHN0cmluZ1tdLFxuICAgIGJjYz86IHN0cmluZ1tdLFxuICAgIGZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW11cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIEFwcE5hbWVcbiAgICpcbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gQXBwIG5hbWUgb3IgcGFja2FnZSBuYW1lLiBFeGFtcGxlczogaW5zdGFncmFtIG9yIGNvbS5hcHBsZS5zb2NpYWwuZmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDUsXG4gICAgZXJyb3JJbmRleDogNixcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWEoYXBwTmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHN1YmplY3Q/OiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWZpbmVzIHRoZSBwb3B1cCBwb3NpdGlvbiBiZWZvcmUgY2FsbCB0aGUgc2hhcmUgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gdGFyZ2V0Qm91bmRzIHtzdHJpbmd9IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzZXRJUGFkUG9wdXBDb29yZGluYXRlcyh0YXJnZXRCb3VuZHM6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogU2F2ZSBhbiBhcnJheSBvZiBpbWFnZXMgdG8gdGhlIGNhbWVyYSByb2xsXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ3xzdHJpbmdbXX0gZmlsZU9yRmlsZUFycmF5IFNpbmdsZSBvciBtdWx0aXBsZSBmaWxlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+IH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIHNhdmVUb1Bob3RvQWxidW0oZmlsZU9yRmlsZUFycmF5OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3Qgd2l0aCBwaG9uZSBudW1iZXIuXG4gICAqXG4gICAqIEBwYXJhbSBwaG9uZSB7c3RyaW5nfSBQYXNzIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIGZpbGVPckZpbGVBcnJheSBmaWxlT3JGaWxlQXJyYXkgU2luZ2xlIG9yIG11bHRpcGxlIGZpbGVzXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gTGluayB0byBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHBUb1Bob25lKFxuICAgIHBob25lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGZpbGVPckZpbGVBcnJheTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgdXJsPzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

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
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ "f8X/");








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
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]],
        providers: [_awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]]
    })
], ReportsPageModule);



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map