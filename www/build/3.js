webpackJsonp([3],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsAccountPasswordPageModule", function() { return SettingsAccountPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_account_password__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsAccountPasswordPageModule = /** @class */ (function () {
    function SettingsAccountPasswordPageModule() {
    }
    SettingsAccountPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings_account_password__["a" /* SettingsAccountPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings_account_password__["a" /* SettingsAccountPasswordPage */]),
            ],
        })
    ], SettingsAccountPasswordPageModule);
    return SettingsAccountPasswordPageModule;
}());

//# sourceMappingURL=settings-account-password.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsAccountPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsAccountPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsAccountPasswordPage = /** @class */ (function () {
    function SettingsAccountPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserName = 'Tom';
    }
    SettingsAccountPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsAccountPasswordPage');
    };
    SettingsAccountPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-account-password',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\settings-account-password\settings-account-password.html"*/'<!--\n  Generated template for the SettingsAccountPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Account Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <div item-start>\n          Account\n        </div>\n        Tom\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Enter Original Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label floating>Enter New Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label floating>Enter New Password Again</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\settings-account-password\settings-account-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsAccountPasswordPage);
    return SettingsAccountPasswordPage;
}());

//# sourceMappingURL=settings-account-password.js.map

/***/ })

});
//# sourceMappingURL=3.js.map